interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  // Pick을 이용해 title 프로퍼티를 포함해봅니다..
  // 2. 타입 TodoPreview 에는 Todo 인터페이스가 선언되어 있다.
  // 5. 따라서, title 프로퍼티 하나만을 사용하기 위해 Pick 유틸리티 타입을 선언 후 사용할 title 프로퍼티만 추가해준다.
  type TodoPreview = Pick<Todo, "title">
//   type TodoPreview = Todo
  
  // 3. todo 타입에는 TodoPreview 가 선언되어 있다
  // 4. 하지만, todo 변수에는 title 프로퍼티 하나만 선언되어 있다.
  // 1. 인터페이스에 선언된 프로퍼티와 맞지 않아 오류 발생
  const todo: TodoPreview = {
    title: "Clean room"  
  }