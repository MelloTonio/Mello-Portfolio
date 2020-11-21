import react from 'react'
import Fade from 'react-reveal/Fade';



import aboutImage from '../../assets/photoimg.jpeg'

const About = () => {
    return (
        <section className="about section" id="about" >
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                   <Fade top><img src={aboutImage} /></Fade>
                </div>

                <div>
                    <Fade top>
                    <h2 className="about__subtitle">I'm Mello</h2>
                    <p className="about__text">Computer Science student and Backend Developer</p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default About;