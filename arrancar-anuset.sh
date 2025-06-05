#!/bin/bash

echo "🌀 Iniciando ritual de arranque de Anuset89..."

# Navegar al directorio raíz del proyecto
cd /home/saze/Anuset89 || {
  echo "❌ No se encontró el directorio /home/saze/Anuset89"
  exit 1
}

# Construir imagen del frontend (si aplica)
if [ -d "frontend" ]; then
  echo "⚙️ Construyendo imagen de frontend..."
  docker build -t anuset89-frontend ./frontend || {
    echo "❌ Error al construir el frontend"
    exit 1
  }
fi

# Levantar todos los contenedores
echo "🚀 Levantando servicios con Docker Compose..."
docker-compose up -d --build || {
  echo "❌ Error al levantar los servicios"
  exit 1
}

echo "✅ Anuset89 está corriendo en http://localhost:3000 o según proxy"
