import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import heartemoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import { useContext } from 'react';
import { themeContext } from '../..//Context'; 
import { motion } from 'framer-motion';

const Services = () => {
    const transition = {duration:1, type:'spring'}
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>
                lorem ispum is simple dummy text of printing of printing Lorem
                 <br />
                 ispum is simple dummy text of printing
            </span>
            <button className='button s-button'>Download CV</button>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* right side  */}
        <div className="cards">
            
            < motion.div 
             whileInView={{left: '25rem'}}
             initial={{left: '2rem'}}
             transition={transition}
             style={{left:'14rem'}}>
                <Card                               /*make prop*/
                emoji ={heartemoji}
                heading ={'Design'}
                detail ={"Figma,Sketch,Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>
            {/* second card  */}
            <motion.div
            whileInView={{left: '-4rem'}}
            initial={{left: '-14rem'}}
            transition={transition}
            
            
             style={{top:'12rem',left:'-12rem'}}>
                <Card
                emoji={glasses}
                heading={'Developer'}
                detail={'Html,Css,Javascript,React, Adobe xd'}
                />
            </motion.div>
            {/* third card  */}
            <motion.div
             whileInView={{left: '14rem'}}
             initial={{left: '20rem'}}
             transition={transition}
             style={{top:'23rem',left:'20rem'}}>
                <Card
                emoji={humble}
                heading={'UI/UX'}
                detail={'Lorem ispum dummy text are usually use in section '}
                />
            </motion.div>
            <div className='blur s-blur2' style={{ background: 'var(--purple)'}}></div>

        </div>
    </div>
  )
}  

export default Services