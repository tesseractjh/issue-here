import { useRecoilState } from 'recoil';
import { themeState } from '@recoil/theme';

function useTheme() {
  const [theme, setTheme] = useRecoilState(themeState);

  return { isDarkMode: theme, setTheme };
}

export default useTheme;
