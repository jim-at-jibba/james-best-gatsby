import React from "react"
import { Link } from "gatsby"
import { RiGithubLine, RiTwitterLine } from "react-icons/ri"
import styled, { css } from "../../utils/styled-components"
import spacing from "../../utils/spacing"
import { motion } from "framer-motion"
import { useMenuStore } from "../../state/menu-store"

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
}

export function NavInner() {
  const { open, actions } = useMenuStore()

  function closeMenu() {
    setTimeout(() => {
      actions.close()
    }, 300)
  }
  return (
    <Menu>
      <motion.ul
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        variants={list}
      >
        <motion.li variants={item}>
          <Link
            to="/posts/"
            activeStyle={{ background: "#ff286c" }}
            partiallyActive={true}
            onClick={() => closeMenu()}
          >
            POSTS
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            to="/hacking/"
            activeStyle={{ background: "#ff286c" }}
            partiallyActive={true}
            onClick={() => closeMenu()}
          >
            HACKING
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            to="/uses/"
            activeStyle={{ background: "#ff286c" }}
            partiallyActive={true}
            onClick={() => closeMenu()}
          >
            USES
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <a href="https://github.com/jim-at-jibba" target="_blank">
            <RiGithubLine />
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="https://twitter.com/jimgbest" target="_blank">
            <RiTwitterLine />
          </a>
        </motion.li>
      </motion.ul>
    </Menu>
  )
}

const Menu = styled.div`
  ${({ theme }) => css`
    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        margin: 10px 2px;
      }

      a {
        font-family: "Dank Mono";
        text-decoration: none;
        font-size: ${theme.fonts.sizes.xxl};
        color: ${theme.fonts.colors.primary};
        transition: all 0.2s;
        padding: 0 6px;

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
