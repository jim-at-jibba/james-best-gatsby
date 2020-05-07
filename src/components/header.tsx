import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "../utils/styled-components"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"

const Header = () => (
  <HeaderWrapper>
    <header>
      <div className="header-left">
        <Logo>
          <Link to="/">JB</Link>
        </Logo>
        <LogoWrapper />
      </div>
      <div></div>
    </header>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  ${() => css`
    height: ${px2vw(80, 720)};
    width: 100vw;
    padding-top: ${px2vw(spacing(24))};

    ${mediaQueries("md")(`
      height: ${px2vw(80, 1024)}
    `)}

    ${mediaQueries("xl")(`
      height: ${px2vw(80)}
    `)}

    header {
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .header-left {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `}
`

const Left = styled.div``

const LogoWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 60px;
    height: 60px;
    border: 5px solid ${theme.colors.primary};
    transition: transform 1.2s ease-in-out;
    &:hover {
      transform: rotate(360deg);
    }
  `}
`

const Logo = styled.span`
  ${({ theme }) => css`
    position: absolute;
    a {
      text-decoration: none;
      font-size: ${theme.fonts.sizes.xxxl};
      color: ${theme.fonts.colors.primary};
      font-weight: bold;
      font-family: "Dank Mono", monospace;
      line-height: 40px;
      letter-spacing: 0.1px;
    }
  `}
`
export default Header
