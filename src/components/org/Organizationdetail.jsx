import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Organizationdetail() {
  const { orgID } = useParams();
  const organizations = useSelector((state) => state.user.allorg.organizations);
  const actualOrg = organizations.find((org) => org._id === orgID);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await axios.get(
          `https://neighbourly-backend.vercel.app/projects/organizations/${orgID}`
        );
        setProjects(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
      }
    }

    getProjects();
  }, [orgID]);
  return (
    <div className="min-h-screen bg-body">
      <section className="h-48 w-full ">
        <img
          src="https://www.missiondiscovery.org/wp-content/uploads/2023/03/Copy-of-Website-Featured-Images-14.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </section>
      <section className="flex justify-between   px-20">
        <section className="logo-of-myorg flex gap-10">
          <img
            src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg"
            alt=""
            className="w-40 h-40 -mt-5 rounded-full object-cover"
          />
          <section className="flex flex-col">
            <p className="text-5xl text-slate-800 font-bold">
              {actualOrg.name}
            </p>
            <p className="text-xl text-slate-600 font-semibold">
              {actualOrg.description}
            </p>
          </section>
        </section>

        <section className="flex flex-col">
          <p className="text-xl font-semibold text-slate-800">
            Email address:{" "}
            <span className="text-slate-600">{actualOrg.contact_email}</span>
          </p>
          <p className="text-xl font-semibold text-slate-800">
            Phone number:{" "}
            <span className="text-slate-600">{actualOrg.contact_phone}</span>
          </p>
        </section>
      </section>
      <p className="text-2xl px-20 my-10 font-semibold text-slate-800">
        Events
      </p>
      <div className="px-20 flex flex-wrap">
        {projects.length > 0 ? (
          projects?.map((e, index) => (
            <section
              key={index}
              className="bg-blue-500 rounded-2xl hover:scale-110 duration-200 m-5 w-72 h-56"
            >
              <div className="bg-white/50 w-full h-20"></div>
              <div className="p-2">
                <p className="text-xl font-semibold text-slate-800">
                  {e.title}
                </p>
                <p className="text-sm font-medium text-white/80">
                  {e.description}
                </p>
                <p className="text-sm font-medium text-slate-800">
                  Volunteers needed: {e?.volunteers_needed}
                </p>
              </div>
            </section>
          ))
        ) : (
          <section className="bg-blue-500 rounded-2xl hover:scale-110 duration-200 m-5 w-72 h-56">
            <div className="bg-white/50 w-full h-20"></div>
            <div className="p-2">
              <p className="text-xl font-semibold text-slate-800">
                No Events to show!!
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
