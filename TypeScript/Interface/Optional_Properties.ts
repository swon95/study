// // width 프로퍼티를 optional로 변경해주세요.
// interface Config {
//     color: string,
//     width: number
//   }
  
//   function createSqure(config: Config): { color: string; area: number } {
//     return {
//       color: config.color,
//       area: 100 * (config.width ? config.width : 1), // width 프로퍼티를 선택적 속성으로 사용합니다.
//     }
//   }
  
//   const config = {
//     color : 'red'
//   };
  
//   createSqure(config);

// -----------------------------------------------------------------

interface Config {
    color: string,
    // 선택적 속성으로 만들 때 ? 추가
    width?: number
  }
  
  function createSqure(config: Config): { color: string; area: number } {
    return {
      color: config.color,
      area: 100 * (config.width ? config.width : 1),
  }
}
  
  // config 변수에서는 color 프로퍼티만 선언되어 있어 에러 발생
  const config = {
    color : 'red'
  };
  
  createSqure(config);