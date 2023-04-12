import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: blue;
    cursor: pointer;
`

export function SignMessage() {

    const { account, active, library } = useWeb3React()
    
    const handleSignMessage = (event) => {
        event.preventDefault()
    
        // library 나 accout 가 없는 경우 
        if (!library || !account) {
            window.alert('지갑이 연결되지 않았습니다.')
            return
        }
        
        async function signMessage() {
            try {
                const signature = await library.getSigner(account).signMessage('Hello fastcampus !!')
                window.alert(`Sucsses ${signature}`)
            } catch (error) {
                console.log(error)
            }
        }
        signMessage()
    }

    return(
        // active 가 false 인 경우 true
        <StyledButton disabled={!active ? true : false} 
        style={{ 
            borderColor: !active ? 'unset' : 'blue' 
        }} 
        onClick={handleSignMessage}>Sign Message</StyledButton>
    )
}