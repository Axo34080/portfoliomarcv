import React from 'react';
import Image from 'next/image'

export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 to-cyber-purple/5 opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-cyber-title text-4xl md:text-6xl font-bold text-white mb-6">
              À propos de <span className="text-cyber-cyan">moi</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              De serveur à développeur : un parcours de reconversion passionnée vers l'IA et les nouvelles technologies
            </p>
          </div>

          {/* Photo avec les mêmes optimisations que la page d'accueil */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <Image
                src="/marc-photo.jpg"
                alt="Marc Villain"
                width={192}
                height={192}
                quality={95}
                priority
                className="rounded-lg object-cover border-2 border-cyber-cyan/30 shadow-cyber-glow photo-profile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mon Parcours */}
      <section className="py-16 bg-cyber-dark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cyber-title text-3xl font-bold text-cyber-cyan mb-12 text-center">
            Mon Parcours
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card p-8 cyber-glow-hover">
              <h3 className="font-cyber-title text-xl font-bold text-cyber-yellow mb-4">
                Une Reconversion Déterminée
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                À 25 ans, sans diplôme initial, j'ai pris la décision de passer mon Bac S pour donner un nouveau cap à ma vie. 
                Après avoir travaillé en tant que serveur, j'ai choisi de me reconvertir dans le développement web.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cette expérience m'a appris la persévérance et la capacité d'adaptation - des qualités essentielles dans le développement.
              </p>
            </div>

            <div className="cyber-card p-8 cyber-glow-hover">
              <h3 className="font-cyber-title text-xl font-bold text-cyber-cyan mb-4">
                Formation Autodidacte
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                J'ai commencé par acquérir les bases du code avec un Bac+2 en distanciel chez OpenClassrooms, 
                ce qui m'a permis d'apprendre de manière autonome et pratique.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Aujourd'hui, je poursuis avec un Bachelor 3 en alternance à My Digital School, 
                combinant théorie et expérience professionnelle.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-cyber-cyan/30"></div>
              
              {[
                {
                  year: "25 ans",
                  title: "Bac S & Reconversion",
                  description: "Décision de changer de voie professionnelle",
                  color: "cyber-yellow"
                },
                {
                  year: "Bac+2",
                  title: "OpenClassrooms",
                  description: "Formation développement web en distanciel",
                  color: "cyber-cyan"
                },
                {
                  year: "Bac+3",
                  title: "My Digital School",
                  description: "Bachelor en alternance - Développement web",
                  color: "cyber-magenta"
                },
                {
                  year: "Futur",
                  title: "Master & Spécialisation IA",
                  description: "Objectif : IA et développement d'applications",
                  color: "cyber-purple"
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                    <div className="cyber-card p-4">
                      <div className={`text-${item.color} font-cyber-title font-bold mb-2`}>
                        {item.year}
                      </div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-${item.color} rounded-full border-2 border-cyber-dark`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ma Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cyber-title text-3xl font-bold text-cyber-cyan mb-12 text-center">
            Ma Philosophy de Développement
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card p-6 cyber-glow-hover">
              <h3 className="font-cyber-title text-xl font-bold text-cyber-yellow mb-4">
                Le Code comme un Jeu Vidéo
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Chaque projet est un nouveau challenge, chaque bug un boss à vaincre. 
                J'adore résoudre des problèmes complexes et voir mes applications prendre vie.
              </p>
            </div>

            <div className="cyber-card p-6 cyber-glow-hover">
              <h3 className="font-cyber-title text-xl font-bold text-cyber-cyan mb-4">
                Apprendre en Pratiquant
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Je privilégie l'apprentissage pratique à la théorie pure. 
                Chaque ligne de code est une occasion d'expérimenter et de progresser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mes Objectifs */}
      <section className="py-16 bg-cyber-dark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cyber-title text-3xl font-bold text-cyber-cyan mb-12 text-center">
            Mes Objectifs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 cyber-glow-hover text-center">
              <h3 className="font-cyber-title text-lg font-bold text-cyber-yellow mb-3">
                Court terme
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Terminer mon Bachelor 3 et poursuivre avec un Master pour me spécialiser dans l'IA et le développement d'applications.
              </p>
            </div>

            <div className="cyber-card p-6 cyber-glow-hover text-center">
              <h3 className="font-cyber-title text-lg font-bold text-cyber-cyan mb-3">
                Moyen terme
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Intégrer une startup innovante qui correspond à mon mindset et me permet de travailler sur des projets d'IA passionnants.
              </p>
            </div>

            <div className="cyber-card p-6 cyber-glow-hover text-center">
              <h3 className="font-cyber-title text-lg font-bold text-cyber-magenta mb-3">
                Long terme
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Évoluer vers le freelance pour avoir plus de liberté et travailler sur des projets variés en IA et développement d'apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Centres d'Intérêt - SEULE section avec émojis */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cyber-title text-3xl font-bold text-cyber-cyan mb-12 text-center">
            En Dehors du Code
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🎬", title: "Cinéma", desc: "Passion pour les films" },
              { icon: "⚽", title: "Sports", desc: "Activité physique" },
              { icon: "🎮", title: "Jeux Vidéo", desc: "Gaming & esport" },
              { icon: "🔬", title: "Nouvelles Tech", desc: "Veille technologique" }
            ].map((item, index) => (
              <div key={index} className="cyber-card p-4 text-center cyber-glow-hover">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="text-cyber-cyan font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ces passions nourrissent ma créativité et m'inspirent dans mes projets de développement. 
              La communauté dev et la veille techno font partie intégrante de mon quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cyber-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cyber-title text-2xl font-bold text-white mb-6">
            Prêt à collaborer ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'opportunités qui me permettront de mettre en pratique 
            mes compétences et de continuer à apprendre dans un environnement stimulant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-cyber-cyan text-cyber-dark font-semibold rounded-lg hover:bg-white transition-all duration-300 shadow-cyber-glow"
            >
              Me contacter
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300"
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}