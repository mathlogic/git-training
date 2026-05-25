# Task 03 - Basic commit

## Objective
Change one title line and commit.

## Task Info
- Code: `T03`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Add, commit, push

## Hint (File + Line)
- File: `playground/ui/title.txt`
- Line: `1`
- Required change: Change one title line and commit.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-03`
3. Update `playground/ui/title.txt` using the hint at line `1`.
4. Complete the task requirement: Change one title line and commit.
5. Run local validation: `python check.py --task 03`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-03`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-03`
- File updated correctly: `playground/ui/title.txt` (line 1)
- Task outcome achieved: Change one title line and commit.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 03
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-03`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
