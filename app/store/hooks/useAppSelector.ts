'use client'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppStore } from '../index'

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector
