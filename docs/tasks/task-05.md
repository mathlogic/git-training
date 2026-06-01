# Task 05 - Commit Quality Checkpoint

## Goal
Create final checkpoint file for commit message quality.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee/checkpoints`.
   - Create or open `trainee/checkpoints/task-05.md`.
3. Add Given Text
   - Add exactly:

```text
Task 05
Commit message quality
No WIP used
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 05
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add trainee/checkpoints/task-05.md`
   - `git commit -m "task-05: add commit quality checkpoint"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 05 Completed` is shown.

