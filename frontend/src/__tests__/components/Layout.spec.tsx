import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import Layout from "src/components/Layout";

describe("Layout", () => {
  it("should render with children content", () => {
    const randomContent = Math.random();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Layout>
          <div>{randomContent}</div>
        </Layout>
      </ThemeProvider>
    );

    expect(getByText(randomContent)).toBeInTheDocument();
  });
});
