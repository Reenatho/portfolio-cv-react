import React from "react";
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
    return(
        <section id="experience">
            <h4>Um pouco sobre minhas habilidades</h4>
            <h2>Top Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Desenvolvedor FrontEnd</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Avançado</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Avançado</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Angular</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Vue</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
                
                {/* FIM DO FRONT END */}

                <div className="experience__backend">
                    <h3>Desenvolvedor BackEnd</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;