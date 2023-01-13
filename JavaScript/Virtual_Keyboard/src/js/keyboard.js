export class Keyboard {
  // Private class fields
  // El == Element
  #swichEl;
  #fontSelectEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#swichEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : "" // boolean
      );
    });
    this.#fontSelectEl.addEventListener("change", (event) => {
      // 폰트 적용
      document.body.style.fontFamily = event.target.value;
      //   console.log(event.target.value);
    });
  }
}
