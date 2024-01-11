import { HiHome,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import pixar from "../assets/images/pixar.png";
import marvel from "../assets/images/marvel.png";
import starwar from "../assets/images/starwar.png";
import nationalImages from "../assets/images/nationalG.png";
import disney from "@/assets/images/disney.png";
// import pixarV from "@/assets/videos/pixar.mp4";
// import marvelV from "@/assets/videos/marvel.mp4";
// import starwarV from "@/assets/videos/star-wars.mp4";
// import nationalVideos from "@/assets/videos/national-geographic.mp4";
// import disneyV from "@/Assets/videos/disney.mp4";
export const dataNav = [
    {
        name : "HOME",
        icon : HiHome,
        href : "/"
    },
    {
        name : "TRENDING",
        icon : HiStar,
        href : "topManga"
    },
    {
        name : "MOVIES",
        icon : HiPlayCircle,
        href : 'modal'
    },
]

export const dataProductionHouse = [
    {
        id :1,
        images : pixar,
        // videos : pixarV
    },
    {
        id :2,
        images : marvel,
        // videos : marvelV
    },
    {
        id :3,
        images : starwar,
        // videos : starwarV
    },
    {
        id :4,
        images : nationalImages,
        // videos : nationalVideos
    },
    {
        id :5,
        images : disney,
        // videos : disneyV
    },
]