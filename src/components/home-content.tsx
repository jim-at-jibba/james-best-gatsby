import * as React from "react"
import styled, { css } from "../utils/styled-components"
import { hexToRGB } from "../utils/color-utils"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import mediaQueries from "../utils/media-queries"

const Content: React.SFC<{}> = ({ children }) => (
  <StyledContent>{children}</StyledContent>
)

const StyledContent = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${px2vw(960, 960)};
    width: 100%;
    overflow-y: auto;
    padding: ${px2vw(spacing(30))} ${px2vw(spacing(60))};
    background: ${hexToRGB(theme.colors.primary, 0.7)};
    border: 1px solid ${theme.fonts.colors.primary};
    p {
      font-weight: 600;
      padding: ${px2vw(spacing(8))} 0;
      &:last-child {
        padding-bottom: ${px2vw(spacing(6))};
      }
    }
    ${mediaQueries("md")(`
      padding: ${px2vw(spacing(40))} ${px2vw(spacing(100))};
      border-bottom: none;
    `)}

    @media screen and (max-width: 399px) {
      height: 65vh;
    }
  `}
`

export default Content
