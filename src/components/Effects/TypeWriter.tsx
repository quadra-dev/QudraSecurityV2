"use client";
import { useState, useEffect } from "react";

const words = ["Security", "Precision", "Innovation", "Trust"]; // add more words here
const typingSpeed = 120; // ms per character
const deletingSpeed = 70;
const delayBetweenWords = 1500; // pause after typing a word

export default function TypeWriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delayBetweenWords);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span className="text-[#FF850B]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">█</span>
    </span>
  );
}
