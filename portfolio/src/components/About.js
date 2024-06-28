// Create your About component here
import IMG from "../assets/Passport Photo.jpg"
const About = () => {
    return(
        	<div id="about" className="about">
                <h1 className="about-heading">More info</h1>
                <div className="about-info">
                    <p className="about-desc">  
                        I'm Nathan Githinji Rugo, a student pursuing a Bachelor of Science in Informatics and Computer Science at Strathmore University in Nairobi, Kenya.
                        I am also part of the Africa 2 Silicon Valley (A2SV), an organisation that strives to educate African tech students with necessary skills to propel their carrers.  
                        I chose a career in technology because I believe in its transformative power and its ability to address complex challenges. 
                        The opportunity to create innovative solutions and contribute to the technological advancement of Africa inspires me. 
                        After completing my Bachelor's Degree and A2SV program, I aspire to leverage the skills gained to make a significant impact on the African tech scene, 
                        potentially by founding my own tech company. Outside software development, I enjoy playing football, exploring nature through hiking, and actively participating 
                        in volunteering activities, aligning with my commitment to community service and making a positive impact beyond the tech realm.
                    </p>
                    <div className="about-img">
                        <div className="about-img-wrapper">
                            <img src={IMG} alt="Nathan's Avatar"/>
                        </div>                        
                    </div>
                </div>
            </div>
    )
}
export default About;