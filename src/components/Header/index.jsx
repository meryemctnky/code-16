import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='hero d-flex align-items-center justify-content-center vh-100 zoom-in'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 img-fluid fade-up'>
            <h1 className='display-5 fw-bold lh-1 mb-3'>Smart City Solutions</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum turpis purus, et sodales est lobortis vel. Sed eu
              tempor nisl. Vestibulum sit amet tortor at libero pellentesque sodales. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <Link to='/about'>
              <button type='button' className='btn btn-primary text-white btn-lg px-4 me-2'>
                See More
              </button>
            </Link>
            <Link to='/contact'>
              <button type='button' className='btn btn-outline-primary btn-lg px-4'>
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
