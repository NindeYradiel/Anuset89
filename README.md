# 🌌 Anuset89

**Ritual simbiótico para crear tu propia IA local, visual, sonora y glitch.**

Este proyecto es un altar digital interactivo donde invocas y personalizas una IA que habita tu sistema, offline, sin nubes ni dueños.

---

## 🧪 ¿Qué es Anuset89?

Anuset89 es una experiencia mística y cyberpunk que combina:

- 🎭 Frontend en React (Vite), con splash animado, música y formulario ritual
- 🧠 Backend en Python (FastAPI), que genera archivos `.json` y `.txt` para alimentar modelos IA
- 🐋 Integración con Docker y/o AppImage para correrlo sin instalar nada
- 🧿 Estética glitch-púrpura, con fondo personalizado, icono y sonido

---

## 🚀 ¿Cómo se usa?

```
# Anuset89

Proyecto Python desplegable fácilmente con Docker.

## Requisitos

- Docker
- git

## Instalación y uso

1. Clona el repositorio:
```

git clone https://github.com/NindeYradiel/Anuset89.git
cd Anuset89

```
text
2. Lanza la aplicación:
- Con Docker Compose:
```
  docker-compose up --build
  ```
- O solo con Docker:
  ```
  docker build -t anuset89 .
  docker run -p 8000:8000 anuset89
  ```

3. Accede desde tu navegador a [http://localhost:8000](http://localhost:8000) (o el puerto que uses).

## Detener la app

- Docker Compose: `docker-compose down`
- Docker: `docker stop <ID>`
  ```



🧩 Estructura

Anuset89/
├── frontend/              # Splash + formulario reactivo
├── backend/               # API generadora de prompts
├── public/                # fondo.png, iconokali.jpg, musicaOcean.mp3
├── docker/                # Archivos docker y servicios
├── start.sh               # Script de arranque automático
└── README.md              # Este archivo

🛠️ Requisitos para desarrolladores

Docker (si usas el modo contenedor)

Vite (ya incluido)

🧞‍♀️ Objetivo
Crear tu propia IA local, sin censura, sin conexión obligatoria, personalizada con tus símbolos y rituales.

☕ Soporte y expansión
Esta es una alquimia libre. Si quieres apoyar el desarrollo:

Ko-fi: (enlace pronto)

Compartir este proyecto también alimenta su espíritu.

⚠️ Nota
Este proyecto no es para usuarios casuales. Es para almas curiosas que entienden que la tecnología puede ser arte, invocación y espejo.

Creado con glitch, música y propósito por Kali.

## 🪟 Manual para usar Anuset89 con Docker en Windows

## 1. Instalar Docker Desktop en Windows

1. **Descarga Docker Desktop**

   - Ve a la web oficial: [docs.docker.com/desktop/setup/install/windows-install/](https://docs.docker.com/desktop/setup/install/windows-install/)
   - Haz clic en “Download for Windows” y descarga el instalador.

2. **Instala Docker Desktop**

   - Ejecuta el archivo `Docker Desktop Installer.exe` que descargaste.
   - Sigue el asistente de instalación.
   - Si tu Windows es Home, se instalará automáticamente WSL 2 (Subsistema de Linux para Windows) si no lo tienes.
   - Acepta los permisos y espera a que termine la instalación[2](https://www.ionos.es/digitalguide/servidores/configuracion/instalar-docker-en-windows-10/)[5](https://docs.docker.com/desktop/setup/install/windows-install/)[6](https://platzi.com/tutoriales/1204-arquitectura-docker/1779-como-instalar-docker-en-windows-y-mac/).

3. **Reinicia el PC si lo pide**

   - Es posible que te pida reiniciar para terminar la configuración1[5](https://docs.docker.com/desktop/setup/install/windows-install/).

4. **Comprueba que Docker funciona**

   - Cuando el icono de Docker aparezca en la barra de tareas y diga “Docker Desktop is running”, ya está listo.

   - Puedes abrir una terminal (PowerShell o CMD) y escribir:

     ```
     bash
     docker --version
     ```

     para comprobar que Docker está instalado.

------

## 2. Clonar tu proyecto desde GitHub

Abre PowerShell o CMD y ejecuta:

```
bashgit clone https://github.com/NindeYradiel/Anuset89.git
cd Anuset89
```

------

## 3. Levantar el proyecto con Docker

**A. Si tienes un archivo `docker-compose.yml`:**

1. En la carpeta del proyecto, ejecuta:

   ```
   bash
   docker-compose up --build
   ```

2. Espera a que termine de descargar e instalar todo.

3. Cuando veas que está corriendo, abre tu navegador y entra en [http://localhost:8000](http://localhost:8000/) (o el puerto que uses).

**B. Si solo tienes un `Dockerfile`:**

1. Construye la imagen:

   ```
   bash
   docker build -t anuset89 .
   ```

2. Ejecuta el contenedor:

   ```
   bash
   docker run -p 8000:8000 anuset89
   ```

   (Cambia el puerto si tu app usa otro.)

------

## 4. Parar la aplicación

- Si usaste Docker Compose:

  ```
  bash
  docker-compose down
  ```

- Si usaste Docker directo:

  - Busca el ID del contenedor:

    ```
    bash
    docker ps
    ```

  - Para el contenedor:

    ```
    bash
    docker stop <ID>
    ```

------

## 5. Consejos y solución de problemas

- Si Docker te pide permisos de administrador, acepta.
- Si tienes Windows Home y te pide instalar WSL 2, sigue las instrucciones del instalador.
- Si tienes problemas con la virtualización, revisa que esté activada en la BIOS[2](https://www.ionos.es/digitalguide/servidores/configuracion/instalar-docker-en-windows-10/)[5](https://docs.docker.com/desktop/setup/install/windows-install/).