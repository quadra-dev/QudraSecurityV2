"use client";

import React from "react";
import MarqueeItem from "./MarqueeItem";


const HomeMarquee: React.FC = () => {
  const upperMarquee: string[] = [
    "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
  ];

  const lowerMarquee: string[] = [
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
     "/HomeImages/CPPlusLogo.webp",
  ];

  return (
    <div className="container mx-auto">
        
      <MarqueeItem images={upperMarquee} from="0%" to="-100%" />
      <MarqueeItem images={lowerMarquee} from="-100%" to="0%" />
    </div>
  );
};

export default HomeMarquee;

