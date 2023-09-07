import styled from '@emotion/styled'
import Card from './components/Card'

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
`

const PlusCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  border: solid 1px #707070;
  width: 80px;
  height: 80px;
  padding-bottom: 8px;
  box-sizing: border-box;
`

function App() {

  return (
    <CardContainer>
        <Card title='asd'/>
        <Card title='asd'/>
        <Card title='asd'/>
        <Card title='asd'/>
        <PlusCard>+</PlusCard>
    </CardContainer>
  )
}

export default App
