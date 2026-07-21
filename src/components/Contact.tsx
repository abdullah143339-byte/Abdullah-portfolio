import { MdArrowOutward, MdCopyright, MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import AFLogo from "./AFLogo";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:abdullah143339@gmail.com" data-cursor="disable" className="contact-link">
                <MdEmail /> abdullah143339@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923187637648" data-cursor="disable" className="contact-link">
                <MdPhone /> 0318-7637648
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://instagram.com/foji_abdullah"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <FaInstagram /> Instagram <MdArrowOutward />
            </a>
            <a
              href="https://github.com/abdullah143339-byte"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <FaGithub /> GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed by <span>Muhammad Abdullah</span>
            </h2>
            <div className="contact-footer-logo">
              <AFLogo size={36} />
            </div>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
