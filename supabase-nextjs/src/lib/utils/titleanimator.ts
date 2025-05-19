// Wraps a single element and runs the glitch animation on it
// encapsulates the “wrap spans + animate one word” logic
const specialChars = '!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnm'.split('');

export default class TitleAnimator {
  private spans: HTMLSpanElement[];

  constructor(
    private element: HTMLElement,
    private onDone: () => void,
    private flickerDuration = 800, // total ms to flicker each letter
    private flickerInterval = 50   // ms per random-char update
  ) {
    const text = element.innerText;
    element.innerHTML = text
      .split('')
      .map(
        (ch) =>
          `<span data-orig="${ch}" style="opacity:0;transform:translateX(-10px);display:inline-block">${ch}</span>`
      )
      .join('');
    this.spans = Array.from(element.querySelectorAll('span'));
  }

  public async animate() {
    for (const span of this.spans) {
      span.style.opacity = '1';
      span.style.transform = 'translateX(0)';

      await this.animateSpan(span);
    }
    this.onDone();
  }

  private animateSpan(span: HTMLSpanElement): Promise<void> {
    return new Promise((resolve) => {
      const start = performance.now();

      const tick = () => {
        const elapsed = performance.now() - start;

        if (elapsed < this.flickerDuration && span.dataset.orig !== ' ') {
          span.innerText =
            specialChars[
              Math.floor(Math.random() * specialChars.length)
            ];
          setTimeout(tick, this.flickerInterval);
        } else {
          // reveal real character
          span.innerText = span.dataset.orig!;
          resolve();
        }
      };

      tick();
    });
  }

  public reset() {
    this.spans.forEach((span) => {
      span.style.opacity = '0';
      span.style.transform = 'translateX(-10px)';
      span.innerText = span.dataset.orig!;
    });
  }
}