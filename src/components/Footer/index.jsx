import { Link } from 'react-router-dom';
import { navLinks, footerLinks } from '../../constants';

const Footer = () => {
  return (
    <footer className='py-3 border-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 mb-3'>
            <div className='col-md-8'>
              <h5 className='fw-bold'>About Us</h5>
              <p className='fw-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus earum, exercitationem beatae tempora magnam.
              </p>
            </div>
          </div>

          <div className='col-md-3 mb-3'>
            <h5 className='fw-bold'>Quick Links</h5>
            <ul className='nav flex-column'>
              {navLinks.map((link, index) => (
                <li className='nav-item mb-3' key={index}>
                  <Link to={link.path} className='nav-link p-0'>
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-md-3 mb-3'>
            <h5 className='fw-bold'>Follow Us</h5>
            <ul className='nav flex-column'>
              {footerLinks.map((link, index) => (
                <li className='nav-item mb-3' key={index}>
                  <Link to={link.path} className='nav-link p-0'>
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-md-3 mb-3'>
            <h5 className='fw-bold'>Stay Connected</h5>
            <p className='fw-light'>Subscribe to our newsletter for updates on Smart City developments and innovations.</p>
            <div className='d-flex flex-column w-100 gap-2'>
              <label htmlFor='newsletter' className='visually-hidden'>
                Email address
              </label>
              <input id='newsletter' type='text' className='form-control' placeholder='Your Email' />
              <button className='btn btn-primary' type='button'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
