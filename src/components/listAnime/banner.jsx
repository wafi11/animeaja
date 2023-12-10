"use client"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

const Banner = ({ID}) => {
   
    return (
        <div className="max-w-[1400px] h-[600px] w-full m-auto relative group bg-color-dark">
            <div style={{backgroundImage : `url(${ID})`}}
                className="w-full h-full bg-center rounded-sm bg-cover ">
            </div>
            <div className="absolute group-hover:block top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-color-primary cursor-pointer">
                <ArrowLeft size={32} />
            </div>
            <div className="absolute group-hover:block top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-color-primary cursor-pointer">
                <ArrowRight size={32} />
            </div>
        </div>
    )   
}
 export default Banner