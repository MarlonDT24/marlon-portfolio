# 👨‍💻 Marlon Torres | Fullstack Developer Portfolio

Este repositorio aloja el código fuente de mi portafolio profesional. Diseñado no solo para mostrar mi trabajo, sino para demostrar dominio técnico sobre el ecosistema moderno de React y Next.js en 2025.

🔗 **Live Demo:** [https://marlon-portfolio.vercel.app](https://marlondev-portfolio.vercel.app/)

## ⚡ Tech Stack & Características

El proyecto está construido sobre una arquitectura escalable, utilizando las últimas versiones estables y experimentales del stack:

* **Core:** [Next.js 16](https://nextjs.org/) (App Router) & [React 19](https://react.dev/).
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Motor Oxide, variables CSS nativas y directiva `@theme`).
* **Lenguaje:** TypeScript en modo estricto para un tipado robusto.
* **Animaciones:** `motion` (Framer Motion) para transiciones de página, scroll-linked animations y micro-interacciones.
* **Formularios:** React Hook Form + Zod para validación de esquemas.
* **Email:** Integración con Resend API.

## 🛠️ Detalles de Ingeniería

### UX/UI Avanzada
* **Sticky Card Stacking:** Implementación personalizada en la sección de testimonios usando `useScroll` y `useTransform`.
* **Bento Grid Híbrido:** Layout responsivo que cambia de slider (móvil) a grid estático (desktop) en la sección de Skills.
* **Navegación Dock:** Barra de navegación flotante estilo macOS optimizada para pulgares en móvil.

### Seguridad y Performance
* **Honeypot Anti-Spam:** Implementación de campo trampa invisible en el formulario de contacto para filtrar bots sin necesidad de Captchas intrusivos.
* **Optimización de Recursos:** Carga diferida de partículas (`tsparticles`), fuentes optimizadas (`next/font`) y metadata dinámica para SEO.

## 🚀 Instalación y Despliegue

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/MarlonDT24/marlon-portfolio.git](https://github.com/MarlonDT24/marlon-portfolio.git)
    cd marlon-portfolio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env.local` y añade tu clave de API para el envío de correos:
    ```bash
    RESEND_API_KEY=re_tu_clave_aqui
    ```

4.  **Correr en local:**
    ```bash
    npm run dev
    ```

## 📂 Estructura del Proyecto

```text
/app          # App Router (Rutas, Layouts, API)
/components   # Componentes UI (Smart & Dumb components)
/data         # Datos estáticos separados de la lógica
/utils        # Utilidades y variantes de animación
