import { useState } from "react";
import Sample from "./Sample";
import React from "react";
import App from "../App";
type resultProp={
    num:number;
}
export default function Result({num}:resultProp){
    return(
       
        <div>
            
            <div className="bg-[#e2e2e2] text-[#272781] text-xl p-5">{num}</div>
            {/* <Sample ad={""} su={}/> */}
            
        </div>
    )
}