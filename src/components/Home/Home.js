
import Fade from 'react-reveal/Fade';


import img from '../../assets/PicsArt_11-20-11.51.28.png'

const Home = () => {
    return (
        <main className="l-main">
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <Fade top ><h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Mello</span><br />Back-end developer</h1></Fade>
                    <Fade top><a href="x" className="button">Contact</a></Fade>
                </div>

                <div className="home__social">
                <Fade top>
                    <a href="x" className="home__social-icon"><i className="bx bxl-linkedin"></i></a>
                    <a href="x" className="home__social-icon"><i className="bx bxl-behance"></i></a>
                    <a href="x" className="home__social-icon"><i className="bx bxl-github"></i></a>
                    </Fade>
                </div>

                <div className="home__img">
                <Fade top> <img src={img} alt="My pic"></img> </Fade>
                </div>
            </section>
        </main>
    )
}

export default Home;