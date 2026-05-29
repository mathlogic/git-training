import { CodeBracketSquareIcon, SparklesIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function TraineeCard({ trainee, gitUsername, gitEmail, branchName }) {
  // TASK-05-HINT: Update your name, team, and favoriteTool for Task 05
  const name = "Your Name";
  const email = "your.email@example.com";
  const favoriteTool = "Your Favorite Tool";
  const currentName = trainee?.name || name;
  const currentTool = trainee?.favoriteTool || favoriteTool;
  const currentGitUser = gitUsername || (trainee?.id || "your.git.user");
  const currentGitEmail = gitEmail || (trainee?.gitEmail || email);
  const currentBranch = branchName || `trainee/${currentGitUser}`;
  const initials = currentName.trim().slice(0, 2).toUpperCase();

  return (
    <div className="has-tooltip rounded-xl border border-gray-200 bg-white p-5 shadow-sm" data-tooltip="Active trainee profile">
      <div className="has-tooltip mb-3 flex items-center gap-3" data-tooltip="Avatar, name, and team">
        <div className="has-tooltip flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white" data-tooltip="Trainee initials">
          {initials}
        </div>
        <div className="has-tooltip" data-tooltip="Working user and git identity">
          <p className="font-semibold text-slate-900">{currentName}</p>
          <p className="text-sm text-gray-600">Git user: {currentGitUser}</p>
          <p className="text-xs text-gray-500">Git email: {currentGitEmail}</p>
          <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-indigo-700">
            <CodeBracketSquareIcon className="h-3.5 w-3.5" />
            Branch: {currentBranch}
          </p>
        </div>
      </div>
      <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500"><WrenchScrewdriverIcon className="h-3.5 w-3.5" />Favorite tool</p>
      <p className="mt-1 inline-flex items-center gap-1 text-sm text-slate-800"><SparklesIcon className="h-4 w-4 text-amber-500" />{currentTool}</p>
    </div>
  );
}
