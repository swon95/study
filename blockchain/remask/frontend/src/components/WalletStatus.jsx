import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import styled from "styled-components";

const StyledWalletStatusDiv = styled.div`
    display: flex;
    gap: 20px;
`;

function ChainId() {
    const { chainId } = useWeb3React();

    return (
        <>
            <span>Chain Id :</span>
            <span>{chainId}</span>
        </>
    );
}

function BlockNumber() {
    const { chainId, library } = useWeb3React();
    const [ blockNumber, setBlockNumber ] = useState(); // 변하는 값

    useEffect(() => {
        if (!library) return; // library 가 없는경우 return

        let stale = false;
        async function getBlockNumber() {
            try {
                // blockNumber 참조
                const blockNumber = await library.getBlockNumber(); // promise func
                if (!stale) {
                    // false 일 경우에만 blockNumber 갱신 == clear func
                    setBlockNumber(blockNumber);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getBlockNumber();

        // library 자체 이벤트 핸들러
        library.on("block", setBlockNumber); // block 이벤트를 받을 경우 setBlockNumber 호출

        // clear func
        return () => {
            stale = true;
            library.removeListener('block', setBlockNumber);
            setBlockNumber(undefined);
        }
    }, [library, chainId]); // 종속변수가 변경될때마다 함수 실행

    return (
        <>
            <span>Block Number :</span>
            <span>{blockNumber}</span>
        </>
    );
}

function Account() {
    const { account } = useWeb3React();
    return (
        <>
            <span>Account :</span>
            {/* account 의 길이 축소 */}
            {/* 인덱스 0 부터 6 까지, 뒤에서 -4 까지 */}
            {/* account 가 없을 경우 빈 문자열 */}
            <span>
                {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ""}</span>
        </>
    );
}

function Balance() {
    const { account, library, chainId } = useWeb3React();
    const [ balance, setBalance ] = useState();

    let stale = false;

    useEffect(() => {
        if (typeof account === "undefined" || account == null || !library) {
            return;
        }

        async function getBalance() {
            try {
                const balance = await library.getBalance(account);
                if (!stale) {
                    setBalance(balance);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getBalance();

        library.on("block", getBalance);

        return () => {
            stale = true;
            library.removeListner("block", getBalance);
            setBalance(undefined);
        };
    }, [account, library, chainId])

    return (
        <>
            <span>Balance :</span>
            {/* balance 단위를 ETH 단위로 변환 */}
            <span>
                {balance ? `${ethers.utils.formatEther(balance)} ETH` : ""}
            </span>
        </>
    );
}

function NextNonce() {
    const { account, library, chainId } = useWeb3React();
    const [nextNance, setNextNance] = useState();

    useEffect(() => {
        if (typeof account === "undefined" || account == null || !library) {
            return;
        }

        let stale = false;

        async function getNextNonce() {
            try {
                const nextNonce = await library.getTransactionCount(account);
                if (!stale) {
                    setNextNance(nextNonce)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getNextNonce();

        library.on("block", getNextNonce); // block 이벤트를 받을 경우 getNextNonce

        // clean func
        return () => {
            stale = true;
            setNextNance(undefined);
        };
    });

    return (
        <>
            <span>NextNonce :</span>
            <span>{nextNance ? nextNance : ""}</span>
        </>
    );
}

export function WalletStatus() {
    return (
        <>
            <StyledWalletStatusDiv>
                <ChainId />
                <BlockNumber />
                <Account />
                <Balance />
                <NextNonce />
            </StyledWalletStatusDiv>
        </>
    );
}
