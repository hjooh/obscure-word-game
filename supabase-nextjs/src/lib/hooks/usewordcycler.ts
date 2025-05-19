//React hook that drives the “pick, animate, wait, repeat” loop
import { useEffect } from 'react';
import TitleAnimator from '@/lib/utils/titleanimator';

export function useWordCycler(
  selector = '.random-word',
  pauseMs = 1000
) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const animators: TitleAnimator[] = [];
    els.forEach((el) => {
      // stash original char in data-orig so we can reset easily
      el.querySelectorAll('span').forEach((span) => {
        span.dataset['orig'] = span.innerText;
      });
      animators.push(new TitleAnimator(el, () => {}));
    });

    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function cycle() {
      const idx = Math.floor(Math.random() * animators.length);
      const anim = animators[idx];
      await new Promise<void>((resolve) => {
        anim.reset();
        (anim as any).onDone = resolve;
        anim.animate();
      });
      await wait(pauseMs);
      cycle();
    }

    cycle();
  }, [selector, pauseMs]);
}
