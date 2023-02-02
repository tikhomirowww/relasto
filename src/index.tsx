import React from 'react';
import { render } from 'react-dom';

import './styles/app.scss';
import App from './App';

const rootElement = document.getElementById('root');

render(<App />, rootElement);
