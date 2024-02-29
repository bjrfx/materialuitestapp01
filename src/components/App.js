import { ThemeProvider, useTheme } from '@mui/material/styles';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <br />
      <br />
      <br />
      Hello
    </ThemeProvider>
  );
}

export default App;
