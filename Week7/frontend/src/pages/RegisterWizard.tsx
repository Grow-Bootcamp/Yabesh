import { useState } from "react";

interface RegistrationData {
  fullName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  address: string;
}

const RegisterWizard = () => {
  // track the current step
  const [step, setStep] = useState(1);

  // store all registration information
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    username: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.email.trim()) {
        alert("Please enter your full name and email");
        return false;
      }
    }

    if (step === 2) {
      if (!formData.username.trim() || !formData.password.trim()) {
        alert ('Please enter your username and password');
        return false;
      }
    }

    if (step === 3) {
      if (!formData.phone.trim() || !formData.address.trim()) {
        alert('Please enter your phone number and address');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = () => {
    console.log('Registration Data:', formData);

    alert('Registration submitted successfully!');

    setStep(1);

    setFormData({
      fullName: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      address: '',
    });
  };

  return (
    <div>
      <h1>Registration Wizard</h1>

      <h2>Step {step} of 4</h2>

      {step === 1 && (
        <div>
          <h3>Personal Details</h3>

          <div>
            <label>Full Name:</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <button 
            onClick={() => {
              if (validateStep()) setStep(2);
            }}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Account Details</h3>

          <div>
            <label>Username:</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button onClick={() => setStep(1)}>
            Back
          </button>

          <button 
            onClick={() => {
              if (validateStep()) setStep(3);
            }}
          >
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Contact Details</h3>

          <div>
            <label>Phone:</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label>Address:</label>
            <textarea 
              name="address" 
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>

          <button onClick={() => setStep(2)}>
            Back
          </button>

          <button 
            onClick={() => {
              if (validateStep()) setStep(4);
            }}
          >
            Next
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>Review Your Information</h3>

          <h4>Personal Details</h4>
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>

          <h4>Account Details</h4>
          <p>Username: {formData.username}</p>
          <p>Password: {formData.password}</p>

          <h4>Contact Details</h4>
          <p>Phone: {formData.phone}</p>
          <p>Address: {formData.address}</p>

          <button onClick={() => setStep(3)}>
            Back
          </button>

          <button onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterWizard;