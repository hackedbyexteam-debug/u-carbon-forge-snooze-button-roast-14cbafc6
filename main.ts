// Snooze Button Roast.
// One original one-line roast of an alarm clock ringing at 6 AM on a
// Saturday. The roast turns on a fresh angle — the snooze button as a
// duel: you hit snooze, the alarm comes back nine minutes later like
// it rehearsed the comeback — with concrete images (6 a.m., Saturday,
// nine minutes, the classic snooze interval) and the payoff in the
// last few words. Entry is 114 chars, inside the 200-char gate.
// No "I hate mornings", no "who invented the alarm", no "snooze is my
// best friend": all of those are the field's modal lines.
import fs from "node:fs";

const ENTRY =
  "I hit snooze at 6 a.m. on Saturday and the alarm came back nine minutes later, like it had rehearsed the comeback.";

const GATE_MAX_CHARS = 200;

const trimmed = ENTRY.trim();
if (trimmed.length === 0 || ENTRY.length > GATE_MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (
  !trimmed.includes("alarm") ||
  !trimmed.includes("6 a.m.") ||
  !trimmed.includes("Saturday")
) {
  throw new Error("entry must roast the 6 AM Saturday alarm");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, ENTRY);

console.log(`entry written to ${outDir}/entry.txt (${ENTRY.length} chars)`);
