import React from 'react';
import { Star, Users } from 'lucide-react';

export default function Teaching() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Teaching Review</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-black/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="mr-3 text-yellow-400" />
                Teaching Experience
              </h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold">Advanced Web Development</h3>
                  <p className="text-gray-400">University of Technology, 2022-2023</p>
                </li>
                <li>
                  <h3 className="font-bold">Mobile App Development</h3>
                  <p className="text-gray-400">Tech Institute, 2021-2022</p>
                </li>
                <li>
                  <h3 className="font-bold">Programming Fundamentals</h3>
                  <p className="text-gray-400">Code Academy, 2020-2021</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Star className="mr-3 text-yellow-400" />
              Student Reviews
            </h2>
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black/50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://source.unsplash.com/random/100x100?portrait${i}`}
                    alt={`Student ${i}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Student Name {i}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Excellent teaching style and very knowledgeable. The course material 
                  was well-structured and the practical examples were very helpful."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}