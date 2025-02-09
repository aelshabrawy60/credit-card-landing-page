import React from 'react';

function Download() {
  return (
    <div className="flex flex-col gap-y-14 md:flex-row items-center justify-between gap-5 p-4">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold">
          Easy Way to Manage Your Finances
        </h2>
        <p className="text-gray-500 my-8 text-base md:text-lg">
          Easy to use mobile app that supports both Android and iOS.
        </p>
        <div className="flex gap-5">
          <a href="#" className="bg-[#4D3D54] p-4 rounded-xl">
            <img
              src="google-play.svg"
              alt="Download on Google Play"
              className="w-32"
            />
          </a>
          <a href="#" className="bg-[#4D3D54] p-4 rounded-xl">
            <img
              src="app-store.svg"
              alt="Download on the App Store"
              className="w-32"
            />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="phone.png"
          alt="Mobile Phone"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
}

export default Download;
