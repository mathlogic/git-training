import { XMarkIcon } from "@heroicons/react/24/outline";
import CopyCommandButton from "./CopyCommandButton";

export default function TaskDetailsDrawer({ task, gitUsername, isOpen, onClose }) {
  if (!isOpen || !task) return null;

  const taskNumber = task.id.toString().padStart(2, "0");
  const workspaceBranch = `workspace/${gitUsername}`;
  const traineeBranch = `trainee/${gitUsername}`;
  const checkoutCommand = `git checkout ${workspaceBranch}`;
  const pullCommand = `git pull origin ${workspaceBranch}`;
  const isFirstTask = task.id === 1;
  const branchCommand = isFirstTask ? `git checkout -b ${traineeBranch}` : `git checkout ${traineeBranch}`;
  const branchCommandLabel = isFirstTask ? "Create Trainee Branch" : "Switch Trainee Branch";
  const validateCommand = `python check.py --task ${taskNumber}`;
  const pushCommand = `git push -u origin ${traineeBranch}`;

  return (
    <div className="fixed inset-0 z-50 flex">
      <button type="button" className="h-full w-full bg-slate-900/35" onClick={onClose} aria-label="Close task details drawer" />
      <aside className="relative ml-auto h-full w-full max-w-xl overflow-y-auto bg-white p-5 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <p className="text-xs font-semibold text-indigo-600">{task.code}</p>
            <h3 className="text-lg font-bold text-slate-900">{task.title}</h3>
            <p className="text-xs text-slate-500">{task.phase} • {task.points} pts • {task.concept}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-md border border-slate-200 p-1 text-slate-600 hover:bg-slate-50">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <section>
            <h4 className="mb-1 font-semibold text-slate-800">Objective</h4>
            <p className="text-slate-700">{task.expected}</p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-slate-800">Hint (File + Line)</h4>
            <p className="rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700">{task.hintFile} : line {task.hintLine}</p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-slate-800">Expected Output</h4>
            <p className="text-slate-700">{task.expected}</p>
          </section>

          <section>
            <h4 className="mb-2 font-semibold text-slate-800">Commands (Copy & Run)</h4>
            <div className="space-y-2">
              {[
                { label: "Checkout Workspace", command: checkoutCommand },
                { label: "Pull Latest", command: pullCommand },
                { label: branchCommandLabel, command: branchCommand },
                { label: "Run Validation", command: validateCommand },
                { label: "Push Branch", command: pushCommand }
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-2">
                  <code className="truncate text-xs text-slate-700">{item.command}</code>
                  <CopyCommandButton command={item.command} label={item.label} className="shrink-0" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}
