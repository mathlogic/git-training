# Task 07 - Update from Base (Rebase)

## Goal
Rebase your trainee branch on latest workspace branch.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open folder `trainee/checkpoints`.
   - Create or open `trainee/checkpoints/task-07.md`.
3. Add Given Text
   - Add:

```text
Task 07
Rebase completed
Base branch: workspace/<your-name>
No unresolved conflicts
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - In terminal, run rebase flow first:
   - `git checkout trainee/<your-name>`
   - `git fetch origin`
   - `git rebase origin/workspace/<your-name>`
   - If conflict appears, resolve file, then run:
   - `git add <resolved-file>`
   - `git rebase --continue`
   - Then validate:

```bash
python check.py --task 07
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add trainee/checkpoints/task-07.md`
   - `git commit -m "task-07: add rebase checkpoint"`
7. Push
   - Run:
   - `git push --force-with-lease`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 07 Completed` is shown.
