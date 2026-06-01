# Task 19 - Release Branch Flow

## Goal
Record release flow evidence for your branch.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open `playground/releases/version.txt`.
3. Add Given Text
   - Add release branch marker:

```text
release/1.0.0
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 19
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add playground/releases/version.txt`
   - `git commit -m "task-19: add release flow marker"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 19 Completed` is shown.
