import React, { useState } from "react";
import styles from "../assets/css/Enquiry.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Enquiry = ({ onClose }) => {
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
  });

  const navigate = useNavigate();
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

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // - Must be 10 digits
    // - Must start with 6, 7, 8, or 9
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian mobile number";
    }

    // Email Validation (proper RFC-like pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // parse first

      if (!res.ok || !data.success) {
        throw new Error("Failed to send enquiry");
      }

      //  Optional: reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      //  Close popup (important UX)
      onClose();
      alert("Message sent successfully");
      // Redirect to home AFTER success
      navigate("/", { replace: true });

    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;