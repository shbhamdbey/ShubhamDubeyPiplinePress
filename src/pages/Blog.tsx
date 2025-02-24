import React from 'react';
import { Calendar } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Blog & Articles</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="bg-black/50 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={`https://source.unsplash.com/random/800x600?tech,blog${i}`}
                    alt={`Blog post ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center text-yellow-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">March {i}, 2024</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Understanding Modern Web Development</h2>
                  <p className="text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris.
                  </p>
                  <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}