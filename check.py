import argparse
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List


ROOT = Path(__file__).resolve().parent
SKIP_DIRS = {".git", "node_modules", "dist", "__pycache__", ".venv", ".idea", ".vscode"}
TEXT_EXTENSIONS = {
    ".md", ".txt", ".py", ".js", ".jsx", ".ts", ".tsx", ".json", ".yml", ".yaml", ".toml",
    ".ini", ".cfg", ".conf", ".sh", ".bat", ".ps1", ".gitignore", ".env", ".html", ".css"
}


@dataclass(frozen=True)
class TaskDef:
    id: int
    code: str
    title: str
    phase: str
    points: int
    hint_file: str
    hint_line: int
    expected: str
    concept: str


TASK_DEFS: Dict[int, TaskDef] = {
    1: TaskDef(1, "T01", "Clone + branch setup", "core", 5, "trainee/checkpoints/task-01.md", 1, "Create trainee branch and add branch name.", "Branching basics"),
    2: TaskDef(2, "T02", "Git identity", "core", 5, "trainee/checkpoints/task-02.md", 2, "Record git config user.name and user.email.", "Git config"),
    3: TaskDef(3, "T03", "Basic commit", "core", 5, "playground/ui/title.txt", 1, "Change one title line and commit.", "Add, commit, push"),
    4: TaskDef(4, "T04", ".gitignore hygiene", "core", 5, ".gitignore", 1, "Add .env, *.log, .DS_Store.", "Repo hygiene"),
    5: TaskDef(5, "T05", "Commit message quality", "core", 5, "trainee/checkpoints/task-05.md", 3, "Use clean commit format (no WIP).", "Commit standards"),
    6: TaskDef(6, "T06", "Push + PR basics", "core", 5, "trainee/checkpoints/task-06.md", 2, "Push branch and open PR.", "Pull request flow"),
    7: TaskDef(7, "T07", "Update from base", "core", 5, "trainee/checkpoints/task-07.md", 4, "Rebase task branch on updated workspace.", "Rebase"),
    8: TaskDef(8, "T08", "Merge conflict resolve", "core", 5, "playground/config/app-mode.txt", 2, "Resolve prepared conflict cleanly.", "Conflict resolution"),
    9: TaskDef(9, "T09", "Stash workflow", "core", 5, "playground/ui/subtitle.txt", 1, "Stash WIP, switch, return, apply stash.", "Stash"),
    10: TaskDef(10, "T10", "Recover deleted file", "core", 5, "playground/docs/faq.txt", 1, "Restore accidentally deleted file.", "File recovery"),
    11: TaskDef(11, "T11", "Amend commit", "core", 5, "trainee/checkpoints/task-11.md", 3, "Fix previous commit message via amend.", "Amend"),
    12: TaskDef(12, "T12", "Squash history", "core", 5, "trainee/checkpoints/task-12.md", 5, "Squash 3 noisy commits into 1 clean commit.", "Interactive rebase"),
    13: TaskDef(13, "T13", "Cherry-pick", "core", 5, "playground/releases/hotfix-note.txt", 1, "Cherry-pick trainer hotfix commit.", "Cherry-pick"),
    14: TaskDef(14, "T14", "Revert safely", "core", 5, "playground/ui/notice.txt", 2, "Revert wrong change with git revert.", "Revert"),
    15: TaskDef(15, "T15", "Tagging", "core", 5, "playground/releases/version.txt", 1, "Create annotated tag task-15-<name>.", "Tagging"),
    16: TaskDef(16, "T16", "Bisect", "advanced", 5, "playground/debug/bisect-log.txt", 1, "Identify bad commit hash using bisect.", "Bisect"),
    17: TaskDef(17, "T17", "Reflog recovery", "advanced", 5, "trainee/checkpoints/task-17.md", 4, "Recover from wrong reset using reflog.", "Reflog"),
    18: TaskDef(18, "T18", "Autosquash cleanup", "advanced", 5, "trainee/checkpoints/task-18.md", 3, "Use fixup commit + autosquash rebase.", "Autosquash"),
    19: TaskDef(19, "T19", "Release branch flow", "advanced", 5, "playground/releases/version.txt", 1, "Create release/<version> flow commit.", "Release workflow"),
    20: TaskDef(20, "T20", "PR polish + evidence", "advanced", 5, "evidence/final-summary.md", 1, "Final summary with command evidence.", "PR quality"),
}


class Report:
    def __init__(self, task: TaskDef):
        self.task = task
        self.passed: List[str] = []
        self.failed: List[str] = []
        self.warned: List[str] = []

    def require(self, condition: bool, on_pass: str, on_fail: str) -> None:
        if condition:
            self.passed.append(on_pass)
        else:
            self.failed.append(on_fail)

    def warn(self, condition: bool, on_warn: str) -> None:
        if not condition:
            self.warned.append(on_warn)

    def print(self) -> None:
        print(f"\n=== {self.task.code}: {self.task.title} ===")
        print(f"Hint: {self.task.hint_file} (line {self.task.hint_line})")
        print(f"Expected: {self.task.expected}\n")

        if self.passed:
            print("PASS CHECKS")
            for item in self.passed:
                print(f"  + {item}")

        if self.warned:
            print("\nWARNINGS")
            for item in self.warned:
                print(f"  ! {item}")

        if self.failed:
            print("\nFAILED CHECKS")
            for item in self.failed:
                print(f"  - {item}")

        status = "PASS" if not self.failed else "FAIL"
        print(f"\nResult: {status}")


def run_git(*args: str):
    return subprocess.run(
        ["git", *args],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=False,
    )


def git_out(*args: str) -> str:
    result = run_git(*args)
    return result.stdout.strip() if result.returncode == 0 else ""


def git_ok(*args: str) -> bool:
    return run_git(*args).returncode == 0


def is_git_repo() -> bool:
    return git_ok("rev-parse", "--is-inside-work-tree")


def current_branch() -> str:
    return git_out("rev-parse", "--abbrev-ref", "HEAD")


def expected_branch_pattern(task_id: int) -> re.Pattern:
    return re.compile(rf"^trainee/[^/]+/task-{task_id:02d}$")


def get_workspace_ref(branch: str) -> str:
    match = re.match(r"^trainee/([^/]+)/task-\d{2}$", branch)
    if not match:
        return ""
    name = match.group(1)
    local_ref = f"refs/heads/workspace/{name}"
    remote_ref = f"refs/remotes/origin/workspace/{name}"
    if git_ok("show-ref", "--verify", local_ref):
        return f"workspace/{name}"
    if git_ok("show-ref", "--verify", remote_ref):
        return f"origin/workspace/{name}"
    return ""


def file_path(rel_path: str) -> Path:
    return ROOT / rel_path


def read_line(rel_path: str, line_no: int) -> str:
    path = file_path(rel_path)
    if not path.exists():
        return ""
    lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
    if line_no < 1 or line_no > len(lines):
        return ""
    return lines[line_no - 1].strip()


def file_contains(rel_path: str, needles: List[str]) -> bool:
    path = file_path(rel_path)
    if not path.exists():
        return False
    content = path.read_text(encoding="utf-8", errors="ignore")
    return all(item in content for item in needles)


def has_conflict_markers() -> bool:
    tracked_files = [line.strip() for line in git_out("ls-files").splitlines() if line.strip()]
    for rel in tracked_files:
        path = ROOT / rel
        if not path.is_file():
            continue
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        if path.suffix.lower() not in TEXT_EXTENSIONS and path.name != ".gitignore":
            continue
        try:
            content = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        has_start = bool(re.search(r"^<<<<<<< .*$", content, flags=re.MULTILINE))
        has_mid = bool(re.search(r"^=======$", content, flags=re.MULTILINE))
        has_end = bool(re.search(r"^>>>>>>> .*$", content, flags=re.MULTILINE))
        if has_start and has_mid and has_end:
            return True
    return False


def last_commit_message() -> str:
    return git_out("log", "-1", "--pretty=%s")


def last_commit_touches(rel_path: str) -> bool:
    changed = git_out("show", "--name-only", "--pretty=format:", "HEAD")
    files = {line.strip() for line in changed.splitlines() if line.strip()}
    return rel_path in files


def has_upstream() -> bool:
    return git_ok("rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}")


def reflog_contains(keyword: str) -> bool:
    log = git_out("reflog", "-n", "100", "--pretty=%gs")
    return keyword.lower() in log.lower()


def stash_used() -> bool:
    return bool(git_out("stash", "list")) or bool(git_out("reflog", "show", "stash"))


def has_tag_like(prefix: str) -> bool:
    return bool(git_out("tag", "--list", f"{prefix}*"))


def commits_since(base_ref: str) -> int:
    out = git_out("rev-list", "--count", f"{base_ref}..HEAD")
    return int(out) if out.isdigit() else -1


def validate_task(task: TaskDef) -> Report:
    report = Report(task)

    branch = current_branch()
    report.require(
        bool(branch),
        f"Current branch detected: {branch}",
        "Could not detect current branch. Ensure you are inside a Git repository.",
    )
    report.require(
        bool(expected_branch_pattern(task.id).match(branch)),
        f"Branch naming matches expected task pattern (task-{task.id:02d}).",
        f"Branch should look like trainee/<name>/task-{task.id:02d}. Current: {branch or 'unknown'}",
    )

    hint_exists = file_path(task.hint_file).exists()
    report.require(
        hint_exists,
        f"Hint file exists: {task.hint_file}",
        f"Hint file missing: {task.hint_file}. Create it if required by the task.",
    )

    hint_line = read_line(task.hint_file, task.hint_line)
    report.require(
        bool(hint_line),
        f"Hint line {task.hint_line} in {task.hint_file} has content.",
        f"Hint line {task.hint_line} in {task.hint_file} is empty or missing.",
    )

    report.warn(
        not has_conflict_markers(),
        "Conflict markers found (<<<<<<<, =======, >>>>>>>). Resolve conflicts before submission.",
    )

    if task.id == 1:
        report.require(
            branch in (hint_line or ""),
            "Checkpoint line records current task branch name.",
            "Checkpoint line should include your current task branch name.",
        )

    elif task.id == 2:
        git_name = git_out("config", "--get", "user.name")
        git_email = git_out("config", "--get", "user.email")
        report.require(bool(git_name), "git config user.name is set.", "git config user.name is missing.")
        report.require(bool(git_email), "git config user.email is set.", "git config user.email is missing.")
        checkpoint_text = file_path(task.hint_file).read_text(encoding="utf-8", errors="ignore") if hint_exists else ""
        report.require(
            bool(git_name and git_name in checkpoint_text and git_email and git_email in checkpoint_text),
            "Checkpoint includes both git user.name and user.email.",
            "Checkpoint should include both git user.name and git user.email values.",
        )

    elif task.id == 3:
        report.warn(
            last_commit_touches(task.hint_file),
            f"Last commit does not touch {task.hint_file}. Ensure your change is committed.",
        )

    elif task.id == 4:
        required = [".env", "*.log", ".DS_Store"]
        report.require(
            file_contains(".gitignore", required),
            ".gitignore contains .env, *.log, and .DS_Store.",
            ".gitignore must include .env, *.log, and .DS_Store.",
        )

    elif task.id == 5:
        message = last_commit_message()
        report.require(bool(message), "Last commit message found.", "No commit message found on current branch.")
        report.require(
            not re.search(r"\bwip\b", message, flags=re.IGNORECASE),
            "Last commit message does not contain WIP.",
            f"Commit message should be clean (no WIP). Current: {message or '(empty)'}",
        )

    elif task.id == 6:
        report.require(
            has_upstream(),
            "Current branch has upstream tracking (good push setup).",
            "No upstream tracking found. Push your branch with `git push -u origin <branch>`.",
        )

    elif task.id == 7:
        report.require(
            reflog_contains("rebase"),
            "Rebase activity detected in reflog.",
            "No rebase activity detected. Rebase your task branch on updated workspace branch.",
        )

    elif task.id == 8:
        report.require(
            not has_conflict_markers(),
            "No merge conflict markers remain.",
            "Conflict markers still present. Resolve conflicts and stage resolved files.",
        )

    elif task.id == 9:
        report.require(
            stash_used(),
            "Stash activity detected (stash list or stash reflog).",
            "No stash activity detected. Perform stash workflow and re-run validation.",
        )

    elif task.id == 10:
        report.require(
            git_ok("ls-files", "--error-unmatch", task.hint_file),
            f"{task.hint_file} is present and tracked by Git.",
            f"{task.hint_file} is not tracked. Recover and add it back to Git.",
        )

    elif task.id == 11:
        report.require(
            reflog_contains("amend"),
            "Amend activity detected in reflog.",
            "No amend activity detected. Use `git commit --amend` for this task.",
        )

    elif task.id == 12:
        workspace_ref = get_workspace_ref(branch)
        report.require(bool(workspace_ref), "Workspace base branch discovered.", "Could not detect matching workspace/<name> branch.")
        if workspace_ref:
            count = commits_since(workspace_ref)
            report.require(
                0 <= count <= 2,
                f"Commit count since {workspace_ref} is compact ({count}).",
                f"Too many commits since {workspace_ref} ({count}). Squash history for a cleaner branch.",
            )

    elif task.id == 13:
        report.require(
            reflog_contains("cherry-pick"),
            "Cherry-pick activity detected in reflog.",
            "No cherry-pick activity detected. Use `git cherry-pick <commit-hash>`.",
        )

    elif task.id == 14:
        report.require(
            reflog_contains("revert"),
            "Revert activity detected in reflog.",
            "No revert activity detected. Use `git revert <commit-hash>`.",
        )

    elif task.id == 15:
        report.require(
            has_tag_like("task-15-"),
            "Tag found with prefix task-15-",
            "No tag found for task 15. Create annotated tag like task-15-<name>.",
        )

    elif task.id == 16:
        report.require(
            file_contains(task.hint_file, ["bad", "commit"]) or bool(hint_line),
            "Bisect evidence file has content.",
            "Bisect evidence file missing expected details. Record identified bad commit hash.",
        )

    elif task.id == 17:
        report.require(
            reflog_contains("reset") or reflog_contains("reflog"),
            "Recovery-related reflog activity detected.",
            "No reset/recovery activity detected. Use reflog-based recovery for this task.",
        )

    elif task.id == 18:
        report.require(
            reflog_contains("fixup") or reflog_contains("autosquash") or reflog_contains("rebase -i"),
            "Fixup/autosquash style activity detected.",
            "No fixup/autosquash activity detected. Create fixup commit and run autosquash rebase.",
        )

    elif task.id == 19:
        report.require(
            bool(re.match(r"^release/", branch)) or file_contains(task.hint_file, ["release/"]),
            "Release flow evidence detected (branch or file content).",
            "No release flow evidence detected. Create/use release/<version> flow for this task.",
        )

    elif task.id == 20:
        report.require(
            hint_exists and bool(file_path(task.hint_file).read_text(encoding="utf-8", errors="ignore").strip()),
            "Final evidence summary file exists and is non-empty.",
            "Final summary file missing or empty. Add command evidence and completion notes.",
        )

    return report


def parse_task_id(raw: str) -> int:
    cleaned = raw.strip()
    if not cleaned.isdigit():
        return -1
    value = int(cleaned)
    return value if value in TASK_DEFS else -1


def main() -> None:
    parser = argparse.ArgumentParser(description="Local checker for Git training tasks")
    parser.add_argument("--task", required=True, help="Task number to check, e.g., 03")
    args = parser.parse_args()

    task_id = parse_task_id(str(args.task))
    if task_id == -1:
        print("Invalid task number. Use values from 01 to 20.")
        sys.exit(2)

    if not is_git_repo():
        print("Not inside a Git repository. Run this command from the training repository root.")
        sys.exit(2)

    report = validate_task(TASK_DEFS[task_id])
    report.print()
    sys.exit(1 if report.failed else 0)


if __name__ == "__main__":
    main()
