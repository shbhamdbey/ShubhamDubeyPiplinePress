import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Main Story */}
      <div className="md:col-span-8 vintage-border bg-[#e8e6e1] p-8">
        <h1 className="headline text-5xl font-black mb-6">Developer Chronicles: A Digital Journey</h1>
        <div className="article-text text-lg leading-relaxed">
          <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3">
            In an era where technology shapes our future, a compelling narrative unfolds at the 
            intersection of innovation and craftsmanship. This chronicle documents a journey through 
            the digital landscape, where each line of code tells a story of progress and possibility.
          </p>
          <p>
            Through these pages, readers will discover groundbreaking projects that challenge 
            conventions, research that pushes boundaries, and teachings that inspire the next 
            generation of digital craftsmen. Welcome to my story, where traditional values meet 
            modern innovation.
          </p>
        </div>
        <Link 
          to="/projects" 
          className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 mt-6 hover:bg-black/80 transition-colors"
        >
          <span className="uppercase tracking-wider">View Latest Works</span>
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Side Stories */}
      <div className="md:col-span-4 space-y-8">
        <div className="vintage-border bg-[#e8e6e1] p-6">
          <h2 className="headline text-2xl font-bold mb-4">Latest Research</h2>
          <p className="font-['Old_Standard_TT'] mb-4">
            Breaking developments in modern web architecture and user experience design.
          </p>
          <Link to="/research" className="vintage-link uppercase tracking-wider text-sm">Continue Reading →</Link>
        </div>

        <div className="vintage-border bg-[#e8e6e1] p-6">
          <h2 className="headline text-2xl font-bold mb-4">Teaching Notes</h2>
          <p className="font-['Old_Standard_TT'] mb-4">
            Insights and methodologies from the frontlines of developer education.
          </p>
          <Link to="/teaching" className="vintage-link uppercase tracking-wider text-sm">Learn More →</Link>
        </div>

        <div className="vintage-border bg-[#e8e6e1] p-6">
          <h2 className="headline text-2xl font-bold mb-4">Featured Articles</h2>
          <ul className="space-y-4 font-['Old_Standard_TT']">
            <li>
              <Link to="/blog" className="vintage-link">
                The Evolution of Web Development
              </Link>
            </li>
            <li>
              <Link to="/blog" className="vintage-link">
                Modern UX Principles
              </Link>
            </li>
            <li>
              <Link to="/blog" className="vintage-link">
                TypeScript: A New Era
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}