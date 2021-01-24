import React from 'react'
import './Projects.css'
import Plantho from '../../images/plantho.png'
import Herki from '../../images/herki.png'
import Noode    from '../../images/noode.png'
import Sales from '../../images/sales.png'
import Angu from '../../images/angu.png'
import Shop from '../../images/shoppies.png'
import { motion } from 'framer-motion';

const pageTransition = {
    in:{
       opacity: 1, 
       //x: 0
    },
    out:{
        opacity:0,
       // x: "-100%"
    }
}

function Projects(){
    return (
        <motion.div 
        initial ="out"
        animate="in"
        exit="in"
        variants={pageTransition}

        className='project-container'
        >
           
                <div className='cards-container'
                style={{ overflowX: "hidden"}}>
                    <div className='cards-item'>
                        <div className='card-image'>
                            <img className='image' src={Shop} alt="Shoppies"></img>
                            <div className='middle'>
                                <div className='card-text'>
                                    The Shoppies
                                    <div className='card-desc'>
                                        React, JSX, OMDb API, CSS, Javascript 
                                        </div>
                                    <div className='card-button'>
                                        <a href="https://frozen-escarpment-92113.herokuapp.com/">Live Website</a>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
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
                    <div className='cards-item'>
                    <div className='card-image'>
                        <img className='image' src={Angu} alt="AngularBlog"></img>
                            <div className='middle'>
                                <div className='card-text'>
                                    Angular Blog
                                    <div className='card-desc'>
                                        Angular, MongoDB, Web API, Bootstrap 
                                        </div>
                                    <div className='card-button'>
                                    <a href="https://loving-panini-4e9a4e.netlify.app/home">Live Website</a>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                      
                    </div>
                    <div className='cards-item'>
                    <div className='card-image'>
                        <img className='image' src={Sales} alt="SuppliesStore"></img>
                            <div className='middle'>
                                <div className='card-text'>
                                    Supplies Store
                                    <div className='card-desc'>
                                        React Bootstrap, Node.js, Express, MongoDB, Web API, Moment.js, Lodash, jQuery 
                                        </div>
                                    <div className='card-button'>
                                    <a href="https://supplystore.netlify.app/">Live Website</a>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                      
                    </div>
                </div>
          
        </motion.div>
    )
}


export default Projects; 