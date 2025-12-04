import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="pt-16"> {/* Padding pour compenser le header fixe */}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 to-cyber-magenta/5 opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Photo de profil */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Image
                  src="/marc-photo.jpg"
                  alt="Marc Villain"
                  width={160}
                  height={160}
                  quality={95}
                  priority
                  className="rounded-full object-cover border-4 border-cyber-cyan shadow-cyber-glow photo-profile"
                />
                <div className="absolute inset-0 rounded-full border-4 border-cyber-cyan/30 animate-pulse"></div>
              </div>
            </div>

            <h1 className="font-cyber-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Marc</span>
              <span className="text-cyber-cyan"> Villain</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-cyber-cyan mb-4 font-medium">
              Développeur Web & Applications
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Étudiant développeur web en Bachelor 3 à My Digital School. 
              Passionné de nouvelles technologies, j'apprends en m'amusant à devenir un meilleur développeur, 
              avec l'ambition de créer des solutions innovantes et performantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-cyber-cyan text-cyber-dark font-semibold rounded-lg hover:bg-white transition-all duration-300 shadow-cyber-glow hover:shadow-cyber-glow-pink"
              >
                Découvrir mes projets
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300"
              >
                Me contacter
              </a>
            </div>

            {/* Liens sociaux */}
            <div className="flex justify-center space-x-6 mt-8">
              <a 
                href="https://github.com/Axo34080"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-cyan transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mv1995"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-cyan transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Technique */}
      <section className="py-20 bg-cyber-dark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cyber-title text-3xl md:text-4xl font-bold text-white mb-4">
              Stack Technique
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies que je maîtrise et frameworks sur lesquels je me perfectionne
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Technologies maîtrisées */}
            {[
              { name: 'JavaScript', level: 'maîtrisé', color: 'text-cyber-cyan' },
              { name: 'React', level: 'maîtrisé', color: 'text-cyber-cyan' },
              { name: 'HTML/CSS', level: 'maîtrisé', color: 'text-cyber-cyan' },
            ].map((tech, index) => (
              <div 
                key={index}
                className="cyber-card p-4 text-center cyber-glow-hover group"
              >
                <div className={`${tech.color} group-hover:text-white transition-colors font-medium mb-1`}>
                  {tech.name}
                </div>
                <div className="text-xs text-gray-400">
                  {tech.level}
                </div>
              </div>
            ))}
            
            {/* Technologies en apprentissage */}
            {[
              { name: 'Next.js', level: 'en apprentissage', color: 'text-cyber-yellow' },
              { name: 'Vite', level: 'en apprentissage', color: 'text-cyber-yellow' },
              { name: 'PHP', level: 'étudié', color: 'text-cyber-magenta' },
              { name: 'Symfony', level: 'étudié', color: 'text-cyber-magenta' },
              { name: 'TypeScript', level: 'en apprentissage', color: 'text-cyber-yellow' },
            ].map((tech, index) => (
              <div 
                key={index}
                className="cyber-card p-4 text-center cyber-glow-hover group"
              >
                <div className={`${tech.color} group-hover:text-white transition-colors font-medium mb-1`}>
                  {tech.name}
                </div>
                <div className="text-xs text-gray-400">
                  {tech.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu des projets */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cyber-title text-3xl md:text-4xl font-bold text-white mb-4">
              Projets Récents
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Découvrez mes créations personnelles et projets scolaires
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projets personnels */}
            <div>
              <h3 className="text-cyber-cyan font-cyber-title text-xl mb-6">Projets Personnels</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "To-Do List React",
                    description: "Application de gestion de tâches développée en React avec une interface moderne et intuitive",
                    tech: ["React", "JavaScript", "CSS"],
                    link: "https://to-do-list-react-iota-seven.vercel.app/"
                  },
                  {
                    title: "Avi Ciné",
                    description: "Site web de cinéma avec gestion des films et séances, interface responsive, utilisation d'une API externe ",
                    tech: ["React", "JavaScript", "API"],
                    link: "https://avi-cine.vercel.app/"
                  }
                ].map((project, index) => (
                  <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cyber-card p-6 cyber-glow-hover group cursor-pointer"
                  >
                    <h4 className="font-cyber-title text-lg font-bold text-cyber-cyan group-hover:text-white transition-colors mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-cyber-cyan/10 text-cyber-cyan text-xs rounded-full border border-cyber-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-cyber-cyan group-hover:text-white transition-colors text-sm">
                      Voir le projet
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Projets scolaires */}
            <div>
              <h3 className="text-cyber-magenta font-cyber-title text-xl mb-6">Projets Scolaires</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Nina Carducci - Optimisation SEO",
                    description: "Optimisation et debug d'un site web de photographe, amélioration des performances et du référencement",
                    tech: ["HTML", "CSS", "JavaScript", "SEO"],
                    link: "https://axo34080.github.io/Nina-Carducci-Dev/"
                  },
                  {
                    title: "Jack Cheat",
                    description: "Projet collaboratif développé dans le cadre de mon bachelor sur 5 jours pour les english games avec My digital school",
                    tech: ["JavaScript", "React", "Vercel"],
                    link: "https://jack-cheat.vercel.app" // J'ai mis le lien de la démo
                  }
                ].map((project, index) => (
                  <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cyber-card p-6 cyber-glow-hover group cursor-pointer border-cyber-magenta/20"
                  >
                    <h4 className="font-cyber-title text-lg font-bold text-cyber-magenta group-hover:text-white transition-colors mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-cyber-magenta/10 text-cyber-magenta text-xs rounded-full border border-cyber-magenta/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-cyber-magenta group-hover:text-white transition-colors text-sm">
                      Voir le projet
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300 rounded-lg"
            >
              Voir tous mes projets
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}