'use client'

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 to-cyber-purple/5 opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-cyber-title text-4xl md:text-6xl font-bold text-white mb-6">
              Contactez-<span className="text-cyber-cyan">moi</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
              Une idée de projet ? Une opportunité ? Connectons-nous sur LinkedIn ! 
              C'est le moyen le plus rapide et direct pour échanger.
            </p>
            
            {/* CTA Principal LinkedIn */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://www.linkedin.com/in/mv1995" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#0077B5] text-white font-semibold rounded-lg hover:bg-[#005582] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Me contacter sur LinkedIn
              </a>
              
              <a 
                href="https://github.com/Axo34080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300"
              >
                <svg className="mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Voir mon GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Pourquoi LinkedIn */}
            <div className="cyber-card p-8">
              <h2 className="font-cyber-title text-2xl font-bold text-cyber-cyan mb-6">
                Pourquoi LinkedIn ?
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-white">Professionnel</strong> - Communication directe et efficace</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-white">Réactif</strong> - Je réponds généralement dans les 24h</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-white">Contexte</strong> - Vous pouvez voir mon parcours complet</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-white">Sécurisé</strong> - Plateforme professionnelle de confiance</p>
                </div>
              </div>
            </div>

            {/* Types d'échanges */}
            <div className="cyber-card p-8">
              <h2 className="font-cyber-title text-2xl font-bold text-cyber-cyan mb-6">
                Parlons de...
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyber-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyber-yellow"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Projets collaboratifs</h3>
                    <p className="text-sm">Applications web, IA, développements innovants</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyber-magenta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyber-magenta"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Opportunités académiques</h3>
                    <p className="text-sm">Master en alternance, stages, projets étudiants</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyber-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyber-green"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Missions freelance</h3>
                    <p className="text-sm">Développement web, conseils techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyber-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyber-cyan"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Échanges techniques</h3>
                    <p className="text-sm">Technologies, bonnes pratiques, veille techno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statut et disponibilité */}
      <section className="py-16 bg-cyber-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card p-8 border-cyber-green/20 bg-cyber-green/5 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
              <h2 className="font-cyber-title text-xl font-bold text-cyber-green">
                Actuellement disponible
              </h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              En recherche active d'opportunités pour un <strong className="text-white">Master en alternance</strong>, 
              ouvert aux <strong className="text-white">projets collaboratifs</strong> et aux <strong className="text-white">missions courtes</strong>. 
              Spécialisation en développement web.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan rounded-full">React & Next.js</span>
              <span className="px-3 py-1 bg-cyber-yellow/20 text-cyber-yellow rounded-full">JavaScript & TypeScript</span>
              <span className="px-3 py-1 bg-cyber-magenta/20 text-cyber-magenta rounded-full">Intelligence Artificielle</span>
              <span className="px-3 py-1 bg-cyber-green/20 text-cyber-green rounded-full">Développement Full-Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action final */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cyber-title text-3xl font-bold text-white mb-6">
            Prêt à échanger ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Que ce soit pour un projet, une opportunité ou simplement pour discuter tech, 
            je suis toujours partant pour de nouveaux défis !
          </p>
          
          <a 
            href="https://www.linkedin.com/in/mv1995" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-white font-bold text-lg rounded-lg hover:from-cyber-magenta hover:to-cyber-cyan transition-all duration-300 shadow-cyber-glow hover:shadow-cyber-glow-strong transform hover:scale-105"
          >
            <svg className="mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connectons-nous sur LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}