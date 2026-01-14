import React from 'react'

function NotFound() {
    // Simulating error object for preview
    const err = {
        status: "404",
        statusText: "Page Not Found",
        data: "The page you're looking for doesn't exist or has been moved."
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800 mb-4">
                    {err?.status || "404"}
                </h1>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">
                    {err?.statusText || "Page Not Found"}
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {err?.data || "The page you're looking for doesn't exist or has been moved."}
                </p>
                <a
                    href="/"
                    className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-bold h-10 w-50 px-8 py-3 rounded-sm transition duration-300 shadow-md hover:shadow-lg"
                >
                Go to Home
                </a>
            </div>
        </div>
    )
}

export default NotFound;