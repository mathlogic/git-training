# Task 15 - Tagging

## Goal
Create annotated tag `task-15-<your-name>`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open `playground/releases/version.txt`.
3. Add Given Text
   - Add line 1 as release marker:

```text
release/1.0.0
```

4. Save
   - Press `Ctrl + S`.
5. Commit
   - Run:
   - `git add playground/releases/version.txt`
   - `git commit -m "task-15: add release version marker"`
6. Run Validation
   - Create annotated tag:
   - `git tag -a task-15-<your-name> -m "Task 15 annotated tag"`
   - Validate:

```bash
python check.py --task 15
```

   - Expected: `Result: PASS`
7. Push
   - Run:
   - `git push`
   - `git push origin task-15-<your-name>`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 15 Completed` is shown.
