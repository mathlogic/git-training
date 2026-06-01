# Task 01 - Clone + Branch Setup

## Objective
Create trainee branch checkpoint evidence.

## Task Info
- Code: `T01`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Branching basics

## File To Create/Modify
- `trainee/checkpoints/task-01.md`

## Content To Add
Add this exact value on line 1 (replace `<your-name>`):

```text
trainee/<your-name>
```

## Manual VS Code Steps
1. Open the repository in VS Code.
2. In Explorer, open folder `trainee`.
3. If folder `checkpoints` does not exist, create it in Explorer.
4. Inside `checkpoints`, create file `task-01.md` if it does not exist.
5. Open `task-01.md`.
6. Enter your branch name on line 1, for example: `trainee/suraj.kumar`.
7. Save the file.

## Git Steps
1. Checkout workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create trainee branch (one-time):
   - `git checkout -b trainee/<your-name>`
3. Run validation:
   - `python check.py --task 01`
4. Commit with a clean message:
   - `git add trainee/checkpoints/task-01.md`
   - `git commit -m "task-01: add trainee branch checkpoint"`
5. Push trainee branch:
   - `git push -u origin trainee/<your-name>`

## Expected Result
- Branch exists: `trainee/<your-name>`
- `trainee/checkpoints/task-01.md` exists and line 1 matches current trainee branch.
- Validation output contains `Result: PASS`.

## Submission (GitHub)
- Source branch: `trainee/<your-name>`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)

