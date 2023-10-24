import './Header.scss'
import logo from '../../assets/images/logo.svg'


export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__nav-left">
                            <li><a href="">Our Menu</a></li>
                            <li><a href="">Our Mission</a></li>
                            <li><a href="">The Market</a></li>
                        </ul>
                        <div className="header__nav-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <ul className="header__nav-right">
                            <li><a href="">Outpost</a></li>
                            <li><a href="">Catering</a></li>
                            <li><a href="">Locations</a></li>
                            <li><a className="btn btn--primary" href="">Order</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}