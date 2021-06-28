import React from 'react'
import { DivLogo } from './Header.style'
import Logo from "../../images/LOGO-WARREN.jpeg"

const Header = () => {
    return (
        <DivLogo>
            <img src={Logo} alt="Logo Warren" />
        </DivLogo>
    )
}

export default Header
