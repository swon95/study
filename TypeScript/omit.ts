interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  // Omit 유틸리티를 사용해 description 프로퍼티를 제거
  type TodoPreview = Omit<Todo, 'description'>
  // type TodoPreview = Todo
  

  // todo 변수에는 title, completed 값이 선언되어 있지만, 
  // Todo 인터페이스에는 description 까지 선언되어 있어 오류가 발생한다.
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,  
  }