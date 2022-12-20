import storage from './storage'
import { AccessToken } from '../config'

const TokenKey = AccessToken

export { TokenKey }

export function getToken() {
    return storage.local.get(TokenKey)
}

export function setToken(token) {
    return storage.local.set(TokenKey, token)
}

export function removeToken() {
    return storage.local.remove(TokenKey)
}
