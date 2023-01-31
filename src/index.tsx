import React from 'react';
import { render } from 'react-dom';
import './components/Hero/Hero.module.scss'

import './styles/app.scss';
import App from './App';

const rootElement = document.getElementById('root');

render(<App />, rootElement);
