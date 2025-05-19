//Client component that renders your words and kicks off the hook
'use client'
import React, {useEffect, useRef } from 'react'
import { useWordCycler } from '@/lib/hooks/usewordcycler'
import styles from '../ui/randomwordglitch.module.css'
import TitleAnimator from '@/lib/utils/titleanimator'
import words from '@/app/play/words.json'
import WordGlitcher from '@/lib/utils/wordglitcher'
/**
 * Renders all your target words inside .random-word spans,
 * then kicks off the cycle hook.
 */
// src/components/RandomWordGlitch.tsx


type Props = {
  pauseMs?: number;
  glitchDuration?: number;
  interval?: number;
};

export default function RandomWordGlitch({
  pauseMs = 1500,
  glitchDuration = 1000,
  interval = 50,
}: Props) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;
    let cancelled = false;

    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function cycle() {
      if (cancelled) return;

      // 1) pick a random real word
      const word = words[Math.floor(Math.random() * words.length)];
      const w = word.word;
      elRef.current!.textContent = w;

      // 2) glitch + reveal
      await new Promise<void>((resolve) => {
        const g = new WordGlitcher(
          elRef.current!,
          resolve,
          glitchDuration,
          interval
        );
        g.run();
      });

      // 3) pause on the real word
      await wait(pauseMs);

      // 4) next loop
      cycle();
    }

    cycle();
    return () => {
      cancelled = true;
    };
  }, [pauseMs, glitchDuration, interval]);

  return (
    <div
      ref={elRef}
      style={{ fontSize: '75px', fontFamily: 'monospace', display: 'inline-block' }}
    />
  );
}

// type Props = {
//   words: string[]
//   pauseMs?: number
// }

// export default function RandomWordGlitch({ pauseMs = 1500 }: Props) {
//   const elRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!elRef.current) return
//     const el = elRef.current

//     const wait = (ms: number) =>
//       new Promise((resolve) => setTimeout(resolve, ms))

//     let animator: TitleAnimator

//     async function cycle() {
//       // pick a real word
//       const entry = words[Math.floor(Math.random() * words.length)]
//       const actualWord = entry.word;  
//       el.innerText = actualWord;

//       // build animator and run it
//       await new Promise<void>((resolve) => {
//         animator = new TitleAnimator(el, resolve)
//         animator.animate()
//       })

//       // pause, reset and repeat
//       await wait(pauseMs)
//       animator.reset()
//       cycle()
//     }

//     cycle()
//   }, [pauseMs])

//   return (
//     <div
//       ref={elRef}
//       style={{ fontSize: '2rem', fontFamily: 'monospace', display: 'inline-block' }}
//     />
//   )
// }