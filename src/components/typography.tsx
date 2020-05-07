import React from "react"
import styled, { css } from "../utils/styled-components"

const HeadingStyle = css`
  margin-top: 0;
  margin-bottom: 16px;
`

// Heading h1
export const H1 = styled.h1`
  ${({ theme }) => `
    ${HeadingStyle};
    font-size: ${theme.fonts.sizes.xxxxl};
  `}
`

// Heading h2
export const H2 = styled.h2`
  ${({ theme }) => `
    ${HeadingStyle};
    font-size: ${theme.fonts.sizes.xxxl};
  `}
`

// Heading h3
export const H3 = styled.h3`
  ${({ theme }) => `
    ${HeadingStyle};
    font-size: ${theme.fonts.sizes.xxl};
  `}
`

// Heading h4
export const H4 = styled.h4`
  ${({ theme }) => `
    ${HeadingStyle};
    font-size: ${theme.fonts.sizes.xl};
  `}
`

// Heading h5
export const H5 = styled.h5`
  ${({ theme }) => `
    ${HeadingStyle};
    font-size: ${theme.fonts.sizes.lg};
  `}
`

// Heading h6
export const H6 = styled.h6`
  ${({ theme }) => `
    ${HeadingStyle};
    font-size: ${theme.fonts.sizes.base};
  `}
`

// Body text
export const Text = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fonts.sizes.base};
  `}
`

// Small text (<small>)
export const Small = styled.small`
  ${({ theme }) => `
    font-size: ${theme.fonts.sizes.xs};
  `}
`

// Bold text
export const Strong = styled.strong`
  ${({ theme }) => `
    font-size: ${theme.fonts.sizes.base};
    font-weight: bold;
  `}
`

// Highlighted text
export const Highlight = styled.mark`
  ${({ theme }) => `
    font-size: ${theme.fonts.sizes.base};
    background-color: hsl(209.6, 100%, 85%);
  `}
`

// Italicized text
export const Italic = styled.em`
  ${({ theme }) => `
    font-size: ${theme.fonts.sizes.base};
    font-style: italic;
  `}
`

// Underlined text
export const Underline = styled.u`
  ${({ theme }) => `
    font-size: ${theme.fonts.sizes.base};
    text-decoration: underline;
  `}
`
