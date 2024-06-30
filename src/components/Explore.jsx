import React, { useState } from "react";
import Organization from "./org/Organization";
import Events from "./events/Events";
import Projects from "./projects/Projects";
export default function Explore() {
  const [page, setpage] = useState(1);
  return (
    <div className="p-10">
      <div className="bg-blue-300 p-2 w-3/12 h-14 flex rounded-full">
        <div
          className={`w-4/12 ${
            page === 1 ? "bg-yellow-400 shadow-lg" : ""
          } rounded-full  text-center flex justify-center items-center cursor-pointer font-medium text-slate-800`}
          onClick={() => setpage(1)}
        >
          <p>Organizations</p>
        </div>
        <div
          className={`w-4/12 
         ${page === 2 ? "bg-yellow-400 shadow-lg" : ""}
        rounded-full  text-center flex justify-center items-center cursor-pointer font-medium text-slate-800`}
          onClick={() => setpage(2)}
        >
          <p>Projects</p>
        </div>
        <div
          className={`w-4/12 
            ${page === 3 ? "bg-yellow-400 shadow-lg" : ""}
            rounded-full  text-center flex justify-center items-center cursor-pointer font-medium text-slate-800`}
          onClick={() => setpage(3)}
        >
          <p>Events</p>
        </div>
      </div>
     <div className="mt-5">
   {page===1?
<Organization/>:page===2?
<Projects/>:page===3?
<Events/>:''   
}
     </div>
    </div>
  );
}
