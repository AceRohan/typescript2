"use client"
import React from 'react'

type point = {
  x:number;
  y:number;
}

type User = {
  name:string;
  email:string;
  isActive:boolean;
}


export const Fun = () => {

  // let greeting:string = "Hello World"

  // let mynum = 6;
 function addTwo(num:number) : number{
  return num+2
 }

 const coordinate = (pt : point):string=>{
  return `${pt.x} ${pt.y}`
 }

//  const getValue = (myVal:number) =>{
//   if(myVal > 5){
//     return true
//   }

//   return "200 OK"
//  }

const heros = ["thor","spiderman","ironman"] 
  

  return (
    <div className='bg-gray-600 h-[100vh] text-white p-2'>
      {/* <h1>Having Fun</h1> */}
      {/* {greeting} */}
      {coordinate({x:3,y:4})}
    </div>
  )
}

