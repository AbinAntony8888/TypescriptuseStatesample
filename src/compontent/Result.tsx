import { useState } from "react";
import Sample from "./Sample";

export default function Result(){
    const [number,setNumber]=useState(0)
      const add=()=>{
        setNumber(number+1)  
     }
        const sub=()=>{
         setNumber(number-1)
        }      
  
    return(
       
        <div>
       <Sample number={number} add={add} sub={sub} />
        </div>
    )
}