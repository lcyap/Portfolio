import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'
const pageTransition = {
    in:{
        opacity: 1, 
       // x: 0
     },
     out:{
         opacity:0,
        // x: "-100%"
     }
}
const Resume = () => {
    return (
        <motion.div
        initial ="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        >
            
            <div className="resume-container">
                <div className="download-btn">
                    <Link to="/Resume_LeaOdina.pdf" target="_blank" download>Download Resume</Link>
                </div>
                <div className="name-section">
                    Lea Odina
                </div>
                <div className="info-section">
                    <p>odinalea@gmail.com</p>
                     <p>Toronto ON</p>
                     <p>+1 647-459-0613</p>
                   
                </div>
                <div className="section-container">
                    <div className="section-title">
                        ---- ABOUT ME ----
                    </div>

                    <div className="section-text">
                        I am computer programming student of Seneca College and have a strong passion for web design and development. I enjoy tackling problems and finding innovative ways to find solutions.
                    </div>
                </div>
                <div className="section-container">
                    <div className="section-title">---- SKILLS ----</div>

                    <div className="section-skills">

                        <li>C/C++</li>
                        <li> <i class="fab fa-java"></i> Java</li>
                        <li><i class="fab fa-js-square"></i> Javascript</li>

                        <li><i class="fab fa-html5"></i> HTML</li>
                        <li><i class="fab fa-css3-alt"></i> CSS</li>
                        <li><i class="fab fa-react"></i> React</li>

                        <li><i class="fab fa-angular"></i> Angular</li>
                        <li><i class="fab fa-node"></i> Node.js</li>

                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Oracle SQL</li>
                        <li>Microsoft Office</li>
                        <li>Eclipse</li>
                        <li>Visual Studio Code</li>
                        <li>AdobeXD</li>
                    </div>
                </div>
                <div className="section-container">
                    <div className="section-title">---- EDUCATION ----</div>
                    <div className="section-text">
                        <li>Computer Programming and Analysis</li>
                        <div className="school-deets">
                            <li> Advanced Diploma</li>
                            <li>Seneca College </li>
                            <li>Sept 2019 - present</li>
                        </div>
                        
                    </div>
                    <div className="section-text">
                        <li>Practical Nursing</li>
                        <div className="school-deets">
                            <li>Diploma</li>
                            <li>George Brown College </li>
                            <li>Jan 2013 - Dec 2014</li>
                        </div>
                        
                    </div>
                </div>
                <div className="section-container">
                    <div className="section-title">---- WORK EXPERIENCE ----</div>
                    <div className="section-text">
                        <li>Compounding Technician</li>
                        <div className="school-deets">
                            <li>Lip Lab by Bite </li>
                            <li>Mar 2015 - Sep 2020</li>
                        </div>
                        <div className="work-deets">
                            <li>• Developed numerous operational procedures that improved workflow and efficiency </li>
                            <li>• Performed strict quality checks and drafted trend reports in a timely manner  </li>
                            <li>• Ensured accurate measurement of materials as per quality standards and company specifications</li>
                        </div>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume
