# Task 02 - Record Git Identity

## Goal
Record `git config` name and email in `trainee/checkpoints/task-02.md`.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Open terminal in project root and run:
   - `git config --get user.name`
   - `git config --get user.email`
   - Create or open `trainee/checkpoints/task-02.md`.
3. Add Given Text
   - Add this format with your real values:

```text
Task 02
Name: Your Name
Email: your@email.com
```

   - Example:

```text
Task 02
Name: Suraj Kumar
Email: suraj@gmail.com
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - Run:

```bash
python check.py --task 02
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add trainee/checkpoints/task-02.md`
   - `git commit -m "task-02: record git identity"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 02 Completed` is shown.

