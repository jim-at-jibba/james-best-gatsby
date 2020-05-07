import * as React from "react"
import styled, { css } from "../utils/styled-components"
import { hexToRGB } from "../utils/color-utils"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"

const Content: React.SFC<{}> = ({ children }) => (
  <StyledContent>{children}</StyledContent>
)

const StyledContent = styled.div`
  ${({ theme }) => css`
    align-self: flex-end;
    margin: 0 auto;
    max-width: ${px2vw(960, 960)};
    width: 100%;
    padding: ${px2vw(spacing(30))} ${px2vw(spacing(60))};
    background: ${hexToRGB(theme.colors.primary, 0.7)};
    border: 1px solid ${theme.fonts.colors.primary};
    border-bottom: none;
    p {
      font-weight: 600;
      padding: ${px2vw(spacing(8))} 0;
      &:last-child {
        padding-bottom: ${px2vw(spacing(6))};
      }
    }
  `}
`

export default Content
