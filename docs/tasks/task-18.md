# Task 18 - Autosquash cleanup

## Objective
Use fixup commit + autosquash rebase.

## Task Info
- Code: `T18`
- Phase: Advanced Optional
- Points: 5
- Git Concept: Autosquash

## Hint (File + Line)
- File: `trainee/checkpoints/task-18.md`
- Line: `3`
- Required change: Use fixup commit + autosquash rebase.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-18`
3. Update `trainee/checkpoints/task-18.md` using the hint at line `3`.
4. Complete the task requirement: Use fixup commit + autosquash rebase.
5. Run local validation: `python check.py --task 18`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-18`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-18`
- File updated correctly: `trainee/checkpoints/task-18.md` (line 3)
- Task outcome achieved: Use fixup commit + autosquash rebase.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 18
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-18`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
