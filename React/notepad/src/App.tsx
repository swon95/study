import styled from '@emotion/styled'
import Card from './components/Card'
import { useState } from 'react'
import Edit from './components/Edit'

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
  cursor: pointer;
  margin: 80px;
`

function App() {
  
  const [mode, setMode] = useState<'edit' | 'view'>('view')

  return (
    <>
      {
        // mode 가 view 일 때만 보이게
        mode === 'view' && 
          <CardContainer>
              <Card title='asd'/>
              <Card title='asd'/>
              <Card title='asd'/>
              <Card title='asd'/>
              <PlusCard onClick={() => setMode('edit')}>+</PlusCard>
          </CardContainer>
      }
      {
        // mode 가 edit 일 때만 보이게
        mode === 'edit' &&
          <Edit />
      }
    </>
  )
}

export default App
