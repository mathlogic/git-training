# Task 01 - Clone + branch setup

## Objective
Create trainee branch and add branch name.

## Task Info
- Code: `T01`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Branching basics

## Hint (File + Line)
- File: `trainee/checkpoints/task-01.md`
- Line: `1`
- Required change: Create trainee branch and add branch name.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-01`
3. Update `trainee/checkpoints/task-01.md` using the hint at line `1`.
4. Complete the task requirement: Create trainee branch and add branch name.
5. Run local validation: `python check.py --task 01`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-01`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-01`
- File updated correctly: `trainee/checkpoints/task-01.md` (line 1)
- Task outcome achieved: Create trainee branch and add branch name.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 01
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-01`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
