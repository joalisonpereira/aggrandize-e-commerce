import dummyJsonService from "src/services/dummy-json.service";

describe("Services/DummyJson", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", async () => {
    expect(dummyJsonService).toBeDefined();
  });

  it("should get products", async () => {
    dummyJsonService.get = jest.fn().mockResolvedValue({
      data: { products: [] },
    });

    const response = await dummyJsonService.get("/products");

    expect(response.data.products).toEqual([]);
  });
});
