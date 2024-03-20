import { useState } from "react";
import Result from "./Result";
type SamProps={
    number: number,
    add: () => void,
    sub: () => void;
}
const Sample: React.FC<SamProps> = ({ number, add, sub }) => {
// export default function Sample({ number, add, sub }){
    // const [number,setNumber]=useState(0)
  
    return(
        <div>
            <div className="bg-[#e2e2e2] text-[#272781] text-xl p-5">{number}</div>
            <div>
                <button onClick={add} className="bg-red-600 p-4 m-11 text-white text-lg">add</button>
                <button onClick={sub} className="bg-green-600 p-4 m-11 text-white text-lg">sub</button>
            </div>
        </div>
    )
}
export default Sample;
// const [data,setData]=useState<string[]>(["hai.."])