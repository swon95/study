// Module import
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// express를 application 변수에 담아줌
const app = express()

const PORT = 8080;

// DB 연결 - DataBase connect
// mongodb 에 접근, 맨 뒤 test 는 database 의 이름
mongoose.connect('mongodb://localhost:27017/test') // 27017 은 mongodb 의 default port

// database connect success
// mongoose 를 통해 mongodb에 정상적으로 접근했는지 확인하는 부분
mongoose.connection.once('open', () => {
    console.log('DB connect seccess')
})

// database connect fail
// mongoose 를 통해 mongodb에 정상적으로 접근하지 못했을 경우
// mongodb url 확인
// mongodb 서비스 시작 확인 => 구글링
mongoose.connection.on('error', (err) => {
    console.log(err)
})

// Client side rendering
// 클라이언트와 서버의 주소가 다를 경우 생기는 오류 => 중요함 
app.use(cors())

// 들어오는 요청의 body 를 json 으로 파싱
app.use(express.json())

// post 요청에 url로 들어오게 되면 그 값을 인코딩해주는 부분
// ex) /posts?data=1&data2=2
/*
{
    data1 : 1,
    data2 : 2
}
*/
app.use(bodyParser.urlencoded({
    extended : true
}))

// 정적 파일 제공 (Vue.js 애플리케이션 빌드 결과물 위치)
app.use(express.static(__dirname + '/dist'));

// POST 요청 처리
app.post('/', (req, res) => {
    // 클라이언트에서 온 데이터는 req.body에 담겨 있습니다.
    const postData = req.body;
    console.log('클라이언트에서 온 데이터:', postData);
    // 받은 데이터를 MongoDB에 저장하거나 원하는 로직을 추가하여 처리합니다.
    // 예시로 받은 데이터를 MongoDB에 저장하는 코드를 작성합니다.
  
    // // 데이터베이스 스키마와 모델 생성
    // const DataSchema = new mongoose.Schema({
    //   postcode: String,
    //   roadAddress: String,
    //   jibunAddress: String,
    //   detailAddress: String,
    //   extraAddress: String
    // });
    // const DataModel = mongoose.model('Data', DataSchema);
  
    // // MongoDB에 데이터 저장
    // const newData = new DataModel(postData);
    // newData.save((err, savedData) => {
    //   if (err) {
    //     console.error('데이터 저장 실패:', err);
    //     res.status(500).json({ error: '데이터 저장 실패' });
    //   } else {
    //     console.log('데이터 저장 성공:', savedData);
    //     res.status(200).json({ message: '데이터 저장 성공' });
    //   }
    // });
  });

// express 서버 실행(생성)을 위한 부분 ( 숫자(8080)는 포트번호)
app.listen(PORT, () => {
    console.log(`open server : ${PORT}`);
});