import React from "react";
import {SiCodeforces} from 'react-icons/si'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/nuthan-manideep-9049b8219"
        className="home__social-icon"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/Nuthanmani"
        className="home__social-icon"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://codeforces.com/profile/__Nani__"
        className="home__social-icon"
        target="_blank"
      >
        <SiCodeforces />
      </a>
    </div>
  );
};

export default Social;
