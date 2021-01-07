import React from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'
const Resume = () => {
    return (
        <div>
            
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
                        {/* <table>
                            <tr> Compunding Technician
                                <td>Mar 2015 - Sep 2020</td>
                            </tr>
                               
                           
                                 
                                    <ul>
                                        <li>asdasd</li>
                                        <li>asdasd</li>
                                    </ul>
                               
                            
                        </table> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
