import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../UI';
import { navLinks } from '../../constants';
import logo from '../../assets/logo.png';
import { useAuth } from '../../contexts';

const Navbar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate('/');

  const handleClick = async () => {
    logout(() => {
      navigate('/');
    });
  };

  return (
    <nav className='navbar navbar-expand-lg box-shadow position-relative'>
      <div className='container'>
        <Link to='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
          <img src={logo} alt='Logo' width='50' height='50' className='me-2' />
          <span className='text-success fw-bold fs-3'>SmartCity</span>
        </Link>
        <button
          className='navbar-toggler collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapsingNavbar'
          aria-controls='collapsingNavbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='navbar-collapse collapse justify-content-center' id='collapsingNavbar'>
          <ul className='navbar-nav ms-auto me-3'>
            {navLinks.map((link, index) => (
              <li className='nav-item' key={index}>
                <Link to={link.path} className='nav-link fs-5 fw-bold px-3'>
                  {link.display}
                </Link>
              </li>
            ))}
            {isLoggedIn ? (
              <li className='nav-item'>
                <div className='dropdown'>
                  <Link to='/signin' className='btn btn-outline-primary fs-5 fw-bold px-3 mx-2 dropdown-toggle' data-bs-toggle='dropdown'>
                    Profile
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='dropdown-item fw-bold'>{user.email}</li>
                    <li>
                      <Link to='/favorites' className='dropdown-item'>
                        Favorites
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='dropdown-item' onClick={handleClick}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <>
                <li className='nav-item'>
                  <Link to='/signin' className='btn btn-primary fs-5 fw-bold px-3 m-2 m-lg-0'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signup' className='btn btn-primary fs-5 fw-bold px-3 m-2 m-lg-0 ms-lg-3'>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
