import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import './index.less';
import App from './App';

render(<div>{App}</div>, document.getElementById('app'));
