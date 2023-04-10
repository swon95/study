import { Web3Provider } from '@ethersproject/providers'

export function getProvider(provider) {
    const Web3Provider = new Web3Provider(provider)
    Web3Provider.pollingInterval = 1000
    return Web3Provider
}