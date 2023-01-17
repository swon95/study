export class Keyboard {
  // Private class fields
  // El == Element
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;

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
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
    this.#inputEl = this.#inputGroupEl.querySelector("#input");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);

    // 키보드를 눌렀을 때
    document.addEventListener("keydown", this.#onKeyDown.bind(this));

    // 누른 키보드를 뗏을 때
    document.addEventListener("keyup", this.#onKeyUp.bind(this));

    this.#inputEl.addEventListener("input", this.#onInput);
  }

  #onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
  }

  #onKeyDown(event) {
    // console.log(event.code);

    // 정규식의 test 메소드를 사용
    // console.log(event.key, /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));
    this.#inputGroupEl.classList.toggle(
      "error",
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)
    );

    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add("active"); // Optional chaining
  }

  #onKeyUp(event) {
    //   console.log("keyup");
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove("active");
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
