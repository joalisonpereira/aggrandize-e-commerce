import { mockRequest, mockResponse } from "mock-req-res";
import ProductsController from "src/controllers/products.controller";
import dummyJsonService from "src/services/dummy-json.service";
import { generateMockProduct } from "src/__tests__/utils";

describe("Controllers/Products", () => {
  const controller = new ProductsController();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", async () => {
    expect(controller).toBeDefined();
  });

  it("should return products array", async () => {
    const productsMock = generateMockProduct(10);

    dummyJsonService.get = jest.fn().mockResolvedValue({
      data: { products: productsMock },
    });

    const resMock = mockResponse({ send: jest.fn() });

    await controller.index(mockRequest(), resMock);

    expect(dummyJsonService.get).toBeCalledTimes(1);

    expect(resMock.send).toBeCalledTimes(1);
  });
});
