import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const [msg, setMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yzefnh9', 'template_ax1rnt8', form.current, {
        publicKey: 'J1hrIP4b5aR9ncADB',
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
    <div id="contact" className="m-4 flex justify-center items-center min-h-screen">
      <div className="bg-yellow-50 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl text-[#333] font-extrabold text-center mb-6">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="from_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="from_email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows="4"
              placeholder="Enter your message"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-pink-950 text-white py-2 px-4 rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </form>
        {msg && <p className="text-center text-sm mt-4 text-gray-600">{msg}</p>}
      </div>
    </div>
  );
}
