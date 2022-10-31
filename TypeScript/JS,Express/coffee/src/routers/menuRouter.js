import is from "@sindresorhus/is";
import { Router } from "express";
import { coffeeMenuService } from "../services/CoffeeMenuService";

const menuRouter = Router();

menuRouter.get("/menus", async function (req, res, next) {
  try {
    // coffeeMenuService의 getMenus 메서드를 사용해 응답해주세요
  } catch (error) {
    next(error);
  }
});

menuRouter.post("/menus/create", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }
    
    // coffeeMenuService의 addCoffeeMenu 메서드를 사용해 응답해주세요
    // status code는 201로 해주세요
  } catch (error) {
    next(error);
  }
});

export { menuRouter };