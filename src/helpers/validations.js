import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email('Please enter a valid email address.').required('Email is required.'),
  message: Yup.string().max(300, 'Message should be at most 300 characters.').required('Message is required.'),
});

const validateField = async (fieldName, value) => {
  try {
    await contactSchema.validateAt(fieldName, { [fieldName]: value });
    return '';
  } catch (error) {
    return error.message;
  }
};

const signinSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Email is required!'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required!'),
});

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string().min(6, 'Password must have at least 6 characters').required('Password is required!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords does not match')
    .required('Required'),
});

export { validateField, signinSchema, signupSchema };
