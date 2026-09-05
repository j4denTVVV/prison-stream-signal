import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScanLine } from "lucide-react";
import { PageShell } from "@/components/prison/PageShell";
import { ClassifiedPanel, DataRow } from "@/components/prison/Classified";
import { Reveal } from "@/components/prison/Reveal";
import { FileCard } from "@/components/prison/FileCard";
import { getRosterFiles } from "@/lib/roster";
import { roster, terms } from "@/config/prison";

export const Route = createFileRoute("/reveals")({
  head: () => ({
    meta: [
      { title: "Reveals — PRISON STREAM" },
      {
        name: "description",
        content:
          "Each Prison Stream reveal unlocks a classified file. Identity unknown, status classified, reveal coming soon.",
      },
      { property: "og:title", content: "Reveals — PRISON STREAM" },
      { property: "og:description", content: "Identity unknown. Reveal: coming soon." },
    ],
  }),
  component: RevealsPage,
});

function ClearanceDemo() {
  const [scanning, setScanning] = useState(false);
  const [granted, setGranted] = useState(false);

  const run = () => {
    if (scanning) return;
    setScanning(true);
    setGranted(false);
    setTimeout(() => {
      setScanning(false);
      setGranted(true);
      setTimeout(() => setGranted(false), 2600);
    }, 1800);
  };

  return (
    <div className="panel corner-marks grain relative overflow-hidden p-8">
      <span className="label-mono text-rust">Clearance terminal</span>
      <p className="mt-4 font-display text-2xl">Request access</p>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        This is how a reveal will feel: a sealed file, a scan, and a clearance either granted or
        refused.
      </p>

      <div className="relative mt-8 h-28 border border-border bg-background/70">
        {scanning ? (
          <div className="absolute inset-x-0 top-0 h-full">
            <div className="h-px w-full animate-sweep bg-rust" />
          </div>
        ) : null}
        <div className="flex h-full items-center justify-center">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase">
            {scanning ? (
              <span className="text-warning">SCANNING SUBJECT...</span>
            ) : granted ? (
              <span className="text-warning">ACCESS AUTHORIZED — FILE STILL SEALED</span>
            ) : (
              <span className="text-muted-foreground">AWAITING INPUT</span>
            )}
          </span>
        </div>
      </div>

      <button
        onClick={run}
        className="mt-6 inline-flex items-center gap-3 border border-rust bg-rust/15 px-6 py-3 font-mono text-[11px] tracking-[0.28em] uppercase transition-colors hover:bg-rust/30"
      >
        <ScanLine className="h-4 w-4" /> Run scan
      </button>
    </div>
  );
}

function RevealsPage() {
  const files = getRosterFiles();
  const revealed = roster.filter((r) => r.revealed);

  return (
    <PageShell
      kicker="Announcements"
      title="The reveals"
      subtitle={`Every confirmed name unlocks a sealed file. Until then: identity unknown, status classified, reveal coming soon.`}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <ClassifiedPanel title="Reveal log">
            <DataRow
              label="Revealed"
              value={revealed.length === 0 ? "NONE" : String(revealed.length).padStart(2, "0")}
              tone={revealed.length === 0 ? "muted" : "ok"}
            />
            <DataRow label="Next reveal" value="UNKNOWN" tone="warn" />
            <DataRow label="Schedule" value="CLASSIFIED" tone="muted" />
            <DataRow label={terms.people.toUpperCase()} value="CLASSIFIED" tone="muted" />
          </ClassifiedPanel>
        </Reveal>
        <Reveal delay={120}>
          <ClearanceDemo />
        </Reveal>
      </div>

      <h2 className="mt-16 mb-6 text-2xl">Sealed files</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {files.map((f, i) => (
          <Reveal key={f.file} delay={(i % 4) * 80}>
            <FileCard entry={f} index={i} />
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
