# Task 13 - Cherry-pick

## Objective
Cherry-pick trainer hotfix commit.

## Task Info
- Code: `T13`
- Phase: Core Mandatory
- Points: 5
- Git Concept: Cherry-pick

## Hint (File + Line)
- File: `playground/releases/hotfix-note.txt`
- Line: `1`
- Required change: Cherry-pick trainer hotfix commit.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Switch to your trainee branch: `git checkout trainee/<your-name>`
3. Update `playground/releases/hotfix-note.txt` using the hint at line `1`.
4. Complete the task requirement: Cherry-pick trainer hotfix commit.
5. Run local validation: `python check.py --task 13`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push -u origin trainee/<your-name>`

## Expected Deliverable
- Branch exists: `trainee/<your-name>`
- File updated correctly: `playground/releases/hotfix-note.txt` (line 1)
- Task outcome achieved: Cherry-pick trainer hotfix commit.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 13
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)

