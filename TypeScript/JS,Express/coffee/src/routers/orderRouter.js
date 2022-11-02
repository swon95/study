import is from "@sindresorhus/is";
import { Router } from "express";
import { send } from "process";
import { orderService } from "../services/OrderService";

const orderRouter = Router();

// 27. orders 경로로 들어온 요청 처리
orderRouter.get("/orders", function (req, res, next) {
  try {
    // orderService의 getAllOrders 메서드를 사용해 응답해주세요
    const orders = orderService.getAllOrders()
    // 26. 응답    
    res.send(orders)

  } catch (error) {
    next(error);
  }
});

// 28. orders 에 id 파라미터가 들어온 경우
orderRouter.get("/orders/:id", function (req, res, next) {
  try {
    // orderService의 getCoffee 메서드를 사용해 coffee 객체를 구하고
    // 29. getCoffee 가 orderService 가 가지고 있는 커피들 중에 어떤 커피인지 알아야 하기 때문에,
    // req.params 로 넘어온 id 값을 getCoffee 에 넘겨줘야함
    const coffee = orderService.getCoffee(req.params.id)

    // `주문하신 커피는 ${커피이름}입니다. 잠시만 기다려주세요`를 응답으로 보내주세요
    res.send(`주문하신 커피는 ${coffee.name}입니다. 잠시만 기다려주세요`)

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
    // 30. create 경로로 들어오는 post 요청의 경우
    const order = orderService.orderCoffee(req.body.name, req.body.ice) // 31. orderCoffee == create 메서드 이므로 name 과 ice 를 파라미터로 받음

    // status 코드는 201로 보내주세요
    res.status(201).send(order)

  } catch (error) {
    next(error);
  }
});

export { orderRouter };