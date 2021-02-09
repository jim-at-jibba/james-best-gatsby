import React from "react"
import { motion } from "framer-motion"
import styled from "../../utils/styled-components"
import { useMenuStore } from "../../state/menu-store"
import { RiCloseLine } from "react-icons/ri"
import { theme } from "../../utils/theme"
import { NavInner } from "./nav"

export function SideNav() {
  const { open, actions } = useMenuStore()
  return (
    <Nav initial={false} animate={open ? { width: "350px" } : { width: 0 }}>
      <Close
        onClick={() => actions.close()}
        size={60}
        color={theme.colors.primary}
        cursor="pointer"
      />
      <NavInner />
    </Nav>
  )
}

const Nav = styled(motion.nav)`
  height: 100vh;
  background: white;
  position: absolute;
  right: 0;
  z-index: 1;
`

const Close = styled(RiCloseLine)`
  cursor: pointer;
  position: relative;
  right: -280px;
  top: 20px;
`
