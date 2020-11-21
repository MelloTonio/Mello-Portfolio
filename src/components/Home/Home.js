import react from 'react';

import img from '../../assets/PicsArt_11-20-11.51.28.png'

const Home = () => {
    return (
        <main className="l-main">
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Mello</span><br />Back-end developer</h1>
                    <a href="#" className="button">Contact</a>
                </div>

                <div className="home__social">
                    <a href="#" className="home__social-icon"><i className="bx bxl-linkedin"></i></a>
                    <a href="#" className="home__social-icon"><i className="bx bxl-behance"></i></a>
                    <a href="#" className="home__social-icon"><i className="bx bxl-github"></i></a>
                </div>

                <div className="home__img">
                    <img src={img} alt="My pic"></img>
                </div>
            </section>
        </main>
    )
}

export default Home;