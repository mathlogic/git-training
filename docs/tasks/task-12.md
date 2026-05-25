# Task 12 - Squash history

## Objective
Squash 3 noisy commits into 1 clean commit.

## Task Info
- Code: `T12`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Interactive rebase

## Hint (File + Line)
- File: `trainee/checkpoints/task-12.md`
- Line: `5`
- Required change: Squash 3 noisy commits into 1 clean commit.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-12`
3. Update `trainee/checkpoints/task-12.md` using the hint at line `5`.
4. Complete the task requirement: Squash 3 noisy commits into 1 clean commit.
5. Run local validation: `python check.py --task 12`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-12`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-12`
- File updated correctly: `trainee/checkpoints/task-12.md` (line 5)
- Task outcome achieved: Squash 3 noisy commits into 1 clean commit.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 12
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-12`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
