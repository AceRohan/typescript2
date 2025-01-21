import { counterAtom } from '@/app/store/store';
import { useAtom } from 'jotai'
import React from 'react'

export const Counter = () => {
    const [_,setCount] = useAtom(counterAtom);
  return (
    <div>
      <button onClick={()=>setCount((prev)=>prev+1)} className="border-2 border-black bg-blue-500 text-white font-bold p-2 rounded-[10px]" >Increment</button>
      <button className="border-2 border-black bg-blue-500 text-white font-bold p-2 rounded-[10px]" onClick={()=>setCount((prev)=>prev==0?0:prev-1)} >Decrement</button>
    </div>
  )
}


