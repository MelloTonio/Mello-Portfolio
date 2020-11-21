
import Fade from 'react-reveal/Fade';



import aboutImage from '../../assets/photoimg.jpeg'

const About = () => {
    return (
        <section className="about section" id="about" >
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                   <Fade top><img alt="images" src={aboutImage} /></Fade>
                </div>

                <div>
                    <Fade top>
                    <h2 className="about__subtitle">I'm Antonio Mello Babo</h2>
                    <p className="about__text">I live in São Paulo, currently studying Computer Science at PUC-SP and learning back-end development in my free time</p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default About;