import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

/** Full-screen player for a project's animated explainer episode. */
export default function EpisodePlayer({ project, onClose }: { project: Project; onClose: () => void }) {
  useScrollLock(true);
  const video = useRef<HTMLVideoElement>(null);
  const [needsSound, setNeedsSound] = useState(false);
  const [ended, setEnded] = useState(false);

  // Start with sound; if the browser blocks it, play muted and offer a "tap for sound" button.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    v.play().catch(() => {
      v.muted = true;
      setNeedsSound(true);
      v.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && video.current && document.activeElement !== video.current) {
        e.preventDefault();
        if (video.current.paused) video.current.play();
        else video.current.pause();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const replay = () => {
    if (!video.current) return;
    setEnded(false);
    video.current.currentTime = 0;
    video.current.play();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[145] flex flex-col bg-black/95 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} episode`}
    >
      <div className="flex items-center justify-between gap-4 px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-10 sm:pt-6">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-crimson-2 sm:text-[11px]">
            <span className="font-display text-base tracking-normal">A</span> Original · Episode
          </p>
          <h2 className="truncate font-display text-3xl leading-none tracking-wide text-bone sm:text-5xl">{project.title}</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          data-cursor="close"
          className="shrink-0 rounded-full bg-bone px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink transition hover:bg-white"
        >
          BACK TO BROWSE
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-3 py-4 sm:px-10">
        <motion.div
          className="relative w-full max-w-6xl"
          initial={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <video
            ref={video}
            src={project.video}
            poster={project.videoPoster}
            controls
            playsInline
            preload="auto"
            onEnded={() => setEnded(true)}
            onPlay={() => setEnded(false)}
            className="aspect-video max-h-[80vh] w-full rounded-xl bg-black shadow-[0_30px_120px_rgba(229,19,43,0.25)] ring-1 ring-white/10"
          />
          {needsSound && (
            <button
              type="button"
              onClick={() => {
                if (!video.current) return;
                video.current.muted = false;
                setNeedsSound(false);
              }}
              className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-bone px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink shadow-lg transition hover:bg-white"
            >
              🔊 TAP FOR SOUND
            </button>
          )}
          {ended && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-black/70 text-center">
              <p className="font-display text-4xl tracking-wide text-bone sm:text-6xl">THAT’S A WRAP</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button type="button" onClick={replay} className="rounded-md bg-bone px-6 py-3 text-sm font-bold text-ink transition hover:bg-white">
                  ↺ Replay
                </button>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="glass rounded-md px-6 py-3 text-sm font-semibold text-bone transition hover:bg-white/15">
                    ▶ Try it live ↗
                  </a>
                )}
                <button type="button" onClick={onClose} className="glass rounded-md px-6 py-3 text-sm font-semibold text-bone transition hover:bg-white/15">
                  Back to browse
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
