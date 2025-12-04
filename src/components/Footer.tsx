import React from 'react';
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cyber-dark/95 border-t border-cyber-cyan/20">
      {/* Section principale */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyber-cyan to-cyber-magenta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-cyber-title">MV</span>
              </div>
              <div>
                <h3 className="font-cyber-title text-xl font-bold text-white">Marc Villain</h3>
                <p className="text-cyber-cyan text-sm">Développeur web & applications</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              Passionné par le développement web moderne et l'intelligence artificielle. 
              En recherche d'opportunités pour un Master en alternance et ouvert aux projets collaboratifs.
            </p>
            
            {/* Status */}
            <div className="inline-flex items-center px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm rounded-full">
              <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse"></div>
              Disponible pour opportunités
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-cyber-title text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens sociaux et contact */}
          <div>
            <h4 className="font-cyber-title text-lg font-semibold text-white mb-4">Me suivre</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/mv1995"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#0077B5] transition-colors text-sm group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/Axo34080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>

            {/* Tech stack */}
            <div className="mt-6">
              <h5 className="text-white text-sm font-semibold mb-2">Technologies</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan text-xs rounded">React</span>
                <span className="px-2 py-1 bg-cyber-yellow/20 text-cyber-yellow text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-cyber-magenta/20 text-cyber-magenta text-xs rounded">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section bottom */}
      <div className="border-t border-cyber-cyan/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Marc Villain.
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Construit avec Next.js & Tailwind CSS</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Hébergé sur Vercel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Effet de particules subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyber-cyan/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyber-magenta/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </footer>
  )
}