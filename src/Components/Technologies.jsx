import React from 'react';
import html from '../img/skillsImgs/html-5.png'
import css from '../img/skillsImgs/css-3.png'
// import js from '../img/skillsImgs/jsLogo.png'
import js from '../img/skillsImgs/java-script.png'
import git from '../img/skillsImgs/gitLogo.png'
// import git from '../img/skillsImgs/git-logo.png'
import github from '../img/skillsImgs/github.png'
import react from '../img/skillsImgs/structure.png'
// import react from '../img/skillsImgs/react.png'
import redux from '../img/skillsImgs/redux.png'
import node from '../img/skillsImgs/nodeJsLogo.png'
import express from '../img/skillsImgs/xpressjs.png'
import sequelize from '../img/skillsImgs/sequelizepx.png'
import postgres from '../img/skillsImgs/postgreSQLLogo.png'
// import bootstrap from '../img/skillsImgs/bootstrapLogo.png'
import bootstrap from '../img/skillsImgs/btsLogo.png'
import  ts from '../img/skillsImgs/TSLogo.png'
import  angular from '../img/skillsImgs/angularLogo.png'
import python from '../img/skillsImgs/python.png'
import router from '../img/skillsImgs/router.webp'

const Technologies = ({lang}) => {
    return (
        <div className='technologies'>


            <div className='imgText'>
                <img className='techImgs' src={html} alt="" />
                <h3>HTML 5</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={css} alt="" />
                <h3>CSS 3</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={js} alt="" />
                <h3>JAVASCRIPT</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={react} alt="" />
                <h3>REACT JS</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={router} alt="" />
                <h3>REACT ROUTER</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={redux} alt="" />
                <h3>REACT REDUX</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={node} alt="" />
                <h3>NODE JS</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={express} alt="" />
                <h3>EXPRESS JS</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={sequelize} alt="" />
                <h3>SEQUELIZE</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={postgres} alt="" />
                <h3>POSTGRE SQL</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={git} alt="" />
                <h3>GIT</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={github} alt="" />
                <h3>GITHUB</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={bootstrap} alt="" />
                <h3>BOOTSTRAP</h3>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={ts} alt="" />
                <h3>TYPESCRIPT</h3>
                <p className='process' data-text={lang? "In process..." : "En Proceso..."}>{lang? "In process..." : "En Proceso..."}</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={angular} alt="" />
                <h3>ANGULAR</h3>
                <p className='process' data-text={lang? "In process..." : "En Proceso..."}>{lang? "In process..." : "En Proceso..."}</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={python} alt="" />
                <h3>PYTHON</h3>
                <p className='process' data-text={lang? "In process..." : "En Proceso..."}>{lang? "In process..." : "En Proceso..."}</p>
            </div>
        </div>
    );
};

export default Technologies;

/*
    const [carouselItem, setCarouselItem] = useState(0)
    const [carouselItem2, setCarouselItem2] = useState(1)
    const [carouselItem3, setCarouselItem3] = useState(2)

    const imgsArray = [
        html, css, js, react, redux, bootstrap, node, express, sequelize, postgres, git, github
    ]

    const next = () => {
        if(     carouselItem >= 0 && carouselItem  < 9 
            && carouselItem2 >= 1 && carouselItem2 < 10 
            && carouselItem3 >= 2 && carouselItem3 < 11){

            setCarouselItem( carouselItem + 3)
            setCarouselItem2( carouselItem2 + 3)
            setCarouselItem3( carouselItem3 + 3)

        }else{
            setCarouselItem(0)
            setCarouselItem2(1)
            setCarouselItem3(2)
        }
    }

    const prev = () => {
        
        if(   carouselItem <= 9 && carouselItem > 0
              && carouselItem2 <= 10 && carouselItem2 > 1  
              && carouselItem3 <= 11 && carouselItem3 > 2
            ){
                setCarouselItem( carouselItem - 3)
                setCarouselItem2( carouselItem2 - 3)
                setCarouselItem3( carouselItem3 - 3)
        } else {
            setCarouselItem(9)
            setCarouselItem2(10)
            setCarouselItem3(11)
        }


       
    }


<div className='carouselContainer1'>
    <button onClick={prev}>prev</button>
    <div className='carousel1'>
        <img className='carouselImg' src={imgsArray[carouselItem]} alt="" />
        <img className='carouselImg' src={imgsArray[carouselItem2]} alt="" />
        <img className='carouselImg' src={imgsArray[carouselItem3]} alt="" />
    </div>
    <button onClick={next}>next</button>
</div> 

 <div className='carouselContainer'>
    <button onClick={prev}>prev</button>
    <div className='carousel'>
        <img className='carouselImg' src={imgsArray[carouselItem]} alt="" />
        <img className='carouselImg' src={imgsArray[carouselItem2]} alt="" />
        <img className='carouselImg' src={imgsArray[carouselItem3]} alt="" />
    </div>
    <button onClick={next}>next</button>
</div> 

const [carouselItem, setcarouselItem] = useState(0)
    const [carouselItem2, setcarouselItem2] = useState(1)
    const [carouselItem3, setcarouselItem3] = useState(2)


     const imgsArray = [
        html, css, js,
    ]

<img className='carouselImg' src={imgsArray[carouselItem]} alt="" />
<img className='carouselImg' src={imgsArray[carouselItem2]} alt="" />
<img className='carouselImg' src={imgsArray[carouselItem3]} alt="" />


                <img className='carouselImg' src={html} alt="" />
                <img className='carouselImg' src={css} alt="" />
                <img className='carouselImg' src={js} alt="" />
                <img className='carouselImg' src={react} alt="" />
                <img className='carouselImg' src={redux} alt="" />
                <img className='carouselImg' src={node} alt="" />
                <img className='carouselImg' src={express} alt="" />
                <img className='carouselImg' src={sequelize} alt="" />
                <img className='carouselImg' src={postgres} alt="" />
                <img className='carouselImg' src={git} alt="" />
                <img className='carouselImg' src={github} alt="" />
                <img className='carouselImg' src={bootstrap} alt="" />
                <img className='carouselImg' src={ts} alt="" />
                <img className='carouselImg' src={angular} alt="" />

*/