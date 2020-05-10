import React from "react"
import styled, { css } from "../utils/styled-components"
import SpotifyNowPlaying from "./spotify-now-playing"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import mediaQueries from "../utils/media-queries"

const Footer = () => {
  return (
    <StyledFooter>
      <SpotifyNowPlaying />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  ${() => css`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 ${px2vw(spacing(25))};

    ${mediaQueries("lg")`
      justify-content: flex-end;
    `}
  `}
`

export default Footer
