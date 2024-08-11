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
                <div className="BigCard">
                    <ScrollAnimation animateIn="fadeInLeft">
                        <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
                    </ScrollAnimation>
                    <div className="AboutBio">
                        <ScrollAnimation animateIn="fadeInLeft">
                            Hello! My name is <strong>Priyanka Kumari</strong>.
                            I'm originally from Patna Bihar and I am Priyanka
                            Kumari, a passionate and dedicated learner in the
                            field of Data Structures and Algorithms (DSA) and
                            web development.
                        </ScrollAnimation>

                        <br />
                        <br />

                        <ScrollAnimation animateIn="fadeInLeft">
                            My journey into the world of technology began with a
                            strong passion for problem-solving, which led me to
                            pursue the Computer Science program. Despite its
                            challenges, I remained determined and forged lasting
                            friendships that supported me throughout this
                            demanding program. Throughout my studies at NIT, I
                            had the opportunity to engage in fascinating
                            projects., I have solved 368 problems on LeetCode,
                            showcasing my commitment to mastering DSA concepts.
                            I am eager to apply my knowledge and skills to
                            contribute to a dynamic and innovative organization.
                            My goal is to continue expanding my understanding of
                            DSA concepts and web development frameworks to
                            develop efficient and user-friendly solutions.
                        </ScrollAnimation>

                        <br />
                        <br />

                        <ScrollAnimation animateIn="fadeInLeft">
                            Working collaboratively within a team towards a
                            shared objective has been an incredibly rewarding
                            and unique experience for me. I am eager to continue
                            exploring exciting projects in the future, with a
                            particular focus on AR (Augmented Reality), MERN
                            stack, and full-stack web development.
                            <div className="tagline2">
                                I have become confident using the following
                                technologies:
                            </div>
                        </ScrollAnimation>

                        <Technologies>
                            {stackList.map((stack, index) => (
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    key={index}
                                >
                                    <Tech key={index} className="tech">
                                        <TechImg
                                            src={stack.img}
                                            alt={stack.name}
                                        />
                                        <TechName>{stack.name}</TechName>
                                    </Tech>
                                </ScrollAnimation>
                            ))}
                        </Technologies>
                    </div>
                </div>
            </div>
        </ContactWrapper>
    );
}

export default About;
