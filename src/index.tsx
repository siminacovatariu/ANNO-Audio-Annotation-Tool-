require('normalize.css/normalize.css');
require('@blueprintjs/core/dist/blueprint.css');
require('./index.css');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement
);
