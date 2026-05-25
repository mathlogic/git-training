# Task 09 - Stash workflow

## Objective
Stash WIP, switch, return, apply stash.

## Task Info
- Code: `T09`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Stash

## Hint (File + Line)
- File: `playground/ui/subtitle.txt`
- Line: `1`
- Required change: Stash WIP, switch, return, apply stash.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Create your task branch: `git checkout -b trainee/<your-name>/task-09`
3. Update `playground/ui/subtitle.txt` using the hint at line `1`.
4. Complete the task requirement: Stash WIP, switch, return, apply stash.
5. Run local validation: `python check.py --task 09`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push origin trainee/<your-name>/task-09`

## Expected Deliverable
- Branch exists: `trainee/<your-name>/task-09`
- File updated correctly: `playground/ui/subtitle.txt` (line 1)
- Task outcome achieved: Stash WIP, switch, return, apply stash.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 09
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>/task-09`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)
