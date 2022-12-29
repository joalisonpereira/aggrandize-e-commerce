import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import Header from ".";

describe("Header", () => {
  it("should render with title", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(getByText("Aggrandize E-Commerce")).toBeInTheDocument();
  });
});
