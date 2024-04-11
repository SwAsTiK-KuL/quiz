import React from 'react';
// import './App.css';

const Question4 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 ml-40 mr-40">
      {/* Progress bar */}
      <div className="w-full mb-6">
        <div className="bg-blue-400 h-1 rounded-full relative">
          <div className="bg-blue-600 h-full rounded-full absolute left-0" style={{ width: '60%' }}></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center font-bold mt-5 text-lg">
        What Is Your Math Comfort Level?
      </div>

      <div className="flex justify-center mt-6 ">
        <div className="flex-grow-0 text-center mt-2 text-xs border border-transparent hover:border-yellow-500 hover:border-solid rounded p-4 inline-flex flex-col items-center mx-2 cursor-pointer">
          <img src='/assets/introduction.png' className='h-8' alt="introductory-icon" />
          <div>
            <span className='block'>Arithmetic</span>
            <span className='block text-gray-300'>Introductory</span>
          </div>
        </div>

        <div className="flex-grow-0 text-center mt-2 text-xs border border-transparent hover:border-yellow-500 hover:border-solid rounded p-4 inline-flex flex-col items-center mx-2 cursor-pointer">
          <img src='/assets/foundational.png' className='h-8' alt="foundational-icon" />
          <div>
            <span className='block'>Basic Algebra</span>
            <span className='block text-gray-300'>Foundational</span>
          </div>
        </div>

        <div className="flex-grow-0 text-center mt-2 text-xs border border-transparent hover:border-yellow-500 hover:border-solid rounded p-4 inline-flex flex-col items-center mx-2 cursor-pointer">
          <img src='/assets/intermediate.png' className='h-8' alt="intermediate-icon" />
          <div>
            <span className='block'>Intermediate Algebra</span>
            <span className='block text-gray-300'>Intermediate</span>
          </div>
        </div>

        <div className="flex-grow-0 text-center mt-2 text-xs border border-transparent hover:border-yellow-500 hover:border-solid rounded p-4 inline-flex flex-col items-center mx-2 cursor-pointer">
          <img src='/assets/calculus.png' className='h-8' alt="calculus-icon" />
          <div>
            <span className='block'>Calculus</span>
            <span className='block text-gray-300'>Advanced</span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center mt-4'>
      <a href='/question5'>  <button className='bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center text-sm'>Continue</button> </a>
      </div>
    </div>
  );
}

export default Question4;
