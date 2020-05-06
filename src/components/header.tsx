import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "../utils/styled-components"

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
    height: 8rem;
    width: 100vw;
    padding-top: 25px;
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
      font-size: 2.5rem;
      color: ${theme.fonts.colors.primary};
      font-weight: bold;
      font-family: "Space Mono", monospace;
      line-height: 40px;
      letter-spacing: 0.1px;
    }
  `}
`
export default Header
