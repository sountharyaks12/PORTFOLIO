import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'

export default function Contact() {
  const form = useRef();
  const [msg, setMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fgtno8g', 'template_sa04pth', form.current, {
      publicKey: 'bCzj7164HmBrsnbSH',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          setMsg('Message Sent Successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMsg('Failed to send');
        },
      );
  };

  return (
    <div id="contact" className="m-4 mx-0 flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white p-8  w-full">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: [-150, 30, 0] }}
          transition={{ duration: 1 }}
          className="text-2xl text-[#333] font-extrabold text-center mb-6">
          Contact Me
        </motion.h2>

        <div className='flex lg:flex-row xs:flex-col'>
          <div
            className='flex justify-center items-center lg:ml-40 '>
            <motion.img initial={{ opacity: 1, rotate: 20, }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 300, damping: 10 }}
              whileInView={{ opacity: 1, rotate: 360 }}
              src="contactMe.png" className=' lg:scale-150 xs:scale-100' alt="contact me image" />
          </div>
          <div className='flex items-center w-full '>
            <form ref={form} onSubmit={sendEmail} className=" space-y-4  lg:px-20 py-10 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="mt-1 block w-full focus:outline-none border-2 border-gray-600 p-2 rounded-lg sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="from_email"
                  className="mt-1 block w-full focus:outline-none  border-2 border-gray-600 p-2 rounded-lg sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="mt-1 block w-full focus:outline-none border-2 border-gray-600 p-2 rounded-lg sm:text-sm"
                  rows="4"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div>
                <button 
                  type="submit"
                  className="w-full bg-pink-950 focus:outline-none text-white py-2 px-4 rounded-md shadow "
                >
                  <input type="submit" value="Send" />
                  
                </button>
                <div>
                  {msg && <p className="text-center text-sm mt-4 text-gray-600">{msg}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
