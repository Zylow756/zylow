import { useState } from "react";
import styles from "./FloatingShare.module.css";
import {
  FaShareNodes,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
  FaLink,
  FaXmark,
} from "react-icons/fa6";

export default function ShareBar() {
  const [open, setOpen] = useState(false);

  const url = window.location.href;
  const title = document.title;

  const share = (type) => {
    const links = {
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      telegram: `https://t.me/share/url?url=${url}&text=${title}`,
    };

    window.open(links[type], "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <div className={styles.shareWrapper}>

      <button
        className={styles.mainButton}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaXmark /> : <FaShareNodes />}
      </button>

      <div
        className={`${styles.menu} ${
          open ? styles.active : ""
        }`}
      >

        <button
          onClick={copyLink}
          className={styles.copy}
        >
          <FaLink />
        </button>

        <button
          onClick={() => share("whatsapp")}
          className={styles.whatsapp}
        >
          <FaWhatsapp />
        </button>

        <button
          onClick={() => share("facebook")}
          className={styles.facebook}
        >
          <FaFacebookF />
        </button>

        <button
          onClick={() => share("linkedin")}
          className={styles.linkedin}
        >
          <FaLinkedinIn />
        </button>

        <button
          onClick={() => share("twitter")}
          className={styles.twitter}
        >
          <FaXTwitter />
        </button>

        <button
          onClick={() => share("telegram")}
          className={styles.telegram}
        >
          <FaTelegram />
        </button>

      </div>

    </div>
  );
}