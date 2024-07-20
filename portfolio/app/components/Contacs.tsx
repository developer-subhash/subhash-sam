"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <div className="flex items-center space-x-10 justify-center text-4xl md:text-7xl">
      <a href="https://www.linkedin.com/in/subhash-kumar-suman-4402941a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 hover:text-blue-700 transition-colors duration-300" />
      </a>
      <a href="https://twitter.com/subhash__sam" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-gray-500 hover:text-gray-700 transition-colors duration-300" />
      </a>
      <a href="https://www.instagram.com/subhash__sam" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-red-500 hover:text-red-700 transition-colors duration-300" />
      </a>
      <br /><br /><br />
    </div>
  );
};

export default Contacts;