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
