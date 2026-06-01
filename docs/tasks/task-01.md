# Task 01 - Trainee Branch Checkpoint

## Goal
Create trainee branch checkpoint evidence in `trainee/checkpoints/task-01.md`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee`.
   - If `checkpoints` does not exist, create it.
   - Create or open `trainee/checkpoints/task-01.md`.
3. Add Given Text
   - Type exactly:

```text
trainee/<your-name>
```

   - Example: `trainee/suraj.kumar`
4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 01
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add trainee/checkpoints/task-01.md`
   - `git commit -m "task-01: add trainee branch checkpoint"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 01 Completed` is shown.

