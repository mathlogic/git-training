import type { Task, Trainee } from "../types";

export const trainees: Trainee[] = [
  { id: "alice", name: "Alice Thomas", team: "Frontend Team" },
  { id: "rahul", name: "Rahul Verma", team: "Platform Team" },
  { id: "meera", name: "Meera Shah", team: "QA Team" }
];

export const tasks: Task[] = [
  { id: 1, code: "T01", title: "Clone + branch setup", phase: "core", points: 5, concept: "Git basics" },
  { id: 2, code: "T02", title: "Git identity", phase: "core", points: 5, concept: "Config" },
  { id: 3, code: "T03", title: "Basic commit", phase: "core", points: 5, concept: "Commit flow" },
  { id: 4, code: "T04", title: ".gitignore hygiene", phase: "core", points: 5, concept: "Ignore rules" },
  { id: 5, code: "T05", title: "Push + PR basics", phase: "core", points: 5, concept: "Remote flow" },
  { id: 19, code: "T19", title: "Autosquash cleanup", phase: "advanced", points: 5, concept: "History cleanup" },
  { id: 20, code: "T20", title: "Release branch flow", phase: "advanced", points: 5, concept: "Release process" }
];
