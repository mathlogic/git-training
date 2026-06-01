function formatTaskNumber(taskId) {
  return String(taskId).padStart(2, "0");
}

function buildCommonContext(taskId, gitUsername) {
  const safeUsername = gitUsername || "your-name";
  return {
    taskNumber: formatTaskNumber(taskId),
    workspaceBranch: `workspace/${safeUsername}`,
    traineeBranch: `trainee/${safeUsername}`
  };
}

const TASK_NOTES = {
  1: {
    summary: "Create your personal trainee branch and record that exact branch name in the checkpoint file.",
    steps: [
      "Switch to your workspace branch and pull latest updates.",
      "Create your one long-lived branch as trainee/<your-name>.",
      "Open trainee/checkpoints in VS Code Explorer; if folder or file is missing, create checkpoints/task-01.md manually.",
      "Write your exact current branch name on line 1 (example: trainee/suraj.kumar).",
      "Run validation before commit and push."
    ],
    checks: [
      "Current branch matches trainee/<name>.",
      "Hint file exists and hint line has content.",
      "Checkpoint line includes your current branch name."
    ],
    pitfalls: [
      "Creating task-specific branches like trainee/<name>/task-01.",
      "Writing a different branch name than the one currently checked out."
    ]
  },
  2: {
    summary: "Set Git identity and document both user.name and user.email in the checkpoint file.",
    steps: [
      "Verify user.name and user.email are configured in Git.",
      "Write both values into trainee/checkpoints/task-02.md around the hint line.",
      "Validate and then commit with a clean message."
    ],
    checks: [
      "git config user.name exists.",
      "git config user.email exists.",
      "Checkpoint file contains both values."
    ],
    pitfalls: [
      "Setting local config in another repository by mistake.",
      "Adding only name or only email in checkpoint file."
    ]
  },
  3: {
    summary: "Edit the target title line and ensure your latest commit includes that file.",
    steps: [
      "Change playground/ui/title.txt line 1 as instructed.",
      "Stage only intended edits.",
      "Commit with a clear message and run check.py."
    ],
    checks: [
      "Branch and hint file checks pass.",
      "Warning appears if latest commit does not touch playground/ui/title.txt."
    ],
    pitfalls: [
      "Editing a different file but forgetting the target file commit.",
      "Skipping commit before running check."
    ]
  },
  4: {
    summary: "Improve repository hygiene by adding required ignore patterns.",
    steps: [
      "Open .gitignore and add .env, *.log, and .DS_Store.",
      "Avoid duplicates if those entries already exist.",
      "Run validation and commit."
    ],
    checks: [
      ".gitignore contains all required patterns: .env, *.log, .DS_Store."
    ],
    pitfalls: [
      "Typing patterns incorrectly (example: *log instead of *.log).",
      "Adding comments only without actual patterns."
    ]
  },
  5: {
    summary: "Practice professional commit messaging and avoid WIP-style subjects.",
    steps: [
      "Update trainee/checkpoints/task-05.md at the hinted line.",
      "Commit with a clear subject that does not include WIP.",
      "Re-run validation if commit message needs correction."
    ],
    checks: [
      "Latest commit message exists.",
      "Latest commit subject does not contain WIP (case-insensitive)."
    ],
    pitfalls: [
      "Using messages like WIP, temp, or quick fix.",
      "Running check before creating the final commit."
    ]
  },
  6: {
    summary: "Push your trainee branch with upstream tracking and prepare PR basics.",
    steps: [
      "Update trainee/checkpoints/task-06.md at the hinted line.",
      "Commit your changes.",
      "Push with -u so upstream tracking is configured."
    ],
    checks: [
      "Current branch has upstream tracking configured."
    ],
    pitfalls: [
      "Using git push without -u on first push.",
      "Pushing another branch instead of trainee/<name>."
    ]
  },
  7: {
    summary: "Rebase your trainee branch on latest workspace branch and keep history updated.",
    steps: [
      "Fetch remote updates.",
      "Run rebase against origin/workspace/<your-name>.",
      "Resolve conflicts if any, then continue rebase.",
      "Validate after rebase completes."
    ],
    checks: [
      "Reflog contains evidence of rebase activity."
    ],
    pitfalls: [
      "Running merge instead of rebase for this task.",
      "Leaving rebase in incomplete state."
    ]
  },
  8: {
    summary: "Resolve conflict cleanly and remove all conflict markers from tracked files.",
    steps: [
      "Fix the conflicted lines in playground/config/app-mode.txt.",
      "Stage resolved file.",
      "Commit resolution and validate."
    ],
    checks: [
      "No conflict markers remain (<<<<<<<, =======, >>>>>>>)."
    ],
    pitfalls: [
      "Committing with unresolved markers.",
      "Resolving content but forgetting to stage file."
    ]
  },
  9: {
    summary: "Use stash to park unfinished work, switch context, and restore safely.",
    steps: [
      "Create a temporary uncommitted change in subtitle file.",
      "Run git stash, switch branch/context, then return.",
      "Apply stashed changes and finish task edit.",
      "Validate and commit."
    ],
    checks: [
      "Stash activity detected via stash list or stash reflog."
    ],
    pitfalls: [
      "Using stash but dropping it before task completion.",
      "Applying wrong stash entry when multiple stashes exist."
    ]
  },
  10: {
    summary: "Recover a deleted file safely and keep it tracked in Git.",
    steps: [
      "If the file is deleted, restore playground/docs/faq.txt from Git history.",
      "Confirm file is tracked and present.",
      "Run validation."
    ],
    checks: [
      "playground/docs/faq.txt exists and is tracked by Git."
    ],
    pitfalls: [
      "Recreating file manually with wrong content.",
      "Restoring file but not adding/tracking it correctly."
    ]
  },
  11: {
    summary: "Use amend to fix your most recent commit message/history entry.",
    steps: [
      "Make required checkpoint update.",
      "Use git commit --amend to revise last commit message/content.",
      "Run validation after amend."
    ],
    checks: [
      "Reflog contains amend activity."
    ],
    pitfalls: [
      "Creating new commit instead of amending last one.",
      "Amending before staging intended changes."
    ]
  },
  12: {
    summary: "Clean noisy history by squashing multiple commits into a compact branch history.",
    steps: [
      "Create/update required checkpoint content.",
      "Run interactive rebase on workspace base branch.",
      "Squash/fixup noisy commits into one clean commit.",
      "Validate commit count compactness."
    ],
    checks: [
      "Matching workspace/<name> branch is detected.",
      "Commit count since workspace base is compact (<= 2)."
    ],
    pitfalls: [
      "Squashing against wrong base branch.",
      "Force-pushing without verifying rewritten history."
    ]
  },
  13: {
    summary: "Bring trainer hotfix into your branch using cherry-pick.",
    steps: [
      "Get trainer-provided commit hash.",
      "Run git cherry-pick <hash> on trainee branch.",
      "Resolve conflicts if prompted, then continue.",
      "Validate cherry-pick evidence."
    ],
    checks: [
      "Reflog contains cherry-pick activity."
    ],
    pitfalls: [
      "Copying file manually instead of cherry-pick.",
      "Cherry-picking while on wrong branch."
    ]
  },
  14: {
    summary: "Undo a bad change safely using git revert (without rewriting shared history).",
    steps: [
      "Identify incorrect commit hash.",
      "Run git revert <hash> to create inverse commit.",
      "Validate revert evidence and result."
    ],
    checks: [
      "Reflog contains revert activity."
    ],
    pitfalls: [
      "Using reset instead of revert for shared history flow.",
      "Reverting multiple commits unintentionally."
    ]
  },
  15: {
    summary: "Create and push an annotated tag for Task 15 milestone.",
    steps: [
      "Ensure version file update is committed.",
      "Create annotated tag with prefix task-15-<name>.",
      "Push tag to remote and validate."
    ],
    checks: [
      "Tag exists with prefix task-15-."
    ],
    pitfalls: [
      "Creating lightweight tag instead of annotated tag.",
      "Creating tag with wrong prefix."
    ]
  },
  16: {
    summary: "Use bisect to isolate a bad commit and record evidence in bisect log file.",
    steps: [
      "Start bisect with known good and bad points.",
      "Mark commits good/bad until culprit is found.",
      "Reset bisect mode.",
      "Write identified bad commit evidence in playground/debug/bisect-log.txt."
    ],
    checks: [
      "Bisect evidence file exists and contains expected content."
    ],
    pitfalls: [
      "Forgetting git bisect reset after investigation.",
      "Recording vague notes without commit hash evidence."
    ]
  },
  17: {
    summary: "Recover from an incorrect reset using reflog-based history recovery.",
    steps: [
      "Simulate or identify incorrect history movement.",
      "Inspect reflog to find safe recovery point.",
      "Recover branch state using a reflog hash.",
      "Document checkpoint and validate."
    ],
    checks: [
      "Reflog contains reset or recovery-related activity."
    ],
    pitfalls: [
      "Recovering to wrong reflog entry.",
      "Using hard reset without confirming target hash."
    ]
  },
  18: {
    summary: "Use fixup + autosquash to produce clean, review-friendly commit history.",
    steps: [
      "Create fixup commit targeting an earlier commit.",
      "Run interactive rebase with --autosquash.",
      "Confirm history is clean and task checkpoint is updated.",
      "Validate autosquash evidence."
    ],
    checks: [
      "Reflog contains fixup/autosquash/rebase -i activity."
    ],
    pitfalls: [
      "Creating normal commit instead of fixup commit.",
      "Running rebase -i without --autosquash."
    ]
  },
  19: {
    summary: "Show release workflow understanding while staying compatible with current branch checker.",
    steps: [
      "Stay on trainee/<your-name> (current checker requires this branch pattern).",
      "Add release flow evidence in version file such as release/<version> note.",
      "Commit and validate."
    ],
    checks: [
      "Release evidence exists through branch or file content.",
      "Global branch pattern check trainee/<name> still passes."
    ],
    pitfalls: [
      "Switching to release/<version> branch and failing branch pattern check.",
      "Adding release intent without explicit release/<version> evidence."
    ]
  },
  20: {
    summary: "Prepare final submission evidence with commands used and outcomes.",
    steps: [
      "Create/update evidence/final-summary.md with non-empty content.",
      "Include task completion summary and command evidence.",
      "Validate and commit final evidence."
    ],
    checks: [
      "Final evidence file exists and is not empty."
    ],
    pitfalls: [
      "Creating empty file with only heading.",
      "Missing command evidence details in summary."
    ]
  }
};

function commandsForTask(taskId, context) {
  const validate = `python check.py --task ${context.taskNumber}`;
  const baseStart = [
    { label: "Checkout Workspace", command: `git checkout ${context.workspaceBranch}` },
    { label: "Pull Latest", command: `git pull origin ${context.workspaceBranch}` }
  ];

  switch (taskId) {
    case 1:
      return [
        ...baseStart,
        { label: "Create Trainee Branch", command: `git checkout -b ${context.traineeBranch}` },
        { label: "Run Validation", command: validate },
        { label: "Push Branch", command: `git push -u origin ${context.traineeBranch}` }
      ];
    case 2:
      return [
        { label: "Get user.name", command: "git config --get user.name" },
        { label: "Get user.email", command: "git config --get user.email" },
        { label: "Set user.name", command: 'git config user.name "Your Name"' },
        { label: "Set user.email", command: 'git config user.email "you@example.com"' },
        { label: "Run Validation", command: validate }
      ];
    case 7:
      return [
        { label: "Switch Trainee Branch", command: `git checkout ${context.traineeBranch}` },
        { label: "Fetch Remote", command: "git fetch origin" },
        { label: "Rebase Workspace", command: `git rebase origin/${context.workspaceBranch}` },
        { label: "Run Validation", command: validate }
      ];
    case 8:
      return [
        { label: "Check Status", command: "git status" },
        { label: "Search Conflict Markers", command: "git grep -n \"<<<<<<<\\|=======\\|>>>>>>>\"" },
        { label: "Stage Resolved Files", command: "git add <resolved-file>" },
        { label: "Run Validation", command: validate }
      ];
    case 9:
      return [
        { label: "Stash WIP", command: "git stash push -m \"task-09-wip\"" },
        { label: "List Stashes", command: "git stash list" },
        { label: "Apply Stash", command: "git stash pop" },
        { label: "Run Validation", command: validate }
      ];
    case 10:
      return [
        { label: "Restore File", command: "git restore playground/docs/faq.txt" },
        { label: "Check Tracking", command: "git ls-files --error-unmatch playground/docs/faq.txt" },
        { label: "Run Validation", command: validate }
      ];
    case 11:
      return [
        { label: "Stage Changes", command: "git add ." },
        { label: "Amend Commit", command: "git commit --amend -m \"task-11: clean amended message\"" },
        { label: "Run Validation", command: validate }
      ];
    case 12:
      return [
        { label: "Switch Trainee Branch", command: `git checkout ${context.traineeBranch}` },
        { label: "Interactive Rebase", command: `git rebase -i origin/${context.workspaceBranch}` },
        { label: "Run Validation", command: validate }
      ];
    case 13:
      return [
        { label: "Switch Trainee Branch", command: `git checkout ${context.traineeBranch}` },
        { label: "Cherry-pick", command: "git cherry-pick <trainer-commit-hash>" },
        { label: "Run Validation", command: validate }
      ];
    case 14:
      return [
        { label: "Find Commit", command: "git log --oneline -20" },
        { label: "Revert Commit", command: "git revert <wrong-commit-hash>" },
        { label: "Run Validation", command: validate }
      ];
    case 15:
      return [
        { label: "Create Annotated Tag", command: "git tag -a task-15-<name> -m \"Task 15 tag\"" },
        { label: "Push Tag", command: "git push origin task-15-<name>" },
        { label: "Run Validation", command: validate }
      ];
    case 16:
      return [
        { label: "Bisect Start", command: "git bisect start" },
        { label: "Mark Bad", command: "git bisect bad" },
        { label: "Mark Good", command: "git bisect good <good-commit-hash>" },
        { label: "Bisect Reset", command: "git bisect reset" },
        { label: "Run Validation", command: validate }
      ];
    case 17:
      return [
        { label: "Reflog History", command: "git reflog -n 20" },
        { label: "Recover State", command: "git reset --soft <recovery-hash>" },
        { label: "Run Validation", command: validate }
      ];
    case 18:
      return [
        { label: "Create Fixup", command: "git commit --fixup <target-commit-hash>" },
        { label: "Autosquash Rebase", command: `git rebase -i --autosquash origin/${context.workspaceBranch}` },
        { label: "Run Validation", command: validate }
      ];
    case 19:
      return [
        { label: "Stay on Trainee Branch", command: `git checkout ${context.traineeBranch}` },
        { label: "Add Release Evidence", command: "echo release/<version> >> playground/releases/version.txt" },
        { label: "Run Validation", command: validate }
      ];
    case 20:
      return [
        { label: "Stage Summary", command: "git add evidence/final-summary.md" },
        { label: "Commit Summary", command: "git commit -m \"task-20: final evidence\"" },
        { label: "Run Validation", command: validate }
      ];
    default:
      return [
        ...baseStart,
        { label: "Switch Trainee Branch", command: `git checkout ${context.traineeBranch}` },
        { label: "Run Validation", command: validate },
        { label: "Push Branch", command: `git push -u origin ${context.traineeBranch}` }
      ];
  }
}

export function getTaskPlaybook(taskId, gitUsername) {
  const context = buildCommonContext(taskId, gitUsername);
  const detail = TASK_NOTES[taskId] || {
    summary: "Complete the task objective using hint file + line guidance and validate before push.",
    steps: ["Follow task objective and run check.py."],
    checks: ["Task validation passes with Result: PASS."],
    pitfalls: []
  };

  return {
    ...detail,
    commands: commandsForTask(taskId, context)
  };
}
