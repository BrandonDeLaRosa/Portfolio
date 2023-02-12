import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import Typewriter from 'typewriter-effect';
import homeBg2 from '../img/homebg3.jpg'
import homeLogo from '../img/webDevLogo2.png'

const Home = () => {
    return (
        <div className='homeContainer' id='home'>
            <img className='homeBg' src={homeBg2} alt="" />

            <h1 className='homeTitle'>Welcome!</h1>
            <img className='homeLogo' src={homeLogo} alt="" />


{/*  ========================================   react-typewriter-effect ================================*/}
            {/* <div className='homeTxt1'>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'arial',
                        color: 'orange',
                        fontWeight: 700,
                    }}
                    startDelay={1000}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Hi i´m Brandon De La Rosa.',
                        'Am a front-end web developer.',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                    multiTextLoop
                />
            </div> */}

            <div className='homeTxt1'>
                <Typewriter
                   onInit={(typewriter) => {
                    typewriter.typeString("Hi i´m Brandon De La Rosa.")
                    .start();
                   }}
                />
            </div>

            <div className='homeTxt2'>
                <h1 className='homeTitle'>About me.</h1>
                <p className='homeTitle3'>
                    Am a front-end focused web developer, that also really enjoies composing and recording music, playing guitar, playing videogames and working out.
                    I consider myself as a proactive, self-taught, creative person. In constant looking for personal and professional growth.
                    Also am a good team player, maintaining a good attitude, being friendly and respectful with my colleagues.
                    Always willing to improve my skills, spending as much time as possible creating new projects, improving previously completed ones, as well as looking for new challenges to stay motivated.
                </p>
            </div>

        </div>
    );
};

export default Home;

/*

<TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hey there, This is a type writer animation package',
          'it consist of two types...',
          'Single text display and multi text display',
          'Fonts can be customized.',
          'The type speed can be customized as well',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />

*/