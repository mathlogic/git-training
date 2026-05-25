# Task 19 - Release branch flow

## Objective
Create release/<version> flow commit.

## Task Info
- Code: `T19`
- Phase: Advanced Optional
- Points: 5
- Git Concept: Release workflow

## Hint (File + Line)
- File: `playground/releases/version.txt`
- Line: `1`
- Required change: Create release/<version> flow commit.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-19`
3. Update `playground/releases/version.txt` using the hint at line `1`.
4. Complete the task requirement: Create release/<version> flow commit.
5. Run local validation: `python check.py --task 19`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-19`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-19`
- File updated correctly: `playground/releases/version.txt` (line 1)
- Task outcome achieved: Create release/<version> flow commit.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 19
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-19`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
