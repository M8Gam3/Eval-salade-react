import './Newsletter.scss'


export default function Newsletter() {
    return (
        <>
            <section>
                <div className="newsletter">
                    <h2 className="newsletter__title">Join Our Newsletter</h2>
                    <p className="newsletter__text">
                        Sign up for exclusive promos, new menu drops, store openings,
                        and more.
                    </p>
                    <div className="newsletter__form-group">
                        <input className="newsletter__form-field" type="email" placeholder="email" />
                        <input type="submit" value="Envoyer" className="btn btn--warning" />
                    </div>
                </div>
            </section>
        </>
    )
}