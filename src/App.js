import './App.css';
import NavigationBar from './components/NavigationBar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContextProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeContextProvider>
      <NavigationBar />
      <div className='bodyWrapper'>
        <Home />
      </div>
      <Contact />
    </ThemeContextProvider>
  );
}

export default App;
