import React from 'react';
import bg from '../img/projectsBg.jpg';
import contact from '../img/ImgContact.png';
import cv from '../Components/archivo.pdf'

const Contact = () => {


    return (
        <div className='contactContainer' id='contact'>

            <img className='contactBg' src={bg} alt="" />
            <h1 className='contactTitle'>Contact me</h1>

            <div className='contactBox'>
                <img className='contactImg' src={contact} alt="" />

                <form className='formContainer' action="https://formsubmit.co/ae911ffe024a36a5b0f82d7d08246075" method="POST">
                    <h2 className='formTitle' data-text="Name:">Name:</h2>
                    <input className='formName' type="text" name="Name" placeholder='Type your name...' required/>
                    <h2 className='formTitle' data-text="Email-Adress:">Email-Adress:</h2>
                    <input className='formEmail' type="email" name="Email" placeholder='Email adress...' required/> 
                    <h2 className='formTitle' data-text="Message:">Message:</h2>
                    <textarea className='formText' name="Message" rows={7} cols={35} placeholder='   Hey! let´s work together...' required></textarea>

                    <button className='submit'  type="submit">
                        Submit
                    </button>
                </form>

                <section className='contactLink'>
                    <a href="https://www.linkedin.com/in/brandon-de-la-rosa-3b0870259/" target="_blank"><h6></h6><i class="fa-brands fa-linkedin-in"></i></a>
                    <a download="Cv BrandonDeLaRosa" href={cv}><i class="fa-regular fa-file"></i></a>
                    <a href="https://github.com/BrandonDeLaRosa" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="https://wa.me/5522979911?text=Hola%20me%20interesa%20ponerme%20en%20contacto%20contigo. " target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </section>
            </div>

        </div>
    );
};

export default Contact;