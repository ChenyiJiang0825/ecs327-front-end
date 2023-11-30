# ECS 327 Front-end

## Project setup

- Install [Node.js](https://nodejs.org/en/) 20.10.0 (Latest LTS)

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

## Usage

```bash
git clone https://github.com/element-plus/element-plus-vite-starter
cd element-plus-vite-starter
npm i
npm run dev
```

### Custom theme

See `src/styles/element/index.scss`.


### Import models from backend

```bash
npx openapi-typescript http://localhost:8000/openapi.json --output ./src/api/models.ts
```