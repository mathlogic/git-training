import { Suspense, lazy, useEffect, useState } from "react";
import Header from "./components/Header";
import GitBranchFlowCard from "./components/GitBranchFlowCard";
import GitDeliveryFlowCard from "./components/GitDeliveryFlowCard";
import TraineeCard from "./components/TraineeCard";
import TodoList from "./components/TodoList";
import CopyCommandButton from "./components/CopyCommandButton";
import { starterTasks } from "./data/starterTasks";
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathRoundedSquareIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  RocketLaunchIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

const defaultWorkingUser = {
  id: "working-user",
  name: "Working User",
  gitUsername: "working.user",
  gitEmail: "not-set@example.com",
  favoriteTool: "VS Code"
};

const ACTIVE_USER_KEY = "git-training-active-user";
const VALIDATION_CACHE_KEY = "git-training-validation-cache-v1";
const statCards = [
  { key: "tasks", label: "Tasks completed", Icon: CheckCircleIcon },
  { key: "score", label: "Score so far", Icon: TrophyIcon },
  { key: "core", label: "Core tasks", Icon: AcademicCapIcon },
  { key: "advanced", label: "Advanced tasks", Icon: RocketLaunchIcon }
];
const GitGraphVisualizer = lazy(() => import("./components/GitGraphVisualizer"));

function getTaskBranchName(gitUsername) {
  return `trainee/${gitUsername}`;
}

function deriveGitUsername(name, email) {
  const emailPart = (email || "").split("@")[0].trim();
  const namePart = (name || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ".")
    .replace(/[^a-z0-9._-]/g, "");
  return emailPart || namePart || "working.user";
}

function createWorkingUser(gitUser) {
  const name = gitUser?.name?.trim() || "Working User";
  const email = gitUser?.email?.trim() || "not-set@example.com";
  const gitUsername = gitUser?.username?.trim() || deriveGitUsername(name, email);
  const id = gitUsername.toLowerCase().replace(/[^a-z0-9._-]/g, "") || "working-user";
  return {
    id,
    name,
    gitUsername,
    gitEmail: email,
    favoriteTool: "VS Code"
  };
}

export default function App() {
  const [apiStatus, setApiStatus] = useState("checking");
  const [users, setUsers] = useState([defaultWorkingUser]);
  const [activeUserId, setActiveUserId] = useState(() => localStorage.getItem(ACTIVE_USER_KEY) || defaultWorkingUser.id);
  const [passedTaskIds, setPassedTaskIds] = useState(() => {
    try {
      const raw = localStorage.getItem(VALIDATION_CACHE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => setApiStatus(response.ok ? "connected" : "error"))
      .catch(() => setApiStatus("error"));

    fetch("http://localhost:8000/git-user")
      .then((response) => response.json())
      .then((gitUser) => {
        const workingUser = createWorkingUser(gitUser);
        setUsers([workingUser]);
        setActiveUserId(workingUser.id);
      })
      .catch(() => {
        setUsers([defaultWorkingUser]);
      });

    const loadValidations = () => {
      fetch("http://localhost:8000/task-validations")
        .then((response) => response.json())
        .then((payload) => {
          const next = Array.isArray(payload?.passedTaskIds) ? payload.passedTaskIds : [];
          setPassedTaskIds(next);
          localStorage.setItem(VALIDATION_CACHE_KEY, JSON.stringify(next));
        })
        .catch(() => {
          // Keep the last successful validation state on transient API failures.
        });
    };

    loadValidations();
    const timer = setInterval(loadValidations, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem(ACTIVE_USER_KEY, activeUserId);
  }, [activeUserId]);

  // TASK-03-HINT: Change this title for Task 03
  const pageTitle = "Git and GitHub Training Lab";

  const activeUser = users.find((user) => user.id === activeUserId) || users[0];
  const workflowCommands = [
    {
      command: `git checkout workspace/${activeUser.gitUsername}`,
      tip: "Switch to your personal workspace base branch before starting any task."
    },
    {
      command: `git pull origin workspace/${activeUser.gitUsername}`,
      tip: "Get the latest instructor updates from remote into your workspace branch."
    },
    {
      command: `git checkout -b trainee/${activeUser.gitUsername}`,
      tip: "Create one trainee branch from workspace and use it for all tasks."
    },
    {
      command: "python check.py --task XX",
      tip: "Run local validation for this task before committing or opening PR."
    },
    {
      command: "git status",
      tip: "Quickly check which files are changed, staged, or untracked."
    },
    {
      command: "git add .",
      tip: "Stage your current changes so they are included in the next commit."
    },
    {
      command: 'git commit -m "Task XX: clear message"',
      tip: "Create a clean commit with a meaningful message and no WIP wording."
    },
    {
      command: `git push -u origin trainee/${activeUser.gitUsername}`,
      tip: "Push your trainee branch so you can open a pull request on GitHub."
    },
    {
      command: "git fetch origin",
      tip: "Download latest remote refs without changing your current branch files."
    },
    {
      command: `git rebase origin/workspace/${activeUser.gitUsername}`,
      tip: "Replay your task commits on top of the latest workspace branch updates."
    },
    {
      command: "git stash",
      tip: "Temporarily save uncommitted work so you can switch branches safely."
    },
    {
      command: "git stash pop",
      tip: "Restore the most recent stashed changes back into your working tree."
    },
    {
      command: "git cherry-pick <commit-hash>",
      tip: "Copy one specific commit from another branch into your current branch."
    },
    {
      command: "git revert <commit-hash>",
      tip: "Safely undo a bad commit by creating a new inverse commit."
    },
    {
      command: "git log --oneline --graph --decorate -10",
      tip: "View a compact branch history graph to understand commit flow."
    }
  ];
  const tasks = starterTasks.map((task) => ({ ...task, completed: passedTaskIds.includes(task.id) }));
  const completedTasks = tasks.filter((task) => task.completed).length;
  const completedCore = tasks.filter((task) => task.completed && task.phase === "core").length;
  const completedAdvanced = tasks.filter((task) => task.completed && task.phase === "advanced").length;
  const score = tasks.filter((task) => task.completed).reduce((sum, task) => sum + task.points, 0);
  const progress = Math.round((completedTasks / tasks.length) * 100);

  return (
    <main className="min-h-screen bg-slate-100 py-6">
      <div className="has-tooltip w-full space-y-6 px-4 sm:px-6 lg:px-10" data-tooltip="Main training dashboard">
        <Header title={pageTitle} apiStatus={apiStatus} />
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map(({ key, label, Icon }) => {
            const value =
              key === "tasks" ? `${completedTasks} / 20` :
              key === "score" ? `${score} / 100` :
              key === "core" ? `${completedCore} / 15` :
              `${completedAdvanced} / 5`;
            return (
              <div key={key} className="has-tooltip rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" data-tooltip={label}>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm text-gray-600">{label}</p>
                  <Icon className="h-5 w-5 text-slate-500" />
                </div>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            );
          })}
        </section>
        <section className="has-tooltip rounded-xl border border-gray-200 bg-white p-4 shadow-sm" data-tooltip="Overall progress bar">
          <div className="has-tooltip mb-2 flex items-center justify-between" data-tooltip="Progress percentage">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><ChartBarSquareIcon className="h-4 w-4" />User Progress</p>
            <p className="text-sm text-slate-600">{progress}%</p>
          </div>
          <div className="has-tooltip h-3 w-full overflow-hidden rounded-full bg-slate-200" data-tooltip="Task completion meter">
            <div
              className="has-tooltip h-3 rounded-full bg-emerald-500 transition-all"
              style={{ width: `${progress}%` }}
              data-tooltip={`${progress}% complete`}
            />
          </div>
        </section>
        <section className="has-tooltip" data-tooltip="Interactive Git graph for commits, branches, merges, rebases, and HEAD">
          <Suspense fallback={<div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-slate-500 shadow-sm">Loading Git Graph Visualizer...</div>}>
            <GitGraphVisualizer gitUsername={activeUser.gitUsername} />
          </Suspense>
        </section>
        <section className="grid gap-6 xl:grid-cols-12">
          <div className="has-tooltip space-y-4 xl:col-span-3" data-tooltip="Trainee controls and profile">
            <div className="has-tooltip rounded-xl border border-gray-200 bg-white p-4 shadow-sm" data-tooltip="Switch active trainee profile">
              <label htmlFor="trainee" className="mb-2 block text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2"><AdjustmentsHorizontalIcon className="h-4 w-4" />User Working</span>
              </label>
              <select
                id="trainee"
                value={activeUser.id}
                onChange={(event) => setActiveUserId(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.gitUsername})
                  </option>
                ))}
              </select>
            </div>
            <TraineeCard
              trainee={activeUser}
              gitUsername={activeUser.gitUsername}
              gitEmail={activeUser.gitEmail}
              branchName={getTaskBranchName(activeUser.gitUsername)}
            />
            <GitBranchFlowCard />
          </div>
          <div className="has-tooltip xl:col-span-6" data-tooltip="Task workspace with hover preview cards">
            <TodoList tasks={tasks} gitUsername={activeUser.gitUsername} />
          </div>
          <div className="has-tooltip space-y-4 xl:col-span-3" data-tooltip="Route checklist and workflow guidance">
            <div className="has-tooltip rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm" data-tooltip="Backend endpoints trainees will use">
              <h2 className="mb-2 inline-flex items-center gap-2 font-semibold"><CloudIcon className="h-4 w-4 text-sky-600" />API Routes</h2>
              <p>GET /</p>
              <p>GET /git-user</p>
              <p>GET /todos</p>
              <p>POST /todos</p>
              <p className="mt-3 text-gray-400">GET /health (Task 07)</p>
              <p className="text-gray-400">GET /version (Task 08)</p>
            </div>
            <div className="has-tooltip rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm" data-tooltip="Branching workflow reminders">
              <h2 className="mb-2 inline-flex items-center gap-2 font-semibold"><CodeBracketSquareIcon className="h-4 w-4 text-emerald-600" />Workflow Notes</h2>
              <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
                {workflowCommands.map((item) => (
                  <div
                    key={item.command}
                    className="has-tooltip flex items-start justify-between gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-2"
                    data-tooltip={item.tip}
                  >
                    <p className="inline-flex items-start gap-2 text-xs text-slate-700">
                      <ArrowPathRoundedSquareIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <code className="break-all">{item.command}</code>
                    </p>
                    <CopyCommandButton command={item.command} />
                  </div>
                ))}
              </div>
            </div>
            <GitDeliveryFlowCard />
          </div>
        </section>
      </div>
    </main>
  );
}
