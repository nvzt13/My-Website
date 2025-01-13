import React from 'react'

const SkyBackground = () => {
  return (
    <div>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="sky"
          src="/sky.webm/"
        />
    </div>
  )
}

export default SkyBackground