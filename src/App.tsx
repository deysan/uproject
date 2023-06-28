import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>

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
