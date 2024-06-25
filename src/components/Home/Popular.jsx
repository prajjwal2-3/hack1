import React from "react";
import { PopularEvent } from "../../constants/Categories";
export default function Popular() {
  return (
    <div className="p-10 flex flex-col gap-10 ">
      <p className="font-medium text-2xl text-slate-800">
        Popular Volunteering Events
      </p>
      <section>
        <div className="flex justify-around">
            {PopularEvent.map((e,index)=>
            <div key={index}  className="w-3/12 bg-gray-200 rounded-xl h-80 cursor-pointer hover:scale-110 duration-200">
            <section className="relative">
              <p className="absolute bottom-0 text-white font-medium bg-yellow-400 px-2 rounded-tr-lg">
                {e.category}
              </p>
              <img
                src={e.image}
                alt=""
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </section>
  
            <section className="p-4 flex justify-between">
              <section className="w-2/12">
                <p className="text-blue-600 font-bold text-xl">
                  {e.month}
                </p>
                <p className="text-lg font-bold text-slate-800">
                  {e.date}
                </p>
              </section>
              <section className="w-9/12">
                <p className="text-2xl font-semibold text-slate-800">
                  {e.title}
                </p>
                <p className="font-medium text-slate-600">
                  {e.discription}
                </p>
  
                <p className="font-medium text-slate-600">
                  {e.location}
                </p>
              </section>
            </section>
          </div>)}
        </div>
      </section>
    </div>
  );
}
