import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/vian-charbonneau/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a href="https://github.com/vianvianc" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>

    <div>
      <a href="https://wa.link/8ptjwz" target="_blank" rel="noreferrer">
        <BsWhatsapp />
      </a>
    </div>
  </div>
);

export default SocialMedia;
