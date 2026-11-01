<div align="center">

# Nova — Landing Page Moderne

**Projet de démonstration front-end · HTML · CSS · JavaScript natifs**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![No dependencies](https://img.shields.io/badge/dependencies-0-blue?style=flat-square)](#stack-technique)

[Démo en ligne](https://ton-utilisateur.github.io/modern-landing-demo/) · [Compétences](#compétences-démontrées) · [Installation](#installation-locale) · [Déploiement](#déploiement)

</div>

---

## Présentation

**Nova** est une landing page moderne construite **sans framework, sans build, sans dépendance** — uniquement avec HTML, CSS et JavaScript natifs.

Ce projet a été réalisé comme **démonstration technique** dans le but de présenter une maîtrise du front-end moderne dans un contexte volontairement contraint (zéro outil, zéro librairie). Il illustre concrètement ce qu'il est possible de produire avec les standards du web seuls.

**Ce que ce projet n'est pas** : un produit commercial, un SaaS fonctionnel, ou un template prêt pour la production. Le contenu (marque, prix, témoignages) est fictif, et le formulaire CTA ne collecte aucune donnée.

**Ce que ce projet est** : un exercice d'intégration complet, mesuré et documenté, avec des choix techniques assumés et des résultats vérifiables.

---

## Aperçu

*Une capture d'écran réelle sera ajoutée une fois la démo déployée sur GitHub Pages.*

---

## Contexte et objectifs

L'objectif de ce projet est double :

1. **Démontrer une maîtrise du CSS moderne** — variables, Grid, Flexbox, animations, `backdrop-filter`, `color-mix()`, `clamp()` — sans recourir à Tailwind ou à un préprocesseur.
2. **Démontrer une maîtrise du JavaScript natif** — `IntersectionObserver`, `localStorage`, `requestAnimationFrame`, gestion d'événements — sans jQuery ni librairie d'animation.

Ces deux objectifs répondent à une question technique courante : *"Peut-on produire une interface moderne et animée sans framework ?"* Ce projet apporte une réponse concrète et vérifiable.

---

## Compétences démontrées

### CSS moderne

| Compétence | Implémentation | Fichier |
|------------|----------------|---------|
| Design tokens (variables CSS) | Déclaration `:root` et thème alternatif | `style.css` |
| Dark mode persistant | Attribut `data-theme` + `localStorage` | `style.css` / `script.js` |
| Layout Grid & Flexbox | Grilles responsive avec `auto-fit` et `minmax()` | `style.css` |
| Animations `@keyframes` | Blobs flottants, barres animées, pulse d'état | `style.css` |
| Effets glassmorphism | `backdrop-filter: blur()` sur la navbar | `style.css` |
| Couleurs dynamiques | `color-mix()` pour la transparence calculée | `style.css` |
| Typographie fluide | `clamp()` sur tous les titres | `style.css` |
| Responsive sans média-query | Grilles fluides natives | `style.css` |
| Ancres fluides | `scroll-behavior` + `scroll-padding-top` | `style.css` |
| Transform 3D | Perspective sur le mockup navigateur | `style.css` |

### JavaScript natif (ES6+)

| Compétence | Implémentation | Fichier |
|------------|----------------|---------|
| Observation du viewport | `IntersectionObserver` pour reveal + déclenchement | `script.js` |
| Persistance d'état | `localStorage` pour le thème | `script.js` |
| Animation performante | `requestAnimationFrame` + easing cubique | `script.js` |
| Manipulation DOM | Menu mobile, toggle thème | `script.js` |
| Gestion d'événements | Scroll, clic, soumission | `script.js` |
| Timing haute précision | `performance.now()` pour les compteurs | `script.js` |

### Accessibilité

- Structure sémantique (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Attributs `aria-label` sur les boutons sans texte visible
- Navigation clavier fonctionnelle sur l'ensemble des interactions
- Contrastes de couleur conformes WCAG AA
- Attributs `alt` sur les images

### Qualité du code

- Séparation stricte des responsabilités (HTML / CSS / JS)
- Nommage cohérent (BEM simplifié : `.dash-stat`, `.dash-num`, `.dash-label`)
- Code commenté par sections fonctionnelles
- Aucune dette technique, aucun fichier mort

---

## Stack technique

| Catégorie | Détail |
|-----------|--------|
| **Langages** | HTML5, CSS3, JavaScript (ES6+) |
| **Dépendances** | Aucune |
| **Build** | Aucun |
| **Polices** | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| **Poids total** | ~30 Ko (HTML + CSS + JS) |

---

## Compatibilité

| Navigateur | Version minimale |
|------------|------------------|
| Chrome / Edge | 111 |
| Firefox | 113 |
| Safari | 16.4 |
| Opera | 97 |

> La fonction `color-mix()` (utilisée pour le fond de la navbar) requiert ces versions. Sur navigateur plus ancien, la navbar devient simplement opaque — aucune autre fonctionnalité n'est affectée.

---

## Installation locale

Aucune installation n'est nécessaire. Deux méthodes possibles :

**Méthode 1 — Ouverture directe**

Double-cliquer sur `index.html` ouvre la page dans le navigateur par défaut.

**Méthode 2 — Serveur local (recommandé)**

Un serveur local reproduit fidèlement l'environnement de GitHub Pages :

```bash
# Python 3
python3 -m http.server 8000

# Windows (si python3 n'est pas reconnu)
python -m http.server 8000