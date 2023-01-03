필요한 패키지 설치
npx expo -h

디렉토리(앱) 생성
npx create-expo-app [디렉토리명] // 띄어쓰기, 대문자 안됨

생성한 디렉토리(앱) 실행
npx expo start // 에러 시 package.json 참고하여 실행

-- Hooks 부터 실습은 Snack 으로 진행
- snack 에서는 컴포넌트의 형식을 jsx 로 하면 에러 발생

npx 로 새로운 프로젝트 생성 시 master 브랜치가 생성되는 문제
- GUI 환경에서 생성한 프로젝트 디렉토리에서 .git 폴더를 제거 해 주면 됨.