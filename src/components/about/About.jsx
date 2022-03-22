import React from "react";
import './about.css'
import ME from '../../assets/me-about2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return(
        <section id="about">
                <h4>Conheça mais</h4>
                <h2>Um pouco sobre mim</h2>
                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-img">
                            <img src={ME} alt="Foto pessoal" className="about__img"/>
                        </div>
                    </div>
                    

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon"/>
                                <h4>Experiência</h4>
                                <small>1+ Ano</small>
                            </article>

                            <article className="about__card">
                                <FiUsers className="about__icon"/>
                                <h4>Clientes</h4>
                                <small>10+ Seguimentos</small>
                            </article>

                            <article className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h4>Projetos</h4>
                                <small>25+ Projetos Completos</small>
                            </article>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita explicabo dignissimos cumque sapiente architecto distinctio. Iste aperiam quam maxime distinctio fugiat commodi, dolore beatae, aut perspiciatis sequi asperiores soluta.
                        </p>

                        <a href="#contact" className="btn btn-primary">Entre em Contato</a>

                    </div>
                </div>
        </section>
    )
}

export default About;