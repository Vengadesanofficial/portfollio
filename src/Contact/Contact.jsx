import "./contact.css"

const Contact = () => {
  return (
    <div className="m-contact">
      {/* ------------------------------------------------- */}
<div className="contactcontent">
   <div className="planet">
      <div className="ring"></div>
         <div className="cover-ring"></div>
      <div className="spots">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>

      </div>
   </div>
   <p>CONTACT</p>
</div>

<div className="form-container">
    <div className="form">
        <span className="heading">Get in touch</span>
        <br/>
        <input placeholder="Name" type="text" className="input" />
        <input placeholder="Email" id="mail" type="email" className="input" />
        <textarea
            placeholder="Say Hello"
            rows="10"
            cols="30"
            id="message"
            name="message"
            className="textarea"
        ></textarea>
        <div className="button-container">
            <div className="send-button">Send</div>
            
        </div>
    </div>
</div>






      {/* ----------------------------------------------------------- */}
    </div>
  )
}

export default Contact