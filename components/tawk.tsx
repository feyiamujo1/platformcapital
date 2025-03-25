"use client"; // Ensure it runs only on the client side

import { useEffect } from "react";

const Tawk = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/67e295ad9440d3190a72c311/1in6hhc8u";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      script.onload = () => {
        (window as any).Tawk_API.onLoad = function () {
          (window as any).Tawk_API.hide(); // Hide chat widget on load
        };
      };

      document.body.appendChild(script); // Append script to <body>
    }
  }, []);

  return null; // No UI, just loads the script
};

export default Tawk;
