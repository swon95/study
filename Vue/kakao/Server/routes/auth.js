const { Router } = require("express");
const router = Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");

router.get("/kakao/server", async (req, res, next) => {

  let REST_API_KEY = '089e634a765b283297d8271a3d4d1ac1';
  let REDIRECT_URI = 'http://localhost:8080/kakao/callback';
  let CODE = req.query.kakaoCode;

  await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${CODE}`, {
      headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
  }).then(data => {
      getKakaoUserInfo(data.data.access_token)
          .then(userInfo => {
              checkEmailSocial(userInfo.data, res);
          })
  })
})

const getKakaoUserInfo = async (accessToken) => {
  return await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
  })
}

const checkEmailSocial = async (socialInfo, res) => {

  if (socialInfo.kakao_account.email === undefined) {
      res.json({
          error: true,
          message: "존재하지 않는 소셜 이메일",
          status: false
      })
      return;
  }

  const checkEmail = await User.findOne({
      email: socialInfo.kakao_account.email
  });

  if (checkEmail) {
      jwt.sign({
          email: checkEmail.email,
          name: checkEmail.name
      }, jwtConfig.secret, { 
          expiresIn: '1d'    
      }, (error, token) => {
          console.log(token);
          if (error) {
              res.status(401)
                  .json({ status: false, message: "토큰 발행 실패", error: true });
          } else {
              res.json({
                  status: true,
                  accessToken: token, 
                  email: checkEmail.email,
                  name: checkEmail.name,
                  social: true,
                  error: false,
                  message: "소셜 로그인 성공"
              })
          }
      })


  } else {
      await User.create({
          email: socialInfo.kakao_account.email,
          password: "",
          name: socialInfo.properties.nickname
      });

      const checkEmail = await User.findOne({
          email: socialInfo.kakao_account.email
      });

      if (checkEmail) {
          jwt.sign({
              email: checkEmail.email, 
              name: checkEmail.name
          }, jwtConfig.secret, { 
              expiresIn: '1d'    
          }, (error, token) => {
              if (error) {
                  res.status(401)
                      .json({ status: false, message: "토큰 발행 실패", error: true });
              } else {
                  res.json({
                      status: true,
                      accessToken: token, 
                      email: checkEmail.email,
                      name: checkEmail.name,
                      social: true,
                      error: false,
                      message: "소셜 로그인 성공"
                  })
              }
          });
          return;
      }
      res.status(500).json({
          error: true,
          message: "정상적이지 않은 접근입니다."
      });
  }
}


module.exports = router;