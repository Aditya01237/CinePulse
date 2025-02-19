import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-full  aspect-video py-[20%] px-24 bg-gradient-to-r from-black/50 text-white ">
        <h1 className="animate-fade-up animate-once animate-ease-in text-6xl font-semibold ">{title}</h1>
        <p className="animate-fade-up animate-once animate-ease-in py-6 text-lg w-1/4  ">{overview}</p>
        <div className="space-x-4">
            <button className="p-4 px-12 text-xl font-semibold  text-black bg-white hover:opacity-80 rounded-md">
              ▶ Play
            </button>
            <button className="p-4 px-12 text-xl text-white font-semibold bg-white bg-opacity-10 hover:bg-opacity-30 rounded-md">
                More Info
              </button>
          </div>
    </div>
  )
}

export default VideoTitle