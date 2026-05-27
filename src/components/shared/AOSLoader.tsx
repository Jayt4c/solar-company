"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSLoader() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,      
      easing: "ease-in-out",
    });
  }, []);

  return null; 
}