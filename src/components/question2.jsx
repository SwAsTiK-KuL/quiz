import React from 'react';
// import './App.css';
// import EmojiPicker from 'emoji-picker-react';

const Question2 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 ml-40 mr-40">
        {/* Progress bar */}
        <div className="w-full mb-6">
          <div className="bg-blue-400 h-1 rounded-full relative">
            <div className="bg-blue-600 h-full rounded-full absolute left-0" style={{ width: '20%' }}></div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center font-bold  ">
          What Are You Most Interested In?
        </div>

        <div className='text-center mt-2 text-xs text-gray-600'> Choose Just One. This Will Help Us Get You Start (But Won't Limit Your Experience) </div>
        
        <div className="ml-64 mt-12 font-normal px-2 py-3 border mr-56 text-xs flex w-96 hover:bg-slate-300 cursor-pointer"> 
          <img src='./src/assets/graph.png' className='h-6 mr-5 '/>
          <span className='font-medium '>Student</span> Learning Specific Skills To Advance My Career 
        </div>

        <div className='ml-64 mt-2 font-normal px-2 py-3 border mr-56 text-xs flex w-96 hover:bg-slate-300 cursor-pointer'> 
          <img src='./src/assets/earth.png' className='h-6 mr-5 '/>
          Exploring New Topics I'm Interested In
        </div>

        <div className='ml-64 mt-2 font-normal px-2 py-3 border mr-56 text-xs flex w-96 hover:bg-slate-300 cursor-pointer'>
          <img src='./src/assets/geometry.png' className='h-6 mr-3 '/>
          Refreshing My Math Foundations
        </div>

        <div className='ml-64 mt-2 font-normal px-2 py-3 border mr-56 text-xs flex w-96 hover:bg-slate-300 cursor-pointer'>
          <img src='./src/assets/aim.png' className='h-6 mr-5 '/>
          Exercising My Brain To Stay Sharp
        </div>

        <div className='ml-64 mt-2 font-normal px-2 py-3 border mr-56 text-xs flex w-96 hover:bg-slate-300 cursor-pointer'> 
          <img src='./src/assets/else.png' className='h-6 mr-5'/>
          <span className='font-medium'> Something Else </span>
        </div>

        <div className='flex flex-row items-center justify-center mt-4 '>
         <a href='/question3'> <button type='submit' className='bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center text-sm'>Continue</button> </a>
        </div>
      </div>
    </>
  )
}

export default Question2;
