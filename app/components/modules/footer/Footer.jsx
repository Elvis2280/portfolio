import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Spotify_card from '../../elements/spotify_card/Spotify_card';

const Footer = () => {
  return (
    <footer className="text-neutral pb-10 pt-6">
      <div className="layout-component flex flex-col items-center border-t border-gray-600 pt-2">
        <Spotify_card />
        <p className="font-bold text-2xl md:text-3xl">
          Find <span className="text-secondaryLight">Me</span>
        </p>
        <div className=" text-2xl md:text-3xl">
          <a
            className="hover:text-secondaryLight transition-all"
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=elvisdev2280g@gmail.com&tf=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            className="hover:text-secondaryLight transition-all mx-3"
            href="https://github.com/Elvis2280?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/elvis-miranda-gonzalez-9127a7167"
            className="hover:text-secondaryLight transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
