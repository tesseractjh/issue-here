import useScroll from '@hooks/useScroll';

function useHeader() {
  useScroll({
    height: 160,
    callback: (isScrolled) => {
      const root = document.getElementById('root');
      if (!root) {
        return;
      }
      if (isScrolled) {
        root.classList.add('header-fixed');
      } else {
        root.classList.remove('header-fixed');
      }
    }
  });
}

export default useHeader;
