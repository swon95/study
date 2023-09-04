import { useEffect, useState } from 'react';
import Web3 from 'web3';

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      // MetaMask 연결
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          // 계정 접근을 사용자에게 요청
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccounts(accounts);
          setWeb3(web3Instance);
        } catch (error) {
          console.error("User denied account access");
        }
      }
      // Legacy dapp browsers
      else if (window.web3) {
        setWeb3(new Web3(window.web3.currentProvider));
      }
      // Non-dapp browsers
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };

    init();
  }, []);

  return { web3, accounts };
};