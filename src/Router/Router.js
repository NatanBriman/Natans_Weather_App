import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function Router({ routes }) {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/current' />} />
      <Route path='*' element={<Navigate to='/special' />} />

      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
