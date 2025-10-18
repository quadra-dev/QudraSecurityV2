"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react"; // <-- Make sure you have this import!

const slides = [
  {
    id: 1,
    image: "/HomeImages/HomeCarouselImage/CCTVandSurveillance.png",
    heading: "CCTV and Surveillance",
    text: "We provide cutting-edge CCTV solutions including IP, analog, and 4G/WiFi surveillance systems. Ensure round-the-clock monitoring of your premises with high-quality imaging and smart analytics.\n1. HD/4K Installation\n2. 4G, WiFi, and Solar-Powered Cameras\n3. Remote Monitoring\n4. Night Vision & Motion Detection\n5. Cloud & Local Storage Options",
  },
  {
    id: 2,
    image: "/HomeImages/HomeCarouselImage/BiometricSystems.png",
    heading: "Biometric Systems",
    text: "Secure your facility with our biometric access control solutions including fingerprint, facial recognition, and multimodal systems for accurate identification and attendance tracking.\n1. Fingerprint & Facial Recognition\n2. Multimodal Biometric Access\n3. Door Lock Integration\n4. Attendance Management\n5. Security & Data Logging",
  },
  {
    id: 3,
    image: "/HomeImages/HomeCarouselImage/ANPR.png",
    heading: "ANPR (Automatic Number Plate Recognition)",
    text: "Deploy ANPR cameras to capture and identify vehicle number plates in real time. Ideal for parking, tolls, and secured entry points.\n1. Real-Time Plate Recognition\n2. High-Speed Camera Integration\n3. Database Matching4. Barrier Integration\n4. Analytics Dashboard",
  },
  {
    id: 4,
    image: "/HomeImages/HomeCarouselImage/EPBAXSystems.png",
    heading: "EPBAX Systems",
    text: "Modernize internal communication with our EPABX systems. Suitable for organizations of all sizes looking for seamless call routing and extension management.\n1. Analog & IP EPABX Systems\n2. Scalable Extensions\n3. Voicemail & Call Logs\n4. Intercom & Paging\n5. Repair & Installation Services",
  },
  {
    id: 5,
    image: "/HomeImages/HomeCarouselImage/InteractiveDisplayPanels.png",
    heading: "Interactive Display Panels",
    text: "Engage users with high-definition interactive panels designed for conference rooms, education, and command centers.\n1. Touch-Enabled Display\n2. Multi-Device Connectivity\n3. Smart Board Capabilities\n4. Integrated OS and Apps\n5. Wall Mount & Stand Options",
  },
  {
    id: 6,
    image: "/HomeImages/HomeCarouselImage/VideoDoorPhones.png",
    heading: "Video Door Phones",
    text: "Enhance home or office security with our video door phone systems. See and communicate with visitors before granting access.\n1. HD Video Calling\n2. Intercom Support\n3. Remote Unlocking\n4. Wi-Fi Enabled Options\n.5 Multiple Indoor Units",
  },
  {
    id: 7,
    image: "/HomeImages/HomeCarouselImage/BaggageScanners.png",
    heading: "Baggage Scanners",
    text: "Ensure safety with high-resolution X-ray baggage scanners ideal for malls, offices, and transport hubs.\n1. Dual View Imaging\n2. Automatic Threat Detection\n3. Real-Time Scanning\n4. Maintenance Support\n5. High Throughput Rate",
  },
  {
    id: 8,
    image: "/HomeImages/HomeCarouselImage/AlarmSystems.png",
    heading: "Alarm Systems",
    text: "Protect property and personnel with advanced alarm systems. Detect intrusion, fire, and unauthorized access instantly.\n1. Intruder & Panic Alarms\n2. Door/Window Sensors\n3. 24/7 Monitoring\n4. Mobile Notifications\n5. Fire & Smoke Detection",
  },
  {
    id: 9,
    image: "/HomeImages/HomeCarouselImage/MetalDetectors.png",
    heading: "Metal Detectors",
    text: "Deploy handheld and walkthrough metal detectors for reliable screening in secure environments such as events, schools, and offices.\n1. High Sensitivity Scanning\n2. Portable & Walkthrough Options\n3. Gold & Weapon Detection\n4. Adjustable Thresholds\n5. Rechargeable Models",
  },
  {
    id: 10,
    image: "/HomeImages/HomeCarouselImage/AccessControlSystem.png",
    heading: "Access Control Systems",
    text: "Control who enters your premises with secure and customizable access control systems for doors, gates, and turnstiles.\n1. RFID & Biometric Entry\n2. Centralized Access Management\n3. Time-Based Permissions\n.4 Integration with Door Locks\n.5 Audit Logs & Reports",
  },
  {
    id: 11,
    image: "/HomeImages/HomeCarouselImage/BoomBarriers&TollSolutions.png",
    heading: "Boom Barriers & Toll Solutions",
    text: "Automated boom barriers and toll management systems for gated communities, industrial complexes, and parking areas.\n1. ANPR Integration\n2. Fast-Action Barriers\n3. Remote Control Access\n4. Toll Payment Systems\n5. Access Logging",
  },
  {
    id: 12,
    image: "/HomeImages/HomeCarouselImage/ElectronicDoorLocks.png",
    heading: "Electronic Door Locks",
    text: "Upgrade to keyless entry with our range of electronic door locks that support fingerprint, RFID, PIN, and smartphone control.\n1. Biometric & PIN Access\n2. Remote Unlocking\n3. Auto-Lock Mechanism\n4. Battery Backup\n5. Tamper Alerts",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto switch with timer
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-[70%] hover:scale-[102%] transition:scale duration-300  mx-auto h-[500px] overflow-hidden rounded-lg shadow-sm">
      {/* Tabs at top */}
      {/* <div className="absolute top-4 left-4 flex gap-4 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              current === index ? "bg-white text-black" : "bg-black/50 text-white"
            }`}
          >
            {slide.heading}
          </button>
        ))}
      </div> */}

      {/* Image Slides */}
      <div className="relative w-full h-full ">
        <AnimatePresence>
          <motion.div
            key={slides[current].id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-[60%] right-0 h-full "
          >
            <Image
              src={slides[current].image}
              alt={slides[current].heading}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Heading & Paragraph */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7] via-[#D946EF] to-[#F472B6] w-[40%] flex flex-col justify-between p-1 z-10">
          <div className="bg-white/95 rounded-lg p-4 h-full">
            <AnimatePresence mode="wait">
              <motion.h2
                key={slides[current].heading}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 mb-3"
              >
                {slides[current].heading}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={slides[current].text}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg whitespace-pre-line text-gray-400 max-w-md "
              >
                {slides[current].text}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-50 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-50 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ArrowRight size={24} />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-[20%] -translate-x-[50%] flex  gap-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`size-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-gray-800" : "bg-gray-800/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
