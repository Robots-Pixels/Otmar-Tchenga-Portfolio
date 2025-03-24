import React from 'react'

export default function Home({transform}) {
  return (
    <div className={`relative bg-black w-full h-[200vh] translate-y-[${transform}rem]`}
    style={{transition: "all 0.5s ease"}}>

    </div>
  )
}
