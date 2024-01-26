
import './App.css'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import Skill from './Skills/Skill'
// import Test from './components/Test'
import Navbar from './components/NavBar'
import Hero from './hero/Hero'
import Parallax from './parallax/Parallax'

const App = ()=>{
  return<div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
     <section id='About'><Parallax/></section>
     <section id='project'><Projects/></section>
    <section id='skills'><Skill/></section>
    <section id='Contact'><Contact/></section>
   
    {/* <section>Portfolio</section>
    <section>Portfolio</section>
    <section >Contact</section> */}
    {/* <Test/>
    <Test/> */}
  </div>
}

export default App
