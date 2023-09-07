import signup from '../assets/Signup-bro.png';
import { Register } from '../components';

const Signup = () => {
  return (
    <main className='signup container'>
      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col zoom-in py-4'>
          <img src={signup} alt='' className='signup-img' />
        </div>
        <div className='col py-4'>
          <Register />
        </div>
      </div>
    </main>
  );
};

export default Signup;
