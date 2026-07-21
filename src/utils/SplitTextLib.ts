/* Free SplitText replacement — wraps chars/words in <span> elements */

interface SplitOptions {
  type?: string;
  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;
}

export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private originals: HTMLElement[] = [];

  constructor(target: string | HTMLElement | HTMLElement[], options: SplitOptions = {}) {
    const type = options.type || "chars";
    const targets = typeof target === "string"
      ? Array.from(document.querySelectorAll<HTMLElement>(target))
      : Array.isArray(target)
        ? [...target]
        : [target];

    targets.forEach((el) => {
      this.originals.push(el);
      const text = el.textContent || "";
      el.setAttribute("data-split-original", text);

      if (type.includes("chars") || type.includes("words")) {
        const words = text.split(/(\s+)/);
        el.innerHTML = "";

        words.forEach((word) => {
          if (/^\s+$/.test(word)) {
            el.appendChild(document.createTextNode(word));
          } else {
            const wordSpan = document.createElement("span");
            wordSpan.className = options.wordsClass || "split-word";
            wordSpan.style.display = "inline-block";
            wordSpan.style.whiteSpace = "nowrap";

            if (type.includes("chars")) {
              Array.from(word).forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = options.charsClass || "split-char";
                charSpan.style.display = "inline-block";
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
                this.chars.push(charSpan);
              });
            } else {
              wordSpan.textContent = word;
            }

            el.appendChild(wordSpan);
            this.words.push(wordSpan);
          }
        });

        if (type.includes("lines")) {
          this.detectLines(el);
        }
      }
    });
  }

  private detectLines(container: HTMLElement) {
    const wordSpans = container.querySelectorAll<HTMLElement>(".split-word");
    let currentTop = -1;
    let lineEl: HTMLElement | null = null;

    wordSpans.forEach((word) => {
      const rect = word.getBoundingClientRect();
      if (rect.top !== currentTop) {
        currentTop = rect.top;
        lineEl = document.createElement("span");
        lineEl.className = "split-line";
        lineEl.style.display = "block";
        word.parentNode?.insertBefore(lineEl, word);
      }
      if (lineEl) {
        lineEl.appendChild(word);
      }
      this.lines.push(word);
    });
  }

  revert() {
    this.originals.forEach((el) => {
      const original = el.getAttribute("data-split-original");
      if (original !== null) {
        el.textContent = original;
        el.removeAttribute("data-split-original");
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
