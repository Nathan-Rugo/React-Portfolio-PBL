// Create your Body component here
import { FaGithub, FaGoogle, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import Avatar from '../assets/Passport Photo.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt="avatar" src={Avatar} />
                    <div className="body-content">
                        <div className="body-headline">Nathan Githinji</div>
                        <div className="body-text">Student - Full Stack Developer</div>
                        <div className="body-icons">
                            <a href="https://www.linkedin.com/in/nathan-githinji-rugo-4188772b1/" target="_blank" rel="noreferrer" className="icon-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Nathan-Rugo" target="_blank" rel="noreferrer" className="icon-link">
                                <FaGithub />
                            </a>
                            <a href="https://stackoverflow.com/users/24143572/viscereal28" target="_blank" rel="noreferrer" className="icon-link">
                                <FaStackOverflow />
                            </a>
                            <a href="mailto:nathan.githinji@strathmore.edu" target="_blank" rel="noreferrer" className="icon-link">
                                <FaGoogle />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
