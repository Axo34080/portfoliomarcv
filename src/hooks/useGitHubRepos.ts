'use client'
import { useState, useEffect } from 'react'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  languages_url: string
  stargazers_count: number
  forks_count: number
  updated_at: string
  created_at: string
  topics: string[]
}

interface UseGitHubReposReturn {
  repos: GitHubRepo[]
  loading: boolean
  error: string | null
}

export const useGitHubRepos = (username: string = 'Axo34080'): UseGitHubReposReturn => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Ajoutez un timestamp pour bypasser le cache
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50&_t=${Date.now()}`)
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des repositories')
        }
        
        const data: GitHubRepo[] = await response.json()
        
        // Filtrer les repos importants (exclure les forks et repos vides)
        const filteredRepos = data.filter(repo => 
          !repo.name.includes(username.toLowerCase()) && // Exclure les repos de profil
          repo.description && // Avoir une description
          !repo.name.includes('config') && // Exclure les configs
          !repo.name.includes('portfolio') && // EXCLUT si contient "portfolio"
          repo.name !== username // Exclure le repo du username
        )
        
        setRepos(filteredRepos.slice(0, 10)) // Limiter à 10 repos
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  return { repos, loading, error }
}