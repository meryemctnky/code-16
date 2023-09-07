import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className='card mt-1 mt-lg-4 fade-left'>
      <div className='card-header py-3'>
        <h2 className='fw-bold mb-0 fs-4'>Sign Up</h2>
      </div>
      <div className='card-body p-4'>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
