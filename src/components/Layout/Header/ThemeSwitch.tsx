import HiddenText from '@components/common/HiddenText';
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
      checkedContent={
        <>
          <MoonIcon />
          <HiddenText>다크 모드</HiddenText>
        </>
      }
      uncheckedContent={
        <>
          <SunIcon />
          <HiddenText>라이트 모드</HiddenText>
        </>
      }
    />
  );
}

export default SwitchTheme;
