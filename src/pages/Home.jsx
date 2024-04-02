import { Hero } from "../components/Hero"
import { Mission } from "../components/Mission"
import { Composition } from "../components/Composition"
import { WWD } from "../components/WWD"
import { FAQ } from "../components/FAQ"
export const Home = () => {

    return (
        <section className="mt-8 h-full">
            <Hero />
            <Mission />
            <Composition />
            <WWD />
            <FAQ/>

        </section>
    )
}
