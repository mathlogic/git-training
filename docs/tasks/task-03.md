# Task 03 - Update Title

## Goal
Update title text in `playground/ui/title.txt`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `playground`, then `ui`.
   - Create or open `playground/ui/title.txt`.
3. Add Given Text
   - Replace all content with exactly:

```text
Git and GitHub Training Lab - Task 03
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 03
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add playground/ui/title.txt`
   - `git commit -m "task-03: update title line"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 03 Completed` is shown.

