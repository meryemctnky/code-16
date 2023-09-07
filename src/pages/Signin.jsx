import { Login } from '../components';

const Signin = () => {
  return (
    <main className='signin container'>
      <div className='row'>
        <div className='col ms-auto py-3 d-flex flex-column align-items-center'>
          <Login />
        </div>
      </div>
    </main>
  );
};

export default Signin;
