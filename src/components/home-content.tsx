import * as React from "react"
import styled, { css } from "../utils/styled-components"
import { hexToRGB } from "../utils/color-utils"

const Content: React.SFC<{}> = ({ children }) => (
  <StyledContent>{children}</StyledContent>
)

const StyledContent = styled.div`
  ${({ theme }) => css`
    align-self: flex-end;
    margin: 0 auto;
    max-width: 960px;
    width: 100%;
    padding: 30px 60px;
    background: ${hexToRGB(theme.colors.primary, 0.7)};
    border: 1px solid ${theme.fonts.colors.primary};
    border-bottom: none;
    p {
      font-weight: 600;
      padding: 10px 0;
      &:last-child {
        padding-bottom: 50px;
      }
    }
  `}
`

export default Content
