"use client"
import React from 'react'
import { loadableAsyncData } from '@/app/store/store'
import { useAtom } from 'jotai'




export const Users = () => {

    const [users] = useAtom(loadableAsyncData)

    
    

    if(users.state === "hasError") return <h1 className='text-red-400' >Error in fetching data</h1>

    if(users.state === "loading") return <h1>Loading....</h1>
  return (
    <div className='flex justify-center' >

      <div className='w-[36%] p-2 text-center' >
        <h1>User Information</h1>

        {users.data.map((item : {name:string,email:string} ,index : number)=>(
          <div key={index} className='bg-gray-300 p-2 rounded-[10px] text-wrap w-full mb-[2px]'>
            <h1>user :- {item.name}</h1>
            <h1 className="" >email :- {item.email}</h1>
            <hr className=''></hr>
          </div>
        ))}

      </div>
    </div>
  )
}


