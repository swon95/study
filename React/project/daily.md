# E-Commerce 쇼핑몰 앱 프로젝트

## 20221109

- GUI 로 프로젝트 폴더 생성

    - vscode 로 열기

- React 앱 생성 => ./ (현재위치)

    ```
    npx create-react-app ./
    ```

- App.js 페이지간의 라우팅 설정을 위한 install 명령어
<!-- --save 명령을 추가? => package.json dependencies 영역에 추가하기 위해 -->
    npm install react-router-dom --save

- 기본 구조 생성 => 디렉토리 생성

```
        src/
            components
            css
            images
            pages/
                CartPage
                DetailProductPage
                HistoryPage
                LandingPage/
                    <!-- 컴포넌트생성 rfce -->
                    LandingPage.jsx
                LoginPage/
                    LoginPage.jsx
                PaymentPage
                RegisterPage/
                    RegisterPage.jsx
```

- CSS 부트스트랩 프레임워크 설치 및 추가

    npm install react-bootstrap bootstrap@5.1.3 --save

    - 설치한 프레임워크를 index.js 에 import

    import 'bootstrap/dist/css/bootstrap.min.css'


- E-Commerce 솔루션 환경을 위한 클레이풀 활용 => https://clayful.io/

```
    회원가입 진행
    스토어 생성
        - 스토어 관리하기
            - 개발
                - 연동 클라이언트
                    - 스토어 프론트 클라이언트
                         API 접근 토큰 활용
```


- 클레이풀의 API 를 활용하기 위해
```
npm install clayful --save
```
설치한 clayful 모듈은 index.js 에 import
<hr/>


- 클라이언트에서 서버로 요청 및 응답을 위한 라이브러리
    - 단, clayful 에서는 axios 가 plugin 으로 내장되어 있다.

```
npm install axios --save
```

## 20221110

### ERROR
https://velog.io/@owlsuri/Uncaught-TypeError-reactdomclientWEBPACKIMPORTEDMODULE1.render-is-not-a-function
```
LandingPage 컴포넌트를 생성후 렌더링 했지만 화면에 아무것도 나타나지 않고,
콘솔 창에 에러 문구만 출력이 되었다.

혹시 버전에 대한 문제일까 싶어 react 버전을 18.2.0 에서 17.2.0 버전으로 다운그레이드도 해 보았고,

레퍼런스를 참고해 설치된 라이브러리의 버전을 다운그레이드 후 npm install 을 진행해도 어떤 부분에서 발생한 오류인지 알 수 없었다.

- ERR done

app.js 의 routes 를 router 로 입력해 발생한 오류였다.
정말 작은 부분에서 발생한 오류가 새삼 크게 느껴져 많은걸 배웠다.
```
- Register 
    - 회원가입 페이지 UI 구현

## 20221111

### useState

- React 에서 제공하는 내장 라이브러리
    - 변수로 사용된 State 는 값이 변경 될 때마다 페이지를 재 렌더링 해줌.
    - 단, const, let, var 와 같은 변수들은 변경되어도 재 렌더링이 되지 않음.
```
import React, { useState } from 'react'
```
useState 는 배열을 반환 (리턴) 해줌
    
    [초기값 == useState 의 매개변수, state 의 값을 업데이트 해주는 함수]

클레이풀 회원가입 API 를 불러와 활용 


### useNavigate Hooks
- react-router-dom 에서 제공하는 Hooks
```
import { Navigate, useNavigate } from 'react-router-dom'
```
```
const Navigate = useNavigate()
```
    
회원가입이 완료 되었다면?
   - 로그인페이지로 이동


### 20221112

- 로그인 페이지 기능구현
    - 로그인 상태 유지하기 기능 추가 (App.js)

```
src
    context
        AuthContext.jsx
```