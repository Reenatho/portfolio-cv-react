import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return(
        <header>
            <div className="container header__container">
                <h4>Olá, me chamo</h4>
                <h1>Renato Santos</h1>
                <h5 className="text-light">Sou Desenvolvedor Front End</h5>
                <CTA />

                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="Eu" className="me-img" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;