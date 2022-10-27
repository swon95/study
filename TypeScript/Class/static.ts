// class Grid {
//     // origin 필드를 전역 멤버로 변경해주세요.
//     private origin = { x:0, y:0 }
    
//     // orign 필드 값을 출력할 수 있도록 아래 코드를 수정하세요.
//     calculateDistance(): void {
//       console.log(Grid.origin.x * Grid.origin.y);
//     }
//   }
  
//   const grid = new Grid();
  
//   // 외부에서 Grid origin 값 변경
//   Grid.origin = { x:3, y:3 } 
//   grid.calculateDistance(); // "9" 출력

// ---------------------------------------------------------------

class Grid {

    // origin 필드는 접근제어자가 private 이기 때문에 외부에서 수정할 시 에러 발생
    // 외부에서 사용할 수 있도록 전역멤버 static 으로 변경
    static origin = { x:0, y:0 }
    
 
    calculateDistance(): void {
      console.log(Grid.origin.x * Grid.origin.y);
    }
  }
  
  const grid = new Grid();
  
  
  Grid.origin = { x:3, y:3 } 
  grid.calculateDistance(); 