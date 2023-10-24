import './List.scss'
import data from '../../assets/data/cards.json'
export default function List() {

    return (
        <>
            <section className="menu-list">
                <div className="container">
                    <header className="menu-list__title">
                        <h2>
                            Salads
                        </h2>
                    </header>
                    {/* <!-- Menu  --> */}
                    <div className="menu-list__items">
                    {
                        data.map((element, key) => 
                            <>
                                {/* <!-- Menu Item --> */}
                                <div className="menu-list__item" key={key}>
                                    <div className="menu-list__item-picture">
                                        <img src={'../../../public/' + element.img} alt="The Reneé Rapp Bowl" />
                                    </div>
                                    <div className="menu-list__item-content">
                                        <div className="menu-list__item-title">
                                            <h2>
                                                {element.name}
                                            </h2>
                                        </div>
                                        <div className="menu-list__item-details">
                                            <p className="small">
                                                {element.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    </div>
                </div>
            </section>
        </>
    )
}