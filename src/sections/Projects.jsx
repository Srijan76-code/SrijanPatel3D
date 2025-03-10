import * as THREE from "three";
import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { useLoader } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from "../components/CanvasLoader"
import DemoComputer from '../components/DemoComputer'
import { useThree } from "@react-three/fiber";
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css"

import SectionWrapper from '../hoc/SectionWrapper'

const Projects = () => {
    const Background = () => {
        const texture = useLoader(THREE.TextureLoader, "/assets/project_bg.jpg");
        const { scene } = useThree();
        scene.background = texture; // Apply image as background
        return null;
    };
    const projectCount = myProjects.length
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }

        })
    }
    return (
        <motion.div className='c-space my-16 ' id="project"
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { type: "tween", duration: 0.6, ease: "easeOut" } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}

        >
            {/* <div className="relative w-full img-bg-container  flex justify-center box-border py-10    ">
                <img className="video-bg-container  opacity-40   -top-20 " src="assets/grid5.png" alt="" />
            </div> */}
            <p className='head-text pb-4' >My Projects</p>  {/* START OF PROJECT SECTION */}

            <div className="grid  lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full  ">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 " >
                    <div className="absolute top-0 right-0 z-30 ">
                        {/* A NICE TOP SPOTLIGHT */}
                        <img className='w-full h-96 object-cover rounded-xl z-30 ' src={currentProject.spotlight} alt="spotlight" />
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle} >
                        <img className='w-10 h-10 shadow-sm  ' src={currentProject.logo} alt="logo" /> {/* LOGO FOR OUR PROJECT*/}
                    </div>
                    <div className="flex h-80 flex-col gap-5 text-white-600 my-5">
                        <p className='text-white text-2xl font-semibold animatedText' >{currentProject.title}</p>
                        <p className='animatedText' >{currentProject.desc}</p>
                        <p className='animatedText' >{currentProject.subdesc}</p>

                    </div>

                    {/* TECH STACK using MAP..... */}

                    <div className="flex h-10 items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className='tech-logo' >
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                        <a href={currentProject.href} target="_blank" rel="noreferrer" className='flex items-center gap-2 cursor-pointer text-white-600 ' >
                            <p>Check live Site</p>
                            <img src="/assets/arrow-up.png" className='w-3 h-3' alt="arrow" />

                        </a>
                    </div>

                    <div className="flex h-9 justify-between items-center mt-7 ">
                        <button className='arrow-btn' onClick={() => handleNavigation("previous")} >
                            <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4' />
                        </button>
                        <button className='arrow-btn' onClick={() => handleNavigation("next")} >
                            <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4' />
                        </button>
                    </div>

                </div>
                {/*  PROJECTS 3D-DEMO ## CANVAS from React Fiber :- A Connection between React and 3JS */}
                <div className=" md:h-full cursor-pointer   ">

                    <Canvas>
                        <Background />
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />

                        <Center>    {/*  It centers the 3D MODEL ...*/}
                            <Suspense fallback={<CanvasLoader />} >    {/*  It shows SOMETHING, while 3D Modle is loading ...*/}
                                <group scale={2.7} position={[-0.4, -4.6, 0.6]} rotation={[0, -0.4, 1, 0]} >
                                    <DemoComputer texture={currentProject.texture} />
                                    {/*  Passing TEXTURE as a PROP to 3D MODEL , so that , WE can switch to different models ...*/}
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls
                            enableZoom={true}
                            minDistance={4}  // Minimum zoom distance
                            maxDistance={10} // Maximum zoom distance
                            zoomSpeed={0.1}  // Control zoom speed
                            maxPolarAngle={Math.PI / 2}  // Restrict vertical rotation (prevents flipping)
                            minPolarAngle={0} // Restrict camera from going below ground
                        />
                    </Canvas>
                </div>
            </div>


        </motion.div>


    )
}

export default SectionWrapper(Projects, "project")
