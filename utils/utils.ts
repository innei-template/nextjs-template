/*
 * @Author: Innei
 * @Date: 2020-06-20 20:51:31
 * @LastEditTime: 2021-01-10 19:15:43
 * @LastEditors: Innei
 * @FilePath: /next-template/utils/utils.ts
 * @Coding with Love
 */

export const isClientSide = typeof window !== 'undefined'
export const isServerSide = !isClientSide
export const isDev = process.env.NODE_ENV === 'development'
