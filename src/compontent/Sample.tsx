import { useState } from "react";
import Result from "./Result";
import App from "../App";
import React from "react";
type sampleProp={
    add:()=>void,
    sub:()=>void;
}
// function Sample () {
export default function Sample({add,sub}:sampleProp){
   
  
    return(
        <div>
            <div>
                <button onClick={add} className="bg-red-600 p-4 m-11 text-white text-lg">add</button>
                <button onClick={sub} className="bg-green-600 p-4 m-11 text-white text-lg">sub</button>
            </div>
        </div>
        
    )
}
// const [data,setData]=useState<string[]>(["hai.."])