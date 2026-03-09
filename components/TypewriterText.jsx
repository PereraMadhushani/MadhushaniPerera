"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Web Developer",
  "UI/UX Designer",
  "React Developer",
  "Full Stack Developer",
];

const TYPE_SPEED   = 80;   // ms per character typed
const DELETE_SPEED = 45;   // ms per character deleted
const HOLD_DELAY   = 1600; // ms to hold the completed word
const NEXT_DELAY   = 380;  // ms pause before typing the next word

const TypewriterText = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx]     = useState(0);
  const [phase, setPhase]         = useState("typing"); // "typing" | "holding" | "deleting" | "waiting"

  useEffect(() => {
    const current = ROLES[roleIdx];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), HOLD_DELAY);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          DELETE_SPEED
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIdx((i) => (i + 1) % ROLES.length);
          setPhase("typing");
        }, NEXT_DELAY);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, phase, roleIdx]);

  return (
    <span className="typewriter-wrap">
      <span className="typewriter-text">{displayed}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
};

export default TypewriterText;
