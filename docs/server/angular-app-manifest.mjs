
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6246, hash: 'ee9bb901b44dbc9ffdcae0f448137783b7fc185fc3b4bffd4e5391b05751611a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1513, hash: 'd75d8025126dbcb34e8a51e66f06493e6c0d5dc34283a76ee92a766a283313cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 100712, hash: '7b6cf3d23d669db7d3201140339c78f90c10ec8327f68531ccc442ee9585cc0e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PY5GYWFC.css': {size: 343044, hash: 'up0jQ0Qwg+M', text: () => import('./assets-chunks/styles-PY5GYWFC_css.mjs').then(m => m.default)}
  },
};
