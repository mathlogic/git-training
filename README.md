# Git & GitHub Workflow Training Lab

Hands-on onboarding lab for trainees to learn practical Git and GitHub workflow through guided coding tasks.

## Important Overview

The trainee opens the React frontend, which checks FastAPI at `GET /` and loads Git identity from `GET /git-user`.
The UI then shows task cards, Git command helpers, and an interactive Git graph, while task completion updates progress and score in real time.

The backend provides Todo CRUD via JSON storage:
- `GET /todos`
- `POST /todos`
- `PUT /todos`
- `DELETE /todos`

## Project Structure

```text
git-training/
├── frontend/                      # React + Tailwind (Vite)
├── backend/                       # FastAPI + JSON data
├── docs/tasks/                    # task-01.md to task-20.md
├── submissions/                   # trainee submission folder
├── check.py                       # local task checker
└── .github/workflows/pr-grade.yml # PR grading workflow
```

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

## Trainee Workflow (One Trainee, One Branch)

This lab follows a single-branch submission model for each trainee.

Rules:
- Start from `workspace/<username>`
- Create one trainee branch for the full assignment
- Complete all tasks (`task-01` to `task-20`) on that same branch
- Open one final PR into `workspace/<username>`

Do not create one branch per task unless your trainer explicitly asks for it.

### Step 1: Checkout and sync workspace branch

```bash
git checkout workspace/<username>
git pull origin workspace/<username>
```

### Step 2: Create one trainee branch

```bash
git checkout -b trainee/<username>
```

Use exactly `trainee/<username>` unless your trainer explicitly changes the checker rules.

### Step 3: Complete all tasks on this same branch

For each task:
1. Open `docs/tasks/task-XX.md`
2. Make the required code/config updates
3. Run the checker:

```bash
python check.py --task XX
```

4. Commit with a clear message:

```bash
git add .
git commit -m "task-XX: short clear summary"
```

Repeat for all assigned tasks on the same branch.

### Step 4: Push regularly

```bash
git push -u origin trainee/<username>
```

### Step 5: Open one final PR

Create one PR:
- From: `trainee/<username>`
- To: `workspace/<username>`

Suggested title:
- `Batch 1 submission - <username>`

### Step 6: Address review feedback

When changes are requested:

```bash
git add .
git commit -m "address review: <what changed>"
git push
```

If the workspace branch has moved forward:

```bash
git fetch origin
git rebase origin/workspace/<username>
git push --force-with-lease
```

### Step 7: Merge after approval

Merge only when:
- Required checks pass
- Reviewer approval is complete

## Evaluation

Local validation:
- `check.py` validates task-level expectations

PR validation:
- `.github/workflows/pr-grade.yml` checks workflow quality, such as:
- branch naming
- commit message quality
- required file changes
- conflict markers
- secret leakage checks
- PR metadata quality

## Final Submission Checklist

Before final PR, confirm:
- You used one trainee branch for the full assignment
- All required tasks are complete
- `python check.py --task XX` passes for each required task
- Branch is pushed to GitHub
- One final PR is opened to `workspace/<username>`
