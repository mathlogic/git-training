// TASK-06-HINT: Add a new task object here for Task 06
export const starterTasks = [
  {
    id: 1,
    code: "T01",
    title: "Clone + branch setup",
    phase: "core",
    points: 5,
    hintFile: "trainee/checkpoints/task-01.md",
    hintLine: 1,
    expected: "Create trainee branch and add branch name.",
    concept: "Branching basics"
  },
  {
    id: 2,
    code: "T02",
    title: "Git identity",
    phase: "core",
    points: 5,
    hintFile: "trainee/checkpoints/task-02.md",
    hintLine: 2,
    expected: "Record git config user.name and user.email.",
    concept: "Git config"
  },
  {
    id: 3,
    code: "T03",
    title: "Basic commit",
    phase: "core",
    points: 5,
    hintFile: "playground/ui/title.txt",
    hintLine: 1,
    expected: "Change one title line and commit.",
    concept: "Add, commit, push"
  },
  {
    id: 4,
    code: "T04",
    title: ".gitignore hygiene",
    phase: "core",
    points: 5,
    hintFile: ".gitignore",
    hintLine: 1,
    expected: "Add .env, *.log, .DS_Store.",
    concept: "Repo hygiene"
  },
  {
    id: 5,
    code: "T05",
    title: "Commit message quality",
    phase: "core",
    points: 5,
    hintFile: "trainee/checkpoints/task-05.md",
    hintLine: 3,
    expected: "Use clean commit format (no WIP).",
    concept: "Commit standards"
  },
  {
    id: 6,
    code: "T06",
    title: "Push + PR basics",
    phase: "core",
    points: 5,
    hintFile: "trainee/checkpoints/task-06.md",
    hintLine: 2,
    expected: "Push branch and open PR.",
    concept: "Pull request flow"
  },
  {
    id: 7,
    code: "T07",
    title: "Update from base",
    phase: "core",
    points: 5,
    hintFile: "trainee/checkpoints/task-07.md",
    hintLine: 4,
    expected: "Rebase task branch on updated workspace.",
    concept: "Rebase"
  },
  {
    id: 8,
    code: "T08",
    title: "Merge conflict resolve",
    phase: "core",
    points: 5,
    hintFile: "playground/config/app-mode.txt",
    hintLine: 2,
    expected: "Resolve prepared conflict cleanly.",
    concept: "Conflict resolution"
  },
  {
    id: 9,
    code: "T09",
    title: "Stash workflow",
    phase: "core",
    points: 5,
    hintFile: "playground/ui/subtitle.txt",
    hintLine: 1,
    expected: "Stash WIP, switch, return, apply stash.",
    concept: "Stash"
  },
  {
    id: 10,
    code: "T10",
    title: "Recover deleted file",
    phase: "core",
    points: 5,
    hintFile: "playground/docs/faq.txt",
    hintLine: 1,
    expected: "Restore accidentally deleted file.",
    concept: "File recovery"
  },
  {
    id: 11,
    code: "T11",
    title: "Amend commit",
    phase: "core",
    points: 5,
    hintFile: "trainee/checkpoints/task-11.md",
    hintLine: 3,
    expected: "Fix previous commit message via amend.",
    concept: "Amend"
  },
  {
    id: 12,
    code: "T12",
    title: "Squash history",
    phase: "core",
    points: 5,
    hintFile: "trainee/checkpoints/task-12.md",
    hintLine: 5,
    expected: "Squash 3 noisy commits into 1 clean commit.",
    concept: "Interactive rebase"
  },
  {
    id: 13,
    code: "T13",
    title: "Cherry-pick",
    phase: "core",
    points: 5,
    hintFile: "playground/releases/hotfix-note.txt",
    hintLine: 1,
    expected: "Cherry-pick trainer hotfix commit.",
    concept: "Cherry-pick"
  },
  {
    id: 14,
    code: "T14",
    title: "Revert safely",
    phase: "core",
    points: 5,
    hintFile: "playground/ui/notice.txt",
    hintLine: 2,
    expected: "Revert wrong change with git revert.",
    concept: "Revert"
  },
  {
    id: 15,
    code: "T15",
    title: "Tagging",
    phase: "core",
    points: 5,
    hintFile: "playground/releases/version.txt",
    hintLine: 1,
    expected: "Create annotated tag task-15-<name>.",
    concept: "Tagging"
  },
  {
    id: 16,
    code: "T16",
    title: "Bisect",
    phase: "advanced",
    points: 5,
    hintFile: "playground/debug/bisect-log.txt",
    hintLine: 1,
    expected: "Identify bad commit hash using bisect.",
    concept: "Bisect"
  },
  {
    id: 17,
    code: "T17",
    title: "Reflog recovery",
    phase: "advanced",
    points: 5,
    hintFile: "trainee/checkpoints/task-17.md",
    hintLine: 4,
    expected: "Recover from wrong reset using reflog.",
    concept: "Reflog"
  },
  {
    id: 18,
    code: "T18",
    title: "Autosquash cleanup",
    phase: "advanced",
    points: 5,
    hintFile: "trainee/checkpoints/task-18.md",
    hintLine: 3,
    expected: "Use fixup commit + autosquash rebase.",
    concept: "Autosquash"
  },
  {
    id: 19,
    code: "T19",
    title: "Release branch flow",
    phase: "advanced",
    points: 5,
    hintFile: "playground/releases/version.txt",
    hintLine: 1,
    expected: "Create release/<version> flow commit.",
    concept: "Release workflow"
  },
  {
    id: 20,
    code: "T20",
    title: "PR polish + evidence",
    phase: "advanced",
    points: 5,
    hintFile: "evidence/final-summary.md",
    hintLine: 1,
    expected: "Final summary with command evidence.",
    concept: "PR quality"
  }
];
