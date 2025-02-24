import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Blog from './pages/Blog';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen vintage-container">
        {/* Header */}
        <header className="border-b-[3px] border-black bg-[#e8e6e1]">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] font-bold">Extra! Data! Read All About It!</p>
              <h1 className="newspaper-title text-7xl md:text-8xl lg:text-9xl mb-6">The Pipeline Press</h1>
              <div className="flex items-center justify-center space-x-4 text-sm uppercase tracking-widest">
                <span>Vol. I</span>
                <span className="w-4 h-px bg-black"></span>
                <span>No. 1</span>
                <span className="w-4 h-px bg-black"></span>
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="border-y-2 border-black bg-[#e8e6e1]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link to="/" className="vintage-link text-sm uppercase tracking-widest">Front Page</Link>
                <Link to="/about" className="vintage-link text-sm uppercase tracking-widest">About</Link>
                <Link to="/projects" className="vintage-link text-sm uppercase tracking-widest">Projects</Link>
                <Link to="/research" className="vintage-link text-sm uppercase tracking-widest">Research</Link>
                <Link to="/teaching" className="vintage-link text-sm uppercase tracking-widest">Teaching</Link>
                <Link to="/blog" className="vintage-link text-sm uppercase tracking-widest">Articles</Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden w-full flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-black p-2"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#e8e6e1] border-t-2 border-black`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-sm uppercase tracking-widest">Front Page</Link>
              <Link to="/about" className="block px-3 py-2 text-sm uppercase tracking-widest">About</Link>
              <Link to="/projects" className="block px-3 py-2 text-sm uppercase tracking-widest">Projects</Link>
              <Link to="/research" className="block px-3 py-2 text-sm uppercase tracking-widest">Research</Link>
              <Link to="/teaching" className="block px-3 py-2 text-sm uppercase tracking-widest">Teaching</Link>
              <Link to="/blog" className="block px-3 py-2 text-sm uppercase tracking-widest">Articles</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-black bg-[#e8e6e1]">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center text-sm uppercase tracking-widest">
              Published with Pride • {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;