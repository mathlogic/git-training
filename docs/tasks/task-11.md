# Task 11 - Amend Commit

## Goal
Fix previous commit message using `git commit --amend`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee/checkpoints`.
   - Create or open `trainee/checkpoints/task-11.md`.
3. Add Given Text
   - Add:

```text
Task 11
Commit amended
Final message is clean (no WIP)
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run amend flow in terminal:
   - `git add trainee/checkpoints/task-11.md`
   - `git commit -m "task-11: temp message"`
   - `git commit --amend -m "task-11: fix commit message via amend"`
   - Then validate:

```bash
python check.py --task 11
```

   - Expected: `Result: PASS`
6. Commit
   - If you already amended in step 5, no extra commit is needed.
   - If file changed again, run:
   - `git add trainee/checkpoints/task-11.md`
   - `git commit --amend --no-edit`
7. Push
   - Because amend rewrites commit history, run:
   - `git push --force-with-lease`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 11 Completed` is shown.
