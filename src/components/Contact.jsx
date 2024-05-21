import React from 'react'

const Contact = () => {
  return (
    <div name='contact'className='bg-[#071807] w-full  h-screen pr-4  pl-4'>
       <p className='text-4xl font-bold  border-b-4 border-[#994d00] text-gray-300 flex justify-center'>Contact</p>
        <form method='POST' action="https://api.getform.io/v1/forms/jbwxkwxa?token=HHx5M6rgndVegzTY6RNs0IBC0j7KAbNvn9R1uIUCNS2Dxdh87Ic82zJxDSTL" className='flex flex-col  max-w-[600px] w-full'>
            <div className='pb-8'>
               
                <p className='text-gray-300 py-4'>Abderrahmane Djihane, [21/05/2024 12:29]
https://www.linkedin.com/in/djihane-abderrahmane-9ab083304

Abderrahmane Djihane, [21/05/2024 14:43]
Submit the form below or shoot me an email - adbderrahmanejihen05@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 max-h-40 ' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#994d00] hover:border-[#994d00] px-4 py-3 my-8 mx-auto flex items-center mb-16'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact