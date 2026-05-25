# Git & GitHub Workflow Training Lab

Hands-on onboarding lab for trainees to learn real-world Git and GitHub workflows with simple coding tasks.

## Manager Summary (End-to-End Flow)

The trainee opens the React frontend, which first checks FastAPI health at `GET /` and fetches Git identity from `GET /git-user`, then shows a guided Git/GitHub workflow with branch naming, command copy helpers, interactive graph, and task cards; when a task is marked complete in the UI, completion state is saved locally in browser `localStorage` (`git-training-progress-v1`) per active user, and the dashboard instantly updates `Tasks completed`, `Score so far`, `Core tasks`, `Advanced tasks`, and progress bar percentage; backend supports Todo CRUD (`GET/POST/PUT/DELETE /todos`) backed by a JSON file, while task delivery flow remains GitHub-first: create `trainee/<username>/task-xx` branch from `workspace/<username>`, run `python check.py --task XX`, commit, push, open PR, rebase when needed, and merge after review so completion can be demonstrated through both local score UI and GitHub PR history.

## Task Completion Visibility

- Frontend task toggle updates completion per user and recalculates score/percent immediately.
- Local persistence keys:
`git-training-progress-v1` (task completion map), `git-training-active-user` (selected user).
- Score is computed from completed task points in the frontend and shown as `Score so far`.

## Title Update (Current)

- Frontend browser tab title: `Git and GitHub Training Lab`
- Frontend header title: `Git and GitHub Training Lab`
- FastAPI app title/root message: `Git and GitHub Training Lab API`

## Code Lines Changed (Title + UI Score Reference)

- Frontend tab title:
[index.html](C:\Users\Suraj Kumar\Desktop\Git Training\git-training\frontend\index.html):7
- Frontend page title variable:
[App.jsx](C:\Users\Suraj Kumar\Desktop\Git Training\git-training\frontend\src\App.jsx):108
- Frontend local score/progress logic:
[App.jsx](C:\Users\Suraj Kumar\Desktop\Git Training\git-training\frontend\src\App.jsx):165
- FastAPI title and root message:
[main.py](C:\Users\Suraj Kumar\Desktop\Git Training\git-training\backend\app\main.py):12
[main.py](C:\Users\Suraj Kumar\Desktop\Git Training\git-training\backend\app\main.py):29

## Quick Validation

- Local task checker command in workflow: `python check.py --task XX`
- Example run now: `python check.py`

## Project Structure

- `frontend/`: React + Tailwind (Vite)
- `backend/`: FastAPI + JSON data file
- `docs/tasks/`: task-by-task instructions (`task-01.md` to `task-20.md`)
- `submissions/`: trainee submission drop folder
- `check.py`: local checker placeholder
- `.github/workflows/pr-grade.yml`: PR grading workflow placeholder

## Frontend Run

```bash
cd frontend
npm install
npm run dev
```

Open: `http://localhost:5173`

## Backend Run

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open:

- API root: `http://localhost:8000/`
- Swagger docs: `http://localhost:8000/docs`

## Branching Model

Use `workspace/<name>` branches for trainees so everyone can work in isolation without conflicts on shared starter files.

## Training Focus

- Branching and commits
- Pull requests and reviews
- Merge conflict resolution
- Stash, cherry-pick, revert
- Rebase, squash, tagging, reflog recovery
