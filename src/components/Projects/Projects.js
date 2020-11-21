import react from 'react'

import Fade from 'react-reveal/Fade';


const Work = () => {
    return (
        <section className="work section" id="projects" >
            <h2 className="section-title">Projects</h2>

            <Fade top>
            <div className="work__container bd-grid">
                <div className="work__img">
                    <img src="#" alt="#" />
                </div>
                <div className="work__img">
                    <img src="#" alt="#" />
                </div>
                <div className="work__img">
                    <img src="#" alt="#" />
                </div>
            </div>
            </Fade>
        </section>
    )
}

export default Work;