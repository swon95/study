import styled from '@emotion/styled'
import Button from './Button'

const TitleInput = styled.input`
    
`

const ContentInput = styled.textarea`
    height: 360px;
`

const EditContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
`
const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
    cursor: pointer;
`

// props 를 넘겨주기 위해 선언
interface EditProps {
    setMode: (mode: 'edit' | 'view') => void
}

const Edit = ({setMode} : EditProps) => {
    return (
        <EditContainer>
            <TitleInput />
            <ContentInput />
            
            <ButtonContainer>
                <Button onClick={() => setMode('view')}>뒤로가기</Button>
                <Button>저장</Button>
            </ButtonContainer>
        
        </EditContainer>
    )
}

export default Edit