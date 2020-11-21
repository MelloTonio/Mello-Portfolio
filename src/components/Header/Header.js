import react from 'react'

import { Menu } from './styles'

const Header = () => {
    const [openMenu, setOpenMenu] = react.useState(false)


    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo" >Mello | Portfolio</a>
                </div>

                <Menu openMenu={openMenu}>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link" >Home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" >About</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" >Skills</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" >Work</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" >Contact</a></li>
                    </ul>
                </Menu>

                <div className="nav_toggle" id="nav-toggle" onClick={() => setOpenMenu(!openMenu)}>
                    <i className="bx bx-menu" ></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;