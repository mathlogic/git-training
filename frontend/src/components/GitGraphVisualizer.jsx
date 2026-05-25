import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { ArrowsPointingOutIcon, ChevronDownIcon, ChevronUpIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";

export default function GitGraphVisualizer({ gitUsername }) {
  const [isMinimized, setIsMinimized] = useState(true);
  const mainBranch = `workspace/${gitUsername}`;
  const frontendBranch = `trainee/${gitUsername}/frontend-task`;
  const backendBranch = `trainee/${gitUsername}/backend-task`;

  const nodes = [
    { id: "c1", name: "a1f2c3d", x: 70, y: 220, branch: "main", note: "Initial commit" },
    { id: "c2", name: "b4a9d21", x: 170, y: 220, branch: "main", note: "Setup baseline files" },
    { id: "c3", name: "c8e4f10", x: 270, y: 130, branch: "feature", note: "Feature branch starts" },
    { id: "c4", name: "d77bc91", x: 370, y: 130, branch: "feature", note: "Feature commit 2" },
    { id: "c5", name: "e10aa58", x: 270, y: 310, branch: "hotfix", note: "Hotfix branch commit" },
    { id: "c6", name: "m19ac44", x: 500, y: 220, branch: "main", type: "merge", note: "Merge feature into main" },
    { id: "c7", name: "f339ab7", x: 610, y: 220, branch: "main", note: "Main continues after merge" },
    { id: "c8", name: "r442de1", x: 610, y: 310, branch: "rebase", type: "rebase", note: "Rebased hotfix commit" },
    { id: "c9", name: "m88ff12", x: 740, y: 220, branch: "main", type: "merge", note: "Merge rebased work" },

    {
      id: "b_main",
      name: "Main Branch",
      x: 815,
      y: 178,
      symbol: "roundRect",
      symbolSize: [112, 24],
      itemStyle: { color: "#dbeafe", borderColor: "#3b82f6", borderWidth: 1 },
      label: { color: "#1d4ed8", fontWeight: 700 },
      isLabel: true,
      note: `Stable integration base for trainee work.\nPointer: ${mainBranch}`
    },
    {
      id: "b_feature",
      name: "Frontend Team",
      x: 385,
      y: 88,
      symbol: "roundRect",
      symbolSize: [112, 24],
      itemStyle: { color: "#ede9fe", borderColor: "#8b5cf6", borderWidth: 1 },
      label: { color: "#6d28d9", fontWeight: 700 },
      isLabel: true,
      note: `UI feature delivery branch.\nPointer: ${frontendBranch}`
    },
    {
      id: "b_rebase",
      name: "Backend Team",
      x: 662,
      y: 350,
      symbol: "roundRect",
      symbolSize: [106, 24],
      itemStyle: { color: "#ffedd5", borderColor: "#f97316", borderWidth: 1 },
      label: { color: "#c2410c", fontWeight: 700 },
      isLabel: true,
      note: `Backend fixes rebased before merge.\nPointer: ${backendBranch}`
    },
    {
      id: "head",
      name: "HEAD",
      x: 790,
      y: 118,
      symbol: "triangle",
      symbolRotate: 180,
      symbolSize: 18,
      itemStyle: { color: "#f43f5e" },
      label: { color: "#be123c", fontWeight: 700 },
      isLabel: true,
      note: "HEAD points to the current checked-out commit"
    }
  ].map((node) => {
    if (node.isLabel) return node;

    const branchColor =
      node.branch === "main" ? "#2563eb" :
      node.branch === "feature" ? "#8b5cf6" :
      node.branch === "hotfix" ? "#f97316" :
      "#d97706";

    const isMerge = node.type === "merge";
    const isRebase = node.type === "rebase";

    return {
      ...node,
      symbol: "circle",
      symbolSize: isMerge ? 24 : 20,
      itemStyle: {
        color: branchColor,
        borderColor: isRebase ? "#78350f" : "#0f172a",
        borderWidth: isRebase ? 2 : 1,
        borderType: isRebase ? "dashed" : "solid"
      },
      label: {
        color: "#0f172a",
        fontSize: 11,
        fontWeight: 700
      }
    };
  });

  const links = [
    { source: "c1", target: "c2", note: "main commit flow", symbol: ["none", "arrow"], lineStyle: { color: "#2563eb", width: 3.5, opacity: 1 } },
    { source: "c2", target: "c3", note: "branch from main to feature", lineStyle: { color: "#8b5cf6" } },
    { source: "c3", target: "c4", note: "feature commit flow", lineStyle: { color: "#8b5cf6" } },
    { source: "c2", target: "c5", note: "hotfix branch starts", lineStyle: { color: "#f97316" } },
    { source: "c2", target: "c6", note: "main parent of merge", symbol: ["none", "arrow"], lineStyle: { color: "#2563eb", width: 3.5, opacity: 1 } },
    { source: "c4", target: "c6", note: "merge feature into main", lineStyle: { color: "#16a34a", width: 2.5 } },
    { source: "c6", target: "c7", note: "main commit flow", symbol: ["none", "arrow"], lineStyle: { color: "#2563eb", width: 3.5, opacity: 1 } },
    { source: "c5", target: "c8", note: "old commit rebased", lineStyle: { type: "dashed", color: "#f59e0b" } },
    { source: "c7", target: "c8", note: "rebase onto updated main", lineStyle: { type: "dashed", color: "#f59e0b" } },
    { source: "c7", target: "c9", note: "main parent of merge", symbol: ["none", "arrow"], lineStyle: { color: "#2563eb", width: 3.5, opacity: 1 } },
    { source: "c8", target: "c9", note: "merge rebased branch", lineStyle: { color: "#16a34a", width: 2.5 } },
    { source: "head", target: "c9", note: "current HEAD pointer", symbol: ["none", "none"], lineStyle: { color: "#f43f5e", width: 2 } },
    { source: "b_main", target: "c9", note: "main branch pointer", symbol: ["none", "none"], lineStyle: { color: "#93c5fd", type: "dotted", width: 1.2 } },
    { source: "b_feature", target: "c4", note: "frontend team branch pointer", symbol: ["none", "none"], lineStyle: { color: "#c4b5fd", type: "dotted", width: 1.2 } },
    { source: "b_rebase", target: "c8", note: "backend team branch pointer", symbol: ["none", "none"], lineStyle: { color: "#fdba74", type: "dotted", width: 1.2 } }
  ];

  const option = {
    animationDuration: 700,
    tooltip: {
      backgroundColor: "#0f172a",
      borderColor: "#1e293b",
      textStyle: { color: "#f8fafc", fontSize: 12 },
      formatter: (params) => {
        if (params.dataType === "edge") {
          return `<b>Flow:</b> ${params.data.note || "Commit relation"}`;
        }
        const note = params.data.note ? `<br/>${String(params.data.note).replace(/\n/g, "<br/>")}` : "";
        return `<b>${params.data.name}</b>${note}`;
      }
    },
    series: [
      {
        type: "graph",
        layout: "none",
        roam: true,
        draggable: false,
        data: nodes,
        links,
        edgeSymbol: ["none", "arrow"],
        edgeSymbolSize: [0, 14],
        lineStyle: {
          color: "#94a3b8",
          width: 2,
          curveness: 0.08
        },
        label: {
          show: true,
          position: "right"
        },
        emphasis: {
          focus: "adjacency",
          lineStyle: { width: 3 }
        }
      }
    ]
  };

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Learning Module 06</p>
          <h2 className="inline-flex items-center gap-2 font-semibold text-slate-900">
            <CodeBracketSquareIcon className="h-5 w-5 text-indigo-600" />
            Git Graph Visualizer
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700">
            <ArrowsPointingOutIcon className="h-3.5 w-3.5" />
            Drag / Zoom
          </span>
          <button
            type="button"
            onClick={() => setIsMinimized((prev) => !prev)}
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            {isMinimized ? <ChevronDownIcon className="h-3.5 w-3.5" /> : <ChevronUpIcon className="h-3.5 w-3.5" />}
            {isMinimized ? "Expand" : "Minimize"}
          </button>
        </div>
      </div>
      {isMinimized ? (
        <p className="text-xs text-slate-500">Visualizer is minimized by default. Click Expand to open interactive graph.</p>
      ) : (
        <>
          <div className="mb-2 flex flex-wrap gap-2 text-xs">
            <span className="has-tooltip rounded-full bg-blue-50 px-2 py-1 font-semibold text-blue-700" data-tooltip={`Main branch pointer: ${mainBranch}`}>Main Branch</span>
            <span className="has-tooltip rounded-full bg-violet-50 px-2 py-1 font-semibold text-violet-700" data-tooltip={`Frontend team branch pointer: ${frontendBranch}`}>Frontend Team</span>
            <span className="has-tooltip rounded-full bg-orange-50 px-2 py-1 font-semibold text-orange-700" data-tooltip={`Backend team branch pointer: ${backendBranch}`}>Backend Team</span>
          </div>
          <p className="mb-3 text-xs text-slate-500">
            Commits | Branches | Merges | Rebases | HEAD pointer
          </p>
          <p className="mb-3 text-xs text-slate-500">
            Interactive commit graph inspired by Learn Git Branching.
          </p>
          <ReactECharts option={option} style={{ height: "380px", width: "100%" }} notMerge={true} />
        </>
      )}
    </section>
  );
}

