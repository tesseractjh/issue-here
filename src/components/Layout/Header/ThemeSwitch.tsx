import { useRecoilState } from 'recoil';
import { themeState } from '@recoil/theme/atoms';
import ToggleSwitch from '@components/common/Input/ToggleSwitch';
import { ReactComponent as MoonIcon } from '@assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '@assets/icons/sun.svg';

function SwitchTheme() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <ToggleSwitch
      checked={theme}
      setChecked={setTheme}
      checkedContent={<MoonIcon />}
      uncheckedContent={<SunIcon />}
    />
  );
}

export default SwitchTheme;
