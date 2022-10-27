interface Todo {
    title: string
    description: string
  }
  
  // obj 매개변수 타입에 Partial Utility types을 추가해주세요
  function updateTodo(obj: Partial<Todo>) { 
    // updateTodo 메소드는 Todo 인터페이스 타입으로 선언되어있음
    // function updateTodo(obj: Todo) {
    return obj;
  }
  
  // updateTodo 함수를 호출 시, description 이 누락된 title 프로퍼티만 호출하고 있기 때문에 에러 발생
  const result = updateTodo({
    title: "title",
    // 만약 이 부분에 description 프로퍼티를 추가 해 준다면 정상 실행 하겠지만, 추가하지 않고 매개변수 타입을 수정해줌
    // description: 'description'
  })
  
  // title 값만 출력하게 코드를 수정해라
  console.log(result); // { title: 'title' } 출력