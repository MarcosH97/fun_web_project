
export default {
  basePath: 'https://MarcosH97.github.io/fun_web_project',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
