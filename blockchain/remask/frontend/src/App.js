import styled from 'styled-components';
import { Connect } from './components/Connect';

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`

function App() {
  return (
    <StyledAppDiv>
      <Connect />
    </StyledAppDiv>
  );
}

export default App;
