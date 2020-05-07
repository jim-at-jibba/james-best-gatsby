import React from "react"
import styled, { css } from "../../utils/styled-components"
import mediaQueries from "../../utils/media-queries"
import px2vw from "../../utils/px2vw"

const BodyContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    height: calc(100vh - ${px2vw(80, 720)});

    ${mediaQueries("md")(`
      height: calc(100vh - ${px2vw(80, 1024)});
    `)}

    ${mediaQueries("xl")(`
      height: calc(100vh - ${px2vw(80)});
    `)}
  `}
`
const Inner = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1080px;
    align-self: flex-end;
  `}
`

const BodyWrapper: React.SFC<{}> = ({ children }) => {
  return (
    <BodyContainer>
      <Inner>{children}</Inner>
    </BodyContainer>
  )
}

export default BodyWrapper
