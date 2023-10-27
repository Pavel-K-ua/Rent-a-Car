import Layout from 'components/Layout/Layout';
import CatalogPage from 'pages/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { selectLoading } from 'redux/selectors';

const App = () => {
  // const loading = useSelector(selectLoading);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />;
        <Route path="catalog" element={<CatalogPage />} />;
        <Route path="favorites" element={<FavoritesPage />} />;
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
