import {
  ArrowLongRightIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

const flowSteps = [
  { label: "Commit", tone: "bg-sky-100 text-sky-700", Icon: ClipboardDocumentCheckIcon },
  { label: "Push", tone: "bg-indigo-100 text-indigo-700", Icon: CloudArrowUpIcon },
  { label: "PR", tone: "bg-violet-100 text-violet-700", Icon: RocketLaunchIcon },
  { label: "Merge", tone: "bg-emerald-100 text-emerald-700", Icon: CheckBadgeIcon }
];

export default function GitDeliveryFlowCard() {
  return (
    <div className="has-tooltip rounded-xl border border-gray-200 bg-white p-4 shadow-sm" data-tooltip="Colorful release pipeline from local commit to main merge">
      <h2 className="inline-flex items-center gap-2 font-semibold text-slate-900">
        <RocketLaunchIcon className="h-4 w-4 text-violet-600" />
        PR Delivery Flow
      </h2>
      <p className="mt-1 text-xs text-slate-500">Feature branch journey into `main`.</p>

      <div className="mt-3 rounded-lg border border-violet-100 bg-gradient-to-r from-violet-50 via-indigo-50 to-cyan-50 p-3">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-1">
          {flowSteps.map((step, index) => {
            const { Icon } = step;
            const isLast = index === flowSteps.length - 1;
            return (
              <div key={step.label} className="contents">
                <div className={`flex flex-col items-center rounded-lg px-2 py-2 text-[11px] font-semibold ${step.tone}`}>
                  <Icon className="mb-1 h-4 w-4" />
                  {step.label}
                </div>
                {!isLast && <ArrowLongRightIcon className="h-4 w-4 text-slate-400" />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50 p-2 text-xs text-emerald-700">
        `main` branch = clean history + reviewed code + safe deploy.
      </div>
    </div>
  );
}
