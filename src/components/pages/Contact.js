import React from 'react'
import Under from '../../images/underconst.svg'
import './Contact.css'
import { motion } from 'framer-motion';
const pageTransition = {
    in:{
        opacity: 1, 
        //x: 0
     },
     out:{
         opacity:0,
         //x: "-100%"
     }
}
const Contact = () => {
    return (
        <motion.div
        initial ="out"
        animate="in"
        exit="out"
        variants={pageTransition}>
            <div className="image-container">
                This section is under construction! 
                <img src={Under} alt="Under Construction"></img>
            </div>
            
        </motion.div>
    )
}

export default Contact
