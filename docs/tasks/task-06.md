# Task 06 - Push + PR Basics

## Goal
Push your trainee branch and open a pull request.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee/checkpoints`.
   - Create or open `trainee/checkpoints/task-06.md`.
3. Add Given Text
   - Add:

```text
Task 06
Branch pushed to origin
PR opened from trainee/<your-name> to workspace/<your-name>
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 06
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add trainee/checkpoints/task-06.md`
   - `git commit -m "task-06: add push and PR checkpoint"`
7. Push
   - Run:
   - `git push -u origin trainee/<your-name>`
   - Open GitHub and create PR:
   - Source: `trainee/<your-name>`
   - Target: `workspace/<your-name>`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 06 Completed` is shown.
