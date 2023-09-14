import styled from '@emotion/styled'

const Button = styled.button`
    width: 148px;
    height: 48px;
    background-color: #2699FB;
    border-radius: 4px;
    border: none;
    font-size: 12px;
    color: white;
    
    // & 는 자기 자신을 지칭
    &:hover {
        background-color: #258bff;
    }
`

export default Button