import './navbar.css';

export default function SideNavbar() {

    return (
        <nav className="side-nav" id="side-nav">
            <header id="header"><strong><a className="header-a" href="#top">Nabil Omi</a></strong></header>
            <ul className="nav-ul">
                <li className="nav-li"><a className="nav-a" href="#about">About</a></li>
                <li className="nav-li"><a className="nav-a" href="#projects">Projects</a></li>
                <li className="nav-li"><a className="nav-a" href="#resume">Contact</a></li>
                <li className="nav-li"><a className="nav-a" href="https://github.com/rquit" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
        </nav>
    )
}