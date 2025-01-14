import Link from "next/link";
import { states } from "@/data/statesView";
import React from "react";

const SimpleStatesView = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <h1 className="text-xl text-white font-light tracking-wider">
                TIMELESS TRAILS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#" className="text-orange-600">
                Discover
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Stories
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-24 pb-12 bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl text-white font-light">
            States of <span className="text-orange-600">India</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Explore the diverse states of India, each with its unique culture,
            traditions, and stories waiting to be discovered.
          </p>
        </div>
      </div>

      {/* States Grid */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {states.map((state, index) => (
              <Link
                key={index}
                href={`/state/${state.name.toLowerCase()}`}
                className="block group h-96"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={state.coverImage}
                    alt={state.name}
                    className="w-full h-80 object-cover brightness-75 group-hover:brightness-90 
                      transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 
                    to-transparent opacity-90"
                  ></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <p className="text-orange-600 mb-2 font-light tracking-wider">
                      {state.sanskrit}
                    </p>
                    <h3 className="text-2xl text-white mb-2">{state.name}</h3>
                    <p className="text-gray-300">{state.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <p className="text-gray-400 text-center">
            Click on any state to explore its rich heritage and culture
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleStatesView;
