import React from "react";

const Section = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What you will learn in the CSM Certification course
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex">
              <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold mx-auto">
                1
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Experiential Workshops
              </div>
            </div>
            <p className="text-gray-600 mt-2">
              Activities, team-based exercises, practical case studies, and
              role-playing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex">
              <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold mx-auto">
                2
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Negotiating Project Agreements
              </div>
            </div>

            <p className="text-gray-600 mt-2">
              Learn how to empower team members and stakeholders by negotiating
              project agreements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex">
              <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold mx-auto">
                3
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Managing Conflict
              </div>
            </div>
            <p className="text-gray-600 mt-2">
              Learn to manage compliances and achieve project objectives by
              managing conflicts using Scrum methodologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex">
              <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold mx-auto">
                4
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Choosing Project Methodology
              </div>
            </div>

            <p className="text-gray-600 mt-2">
              Learn about different project methodologies and how to select the
              right one for your project.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex">
              <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold mx-auto">
                5
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Managing Compliance
              </div>
            </div>

            <p className="text-gray-600 mt-2">
              Learn how to manage compliances effectively within your project
              framework.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex">
              <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold mx-auto">
                6
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Managing Change
              </div>
            </div>

            <p className="text-gray-600 mt-2">
              Learn how to manage change in your projects by using Agile
              methodologies.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            View all
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
