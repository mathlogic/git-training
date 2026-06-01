# Task 13 - Cherry-pick

## Goal
Cherry-pick trainer hotfix commit into your trainee branch.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - In terminal, run:
   - `git checkout trainee/<your-name>`
   - `git cherry-pick <trainer-hotfix-commit-hash>`
   - Open `playground/releases/hotfix-note.txt`.
3. Add Given Text
   - Ensure line 1 has a hotfix note.
   - If needed, use:

```text
Trainer hotfix cherry-picked in Task 13
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 13
```

   - Expected: `Result: PASS`
6. Commit
   - `git cherry-pick` usually creates commit automatically.
   - If you edited file manually after cherry-pick, run:
   - `git add playground/releases/hotfix-note.txt`
   - `git commit -m "task-13: finalize cherry-pick note"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 13 Completed` is shown.
