# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Setup
Please ensure nodejs is installed following the link [nodejs](https://nodejs.org/en). If you already have nodejs installed, you can go ahead to start the front-end server by using the following command

Download Libraries

```bash
npm install
```

And run front-end server.

```bash
npm run dev
```

To run the server at a specific port and expose it, use the following command:

```bash
npm run dev -- --host --port 3000
```

This will ensure it exposes port 3000. If any port is specified after that flag, it will use the specified port instead.
