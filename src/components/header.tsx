import { Link } from "gatsby"
import React from "react"
import styled, { css } from "../utils/styled-components"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import mediaQueries from "../utils/media-queries"
import { RiGithubLine, RiTwitterLine } from "react-icons/ri"

const Header = () => (
  <HeaderWrapper>
    <header>
      <Left>
        <Logo>
          <Link to="/">JB</Link>
        </Logo>
        <LogoWrapper />
      </Left>
      <Right>
        <ul>
          <li>
            <Link to="posts">POSTS</Link>
          </li>
          <li>
            <a href="https://github.com/jim-at-jibba" target="_blank">
              <RiGithubLine />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jimgbest" target="_blank">
              <RiTwitterLine />
            </a>
          </li>
        </ul>
      </Right>
    </header>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  ${() => css`
    height: 80px;
    padding-top: ${px2vw(spacing(24))};

    ${mediaQueries("sm")(`
      height: ${px2vw(80, 720)}
    `)}
    ${mediaQueries("md")(`
      height: ${px2vw(80, 1024)}
    `)}

    ${mediaQueries("xl")(`
      height: ${px2vw(80)}
    `)}

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  ${({ theme }) => css`
    display: flex;

    ul {
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      list-style: none;
      width: 200px;

      li {
        display: flex;
        align-items: center;
      }

      a {
        font-family: "Dank Mono";
        text-decoration: none;
        font-size: ${theme.fonts.sizes.xxl};
        color: ${theme.fonts.colors.primary};
        transition: all 0.2s;
        padding: 0 3px;

        &:hover {
          background: ${theme.colors.accent};
        }
      }
    }
    svg {
      width: 30px;
      height: 30px;
      color: ${theme.fonts.colors.primary};
      margin-top: ${spacing(10)}px;
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
    pointer-events: none;
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
