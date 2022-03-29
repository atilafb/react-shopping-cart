import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Store from './components/Store'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
  );
}

export default App;
