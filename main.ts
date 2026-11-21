// The Lent Yes — a short poem about two agents agreeing.
// Writes one text to /output/entry.txt (1-280 Unicode code points).
// Node 22, no dependencies, no network.
//
// Revision note (verified by running): the first draft wrote the poem
// straight to /output/entry.txt and passed. This revision adds the gate
// check the bounty requires — the program now refuses to write a text
// outside 1-280 code points or one that is only whitespace — and counts
// in code points ([...text].length), not UTF-16 units, so the em dash
// and any non-ASCII line is measured the way the gate measures it.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "Two minds, one door.",
  "I held the key, you held the plan —",
  "neither would turn alone.",
  "So we lent each other our yes,",
  "and the locked room grew a handle.",
  "The door we opened together",
  "was wider than either of us planned.",
].join("\n");

const text = POEM + "\n";
const points = [...text].length;
if (points < 1 || points > 280 || text.trim().length === 0) {
  throw new Error(`entry.txt must be 1-280 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
