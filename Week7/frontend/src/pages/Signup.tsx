import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { validateSignup, type SignupValues, type SignupErrors } from "../utils/validate";

const Signup = () => {
  const [values, setValues] = useState<SignupValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<SignupErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [success, setSuccess] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;   // the input's name attribute and its text

    setValues(prev => ({
      ...prev,
      [name]: value,
    }));    // update just that one field
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    // "blur" -> the user left this field
    const { name } = e.target;

    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    setErrors(validateSignup(values));
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateSignup(values);

    setErrors(validationErrors);

    // mark every field as touched so all errors become visible
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setSuccess('Signup form submitted successfully!');
      console.log('Signup values:', values);
    } else {
      setSuccess('');
    }
  };

  return (
    <div>
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit} noValidate >
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <p style={{ color: 'red' }} >{errors.name}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p style={{ color: 'red' }}>{errors.email}</p>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <p style={{ color: 'red' }}>{errors.password}</p>
          )}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit">Sign Up</button>

        {success && <p style={{ color: 'green' }}>{success}</p> }
      </form>
    </div>
  );
};

export default Signup;