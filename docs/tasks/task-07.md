# Task 07 - Update from base

## Objective
Rebase task branch on updated workspace.

## Task Info
- Code: `T07`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Rebase

## Hint (File + Line)
- File: `trainee/checkpoints/task-07.md`
- Line: `4`
- Required change: Rebase task branch on updated workspace.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Switch to your trainee branch: `git checkout trainee/<your-name>`
3. Update `trainee/checkpoints/task-07.md` using the hint at line `4`.
4. Complete the task requirement: Rebase task branch on updated workspace.
5. Run local validation: `python check.py --task 07`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push -u origin trainee/<your-name>`

## Expected Deliverable
- Branch exists: `trainee/<your-name>`
- File updated correctly: `trainee/checkpoints/task-07.md` (line 4)
- Task outcome achieved: Rebase task branch on updated workspace.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 07
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)

