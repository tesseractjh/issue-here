import ToggleSwitch from '@components/common/Input/ToggleSwitch';
import { ReactComponent as MoonIcon } from '@assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '@assets/icons/sun.svg';
import useTheme from './hooks/useTheme';

function SwitchTheme() {
  const { isDarkMode, setTheme } = useTheme();

  return (
    <ToggleSwitch
      checked={isDarkMode}
      setChecked={setTheme}
      checkedContent={<MoonIcon />}
      uncheckedContent={<SunIcon />}
    />
  );
}

export default SwitchTheme;
