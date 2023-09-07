import { useFormik } from 'formik';
import ContactToast from './ContactToast';
import { contactSchema } from '../../helpers/validations';
import { sendContactForm } from '../../services';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { setStatus }) => {
      try {
        const response = await sendContactForm(values);
        console.log(response);

        if (response === 'Successful') {
          setStatus('success');
        } else {
          setStatus('error');
          console.log('Error:', response);
        }
      } catch (error) {
        setStatus('error');
        console.error('Error:', error);
      }
    },
  });

  return (
    <form className='needs-validation' onSubmit={formik.handleSubmit}>
      <div className='row g-3'>
        <div className='col-12'>
          <input
            type='text'
            className={`form-control fw-light ${formik.errors.name && formik.touched.name ? 'is-invalid' : ''}`}
            name='name'
            placeholder='Name'
            {...formik.getFieldProps('name')}
          />
          {formik.errors.name && formik.touched.name && <div className='invalid-feedback'>{formik.errors.name}</div>}
        </div>
        <div className='col-12'>
          <input
            type='email'
            className={`form-control fw-light ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
            name='email'
            placeholder='Email'
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && formik.touched.email && <div className='invalid-feedback'>{formik.errors.email}</div>}
        </div>
        <div className='col-12'>
          <textarea
            className={`form-control contact-textarea fw-light ${formik.errors.message && formik.touched.message ? 'is-invalid' : ''}`}
            name='message'
            placeholder='Message'
            {...formik.getFieldProps('message')}
          />
          {formik.errors.message && formik.touched.message && <div className='invalid-feedback'>{formik.errors.message}</div>}
        </div>
      </div>
      <div className='col-12 d-flex justify-content-center align-items-center mt-3'>
        <button className='btn btn-success text-white rounded-pill py-2 px-4' type='submit'>
          Send Message
        </button>
      </div>
      {formik.status === 'success' && <ContactToast message='Form submitted successfully!' onClose={formik.resetForm} />}
      {formik.status === 'error' && (
        <ContactToast message='An error occurred while submitting the form. Please try again later.' onClose={formik.resetForm} />
      )}
    </form>
  );
};

export default ContactForm;
