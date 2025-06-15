import React from "react";
import Heading from "../Components/Heading";

const events = [
  { date: "June 20", title: "Website Live and Registrations Open" },
  { date: "July 21", title: "Registrations Close" },
  { date: "July 26", title: "Releasing Shortlisted Teams" },
  { date: "August 2", title: "Project Expo and Winners Announcement" },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative px-4 text-white bg-c1 font-jost"
    >
      <Heading title="TIMELINE" />

      <div className="max-w-5xl mx-auto group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-10 relative z-10 mb-36">
        {/* Vertical line */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-[calc(100%-5rem)] w-0.5 bg-white z-0" />

        <div className="grid grid-cols-3 gap-y-16 items-center relative z-10">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <React.Fragment key={index}>
                {/* Left column */}
                <div className={`${isLeft ? "text-right" : ""}`}>
                  {isLeft && (
                    <>
                      <h3 className="font-bold font-csclairemonodrawn text-lg md:text-2xl">
                        {event.date}
                      </h3>
                      <p className="font-csclairemonodrawn text-base md:text-xl font-light">
                        {event.title}
                      </p>
                    </>
                  )}
                </div>

                {/* Center Dot */}
                <div className="flex items-center justify-center">
                  <div className="relative w-8 h-8">
                    <div className="absolute w-5 h-5 rounded-full border border-white top-1.5 left-1.5" />
                    <div className="w-4 h-4 bg-white rounded-full border-2 border-black absolute top-2 left-2 z-10" />
                  </div>
                </div>

                {/* Right column */}
                <div className={` ${!isLeft ? "text-left" : ""}`}>
                  {!isLeft && (
                    <>
                      <h3 className="font-bold font-csclairemonodrawn text-lg md:text-2xl">
                        {event.date}
                      </h3>
                      <p className="font-csclairemonodrawn text-base md:text-xl font-light">
                        {event.title}
                      </p>
                    </>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </section>
  );
}
