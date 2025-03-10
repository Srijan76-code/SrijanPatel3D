
import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button";

import AtomModel from "../components/Electron";
import RotatingGlobe from "../components/Globe";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css"

import SectionWrapper from '../hoc/SectionWrapper'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        const email = "srijanpatel911@gmail.com";
        navigator.clipboard.writeText(email);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
    const cardRefs = useRef([]);

    // Hover Effects: Apply rotation on mousemove
    useEffect(() => {
        cardRefs.current.forEach((card) => {
            if (!card) return;

            const handleMouseMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                // Update CSS variables for glow effect
                card.style.setProperty("--x", `${x}%`);
                card.style.setProperty("--y", `${y}%`);

                // Calculate rotation values
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = -(e.clientY - rect.top - centerY) / 20;
                const rotateY = (e.clientX - rect.left - centerX) / 20;

                // Apply 3D transform
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };

            const handleMouseLeave = () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, []);
    return (
        <section className="c-space   " id="about" >

            <div className="relative w-full h-full  flex justify-center     ">
                <img className="video-bg-container  opacity-40   -top-20 " src="assets/grid5.png" alt="" />
            </div>

            <motion.div variants={textVariant()} initial="hidden" animate="show" id="work"  >

                <h3 className="head-text mb-16 mt-16 ">About Me</h3>
            </motion.div>

            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/* ABOUT SECTION */}
                <motion.div

                    // variants={{
                    //     hidden: { x: -100, opacity: 0 },
                    //     show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                    // }}
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: false, amount: 0.3 }}


                    className="col-span-1 xl:row-span-3 bento-item">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[0] = el)}
                    >
                        <img className=" w-full  sm:h-[276px] h-fit object-contain" src="/assets/grid1-removebg.png" alt="grid-1" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Srijan Patel</p>
                            <p className="grid-subtext">Aspiring Fullstack Developer with experience in multiple Projects . Solved 150+ problems on both LeetCode (1500+ rating)
                                and Codeforces (1050+ rating ).</p>
                        </div>
                    </div>
                </motion.div>

                {/* TECH STACK SECTION */}
                <motion.div

                    // variants={{
                    //     hidden: { x: -100, opacity: 0 },
                    //     show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                    // }}
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: false, amount: 0.3 }}



                    className="col-span-1 xl:row-span-3">
                    <div
                        className="grid-container toolCard w-full"
                        ref={(el) => (cardRefs.current[1] = el)}
                    >
                        <img className=" w-full  sm:h-[276px] h-fit object-cover -z-50 " src="/assets/tech2.png" alt="grid-2" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">C++ | Python | Pandas | Numpy | JavaScript | React | Express JS | Tailwind | React-Fiber | Framer-Motion
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CONTACT ME SECTION */}
                <motion.div
                    // variants={{
                    //     hidden: { x: -100, opacity: 0 },
                    //     show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                    // }}
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: false, amount: 0.3 }}

                    className="col-span-1 xl:row-span-4 pointer-events-auto  ">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[2] = el)}
                    >
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center  pointer-events-auto z-50 cursor-pointer">
                            <RotatingGlobe />
                        </div>
                        <div className="pointer-events-auto z-50 cursor-pointer">
                            <p className="grid-headtext">Available for Work </p>
                            <p className="grid-subtext">I am currently a 1st year college student doing B.Tech in CS & AI in Newton School of Technology</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </motion.div>

                {/* PASSION FOR CODING */}
                <motion.div
                    // variants={{
                    //     hidden: { x: -100, opacity: 0 },
                    //     show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                    // }}
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: false, amount: 0.3 }}

                    className="col-span-2 xl:row-span-3">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[3] = el)}
                    >
                        <img className="w-full sm:h-[266px] h-fit object-contain" src="/assets/grid3.png" alt="grid-3" />
                        <div>
                            <p className="grid-headtext">More About Me</p>
                            <p className="grid-subtext">I love solving challenging problems on LeetCode & Codeforces and bringing ideas to life with React, 3.js, React Fiber, Framer Motion, and more. Whether it’s cracking a tough algorithm or building smooth, interactive UIs, I’m always pushing my limits and learning something new. </p>
                        </div>
                    </div>
                </motion.div>

                {/* EMAIL COPY SECTION */}
                <motion.div
                    // variants={{
                    //     hidden: { x: -100, opacity: 0 },
                    //     show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                    // }}
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: false, amount: 0.3 }}

                    className="col-span-1 xl:row-span-2 pointer-events-auto z-50 cursor-pointer ">
                    <div
                        className="grid-container toolCard"
                        ref={(el) => (cardRefs.current[4] = el)}
                    >
                        <img
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                            src="/assets/grid4.png"
                            alt="grid-4"
                        />
                        <div className="space-y-2 mt-8">
                            {/* <p className="grid-subtext text-center">Contact me</p> */}
                            <div className="copy-container " onClick={handleCopy}>
                                <img className="pointer-events-auto z-50 cursor-pointer " src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    My Email ID
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default SectionWrapper(About, "about");