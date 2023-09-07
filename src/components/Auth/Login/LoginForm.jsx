import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signinForm } from '../../../constants';
import { signinSchema } from '../../../helpers/validations';
import { fetchLogin } from '../../../services';
import { useAuth } from '../../../contexts/AuthContext';
import AuthToast from '../../UI/AuthToast';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: async (values, { setStatus, setErrors }) => {
      try {
        const response = await fetchLogin({
          email: values.email,
          password: values.password,
        });
        login(response);
        navigate('/');
      } catch (error) {
        setErrors({ general: error.response.data.message });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.errors.general && <small className='text-danger my-2'>{formik.errors.general}</small>}
      {signinForm.map((field) => (
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
        Sign in
      </button>
      <hr className='my-3' />
      Don't have an account yet? <Link to='/signup'>Sign up</Link>
      {formik.errors.general && <AuthToast message={formik.errors.general} onClose={formik.resetForm} />}
    </form>
  );
};

export default LoginForm;
