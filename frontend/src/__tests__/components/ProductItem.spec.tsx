import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import ProductItem from "src/components/ProductItem";
import userEvent from "@testing-library/user-event";
import { generateMockProduct } from "src/__tests__/test-utils";
import axios from "axios";

jest.mock("axios");

describe("ProductItem", () => {
  it("should render with title", () => {
    const product = generateMockProduct(1)[0];

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ProductItem item={product} onFavorite={jest.fn} isFavorited={false} />
      </ThemeProvider>
    );

    expect(getByText(product.title)).toBeInTheDocument();
  });

  it("should click on favorite", async () => {
    const product = generateMockProduct(1)[0];

    const onFavorite = jest.fn();

    axios.post = jest.fn().mockResolvedValue(null);

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProductItem
          item={product}
          onFavorite={onFavorite}
          isFavorited={false}
        />
      </ThemeProvider>
    );

    await userEvent.click(getByTestId("star-btn"));

    expect(onFavorite).toBeCalledTimes(1);
  });
});
