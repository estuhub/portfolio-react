// import react
import React from 'react';

// create component
class Contact extends React.Component{
  render() {
    return (
        <section id="contact">
            <h2>Get In Touch With Me</h2>
            <div className="contact-form-container contact-form">
                <form>
                    <div className="form-control">
                        <label>Name</label>
                        <input type="Text" name="sender-name" placeholder="Enter Your Name" className="input-field" required/>
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name="sender-email" placeholder="Enter Your Email" className="input-field" required />
                    </div>
                    <div className="form-control">
                        <label>Message</label>
                        <textarea rows="10" name="message" placeholder="Enter Your Message" className="input-field" required ></textarea>
                    </div>
                    <div>
                        <button class="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
  }
}

// export react
export default Contact;