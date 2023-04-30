import styled from "styled-components";
import bg from "./img/saving-money.png"
import {MainLayout} from "./styles/Layouts"
import FloatingStyled from "./Components/Floater/Floating"


function App() {
  return (
    <AppStyled bg = {bg} className="App">
      <FloatingStyled></FloatingStyled>
      <MainLayout>
        Hello Dominus!
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`

export default App;
