# Portfolio - Marc Villain

Portfolio personnel développé avec Next.js, présentant mes compétences en développement web et mes projets.

## 🚀 Accès

**URL de production :** [À compléter lors du déploiement]

## 📋 Fonctionnalités

- **Page d'accueil** avec présentation et animations
- **À propos** détaillant mon parcours et compétences
- **Projets** avec intégration automatique de l'API GitHub
- **Contact** via redirection LinkedIn
- **Design responsive** adapté à tous les écrans

## 🛠 Technologies utilisées

- **Framework :** Next.js 14
- **Styling :** Tailwind CSS
- **TypeScript** pour le typage
- **API GitHub** pour la récupération automatique des projets
- **Déploiement :** Vercel

## 📁 Structure du projet

```
src/
├── app/
│   ├── about/          # Page à propos
│   ├── contact/        # Page contact
│   ├── projects/       # Page projets
│   └── page.tsx        # Page d'accueil
├── components/
│   ├── Header.tsx      # Navigation principale
│   ├── Footer.tsx      # Pied de page
│   └── ...             # Autres composants
└── hooks/
    └── useGitHubRepos.ts # Hook pour l'API GitHub
```

## ⚡ Installation et développement

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd portfolio-nextjs

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🔧 Configuration

### API GitHub
Le portfolio récupère automatiquement les projets depuis GitHub. Pour modifier le nom d'utilisateur, éditez le fichier `src/hooks/useGitHubRepos.ts`.

### Personnalisation
- **Informations personnelles :** Modifier les fichiers dans `src/app/`
- **Styles :** Configuration Tailwind dans `tailwind.config.js`
- **Couleurs du thème :** Personnalisables via les variables CSS

## 📱 Responsive Design

Le portfolio est optimisé pour :
- Desktop (1024px+)
- Tablette (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Déploiement

Le projet est configuré pour un déploiement sur Vercel :

```bash
# Build de production
npm run build

# Démarrer en production
npm run start
```

## 📞 Contact

**LinkedIn :** [Marc Villain](https://www.linkedin.com/in/mv1995)
**GitHub :** [Axo34080](https://github.com/Axo34080)

---

© 2024 Marc Villain - Développeur Full-Stack