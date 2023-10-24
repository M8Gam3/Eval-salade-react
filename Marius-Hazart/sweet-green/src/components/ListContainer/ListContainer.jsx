import './ListContainer.scss'


export default function ListContainer() {
    return (
        <>
            <section className="infos-list container">
                <div className="infos-list__item">
                    <h2 className="infos-list__title">
                        Customize
                    </h2>
                    <h3 className="infos-list__subtitle">
                        Create your own
                        bowl with your
                        favorites
                    </h3>
                    <a className="infos-list__action btn btn--warning" href="">Order Now </a>
                </div>
                <div className="infos-list__item">
                    <h2 className="infos-list__title">
                        Nutrition
                    </h2>
                    <h3 className="infos-list__subtitle">
                        Download our
                        nutritional
                        information
                    </h3>
                    <a className="infos-list__action btn btn--warning" href="">
                        Download
                    </a>
                </div>
                <div className="infos-list__item">
                    <h2 className="infos-list__title">
                        The average American meal emits between 1.9 - 3.4
                        kg CO2e.
                    </h2>
                    <h3 className="infos-list__subtitle">
                        Check out how we
                        calculate our
                        carbon footprint
                    </h3>
                    <a className="infos-list__action btn btn--warning" href="">Carbon Methodology</a>
                </div>
            </section>
        </>
    )
}