# Git & GitHub Workflow Training Lab

Hands-on onboarding lab for trainees to learn practical Git and GitHub workflow with guided coding tasks.

## Important Overview

The trainee opens the React frontend, which checks FastAPI at `GET /` and loads Git identity from `GET /git-user`; the UI then shows task cards, Git command helpers, and an interactive Git graph, while task completion updates progress and score in real time; backend provides Todo CRUD via `GET/POST/PUT/DELETE /todos` using JSON storage; delivery flow is GitHub-based: create `trainee/<username>/task-xx` from `workspace/<username>`, run `python check.py --task XX`, commit, push, open PR, rebase if needed, and merge after review.

## Project Structure

- `frontend/`: React + Tailwind (Vite)
- `backend/`: FastAPI + JSON data
- `docs/tasks/`: task instructions (`task-01.md` to `task-20.md`)
- `submissions/`: trainee submission folder
- `check.py`: local task checker
- `.github/workflows/pr-grade.yml`: PR grading workflow

## Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open: `http://localhost:5173`

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open:

- API root: `http://localhost:8000/`
- Swagger docs: `http://localhost:8000/docs`

## Trainee Workflow

1. Checkout your workspace branch: `git checkout workspace/<username>`
2. Pull latest changes: `git pull origin workspace/<username>`
3. Create task branch: `git checkout -b trainee/<username>/task-xx`
4. Complete task changes in code.
5. Run check: `python check.py --task XX`
6. Commit changes with clear message.
7. Push branch: `git push origin trainee/<username>/task-xx`
8. Open GitHub PR, address review comments, rebase if required, then merge.

## Training Focus

- Branching and commits
- Pull requests and reviews
- Merge conflict resolution
- Stash, cherry-pick, revert
- Rebase, squash, tagging, reflog recovery
