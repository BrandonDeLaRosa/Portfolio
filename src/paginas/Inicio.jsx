import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import homeBg2 from '../img/homebg3.jpg'
import homeLogo from '../img/webDevLogo2.png'

const Inicio = () => {
    return (
        <div className='homeContainer' id='home'>
            <img className='homeBg' src={homeBg2} alt="" />

                <h1 className='homeTitle'>¡Bienvenido!</h1>
                <img className='homeLogo' src={homeLogo} alt="" />

            <div className='homeTxt1'>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'arial',
                        // color: '#ff7300',
                        color: 'orange',
                        fontWeight: 700,
                    }}
                    startDelay={1000}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Soy Brandon De La Rosa.',
                        'Soy desarrollador web front-end.',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                    multiTextLoop
                />
            </div>

            <div className='homeTxt2'>
                <h1 className='homeTitle'>Sobre mi</h1>
                <p className='homeTitle3'>
                    Soy un desarrollador web enfocado en el front-end, tambien disfruto mucho componer musica, tocar guitarra, jugar videojuegos y ejercitarme. Me considero una persona proactiva, autodidacta, creativa y en constante busqueda de crecimeinto personal y profesional, me desenvuelvo bien trabajndo en equipo, manteniendo buena actitud, siendo amable y respetuoso con mis compañeros.
                    Estoy siempre dispuesto a mejorar mis habilidades, dedicando el mayor tiempo posible a crear nuevos proyectos, mejorar los previamente concluidos, asi como buscando nuevos desafios para mantenerme motivado.
                </p>
            </div>
        </div>
    );
};

export default Inicio;