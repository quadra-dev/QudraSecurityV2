"use client";
import Image from "next/image";
import { useState } from "react";

export const ContactForm1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full md:grid md:grid-cols-[2fr_1fr] items-center justify-center py-5 min-h-screen bg-indigo-800  px-3">
      <div className="flex items-center justify-center">
        <div className="md:w-[50%]">
          <h2 className="font-bold text-5xl text-center p-3">
            Get in Touch Today
          </h2>
          <div className="w-full flex items-center justify-center pb-5">
            <p className="text-center text-white/70 max-w-90">
              explore our installation service and talk to our experts for
              solution catered to your need{" "}
            </p>
          </div>
          <div className="flex">
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="bg-white w-full focus:border  rounded-lg h-12 mr-2 my-3 placeholder:text-gray-300 px-2 py-5  focus:border-indigo-700 caret-black text-black focus:ring-2 focus:ring-gray-200/40 focus:outline-none "
            />
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="bg-white w-full focus:border  rounded-lg h-12  my-3 placeholder:text-gray-300 px-2 py-5 focus:border-indigo-700 caret-black text-black focus:ring-2 focus:ring-gray-200/40 focus:outline-none "
            />
          </div>
          <input
            id="phoneNumber"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Phone Number"
            className="bg-white w-full focus:border mb-3 rounded-lg h-12  placeholder:text-gray-300 px-2 py-5 focus:border-indigo-700 caret-black text-black focus:ring-2 focus:ring-gray-200/40 focus:outline-none "
          />
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="bg-white w-full focus:border mb-3 rounded-lg h-12  placeholder:text-gray-300 px-2 py-5 focus:border-indigo-700 caret-black text-black focus:ring-2 focus:ring-gray-200/40 focus:outline-none "
          />
          <select
            id="cars"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`bg-white text-black outline-none h-12 focus:border focus:border-indigo-700 focus:ring-gray-200/40  rounded-lg w-full mb-3 px-2 ${
              city === "" ? "text-gray-400" : "text-black"
            }`}
          >
            <option value="" disabled className="text-gray-400">
              -- Select a City --
            </option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="DelhiNCR">Delhi NCR</option>
            <option value="Others">Others</option>
          </select>
          <select
            id="cars"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`bg-white text-black outline-none h-12 focus:border focus:border-indigo-700 focus:ring-gray-200/40  rounded-lg w-full mb-3 px-2 ${
              city === "" ? "text-gray-400" : "text-black"
            }`}
          >
            <option value="" disabled className="text-gray-400">
              -- Select a Service --
            </option>
            <option value="CCTV Installation">CCTV Installation</option>
            <option value="biometric-systems">biometric-systems</option>
            <option value="anpr">ANPR</option>
            <option value="epabx-systems">epabx-systems</option>
            <option value="interactive-display-panels">
              interactive display panels
            </option>
            <option value="video-door-phones">video-door-phones</option>
            <option value="baggage-scanners">baggage-scanners</option>
            <option value="alarm-systems">alarm-systems</option>
            <option value="metal-detectors">metal-detectors</option>
            <option value="access-control-systems">
              access-control-systems
            </option>
            <option value="boom-barriers-toll-solutions">
              boom-barriers-toll-solutions
            </option>
            <option value="electronic-door-locks">electronic-door-locks</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Other">Others</option>
          </select>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#FF850B] h-12 w-full text-white px-6 py-2 rounded-md  transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
