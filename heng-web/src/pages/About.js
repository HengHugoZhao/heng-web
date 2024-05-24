import React from "react";
import emailIcon from "./icons/icon-email-clip-art-email-png-aa20e9ef2969a4474d894be1a574eeab.png";
import LinkedinIcon from "./icons/Linkedin-logo-on-transparent-Background-PNG-.png";
import GithubIcon from "./icons/kisspng-computer-icons-github-symbol-clip-art-github-5b441879998319.9807663615311893696288.png";
import HugoImg from "./images/6526998cf2b02eed-sticker.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="left-column">
        <h2 className="section-title">About Me</h2>
        <p>This is a brief description about me.</p>
        <h2 className="section-title">Skill Set</h2>
        <div className="skill-set-container">
          <div className="skill-box"></div>
          <div className="skill-box"></div>
          <div className="skill-box"></div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={HugoImg}
              alt="HengHugoZhao"
              className="profile-image"
            />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Heng Hugo Zhao">
              Heng Hugo Zhao
            </h1>
            <p className="title">Wake Forest University</p>
          </div>
          <div className="separator"></div>
          <div className="sidebar-info_more">
            <ul className="contact-list">
              <li className="contact-item">
                <div className="icon-box">
                  <img src={emailIcon} alt="Email" className="icon-image"/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="mailto:richard@example.com" className="contact-link">
                    richard@example.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <img src={LinkedinIcon} alt="LinkedIn" className="icon-image"/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">LinkedIn</p>
                  <a href="https://linkedin.com" className="contact-link">
                    username
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <img src={GithubIcon} alt="GitHub" className="icon-image"/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">GitHub</p>
                  <a href="https://github.com" className="contact-link">
                    username
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
