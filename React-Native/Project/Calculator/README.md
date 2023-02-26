## 계산기 앱 클론코딩 ver.1

### `useState` 세팅 & 예외처리 🎁

1. 입력된 값이 보여지는 `state` <br>
2. 연산자를 클릭했을때의 `state` <br>
3. 이전에 입력된 값을 저장하는 `state` <br>
`=` 을 입력했을때, <br>
4. 저장된 피연산자를 담고있는 `state` <br>
5. 저장된 연산자를 담고있는 `state` <br>
6. 입력된 값의 유무에 따른 AC / C `state` <br>

<img src="https://user-images.githubusercontent.com/96659041/221429160-2aec71f6-3e0f-41ca-ac55-b2adf384bde1.gif" width="400" height="500">

### Custom Hooks 🔆
로직과 UI 를 분리함으로써 유지보수에 용이

<img src="https://user-images.githubusercontent.com/96659041/221429049-e2bf1cf4-e542-431b-87f5-afa3daf25ebb.png" width="900" height="500">



---



- ButtonContainer 코드 리펙토링 생각해보기 🎓

#### Error
Console Warning <br>
Each child in a list should have a unique 'key' prop.<br>
<br>
즉, <br>
이 에러는 map 함수와 연관이 있는데<br>
map 함수를 사용한 각각의 컴포넌트를 반환할 때 고유한 키 값이 존재해야하는데, <br>
key 값이 존재하지 않아 출력되는 메세지이다.
