import { placeholderFiles, roster, type RosterEntry } from "@/config/prison";

/** Real announcements first, then unnamed placeholder files. */
export function getRosterFiles(): RosterEntry[] {
  const revealed = roster.filter((r) => r.revealed);
  const used = new Set(revealed.map((r) => r.file));
  const placeholders: RosterEntry[] = [];
  let n = 1;
  while (placeholders.length < Math.max(0, placeholderFiles)) {
    const file = String(n).padStart(3, "0");
    if (!used.has(file)) placeholders.push({ file, revealed: false });
    n++;
  }
  return [...revealed, ...placeholders];
}

export function findFile(fileId: string): RosterEntry {
  return getRosterFiles().find((f) => f.file === fileId) ?? { file: fileId, revealed: false };
}

/** Normalise a name for search: case-insensitive, ignores spaces/symbols. */
export function normalizeName(input: string): string {
  return input
    .toLowerCase()
    .replace(/£/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export function clearanceOf(entry: RosterEntry): "CLASSIFIED" | "CONFIRMED" | "REVEALED" {
  return entry.clearance ?? (entry.revealed ? "CONFIRMED" : "CLASSIFIED");
}

/** Every creator in the database that carries a name. */
export function creatorDatabase(): RosterEntry[] {
  return roster.filter((r) => !!r.name);
}

/** Case-insensitive lookup across names, aliases and usernames. */
export function searchCreator(query: string): RosterEntry | undefined {
  const q = normalizeName(query);
  if (!q) return undefined;
  return creatorDatabase().find((r) => {
    const keys = [r.name, r.username, ...(r.aliases ?? [])].filter(Boolean) as string[];
    return keys.some((k) => normalizeName(k) === q);
  });
}
