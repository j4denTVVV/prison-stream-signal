import { useEffect, useState } from "react";
import { terms } from "@/config/prison";

/** Easter egg: even the terminology hasn't been confirmed. */
export function TerminologyTease() {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const id = setInterval(() => {
      setI((prev) => {
        if (prev + 1 >= terms.candidates.length) {
          setDone(true);
          return prev;
        }
        return prev + 1;
      });
    }, 1400);
    return () => clearInterval(id);
  }, [done]);

  useEffect(() => {
    if (!done) return;
    const id = setTimeout(() => {
      setDone(false);
      setI(0);
    }, 3600);
    return () => clearTimeout(id);
  }, [done]);

  return (
    <div className="panel corner-marks grain flex flex-col items-center justify-center gap-3 px-6 py-14 text-center">
      <span className="label-mono">Terminology</span>
      <p
        key={done ? "answer" : terms.candidates[i]}
        className="animate-rise font-display text-4xl leading-none font-bold sm:text-6xl"
      >
        {done ? (
          <span className="text-rust">{terms.candidatesAnswer}</span>
        ) : (
          terms.candidates[i]
        )}
      </p>
      <p className="max-w-md font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        Even we haven't confirmed what they'll be called.
      </p>
    </div>
  );
}
