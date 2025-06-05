#!/bin/bash

echo "🔧 Iniciando Anuset89..."

# Verifica si /data existe, si lo necesitas
if [ ! -d "./data" ]; then
  echo "📁 Creando carpeta /data..."
  mkdir ./data
else
  echo "📁 Carpeta /data verificada."
fi

# Reconstrucción limpia SIN CACHÉ
echo "🚀 Ejecutando docker compose (limpio)..."
docker compose down --remove-orphans
docker compose build --no-cache
docker compose up -d

