import './Signature.scss'
import MenuBanner from '../../assets/images/menu-banner_farm_highlights.png'
import SignatureImg from '../../assets/images/menu_harvest_bowl_almonds.jpg'

export default function Signature() {
    return (
        <>
            <section className="bowl-signature">
                <div className="bowl-signature__higlight-image">
                    <img src={MenuBanner} alt="" />
                </div>
                <div className="bowl-signature__content">
                    <div className="bowl-signature__content-heading">
                        <h2 className="bowl-signature__title">
                            Harvest Bowl
                        </h2>
                        <a className="bowl-signature_action btn btn--warning" href="">Order now</a>
                    </div>
                    <div className="bowl-signature__content-image">
                        <img src={SignatureImg} alt="bowl Harvest" />
                    </div>
                </div>
            </section>
        </>
    )
}