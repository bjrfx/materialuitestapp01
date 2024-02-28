import { ThemeProvider, useTheme } from '@mui/material/styles';
import Header from './ui/Header';
import basicTheme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
