import React, { useState } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import styled from "styled-components"

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false)
  const handleNavbar = () => {
    setNavbarOpen(!NavbarOpen)
  }
  return (
    <NavWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks NavbarOpen={NavbarOpen} />
      <NavbarIcons />
    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export default Navbar
