// src/utils/WordGlitcher.ts
const SPECIAL_CHARS = '!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnm';

export default class WordGlitcher {
  private original: string;
  private el: HTMLElement;

  /**
   * @param el   the DOM element whose textContent we'll overwrite
   * @param onDone callback when the reveal is finished
   * @param glitchDuration how long to run the symbol‐scramble (ms)
   * @param interval      how often to switch symbols (ms)
   */
  constructor(
    el: HTMLElement,
    private onDone: () => void,
    private glitchDuration = 1500,
    private interval = 60
  ) {
    this.el = el;
    this.original = el.textContent || '';
  }

  public async run() {
    const start = performance.now();
    // keep scrambling until glitchDuration elapses
    while (performance.now() - start < this.glitchDuration) {
      this.el.textContent = this.randomize();
      // small pause
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, this.interval));
    }

    // final reveal
    this.el.textContent = this.original;
    this.onDone();
  }

  private randomize() {
    return Array.from(this.original)
      .map((ch) =>
        // leave spaces intact
        ch === ' ' ? ' ' : SPECIAL_CHARS[Math.floor(Math.random() * SPECIAL_CHARS.length)]
      )
      .join('');
  }
}
