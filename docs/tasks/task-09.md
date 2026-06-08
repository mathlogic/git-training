# Task 09 - Stash Workflow

## Goal
Use stash to pause work, switch branch, and restore changes.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open `playground/ui/subtitle.txt`.
3. Add Given Text
   - Add or update line 1 with:

```text
Task 09 stash workflow completed
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Use stash flow in terminal:
   - `git stash push -m "task-09-wip"`
   - `git checkout workspace/<your-name>`
   - `git checkout trainee/<your-name>`
   - `git stash pop`
   - Then run:

```bash
python check.py --task 09
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add playground/ui/subtitle.txt`
   - `git commit -m "task-09: complete stash workflow"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 09 Completed` is shown.
