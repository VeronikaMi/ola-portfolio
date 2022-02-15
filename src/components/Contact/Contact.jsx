import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [mail, setMail] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmit = () => {
    let project = { mail, desc };
    console.log(project);
  };

  return (
    <div className="contact">
      <h1>My Contacts</h1>
      <div className="container">
        <div className="my-contacts">
          <h4>
            E-mail: <span>nika.mitichashili@gmail.com</span>
          </h4>
          <h4>
            Phone number: <span>123345678</span>
          </h4>
          <h4>
            Facebook: <span></span>
          </h4>
        </div>
        <div className="project-info">
          <h3>Submit your project:</h3>
          <input
            type="email"
            placeholder="Enter your mail..."
            value={mail}
            onChange={(event) => {
              setMail(event.target.value);
            }}
          />
          <textarea
            value={desc}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
            name="desc"
            id="desc"
            placeholder="Enter project description here..."
          ></textarea>
          <button className="btn-submit" type="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
