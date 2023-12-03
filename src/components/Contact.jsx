//import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1080px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl ont-bold text-[#001b5e] text-center'>Contact</h1>
        <form action="https://getform.io/f/d4bf90b3-3dcc-450f-8ad2-f30b71d42f9f" method='POST' encType='multipart/form-data'>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name='name' />
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name='phone' />
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" htmlFor="email">Email</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name='email' />
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" htmlFor="subject">Subject</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name='subject' />
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" htmlFor="name">Message</label>
                <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10' name='message'></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">Send Message</button>
        </form>
    </div>
  )
}

export default Contact