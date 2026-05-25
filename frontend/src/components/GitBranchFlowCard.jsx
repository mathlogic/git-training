import {
  ArrowPathRoundedSquareIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";

export default function GitBranchFlowCard() {
  return (
    <div className="has-tooltip rounded-xl border border-gray-200 bg-white p-4 shadow-sm" data-tooltip="Visual branch map for main and feature flow">
      <h2 className="inline-flex items-center gap-2 font-semibold text-slate-900">
        <CircleStackIcon className="h-4 w-4 text-indigo-600" />
        Branch Flow Chart
      </h2>
      <p className="mt-1 text-xs text-slate-500">`main` stays stable while feature branches merge back.</p>

      <div className="relative mt-3 h-44 overflow-hidden rounded-lg border border-indigo-200/40 bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 p-3 text-white">
        <div className="absolute left-5 top-5 h-28 w-0.5 bg-sky-300/80" />
        <div className="absolute left-5 top-14 h-0.5 w-20 bg-violet-300/80" />
        <div className="absolute left-5 top-24 h-0.5 w-24 bg-emerald-300/80" />
        <div className="absolute left-24 top-14 h-10 w-0.5 bg-violet-300/70" />
        <div className="absolute left-[116px] top-24 h-9 w-0.5 bg-emerald-300/70" />
        <div className="absolute left-24 top-[92px] h-0.5 w-5 bg-violet-300/70" />

        <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-sky-500/20 px-2 py-1 text-[11px]">
          <CircleStackIcon className="h-3.5 w-3.5" />
          main
        </div>
        <div className="absolute left-24 top-9 inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-1 text-[11px]">
          <CodeBracketIcon className="h-3.5 w-3.5" />
          feature/ui
        </div>
        <div className="absolute left-28 top-[70px] inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-[11px]">
          <CodeBracketIcon className="h-3.5 w-3.5" />
          feature/api
        </div>
        <div className="absolute left-2 bottom-2 inline-flex items-center gap-1 rounded-full bg-cyan-500/20 px-2 py-1 text-[11px]">
          <ArrowPathRoundedSquareIcon className="h-3.5 w-3.5" />
          merge
        </div>

        <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1 text-[11px]">
          <CheckBadgeIcon className="h-3.5 w-3.5 text-green-300" />
          main updated
        </div>
      </div>
    </div>
  );
}
