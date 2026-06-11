# Git & GitHub Workflow Training Platform

## Complete Training + Evaluation Documentation (Git-Focused, Beginner-Friendly)

## 1. Overview
This platform is a hands-on Git and GitHub workflow lab for:
- engineering trainees
- intern onboarding
- freshers and campus hires
- junior developers
- bootcamp evaluation batches

The primary goal is to teach production-style Git workflow with low coding difficulty and high workflow learning value.

## 2. Core Objective
Trainees learn to:
- work safely on branches
- create clean commits
- run local validation before PR
- open structured pull requests
- resolve conflicts safely
- use rebase, squash, stash, cherry-pick, revert, and tag
- recover from mistakes using reflog and history tools

## 3. Training Philosophy
Principle:
- low coding complexity
- high workflow depth

Each mission gives:
- exact file path
- exact line hint
- expected outcome
- `python check.py --task XX` validation path

This keeps trainees focused on Git process instead of getting blocked on heavy coding.

## 4. System Architecture (Current Repository)

```text
git-training/
|- frontend/                      # React + Vite trainee dashboard
|- backend/                       # FastAPI APIs (git user, task validations, todos)
|- docs/tasks/                    # task-01.md to task-20.md
|- submissions/                   # trainee submission folder
|- check.py                       # local task checker (source of truth for pass/fail)
|- .github/workflows/pr-grade.yml # PR grading workflow (placeholder + comment)
|- README.md
`- .gitignore
```

## 5. Branching Strategy (Aligned to Current Software)
Current checker and frontend are aligned to one long-lived trainee branch:
- `main`
- `workspace/<name>`
- `trainee/<name>`

Important:
- Current `check.py` branch rule is `trainee/<name>`.
- Current frontend command cards also use `trainee/<name>`.
- Use one trainee branch across all tasks unless you intentionally change checker rules.

## 6. End-to-End Trainee Workflow

```bash
git checkout workspace/<your-name>
git pull origin workspace/<your-name>

# first task only
git checkout -b trainee/<your-name>

# later tasks
git checkout trainee/<your-name>
```

For each task:
```bash
python check.py --task XX
git add .
git commit -m "task-XX: short clear message"
git push -u origin trainee/<your-name>
```

Final submission PR:
- source: `trainee/<your-name>`
- target: `workspace/<your-name>`

## 7. Frontend Progress Update (check.py -> API -> UI)
This is already implemented in your software system.

### Backend flow
- Endpoint: `GET /task-validations`
- For each task from 1 to 20, backend runs:
  - `python check.py --task XX`
- Backend returns:
  - `passedTaskIds`: list of passed task IDs
  - `results`: pass/fail + checker output per task

### Frontend flow
- `App.jsx` calls `/task-validations` on load.
- It polls every 10 seconds.
- `passedTaskIds` updates local state.
- Each task card becomes completed when task ID is in `passedTaskIds`.
- Score and progress bar are recalculated immediately.

### Progress and scoring formula in UI
- completed tasks: `count(passedTaskIds)`
- score: `sum(points of passed tasks)`
- progress percentage: `round(completedTasks / 20 * 100)`

## 8. Assignment Quick Guide (Task-wise "Cheat Codes")
Note: "cheat code" here means quick command recipes for learning workflow. It is not a bypass.

### T01 - Clone + branch setup
- Hint: `trainee/checkpoints/task-01.md` line 1
- Checker evidence: current branch name appears in checkpoint line
- Quick commands:
```bash
git checkout workspace/<your-name>
git pull origin workspace/<your-name>
git checkout -b trainee/<your-name>
# update trainee/checkpoints/task-01.md line 1
python check.py --task 01
```

### T02 - Git identity
- Hint: `trainee/checkpoints/task-02.md` line 2
- Checker evidence:
  - `git config user.name` exists
  - `git config user.email` exists
  - both values written in checkpoint file
- Quick commands:
```bash
git config user.name "<your-name>"
git config user.email "<your-email>"
# write both values in trainee/checkpoints/task-02.md
python check.py --task 02
```

### T03 - Basic commit
- Hint: `playground/ui/title.txt` line 1
- Checker evidence: warning if latest commit does not touch hint file
- Quick commands:
```bash
# edit playground/ui/title.txt line 1
git add playground/ui/title.txt
git commit -m "task-03: update title line"
python check.py --task 03
```

### T04 - .gitignore hygiene
- Hint: `.gitignore` line 1
- Checker evidence: `.gitignore` contains `.env`, `*.log`, `.DS_Store`
- Quick commands:
```bash
# add .env, *.log, .DS_Store to .gitignore
git add .gitignore
git commit -m "task-04: add gitignore hygiene rules"
python check.py --task 04
```

### T05 - Commit message quality
- Hint: `trainee/checkpoints/task-05.md` line 3
- Checker evidence: latest commit subject must not contain `WIP`
- Quick commands:
```bash
# update checkpoint file
git add trainee/checkpoints/task-05.md
git commit -m "task-05: record commit quality note"
python check.py --task 05
```

### T06 - Push + PR basics
- Hint: `trainee/checkpoints/task-06.md` line 2
- Checker evidence: current branch has upstream tracking (`git push -u`)
- Quick commands:
```bash
# update checkpoint file
git add trainee/checkpoints/task-06.md
git commit -m "task-06: prepare PR evidence"
git push -u origin trainee/<your-name>
python check.py --task 06
```

### T07 - Update from base (rebase)
- Hint: `trainee/checkpoints/task-07.md` line 4
- Checker evidence: reflog contains rebase activity
- Quick commands:
```bash
git fetch origin
git rebase origin/workspace/<your-name>
# resolve conflicts if needed, then continue rebase
python check.py --task 07
```

### T08 - Merge conflict resolve
- Hint: `playground/config/app-mode.txt` line 2
- Checker evidence: no conflict markers remain
- Quick commands:
```bash
# create/receive conflict, resolve file content
git add playground/config/app-mode.txt
git commit -m "task-08: resolve conflict in app-mode"
python check.py --task 08
```

### T09 - Stash workflow
- Hint: `playground/ui/subtitle.txt` line 1
- Checker evidence: stash usage detected via stash list or stash reflog
- Quick commands:
```bash
# make temporary change
git stash
git checkout workspace/<your-name>
git checkout trainee/<your-name>
git stash apply
# finalize subtitle update
python check.py --task 09
```

### T10 - Recover deleted file
- Hint: `playground/docs/faq.txt` line 1
- Checker evidence: file is tracked in Git
- Quick commands:
```bash
# if deleted after being tracked earlier
git restore playground/docs/faq.txt
# if Git says the path is unknown, create the file manually with FAQ content
python check.py --task 10
```

### T11 - Amend commit
- Hint: `trainee/checkpoints/task-11.md` line 3
- Checker evidence: reflog contains amend activity
- Quick commands:
```bash
# stage fix
git add trainee/checkpoints/task-11.md
git commit --amend -m "task-11: corrected commit message via amend"
python check.py --task 11
```

### T12 - Squash history
- Hint: `trainee/checkpoints/task-12.md` line 5
- Checker evidence: compact commit count vs `workspace/<name>` (<= 2)
- Quick commands:
```bash
# after making multiple noisy commits
git rebase -i origin/workspace/<your-name>
# squash/fixup commits, then save
python check.py --task 12
```

### T13 - Cherry-pick
- Hint: `playground/releases/hotfix-note.txt` line 1
- Checker evidence: reflog contains cherry-pick activity
- Quick commands:
```bash
git cherry-pick <trainer-hotfix-commit-hash>
python check.py --task 13
```

### T14 - Revert safely
- Hint: `playground/ui/notice.txt` line 2
- Checker evidence: reflog contains revert activity
- Quick commands:
```bash
git revert <wrong-commit-hash>
python check.py --task 14
```

### T15 - Tagging
- Hint: `playground/releases/version.txt` line 1
- Checker evidence: tag exists with prefix `task-15-`
- Quick commands:
```bash
git add playground/releases/version.txt
git commit -m "task-15: add release version marker"
git tag -a task-15-<name> -m "Task 15 annotated tag"
python check.py --task 15
git push
git push origin task-15-<name>
```

### T16 - Bisect
- Hint: `playground/debug/bisect-log.txt` line 1
- Checker evidence: hint file has bisect evidence content
- Quick commands:
```bash
git bisect start
git bisect bad
git bisect good <known-good-commit>
# test each step and mark good/bad until culprit found
git bisect reset
# write bad commit details in playground/debug/bisect-log.txt
python check.py --task 16
```

### T17 - Reflog recovery
- Hint: `trainee/checkpoints/task-17.md` line 4
- Checker evidence: reflog shows reset/recovery activity
- Quick commands:
```bash
# simulate wrong reset
git reset --soft HEAD~1
# recover using reflog
git reflog
git cherry-pick <recovery-hash>
python check.py --task 17
```

### T18 - Autosquash cleanup
- Hint: `trainee/checkpoints/task-18.md` line 3
- Checker evidence: reflog includes fixup/autosquash/rebase -i activity
- Quick commands:
```bash
git commit --fixup <target-commit-hash>
git rebase -i --autosquash origin/workspace/<your-name>
python check.py --task 18
```

### T19 - Release branch flow
- Hint: `playground/releases/version.txt` line 1
- Checker evidence:
  - current branch starts with `release/`, or
  - version file contains `release/` evidence
- Quick commands:
```bash
# stay on trainee/<your-name> so branch rule still passes
# add release evidence text like: release/<version>
git commit -am "task-19: release flow update"
python check.py --task 19
```

### T20 - PR polish + evidence
- Hint: `evidence/final-summary.md` line 1
- Checker evidence: evidence file exists and is non-empty
- Quick commands:
```bash
# write tasks completed + command evidence in evidence/final-summary.md
git add evidence/final-summary.md
git commit -m "task-20: final submission evidence"
python check.py --task 20
```

## 9. Evaluation Architecture
Two layers:
- local layer: `check.py` for immediate trainee feedback
- PR layer: GitHub Actions workflow for official evaluation path

Current repo note:
- `.github/workflows/pr-grade.yml` is a placeholder grader and PR comment flow.
- Replace the placeholder step with your official scoring script when finalizing rollout.

## 10. Suggested Scoring Model (100)
- branch naming compliance: 10
- commit message quality: 15
- mission completion accuracy: 25
- conflict/history hygiene: 15
- PR quality: 10
- advanced Git operations: 15
- workflow professionalism: 10

Pass recommendation:
- core pass threshold: 70/100
- advanced tasks shown as bonus

## 11. PR Naming and Submission Rules
Suggested PR title for regular updates:
- `[Task XX] <Name> - <Short description>`

Suggested final PR title:
- `[Final Submission] <Name> - Batch <N>`

PR description should include:
- tasks completed
- command evidence
- blockers faced
- what was learned

## 12. Security and Trust Model
Must enforce:
- protect `main`
- disable direct push to protected branches
- require status checks before merge
- keep scoring secrets/tokens private
- treat trainee code as untrusted input

## 13. Trainer Operations Cheat Sheet

### Batch setup
```bash
# create workspace branch for one trainee
git checkout main
git pull origin main
git checkout -b workspace/<name>
git push -u origin workspace/<name>
```

### Re-sync trainee when workspace advances
```bash
git checkout trainee/<name>
git fetch origin
git rebase origin/workspace/<name>
git push --force-with-lease
```

### Check local pass quickly
```bash
python check.py --task 01
python check.py --task 02
# ... up to 20
```

## 14. Suggested 4-Day Delivery Plan
- Day 1: T01-T05 (foundations)
- Day 2: T06-T10 (PR, conflict, stash, recovery)
- Day 3: T11-T15 (history cleanup, cherry-pick, revert, tags)
- Day 4: T16-T20 (advanced recovery, release flow, final evidence)

## 15. Why This Model Works
- beginner-friendly ramp-up
- real GitHub workflow exposure
- low coding overload
- strong process and history hygiene habits
- scalable evaluation for large trainee batches

In short: trainees learn how engineering teams ship safely, not just how to run Git commands.
