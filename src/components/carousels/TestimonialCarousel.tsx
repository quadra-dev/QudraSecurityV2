"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card1"; // Assuming card1 is the card component based on file list
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, DLF Cyber City",
    content:
      "Quadra Security provided an excellent CCTV setup for our office. The team was professional, and the installation was neat. Highly recommended for their quick support.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Resident, Sohna Road",
    content:
      "I needed a video door phone and smart lock for my apartment. They guided me to the best product and installed it within 24 hours. Great service!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "HR Manager, Udyog Vihar",
    content:
      "We upgraded our biometric attendance system with Quadra. The transition was smooth, and the new system is very efficient. Their AMC support is also very responsive.",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    role: "Factory Owner, Manesar",
    content:
      "Industrial security needs are different, and Quadra understood that well. The IP cameras and fire alarm system they installed are top-notch.",
    rating: 5,
  },
  {
    name: "Suresh Gupta",
    role: "RWA President, Sector 56",
    content:
      "We hired them for community gate security. The boom barriers and ANPR system work perfectly. It has made our society much safer.",
    rating: 4,
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                <div className="mb-4 text-blue-500">
                  <Quote className="w-8 h-8 opacity-20" />
                </div>
                <p className="text-gray-600 mb-6 flex-grow italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
