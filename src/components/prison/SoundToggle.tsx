import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Optional atmospheric hum. Muted by default, never autoplays,
 * generated with WebAudio so no asset is required.
 */
export function SoundToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => () => stopRef.current?.(), []);

  const toggle = async () => {
    if (on) {
      stopRef.current?.();
      stopRef.current = null;
      setOn(false);
      return;
    }
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = ctxRef.current ?? new Ctx();
    ctxRef.current = ctx;
    await ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // low industrial hum
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 52;
    const oscGain = ctx.createGain();
    oscGain.gain.value = 0.5;
    osc.connect(oscGain).connect(master);

    // filtered noise = distant CCTV static
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.35;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.12;
    noise.connect(filter).connect(noiseGain).connect(master);

    osc.start();
    noise.start();
    master.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 1.2);

    stopRef.current = () => {
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      setTimeout(() => {
        osc.stop();
        noise.stop();
      }, 500);
    };
    setOn(true);
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Mute ambience" : "Enable ambience"}
      className="hairline flex items-center gap-2 bg-card/60 px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:border-rust hover:text-foreground"
    >
      {on ? <Volume2 className="h-3.5 w-3.5 text-rust" /> : <VolumeX className="h-3.5 w-3.5" />}
      <span className="hidden sm:inline">{on ? "Ambience on" : "Ambience off"}</span>
    </button>
  );
}
