# Task 06 - Push + PR basics

## Objective
Push branch and open PR.

## Task Info
- Code: `T06`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Pull request flow

## Hint (File + Line)
- File: `trainee/checkpoints/task-06.md`
- Line: `2`
- Required change: Push branch and open PR.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Switch to your trainee branch: `git checkout trainee/<your-name>`
3. Update `trainee/checkpoints/task-06.md` using the hint at line `2`.
4. Complete the task requirement: Push branch and open PR.
5. Run local validation: `python check.py --task 06`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push -u origin trainee/<your-name>`

## Expected Deliverable
- Branch exists: `trainee/<your-name>`
- File updated correctly: `trainee/checkpoints/task-06.md` (line 2)
- Task outcome achieved: Push branch and open PR.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 06
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)

