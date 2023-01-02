import Env from "src/common/env";

describe("Common/Env", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", async () => {
    expect(Env).toBeDefined();
  });

  it("should return an empty string", async () => {
    expect(Env.get(`${Math.random()}`)).toEqual("");
  });

  it("should return NODE_ENV value", async () => {
    const nodeEnv = Env.get("NODE_ENV");

    expect(nodeEnv).toBe("test");
  });
});
