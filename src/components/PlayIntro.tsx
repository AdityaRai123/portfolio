import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';

/**
 * "▶ Play Intro": darken → zoom into the portrait → the animated intro video
 * → fade back to the portfolio when it ends.
 */
export default function PlayIntro({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const reduced = useReducedMotionPref();
  const [phase, setPhase] = useState<'zoom' | 'video' | 'end'>(reduced ? 'video' : 'zoom');
  const [needsSound, setNeedsSound] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (phase !== 'zoom') return;
    const t = window.setTimeout(() => setPhase('video'), 1700);
    return () => clearTimeout(t);
  }, [phase]);

  // Start with sound; if the browser blocks it, play muted and offer a "tap for sound" button.
  useEffect(() => {
    if (phase !== 'video' || !video.current) return;
    const v = video.current;
    v.play().catch(() => {
      v.muted = true;
      setNeedsSound(true);
      v.play().catch(() => {});
    });
  }, [phase]);

  useEffect(() => {
    if (phase !== 'end') return;
    const t = window.setTimeout(onClose, 2200);
    return () => clearTimeout(t);
  }, [phase, onClose]);

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

  return (
    <motion.div
      className="fixed inset-0 z-[130] overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
      role="dialog"
      aria-modal="true"
      aria-label="Intro video"
    >
      {/* Zoom into the portrait */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center"
        initial={{ scale: 1, opacity: 1 }}
        animate={phase === 'zoom' ? { scale: [1, 1.08, 2.6], opacity: [0.9, 1, 0] } : { opacity: 0.1, scale: 1.25, filter: 'blur(4px)' }}
        transition={{ duration: phase === 'zoom' ? 1.7 : 1.2, ease: [0.7, 0, 0.2, 1], times: phase === 'zoom' ? [0, 0.3, 1] : undefined }}
        style={{ transformOrigin: '50% 30%' }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet}
          sizes="100vw"
          alt=""
          className="h-[88vh] w-auto max-w-none object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(120,10,25,0.35),transparent_70%)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-3 pb-20 pt-6 sm:px-10">
        <AnimatePresence mode="wait">
          {phase === 'video' && (
            <motion.div
              key="video"
              className="relative w-full max-w-6xl"
              initial={{ opacity: 0, scale: 1.06, filter: 'blur(14px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <video
                ref={video}
                src={profile.introVideo}
                poster={profile.introPoster}
                controls
                playsInline
                preload="auto"
                onEnded={() => setPhase('end')}
                className="aspect-video max-h-[78vh] w-full rounded-xl bg-black shadow-[0_30px_120px_rgba(229,19,43,0.25)] ring-1 ring-white/10"
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
            </motion.div>
          )}
          {phase === 'end' && (
            <motion.div key="end" className="text-center" initial={{ opacity: 0, letterSpacing: '0.6em' }} animate={{ opacity: 1, letterSpacing: '0.2em' }} transition={{ duration: 1.2, ease: EASE }}>
              <p className="font-display text-5xl text-bone sm:text-7xl">NOW STREAMING</p>
              <p className="mt-3 text-xs font-semibold tracking-[0.4em] text-mist">{profile.displayName.toUpperCase()}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10 sm:pb-8">
        <span className="hidden text-[11px] tracking-[0.2em] text-smoke sm:block">SPACE · ESC</span>
        <button
          type="button"
          onClick={onClose}
          data-cursor="close"
          className="ml-auto rounded-full bg-bone px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink transition hover:bg-white"
        >
          BACK TO BROWSE
        </button>
      </div>
    </motion.div>
  );
}
