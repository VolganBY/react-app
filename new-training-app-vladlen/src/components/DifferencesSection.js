import Button from "./Button/Button";
import {differences} from "../data";
import {useState} from "react";

const DifferencesSection = () => {
    const [contentType, setContentType] = useState(null);
    const handleClick = (type) => {
        setContentType(type)
    }
    return (
        <section>
            <h3>
                Чем мы отличаемся от других
            </h3>
            <Button
                isActive={contentType === 'way'}
                buttonClicked={() => handleClick('way')}>Подход</Button>
            <Button
                isActive={contentType === 'easy'}
                buttonClicked={() => handleClick('easy')}>Доступность</Button>
            <Button
                isActive={contentType === 'program'}
                buttonClicked={() => handleClick('program')}>Концентрация</Button>

            {!contentType && <p>Нажми на кнопку</p>}

            {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}

export default DifferencesSection;