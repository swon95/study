export class Keyboard {
  // Private class fields
  #swichEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#swichEl = document.getElementById("switch");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : "" // boolean
      );
    });
  }
}
