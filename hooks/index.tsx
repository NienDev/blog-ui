import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window === "undefined")
    return {
      width: 0,
      heighT: 0,
    };
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

// !!! Caution: this Hook come from https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
// !!! for more defailt please visit the link above
