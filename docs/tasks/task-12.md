# Task 12 - Squash History

## Goal
Squash multiple noisy commits into one clean commit.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee/checkpoints`.
   - Create or open `trainee/checkpoints/task-12.md`.
3. Add Given Text
   - Add:

```text
Task 12
History squashed
Before: multiple commits
After: one clean commit
No WIP in message
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run squash flow in terminal:
   - `git add trainee/checkpoints/task-12.md`
   - `git commit -m "task-12: checkpoint update"`
   - `git rebase -i HEAD~3`
   - In editor: keep first commit as `pick`, change next commits to `squash`.
   - Save and close editor.
   - Then validate:

```bash
python check.py --task 12
```

   - Expected: `Result: PASS`
6. Commit
   - Interactive rebase creates final squashed commit.
   - If needed, check:
   - `git log --oneline -5`
7. Push
   - Squash rewrites history, so run:
   - `git push --force-with-lease`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 12 Completed` is shown.
