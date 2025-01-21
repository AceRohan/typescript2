import { doubleCounterAtom } from '@/app/store/store';
import { useAtom } from 'jotai'
import React from 'react'

export const DoubleCounter = () => {
   const [doubleCount] = useAtom(doubleCounterAtom)
  return (
    <div>
      <h1>{doubleCount}</h1>
    </div>
  )
}


