import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from './Contexts/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
