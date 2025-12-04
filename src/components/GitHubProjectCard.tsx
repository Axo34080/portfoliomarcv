'use client'
import { useState } from 'react'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
}

interface GitHubProjectCardProps {
  repo: GitHubRepo
  category?: 'featured' | 'personal' | 'school'
}

const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  React: '#61dafb',
  HTML: '#e34c26',
  CSS: '#1572b6',
  Python: '#3776ab',
  PHP: '#777bb4',
  Vue: '#4fc08d',
  'C#': '#239120',
}

export default function GitHubProjectCard({ repo, category = 'personal' }: GitHubProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short'
    })
  }

  const categoryColors = {
    featured: 'border-cyber-cyan/40 bg-cyber-cyan/5',
    personal: 'border-cyber-yellow/40 bg-cyber-yellow/5',
    school: 'border-cyber-magenta/40 bg-cyber-magenta/5'
  }

  const categoryTextColors = {
    featured: 'text-cyber-cyan',
    personal: 'text-cyber-yellow',
    school: 'text-cyber-magenta'
  }

  // Liens demo personnalisés pour vos projets
  const customDemoLinks: { [key: string]: string } = {
    'jack-cheat': 'https://vercel.com/axo34090s-projects/jack-cheat', // Ajout du lien demo pour Jack Cheat
    'Jack-Cheat': 'https://vercel.com/axo34090s-projects/jack-cheat', // Au cas où le nom serait différent
    // Les autres projets utilisent repo.homepage automatiquement
  }

  const getDemoLink = () => {
    return customDemoLinks[repo.name] || repo.homepage
  }

  return (
    // CARTE CLIQUABLE vers GitHub par défaut
    <a 
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block cyber-card p-6 cyber-glow-hover group h-full cursor-pointer ${categoryColors[category]}`}
    >
      {/* Preview du site ou placeholder */}
      <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-cyber-dark/50">
        {repo.homepage && !imageError ? (
          <iframe
            src={repo.homepage}
            className="w-full h-full border-0 scale-50 origin-top-left"
            style={{ width: '200%', height: '200%' }}
            onError={() => setImageError(true)}
            title={`Preview de ${repo.name}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyber-dark to-cyber-blue">
            <div className="text-center">
              <svg className="w-12 h-12 text-cyber-cyan/50 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <p className="text-cyber-cyan/70 text-sm">Repository GitHub</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Contenu */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`font-cyber-title text-lg font-bold ${categoryTextColors[category]} group-hover:text-white transition-colors`}>
            {repo.name.replace(/-/g, ' ')}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            {repo.stargazers_count > 0 && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {repo.forks_count}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {repo.description}
        </p>

        {/* Langage principal et topics */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            {repo.language && (
              <div className="flex items-center text-xs">
                <div 
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: languageColors[repo.language] || '#gray' }}
                ></div>
                <span className="text-gray-400">{repo.language}</span>
              </div>
            )}
            <span className="text-xs text-gray-500">
              Mis à jour {formatDate(repo.updated_at)}
            </span>
          </div>

          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {repo.topics.slice(0, 3).map((topic, index) => (
                <span 
                  key={index}
                  className={`px-2 py-1 bg-${category === 'featured' ? 'cyber-cyan' : category === 'personal' ? 'cyber-yellow' : 'cyber-magenta'}/10 text-${categoryTextColors[category].split('-')[1]} text-xs rounded-full border border-${category === 'featured' ? 'cyber-cyan' : category === 'personal' ? 'cyber-yellow' : 'cyber-magenta'}/30`}
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Liens - EMPÊCHER la propagation du clic pour les liens */}
        <div className="flex space-x-4 pt-4 mt-auto">
          <span className={`flex items-center space-x-2 ${categoryTextColors[category]} text-sm`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Voir le code</span>
          </span>
          
          {/* Bouton Demo séparé qui empêche la propagation */}
          {getDemoLink() && (
            <button 
              onClick={(e) => {
                e.stopPropagation()
                const demoLink = getDemoLink()
                if (demoLink) {
                  window.open(demoLink, '_blank')
                }
              }}
              className={`flex items-center space-x-2 ${categoryTextColors[category]} hover:text-white transition-colors text-sm z-10 relative cursor-pointer`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Démo</span>
            </button>
          )}
        </div>
      </div>
    </a>
  )
}