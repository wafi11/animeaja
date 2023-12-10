"use client"
import { NoteBlank } from "@phosphor-icons/react"
import Link from "next/link"


const Page = () => {
  return (
    <div className="min-h-screen justify-center items-center max-w-xl mx-auto flex">
        <div className="flex justify-center items-center flex-col gap-4 ">
            <NoteBlank size={32} className="text-color-accent"/>
            <h3 className="text-color-accent text-4xl font-bold">Not Found</h3>
            <Link href='/' className="text-color-primary underline hover:text-color-accent" >Kembali</Link>
        </div>
    </div>
  )
}

export default Page