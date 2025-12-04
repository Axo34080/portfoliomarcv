'use client'
import { useState } from 'react'
import { useGitHubRepos } from '../../hooks/useGitHubRepos'
import GitHubProjectCard from '../../components/GitHubProjectCard'

// Page de présentation des projets
export default function Projects() {
  const { repos, loading, error } = useGitHubRepos('Axo34080')
  const [filter, setFilter] = useState<'all' | 'personal' | 'school'>('all')

  // Configuration manuelle pour catégoriser vos projets
  const projectCategories = {
    personal: ['AviCine', 'ToDoList-React'], // VOS noms GitHub
    school: [] // Tout le reste sera automatiquement en scolaire
  }

  const categorizeRepo = (repoName: string) => {
    // Vérification avec les noms de vos repos GitHub
    const repoNameLower = repoName.toLowerCase()
    if (repoNameLower === 'avicine' || repoNameLower === 'todolist-react') {
      return 'personal'
    }
    return 'school' // Par défaut, tout est scolaire
  }

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredRepos = repos.filter(repo => {
    if (filter === 'all') return true
    return categorizeRepo(repo.name) === filter
  })

  // Stats par catégorie
  const personalRepos = repos.filter(repo => categorizeRepo(repo.name) === 'personal')
  const schoolRepos = repos.filter(repo => categorizeRepo(repo.name) === 'school')

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">❌ Erreur de chargement</div>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 to-cyber-magenta/5 opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-cyber-title text-4xl md:text-6xl font-bold text-white mb-6">
              Mes <span className="text-cyber-cyan">Projets</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
              Découvrez mes créations, de mes projets personnels aux réalisations académiques. 
              Chaque projet reflète mon évolution et ma passion pour le développement.
            </p>
            
            {/* GitHub Stats */}
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-cyber-yellow font-bold text-2xl">{personalRepos.length}</div>
                <div className="text-gray-400">Projets Personnels</div>
              </div>
              <div className="text-center">
                <div className="text-cyber-magenta font-bold text-2xl">{schoolRepos.length}</div>
                <div className="text-gray-400">Projets Scolaires</div>
              </div>
              <div className="text-center">
                <div className="text-cyber-cyan font-bold text-2xl">
                  {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
                </div>
                <div className="text-gray-400">Stars</div>
              </div>
              <div className="text-center">
                <div className="text-cyber-cyan font-bold text-2xl">
                  {new Set(repos.map(repo => repo.language).filter(Boolean)).size}
                </div>
                <div className="text-gray-400">Langages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-cyber-dark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'Tous les projets', color: 'cyber-cyan' },
              { key: 'personal', label: `Projets personnels (${personalRepos.length})`, color: 'cyber-yellow' },
              { key: 'school', label: `Projets scolaires (${schoolRepos.length})`, color: 'cyber-magenta' }
            ].map(filterOption => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterOption.key
                    ? `bg-${filterOption.color} text-cyber-dark shadow-cyber-glow`
                    : `border border-${filterOption.color}/30 text-${filterOption.color} hover:bg-${filterOption.color}/10`
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="cyber-card p-6 animate-pulse">
                  <div className="h-48 bg-cyber-dark/50 rounded-lg mb-4"></div>
                  <div className="h-4 bg-cyber-dark/50 rounded mb-2"></div>
                  <div className="h-3 bg-cyber-dark/30 rounded mb-4"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 w-16 bg-cyber-dark/30 rounded-full"></div>
                    <div className="h-6 w-16 bg-cyber-dark/30 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRepos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">
                Aucun projet trouvé pour cette catégorie
              </div>
            </div>
          ) : (
            <>
              {/* Message pour différencier les sections si "tous" est sélectionné */}
              {filter === 'all' && (
                <div className="space-y-16">
                  {/* Section Projets Personnels */}
                  {personalRepos.length > 0 && (
                    <div>
                      <h2 className="font-cyber-title text-2xl font-bold text-cyber-yellow mb-8 text-center">
                        Projets Personnels
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {personalRepos.map(repo => (
                          <GitHubProjectCard 
                            key={repo.id} 
                            repo={repo} 
                            category="personal"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Section Projets Scolaires */}
                  {schoolRepos.length > 0 && (
                    <div>
                      <h2 className="font-cyber-title text-2xl font-bold text-cyber-magenta mb-8 text-center">
                        Projets Scolaires
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {schoolRepos.map(repo => (
                          <GitHubProjectCard 
                            key={repo.id} 
                            repo={repo} 
                            category="school"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Grille simple pour les filtres spécifiques */}
              {filter !== 'all' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRepos.map(repo => (
                    <GitHubProjectCard 
                      key={repo.id} 
                      repo={repo} 
                      category={categorizeRepo(repo.name) as any}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cyber-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cyber-title text-2xl font-bold text-white mb-6">
            Intéressé par mon travail ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ces projets ne représentent qu'une partie de mon parcours. 
            Chaque ligne de code est une opportunité d'apprendre et de créer quelque chose d'unique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Axo34080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-cyber-cyan text-cyber-dark font-semibold rounded-lg hover:bg-white transition-all duration-300 shadow-cyber-glow"
            >
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Voir tout mon GitHub
            </a>
            
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300"
            >
              Discutons de vos projets
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}