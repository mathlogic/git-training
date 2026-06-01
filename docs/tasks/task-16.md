# Task 16 - Bisect

## Goal
Find bad commit hash using `git bisect`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open `playground/debug/bisect-log.txt`.
3. Add Given Text
   - Add:

```text
Task 16
Bad commit: <commit-hash>
Found using git bisect
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run bisect flow in terminal:
   - `git bisect start`
   - `git bisect bad`
   - `git bisect good <known-good-commit-hash>`
   - At each step run your bug check and mark:
   - `git bisect good` or `git bisect bad`
   - After bad commit is identified, run:
   - `git bisect reset`
   - Then validate:

```bash
python check.py --task 16
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add playground/debug/bisect-log.txt`
   - `git commit -m "task-16: record bisect result"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 16 Completed` is shown.
