import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { cacheLife } from "next/cache";
import { parseResume } from "./resume-parser";
export async function getResume() {
  "use cache";
  cacheLife("max");
  const resume = parseResume(
    await readFile(path.join(process.cwd(), "content/resume.md"), "utf8"),
  );
  return resume;
}
