# Task 05 - Commit message quality

## Objective
Use clean commit format (no WIP).

## Task Info
- Code: `T05`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Commit standards

## Hint (File + Line)
- File: `trainee/checkpoints/task-05.md`
- Line: `3`
- Required change: Use clean commit format (no WIP).

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-05`
3. Update `trainee/checkpoints/task-05.md` using the hint at line `3`.
4. Complete the task requirement: Use clean commit format (no WIP).
5. Run local validation: `python check.py --task 05`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-05`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-05`
- File updated correctly: `trainee/checkpoints/task-05.md` (line 3)
- Task outcome achieved: Use clean commit format (no WIP).
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 05
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-05`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
