import WayToTeach from "./WayToTeach";
import {ways} from "../data";

const TeachingSection = () => {
    return (
        <section>
            <h3>Наш подход к обуению</h3>
            <ul>
                {ways.map((way) => {
                    return <WayToTeach key={way.title} {...way}/>
                })}
            </ul>
        </section>
    )
}

export default TeachingSection;