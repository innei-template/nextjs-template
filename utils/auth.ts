/*
 * @Author: Innei
 * @Date: 2021-01-10 19:14:51
 * @LastEditTime: 2021-01-10 19:16:50
 * @LastEditors: Innei
 * @FilePath: /next-template/utils/auth.ts
 * @Mark: Coding with Love
 */
import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken(): string | null {
  return Cookies.get(TokenKey)
    ? JSON.parse(Cookies.get(TokenKey) as string)
    : null
}

export function setToken(token: string, expires: number | Date) {
  if (!token) {
    return
  }
  return Cookies.set(TokenKey, JSON.stringify(token), { expires })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
