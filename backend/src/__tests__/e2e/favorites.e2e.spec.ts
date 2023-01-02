import request from "supertest";
import app from "src/server";

describe("E2E/Favorites", () => {
  it("should return favorites array", async () => {
    const res = await request(app).get("/favorites").send();

    expect(res.statusCode).toEqual(200);

    expect(res.body).toBeDefined();

    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should add favorite in session", async () => {
    const res = await request(app).post("/favorites").send({ id: 20 });

    expect(res.statusCode).toEqual(201);

    expect(res.body).toBeDefined();

    expect(Array.isArray(res.body)).toBe(true);

    expect(res.body).toContain(20);
  });

  it("should remove favorite in session", async () => {
    const res = await request(app).delete(`/favorites/20`).send();

    expect(res.statusCode).toEqual(200);

    expect(res.body).toBeDefined();

    expect(res.body).not.toContain(20);
  });
});
