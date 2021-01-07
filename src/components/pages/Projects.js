import React from 'react'
import './Projects.css'
import Plantho from '../../images/plantho.png'
import Herki from '../../images/herki.png'
import Noode    from '../../images/noode.png'
function Projects(){
    return (
        <div className='project-container'>
           
                <div className='cards-container'>
                    <div className='cards-item'>
                        <div className='card-image'>
                            <img className='image' src={Plantho} alt="Planthology"></img>
                            <div className='middle'>
                                <div className='card-text'>
                                    Planthology
                                    <div className='card-desc'>
                                        React, Styled Components, HTML, CSS, Javascript 
                                        </div>
                                    <div className='card-button'>
                                        <a href="http://planthology.netlify.app/">Live Website</a>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='cards-item'>
                    <div className='card-image'>
                        <img className='image' src={Herki} alt="Herkimer"></img>
                            <div className='middle'>
                                <div className='card-text'>
                                    Herkimer
                                    <div className='card-desc'>
                                        HTML, CSS, Javascript, jQuery, Bootstrap 
                                        </div>
                                    <div className='card-button'>
                                    <a href="https://boring-brattain-94fce4.netlify.app/">Live Website</a>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                      
                    </div>
                    <div className='cards-item'>
                    <div className='card-image'>
                        <img className='image' src={Noode} alt="Noodelivery"></img>
                            <div className='middle'>
                                <div className='card-text'>
                                    Noodelivery
                                    <div className='card-desc'>
                                        Node.js, Express, HTML, CSS, Javascript, Bootstrap, Handlebars, AJAX, MongoDB, bcrypt, Nodemailer 
                                        </div>
                                    <div className='card-button'>
                                    <a href="https://floating-atoll-61832.herokuapp.com/">Live Website</a>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                      
                    </div>
                </div>
          
        </div>
    )
}
export default Projects; 