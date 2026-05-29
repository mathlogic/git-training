import re
import subprocess
import sys
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.data import read_todos, write_todos
from app.schemas import Todo

app = FastAPI(
    title="Git and GitHub Training Lab API",
    description="Backend for Git/GitHub training tasks",
    version="1.0.0",
)

PROJECT_ROOT = Path(__file__).resolve().parents[2]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["General"])
def root():
    return {"message": "Git and GitHub Training Lab API", "status": "running"}


@app.get("/todos", tags=["Todos"])
def get_todos():
    return read_todos()


def _read_git_config(key: str) -> str:
    try:
        result = subprocess.run(
            ["git", "config", "--get", key],
            cwd=PROJECT_ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        if result.returncode != 0:
            return ""
        return result.stdout.strip()
    except OSError:
        return ""


def _derive_git_username(name: str, email: str) -> str:
    email_part = email.split("@")[0].strip() if "@" in email else ""
    fallback = re.sub(r"\s+", ".", name.strip().lower())
    candidate = email_part or fallback
    cleaned = re.sub(r"[^a-zA-Z0-9._-]", "", candidate)
    return cleaned or "working.user"


def _run_task_check(task_id: int) -> dict:
    task_label = f"{task_id:02d}"
    try:
        result = subprocess.run(
            [sys.executable, "check.py", "--task", task_label],
            cwd=PROJECT_ROOT,
            capture_output=True,
            text=True,
            check=False,
            timeout=30,
        )
    except (OSError, subprocess.TimeoutExpired) as exc:
        return {"taskId": task_id, "passed": False, "output": str(exc)}

    output = f"{result.stdout}\n{result.stderr}".strip()
    passed = result.returncode == 0 and "Result: PASS" in result.stdout
    return {"taskId": task_id, "passed": passed, "output": output}


@app.get("/git-user", tags=["General"])
def get_git_user():
    git_name = _read_git_config("user.name")
    git_email = _read_git_config("user.email")
    git_username = _derive_git_username(git_name, git_email)
    return {
        "name": git_name,
        "email": git_email,
        "username": git_username,
    }


@app.get("/task-validations", tags=["General"])
def get_task_validations():
    results = [_run_task_check(task_id) for task_id in range(1, 21)]
    passed_task_ids = [item["taskId"] for item in results if item["passed"]]
    return {"passedTaskIds": passed_task_ids, "results": results}


@app.post("/todos", tags=["Todos"])
def add_todo(todo: Todo):
    todos = read_todos()
    todos.append(todo.model_dump())
    write_todos(todos)
    return {"message": "Todo added", "todo": todo}


@app.put("/todos/{todo_id}", tags=["Todos"])
def update_todo(todo_id: int, updated: Todo):
    todos = read_todos()
    for index, todo in enumerate(todos):
        if todo["id"] == todo_id:
            todos[index] = updated.model_dump()
            write_todos(todos)
            return {"message": "Updated", "todo": updated}
    raise HTTPException(status_code=404, detail="Todo not found")


@app.delete("/todos/{todo_id}", tags=["Todos"])
def delete_todo(todo_id: int):
    todos = read_todos()
    new_todos = [todo for todo in todos if todo["id"] != todo_id]
    if len(new_todos) == len(todos):
        raise HTTPException(status_code=404, detail="Todo not found")
    write_todos(new_todos)
    return {"message": "Deleted"}


# TASK-07-HINT: Add /health route below this line for Task 07


# TASK-08-HINT: Add /version route below this line for Task 08
