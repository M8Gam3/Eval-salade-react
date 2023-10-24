import './Footer.scss'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-about">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Locations</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">sweetgreen app</a></li>
                            <li><a href="">Covid-19 safety</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">TikTok</a></li>
                            <li><a href="">Spotify</a></li>
                            <li><a href="">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h3>Support + Services</h3>
                        <ul>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Gift Cards</a></li>
                            <li><a href="">Store</a></li>
                        </ul>
                    </div>
                    <div className="footer-policies">
                        <h3>Terms + Conditions</h3>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms + Conditions</a></li>
                            <li>
                                <a href="">
                                    Do Not Sell My Personal
                                    Information
                                </a>
                            </li>
                            <li><a href="">Diversity, Equity, + Inclusion</a></li>
                            <li><a href="">Fringe Benefits Claims MRFs</a></li>
                        </ul>
                    </div>
                    <div className="footer-credits">
                        <p>©2023 sweetgreen</p>
                    </div>
                </div>
            </footer>
        </>
    )
}