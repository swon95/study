import request from "supertest";
import { app } from "../app";

jest.setTimeout(10000);

jest.mock("../services/CoffeeMenuService", () => {
  return {
    __esModule: true,
    coffeeMenuService: {
      getMenus: () => [
        { name: "토피넛라떼", price: 4500, ice: true, hot: true },
        { name: "바닐라라떼", price: 4000, ice: true, hot: true },
        { name: "아메리카노", price: 3500, ice: true, hot: true },
      ],
    },
  };
});

describe("OrderRouter", () => {
  describe("/orders", () => {
    it("render '주문 내역이 없습니다' when no orders", async () => {
      const res = await request(app)
        .get("/orders")
        .set("Content-Type", "application/json")
        .send();
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe("주문 내역이 없습니다");
    });

    it("should get all orders", async () => {
      await request(app)
        .post("/orders/create")
        .set("Content-Type", "application/json")
        .send({
          name: "바닐라라떼",
          ice: true,
        });

      const res = await request(app)
        .get("/orders")
        .set("Content-Type", "application/json")
        .send();

      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("/orders/create", () => {
    it("should create a new order", async () => {
      const res = await request(app)
        .post("/orders/create")
        .set("Content-Type", "application/json")
        .send({
          name: "토피넛라떼",
          ice: true,
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body.name).toBe("토피넛라떼");
      expect(res.body.ice).toBe(true);
    });
  });

  describe("/orders/:id", () => {
    it("should get an order", async () => {
      const res아메리카노 = await request(app)
        .post("/orders/create")
        .set("Content-Type", "application/json")
        .send({
          name: "아메리카노",
          ice: true,
        });

      const res = await request(app)
        .get(`/orders/${res아메리카노.body.id}`)
        .set("Content-Type", "application/json")
        .send();
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe(
        "주문하신 커피는 아메리카노입니다. 잠시만 기다려주세요"
      );
    });
  });
});