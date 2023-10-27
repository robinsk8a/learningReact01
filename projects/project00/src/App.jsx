import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    const someMan = {initialIsFollowing : true, userProfile: 'guillelaserna'}

    return(
        <section className='App'>
            <TwitterFollowCard userProfile='conradoelhonrado' initialIsFollowing>
                Conrad Benitez </TwitterFollowCard>
            {/* If is undefined you can use children as class bur is recomended to use the format shown above this comment */}
            <TwitterFollowCard children='Amante Quijones Salagado' userProfile='amantesalgado' initialIsFollowing={false} />
            <TwitterFollowCard userProfile='strong_beard123' initialIsFollowing={true}>
                <i>Beardnard Strongman</i>
            </TwitterFollowCard>
            {/* We can pass objects as props usig {...propName} inside the componet tag but is recomended not to use it that much */}
            <TwitterFollowCard {...someMan}>
                Guillermo Laserna Cuentas
            </TwitterFollowCard>
        </section>
    )
    
}