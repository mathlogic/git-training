# Task 16 - Git History Detective

## Goal
Find when `TASK_DEFS` was introduced in `check.py` using Git history search.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Run History Search
   - Run:

```bash
git log -S "TASK_DEFS" -- check.py
```

   - Copy the commit hash and commit message from the result.
3. Create/Open File
   - Open folder `playground/debug`.
   - If `debug` does not exist, create it.
   - Create or open `playground/debug/history-detective.md`.
4. Add Given Text
   - Fill this template with the real commit hash and message:

```text
Task 16 - Git History Detective

Command used:
git log -S "TASK_DEFS" -- check.py

Commit hash found:
<commit-hash>

Commit message:
<commit-message>

What I learned:
I used Git history search to find when a specific code block was introduced.
```

5. Save
   - Press `Ctrl + S`.
6. Run Validation
   - Run:

```bash
python check.py --task 16
```

   - Expected: `Result: PASS`
7. Commit
   - Run:
   - `git add playground/debug/history-detective.md`
   - `git commit -m "task-16: add history detective evidence"`
8. Push
   - Run:
   - `git push`
9. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 16 Completed` is shown.
