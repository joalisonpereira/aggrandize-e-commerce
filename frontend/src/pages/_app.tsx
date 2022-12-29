import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Montserrat } from "@next/font/google";
import theme from "src/styles/theme";
import GlobalStyle from "src/styles/GlobalStyle";
import Head from "next/head";

const globalFont = Montserrat({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Aggrandize" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className={globalFont.className} style={{ height: "100%" }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
