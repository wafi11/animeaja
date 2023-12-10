"use client"
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import YouTube from "react-youtube"
import {FaYoutube} from 'react-icons/fa'

const VideoPlayer = ({youtubeId}) => {
    const [open,setOpen] = useState(true)
    const handleVideoPlayer = () => {
        setOpen((prevClose) => !prevClose)
    }

    const option =  {
        weight : "250",
        height : "300"
    }
    const ShowVideoPlayer = () => {
        return(
            <div className="fixed bottom-2 right-2">
            <button className="float-right " onClick={handleVideoPlayer}>
                <IoCloseOutline size={32} />
            </button>
            <YouTube 
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}/>
        </div>
        )
    }
    const ButtonHandler = () => {
        return (
            <button className="fixed bottom-5 right-5 flex justify-center items-center gap-2 text-color-accent
                bg-color-primary px-2 rounded-md" 
                onClick={handleVideoPlayer}>
            Tonton Trailer<FaYoutube size={32}/>
            </button>
        )
    }
    return open ? <ShowVideoPlayer /> : <ButtonHandler />
}

export default VideoPlayer