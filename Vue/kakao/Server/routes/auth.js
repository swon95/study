const { Router } = require("express");
const router = Router();
const axios = require("axios");


// 카카오 서버를 통해 로그인 접근
router.get("/kakao/server", async (req, res, next) => {

    try {
    let REST_API_KEY = '089e634a765b283297d8271a3d4d1ac1';
    let REDIRECT_URI = 'http://localhost:8080/oauth/kakao/callback';
    let CODE = req.query.kakaoCode;

    const response = await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${CODE}`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    });

    const accessToken = response.data.access_token;
    if (!accessToken) {
      return res.status(400).json({ message: 'Failed to obtain access token' });
    }

    // 토큰을 클라이언트로 전송
    return res.json({ access_token: accessToken });
  } catch (error) {
    console.error('Error obtaining access token:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// 사용자정보 가져오기
const getKakaoUserInfo = async (accessToken) => {
  return await axios.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  });
};


module.exports = router;