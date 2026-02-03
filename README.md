# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project setup

This project contains a simple landing page for **Men Parfume** built with Vite (React).

Commands:

- Install: `npm install`
- Dev: `npm run dev` (opens at http://localhost:5173)
- Build: `npm run build`

Notes:
- The product list consumes data from Contentful (space `cm03r2ippb8q`) using the `contentful` library.
- The expected Content Type is `parfumes` and only the following fields are used: `name`, `description`, `price`, `category`, `image`, `featured`.
- CTA buttons open WhatsApp with a prefilled message to number `087778086123` (internationalized as `6287778086123`).

Styling uses a flat design and a brown palette with FontAwesome icons included.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
