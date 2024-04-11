// import React from 'react';
// import './App.css';

export const LearningPath = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 ml-40 mr-40">
      {/* Progress bar */}
      <div className="w-full mb-6">
        <div className="bg-blue-400 h-1 rounded-full relative">
          <div className="bg-blue-600 h-full rounded-full absolute left-0" style={{ width: '20%' }}></div>
        </div>
      </div>

      <div className="font-bold text-center">
        Learning Paths Based On Your Answers
      </div>

      <div className='text-center mt-2 text-xs '>Choose One To Get Started. You Can Switch Anytime.</div>

      <div className="flex justify-center mt-6">
        <div className="ml-4 mr-4 p-4 border rounded text-xs max-w-xs flex mt-10 items-start relative">
          <span className="absolute top-0 left-0 bg-yellow-400 text-white px-2 py-1 rounded-tl rounded-br ml-32">Most Popular</span>
          <div className="flex-1">
            <span className="font-semibold">Foundational Math</span>
            <p>Build Your Foundational Skills In Algebra, Geometry, And Probability.</p>
          </div>
          <img src='/assets/machine.png' className="h-32" alt="machine" />
        </div>

        <div className="ml-4 mr-4 p-4 border rounded text-xs max-w-xs flex mt-10 items-start">
          <div className="flex-1">
            <span className="font-semibold">Mathematical Thinking</span>
            <p>Develop Your Critical Thinking And Problem-Solving Skills.</p>
          </div>
          <img src='/assets/machine.png' className="h-32" alt="machine" />
        </div>
      </div>
    </div>
  );
}

export default LearningPath;
