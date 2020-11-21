import react from 'react'


const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">Mello</p>

            <div className="footer__social">
                <a className="footer__icon"><i className="bx bxl-twitter"></i></a>
                <a className="footer__icon"><i className="bx bxl-facebook"></i></a>
                <a className="footer__icon"><i className="bx bxl-instagram"></i></a>
            </div>

            <p>&#169; 2020 copyright all rights reserved </p>
        </footer>
    )
}


export default Footer;