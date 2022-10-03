import React from 'react';
import './Intro.css'
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FlotingDiv from '../FlotingDiv/FlotingDiv';
import { useContext } from 'react';
import { themeContext } from '../..//Context'; 
import {motion} from 'framer-motion'

const Intro = () => {
    const transition = {duration:2, type: 'spring'}
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hy! I AM</span>
                <span>Amit Yadav</span>
                <span>Frontend Developer with high level of experience in <br/>web designing and development, producting the Quality work</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img 
                 initial={{left:"-40%"}}
                 whileInView={{left:"-24%"}}
                 transition={transition}
                src= {glassesimoji} alt="" />


                <motion.div
                 initial={{top: '-4%',left: '90%'}}
                 whileInView={{left: '68%'}}
                 transition={transition}
                style={{top:'-4%',left:'80%'}}
                className='floating-div'>
                    <FlotingDiv image={crown} txt1='Web' txt2='Devloper'/>
                </motion.div>

                <motion.div 
                 initial={{left: '9rem',top: '23rem'}}
                 whileInView={{left: '0rem'}}
                 transition={transition}
                style={{top:'18rem', left:'4rem'}}
                    className='floating-div'>
                    <FlotingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
                </motion.div>
                {/* blur divs */}
                <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
                <div className='blur'
                style={{
                    background:'#C1F5FF',
                    top:'17rem',
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem'
                }}></div>
        </div>
    </div>
  )
}

export default Intro