import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const TimeLine = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Your journey towards CSM expertise
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 border-r-2 border-dashed border-purple-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="relative flex items-center justify-between">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 mx-auto w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  Scrum Framework
                </h3>
                <p className="text-gray-600 mt-2">
                  Understand the principles, values, and practices of the Scrum
                  framework.
                </p>
              </div>
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-6">
                1
              </div>
            </div>

            <div className="relative flex items-center justify-between">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-6">
                2
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 mx-auto w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  Roles and Responsibilities
                </h3>
                <p className="text-gray-600 mt-2">
                  Learn about the roles and responsibilities of a ScrumMaster.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 mx-auto w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  Artifact Management
                </h3>
                <p className="text-gray-600 mt-2">
                  Learn to manage Scrum artifacts like the Product Backlog.
                </p>
              </div>
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-6">
                3
              </div>
            </div>

            <div className="relative flex items-center justify-between">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-6">
                4
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 mx-auto w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  Scrum Events
                </h3>
                <p className="text-gray-600 mt-2">
                  Gain knowledge of Scrum events such as Sprint Planning, Daily
                  Stand-ups.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 mx-auto w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  Product Backlog Refinement
                </h3>
                <p className="text-gray-600 mt-2">
                  Master the skill of refining and prioritizing the Product
                  Backlog.
                </p>
              </div>
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-6">
                5
              </div>
            </div>

            <div className="relative flex items-center justify-between">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-6">
                6
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 mx-auto w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  Continuous Improvement
                </h3>
                <p className="text-gray-600 mt-2">
                  Understand the importance of continuous improvement in Scrum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 flex items-center justify-center gap-2">
            Get Started
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
