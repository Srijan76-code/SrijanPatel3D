import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const RotatingGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    // Auto-rotate
    if (globeRef.current) {
      const globe = globeRef.current;
      
      // Set initial rotation speed (adjust these values as needed)
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 5;
      
      // Optional: Set initial camera position
      globe.pointOfView({
        lat: 28,
        lng: 77,
        altitude: 2.5
      }, 3000);
    }
  }, []);

  return (
    <div style={{
      width: '326px',
      height: '326px',
      background: 'black',
      position: 'relative'
    }}>
      <Globe
        ref={globeRef}
        height={326}
        width={326}
        backgroundColor="black"
        backgroundImageOpacity={0}
        showAtmosphere={true}
        showGraticules={true}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          {
            lat: 28,
            lng: 77,
            text: "You will Find me Here!",
            color: "white",
            size: 50,
          }
        ]}
        atmosphereColor="#ffffff"
        atmosphereAltitude={0.1}
        labelSize={3.5}
        labelDotRadius={3.5}
        labelColor={() => 'white'}
        labelResolution={2}
        labelAltitude={0.01}
        labelLabel={d => d.text}
      />
    </div>
  );
};

export default RotatingGlobe;