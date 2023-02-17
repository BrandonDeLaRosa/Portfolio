import React, { useState } from 'react';
import skillsBg from '../img/skillsBg.jpg'
import Technologies from '../Components/Technologies';
import SoftSkills from '../Components/SoftSkills';
import { Form } from 'react-bootstrap';

const Habilidades = () => {
    const [skills, setSkill]= useState(false)
    return (
        <div className='skillsContainer' id='skills'>
            <img className='skillsBg' src={skillsBg} alt="" />

            <h1 className='skillsTitle'>{skills ? "Habilidades blandas" : "Tecnologias"}</h1>

            <div className='techSkillsBox'>
            {/* <Form onClick={() => setSkill(!skills)}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label= {skills? "Tecnologias" : "Habilidades blandas"}
                />
            </Form> */}

            <label class="switch">
                    <input type="checkbox" onClick={() => setSkill(!skills)}/>
                        <div class="slider"></div>
                        <div class="slider-card">
                            <div class="slider-card-face slider-card-front"></div>
                            <div class="slider-card-face slider-card-back"></div>
                        </div>
            </label>

            <div className='techSkill'>
                {skills ? <SoftSkills /> : <Technologies />}
            </div>
            </div>
        </div>
    );
};

export default Habilidades;
