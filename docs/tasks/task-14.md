# Task 14 - Revert safely

## Objective
Revert wrong change with git revert.

## Task Info
- Code: `T14`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Revert

## Hint (File + Line)
- File: `playground/ui/notice.txt`
- Line: `2`
- Required change: Revert wrong change with git revert.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-14`
3. Update `playground/ui/notice.txt` using the hint at line `2`.
4. Complete the task requirement: Revert wrong change with git revert.
5. Run local validation: `python check.py --task 14`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-14`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-14`
- File updated correctly: `playground/ui/notice.txt` (line 2)
- Task outcome achieved: Revert wrong change with git revert.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 14
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-14`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
