import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home, { getStaticProps, HomeProps } from "src/pages";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { generateMockProduct } from "src/__tests__/test-utils";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import api from "src/services/api";
import apiRoutes from "src/services/apiRoutes";

jest.mock("axios", () => ({
  create: jest.fn(() => ({})),
}));

describe("Home", () => {
  it("should render page with title", async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Home products={[generateMockProduct(3)]} />
      </ThemeProvider>
    );

    expect(getByText("APROVEITE NOSSOS DESCONTOS")).toBeInTheDocument();
  });

  it("should fetch products info", async () => {
    const context = {
      params: {} as ParsedUrlQuery,
    };

    apiRoutes.get = jest.fn().mockResolvedValue({ data: [] });

    api.get = jest.fn().mockResolvedValue({ data: generateMockProduct(10) });

    const data = (await getStaticProps(context as GetStaticPropsContext)) as {
      props: HomeProps;
    };

    expect(data.props.products).toBeDefined();

    expect(data.props.products[0][0].id).toBeDefined();

    expect(data.props.products[0][0].title).toBeDefined();

    expect(data.props.products.flat().length).toEqual(10);
  });

  it("should mark product as favorite", async () => {
    const products = generateMockProduct(3);

    apiRoutes.get = jest.fn().mockResolvedValue({ data: [] });

    apiRoutes.post = jest
      .fn()
      .mockResolvedValue({ data: products.map((item) => item.id) });

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home products={[products]} />
      </ThemeProvider>
    );

    await userEvent.click(getAllByTestId("star-btn")[0]);

    expect(apiRoutes.post).toHaveBeenCalledTimes(1);
  });

  it("should unmark product as favorite", async () => {
    const products = generateMockProduct(3);

    apiRoutes.get = jest.fn().mockResolvedValue({ data: [] });

    apiRoutes.post = jest
      .fn()
      .mockResolvedValue({ data: products.map((item) => item.id) });

    apiRoutes.delete = jest
      .fn()
      .mockResolvedValue({ data: products.map((item) => item.id) });

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home products={[products]} />
      </ThemeProvider>
    );

    await userEvent.click(getAllByTestId("star-btn")[0]);

    await userEvent.click(getAllByTestId("star-btn")[0]);

    expect(apiRoutes.post).toHaveBeenCalledTimes(1);

    expect(apiRoutes.delete).toHaveBeenCalledTimes(1);
  });
});
