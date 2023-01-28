// import react
import React from 'react';
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub, FiDownload } from "react-icons/fi";

// create component
class Footer extends React.Component{
  render() {
    return (
        <footer id="footer">
            <div className="copyright">© Designed & Built by Ester Lin</div>
            <div>
                <ul className="footer-list">
                <a href="https://github.com/estuhub" target="_blank" rel="noreferrer" className="footer-link"><li><FiGithub size={28}/></li></a>
                <a href="https://www.linkedin.com/in/esterlin/" target="_blank" rel="noreferrer" className="footer-link"><li><RiLinkedinLine size={28}/></li></a>
                <a href="./files/CV_EsterLin.pdf" target="_blank" rel="noreferrer" className="footer-link"><li><FiDownload size={28}/></li></a>
                </ul>
            </div>
        </footer>
    )
  }
}

// export react
export default Footer;