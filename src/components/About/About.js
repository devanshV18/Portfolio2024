import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>

        <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                <strong>I have an expertise in the following technologies:-</strong>
              </div>
            </ScrollAnimation>
            <br /><br />
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>

            <br /><br />

            
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/male-programmer-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Devansh Verma</strong>. I'm from India and a full stack developer. I am curently in my final year of Computer Science and Engineering at SRMIST, Chennai. I've also worked as as a <strong>Web Developer</strong> with the technical fest team of my college. I love to explore new technologies, tools and build web and mobile applications carrying an impact.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program where i've gained strong understanding and knowledge of core Computer Science subjects such as <strong>Data Structures, OOPS, DBMS and SQL,</strong> Despite its challenges, I am determined and forged lasting friendships that supported me throughout this demanding program till date.
            Throughout my studies at SRMIST, I had the opportunity to engage in fascinating personal and collaborative projects some of which are mentioned above and also provided me with an environment where i was able to learn full stack development and implement them into real life problems and use cases.
            </ScrollAnimation>

          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
