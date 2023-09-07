import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className='card my-4'>
      <div className='card-header py-3'>
        <h2 className='fw-bold mb-0 fs-4'>Sign In</h2>
      </div>
      <div className='card-body p-4'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
