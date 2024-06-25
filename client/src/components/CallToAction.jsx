import { Button } from 'flowbite-react'
import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more about javascript</h2>
        <p className='text-gray-500 my-2'>Checkout these resources with 100 javascript projects</p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'><a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>100 Javascript Projects</a></Button>
      </div>
      <div className='p-7 flex-2'>
        <img src="https://th.bing.com/th/id/OIP.Eot39zakKPsyCm0cc0li3AAAAA?w=384&h=216&rs=1&pid=ImgDetMain.jpg" alt="" />
      </div>
    </div>
  )
}

export default CallToAction
