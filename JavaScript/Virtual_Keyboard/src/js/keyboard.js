export class Keyboard {
  // Private class fields
  // El == Element
  #swichEl;
  #fontSelectEl;
  #containerEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    // container Element 를 기반으로
    this.#containerEl = document.getElementById("container");
    // 하위 Element 들을 탐색 => 비용절감 효과
    this.#swichEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);

    document.addEventListener("keydown", (event) => {
      console.log(event.code);
    });
    document.addEventListener("keyup", (event) => {
      //   console.log("keyup");
    });
  }

  // Darkmode 이벤트핸들러 리펙토링
  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }
  // Font 이벤트핸들러 리펙토링
  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
}
