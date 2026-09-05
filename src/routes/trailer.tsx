import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { PageShell } from "@/components/prison/PageShell";
import { ClassifiedPanel, DataRow } from "@/components/prison/Classified";
import { trailer } from "@/config/prison";

export const Route = createFileRoute("/trailer")({
  head: () => ({
    meta: [
      { title: "Transmission 001 — PRISON STREAM" },
      {
        name: "description",
        content:
          "The official Prison Stream trailer. Transmission pending — no footage has been released yet.",
      },
      { property: "og:title", content: "Transmission 001 — PRISON STREAM" },
      { property: "og:description", content: "Transmission pending." },
    ],
  }),
  component: TrailerPage,
});

function TrailerPage() {
  const [playing, setPlaying] = useState(false);

  return (
    <PageShell
      kicker={trailer.label}
      title="Official trailer"
      subtitle="A single feed, routed through the facility's monitoring system."
    >
      <div className="panel corner-marks grain vignette relative aspect-video overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-foreground/[0.06] to-transparent" />
        <div className="absolute top-3 left-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" /> REC
        </div>
        <div className="absolute top-3 right-4 font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
          CAM 001 — MAIN GATE
        </div>

        {trailer.released && trailer.url ? (
          playing ? (
            <video
              src={trailer.url}
              controls
              autoPlay
              className="h-full w-full object-cover"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group flex h-full w-full flex-col items-center justify-center gap-4"
            >
              <span className="flex h-16 w-16 items-center justify-center border border-rust bg-rust/15 transition-colors group-hover:bg-rust/30">
                <Play className="h-6 w-6" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase">
                Play transmission
              </span>
            </button>
          )
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <span className="animate-flicker font-display text-3xl tracking-[0.15em] sm:text-5xl">
              Transmission pending
            </span>
            <span className="label-mono">No footage cleared for release</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.28)_0px,rgba(0,0,0,0.28)_1px,transparent_1px,transparent_4px)] opacity-70" />
      </div>

      <div className="mt-8 max-w-lg">
        <ClassifiedPanel title="Media record">
          <DataRow label="Transmission" value={trailer.label} tone="ok" />
          <DataRow
            label="Status"
            value={trailer.released ? "RELEASED" : "PENDING"}
            tone={trailer.released ? "ok" : "warn"}
          />
          <DataRow label="Runtime" value={trailer.runtime} tone="muted" />
          <DataRow label="Release date" value="CLASSIFIED" tone="muted" />
        </ClassifiedPanel>
      </div>
    </PageShell>
  );
}
