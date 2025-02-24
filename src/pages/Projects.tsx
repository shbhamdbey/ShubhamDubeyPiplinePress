import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-black/50 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video relative">
                <img
                  src={`https://source.unsplash.com/random/800x600?tech,project${i}`}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Project Title {i}</h3>
                    <p className="text-sm text-gray-300">React • TypeScript • Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}