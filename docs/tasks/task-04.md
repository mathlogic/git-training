# Task 04 - Update .gitignore

## Goal
Add standard ignore rules in `.gitignore`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open `.gitignore` from repository root.
3. Add Given Text
   - Add these lines if they are not already present:

```text
.env
*.log
.DS_Store
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 04
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add .gitignore`
   - `git commit -m "task-04: add gitignore hygiene rules"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 04 Completed` is shown.

