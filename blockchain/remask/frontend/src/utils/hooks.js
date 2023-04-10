// 여러 컴포넌트에서 사용할수 있는 유틸리티함수
import { useWeb3Connect } from "@web3-react/core";
import { injected } from "./connectors";
import { useState, useEffect, useCallback } from "react";

export function useWeb3Connect() {
    const { activate, active } = useWeb3React(); // activate == 함수 , active == 변수
    const [tride, setTride] = useState(false); // 시도의 유무를 파악하기 위한 state

    // injected 를 이용하여 활성화가 되어있는지에 대한 유무를 확인하는 함수
    // 메모리를 효율적으로 사용하기 위해 useCallback 사용
    const tryActivate = useCallback(() => {
        async function _tryActivate() {
            const isAuthorized = await injected.isAuthorized();

            if (isAuthorized) {
                try {
                    await activate(injected, undefined, true);
                } catch (error) {
                    window.alert("Error :" + (error && error.message));
                }
            }
            setTride(true);
        }
        _tryActivate();
    }, [activate]);

    useEffect(() => {
        tryActivate();
    }, [tryActivate]);

    useEffect(() => {
        if (!tride && active) {
            setTride(true);
        }
    }, [tride, active]);
    return tride;
}


// new Hooks
// ethereum 라이브러리를 가져와 현재 상태에 따라 체인의 변화를 감지하여 리액트와 연동하는 함수
export function useInActviveListner(suppress = false) {
    // ex) 메타마스크에 이더리움 라이브러리가 감지될 경우 리액트에 해당 Hooks 를 통해 연결
    const { active, error, activate } = useWeb3React()

    // useInActiveListner Hooks 가 마운트 될때마다 실행
    // suppress 가 변화함에 따라 useEffect 내부 함수 실행
    useEffect(() => {
        const { ethereum } = window

        if ( ethereum && ethereum.on && !active && !error && !suppress){
            
            // 3 가지 핸들러를 통해 activate 연결을 감지
            const handleConnect = () => {
                console.log('handle connect')
                activate(injected)
            }
            const handleChanged = (chainId) => {
                console.log('handleChainChanged', chainId)
                activate(injected)
            }
            const handleAccountsChanged = (account) => {
                console.log('handleAccountsChanged', account)
                // account 가 0 보다 클 경우에만 injected activate
                if (account.length > 0) {
                    activate(injected)
                }
            }

            ethereum.on('connect', handleConnect)
            ethereum.on('chainChanged', handleChanged) // chain 이 변경되었을 경우
            ethereum.on('accountsChanged', handleAccountsChanged) // account 가 변경되었을 경우
            
            // clean-up function
            return () => {
                if (ethereum.removeListner) { // ethereum 에 removeListner 가 있을 경우 
                    ethereum.removeListner('connect', handleConnect) // 연결
                    ethereum.removeListner('chainChanged', handleChanged)
                    ethereum.removeListner('AccountsChanged', handleAccountsChanged)
                }
            }
        }
    }, [active, error, suppress, activate]) // 종속변수
}