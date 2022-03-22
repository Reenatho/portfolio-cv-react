import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const Portfolio = () => {
    return(
        <section id="portfolio">
            <h4>Meus Trabalhos</h4>
            <h2>Portfólio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG1} alt="Img Projeto1" />
                    </div>
                    <h3>Modelo de Portfólio</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Reenatho/Portfolio-CV" className="btn" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://reenatho.github.io/Portfolio-CV/" className="btn btn-primary" target='_blank' rel="noreferrer">Ver Página</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG2} alt="Img Projeto1" />
                    </div>
                    <h3>Formulário de Cadastro</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Reenatho/FormularioDeCadastro" className="btn" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://reenatho.github.io/FormularioDeCadastro/" className="btn btn-primary" target='_blank' rel="noreferrer">Ver Página</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG3} alt="Img Projeto1" />
                    </div>
                    <h3>Encurtador de Links</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Reenatho/Encurtador-de-Links" className="btn" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://encurtador-de-links-zeta.vercel.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Ver Página</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG4} alt="Img Projeto1" />
                    </div>
                    <h3>Página de Chat</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Reenatho/AluraCord-Matrix" className="btn" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://alura-cord-matrix-97wwxdme7-reenatho.vercel.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Ver Página</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG5} alt="Img Projeto1" />
                    </div>
                    <h3>Cadastro de Clientes</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Reenatho/CRUD---Local-Storage" className="btn" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://reenatho.github.io/CRUD---Local-Storage/" className="btn btn-primary" target='_blank' rel="noreferrer">Ver Página</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG6} alt="Img Projeto1" />
                    </div>
                    <h3>Formulário de Cadastro</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Reenatho/Form-Cadastro-React-2" className="btn" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://reenatho.github.io/Form-Cadastro-React-2/" className="btn btn-primary" target='_blank' rel="noreferrer">Ver Página</a>
                    </div>
                    
                </article>
            </div>
        </section>
    )
}

export default Portfolio;