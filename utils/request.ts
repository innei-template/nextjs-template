/*
 * @Author: Innei
 * @Date: 2020-05-07 16:04:24
 * @LastEditTime: 2021-01-10 19:16:39
 * @LastEditors: Innei
 * @FilePath: /next-template/utils/request.ts
 * @MIT
 */

import axios, { AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { getToken } from './auth'
const service = axios.create({
  baseURL: process.env.APIURL || '/api',
  // withCredentials: true,
  timeout: 10000,
})

service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = 'bearer ' + getToken()
    }

    return config
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(error.message)
    }

    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    return camelcaseKeys(res, { deep: true })
  },
  (error: AxiosError<Record<string, any> | undefined>) => {
    return Promise.reject(error)
  },
)

export default service
