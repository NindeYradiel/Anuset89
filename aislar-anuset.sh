#!/bin/bash

# Ruta origen (ajusta si no estás en el mismo nivel)
ORIG=~/Anuset89
DEST=~/Anuset89-test01

mkdir -p "$DEST/backend"
mkdir -p "$DEST/frontend/dist"

# Copiar backend esencial
cp "$ORIG/backend/"{Dockerfile,generator.py,main.py,utils.py,requirements.txt} "$DEST/backend/"

# Copiar frontend esencial
cp "$ORIG/frontend/Dockerfile" "$DEST/frontend/"
cp "$ORIG/frontend/nginx.conf" "$DEST/frontend/"
cp -r "$ORIG/frontend/dist" "$DEST/frontend/"

# Copiar docker-compose
cp "$ORIG/docker-compose.yml" "$DEST/"

