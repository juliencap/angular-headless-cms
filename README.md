# Angular Headless CMS

🔗 Demo : https://angular-headless-cms-one.vercel.app/

Mini projet Angular 21 consommant une API WordPress headless.

Objectif : explorer des patterns modernes Angular (standalone, interceptor, signals) dans un contexte proche d’une application front réelle.

---

## 🚀 Stack technique

- Angular 21 (standalone components)
- Angular Router
- HttpClient + functional interceptor
- Signals (gestion d’état simple)
- SCSS

---

## ✨ Fonctionnalités

- Liste d’actualités depuis une API WordPress
- Page détail d’une actualité
- Intégration d’un calendrier (HTML externe)
- Gestion globale des erreurs HTTP via interceptor
- Affichage des erreurs via une bannière UI

---

## 🧠 Concepts Angular utilisés

- Standalone components
- Routing Angular
- Services pour accès API
- `HttpInterceptorFn` pour centraliser les erreurs
- Signals pour gérer un état global simple (error state)
- Injection avec `inject()`

---

## ⚙️ Lancer le projet

```bash
npm install
ng serve
```
