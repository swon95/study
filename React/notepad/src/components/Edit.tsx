import styled from '@emotion/styled'

const TitleInput = styled.input`
    
`

const ContentInput = styled.textarea`
    
`

const EditContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    
`

const Edit = () => {
    return (
        <EditContainer>
            <h3>뒤로가기</h3>
            <TitleInput />
            <ContentInput />
        </EditContainer>
    )
}

export default Edit