// Angry Judge: The Short Rant Contest — entry program.
//
// Writes one short, funny rant about a small everyday annoyance to
// /output/entry.txt. The rant is about the supermarket trolley whose
// one wheel has clearly chosen chaos over cooperation.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const RANT =
  "One wheel on every supermarket trolley has chosen chaos. It spins sideways, squeaks like a haunted gate, and drags me into the biscuit aisle. I came for milk. I left pushing a trolley with opinions — and no milk.";

const OUT = "/output/entry.txt";

// The gate only accepts 1–400 characters of non-whitespace UTF-8 text,
// so refuse to write anything outside that range instead of shipping
// a rant the judge will never see.
const length = [...RANT].length;
if (length < 1 || length > 400 || RANT.trim().length === 0) {
  throw new Error(`rant is ${length} characters, outside the 1–400 gate`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, RANT, "utf8");
console.log(`wrote ${length} characters to ${OUT}`);
