import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signupForm } from '../../../constants';
import { signupSchema } from '../../../helpers/validations';
import { sendRegisterForm } from '../../../services';
import AuthToast from '../../UI/AuthToast';
import { useAuth } from '../../../contexts';

const RegisterForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values, { setStatus, setErrors }) => {
      try {
        const response = await sendRegisterForm({
          email: values.email,
          password: values.password,
        });
        if (response.status === 200) {
          setStatus('success');
          login(response.data);
          navigate('/');
        } else {
          setErrors({ general: error.response.data.message });
          console.log('Error:', response);
        }
      } catch (error) {
        setErrors({ general: error.response.data.message });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {signupForm.map((field) => (
        <div className='form-floating mb-3' key={field.name}>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            className='form-control rounded-3'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field.name]}
          />
          <label htmlFor={field.name}>{field.label}</label>
          {formik.touched[field.name] && formik.errors[field.name] && (
            <small className='text-danger mt-1'>{formik.errors[field.name]}</small>
          )}
        </div>
      ))}
      <button className='w-100 mb-2 btn btn-lg rounded-3 btn-success text-light' type='submit'>
        Sign up
      </button>
      <small className='text-body-secondary'>By clicking Sign up, you agree to the terms of use.</small>
      <hr className='my-4' />
      Already have an account? <Link to='/signin'>Sign in</Link>
      {formik.status === 'success' && <AuthToast message='Registration successfully completed' onClose={formik.resetForm} success />}
      {formik.errors.general && <AuthToast message={formik.errors.general} onClose={formik.resetForm} />}
    </form>
  );
};

export default RegisterForm;
