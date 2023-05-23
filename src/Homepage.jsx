import React from "react";
import Layout from "./Layout";
import "./Homepage.css";
const HomePage = () => {
  return (
    <>
      <header>
        <Layout />
      </header>
      <main>
        <section id="profile">
          <div className="aboutMe">
            <div className="aboutMeLeft">
              <span>HELLO MY NAME IS</span>
              <br />
              <span className="myName">Haluethaichanok Junlongsawaitkul</span>
              <br />
              <span>Software Developer</span>
              <p className="intro">
                I am a Junior Software Developer who has a passion for coding. I
                am skilled in HTML, CSS, JavaScript, React.js, Node.js, Express,
                and MongoDB{" "}
              </p>
            </div>
            <div className="aboutMeRight">
              <img src="../public/341333842_248751314311561_2891745540448461571_n.jpeg" />
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 className="head">Projects</h2>
          <article className="miniProject">
            <div className="boxProjecy">
              <div className="scroll">
                <div className="photoProject">
                  <img src="../public/colmar-mii6-vercel-app-.jpg" />
                </div>
              </div>
              <div className="detailProject">
                <h3>
                  <b>Colmar Academy</b>
                </h3>
                <p>
                  Responsive landing page for Colmar Academy. Using HTML and CSS{" "}
                </p>
                <div className="allBut">
                  <a href="https://colmar-mii6.vercel.app/" target="_blank">
                    <button className="btn">DEMO</button>
                  </a>
                  <a
                    href="https://github.com/Haluethaichanok-J/Colmar.git"
                    target="_blank"
                  >
                    <button className="btn">REPO</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="boxProjecy">
              <div className="noscroll">
                <div className="photoProjectNo">
                  <img src="../public/img-find-you-hat.png" />
                </div>
              </div>
              <div className="detailProject">
                <h3>
                  <b>Find You Hat</b>
                </h3>
                <p>
                  Mini console game in that you have to find your hat. Using
                  Node.js{" "}
                </p>
                <div className="allBut">
                  <a
                    href="https://replit.com/join/rxsnzoicvq-haluethaichanok"
                    target="_blank"
                  >
                    <button className="btn">REPLIT</button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section id="experience">
          <h2 className="head">Experience</h2>

          <div className="education">
            <span className="education">Education</span>
            <article className="generation">
              <div className="logo">
                <img src="../public/232580133_101264878925478_7242207030737576724_n.png" />
              </div>
              <div className="information">
                <h3 className="position">Fullstack Web Developer Learner</h3>
                <h3 className="duration">February - May 2023</h3>
                <ul className="list">
                  <li>
                    Learned how to build websites by using diverse programming
                    languages and frameworks
                  </li>
                  <li>
                    Technical Skills: HTML5, CSS3, JavaScript, React, Node.js,
                    Express, Relational databases, MongoDB and git version
                    control.
                  </li>
                </ul>
              </div>
            </article>

            <article className="generation">
              <div className="logo">
                <img src="../public/chula-logo_square_75pc.png" />
              </div>
              <div className="information">
                <h3 className="position">
                  Bachelor's Degree of Science in Food Technology
                </h3>
                <h3 className="duration">February - May 2023</h3>
                <ul className="list">
                  <li>
                    Senior project: PUFA-related gene expression analysis of
                    copepod Apocyclops royi
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div className="internship">
            <span className="head">Internship</span>
            <article className="generation">
              <div className="logo">
                <img src="../public/dairy-home-logo.png" />
              </div>
              <div className="information">
                <h3 className="position">Internship</h3>
                <h3 className="duration">May - July 2020</h3>
                <ul className="list">
                  <li>
                    Apprenticed production department to practice controlling
                    the processes, and produced the products to meet customer
                    demand by following production schedules
                  </li>
                  <li>
                    Apprenticed QC department to practice controlling the
                    quality of finished products to meet the standards
                  </li>
                  <li>
                    Apprenticed at the warehouse department to ensure the
                    product distribution followed the FIFO rule
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section id="contact">
          <h2 className="head">Contact</h2>
          <h3>Reach me on</h3>
          <div className="container">
            <a
              href="https://docs.google.com/document/d/1idGYx4drzlZcaH21bOuXozSdcUQxAQ1qeWUkuE-JvrE/edit?usp=sharing"
              target="_blank"
            >
              <button className="btn">Resume</button>
            </a>
            <a
              href="mailto:haluethaichanok@gmail.com?subject=Mail fro our Website"
              target="_blank"
            >
              <button className="btn">Email</button>
            </a>
            <a href="https://github.com/Haluethaichanok-J" target="_blank">
              <button className="btn">GitHub</button>
            </a>
            <a
              href="https://www.linkedin.com/in/haluethaichanok-j/
"
              target="_blank"
            >
              <button className="btn">LinkedIn</button>
            </a>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};
export default HomePage;
