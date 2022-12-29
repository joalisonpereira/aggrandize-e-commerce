import "styled-components";
import theme from "src/styles/theme";

export type Theme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
