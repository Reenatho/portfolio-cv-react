import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const HeaderSocial = () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/renato-antonio-7100981b5/" target='_blank'>
                <BsLinkedin />
            </a>

            <a href="https://github.com/Reenatho" target='_blank'>
                <BsGithub/>
            </a>
            
            <a href="https://twitter.com/RenathoAntonio" target='_blank'>
                <BsTwitter/>
            </a>
        </div>
    )
}

export default HeaderSocial;