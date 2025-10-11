"use client";

import React from "react";
import MarqueeItem from "./MarqueeItem";

//hawk vision and western digital left
const HomeMarquee: React.FC = () => {
  const upperMarquee: string[] = [
    "/HomeImages/HomeMarqueeImage/CPPlusLogo.webp",
     "/HomeImages/HomeMarqueeImage/prama.png",
     "/HomeImages/HomeMarqueeImage/Hikvision.png",
     "/HomeImages/HomeMarqueeImage/beetel.png",
     "/HomeImages/HomeMarqueeImage/daichi.png",
     "/HomeImages/HomeMarqueeImage/dlink-Photoroom.png",
     "/HomeImages/HomeMarqueeImage/essl.png",
     "/HomeImages/HomeMarqueeImage/godrej.png",
     "/HomeImages/HomeMarqueeImage/tenda.png",
     "/HomeImages/HomeMarqueeImage/consistent.png",
  ];


  return (
    <div className="container mx-auto">
        
      <MarqueeItem images={upperMarquee} from="0%" to="-100%" />
    </div>
  );
};

export default HomeMarquee;

