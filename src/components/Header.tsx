'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cyber-dark/95 backdrop-blur-lg border-b border-cyber-cyan/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo et nom */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Logo personnalisé */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyber-cyan to-cyber-magenta rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg font-cyber-title">MV</span>
              </div>
              {/* Effet glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan to-cyber-magenta rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10"></div>
            </div>
            
            {/* Nom complet */}
            <div className="flex flex-col">
              <span className="font-cyber-title text-white text-lg font-bold leading-none group-hover:text-cyber-cyan transition-colors">
                Marc Villain
              </span>
              <span className="text-cyber-cyan/80 text-xs font-medium">
                Développeur web & applications
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  pathname === item.href
                    ? 'text-cyber-cyan'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {/* Underline effect */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-magenta transform transition-transform duration-300 ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-cyber-dark/98 backdrop-blur-lg border-b border-cyber-cyan/20 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-cyber-cyan bg-cyber-cyan/10'
                      : 'text-gray-300 hover:text-white hover:bg-cyber-dark/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* LinkedIn mobile */}
              <a
                href="https://www.linkedin.com/in/mv1995"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 mt-4 bg-[#0077B5] text-white text-sm font-medium rounded-lg hover:bg-[#005582] transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Me contacter sur LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}