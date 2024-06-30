// Create your Footer component here
import {FaWhatsapp, FaTelegram, FaDiscord, FaGoogle} from "react-icons/fa";
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect with Me</h1>
                <p className="footer-contact-access">Email: <a className="Email" href="mailto:nathan.githinji@strathmore.edu">nathan.githinji@strathmore.edu</a></p>
                <p className="footer-contact-access">Mobile: <a className="Telephone Number" href="tel:+254792189991">+254792189991</a></p>
            </div>
            <div className="Social Link">
                <div className="social-icons">

                    <a href="https://t.me/http://t.me/Viscereal"><i><FaTelegram /></i></a>
                    <a href="https://wa.link/nsi50u"><i><FaWhatsapp /></i></a>
                    <a href="https://discord.com/users/783287626403676190"><i><FaDiscord /></i></a>
                    <a href="mailto:nathan.githinji@strathmore.edu"><i><FaGoogle /></i></a>
                </div>
            </div>
        </footer>        
    )
}
export default Footer;