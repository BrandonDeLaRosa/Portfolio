import React from 'react';
import bg from '../img/projectsBg.jpg';
import contact from '../img/ImgContact.png';
import cv from '../Components/archivo.pdf'

const Contacto = () => {
    return (
        <div className='contactContainer' id='contact'>

        <img className='contactBg' src={bg} alt="" />
        <h1 className='contactTitle'>Contactame</h1>

        <div className='contactBox'>
            <img className='contactImg' src={contact} alt="" />

                <div class="card formContainer">
                    <form className='formContainer' action="https://formsubmit.co/ae911ffe024a36a5b0f82d7d08246075" method="POST">
                        <h2 className='formTitle' data-text="Nombre:">Nombre:</h2>
                        <input className='formName' type="text" name="Name" placeholder='ingresa tu numbre...' required />
                        <h2 className='formTitle' data-text="Correo electronico:">Correo electronico:</h2>
                        <input className='formEmail' type="email" name="Email" placeholder='Correo electronico...' required />
                        <h2 className='formTitle' data-text="Mensaje:">Mensaje:</h2>
                        <textarea className='formText' name="Message" rows={7} cols={35} placeholder='   ¡Hola! pongámonos en contacto...' required></textarea>

                        <button className='submit' type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                
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

export default Contacto; 