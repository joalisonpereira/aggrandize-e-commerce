import { render } from "@testing-library/react";
import Home, { getServerSideProps, HomeProps } from "src/pages";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { generateMockProduct } from "src/utils";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ products: generateMockProduct(10) }),
  })
) as any;

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

    const data = (await getServerSideProps(
      context as GetServerSidePropsContext
    )) as { props: HomeProps };

    expect(data.props.products).toBeDefined();

    expect(data.props.products[0][0].title).toBeDefined();

    expect(data.props.products.flat().length).toEqual(10);
  });
});
