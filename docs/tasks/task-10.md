# Task 10 - Recover Deleted File

## Goal
Restore accidentally deleted file from Git history.

## Simple Pattern
1. Open Folder
   - Open this project in VS Code:
   - `C:\Users\Suraj Kumar\Desktop\Training_session2026\Demo\git-training`
2. Create/Open File
   - Check if file exists: `playground/docs/faq.txt`.
   - If it was deleted after being tracked earlier, restore it:
   - `git restore playground/docs/faq.txt`
   - If Git says the path is unknown, create the file manually.
3. Add Given Text
   - Ensure line 1 is not empty.
   - If you need placeholder text, use:

```text
FAQ restored for Task 10
```

4. Save
   - Press `Ctrl + S`.
5. Run Validation
   - If the file was already tracked earlier, restore it:
   - `git restore playground/docs/faq.txt`
   - If Git says the path is unknown, create the file manually with the required text.
   - Then run:

```bash
python check.py --task 10
```

   - Expected: `Result: PASS`
6. Commit
   - Run:
   - `git add playground/docs/faq.txt`
   - `git commit -m "task-10: recover deleted file"`
7. Push
   - Run:
   - `git push`
8. Refresh UI
   - Open `http://localhost:5173` and refresh the page.
   - Confirm `Task 10 Completed` is shown.
