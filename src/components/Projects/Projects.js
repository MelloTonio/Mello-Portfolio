import react from 'react'

import Fade from 'react-reveal/Fade';

import SimpleSlider from '../Carroussel/Carroussel.js'


const Work = () => {
    return (
        <div>
        <section className="work section" id="projects" >
            <h2 className="section-title">Projects</h2>
            <div className="zap">
            <div className="Slider">
                <div className="helper">
                    < SimpleSlider/>
                </div>
            </div>
                            
            </div>
        </section>
        </div>
    )
}

export default Work;