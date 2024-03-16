import { useState } from "react";

export default function Sample(){
    const [number,setNumber]=useState(0)
    const [data,setData]=useState<string[]>(["hai.."])
    
    const add=()=>{
       setNumber(number+1)  
    }
       const sub=()=>{
        setNumber(number-1)
       }      
    return(
        <div>
            <div>{number}</div>
            <div>
                <button onClick={add} className="bg-red-600 p-4 m-11 text-white text-lg">add</button>
                <button onClick={sub} className="bg-green-600 p-4 m-11 text-white text-lg">sub</button>
            </div>
        </div>
    )
}