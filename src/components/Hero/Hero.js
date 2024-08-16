import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
    HeroContainer,
    HeroWrapper,
    HeroLeft,
    HeroRight,
    Image,
    ScrollDown,
    ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <main>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <HeroContainer>
                <HeroWrapper>
                    <HeroLeft>
                        <ScrollAnimation animateIn="fadeIn">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    "Hi, I'm Priyanka Kumari.",
                                    () => setShowSubtitle(true),
                                ]}
                                speed={{
                                    type: "keyStrokeDelayInMs",
                                    value: 150,
                                }}
                                wrapper="h1"
                                repeat={0}
                            />
                            {showSubtitle && (
                                <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                        500,
                                        "A Full-Stack Developer.",
                                        1000,
                                        "A final year CSE student.",
                                        1000,
                                        "A problem solver with a passion for DSA.",
                                        1000,
                                        "An innovative thinker in AR and MERN stack.",
                                        1000,
                                        "A dedicated learner.",
                                        1000,
                                        "A.... code enthusiast?",
                                        1000,
                                        "Ok...",
                                        1000,
                                        "Ok... I'm just getting started...",
                                        1000,
                                        "Uhh...",
                                        1000,
                                        "Uhh... there's more to explore...",
                                        1000,
                                        "Scroll down to see my projects now...",
                                        300,
                                        () => setShowScrollDown(true),
                                        1000,
                                        "Seriously, my projects are packed with tech magic, go check them out!",
                                        1000,
                                        "You're uh...",
                                        1000,
                                        "You're uh... still here?",
                                        1000,
                                        "Ok, this has been fun, but there's more code waiting...",
                                        1000,
                                        "See ya! :)",
                                        500,
                                    ]}
                                    speed={50}
                                    deletionSpeed={65}
                                    wrapper="h5"
                                    repeat={Infinity}
                                />
                            )}
                        </ScrollAnimation>
                    </HeroLeft>
                    <HeroRight>
                        <ScrollAnimation animateIn="fadeIn">
                            <Image src="/mypic.png" alt="priyanka kumari" />
                        </ScrollAnimation>
                    </HeroRight>
                </HeroWrapper>
                {showScrollDown && (
                    <ScrollAnimation animateIn="flipInX" offset={0}>
                        <ScrollDown to="projects" id="scrollDown">
                            <ScrollLink>
                                Scroll down
                                <img src="/scroll-down.svg" alt="scroll-down" />
                            </ScrollLink>
                        </ScrollDown>
                    </ScrollAnimation>
                )}
            </HeroContainer>
        </main>
    );
}

export default Hero;
