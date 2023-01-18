export class Keyboard {
  // Private class fields
  // El == Element
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;
  // 키보드로 입력 중 마우스 입력이 안되게 예외처리
  #keyPress = false;
  #mouseDown = false;

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
    this.#keyboardEl.addEventListener(
      "mousedown",
      this.#onMouseDown.bind(this)
    );
    document.addEventListener("mouseup", this.#onMouseUp.bind(this));
  }

  #onMouseUp(event) {
    if (this.#keyPress) return;
    this.#mouseDown = false;

    const keyEl = event.target.closest("div.key");
    // !!undefined = false
    // !undefined = true
    const isActive = !!keyEl?.classList.contains("active"); // undefined == false
    const val = keyEl?.dataset.val; // data-val='1' dataset.val

    // Space, Backspace 예외
    if (isActive && !!val && val !== "Space" && val !== "Backspace") {
      this.#inputEl.val += val;
    }
    if (isActive && val === "Space") {
      this.#inputEl.value += " ";
    }
    if (isActive && val === "Backspace") {
      this.#inputEl.value = this.#inputEl.value.slice(0, -1);
    }
    this.#keyboardEl.querySelector(".active")?.classList.remove("active");
  }

  #onMouseDown(event) {
    if (this.#keyPress) return;
    this.#mouseDown = true;
    event.target.closest("div.key")?.classList.add("active"); // closest == 부모El 방향으로 선택자와 일치되는 요소를 탐색
  }

  #onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, ""); // 공백으로 치환
  }

  #onKeyDown(event) {
    if (this.#mouseDown) return;
    this.#keyPress = true;

    // console.log(event.code);

    // 정규식의 test 메소드를 사용
    // console.log(event.key, /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));
    this.#inputGroupEl.classList.toggle(
      "error-message",
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)
    );

    // console.log(event.code);
    // console.log(event.key, /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));

    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add("active"); // Optional chaining
  }

  #onKeyUp(event) {
    if (this.#mouseDown) return;
    this.#keyPress = false;

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
