import * as styledComponents from "styled-components"

import { ThemeType } from "./theme"

export type StyledPropsType = styledComponents.ThemedStyledComponentsModule<
  ThemeType
>

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as StyledPropsType

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
