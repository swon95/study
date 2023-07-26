// Module import
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Data } = require('./models')

// express를 application 변수에 담아줌
const app = express()

const PORT = 8080;


// DB 연결 - DataBase connect
// mongodb 에 접근, 맨 뒤 test 는 database 의 이름
mongoose.connect('mongodb://localhost:27017') // 27017 은 mongodb 의 default port

// database connect success
// mongoose 를 통해 mongodb에 정상적으로 접근했는지 확인하는 부분
mongoose.connection.once('open', () => {
    console.log('DB connect seccess')

    // dataBase = mongoose.connection.db;

    // dataBase = mongoose.dataBase('social')

    // dataBase.collection('addr').insertOne(postData, (err, result) => {
        
    //     if (err) {
    //         console.error('데이터 삽입 실패:', err);
    //     } else {
    //         console.log('저장 완료');
    //     }
    // });
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


// get 요청 처리 -> 조회
app.get('/', (req, res) => {
    const postData = req.body;
    console.log('클라이언트에서 온 데이터:', postData);
  });
  // post 요청 처리 -> 쓰기
app.post('/', (req, res) => {
  // 클라이언트에서 온 데이터는 req.body에 담겨 있습니다.
  const postData = req.body;
  console.log('클라이언트에서 온 데이터:', postData);

  Data.create(postData)
    .then(savedData => {
    console.log('데이터 저장 성공:', savedData);
    res.status(200).json({ message: '데이터 저장 성공' });
  })
    .catch(err => {
    console.error('데이터 저장 실패:', err);
    res.status(500).json({ error: '데이터 저장 실패' });
  });
});

// const insertData = (data) => {
//     Data.create(data)
//         .then(savedData => {
//             console.log('데이터 저장 성공:', savedData)
//         })
//         .catch(err => {
//             console.log('데이터 저장 실패:', err)
//         })
// }


// mongoose.Collection.insert(Data)

// express 서버 실행(생성)을 위한 부분 ( 숫자(8080)는 포트번호)
app.listen(PORT, () => {
    console.log(`open server : ${PORT}`);
});