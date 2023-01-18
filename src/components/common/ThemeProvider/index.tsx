import { useRecoilValue } from 'recoil';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { themeState } from '@recoil/theme';
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

function ThemeProvider({ children }: React.PropsWithChildren) {
  const isDarkTheme = useRecoilValue(themeState);

  return (
    <StyledComponentProvider theme={theme[isDarkTheme ? 'dark' : 'light']}>
      <GlobalStyle />
      {children}
    </StyledComponentProvider>
  );
}

export default ThemeProvider;
