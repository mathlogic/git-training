# Task 04 - .gitignore hygiene

## Objective
Add .env, *.log, .DS_Store.

## Task Info
- Code: `T04`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Repo hygiene

## Hint (File + Line)
- File: `.gitignore`
- Line: `1`
- Required change: Add .env, *.log, .DS_Store.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-04`
3. Update `.gitignore` using the hint at line `1`.
4. Complete the task requirement: Add .env, *.log, .DS_Store.
5. Run local validation: `python check.py --task 04`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-04`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-04`
- File updated correctly: `.gitignore` (line 1)
- Task outcome achieved: Add .env, *.log, .DS_Store.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 04
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-04`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
