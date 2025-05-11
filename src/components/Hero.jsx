import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { TbBrandNetflix } from "react-icons/tb";
import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <>
            <div className="hero-container">
                <div className="content">
                    <h1>Netflix Original</h1>

                    <div className="rating-stars">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                    </div>

                    <div className="btns">
                        <button className='play'><FaPlay /> Play</button>
                        <button className='my-list'><TbBrandNetflix /> My List</button>
                    </div>
                </div>
                <div className="image">
                    <img src={heroImage} alt="" />
                </div>
            </div>
    </>
  )
}

export default Hero