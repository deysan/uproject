import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';

export function App() {
  return (
    <div className="app">
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
