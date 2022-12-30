import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import ProductItem from "src/components/ProductItem";
import { generateMockProduct } from "src/utils";

describe("ProductItem", () => {
  it("should render with title", () => {
    const product = generateMockProduct(1)[0];

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ProductItem item={product} />
      </ThemeProvider>
    );

    expect(getByText(product.title)).toBeInTheDocument();
  });
});
