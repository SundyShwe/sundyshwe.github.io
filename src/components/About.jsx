import React, { useContext } from "react";
import { AppContext } from "../App";
function About() {
  const { about } = useContext(AppContext);

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>
              {about.firstname.toUpperCase()} {about.lastname.toUpperCase()}
            </h2>
            <p className="fst-italic">Foodie • Explorer • Coffee Lover • Web Dev • Tech Geek • Coding Enthusiast</p>
            <p className="fst-italic">Intrigued by technology, research, books, travels and even better conversions.</p>
            <p className="fst-italic">Seeking to be inspired, to work hard for things that are meaningful, and to be surrounded by those who bring out the best in me.</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={"img/" + about.profileImg} className="img-fluid" alt="profile image" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>About Me</h3>
              <p className="text-justify">
                Hi, I’m Sundy — a Frontend Engineer specializing in JavaScript and TypeScript frameworks.
                With several years of hands-on experience, I build fast, scalable, and user-focused web applications.
              </p>
              <p className="text-justify">
                I specialize in writing clean, maintainable code using component-based architecture, crafting responsive UIs, and placing a strong emphasis on performance and usability. I thrive in Agile environments, work closely with cross-functional teams, and consistently deliver impactful, user-centric features.
              </p>
              <p className="text-justify">
                A resourceful and self-driven team player, I see every challenge as an opportunity to learn and grow. When I’m not coding, you’ll find me exploring new tech, sketching UI ideas, or hunting down the best coffee in town.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>{about.phone}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>{about.city}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>{about.email}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Available:</strong>
                      <span>{about.available}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default About;
