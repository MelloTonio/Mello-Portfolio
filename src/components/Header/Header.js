import react from 'react'


import { Menu } from './styles'

const Header = () => {
    const [openMenu, setOpenMenu] = react.useState(false)


    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="x" className="nav__logo" >Mello | Portfolio</a>
                </div>

                <Menu openMenu={openMenu}>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link" onClick={() => setOpenMenu(!openMenu)} >Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link" onClick={() => setOpenMenu(!openMenu)} >About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link" onClick={() => setOpenMenu(!openMenu)}  >Skills</a></li>
                        <li className="nav__item"><a href="#projects" className="nav__link" onClick={() => setOpenMenu(!openMenu)}  >Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link" onClick={() => setOpenMenu(!openMenu)} >Contact</a></li>
                    </ul>
                </Menu>

                <div className="nav__toggle" id="nav-toggle" onClick={() => setOpenMenu(!openMenu)}>
                    <i className="bx bx-menu" ></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;