# 🥗 NutriTrack Ultra — Con Firebase Realtime Database

App de nutrición con AI y sincronización en tiempo real entre dispositivos.

---

## 🔥 Qué cambió: Firebase Realtime Database

Los datos ya **no se guardan en el teléfono** (localStorage).  
Ahora se guardan en la nube de Firebase y **cualquier dispositivo ve los cambios al instante**.

**Casos de uso desbloqueados:**
- El nutricionista asigna una dieta → el paciente la ve en segundos sin recargar
- El paciente marca una comida → el nutricionista ve el progreso en tiempo real
- Funciona como APK en Android porque los datos viven en internet

---

## 🚀 Paso 1: Crear proyecto Firebase (5 minutos, gratis)

1. Ve a https://console.firebase.google.com
2. Clic en **"Crear proyecto"** → dale un nombre (ej: `nutritrack-app`)
3. Desactiva Google Analytics (opcional) → **Crear proyecto**
4. En el menú lateral: **Compilación → Realtime Database**
5. Clic en **"Crear base de datos"**
   - Elige la región más cercana (ej: `us-central1`)
   - Selecciona **"Modo de prueba"** (permite leer/escribir sin login por 30 días)
6. En el menú lateral: **Configuración del proyecto** (ícono ⚙️)
7. Baja a **"Tus apps"** → clic en **`</>`** (Web)
8. Registra la app con cualquier nombre → te mostrará el **`firebaseConfig`**

---

## 🔧 Paso 2: Pegar tu configuración

Abre `public/index.html` y busca esta sección (línea ~30):

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

Reemplaza todos los valores con los de tu proyecto Firebase.

> ✅ Estas claves son seguras para el frontend (Firebase las valida por dominio/reglas)

---

## 📦 Paso 3: Instalar y correr

```bash
npm install
cp .env.example .env
# Edita .env y pon tu ANTHROPIC_API_KEY

npm start
# o para desarrollo:
npm run dev
```

Abre http://localhost:3000

---

## 🌐 Paso 4: Deploy en Railway o Render (gratis)

### Railway
1. Sube tu código a GitHub
2. Ve a https://railway.app → "New Project" → "Deploy from GitHub"
3. Selecciona tu repo
4. En Variables de entorno agrega: `ANTHROPIC_API_KEY=tu_clave`
5. Railway te da una URL pública tipo `https://nutritrack-xxx.railway.app`

### Render
1. Ve a https://render.com → "New Web Service"
2. Conecta tu repo de GitHub
3. Build command: `npm install`
4. Start command: `npm start`
5. Agrega la variable `ANTHROPIC_API_KEY`

---

## 📱 Paso 5: Instalar como APK en Android (PWA)

Con la app corriendo en Railway/Render:
1. Abre la URL en Chrome en tu Android
2. Toca el menú (⋮) → **"Añadir a pantalla de inicio"**
3. ¡Listo! Se instala como app nativa

Para un APK real puedes usar **PWABuilder** (https://www.pwabuilder.com):
1. Pon tu URL de Railway/Render
2. Descarga el APK generado
3. Instálalo en tu Android

---

## 🔒 Paso 6: Proteger la base de datos (cuando estés listo)

En Firebase Console → Realtime Database → **Reglas**, cambia a:

```json
{
  "rules": {
    "nutricionistas": {
      "$user": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    },
    "pacientes": {
      "$usuario": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
  }
}
```

Esto requiere agregar Firebase Authentication (siguiente paso de mejora).

---

## 📁 Estructura

```
nutritrack/
├── public/
│   └── index.html       # App frontend + Firebase SDK
├── server.js            # Servidor Express + proxy API Anthropic
├── package.json
├── .env.example
└── .gitignore
```
