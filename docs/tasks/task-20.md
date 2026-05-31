# Task 20 - PR polish + evidence

## Objective
Final summary with command evidence.

## Task Info
- Code: `T20`
- Phase: Advanced Optional
- Points: 5
- Git Concept: PR quality

## Hint (File + Line)
- File: `evidence/final-summary.md`
- Line: `1`
- Required change: Final summary with command evidence.

If the hint file does not exist in your local repository, create it and apply the required update at the referenced line.

## Steps
1. Checkout your workspace branch and pull latest changes:
   - `git checkout workspace/<your-name>`
   - `git pull origin workspace/<your-name>`
2. Switch to your trainee branch: `git checkout trainee/<your-name>`
3. Update `evidence/final-summary.md` using the hint at line `1`.
4. Complete the task requirement: Final summary with command evidence.
5. Run local validation: `python check.py --task 20`
6. Commit your changes with a clear commit message (no WIP text).
7. Push branch: `git push -u origin trainee/<your-name>`

## Expected Deliverable
- Branch exists: `trainee/<your-name>`
- File updated correctly: `evidence/final-summary.md` (line 1)
- Task outcome achieved: Final summary with command evidence.
- Clean commit history with meaningful message(s)

## Validation
```bash
python check.py --task 20
```

## Submission (GitHub)
- Source branch: `trainee/<your-name>`
- Target branch: `workspace/<your-name>`
- Open PR with summary + evidence (commands/output where relevant)

