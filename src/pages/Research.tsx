import React from 'react';
import { Award, BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Research & Awards</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-3 text-yellow-400" />
              Research Papers
            </h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-black/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Research Paper Title {i}</h3>
                  <p className="text-gray-400 mb-4">
                    Published in International Journal of Computer Science (2023)
                  </p>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Award className="mr-3 text-yellow-400" />
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-black/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Achievement Title {i}</h3>
                  <p className="text-gray-400 mb-2">Awarded by Organization Name</p>
                  <p className="text-gray-300">
                    Brief description of the achievement and its significance.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}