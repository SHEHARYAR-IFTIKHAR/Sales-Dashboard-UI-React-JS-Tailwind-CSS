import React, { useState } from 'react';
// import './index.css'; // Import Tailwind CSS

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isLoggedIn={isLoggedIn} onLogOut={handleLogOut} />
      <main className="flex items-center justify-center mt-20">
        {!isLoggedIn && (
          <button
            onClick={handleSignUp}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        )}
      </main>
    </div>
  );
};

const Header = ({ isLoggedIn, onLogOut }) => (
  <header className="bg-white p-4 shadow-md flex justify-between items-center">
    <h1 className="text-xl font-semibold">My App</h1>
    {isLoggedIn && (
      <button
        onClick={onLogOut}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600"
      >
        Log Out
      </button>
    )}
  </header>
);

export default App;
