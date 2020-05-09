import * as React from "react"
import styled, { css } from "../utils/styled-components"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import mediaQueries from "../utils/media-queries"

const renderThumb: React.SFC<{}> = () => {
  const thumbStyle = {
    backgroundColor: `#45f9e5`,
  }
  return <div style={{ ...thumbStyle }} />
}

const PostContent: React.SFC<{}> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}

const StyledContent = styled.div`
  ${({ theme }) => css`
    height: 80vh;
    margin: 0 auto;
    max-width: ${px2vw(960, 960)};
    padding: ${px2vw(spacing(30))} ${px2vw(spacing(60))};
    background: ${theme.colors.white};
    overflow: auto;
    border: 1px solid ${theme.colors.accent};
    border-bottom: none;
    ${mediaQueries("md")(`
      padding: ${px2vw(spacing(40))} ${px2vw(spacing(100))};
    `)}

    pre {
      overflow-x: auto;
    }
  `}
`

export default PostContent
