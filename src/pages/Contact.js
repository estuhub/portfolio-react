// import react
import React from 'react';

// create component
class Contact extends React.Component{
  render() {
    return (
        <section id="contact">
            <h2>Get In Touch With Me</h2>
            <form>
                <div>
                    <label>Name</label>
                    <input type="Text" name="sender-name" placeholder="Enter Your Name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="sender-email" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea rows="10" name="message" placeholder="Enter Your Message" required ></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
    </section>
    )
  }
}

// export react
export default Contact;