export class Keyboard {
  // Private class fields
  // El == Element
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;

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
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);

    // 키보드를 눌렀을 때
    document.addEventListener("keydown", (event) => {
      console.log(event.code);
      if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
        this.#keyboardEl
          .querySelector(`[data-code=${event.code}]`)
          .classList.add("active");
      }
    });
    // 누른 키보드를 뗏을 때
    document.addEventListener("keyup", (event) => {
      //   console.log("keyup");
      if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
        this.#keyboardEl
          .querySelector(`[data-code=${event.code}]`)
          .classList.remove("active");
      }
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
