import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phonenumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!formData.FirstName.trim()) {
      newErrors.FirstName = 'First Name is required';
    } else if (!nameRegex.test(formData.FirstName)) {
      newErrors.FirstName = 'Only letters and spaces allowed';
    }

    if (!formData.LastName.trim()) {
      newErrors.LastName = 'Last Name is required';
    } else if (!nameRegex.test(formData.LastName)) {
      newErrors.LastName = 'Only letters and spaces allowed';
    }

    if (!formData.Email.trim()) {
      newErrors.Email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      newErrors.Email = 'Invalid email format';
    }

    if (!formData.Phonenumber.trim()) {
      newErrors.Phonenumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.Phonenumber)) {
      newErrors.Phonenumber = 'Enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Block numbers and symbols for name fields
    if ((name === 'FirstName' || name === 'LastName') && /[^a-zA-Z\s]/.test(value)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault(); // prevent submission if validation fails
    } else {
      setIsSubmitting(true); // show loader
    }
  };

  return (
    <div>
      <form
        method="POST"
        action="https://unboundr.com/form-handler/ContactFormSubmission.php"
        className="form-box"
        onSubmit={handleSubmit}
      >
        <div className="container-block form-wrapper">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
              <input
                className="input"
                name="FirstName"
                placeholder="First Name"
                value={formData.FirstName}
                onChange={handleChange}
              />
              {errors.FirstName && <p style={styles.error}>{errors.FirstName}</p>}
            </div>

            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
              <input
                className="input"
                name="LastName"
                placeholder="Last Name"
                value={formData.LastName}
                onChange={handleChange}
              />
              {errors.LastName && <p style={styles.error}>{errors.LastName}</p>}
            </div>

            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial">
              <input
                className="input"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleChange}
              />
              {errors.Email && <p style={styles.error}>{errors.Email}</p>}
            </div>

            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <input
                className="input"
                name="Phonenumber"
                placeholder="Phone Number"
                value={formData.Phonenumber}
                onChange={handleChange}
              />
              {errors.Phonenumber && <p style={styles.error}>{errors.Phonenumber}</p>}
            </div>

            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
              <textarea
                name="message"
                className="textinput"
                placeholder="Type message here"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p style={styles.error}>{errors.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            style={{ fontFamily: "'Poppins', sans-serif", position: 'relative' }}
          >
            {isSubmitting ? (
              <span>
                <span style={styles.loader}></span> Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>

      {/* Loader animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  error: {
    color: 'red',
    fontSize: '0.85rem',
    marginTop: '4px',
  },
  loader: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    border: '2px solid #fff',
    borderTop: '2px solid transparent',
    borderRadius: '50%',
    marginRight: '8px',
    color: '#fff',
    animation: 'spin 1s linear infinite',
    verticalAlign: 'middle',
  },
};

export default ContactUsForm;