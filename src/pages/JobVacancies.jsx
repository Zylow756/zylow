import styles from '../assets/css/JobVacancies.module.css';
import React, { useState } from "react";
import Enquiry from '../pages/Enquiry';

const JobVacancies = () => {
    const [showEnquiry, setShowEnquiry] = useState(false);

  const vacancies = [
    {
      id: 1,
      title: "Field Marketing Staff",
      openings: 10,
      experience: "1 to 2 years in field sales, local marketing",
      salary: "₹15,000 - ₹25,000 per month (plus incentives)",
      skills: "Strong communication, local area knowledge, persuasive abilities, and a customer-first approach",
      description: "Responsible for on-ground promotion and building strong local merchant relationships. Meeting local shopkeepers and entrepreneurs to drive local digital commerce."
    },
    {
      id: 2,
      title: "Telecaller for Office",
      openings: 5,
      experience: "1 to 2 year min exp in telecalling or customer support",
      salary: "₹10,000 - ₹16,000 per month",
      skills: "Excellent verbal communication in local languages, basic computer/CRM handling, and a polite demeanor",
      description: "Handle outbound and inbound calls from the office to support clients, resolve queries, and assist in business promotions."
    },
    {
      id: 3,
      title: "Work from Home-Telecaller",
      openings: 20,
      experience: "1 year in a similar remote telecalling or customer success role",
      salary: "₹8,000 - ₹12,000 per month (fixed + incentives according to peformance)",
      skills: "Reliable internet connection, quiet workspace, excellent phone etiquette, and self-motivation",
      description: "Reach out to local shopkeepers and users remotely to explain services, provide assistance, and support marketing initiatives from home."
    },
    {
      id: 4,
      title: "Web Developer",
      openings: 2,
      experience: "2 to 4 years in responsive web design and development",
      salary: "₹20,000 - ₹30,000 per month",
      skills: "HTML, CSS, JavaScript, and modern frameworks (React or Vue), responsive UI development",
      description: "Develop, update, and maintain website architecture, ensuring high performance, responsive layouts, and a great user experience."
    },
    {
      id: 5,
      title: "App Developer",
      openings: 1,
      experience: "2 to 4 years of hands-on mobile application development",
      salary: "₹20,000 - ₹25,000 per month",
      skills: "Flutter, React Native, or native Android/iOS development, REST APIs, and UI/UX standards",
      description: "Focus on building, testing, and optimizing mobile applications for Android and iOS platforms to enhance the user experience."
    },
    {
      id: 6,
      title: "Marketing Executive",
      openings: 2,
      experience: "1 to 3 years in digital branding and marketing strategy",
      salary: "₹18,000 - ₹30,000 per month",
      skills: "Creative thinking, understanding of local business promotion, and strong organizational skills for campaign execution",
      description: "Assist in creating marketing campaigns, promoting digital applications and services, and engaging with local vendors to drive brand awareness."
    },
    {
      id: 7,
      title: "Office Executive",
      openings: 1,
      experience: "1 to 2 years in general office administration or operations",
      salary: "₹15,000 - ₹20,000 per month",
      skills: "Good working knowledge of Microsoft Office (Word, Excel), multitasking, and strong organizational skills",
      description: "Manage daily office operations, support the team's administrative needs, and handle basic documentation and coordination."
    }
  ];

  return (
    <div className={styles.jobPortalContainer}>
      {/* Left Section: 60% Width for Job Listings */}
      <div className={styles.jobListingsSection}>
        <h2 className={styles.sectionTitle}>Current Openings</h2>
        {vacancies.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <div className={styles.jobMeta}>
              <span className={styles.badge}>Openings: {job.openings}</span>
              <span className={styles.badgeSalary}>Salary: {job.salary}</span>
            </div>
            
            <div className={styles.jobDetails}>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p><strong>About the Role:</strong> {job.description}</p>
              <p><strong>Skills Required:</strong> {job.skills}</p>
            </div>
            
            <button 
              className={styles.applyBtn} 
               onClick={() => setShowEnquiry(true)}
            >
              Apply Now
            </button>
      {showEnquiry && <Enquiry onClose={() => setShowEnquiry(false)} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobVacancies;