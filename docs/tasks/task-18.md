# Task 18 - Autosquash Cleanup

## Goal
Use fixup commit and autosquash rebase for clean history.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee/checkpoints`.
   - Create or open `trainee/checkpoints/task-18.md`.
3. Add Given Text
   - Add:

```text
Task 18
Fixup commit created
Autosquash rebase completed
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run autosquash flow in terminal:
   - `git add trainee/checkpoints/task-18.md`
   - `git commit -m "task-18: base checkpoint"`
   - Make a small correction in same file.
   - `git add trainee/checkpoints/task-18.md`
   - `git commit --fixup HEAD`
   - `git rebase -i --autosquash HEAD~2`
   - Then validate:

```bash
python check.py --task 18
```

   - Expected: `Result: PASS`
6. Commit
   - Rebase will finalize cleaned commit history.
   - Check:
   - `git log --oneline -5`
7. Push
   - Autosquash rewrites history, so run:
   - `git push --force-with-lease`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 18 Completed` is shown.
