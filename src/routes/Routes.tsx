import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import FindProperty from '../../src/components/FindProperty';
import HomePage from '../../src/pages/HomePage';

import PropertyDetailsPage from '../../src/pages/PropertyDeatilsPage';

import NotFound from '../components/NotFound';

import Layout from '../layout/Layout';
import AgentsPage from '../pages/AgentsPage';

const router = createBrowserRouter(
  createRoutesFromElements(

    <>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/property/:propertyId" element={<PropertyDetailsPage />} />
        <Route path="/property" element={<FindProperty />} />,
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export default router;
