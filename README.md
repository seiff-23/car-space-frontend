# Car Space — Frontend

Interface web pour parcourir et gérer des annonces automobiles. Ce dépôt contient le frontend ; l'API est disponible dans [car-space-backend](https://github.com/seiff-23/car-space-backend).

## Fonctionnalités présentes dans le code

- Pages marketplace et détail d'une annonce.
- Actions d'ajout, de modification et de suppression des annonces.
- Pages de connexion, d'inscription et de profil.
- État de l'application géré avec Redux et Redux Thunk.
- Notifications et états de chargement.

## Technologies

React 19, JavaScript, Vite, React Router, Redux, Axios, Tailwind CSS et Ant Design.

## Démarrer le frontend

Avec Node.js et npm installés :

```bash
git clone https://github.com/seiff-23/car-space-frontend.git
cd car-space-frontend
npm install
npm run dev
```

Vite est configuré sur le port **3005** : ouvrez http://localhost:3005. Si ce port est occupé, vérifiez l'adresse affichée par Vite.

## Connecter l'API

Le fichier `vite.config.js` redirige les requêtes `/api` vers **http://localhost:5000** pendant le développement.

Démarrez séparément le [backend](https://github.com/seiff-23/car-space-backend), avec sa connexion MongoDB configurée. Pour correspondre à la configuration locale du frontend, configurez `PORT=5000` et `PORT_VITE=3005` dans l'environnement du backend.

Les actions automobiles utilisent les routes sous `/api/cars`.

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Compilation de production |
| `npm run lint` | Analyse ESLint |
| `npm run preview` | Prévisualisation du build |

Le proxy de développement Vite ne configure pas les appels API en production. Le déploiement doit prévoir le routage de `/api` vers le backend.

## Structure

- `src/pages/` : pages et parcours utilisateur.
- `src/components/` : composants de l'interface.
- `src/JS/Actions/` : appels API et actions Redux.
- `src/JS/Reducers/` : état Redux.
- `vite.config.js` : configuration Vite, port et proxy API.

## Démonstration

Aucun lien de démonstration n'est fourni dans ce README. Des captures d'écran et un lien de démo pourront compléter la présentation après vérification du déploiement.
