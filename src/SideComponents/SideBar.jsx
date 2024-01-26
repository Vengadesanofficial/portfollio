import { useState } from "react"
import Links from "./Links/Links"
import { motion } from "framer-motion"
import "./side.css"
import ToggleButton from "./toggleButton/ToggleButton"
 const variants={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      },
    },
    closed:{
      clipPath:"Circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40,
      },
    }
  }
const SideBar = () => {
  const[open,setOpen]=useState(false)
 
  return (
    <motion.div className="sidebar" animate={open ? "open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default SideBar