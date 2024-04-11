// import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Question1 from './components/question1';
import Question2 from './components/question2';
import Question3 from './components/question3';
import Question4 from './components/question4';
import Question5 from './components/question5';
import LoadingPage from './components/loading_page';
import LearningPath from './components/leaning_paths';
function App() {
  return (
    <div>
        <Routes>
          {/* <Route index element={<Question1 />} /> */}
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
          <Route path="/question4" element={<Question4 />} />
          <Route path="/question5" element={<Question5 />} />
          <Route path="/loading_page" element={<LoadingPage />} />
          <Route path="/learning_paths" element={<LearningPath />} />
        </Routes>
    </div>
  );
}

export default App;
