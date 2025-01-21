import { atom } from "jotai";
import {loadable} from "jotai/utils"
export const counterAtom = atom(0);

export const doubleCounterAtom = atom((get)=>get(counterAtom)*2)

// const asyncData = atom(async ()=>{
//     const response= await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = response.json()
//     return data;
// })

// export const loadableAsyncData = loadable(asyncData);

const asyncData = atom(async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();
    return data;
})

export const loadableAsyncData = loadable(asyncData);