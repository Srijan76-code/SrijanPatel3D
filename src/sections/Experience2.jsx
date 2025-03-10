import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn, zoomIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
    <motion.div
        variants={fadeIn(index % 2 === 0 ? "left" : "right", "spring", 0.3, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}

    >
        <VerticalTimelineElement
            contentStyle={{ background: "black", color: "#fff" }}

            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            position={index % 2 === 0 ? "left" : "right"} //  Alternating left & right
            icon={
                <motion.div
                    variants={zoomIn(0.2, 0.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex justify-center items-center w-full h-full bg-black-100 rounded-full"
                >
                    <img src={experience.icon} alt={experience.title} className="rounded-full w-full h-full object-contain" />
                </motion.div>
            }
        >
            <div className="book " >
                <div className="sm:p-5 px-2.5 py-5 .img ">
                    <img className="" src={experience.animation} alt="" />
                </div>
                <div className="cover">
                    <img className="" src={experience.cover} alt="" />
                </div>

            </div>

        </VerticalTimelineElement>
    </motion.div>
);

const Experience2 = () => {
    return (
        <>
            <div className="relative left-0 w-full   flex justify-center mx-auto box-border py-10    ">
                <img className="video-bg-container  opacity-40   -top-20 " src="assets/grid5.png" alt="" />
            </div>


            <motion.div variants={textVariant()} initial="hidden" animate="show" id="work"  >

                <h3 className="head-text">My Experience</h3>
            </motion.div>
            <div className="mt-10 flex flex-col pb-20 ">

                <VerticalTimeline>
                    {workExperiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} index={index} />
                    ))}
                </VerticalTimeline>
            </div>

        </>
    );
};

export default SectionWrapper(Experience2, "work");