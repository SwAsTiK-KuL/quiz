import React from 'react';
// import './App.css';

const Question3 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 ml-40 mr-40">
      {/* Progress bar */}
      <div className="w-full mb-6">
        <div className="bg-blue-400 h-1 rounded-full relative">
          <div className="bg-blue-600 h-full rounded-full absolute left-0" style={{ width: '40%' }}></div>
        </div>
      </div>

      <div className="flex items-center">
        <img src='./src/assets/pulley.png' className=" flex h-64 mt-5 ml-20" alt="pulley-icon" />
        <div className="ml-10">
          <div className="flex items-center justify-center font-bold mb-10 mr-20 ml-10">
            You're In The Right Place
          </div>

          <div className='text-justify mt-2 text-xs ml-10 mr-20 flex justify' >
            Brilliant! Get your hands on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
          </div>

          <div className='flex flex-row items-center justify-center mt-4 mr-40 '>
           <a href='/question4'> <button className='bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 ml-28 mt-3 rounded items-center text-sm'>Continue</button> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
