import "./parallax.css"

const Parallax = () => {
  return (
    <div className="about">
      
         {/* <h1 className="glow">{type==="services" ? "what we I do ?":"what I did ?"}</h1> */}
<div
             className="section-banner">
  {[1, 2, 3, 4, 5, 6, 7].map((star) => (
    <div key={`star-${star}`} id={`star-${star}`}>
      <div className="curved-corner-star">
        <div id="curved-corner-bottomright"></div>
        <div id="curved-corner-bottomleft"></div>
      </div>
      <div className="curved-corner-star">
        <div id="curved-corner-topright"></div>
        <div id="curved-corner-topleft"></div>
      </div>
    </div>
  ))}
</div>

<div className="container">
  <div className="box">
    <span>ABOUT ME</span>
    
      <p>Hello there! I am Vengadesan, and I hold a Bachelor's degree. I have recently completed a comprehensive <strong>Full Stack Developer</strong> course at Guvi. As a Full Stack Developer, my responsibilities encompass designing, developing, and maintaining both the <strong>client-side (front-end)</strong> and <strong>server-side (back-end)</strong> of web applications. I possess proficiency in a variety of technologies and programming languages essential for the entire web development process</p>
    
  </div>
</div>
     </div>
  
  )
}

export default Parallax