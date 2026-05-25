import companyLogo from "../mathlogic_logo.jpg";
import githubLogo from "../github_logo.png";
import { BoltIcon, CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function Header({ title, apiStatus }) {
  const statusMap = {
    connected: {
      dot: "bg-green-500",
      text: "API connected",
      tone: "border-green-200 bg-green-50 text-green-700"
    },
    error: {
      dot: "bg-red-500",
      text: "API offline",
      tone: "border-red-200 bg-red-50 text-red-700"
    },
    checking: {
      dot: "bg-gray-400",
      text: "Checking...",
      tone: "border-gray-200 bg-gray-50 text-gray-700"
    }
  };

  const current = statusMap[apiStatus] || statusMap.checking;
  const StatusIcon = apiStatus === "connected" ? CheckCircleIcon : apiStatus === "error" ? ExclamationCircleIcon : BoltIcon;

  return (
    <>
      {/* TASK-04-HINT: Add Tailwind classes to this header div for Task 04 */}
      <header
        className="has-tooltip grid grid-cols-1 gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
        data-tooltip="Platform title and backend connection status"
      >
        <div className="has-tooltip flex items-center gap-3" data-tooltip="MathLogic branding">
          <img
            src={companyLogo}
            alt="MathLogic logo"
            className="h-12 w-auto max-w-[180px] shrink-0 object-contain"
          />
        </div>
        <h1 className="inline-flex items-center justify-center gap-2 text-center text-xl font-bold text-slate-900">
          <img src={githubLogo} alt="GitHub logo" className="h-14 w-14 rounded-sm object-contain" />
          {title}
        </h1>
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs justify-self-center sm:justify-self-end ${current.tone}`}>
          <StatusIcon className="h-4 w-4" />
          <span className={`h-2 w-2 rounded-full ${current.dot}`} />
          {current.text}
        </span>
      </header>
    </>
  );
}
