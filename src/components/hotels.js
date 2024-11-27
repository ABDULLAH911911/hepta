import React from "react";
import {Link} from "react-router-dom";

function Hotels() {
    return (
        <div className="relative h-screen">
        {/* Back to Home link */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-blue-500 text-lg font-bold hover:underline"
        >
          Back to Home
        </Link> 

        {/* Hotels Content */}
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl font-semibold">Hotels</h1>
          <p className="mt-4 text-gray-700">Welcome to the Hotels page!</p>
        </div>
      </div>
    );
}

export default Hotels