# TIL
## 프로젝트 초기 세팅
- -y 옵션을 통해 empty 한 값을 가진 package.json 을 생성할 수 있다.
```
npm i -y
```

```
npm i -D terser-webpack-plugin
```

html 관련 plugin 설치
```
npm i -D html-webpack-plugin
```

css 관련 plugin 설치
```
npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin
```

빌드를 위한 명령어
```
npx webpack
```
혹은

package.json 에서 Script 영역에 'build': 'webpack' 을 추가한 뒤,
```
npm run build
```
실행


--mode=production 옵션을 통해 npm run build 시 계산된 값이, 공백 및 줄바꿈 등이 콤팩트하게 필요한 코드만 출력됨.

production 옵션이 추가되지 않을 시 development mode 로 빌드가 된다.

package.json Scripts 에 dev 를 추가함으로써 webpack-dev-server 를 아래 명령어로 실행 가능
```
npm run dev
```


keydown, keyup 이벤트에 대한 코드를 리펙토링하여 else if 문으로 합칠수 없을까?