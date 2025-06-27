# Demo Express API (TF-GOS-FQ25L003)

Une API backend simple basée sur Express.js avec Docker et Node.js.

## 🚀 Prérequis

- Git
- Docker & Docker Compose
- Node.js (v14+) et npm

---

## 🔧 Installation & déploiement

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/phil-bstorm/Demo-Express-API-TF-GOS-FQ25L003.git
   cd Demo-Express-API-TF-GOS-FQ25L003
   ```

2. **Lancer docker Compose**

   ```bash
   cd docker
   docker-compose -p demo-express-api up -d
   ```

3. **Installer les dépendances**

   ```bash
   cd ../
   npm install
   ```

4. **Lancer l'application**

Lancer l'application en mode développement avec Nodemon:

```bash
 npm run dev
```

5. **Accéder à l'API**
   Ouvrez votre navigateur et accédez à [http://localhost:8000/api](http://localhost:8000/api) pour voir l'API en action.
