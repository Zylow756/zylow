import React, { useState, useEffect } from "react";
import styles from "../assets/css/Enquiry.module.css";
import { useNavigate } from "react-router-dom";

const Enquiry = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    company: "",
    projectType: "",
    timeline: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Select project type";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Select start time";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const API = import.meta.env.VITE_API_URL;
      const res = await fetch("/api/send-enquiry", {
  method: "POST",
  body: data,
});
      /*(`${API}/api/send-enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });*/

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("Failed");
      }

      //  reset correctly
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        company: "",
        projectType: "",
        timeline: ""
      });

      onClose();
      alert("Request sent successfully");
      navigate("/", { replace: true });

    } catch (err) {
      alert("Something went wrong ❌ " + err.message);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <span className={styles.close} onClick={onClose}>×</span>

        <h2>Tell Us About Your Business Project</h2>
        <p className={styles.subtitle}>
          Fill out the form and our team will get back to you within 24 hours
        </p>

        <form onSubmit={handleSubmit} className={styles.formGrid}>

          {/* Left */}
          <div className={styles.formGroup}>
            <label>Full Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Email ID*</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email ID"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number*</label>
            <input
              type="text"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Your Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>What Do You Want to Build*</label>
            <select name="projectType" value={formData.projectType} onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              <option>Website</option>
              <option>Web App</option>
              <option>E-commerce</option>
              <option>Mobile App</option>
            </select>
            {errors.projectType && <span className={styles.error}>{errors.projectType}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>When Do You Want to Start?*</label>
            <select name="timeline" value={formData.timeline} onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              <option>Immediately</option>
              <option>1-2 Weeks</option>
              <option>1 Month</option>
              <option>Later</option>
            </select>
            {errors.timeline && <span className={styles.error}>{errors.timeline}</span>}
          </div>

          {/* Full Width */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label>Project Description</label>
            <textarea
              name="message"
              placeholder="Briefly describe your business requirement..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <p className={styles.note}>
            Hiring or job enquiries are not accepted through this form
          </p>

          <button type="submit" className={styles.submitBtn}>
            Request Project Consultation
          </button>

        </form>
      </div>
    </div>
  );
};

export default Enquiry;