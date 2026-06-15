# Portafolio Web - Victor Raul Torreblanca Franco

Portafolio profesional creado con Angular 21, componentes standalone, rutas y SCSS. Es un proyecto solo frontend, sin backend, listo para publicar en GitHub Pages, Netlify o Vercel.

## Requisitos

- Node.js 20 o superior
- npm
- Angular CLI, instalado por dependencia local del proyecto

## Instalacion

```bash
npm install
```

## Ejecutar en desarrollo

```bash
ng serve
```

Tambien puedes usar:

```bash
npm start
```

Luego abre:

```text
http://localhost:4200
```

## Compilar para produccion

```bash
ng build
```

La salida se genera en:

```text
dist/victor-torreblanca-portfolio
```

## Estructura principal

```text
src/app/core
src/app/shared
src/app/features/home
src/app/features/projects
src/app/features/about
src/app/features/contact
src/assets/cv
src/assets/images
```

## Personalizacion rapida

- Edita datos personales, enlaces, proyectos y tecnologias en `src/app/core/data/portfolio.data.ts`.
- Reemplaza el placeholder visual en `src/assets/images/profile-placeholder.svg` por una foto personal optimizada.
- Coloca el CV en `src/assets/cv/victor-torreblanca-cv.pdf`.
- Actualiza el correo placeholder antes de publicar.
- Reemplaza los enlaces `#` de proyectos o badges cuando tengas repositorios, demos o certificados publicos.

## Despliegue

### Netlify o Vercel

1. Conecta el repositorio.
2. Usa `npm install` como instalacion.
3. Usa `npm run build` como comando de build.
4. Publica la carpeta `dist/victor-torreblanca-portfolio/browser` si la plataforma la solicita.

### GitHub Pages

Compila el proyecto y publica el contenido generado en `dist/victor-torreblanca-portfolio/browser`. Si publicas bajo un subdirectorio, configura el `base href` correspondiente durante el build.
