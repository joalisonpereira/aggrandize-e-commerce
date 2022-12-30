import { render } from "@testing-library/react";
import Home from "src/pages";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { generateMockProduct } from "src/utils";

describe("Home", () => {
  it("should render page with title", async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Home products={[generateMockProduct(3)]} />
      </ThemeProvider>
    );

    expect(getByText("APROVEITE NOSSOS DESCONTOS")).toBeInTheDocument();
  });
});
