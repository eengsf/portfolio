import { useState } from "react";

export default function Experience() {
  const [soket, setSoket] = useState(true);
  const [robotic, setRobotic] = useState(false);
  const [brin, setBrin] = useState(false);
  const [lab, setLab] = useState(false);

  function handleSoket() {
    setSoket(true);
    setRobotic(false);
    setBrin(false);
    setLab(false);
  }
  function handleRobotic() {
    setSoket(false);
    setRobotic(true);
    setBrin(false);
    setLab(false);
  }
  function handleBrin() {
    setSoket(false);
    setRobotic(false);
    setBrin(true);
    setLab(false);
  }
  function handleLab() {
    setSoket(false);
    setRobotic(false);
    setBrin(false);
    setLab(true);
  }

  return (
    <>
      <div
        id="experience"
        className="flex flex-col h-screen lg:px-[20%] md:px-[12%] px-[6%] py-[12%] gap-10">
        <div className="flex items-center mb-[2vh]">
          <h1 className="text-white me-[1vw] text-2xl font-bold">
            02. Experience
          </h1>
          <span className="w-64 h-[1px] bg-white"></span>
        </div>
        <div className="flex sm:flex-row flex-col text-white gap-5">
          <div className="">
            <ul className="style-scrollbar flex sm:flex-col flex-row overflow-x-auto sm:pb-0 pb-3">
              <li
                className={`${
                  soket
                    ? "sm:border-l-4 sm:border-b-0 border-l-0 border-b-4 border-white "
                    : "sm:border-l-2 sm:border-b-0 border-l-0 border-b-2 border-[#4d648d]"
                } hover:bg-[#283655] flex-shrink-0 w-44`}>
                <button
                  onClick={handleSoket}
                  className="w-full h-full  whitespace-nowrap sm:ps-5 px-5 py-3 sm:text-left text-center">
                  Soket
                </button>
              </li>
              <li
                className={`${
                  robotic
                    ? "sm:border-l-4 sm:border-b-0 border-l-0 border-b-4 border-white"
                    : "sm:border-l-2 sm:border-b-0 border-l-0 border-b-2 border-[#4d648d]"
                } hover:bg-[#283655] flex-shrink-0 w-44`}>
                <button
                  onClick={handleRobotic}
                  className="w-full h-full  whitespace-nowrap sm:ps-5 px-5 py-3 sm:text-left text-center">
                  Robotic Team
                </button>
              </li>
              <li
                className={`${
                  brin
                    ? "sm:border-l-4 sm:border-b-0 border-l-0 border-b-4 border-white"
                    : "sm:border-l-2 sm:border-b-0 border-l-0 border-b-2 border-[#4d648d]"
                } hover:bg-[#283655] flex-shrink-0 w-44`}>
                <button
                  onClick={handleBrin}
                  className="w-full h-full whitespace-nowrap sm:ps-5 px-5 py-3 sm:text-left text-center">
                  Brin
                </button>
              </li>
              <li
                className={`${
                  lab
                    ? "sm:border-l-4 sm:border-b-0 border-l-0 border-b-4 border-white"
                    : "sm:border-l-2 sm:border-b-0 border-l-0 border-b-2 border-[#4d648d]"
                } hover:bg-[#283655] flex-shrink-0 w-44`}>
                <button
                  onClick={handleLab}
                  className="w-full h-full  whitespace-nowrap sm:ps-5 px-5 py-3 sm:text-left text-center">
                  Ectrical Laboratory
                </button>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="mb-[4vh]">
              {soket ? (
                <div>
                  <h1 className="text-xl font-bold">
                    CO Programming Division @ UKM-FT SOKET
                  </h1>
                  <p>January - December 2020</p>
                </div>
              ) : null}
              {robotic ? (
                <div>
                  <h1 className="text-xl font-bold">
                    Programming Division @ Trunojoyo Robotic Team
                  </h1>
                  <p>January 2020 - December 2021</p>
                </div>
              ) : null}
              {brin ? (
                <div>
                  <h1 className="text-xl font-bold">
                    Electrical Engineering Intern @ BRIN
                  </h1>
                  <p>January - February 2022</p>
                </div>
              ) : null}
              {lab ? (
                <div>
                  <h1 className="text-xl font-bold">
                    MBD Practicum Assistant @ Lab Trunojoyo
                  </h1>
                  <p>March - Mey 2022</p>
                </div>
              ) : null}
            </div>
            <div>
              {soket ? (
                <ul className="flex flex-col list-disc list-inside gap-2">
                  <li>
                    Maintain coordination of members of the programming division
                  </li>
                  <li>Conduct programming training for UKM-FT SOKET members</li>
                  <li>
                    Help prepare the program during the UKM-FT SOKET event and
                    the robot team
                  </li>
                </ul>
              ) : null}
              {robotic ? (
                <ul className="flex flex-col list-disc list-inside gap-2">
                  <li>Conduct research on fire fighting robots</li>
                  <li>
                    Create a preparatory program for the Indonesian fire
                    fighting robot contest
                  </li>
                  <li>
                    Create a preparatory program for the Indonesian SAR robot
                    contest
                  </li>
                  <li>Testing and Optimization</li>
                </ul>
              ) : null}
              {brin ? (
                <ul className="flex flex-col list-disc list-inside gap-2">
                  <li>Analyzing SOTM Antenna Tracking System Performance</li>
                  <li>Studying the Fundamentals of Tracking System</li>
                  <li>Analysis of Performance Data from Field Tests</li>
                  <li>Team Collaboration and Interdepartmental Meetings</li>
                </ul>
              ) : null}
              {lab ? (
                <ul className="flex flex-col list-disc list-inside gap-2">
                  <li>Preparation and Management of Practicum Material</li>
                  <li>Guidance During Practicum Sessions</li>
                  <li>Practicum Demonstrations</li>
                  <li>Assessment and Task Editing</li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
