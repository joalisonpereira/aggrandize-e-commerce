import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import Button from "src/components/Button";

describe("Button", () => {
  it("should render with text", () => {
    const randomContent = Math.random();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>{randomContent}</Button>
      </ThemeProvider>
    );

    expect(getByText(randomContent)).toBeInTheDocument();
  });

  it("should call twice's onClick event", async () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>Send</Button>
      </ThemeProvider>
    );

    await userEvent.click(getByText("Send"));

    await userEvent.click(getByText("Send"));

    expect(onClick).toBeCalledTimes(2);
  });
});
