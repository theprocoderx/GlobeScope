import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../Contexts/ThemeContext';

// Sirf is ek mix component ko import kijiye
const SearchFilterControls = lazy(() => import('./SearchFilterControls'));

export default function Home() {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>GlobeScope | Country Explorer</title>
        <meta name='description' content='Explore countries around the world with GlobeScope.' />
      </Helmet>
      <main className={`${isDark ? 'dark' : ''} mx-auto w-full max-w-7xl`}>
        <Suspense fallback={<p>Loading Controls & Countries...</p>}>
          {/* Ek akela component sab handle kar lega */}
          <SearchFilterControls />
        </Suspense>
      </main>
    </>
  );
}
