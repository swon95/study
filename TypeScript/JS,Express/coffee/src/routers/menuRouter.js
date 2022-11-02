import is from "@sindresorhus/is";
import { Router } from "express";
import { coffeeMenuService } from "../services/CoffeeMenuService";

const menuRouter = Router();

menuRouter.get("/menus", async function (req, res, next) {
  try {
    // 19. coffeeMenuService의 getMenus 메서드를 사용해 응답해주세요
    const menus = coffeeMenuService.getMenus()
    res.status(200).send(menus)
    // 20. get 메서드의 경우 status 생략 가능
    // res.send(menus)
  } catch (error) {
    next(error);
  }
});

menuRouter.post("/menus/create", async function (req, res, next) {
  try {
    // 23. validation 의 과정
    // 24. 만약 req.body 가 아래 validation 과정을 통과 한다면,
    // json 의 형태로 요청과 함께 req.body 가 호출 되었다는 의미
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }
    
    // coffeeMenuService의 addCoffeeMenu 메서드를 사용해 응답해주세요
    // 21. addCoffeeMenu 의 경우 파라미터로 name, price, ice, hot 을 받고 있음
    // 22. 이 값은 req.body 에 객체로 담겨 있음
    const menu = coffeeMenuService.addCoffeeMenu({ name: req.body.name, price: req.body.price, ice: req.body.ice, hot: req.body.hot })
    // status code는 201로 해주세요
    // 25. 응답
    res.status(201).send(menu)
  } catch (error) {
    next(error);
  }
});

export { menuRouter };