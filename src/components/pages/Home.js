import HeroSection from '../HeroSection';
import React from 'react'
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
function Home(){
    return (
        <motion.div 
        initial ="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        >
        <HeroSection />
       
        </motion.div>
    )
}
export default Home; 