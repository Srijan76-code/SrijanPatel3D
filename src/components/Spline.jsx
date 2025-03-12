const Spline = () => {
    return (
        <>
            <div className="flex justify-between items-center w-full h-screen overflow-hidden mx-auto">
                <div className="absolute w-full h-screen left-0 -z-40">
                    <img className="w-full h-full  opacity-50" src="assets/grid5.png" alt="" />
                </div> 
                <div className="text-white-800 opacity-90  ">
                    {/* <p className="font-bold text-6xl " > CREATIVE DEVELOPER.</p>
                    <p className="font-normal text-2xl mt-6 text-white-600 " >Crafting Digital Experiences.</p> */}
                    <img className=" img-bg-container  " src="assets/CREATIVE12.gif" alt="" />
                    <div className=" flex justify-center items-center px-3 py-3 w-fit media-object  text-xl font-semibold hover:border-none   ">
                        <button className="text-amber-100 bg-black  px-3 py-2 hover:text-black hover:bg-white " >Download Resume</button>
                    </div>

                </div>

                <div className="ml-64 w-full h-screen z-10 " >
                    <iframe src='https://my.spline.design/robotfollowcursorforlandingpagemc-431ea2e43208e2d3a66485b7bf71c652/' frameborder='0' width='100%' height='100%'></iframe>
                </div>
            </div>
            <div className="relative  w-full h-11 left-0 -top-16 bg-black  z-40 border-b  border-y-black-600   ">
               
            </div>


        </>
    );
};

export default Spline;
