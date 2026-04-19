import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import { join } from "node:path";

const timestampCache = new Map<string, Date>();

function getGitModifiedAt(relativePath: string): Date | null {
  try {
    const output = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", relativePath],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }
    ).trim();

    if (!output) return null;

    const parsed = new Date(output);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  } catch {
    return null;
  }
}

function getFsModifiedAt(relativePath: string): Date | null {
  try {
    return statSync(join(process.cwd(), relativePath)).mtime;
  } catch {
    return null;
  }
}

export function getFileLastModified(relativePath: string): Date {
  const cached = timestampCache.get(relativePath);
  if (cached) return cached;

  const gitModifiedAt = getGitModifiedAt(relativePath);
  const fsModifiedAt = getFsModifiedAt(relativePath);

  const resolved =
    gitModifiedAt && fsModifiedAt
      ? new Date(Math.max(gitModifiedAt.getTime(), fsModifiedAt.getTime()))
      : gitModifiedAt ?? fsModifiedAt ?? new Date();

  timestampCache.set(relativePath, resolved);
  return resolved;
}

export function getLatestLastModified(paths: string[]): Date {
  const timestamps = Array.from(new Set(paths)).map((path) =>
    getFileLastModified(path).getTime()
  );

  return new Date(Math.max(...timestamps));
}
