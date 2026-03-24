const express = require('express')
const fetch = require('node-fetch')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// ===== PROXY SEGURO PARA ANTHROPIC API =====
app.post('/api/claude', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'API Key no configurada en el servidor.' })

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: req.body.model || 'claude-sonnet-4-20250514',
        max_tokens: req.body.max_tokens || 1000,
        system: req.body.system,
        messages: req.body.messages
      })
    })
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error('Error al llamar Anthropic:', error)
    res.status(500).json({ error: 'Error al conectar con la API de AI.' })
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`✅ NutriTrack corriendo en http://localhost:${PORT}`)
})
