import { useEffect, useState } from "react";
import { CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import CopyCommandButton from "./CopyCommandButton";
import TaskDetailsDrawer from "./TaskDetailsDrawer";

export default function TodoList({ tasks, gitUsername }) {
  const TASKS_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const [activeTask, setActiveTask] = useState(null);
  const totalPages = Math.max(1, Math.ceil(tasks.length / TASKS_PER_PAGE));
  const startIndex = (page - 1) * TASKS_PER_PAGE;
  const endIndex = Math.min(startIndex + TASKS_PER_PAGE, tasks.length);
  const visibleTasks = tasks.slice(startIndex, endIndex);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <section className="has-tooltip rounded-xl border border-gray-200 bg-white p-5 shadow-sm" data-tooltip="Interactive list of all 20 training tasks">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="inline-flex items-center gap-2 font-semibold"><ClipboardDocumentListIcon className="h-5 w-5 text-slate-600" />Task Checklist</h2>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
          Page {page}/{totalPages}
        </span>
      </div>
      {tasks.length === 0 ? (
        <>
          {/* TASK-13-HINT: Improve this empty state message for Task 13 */}
          <p>No tasks yet.</p>
        </>
      ) : (
        <>
          <ul className="space-y-2">
          {visibleTasks.map((task) => (
            (() => {
              const taskNumber = task.id.toString().padStart(2, "0");
              const validateCommand = `python check.py --task ${taskNumber}`;

              return (
                <li
                  key={task.id}
                  className="task-row has-tooltip relative flex items-center justify-between gap-3 rounded-lg border border-gray-100 px-3 py-2"
                  data-tooltip={`Task ${task.code}`}
                >
                  <div
                    className="flex items-center gap-3 text-left"
                    aria-label={`Task ${task.code} validation status`}
                  >
                    <span
                      className={`inline-flex h-4 w-4 items-center justify-center rounded-full border ${
                        task.completed ? "border-green-600 bg-green-500 text-white" : "border-gray-400 bg-white text-transparent"
                      }`}
                    >
                      <CheckBadgeIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className={task.completed ? "text-gray-500 line-through" : "text-slate-900"}>
                      <span className="mr-2 rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">{task.code}</span>
                      {task.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">{task.points} pts</span>
                    <CopyCommandButton command={validateCommand} label="Copy Check" />
                    <button
                      type="button"
                      onClick={() => setActiveTask(task)}
                      className="rounded-md border border-indigo-200 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                    >
                      Details
                    </button>
                  </div>
                </li>
              );
            })()
          ))}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
            <p className="text-xs text-slate-500">
              Showing {startIndex + 1}-{endIndex} of {tasks.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeftIcon className="h-3.5 w-3.5" />
                Prev
              </button>
              <button
                type="button"
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                disabled={page === totalPages}
                className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </>
      )}
      <TaskDetailsDrawer
        task={activeTask}
        gitUsername={gitUsername || "your-name"}
        isOpen={Boolean(activeTask)}
        onClose={() => setActiveTask(null)}
      />
    </section>
  );
}
