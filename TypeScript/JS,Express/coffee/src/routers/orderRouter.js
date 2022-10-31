import is from "@sindresorhus/is";
import { Router } from "express";
import { orderService } from "../services/OrderService";

const orderRouter = Router();

orderRouter.get("/orders", function (req, res, next) {
  try {
    // orderService의 getAllOrders 메서드를 사용해 응답해주세요
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/orders/:id", function (req, res, next) {
  try {
    // orderService의 getCoffee 메서드를 사용해 coffee 객체를 구하고
    // `주문하신 커피는 ${커피이름}입니다. 잠시만 기다려주세요`를 응답으로 보내주세요
  } catch (error) {
    next(error);
  }
});

orderRouter.post("/orders/create", function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // orderService의 orderCoffee를 이용해 order를 응답으로 보내주세요
    // status 코드는 201로 보내주세요
  } catch (error) {
    next(error);
  }
});

export { orderRouter };