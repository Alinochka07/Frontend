import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}
