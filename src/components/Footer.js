// import react
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

// create component
class Footer extends React.Component{
  render() {
    return (
        <footer id="footer">
            <div className="copyright">© Ester Lin's Website 2023</div>
            <div>
                <ul className="footer-list">
                <a href="https://github.com/estuhub" target="_blank" rel="noreferrer" class="footer-link"><li><FaGithub size={28}/></li></a>
                <a href="https://www.linkedin.com/in/esterlin/" target="_blank" rel="noreferrer" class="footer-link"><li><FaLinkedin size={28}/></li></a>
                </ul>
            </div>
        </footer>
    )
  }
}

// export react
export default Footer;