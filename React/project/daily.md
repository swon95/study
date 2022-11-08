# E-Commerce 쇼핑몰 앱 프로젝트

### 20221109

- GUI 로 프로젝트 폴더 생성
    vscode 로 열기

    - React 앱 생성 => ./ (현재위치)
        npx create-react-app ./

- App.js 페이지간의 라우팅 설정
<!-- --save 명령을 추가? => package.json dependencies 영역에 추가하기 위해 -->
npm install react-router-dom --save

- 기본 구조 생성 => 디렉토리 생성
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


- CSS 부트스트랩 프레임워크 설치 및 추가
    npm install react-bootstrap bootstrap@5.1.3 --save

    - 설치한 프레임워크를 index.js 에 import
    import 'bootstrap/dist/css/bootstrap.min.css'