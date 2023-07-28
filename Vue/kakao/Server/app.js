// // Module import
// const express = require('express')
// const mysql = require('mysql')
// // mongo 1번
// // const mongoose = require('mongoose')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const { Data } = require('./models')
// const authRouter = require('./routes/auth')
// 
// // express를 application 변수에 담아줌
// const app = express()
// 
// const PORT = 8080;
// 
// 
// // mongo 2번
// // DB 연결 - DataBase connect
// // mongodb 에 접근, 맨 뒤 test 는 database 의 이름
// // mongoose.connect('mongodb://localhost:27017') // 27017 은 mongodb 의 default port
// 
// // database connect success
// // mongoose 를 통해 mongodb에 정상적으로 접근했는지 확인하는 부분
// // mongoose.connection.once('open', () => {
// //     console.log('DB connect seccess')
// 
//     // dataBase = mongoose.connection.db;
// 
//     // dataBase = mongoose.dataBase('social')
// 
//     // dataBase.collection('addr').insertOne(postData, (err, result) => {
//         
//     //     if (err) {
//     //         console.error('데이터 삽입 실패:', err);
//     //     } else {
//     //         console.log('저장 완료');
//     //     }
//     // });
// // })
// 
// // database connect fail
// // mongoose 를 통해 mongodb에 정상적으로 접근하지 못했을 경우
// // mongodb url 확인
// // mongodb 서비스 시작 확인 => 구글링
// // mongoose.connection.on('error', (err) => {
// //     console.log(err)
// // })
// 
// // MySQL 연결 정보
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'a1231234!',
//   database: 'testbase'
// });
// 
// // MySQL 연결
// db.connect();
// 
// db.query('SELECT * from Users', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is: ', rows);
// });
// 
// db.end();
// // Client side rendering
// // 클라이언트와 서버의 주소가 다를 경우 생기는 오류 => 중요함 
// app.use(cors())
// 
// // 들어오는 요청의 body 를 json 으로 파싱
// app.use(express.json())
// 
// // post 요청에 url로 들어오게 되면 그 값을 인코딩해주는 부분
// // ex) /posts?data=1&data2=2
// /*
// {
//     data1 : 1,
//     data2 : 2
// }
// */
// app.use(bodyParser.urlencoded({
//     extended : true
// }))
// 
// 
// // get 요청 처리 -> 조회
// // app.get('/', (req, res) => {
// //     const postData = req.body;
// //     console.log('클라이언트에서 온 데이터:', postData);
// //   });
// //   // post 요청 처리 -> 쓰기
// // app.post('/', (req, res) => {
// //   // 클라이언트에서 온 데이터는 req.body에 담겨 있습니다.
// //   const postData = req.body;
// //   console.log('클라이언트에서 온 데이터:', postData);
// // 
// //   Data.create(postData)
// //     .then(savedData => {
// //     console.log('데이터 저장 성공:', savedData);
// //     res.status(200).json({ message: '데이터 저장 성공' });
// //   })
// //     .catch(err => {
// //     console.error('데이터 저장 실패:', err);
// //     res.status(500).json({ error: '데이터 저장 실패' });
// //   });
// // });
// 
// 
// // post 요청 처리 -> 쓰기
// app.post('/', (req, res) => {
//   // 클라이언트에서 온 데이터는 req.body에 담겨 있습니다.
//   const postData = req.body;
//   console.log('클라이언트에서 온 데이터:', postData);
// 
//   const sql = "INSERT INTO yourtable SET ?";
//   db.query(sql, postData, (error, result) => {
//       if (error) {
//           console.error('데이터 저장 실패:', error);
//           res.status(500).json({ error: '데이터 저장 실패' });
//       } else {
//           console.log('데이터 저장 성공:', result);
//           res.status(200).json({ message: '데이터 저장 성공' });
//       }
//   });
// });
// 
// 
// 
// // const insertData = (data) => {
// //     Data.create(data)
// //         .then(savedData => {
// //             console.log('데이터 저장 성공:', savedData)
// //         })
// //         .catch(err => {
// //             console.log('데이터 저장 실패:', err)
// //         })
// // }
// 
// 
// // mongoose.Collection.insert(Data)
// 
// app.use('./auth', authRouter)
// 
// // express 서버 실행(생성)을 위한 부분 ( 숫자(8080)는 포트번호)
// app.listen(PORT, () => {
//     console.log(`open server : ${PORT}`);
// });



const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 8080;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a1231234!',
  database: 'testbase'
});

db.connect();

// Users 테이블을 조회하는 명령어 -> 모든 데이터 선택 / 콜백에는 3개의 매개변수를 받음
db.query('SELECT * from Users', (error, rows, fields) => {
  // 만약 에러가 발생한다면
  if (error) throw error;
  // 에러가 없으면 결과가 rows 에 담김 -> SELECT 문을 통해 조회된 데이터
  console.log('User info is: ', rows);
  // fields 에는 조회된 필드 정보가 담김 -> 필드 이름, 타입 등
});

db.end();

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.listen(PORT, () => {
    console.log(`open server : ${PORT}`);
});