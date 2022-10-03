import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import fiverr from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { useContext } from 'react';
import { themeContext } from '../../Context'; 
import { motion } from 'framer-motion';


const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        <div className="awesome">
            <span style={{color:darkMode? 'white': ''}}>Works for All these</span>
            <span>Brands and Clients</span>
            <span>
                lorem ispum is simple dummy text of printing of printing Lorem
                 <br />
                 ispum is simple dummy text of printing
                 <br />
                 ispum is simple dummy text of printing text of printing
                 <br />
                 ispum is simple dummy text 
            </span>
            <button className='button s-button'>Hire Me</button>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>

        {/* right side  */}
        <div className="w-right">
            < motion.div 
            initial={{rotate: 45 }} 
            whileInView={{rotate: 0 }}
            viewport={{margin: '-40px'}}
            transition={{duration:3.5, type: 'spring'}}
              className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/* background circle  */}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  );
};

export default Works