import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp, BsYoutube, BsInstagram } from "react-icons/bs";

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
    <div>
      <a
        href="https://www.youtube.com/channel/UCowJGILuChHjogQnxL1jOTQ"
        target="_blank"
        rel="noreferrer"
      >
        <BsYoutube />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/namevian/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
