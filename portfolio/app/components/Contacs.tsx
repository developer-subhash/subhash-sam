"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <div className="flex items-center space-x-4">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-gray-500 hover:text-gray-900 transition-colors duration-300" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 hover:text-gray-900 transition-colors duration-300" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-gray-500 hover:text-gray-900 transition-colors duration-300" />
      </a>
    </div>
  );
};

export default Contacts;