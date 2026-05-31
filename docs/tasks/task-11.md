# Task 11 - Amend commit

## Objective
Fix previous commit message via amend.

## Task Info
- Code: `T11`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Amend

## Hint (File + Line)
- File: `trainee/checkpoints/task-11.md`
- Line: `3`
- Required change: Fix previous commit message via amend.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Switch to your trainee branch: `git checkout trainee/<your-name>`
3. Update `trainee/checkpoints/task-11.md` using the hint at line `3`.
4. Complete the task requirement: Fix previous commit message via amend.
5. Run local validation: `python check.py --task 11`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push -u origin trainee/<your-name>`

## Expected Deliverable
- Branch exists: `trainee/<your-name>`
- File updated correctly: `trainee/checkpoints/task-11.md` (line 3)
- Task outcome achieved: Fix previous commit message via amend.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 11
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)

