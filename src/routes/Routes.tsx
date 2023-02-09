import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import HomePage from '../../src/pages/HomePage';
import Layout from '../layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
    </Route>,
  ),
);

export default router;
