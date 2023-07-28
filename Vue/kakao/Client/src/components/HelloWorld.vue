<template>
  <img src="./../assets/kakao_login_medium.png" @click="handleLogin()"/>
</template>

<script>
import axios from 'axios';
import server from './../config/server.json'

export default {
  
  methods: {
    handleLogin() {
      console.log('1');
      const YOUR_KAKAO_APP_KEY = '089e634a765b283297d8271a3d4d1ac1'
      const redirectURI = 'http://localhost:8080/oauth/kakao/callback';
      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${YOUR_KAKAO_APP_KEY}&redirect_uri=${redirectURI}&response_type=code`;
    },
  },
  // 라이프사이클
  created() {
    // 인가 코드 받아오기
    let KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
    console.log(KAKAO_CODE);

    // 인가코드가 존재한다면 해당 API 를 통해 get 요청
    if(KAKAO_CODE){
      axios
        .get(server.url + '/oauth/kakao/server', {
          // 인가코드를 전송
          params: {
            kakaoCode: KAKAO_CODE,
          },
        })
        // 서버로 부터 받은 데이터 저장
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error('Error obtaining access token:', error.message);
        });
    }
  },
};
</script>