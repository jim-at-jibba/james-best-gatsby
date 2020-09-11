import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BodyWrapper from "../components/shared/BodyWrapper"
import PostContent from "../components/post-content"
import Img from "gatsby-image"
import styled, { css } from "../utils/styled-components"
import mediaQueries from "../utils/media-queries"
import px2vw from "../utils/px2vw"

const StyledLink = styled(Link)`
  ${() => css`
    display: flex;
    flex: 1;
    margin: 8px;
  `}
`
/**
 * Add keyboards section later
 */
const UsesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      office: file(relativePath: { eq: "office.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log("Data", data)
  return (
    <Layout>
      <SEO title="Uses" />
      <BodyWrapper>
        <PostContent>
          <h1>Uses</h1>
          <StyledSection>
            <div>
              <h1>Desk</h1>
              <Img fluid={data.office.childImageSharp.fluid} />
              <p>
                Custom made extra deep desk, with foot rest and Ikea chair.{" "}
              </p>
            </div>
            <div>
              <h1>On the desk</h1>
              <p>
                I use a 2019 15in Macbook Pro (always in calmshell position in a{" "}
                <a
                  href="https://www.amazon.co.uk/dp/B07TVMD7R7/"
                  target="_blank"
                >
                  MOSISO laptop stand
                </a>
                ). Connected to that are 2 AOC monitors on monitor arms. One is
                27in and the other 24in. There is nothing special about them.
              </p>
              <p>
                I use a{" "}
                <a
                  href="https://www.keyboardco.com/keyboard/usa-topre-realforce-87uw-Variable-mini-black-on-beige-keyboard.asp"
                  target="_blank"
                >
                  Realforce 87u
                </a>{" "}
                keyboard and a Logitech MX mouse.
              </p>
              <p>
                Lighting is provided by a vintage Anglepoise desk lamp and an
                LED strip behind the desk.
              </p>
              <p>
                Other bits include:
                <ul>
                  <li>Logitech C920 webcam</li>
                  <li>Blue Yeti Nano Mic</li>
                  <li>Cambridge Audio amp and speakers</li>
                  <li>Hakko soldering iron</li>
                  <li>Epson V800 film scanner</li>
                </ul>
              </p>
            </div>
            <div>
              <h1>Software</h1>
              <p>
                I do all my development in a terminal, leaning on iTerm2 with
                NeoVim and Tmux.
              </p>
              <p>
                I ported my favourite theme to{" "}
                <a
                  href="https://github.com/jim-at-jibba/ariake-vim-colors"
                  target="_blank"
                >
                  Vim
                </a>{" "}
                and Iterm2. My dotfiles can be found{" "}
                <a
                  href="https://github.com/jim-at-jibba/my-dots"
                  target="_blank"
                >
                  here.
                </a>{" "}
                I use the awesome{" "}
                <a href="https://dank.sh/" target="_blank">
                  Dank Mono
                </a>
              </p>
              <p>My essential cli tools include:</p>
              <ul>
                <li>
                  <a href="https://github.com/wting/autojump" target="_blank">
                    autojump
                  </a>{" "}
                  : A cd command that learns - easily navigate directories from
                  the command line
                </li>
                <li>
                  <a href="https://github.com/sharkdp/bat" target="_blank">
                    bat
                  </a>{" "}
                  : A cat(1) clone with wings.
                </li>
                <li>
                  <a href="https://github.com/junegunn/fzf" target="_blank">
                    fzf
                  </a>{" "}
                  : A command-line fuzzy finder
                </li>
                <li>
                  <a
                    href="https://github.com/BurntSushi/ripgrep"
                    target="_blank"
                  >
                    ripgrep
                  </a>{" "}
                  : ripgrep recursively searches directories for a regex pattern
                </li>
                <li>
                  <a href="https://hisham.hm/htop/" target="_blank">
                    htop
                  </a>{" "}
                  : an interactive process viewer for Unix systems
                </li>
                <li>
                  <a href="https://httpie.org/" target="_blank">
                    httpie
                  </a>{" "}
                  : a command-line HTTP client
                </li>
                <li>
                  <a href="https://stedolan.github.io/jq/" target="_blank">
                    jq
                  </a>{" "}
                  : jq is a lightweight and flexible command-line JSON processor
                </li>
              </ul>
              <h2>Other software</h2>
              <ul>
                <li>
                  <a href="https://www.alfredapp.com/" target="_blank">
                    Alfred4
                  </a>
                </li>
                <li>
                  <a href="https://matthewpalmer.net/vanilla/" target="_blank">
                    Vanilla
                  </a>
                </li>
                <li>
                  <a href="https://eggerapps.at/postico/" target="_blank">
                    Postico
                  </a>
                </li>
                <li>
                  <a href="https://protonvpn.com/" target="_blank">
                    Proton VPN
                  </a>
                </li>
                <li>
                  <a href="https://portswigger.net/burp" target="_blank">
                    Burp Suite
                  </a>
                </li>
                <li>
                  <a href="https://www.balena.io/etcher/" target="_blank">
                    Balena Etcher
                  </a>
                </li>
                <li>
                  <a href="https://apps.ankiweb.net/" target="_blank">
                    Anki
                  </a>
                </li>
                <li>
                  <a href="http://easyresapp.com/" target="_blank">
                    EasyRes
                  </a>
                </li>
              </ul>
              <h2>For creative things:</h2>
              <ul>
                <li>
                  <a href="">Adobe Suite</a>
                </li>
                <li>
                  <a href="">Blender</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>EDC</h1>
              <p>I like to keep my EDC simple.</p>
              <ul>
                <li>
                  <p>Slip Wallet: Nothing special, small and simple</p>
                </li>
                <li>
                  <p>Leuchtturm1917 notebook: Small dotted</p>
                </li>
                <li>
                  <p> Kaweco Classic Sport Rollerball: Stunning pen</p>
                </li>
                <li>
                  <p>Keys</p>
                </li>
                <li>
                  <p>Olympus XA: Best small 35mm camera money can buy</p>
                </li>
                <li>
                  <p>Citizen Promaster Aqualand watch: A gift from my mum</p>
                </li>
              </ul>
            </div>
          </StyledSection>
        </PostContent>
      </BodyWrapper>
    </Layout>
  )
}

const StyledSection = styled.section`
  ${() => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: ${px2vw(30, 420)};

    ${mediaQueries("md")`
      flex: 1;
      flex-direction: column;
      padding-bottom: 0;
    `};
  `}
`

export default UsesPage
