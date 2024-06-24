// Carousel.js
import React, { useState, useEffect } from 'react';

const images = [
    'https://images.pexels.com/photos/5029859/pexels-photo-5029859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    'https://imgs.search.brave.com/BZGPQQNrChkgH2oUMSoaX3oqZrdIrn_mE9Xd593QOlA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/MjM4OTgzMS9waG90/by92b2x1bnRlZXJp/bmctZm9yLXRoZS1j/b21tdW5pdHkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXph/V2I3Tjdkakt0QXJH/MWstTnExeDdQTWkx/aGl6TDJJZjBaQjlm/ZlNIR1E9',
    'https://images.pexels.com/photos/11319521/pexels-photo-11319521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" w-full h-[20rem] flex overflow-hidden justify-evenly items-center">
           
                <img
                   
                    src={images[currentImageIndex]}
                    alt={`Slide }`}
                    className={` rounded-2xl w-full md:w-7/12 shadow-lg inset-0  h-full object-cover transition-opacity duration-1000 `}
                />
          
           
                <img
                   
                    src={images[(currentImageIndex+1)%images.length]}
                    alt={`Slide }`}
                    className={` rounded-2xl w-4/12 hidden md:flex inset-0 shadow-lg h-full object-cover transition-opacity duration-1000 `}
                />
            
        </div>
    );
};

export default Carousel;
