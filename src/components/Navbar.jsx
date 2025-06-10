import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-container section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-blue-400">
            Salih Efehan 
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Toggle menu"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 