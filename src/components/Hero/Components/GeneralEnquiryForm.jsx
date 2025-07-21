import React, { useState } from 'react';

const GeneralEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    organization: '',
    program: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Only letters and spaces allowed';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required';
    }

    if (!formData.program) {
      newErrors.program = 'Please select a program';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    } else {
      setIsSubmitting(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent invalid input in name field
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='px-md-0 px-2'>
      <form
        action="https://unboundr.com/form-handler/GeneralEnquirySubmission.php"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div className="row d-flex justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
            {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="org">Organization / College Name</label>
          <input
            type="text"
            id="org"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />
          {errors.organization && <p style={styles.error}>{errors.organization}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="program">Program of Interest</label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Program --</option>
            <option value="Unboundr-X">Unboundr X</option>
            <option value="Unboundr-Pro">Unboundr Pro</option>
            <option value="Unboundr-Elevate">Unboundr Elevate</option>
            <option value="Unboundr-Camp">Unboundr Camp</option>
            <option value="Custom">Custom</option>
          </select>
          {errors.program && <p style={styles.error}>{errors.program}</p>}
        </div>

        <button
          type="submit"
          style={{
            fontFamily: "'poppins',sans-serif",
            position: 'relative',
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>
              <span
                className="loader"
                style={{
                  display: 'inline-block',
                  width: '14px',
                  height: '14px',
                  border: '2px solid #fff',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  marginRight: '8px',
                  animation: 'spin 1s linear infinite',
                }}
              ></span>
              Submitting...
            </span>
          ) : (
            'Submit'
          )}
        </button>
      </form>

      {/* Loader CSS */}
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
};

export default GeneralEnquiryForm;
    