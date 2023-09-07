import { BiSun, BiMoon } from 'react-icons/bi';
import useTheme from '../../hooks/useTheme';

const ThemeToggle = () => {
  const [theme, handleTheme] = useTheme();
  return (
    <>
      <button className='btn btn-primary m-2 m-lg-0' onClick={() => handleTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'dark' ? <BiSun className='fs-3' /> : <BiMoon className='fs-3' />}
      </button>
    </>
  );
};

export default ThemeToggle;
