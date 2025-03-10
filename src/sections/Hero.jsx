import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import Game from '../components/Game'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'

import { calculateSizes } from '../constants'
import Target from '../components/Target'




const Hero = () => {
    const isSmall = useMediaQuery({maxWidth:440})
    const isMobile = useMediaQuery({maxWidth:768})
    const isTablet = useMediaQuery({minWidth:768 , maxWidth:1024})

    const sizes= calculateSizes(isSmall,isMobile,isTablet)

    const x=useControls("Game",{
        positionX:{
            value:2.5,
            min:-10,
            max:10
        },
        positionY:{
            value:2.5,
            min:-10,
            max:10
        },
        positionZ:{
            value:2.5,
            min:-10,
            max:10
        },
        rotationX:{
            value:0,
            min:-10,
            max:10
        },
        rotationY:{
            value:0,
            min:-10,
            max:10
        },
        rotationZ:{
            value:0,
            min:-10,
            max:10
        },
        scale:{
            value:1,
            min:0.1,
            max:10
        }
    })
    return (
        //  PART 1:- JUST DISPLAYING NAME AND TAGLINE:-

        < section className='min-h-screen w-full flex flex-col relative ' >
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans' >
                    Hi! I am SRIJAN PATEL
                    <span className='waving-hand' >👋🏻</span>
                </p>
                <p className='hero_tag text-gray_gradient ' >Learn. CODE. Build. </p>
            </div>

            {/* PART 2:- DISPLAYING 3D ANIMATION:- */}

            {/* <div className="w-full h-full absolute inset-0">
            <Leva />

                <Canvas className='w-full h-full' >

                    <Suspense fallback={<CanvasLoader />} >
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Game

                      
                        position={[1.5, -10.0, 0.3]}
                        rotation={[0.0, -2.2, 0.0]}
                        scale= { isMobile ? 0.1 : 0.3}
                        
                        />

                        <group>
                            <Target position={sizes.targetPosition} />
                        </group>

                        
                    <ambientLight intensity={1} />
                    <directionalLight intensity={0.5} position={[10, 10, 10]}  />
                    <OrbitControls enableRotate enableZoom />
                    
                    </Suspense>




                </Canvas>



            </div> */}


        </section >

    )
}

export default Hero
