# Task 10 - Recover deleted file

## Objective
Restore accidentally deleted file.

## Task Info
- Code: `T10`
- Phase: Core Mandatory
- Points: 5
- Git Concept: File recovery

## Hint (File + Line)
- File: `playground/docs/faq.txt`
- Line: `1`
- Required change: Restore accidentally deleted file.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Switch to your trainee branch: `git checkout trainee/<your-name>`
3. Update `playground/docs/faq.txt` using the hint at line `1`.
4. Complete the task requirement: Restore accidentally deleted file.
5. Run local validation: `python check.py --task 10`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push -u origin trainee/<your-name>`

## Expected Deliverable
- Branch exists: `trainee/<your-name>`
- File updated correctly: `playground/docs/faq.txt` (line 1)
- Task outcome achieved: Restore accidentally deleted file.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 10
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)

