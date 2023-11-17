import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen bg-black'>
        <Image src={'/Asset 5.png'} width={1108/2} height={588/2} alt='LOGO' />
    </div>
  )
}

export default Loading