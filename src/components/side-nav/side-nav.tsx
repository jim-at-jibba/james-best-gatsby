import React from "react"
import { motion } from "framer-motion"
import styled from "../../utils/styled-components"
import { useMenuStore } from "../../state/menu-store"

export function SideNav() {
  const { open } = useMenuStore()
  console.log(open)
  return (
    <Nav
      initial={false}
      animate={open ? { width: "400px" } : { width: 0 }}
    ></Nav>
  )
}

const Nav = styled(motion.nav)`
  height: 100vh;
  background: white;
  position: absolute;
  right: 0;
`
