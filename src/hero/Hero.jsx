import "./hero.css"
import { motion } from "framer-motion"

const textvariant={
  initial:{
    x:-500,
    opacity:0,
  },
   animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }

}
const slidevariant={
  initial:{
    x:0,
    
  },
   animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:40,
      
    }
  },
 

}
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div  className="textcontainer" variants={textvariant} initial="initial"
         animate="animate">
            <motion.h2 variants={textvariant}>Hello there I,am vengadesan</motion.h2>
            <motion.h1 variants={textvariant}>FULL STACK <span> DEVELOPER </span></motion.h1>
            <motion.h4 variants={textvariant}>Welcome to  <span>My Website</span></motion.h4>
            <motion.img variants={textvariant} animate="scrollButton" src="https://th.bing.com/th/id/OIG.OnpvJdky.YoL6yhjaVhp?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" height={40} width={50} alt="" />
            
        </motion.div>
        </div>
        <motion.div initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.5}} className="imagecontainer">
            <img src="https://th.bing.com/th/id/OIG.MuwIOrB.MVBrIfbQTHzt?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="" height={50} width={400} />
        </motion.div>
        
        <motion.div className="slidingtext" variants={slidevariant} initial="initial" animate="animate" >
          FULL STACK WEB DEVELOPER
        </motion.div>
       <a href="Resume.pdf" download> <motion.div variants={textvariant} initial="initial"
         animate="animate"><motion.button variants={textvariant} className="resume">Resume</motion.button></motion.div></a>
    </div>
  )
}

export default Hero