
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <section className="skills section" id="skills" >
            <h2 className="section-title">Skills</h2>

            <Fade top>
            <div className="skills__container bd-grid">
                <div>
                    <h2 className="skills__subtitle">Professional Skills</h2>
                    <p className="skills__text">Skilled in Node.js and React - Learning Go and Flutter</p>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-javascript skills__icon"></i>
                            <span className="skills__name">Node.js</span>
                        </div>

                        <div>
                            <span className="skills__percentage">60%</span>
                        </div>

                        <div className="skills__bar skills__html"></div>
                    </div>

                <div className="skills__data">
                    <div className="skills__names">
                        <i class='bx bxl-react skills__icon'></i>
                        <span className="skills__name">React</span>
                    </div>

                    <div>
                        <span className="skills__percentage">60%</span>
                    </div>

                    <div className="skills__bar skills__js"></div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">
                    <i class='bx bxl-google skills__icon' ></i>
                        <span className="skills__name">Golang</span>
                    </div>

                    <div>
                        <span className="skills__percentage">40%</span>
                    </div>

                    <div className="skills__bar skills__css"></div>
                </div>

                <div className="skills__data">
                    <div className="skills__names">

                    <i class='bx bx-certification skills__icon' ></i>
                        <span className="skills__name">Flutter</span>
                    </div>

                    <div>
                        <span className="skills__percentage">10%</span>
                    </div>

                    <div className="skills__bar skills__ux"></div>
                </div>
                </div>
            </div>
            </Fade>
        </section>
    )
}

export default Skills;