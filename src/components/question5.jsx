import React from 'react';
// import './App.css';
import EmojiPicker from 'emoji-picker-react';

const Question5 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 ml-40 mr-40">
        {/* Progress bar */}
        <div className="w-full mb-6">
          <div className="bg-blue-400 h-1 rounded-full relative">
            <div className="bg-blue-600 h-full rounded-full absolute left-0" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center font-bold text-xl"> {/* Increase size by adding text-3xl class */}
          You're On Your Way!
        </div>

        <div className="flex">
          <img src='./src/assets/dance.png' className='h-56 mt-10 ml-24' alt="dance-icon" />
          <div className='text-center mt-2 text-xs'></div>

          <div className="ml-28 mt-8 font-normal px-2 py-3 border mr-8 text-justify text-xs">
            {/* Add five stars */}
            <div className="flex w-3">
              <span className="text-yellow-500 text-2xl">★★★★★</span> {/* Increase size by adding text-2xl class */}
            </div>
            {/* Testimonial text */}
            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."
            <div className="flex justify-between items-end">
              <span className='mt-10'>-Jacob S.</span>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-center justify-center mt-4'>
        <a href='/loading_page'>  <button type='submit' className='bg-black text-white hover:bg-purple-800 font-bold py-2 px-4 mt-3 rounded items-center text-sm'>Continue</button> </a>
        </div>
      </div>
    </>
  );
}

export default Question5;
