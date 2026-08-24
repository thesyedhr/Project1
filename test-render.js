import React from 'react';
import { renderToString } from 'react-dom/server';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const App = require('./temp-app.cjs').App || require('./temp-app.cjs').default;
try {
  const html = renderToString(React.createElement(App));
  console.log('Successfully rendered App, length:', html.length);
} catch (e) {
  console.error('Error rendering App:', e);
}
