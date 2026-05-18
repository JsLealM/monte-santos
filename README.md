# La Mesa de los Santos — Documental Interactivo

Un documento interactivo sobre la geografía, historia, turismo y procesos de formalización en uno de los paisajes más singulares de los Andes orientales colombianos: **La Mesa de los Santos** (Santander, Colombia).

## 📖 Sobre el Proyecto

Este proyecto es un documental web construido con un diseño profundamente inspirado en el "Cuaderno de Campo" y el estilo editorial clásico de revistas como *The New Yorker*. Su objetivo es presentar información detallada y rigurosa sobre la región, priorizando la lectura estructurada, la jerarquía tipográfica y una experiencia de usuario inmersiva que evite el ruido visual y los componentes genéricos del diseño web tradicional.

**Características principales:**
- **Estética Editorial:** Diseño fundamentado en tipografías Serif elegantes para titulares y Sans-serif humanistas para los cuerpos de texto, emulando la precisión de la tinta impresa.
- **Sistema de Color Natural:** Paleta cromática construida mediante el espacio `oklch`, basada estrictamente en la arquitectura de bahareque, piedra caliza, madera expuesta y vegetación de páramo.
- **Micro-interacciones Premium:** Animaciones sutiles, transiciones fluidas y un uso inteligente del `mix-blend-mode` para fundir imágenes en el papel digital.
- **Estructura Documental:** Navegación por capítulos temáticos, desde el contexto histórico/geográfico, pasando por los desafíos del turismo formal, hasta infografías y fuentes de investigación directa.

## 🛠 Tecnologías Utilizadas

- **React 19:** Biblioteca principal para la arquitectura de vistas y estado (Hooks).
- **Vite:** Herramienta de construcción y empaquetado (build tool) para un entorno de desarrollo ultra-rápido.
- **CSS Vanilla (Custom Properties):** Sistema de diseño propio sin frameworks (ni Tailwind ni Bootstrap), lo que garantiza un control absoluto y escalable de la identidad visual.
- **Recharts:** (Dependencia) Utilizado para las representaciones gráficas de datos sobre formalización.

## 🚀 Instalación y Uso

Asegúrate de tener [Node.js](https://nodejs.org/) y tu gestor de paquetes preferido (ej. [pnpm](https://pnpm.io/)) instalado en tu sistema.

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Iniciar el servidor de desarrollo local:**
   ```bash
   pnpm run dev
   ```
   *El proyecto estará disponible localmente en `http://localhost:5173/`.*

3. **Construir para producción (Build):**
   ```bash
   pnpm run build
   ```

### ☁️ Despliegue en Vercel

Este proyecto está optimizado para ser desplegado instantáneamente en Vercel. 
Ya incluye el archivo de configuración `vercel.json` en la raíz para garantizar que el enrutamiento (routing) de Single Page Application (SPA) funcione sin generar errores 404.

1. Instala la CLI de Vercel (opcional): `npm i -g vercel`
2. En la terminal de tu proyecto, simplemente ejecuta:
   ```bash
   vercel
   ```
3. O si prefieres conectarlo vía GitHub:
   - Sube este repositorio a GitHub.
   - Ve a tu panel de Vercel y selecciona "Add New Project".
   - Importa tu repositorio. Vercel detectará automáticamente que es un proyecto **Vite** y configurará el comando de Build (`pnpm run build`) y el directorio de salida (`dist`).

## 🎨 Principios del Sistema de Diseño

El proyecto obedece reglas estrictas de diseño para preservar su identidad documental:
1. **Regla del Material (Material Rule):** Los colores y las texturas deben corresponder siempre a elementos físicos reales presentes en la Mesa de los Santos.
2. **Supremacía Tipográfica:** La separación de secciones se hace preferiblemente a través de líneas tipográficas (rules) de `1px` en lugar de bloques de color sólido.
3. **Prohibición de "Cajas Flotantes":** Se evita rotundamente el uso de tarjetas (cards) genéricas con sombras intensas, fondos oscuros descontextualizados o elementos que delaten su naturaleza de plantilla web genérica.

---
*Desarrollado y diseñado como un documento interactivo moderno en pro del territorio y su historia.*
