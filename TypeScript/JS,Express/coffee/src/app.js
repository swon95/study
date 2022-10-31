import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { menuRouter } from "./routers/menuRouter";
import { orderRouter } from "./routers/orderRouter";

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 메인 페이지
app.get("/", (req, res) => {
  res.send("어서오세요~ 카페 elice입니다");
});

// router, service 구현
app.use(menuRouter);
app.use(orderRouter);


// 순서 중요
app.use(errorMiddleware);

export { app };
