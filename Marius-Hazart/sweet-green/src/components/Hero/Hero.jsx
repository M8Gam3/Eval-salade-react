import './Hero.scss'
import HeroBanner from '../../assets/images/hero-banner.png'


export default function Hero() {
    return (
        <>
            <section className="menu-hero">
                <div className="container">
                    <header>
                        <h1 className="menu-hero__title">
                            Fresh, plant-forward, earth friendly
                            food.
                        </h1>
                    </header>
                    {/* <!-- Hero --> */}
                    <div className="menu-hero__content">
                        <div className="menu-hero__picture">
                            <img src={HeroBanner} alt="" />
                        </div>
                        <div className="menu-hero__body">
                            <div className="menu-hero__text">
                                <h2>Italian Chopped</h2>
                                <p>
                                    Our take on an icon ft. salami, spicy <br/>
                                    banana peppers and red wine
                                    vinaigrette.
                                </p>
                                <a className="menu-hero__cta btn btn--warning" href="">GET IT</a>
                            </div>
                            <div className="menu-hero__details">
                                <p>
                                    Salami, spicy banana peppers, heirloom
                                    tomatoes, cucumbers, chickpeas, red
                                    onions, shaved parmesan, chopped
                                    romaine, shredded kale, red wine vinaigrette
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}