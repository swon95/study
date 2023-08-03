<template>
<div>
  <button @click="kakaoLogin">카카오 로그인</button>
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from "axios";
import server from './../config/server.json'

let REST_API_KEY = '61161c1ae3b4bc42146d5c6314e28301';

  const kakaoLogin = () => {
    window.Kakao.Auth.login({
    success: function(authObj) {
      console.log('authObj', authObj);
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakao_account;
          console.log('kakaoAccount', kakaoAccount);

          let KAKAO_CODE = new URL(window.location.href).searchParams.get("code");

          // axios를 사용하여 서버에 POST 요청을 보내는 부분
          axios.post(server.url + "/kakao/server", {
            params: {
                kakaoCode: KAKAO_CODE
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        },
        fail: function(err) {
          console.error(err);
        },
      });
    },
    fail: function(err) {
      console.error(err);
    },
  });
}
    onMounted(() => {
      window.Kakao.init(REST_API_KEY);
  });
</script>