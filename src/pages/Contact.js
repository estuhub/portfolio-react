// import react
import React from 'react';

// create component
class Contact extends React.Component{
  render() {
    return (
        <section id="contact">
            <div>
                <h2 className="header">Get In Touch With Me</h2>
            <div className="contact-form-container">
                <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                    <div className="form-control">
                        <label>Name</label>
                        <input type="text" name="sender-name" placeholder="Jane Doe" className="input-field" required/>
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name="sender-email" placeholder="example@gmail.com" className="input-field" required />
                    </div>
                    <div className="form-control">
                        <label>Message</label>
                        <textarea rows="10" name="message" placeholder="Hi there!" className="input-field" required ></textarea>
                    </div>
                    <div>
                        <button className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
  }
}

// export react
export default Contact;