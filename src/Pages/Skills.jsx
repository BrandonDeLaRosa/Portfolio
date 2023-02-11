import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SoftSkills from '../Components/SoftSkills';
import Technologies from '../Components/Technologies';
import skillsBg from '../img/skillsBg.jpg'

const Skills = ({ lang }) => {
    const [skills, setSkill] = useState(false)
    return (
        <div className='skillsContainer' id='skills'>
            <img className='skillsBg' src={skillsBg} alt="" />

            <h1 className='skillsTitle'>{skills ? "Soft skills" : "Technologies"}</h1>
            <div className='techSkillsBox'>
                <Form onClick={() => setSkill(!skills)}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label={skills ? "Technologies" : "Soft skills"}
                    />
                </Form>

                <div className='techSkill'>
                {skills ? <SoftSkills lang={lang} /> : <Technologies lang={lang} />}
            </div>
            </div>
        </div>
    );
};

export default Skills;