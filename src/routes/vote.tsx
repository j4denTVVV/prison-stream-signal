import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageShell } from "@/components/prison/PageShell";
import { ClassifiedPanel } from "@/components/prison/Classified";
import { polls } from "@/config/prison";

export const Route = createFileRoute("/vote")({
  head: () => ({
    meta: [
      { title: "The Vote — PRISON STREAM" },
      {
        name: "description",
        content: "Have your say from the outside. Official Prison Stream polls and decisions.",
      },
      { property: "og:title", content: "The Vote — PRISON STREAM" },
      { property: "og:description", content: "Have your say from the outside." },
    ],
  }),
  component: VotePage,
});

function VotePage() {
  const [votes, setVotes] = useState<Record<string, string>>({});

  const open = polls.filter((p) => p.status === "OPEN");

  return (
    <PageShell
      kicker="The Vote"
      title="Have your say"
      subtitle="Some decisions get routed outside. When a poll opens, the outside world gets a voice."
    >
      {open.length === 0 ? (
        <ClassifiedPanel title="Poll status">
          <p className="font-display text-2xl">No open polls</p>
          <p className="mt-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            Nothing has been put to a vote yet.
          </p>
        </ClassifiedPanel>
      ) : (
        <div className="grid gap-8 lg:grid-cols-2">
          {open.map((poll) => {
            const chosen = votes[poll.id];
            return (
              <ClassifiedPanel key={poll.id} title={poll.id.toUpperCase()}>
                <p className="font-display text-xl leading-snug tracking-[0.05em]">
                  {poll.question}
                </p>
                <div className="mt-6 space-y-2">
                  {poll.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setVotes((v) => ({ ...v, [poll.id]: opt.id }));
                        toast.success("Vote recorded", {
                          description: "Your voice has been logged from the outside.",
                        });
                      }}
                      className={`block w-full border px-4 py-3 text-left font-mono text-[11px] tracking-[0.22em] uppercase transition-colors ${
                        chosen === opt.id
                          ? "border-rust bg-rust/15 text-foreground"
                          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <p className="label-mono mt-6">{poll.closes}</p>
              </ClassifiedPanel>
            );
          })}
        </div>
      )}
    </PageShell>
  );
}
