import React, { useState, useEffect, useRef } from 'react'
import { navLinks } from '../constants'

// Here we have used MAP to create a list of navigation links:-
const NavItems = () => {
    return (
        <ul className='nav-ul  '>
            {navLinks.map(({ id, name, href }) => (
                <li className="nav-li px-2   cursor-pointer" key={id} >
                    <a href={href} className="nav-li_a" >{name}</a>
                </li>
            ))}
        </ul>
    )
}


const Navbar = () => {
 

    const [isOpen, setIsOpen] = useState(false); // State for TOGGLE MENU BAR 
    const [isPlaying, setIsPlaying] = useState(false); // State for audio playback
    const [audioBuffer, setAudioBuffer] = useState(null);
    const [audioContext, setAudioContext] = useState(null);
    const [audioSource, setAudioSource] = useState(null);
    const videoRef = useRef(null);
    
    const toggleMenu = () => setIsOpen((prev) => !prev); // FUNCTION for TOGGLE MENU BAR 
    
 
    
    const toggleAudio = () => {
        if (!audioBuffer) return;
    
        if (isPlaying) {
            audioSource?.stop();
            setAudioSource(null);
            videoRef.current?.pause();
        } else {
            if (!audioContext) return;
    
            const newSource = audioContext.createBufferSource();
            newSource.buffer = audioBuffer;
            newSource.loop = true;
    
            // Smooth looping fix
            newSource.connect(audioContext.destination);
            newSource.start(0);
    
            setAudioSource(newSource);
            videoRef.current?.play();
        }
    
        setIsPlaying(!isPlaying);
    };
    
    useEffect(() => {
        const initAudio = async () => {
            try {
                const context = new (window.AudioContext || window.webkitAudioContext)();
                const response = await fetch("/audio/emotional_loop.mp3");
                const arrayBuffer = await response.arrayBuffer();
                const decodedBuffer = await context.decodeAudioData(arrayBuffer);
    
                setAudioContext(context);
                setAudioBuffer(decodedBuffer);
            } catch (error) {
                console.error("Audio loading error:", error);
            }
        };
    
        initAudio();
    
        return () => {
            audioContext?.close();
        };
    }, []);

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/95  border-b  border-y-black-600 ' id='navbar' >  {/* fixed header */}
            <div className="max-w-7xl mx-auto ">
                <div className="flex items-center justify-between mx-auto c-space ">
                    <a href="/" className=' text-neutral-200 text-xl font-semibold  transition-colors '>
                        {/* <video src="/logo/logo2.mp4" autoPlay loop muted className="w-32 h-full"></video> */}
                        <img className="w-32 h-full" src="/assets/S.png" alt="logo" />
                    </a>

                    {/* BUTTON for TOGGLE MENU BAR */}
                    <button onClick={toggleMenu} className='text-neutral-300 hover:text-white focus:outline-none sm:hidden flex ' aria-label='menu-button' >
                        <img className='w-6 h-6' src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" />
                    </button>

                    {/* VIDEO for TOGGLE AUDIO */}


                    <nav className='sm:flex hidden ' >
                        <video
                        loop muted
                            ref={videoRef}
                            className='ml-4 w-32 pb-4 h-auto cursor-pointer'
                            aria-label='audio-button'
                            onClick={toggleAudio}
                            src={isPlaying ? "/audio/audio-bg.mp4" : "/audio/audio-bg.mp4"}
                            alt="audio toggle"
                        />
                        <NavItems />
                    </nav>

                </div>
            </div>

            {/* How MENU BAR will look in small devices */}
            <div className={`nav-sidebar ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <nav className='p-5'>
                    <NavItems />
                </nav>

            </div>

        </header>
    )
}

export default Navbar