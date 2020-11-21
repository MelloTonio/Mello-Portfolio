import react from 'react'

import aboutImage from '../../assets/photoimg.jpeg'

const About = () => {
    return (
        <section className="about section">
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={aboutImage} />
                </div>

                <div>
                    <h2 className="about__subtitle">I'm Mello</h2>
                    <p className="about__text">Computer Science student and Backend Developer</p>
                </div>
            </div>
        </section>
    )
}

export default About;