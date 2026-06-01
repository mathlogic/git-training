# Task 17 - Reflog Recovery

## Goal
Recover from wrong reset using `git reflog`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee/checkpoints`.
   - Create or open `trainee/checkpoints/task-17.md`.
3. Add Given Text
   - Add:

```text
Task 17
Recovery completed via reflog
Recovered commit: <commit-hash>
Branch state restored
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run recovery flow in terminal:
   - `git reflog -10`
   - Find the commit before wrong reset.
   - Recover using one method:
   - `git reset --hard <recover-commit-hash>`
   - or `git cherry-pick <recover-commit-hash>`
   - Then validate:

```bash
python check.py --task 17
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add trainee/checkpoints/task-17.md`
   - `git commit -m "task-17: add reflog recovery checkpoint"`
7. Push
   - If history was rewritten, run:
   - `git push --force-with-lease`
   - Otherwise run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 17 Completed` is shown.
