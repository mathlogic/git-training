# Task 02 - Git identity

## Objective
Record git config user.name and user.email.

## Task Info
- Code: `T02`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Git config

## Hint (File + Line)
- File: `trainee/checkpoints/task-02.md`
- Line: `2`
- Required change: Record git config user.name and user.email.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-02`
3. Update `trainee/checkpoints/task-02.md` using the hint at line `2`.
4. Complete the task requirement: Record git config user.name and user.email.
5. Run local validation: `python check.py --task 02`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-02`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-02`
- File updated correctly: `trainee/checkpoints/task-02.md` (line 2)
- Task outcome achieved: Record git config user.name and user.email.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 02
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-02`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
