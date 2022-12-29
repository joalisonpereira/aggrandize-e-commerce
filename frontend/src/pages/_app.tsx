import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Montserrat } from "@next/font/google";
import theme from "src/styles/theme";
import GlobalStyle from "src/styles/GlobalStyle";

const globalFont = Montserrat({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={globalFont.className}>
        <Component {...pageProps} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
