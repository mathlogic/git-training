# Task 16 - Bisect

## Objective
Identify bad commit hash using bisect.

## Task Info
- Code: `T16`
- Phase: Advanced Optional
- Points: 5
- Git Concept: Bisect

## Hint (File + Line)
- File: `playground/debug/bisect-log.txt`
- Line: `1`
- Required change: Identify bad commit hash using bisect.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-16`
3. Update `playground/debug/bisect-log.txt` using the hint at line `1`.
4. Complete the task requirement: Identify bad commit hash using bisect.
5. Run local validation: `python check.py --task 16`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-16`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-16`
- File updated correctly: `playground/debug/bisect-log.txt` (line 1)
- Task outcome achieved: Identify bad commit hash using bisect.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 16
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-16`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
