import Button from "./Button/Button";

const TabsSection = ({active, onChange}) => {
    return (
       <section style={{marginBottom: '1rem'}}>
            <Button
                isActive={active === 'main'}
                buttonClicked={() => onChange('main')}
            >
                Главная
            </Button>
            <Button
                isActive={active === 'feedback'}
                buttonClicked={() => onChange('feedback')}
            >
                Обратная связь
            </Button>
       </section>

    )
}

export default TabsSection;
