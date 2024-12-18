import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`bg-gray-800 text-white py-6 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <p>© 2024  All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="space-x-4 flex items-center">
          <a
            className="hover:text-gray-400"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>

          <a
            className="hover:text-gray-400"
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>

          <a
            className="hover:text-gray-400"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          <a
            className="hover:text-gray-400"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
