import './Main.scss'
import Hero from '../Hero/Hero.jsx'
import List from '../List/List.jsx'
import ListContainer from '../ListContainer/ListContainer.jsx'
import Signature from '../Signature/Signature.jsx'
import Newsletter from '../Newsletter/Newsletter.jsx'


export default function Main() {
    return (
        <>
            <main>
                <Hero />
                <List />
                <ListContainer />
                <Signature />
                <Newsletter />
            </main>
        </>
    )
}