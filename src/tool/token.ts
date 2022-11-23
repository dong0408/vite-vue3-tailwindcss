import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const TokenKeyOriginal = 'Original-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token:string) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getTokenOriginal() {
    return Cookies.get(TokenKeyOriginal)
}

export function setTokenOriginal(token:string) {
    return Cookies.set(TokenKeyOriginal, token)
}

export function removeTokenOriginal() {
    return Cookies.remove(TokenKeyOriginal)
}
