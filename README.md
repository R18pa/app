# 🥗 NutriTrack

App de nutrición con AI integrada para nutricionistas y pacientes.

## 🚀 Instalación y uso local

### 1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/nutritrack.git
cd nutritrack
```

### 2. Instala dependencias
```bash
npm install
```

### 3. Configura tu API Key
```bash
cp .env.example .env
```
Abre el archivo `.env` y reemplaza el valor de `ANTHROPIC_API_KEY` con tu clave real de [Anthropic](https://console.anthropic.com/).

### 4. Corre el servidor
```bash
# Producción
npm start

# Desarrollo (con auto-reload)
npm run dev
```

### 5. Abre en el navegador
```
http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
nutritrack/
├── public/
│   └── index.html       # App frontend completa
├── server.js            # Servidor Express + proxy API
├── package.json
├── .env.example         # Plantilla de variables de entorno
├── .env                 # ⚠️ NO subir a GitHub (está en .gitignore)
└── .gitignore
```

---

## 🌐 Deploy en producción

Puedes desplegarlo en cualquier servidor con Node.js:
- **Railway** — Conecta tu repo de GitHub y agrega `ANTHROPIC_API_KEY` en las variables de entorno
- **Render** — igual que Railway, gratis y fácil
- **VPS propio** — corre `npm start` y usa PM2 para mantenerlo vivo

> ⚠️ **Importante:** Nunca subas el archivo `.env` a GitHub. Usa siempre las variables de entorno del panel de tu proveedor.

---

## ✨ Funciones principales

- 👨‍⚕️ Login para nutricionistas y pacientes
- 🥗 Dieta semanal personalizada por paciente
- 📊 Dashboard de progreso y calorías (Premium)
- 🤖 Chat con Nutricionista AI (Estándar/Premium)
- 📈 Análisis de progreso con AI (Estándar/Premium)
- 🔥 Retos semanales con insignias
- 💳 Planes Básico, Estándar y Premium
