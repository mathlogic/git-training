# Task 14 - Revert Safely

## Goal
Undo a wrong change using `git revert`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open `playground/ui/notice.txt`.
3. Add Given Text
   - Ensure line 2 is meaningful.
   - If needed, use:

```text
Task 14 revert completed
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Identify wrong commit:
   - `git log --oneline -10`
   - Revert it:
   - `git revert <wrong-commit-hash>`
   - Then validate:

```bash
python check.py --task 14
```

   - Expected: `Result: PASS`
6. Commit
   - `git revert` creates commit automatically.
   - If additional edits were made, run:
   - `git add playground/ui/notice.txt`
   - `git commit -m "task-14: finalize safe revert"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 14 Completed` is shown.
