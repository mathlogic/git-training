import json
from pathlib import Path

DATA_FILE = Path(__file__).parent.parent / "data" / "todos.json"


def read_todos():
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def write_todos(todos):
    with open(DATA_FILE, "w", encoding="utf-8") as file:
        json.dump(todos, file, indent=2)
