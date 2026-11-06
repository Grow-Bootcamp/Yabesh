import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),

    email: yup
      .string()
      .email('Please enter a valid email')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        'Email must include a valid domain extension'
      )
      .required('Email is required'),

    subject: yup
      .string()
      .required('Subject is required'),

    message: yup 
      .string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
});