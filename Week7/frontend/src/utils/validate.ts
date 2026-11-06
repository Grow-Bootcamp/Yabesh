export interface SignupValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const validateSignup = (values: SignupValues): SignupErrors => {
  const errors: SignupErrors = {};

  // validate name
  if (!values.name.trim()) {
    errors.name = 'Name is required';
  } else if (values.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }

  // validate email
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (! /^\S+@\S+\.\S+$/ .test(values.email)) {
    errors.email = 'Please enter a valid email';
  }

  // validate password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = 'Password must be 8-16 characters long';
  } else if (! /[A-Z]/ .test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  } else if (! /[a-z]/ .test(values.password)) {
    errors.password = 'Password must contain at least one lowercase letter';
  } else if (! /[0-9]/ .test(values.password)) {
    errors.password = 'Password must contain at least one number';
  } else if (! /[^A-Za-z0-9]/ .test(values.password)) {
    errors.password = 'Password must contain at least one special character';
  }

  // validate confirm password
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;  // an empty object means everything is fine
};