import request from "supertest";
import { app } from "../app";

jest.setTimeout(10000);

describe("MenuRouter", () => {
  describe("/menus/create", () => {
    it("should create a new order", async () => {
      const res = await request(app)
        .post("/menus/create")
        .set("Content-Type", "application/json")
        .send({
          name: "토피넛라떼",
          price: 3500,
          ice: false,
          hot: true,
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body.name).toBe("토피넛라떼");
      expect(res.body.ice).toBe(false);
    });
  });

  describe("/menus", () => {
    it("should get all orders", async () => {
      await request(app)
        .post("/menus/create")
        .set("Content-Type", "application/json")
        .send({ name: "아메리카노", price: 3500, ice: true, hot: true });

      await request(app)
        .post("/menus/create")
        .set("Content-Type", "application/json")
        .send({ name: "바닐라라떼", price: 3500, ice: true, hot: false });

      const res = await request(app)
        .get("/menus")
        .set("Content-Type", "application/json")
        .send();

      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThanOrEqual(3);
    });
  });
});