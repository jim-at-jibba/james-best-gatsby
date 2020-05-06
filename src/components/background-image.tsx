import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled, { css } from "../utils/styled-components"

const ImageBg: React.SFC<{}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "home-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledBackgroundImage>
      <BackgroundImage
        fluid={data.desktop.childImageSharp.fluid}
        style={{ height: "100vh" }}
      >
        {children}
      </BackgroundImage>
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `}
`

export default ImageBg
