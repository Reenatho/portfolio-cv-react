import React from "react";
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
    return(
        <section id="services">
            <h4>Ofereço</h4>
            <h2>Serviços</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li><AiOutlineCheck className="service__icon"/> <p>Design reponsivo.</p></li>
                        <li><AiOutlineCheck className="service__icon"/> <p>Experiência de usuário agradável.</p></li>
                        <li><AiOutlineCheck className="service__icon"/> <p>Layout estilizado.</p></li>
                        
                    </ul>
                </article>
                {/* Fim do UI/UX */}

                <article className="service">
                    <div className="service__head">
                        <h3>Front End</h3>
                    </div>
                    <ul className="service__list">
                        <li><AiOutlineCheck className="service__icon"/> <p>Páginas interativas.</p></li>
                        <li><AiOutlineCheck className="service__icon"/> <p>Seu negócio no topo do Ranking de buscas.</p></li>
                        <li><AiOutlineCheck className="service__icon"/> <p>Acessibilidade.</p></li>
                        <li><AiOutlineCheck className="service__icon"/> <p>Design atrativo e funcional.</p></li>
                        
                    </ul>
                </article>

                {/* Fim do Desenvolvimento WEB */}

                <article className="service">
                    <div className="service__head">
                        <h3>Back End</h3>
                    </div>
                    <ul className="service__list">
                        <li><AiOutlineCheck className="service__icon"/> <p>Regras de Negócio.</p></li>
                        <li><AiOutlineCheck className="service__icon"/> <p>Banco de Dados Seguro.</p></li>
                        
                    </ul>
                </article>

                   {/* Fim do Back End */}
            </div>
        </section>
    )
}

export default Services;