"use client"
import Image from "next/image";
import { Practice } from "@/components/practice";
import { Fun } from "@/components/practice1";
import {useAtom } from "jotai";
import { counterAtom } from "./store/store";
import { Counter } from "@/components/Counter/Counter";
import { DoubleCounter } from "@/components/Counter/DoubleCounter";
import { Users } from "@/components/UserInfo/userinfo";



export default function Home() {
  const [count] = useAtom(counterAtom);
  return (
    <div>
      <Practice></Practice>
      <Fun></Fun>
      <select>
        <option value="option1" >Option 1</option>
        <option value="option2" >Option 2</option>
      </select>

      <button>Click me</button>
      <hr></hr>
      <div className="flex justify-center" >
        <div className="bg-slate-500 p-8 text-center rounded-[10px]">          
          <h1 className="text-[18px] p-2">Count : {count}</h1>
          <Counter></Counter>          
        </div>

        <DoubleCounter></DoubleCounter>

      </div>

      <hr></hr>

      <Users></Users>


    </div>
  );
}
