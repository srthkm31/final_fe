import {atom } from 'jotai'

export const loaderAtom1=atom(false)

export const analyzedAtom=atom({})

export const processedAtom=atom('')

export const chatHistory=atom([])

export const chartData=atom({})


export const currentId=atom('')// this is the unique id to query in for the redis

export const graphLoading=atom(false)


