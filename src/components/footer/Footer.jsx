import React from "react";
import './footer.css'
import { BsLinkedin, BsTwitter, BsGithub  } from 'react-icons/bs'
const Footer = () => {
    return(
        <footer>
            <a href="#" className="footer__logo">Renato - Dev FrontEnd</a>

            <ul className="permalinks">
                <li> <a href="#">Home</a></li>
                <li> <a href="#about">Sobre</a></li>
                <li> <a href="#experience">Experiências</a></li>
                <li> <a href="#services">Serviços</a></li>
                <li> <a href="#portfolio">Portfolio</a></li>
                <li> <a href="#contact">Contato</a></li>              
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/renato-antonio-7100981b5/"><BsLinkedin className="socials__icon" /></a>
                <a href="https://twitter.com/RenathoAntonio"><BsTwitter className="socials__icon" /></a>
                <a href="https://github.com/Reenatho"><BsGithub className="socials__icon"/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Egator Tutorials. All rights reserved.</small>
                <small> Agradeço imensamente pela aula!</small>
            </div>
        </footer>
    )
}

export default Footer;