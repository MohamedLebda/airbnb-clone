import hero from "../assets/hero.png"

export default function Hero(){
    return <section className="hero">
        <div className="hero-img">
            <img src={hero} alt="heros-img" />
        </div>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </section>
}