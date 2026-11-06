import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { contactSchema } from '../utils/contactSchema';

interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting },
  } = useForm<ContactValues> ({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactValues) => {
    console.log('Contact form submitted:', data);

    alert('Message submitted successfully!');

    reset();
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input type="text" {...register('name')} />
          {errors.name && (
            <p style={{ color: 'red' }}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Subject:</label>
          <input type="text" {...register('subject')} />
          {errors.subject && (
            <p style={{ color: 'red' }}>{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label>Message:</label>
          <textarea {...register('message')} />
          {errors.message && (
            <p style={{ color: 'red' }}>{errors.message.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};  

export default ContactForm;