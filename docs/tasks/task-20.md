# Task 20 - PR Polish and Evidence

## Goal
Create final summary with command evidence.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `evidence`.
   - Create or open `evidence/final-summary.md`.
3. Add Given Text
   - Add this template and fill with your real data:

```text
Task 20 Final Summary
Branch: trainee/<your-name>
Validation commands run: python check.py --task 01 to 20
PR link: <paste-your-pr-url>
Notes: All mandatory tasks completed with clean commit messages
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 20
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add evidence/final-summary.md`
   - `git commit -m "task-20: add final summary evidence"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 20 Completed` is shown.
