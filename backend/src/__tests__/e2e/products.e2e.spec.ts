import request from "supertest";
import app from "src/server";

describe("E2E/Products", () => {
  it("should return products array", async () => {
    const res = await request(app).get("/").send();

    expect(res.statusCode).toEqual(200);

    expect(res.body).toBeDefined();

    expect(Array.isArray(res.body)).toBe(true);

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("id");

      expect(res.body[0]).toHaveProperty("thumbnail");

      expect(res.body[0]).toHaveProperty("title");

      expect(res.body[0]).toHaveProperty("price");

      expect(res.body[0]).toHaveProperty("priceWithDiscount");
    }
  });
});
