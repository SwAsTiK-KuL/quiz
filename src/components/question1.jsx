
// import "./App.css"
function Question1() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 ml-40 mr-40">
      {/* Progress bar */}
      <div className="w-full mb-6">
        <div className="bg-blue-400 h-1 rounded-full relative">
          <div className="bg-blue-600 h-full rounded-full absolute left-0" style={{ width: '0%' }}></div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center font-bold">
        Which Describes You Best?
      </div>

      <div className='text-center mt-2 text-xs'> This Will Help You Personalise Experience </div>
      
      <div className="w-96 mt-12 font-normal px-4 py-3 border mr-20 text-xs flex items-center hover:bg-slate-300 cursor-pointer"> 
        <img src='./src/assets/student.png' className='h-6 mr-2'/>
        <span className='font-medium '>Student Or Soon To Be Enrolled</span>  
      </div>

      <div className='w-96 mt-2 font-normal px-4 py-3 border mr-20 text-xs flex items-center hover:bg-slate-300 cursor-pointer'> 
        <img src='./src/assets/preofessonal.png' className='h-6 '/> 
        <span className='font-medium'>Professional Pursuing A Career</span>
      </div>

      <div className='w-96 mt-2 font-normal px-4 py-3 border mr-20 text-xs flex items-center hover:bg-slate-300 cursor-pointer'> 
        <img src='./src/assets/parents.png' className='h-6 '/>
        <span className='font-medium'>Parent of Local-School-Age-Child</span>
      </div>

      <div className='w-96 mt-2 font-normal px-4 py-3 border mr-20 text-xs flex items-center hover:bg-slate-300 cursor-pointer'>
        <img src='./src/assets/lifelong_learner.png' className='h-6 mr-4'/> 
        <span className='font-medium'> LifeLong Learning Parent</span>
      </div>

      <div className='w-96 mt-2 font-normal px-4 py-3 border mr-20 text-xs flex items-center hover:bg-slate-300 cursor-pointer'> 
        <img src='./src/assets/teacher.png' className='h-6 mr-5'/>
        <span className='font-medium'> Teacher </span>
      </div>

      <div className='w-96 mt-2 font-normal px-4 py-3 border mr-20 text-xs flex items-center hover:bg-slate-300 cursor-pointer'>
        <img src='./src/assets/others.png' className='h-6 mr-4'/>
        <span className='font-medium'> Other </span>
      </div>

      <div className='flex flex-row items-center justify-center mt-4  '>
        <a href='/question2'><button type='submit' className='bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-1 rounded items-center text-sm' >Continue</button> </a>
      </div>
    </div>
  );
}

export default Question1;
