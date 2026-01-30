
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
    'index.csr.html': {size: 6246, hash: 'a85966abfbf7245b26f3489b1864518bec1f9d69f09cf47f7a279becc99bf886', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1513, hash: 'c219588502ab038b566e1499868392b48c6ae079de9aaadf26114af5ca79c1ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 101642, hash: '7edef533d9c20eeb1f102b2489ae8e0f07c8b1a843de3cecbe2766d80aea2c6f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PY5GYWFC.css': {size: 343044, hash: 'up0jQ0Qwg+M', text: () => import('./assets-chunks/styles-PY5GYWFC_css.mjs').then(m => m.default)}
  },
};
