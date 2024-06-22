// Carousel.js
import React, { useState, useEffect } from 'react';

const images = [
    'https://imgs.search.brave.com/cbcEMzCsMNKANeph2pdHIbuU_M-1WVRL_syreD4N0NE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iMTM3/NjgxLnNtdXNoY2Ru/LmNvbS8xMzc2ODEv/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MTEvMjM2MjJfMTAx/NTAxNTg0MTQ5MDA0/MDhfNTU4Nzg2X24t/ZTE1MzI1NDUwODc3/MTguanBnP2xvc3N5/PTEmc3RyaXA9MSZ3/ZWJwPTE',
    'https://imgs.search.brave.com/vAB0K_ai_olZelXK1qOmntfRZAYi52b_T7PQcH_cSUw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iMTM3/NjgxLnNtdXNoY2Ru/LmNvbS8xMzc2ODEv/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvcGFzcy1pdC1h/bG9uZy1lMTU3MjYx/Njg2MDMwMy5qcGc_/bG9zc3k9MSZzdHJp/cD0xJndlYnA9MQ',
    'https://imgs.search.brave.com/BZGPQQNrChkgH2oUMSoaX3oqZrdIrn_mE9Xd593QOlA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/MjM4OTgzMS9waG90/by92b2x1bnRlZXJp/bmctZm9yLXRoZS1j/b21tdW5pdHkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXph/V2I3Tjdkakt0QXJH/MWstTnExeDdQTWkx/aGl6TDJJZjBaQjlm/ZlNIR1E9',
    'https://imgs.search.brave.com/ttc6zRKWsvpnQpsi4mdNH56RhycucRBVRptjnRwrhFU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS80/NzgzZThfYjYwNTVh/NDQ3OTdkNDJlZjhi/NDE4NmIzMWY4ZGNl/NzR-bXYyLmpwZy92/MS9maWxsL3dfNDcy/LGhfMjY1LGZwXzAu/NDRfMC4xNixxXzkw/LzQ3ODNlOF9iNjA1/NWE0NDc5N2Q0MmVm/OGI0MTg2YjMxZjhk/Y2U3NH5tdjIuanBn',
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
        <div className=" w-full h-64 flex overflow-hidden justify-evenly items-center">
           
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
