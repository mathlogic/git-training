import re
import subprocess
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
