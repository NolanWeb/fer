################################
# 1️⃣ BUILD STAGE (Vite build)
################################
FROM node:16 AS build

# 🔑 Build-time variables (OBLIGATOIRE pour Vite)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Dossier de travail
WORKDIR /usr/src/app

# Dépendances
COPY package*.json ./
RUN npm install

# Code source
COPY . .

# 🔍 Debug temporaire (optionnel, tu peux enlever après validation)
RUN echo "VITE_API_URL AT BUILD = $VITE_API_URL"

# Build Vite
RUN npm run build


################################
# 2️⃣ RUNTIME STAGE (serve static)
################################
FROM node:16 AS runtime

WORKDIR /usr/src/app

# Copier uniquement ce qui est nécessaire
COPY --from=build /usr/src/app/dist ./dist

# Installer serve (léger, stable)
RUN npm install -g serve

# Port exposé (CapRover détecte)
EXPOSE 5000

# Lancer le front
CMD ["serve", "-s", "dist", "-l", "5000"]
