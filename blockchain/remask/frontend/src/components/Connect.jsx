import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { useState } from 'react'
import { injected } from '../utils/connectors'
import { useInActviveListner, useWeb3Connect } from '../utils/hooks'
import styled from 'styled-components'
import {
    NoEthereumProviderError,
    UserRejectedRequestError
} from '@web3-react/injected-connector'

const StyledActivateButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: green;
    cursor: pointer;
`

const StyledDeactivateButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: red;
    cursor: pointer;
`


const Activate = () => {
    const context = useWeb3React()
    const { activate, active } = context
    const [ activating, setActivating ] = useState(false)
    
    const handleActivate = (event) => {
        event.preventDefault()

        async function _activate() {
            setActivating(true)
            await activate()
            setActivating(false)
        }
        _activate(injected)
    }

    const eagerConnectionSuccessful = useWeb3Connect()
        useInActviveListner(!eagerConnectionSuccessful)
    return (
        <StyledActivateButton disabled={active} 
            style={{
                borderColor: activating ? 'orange' : active ? 'unset' : 'green'
            }}
        onChange={handleActivate}>Connect</StyledActivateButton>
    )
}

const Deactivate = () => {
    const context = useWeb3React()
    const { deactivate, active } = context

    const handleDeactivate = (event) => {
        event.preventDefault()

        deactivate()
    }

    return (
        <StyledDeactivateButton disabled={!active} 
            style={{
                borderColor: active ? 'red' : 'unset'
            }}
        onClick={handleDeactivate}>Disconnect</StyledDeactivateButton>
    )
}

// 외부에서 가져오기
function getErrorMessage(error) {
    let errorMessage

    switch (error.constructor) {
        case NoEthereumProviderError:
            errorMessage = `No Ethereum browser extension detected. please install MetMask extension.`            
            break;
        case UnsupportedChainIdError:
            errorMessage = `you're connected to un unsupported network.`
            break;
        case UserRejectedRequestError:
            errorMessage = `Please authorize this website to access your Ethereum account.`
            break;
        dafault:
            errorMessage = error.message
    }
    return errorMessage
}

export function Connect() {
    // react-dom 이 들어갈 자리
    const {error} = useWeb3React()

    // 에러가 존재할 경우
    if ( error ) {
        window.alert(getErrorMessage(error))
    }
    return (
        <>
            <Activate />
            <Deactivate />
        </>
    )
}