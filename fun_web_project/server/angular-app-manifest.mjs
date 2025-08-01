
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://MarcosH97.github.io/fun_web_project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/fun_web_project/login",
    "route": "/fun_web_project"
  },
  {
    "renderMode": 2,
    "route": "/fun_web_project/login"
  },
  {
    "renderMode": 2,
    "route": "/fun_web_project/birthday"
  },
  {
    "renderMode": 2,
    "route": "/fun_web_project/countdown"
  },
  {
    "renderMode": 2,
    "redirectTo": "/fun_web_project/login",
    "route": "/fun_web_project/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 540, hash: '1339d94a95be0aff3c766f7ea3236e85d708a70ad6afc7ec7acfd4b96cb48917', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: '596b3247138e15b9a4d6f9c3199203aa14d07495ced4062247377be5438fc1dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'birthday/index.html': {size: 6569, hash: '31c42ef0f39f3dffef8fcdc45812eead247979d130ff9939da3a0d5371a4593b', text: () => import('./assets-chunks/birthday_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6569, hash: '31c42ef0f39f3dffef8fcdc45812eead247979d130ff9939da3a0d5371a4593b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'countdown/index.html': {size: 6569, hash: '31c42ef0f39f3dffef8fcdc45812eead247979d130ff9939da3a0d5371a4593b', text: () => import('./assets-chunks/countdown_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
