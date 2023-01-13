import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { queryClientConfig } from '@configs/reactQuery';
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';
import Home from '@pages/Home';

const queryClient = new QueryClient(queryClientConfig);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
