import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/GlobalStyle';
import theme from './theme'
import Store from './components/Store'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Store />
    </ThemeProvider>
  );
}

export default App;
