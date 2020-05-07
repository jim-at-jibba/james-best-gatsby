import * as React from "react"
import styled, { css } from "../utils/styled-components"
import { hexToRGB } from "../utils/color-utils"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import mediaQueries from "../utils/media-queries"
import { Scrollbars } from "react-custom-scrollbars"

const renderThumb: React.SFC<{}> = () => {
  const thumbStyle = {
    backgroundColor: `#45f9e5`,
  }
  return <div style={{ ...thumbStyle }} />
}

const PostContent: React.SFC<{}> = ({ children }) => {
  return (
    <StyledScrollbars
      style={{ height: "80vh" }}
      renderThumbVertical={renderThumb}
    >
      <StyledContent>{children}</StyledContent>
    </StyledScrollbars>
  )
}

const StyledContent = styled.div`
  ${({ theme }) => css`
    align-self: flex-end;
    margin: 0 auto;
    max-width: ${px2vw(960, 960)};
    padding: ${px2vw(spacing(30))} ${px2vw(spacing(60))};
    background: ${theme.colors.white};
    overflow: auto;
    p {
      font-weight: 600;
      padding: ${px2vw(spacing(8))} 0;
      &:last-child {
        padding-bottom: ${px2vw(spacing(6))};
      }
    }
    ${mediaQueries("md")(`
      padding: ${px2vw(spacing(40))} ${px2vw(spacing(100))};
    `)}
  `}
`

const StyledScrollbars = styled(Scrollbars)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.accent};
    border-bottom: none;
  `}
`

export default PostContent
