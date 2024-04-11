import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LoadingPage = () => {
  // State to track loading status
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // After 3 seconds, set isLoading to false to indicate loading is complete
      setIsLoading(false);
      navigate("/learning_paths")
    }, 3000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  // Render loading message or content based on isLoading state
  return (
    <div className="flex items-center justify-center h-screen">
      {isLoading ? (
        <div className="flex flex-col items-center">
          <p className="text-xs mb-2">Finding Learning Path Recommendations For You Based On Your Response</p>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : (
        <div className="text-center">
          {/* Your content when loading is complete */}
          <p className="text-xs">Learning path recommendations are read</p>
        </div>
      )}
    </div>
  );
}
  
export default LoadingPage;
