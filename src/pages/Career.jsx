import React, { useState } from "react";
import styles from "../assets/css/Career.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Career = ({ onClose }) => {
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
        designation: "",
        resume: null,
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    // Handle input
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "resume") {
            setFormData({
                ...formData,
                resume: files[0], // 👈 store file
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
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

        // Designation select validation
        if (!formData.designation) {
            newErrors.designation = "Please select a designation";
        }

        // Resume validation
        if (!formData.resume) {
            newErrors.resume = "Resume is required";
        } else {
            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];

            if (!allowedTypes.includes(formData.resume.type)) {
                newErrors.resume = "Only PDF or DOC files allowed";
            }

            if (formData.resume.size > 2 * 1024 * 1024) {
                newErrors.resume = "File size must be less than 2MB";
            }
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

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("designation", formData.designation);
    data.append("resume", formData.resume);

    try {
        const res = await fetch("http://localhost:5000/api/send-email", {
            method: "POST",
            body: data,
        });

        const result = await res.json();

        if (result.success) {
             onClose();
            alert("Email sent successfully!");
            navigate("/", { replace: true });
        }
    } catch (error) {
        console.error(error);
        alert("Failed to send email");
    }
};

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <span className={styles.close} onClick={onClose}>
                    &times;
                </span>

                <h2>Career Form</h2>
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

                    <input
                        name="designation"
                        placeholder="Your Designation"
                        value={formData.designation}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.designation && <span className={styles.error}>{errors.designation}</span>}

                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                    />
                    {errors.resume && <span className={styles.error}>{errors.resume}</span>}
                    <p>Upload Resume (PDF/DOC, max 2MB)</p>

                    <button type="submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default Career;