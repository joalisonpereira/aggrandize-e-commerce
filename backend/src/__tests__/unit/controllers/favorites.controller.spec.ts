import { mockRequest, mockResponse } from "mock-req-res";
import FavoritesController from "src/controllers/favorites.controller";
import { generateArrayNumbersMock } from "src/__tests__/test-utils";

describe("Controllers/Products", () => {
  const controller = new FavoritesController();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", async () => {
    expect(controller).toBeDefined();
  });

  it("should return an empty array", async () => {
    const reqMock = mockRequest({ session: {} });

    const resMock = mockResponse({ send: jest.fn() });

    await controller.index(reqMock, resMock);

    expect(resMock.send).toBeCalledTimes(1);

    expect(resMock.send).toHaveBeenCalledWith([]);
  });

  it("should return an array with product ids", async () => {
    const reqMock = mockRequest({
      session: { favorites: generateArrayNumbersMock(5) },
    });

    const resMock = mockResponse({ send: jest.fn() });

    await controller.index(reqMock, resMock);

    expect(resMock.send).toBeCalledTimes(1);

    expect(reqMock.session.favorites).toHaveLength(5);
  });

  it("should return an array with added product id", async () => {
    const reqMock = mockRequest({ session: {}, body: { id: 999 } });

    const resMock = mockResponse({ send: jest.fn() });

    await controller.store(reqMock, resMock);

    expect(resMock.send).toBeCalledTimes(1);

    expect(reqMock.session.favorites).toEqual([999]);
  });

  it("should add favorite id in session object and return the result", async () => {
    const reqMock = mockRequest({
      session: { favorites: [100] },
      body: { id: 200 },
    });

    const resMock = mockResponse({ send: jest.fn() });

    await controller.store(reqMock, resMock);

    expect(resMock.send).toBeCalledTimes(1);

    expect(resMock.send).toHaveBeenCalledWith([100, 200]);
  });

  it("should return same favorites because can't repeat", async () => {
    const reqMock = mockRequest({
      session: { favorites: [100] },
      body: { id: 100 },
    });

    const resMock = mockResponse({ send: jest.fn() });

    await controller.store(reqMock, resMock);

    expect(resMock.send).toBeCalledTimes(1);

    expect(resMock.send).toHaveBeenCalledWith([100]);
  });

  it("should remove favorite id in session object and return the result", async () => {
    const reqMock = mockRequest({
      session: { favorites: [100, 200, 300] },
      params: { id: 200 },
    });

    const resMock = mockResponse({ send: jest.fn() });

    await controller.destroy(reqMock, resMock);

    expect(resMock.send).toBeCalledTimes(1);

    expect(resMock.send).toHaveBeenCalledWith([100, 300]);
  });
});
