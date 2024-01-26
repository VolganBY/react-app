import logo from '../favicon.ico'
import {useState} from "react";
import {styled} from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

const Header = () => {
   const [now, newTime] = useState(new Date());
   setInterval(() => newTime(new Date()), 1000)
    return(
        <HeaderContainer>
            <img src={logo} alt={'Volgan-logo'}/>
            {<h3>Volgan App</h3>}

            <div>Время сейчас: {now.toLocaleTimeString()}</div>
        </HeaderContainer>
    )
}
export default  Header;
