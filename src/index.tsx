import './styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import router from './routes/Routes';

const rootElement = document.getElementById('root');

render(<RouterProvider router={router} />, rootElement);
