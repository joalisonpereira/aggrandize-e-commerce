import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import theme from "src/styles/theme";
import Header from "../../components/Header";

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

describe("Header", () => {
  it("should open and close mobile menu", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const closeIcon = getByTestId("burguer-icon-open");

    expect(closeIcon).toBeVisible();

    await userEvent.click(getByTestId("burguer-btn"));

    expect(getByTestId("burguer-icon-close")).toBeVisible();
  });
});
