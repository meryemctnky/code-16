import { BsCheckCircle } from 'react-icons/bs';
import { Slider } from '../components';

const About = () => {
  return (
    <main className='about container'>
      <div className='row py-3'>
        <div className='col-sm-6'>
          <h2 className='fw-bold text-uppercase mb-2 py-2 '>About Us</h2>
          <p className='fw-light lead'>
            Lorem ipsum dolor sit amet consectetur. Tempore autem quod esse reiciendis nesciunt quam corporis dignissimos, voluptatibus fuga
            fugit.
          </p>
          <p className='fw-light lead'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga optio quam ex ea officia ab nisi ducimus maxime magni.
          </p>
          <ul className='list-unstyled fw-light lead'>
            <li>
              <BsCheckCircle className='text-success' />
              <span className='mx-2'>Setup and installation takes less time</span>
            </li>
            <li>
              <BsCheckCircle className='text-success' />
              <span className='mx-2'>Professional and easy to use software</span>
            </li>
            <li>
              <BsCheckCircle className='text-success' />
              <span className='mx-2'>Perfect for any device with pixel-perfect design</span>
            </li>
            <li>
              <BsCheckCircle className='text-success' />
              <span className='mx-2'>Setup and installation too fast</span>
            </li>
          </ul>
        </div>
        <div className='col-sm-6 d-flex flex-column justify-content-center'>
          <Slider />
        </div>
      </div>
    </main>
  );
};

export default About;
