# Task 08 - Merge Conflict Resolution

## Goal
Resolve prepared merge conflict cleanly.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open `playground/config/app-mode.txt`.
3. Add Given Text
   - Resolve conflict and keep clean content.
   - If needed, use this clean version:

```text
Task 08
Conflict resolved cleanly
No conflict markers remain
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Confirm no markers like `<<<<<<<`, `=======`, `>>>>>>>` remain in files.
   - Run:

```bash
python check.py --task 08
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add playground/config/app-mode.txt`
   - `git commit -m "task-08: resolve merge conflict"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 08 Completed` is shown.
