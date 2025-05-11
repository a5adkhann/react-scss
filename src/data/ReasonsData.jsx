import { FaTv } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

const reasonsData = [
    {
        id: 1,
        title: "Enjoy on your TV",
        detail: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        symbol: <FaTv />
    },
    {
        id: 2,
        title: "Download your shows to watch offline",
        detail: "Save your favorites easily and always have something to watch.",
        symbol: <FaArrowDown />
    },
    {
        id: 3,
        title: "Watch everywhere",
        detail: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        symbol: <FaPencilAlt />
    },
    {
        id: 4,
        title: "Create profiles for kids",
        detail: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
        symbol: <BsEmojiSmileUpsideDown />
    }
]

export default reasonsData;