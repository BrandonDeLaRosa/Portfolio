import React from 'react';
import rick from '../gifs/rickMorty.gif'
import weather from '../gifs/weather.gif'
import pokedex from '../gifs/pokedex.gif'
import ecom from '../gifs/ecom.gif'
import bg2 from '../img/blackBg.webp';

const Projects = () => {
    return (
        <div className='projectsContainer' id='projects'>
            
            {/* <img className='projectsBg' src={bg} alt="" /> */}
            <img className='projectsBg' src={bg2} alt="" />
            <div className='projectsBox'>
            <h1 className='projectTitle1'>Projects</h1>
            <section className='gifContainer'>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Rick&Morty">Rick&Morty</h3>
                    <a href="https://benevolent-elf-de37aa.netlify.app/" target="_blank"> <img className='gif' src={rick} alt="" /></a>     
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Pokedex">Pokedex</h3>
                    <a href="https://coruscating-baklava-dc58d4.netlify.app/" target="_blank"><img className='gif' src={pokedex} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="eCommerce">eCommerce</h3>
                    <a href="https://main--resilient-klepon-9fd703.netlify.app/#/" target="_blank"><img className='gif' src={ecom} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Weather">Weather</h3>
                    <a href="https://soft-strudel-34df4f.netlify.app/" target="_blank" ><img className='gif' src={weather} alt="" /></a>
                </div> 
            </section>
            </div>
        </div>
    );
};

export default Projects;