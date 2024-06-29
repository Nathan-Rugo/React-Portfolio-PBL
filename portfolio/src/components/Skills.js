// Create your Skills component here
import {FaGithub, FaHtml5, FaReact, FaPython, FaJs, FaJava, FaCss3} from 'react-icons/fa';

const Skills = () => {
    const skillsArray = [
        {
            "name": "Github",
            "icon": FaGithub,
        },
        {
            "name":"HTML5",
            "icon":FaHtml5
        },
        {
            "name":"React",
            "icon":FaReact
        },
        {
            "name":"Python",
            "icon":FaPython
        },
        {
            "name":"JavaScript",
            "icon":FaJs
        },
        {
            "name":"Java",
            "icon":FaJava
        },
        {
            "name":"CSS3",
            "icon":FaCss3
        }
    ];
    return(
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skills-holder'>
                {
                    skillsArray.map((skill, index) =>{
                        const Icon = skill.icon;
                        return(
                            <i key={index} className='skills-cards'>
                                <Icon className='skills-icon' />
                                <p className='skill-name'>{skill.name}</p>
                            </i>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
export default Skills;