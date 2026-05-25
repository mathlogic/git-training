# Task 08 - Merge conflict resolve

## Objective
Resolve prepared conflict cleanly.

## Task Info
- Code: `T08`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Conflict resolution

## Hint (File + Line)
- File: `playground/config/app-mode.txt`
- Line: `2`
- Required change: Resolve prepared conflict cleanly.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-08`
3. Update `playground/config/app-mode.txt` using the hint at line `2`.
4. Complete the task requirement: Resolve prepared conflict cleanly.
5. Run local validation: `python check.py --task 08`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-08`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-08`
- File updated correctly: `playground/config/app-mode.txt` (line 2)
- Task outcome achieved: Resolve prepared conflict cleanly.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 08
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-08`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
