# Task 17 - Reflog recovery

## Objective
Recover from wrong reset using reflog.

## Task Info
- Code: `T17`
- Phase: Advanced Optional
- Points: 5
- Git Concept: Reflog

## Hint (File + Line)
- File: `trainee/checkpoints/task-17.md`
- Line: `4`
- Required change: Recover from wrong reset using reflog.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-17`
3. Update `trainee/checkpoints/task-17.md` using the hint at line `4`.
4. Complete the task requirement: Recover from wrong reset using reflog.
5. Run local validation: `python check.py --task 17`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-17`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-17`
- File updated correctly: `trainee/checkpoints/task-17.md` (line 4)
- Task outcome achieved: Recover from wrong reset using reflog.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 17
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-17`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
