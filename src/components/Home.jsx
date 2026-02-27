import React from 'react';

function Home(props) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full">

                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to Design Web 🚀
                </h1>

                <p className="text-gray-600 mb-6">
                    Build modern and responsive web applications using React & Tailwind CSS.
                </p>

                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                    Get Started
                </button>

            </div>
        </div>
    );
}

export default Home;