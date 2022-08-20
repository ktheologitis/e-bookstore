import { useEffect, useState } from "react";
import { Breakpoints } from "../lib/enums";

export const useBreakPoint = () => {
  const [breakPoint, setBreakPoint] = useState<Breakpoints>(Breakpoints.Mobile);

  window.addEventListener("resize", function () {
    if (this.window.innerWidth <= 474) setBreakPoint(Breakpoints.Mobile);
    else setBreakPoint(Breakpoints.Desktop);
  });

  useEffect(() => {
    if (window.innerWidth <= 474) setBreakPoint(Breakpoints.Mobile);
    else setBreakPoint(Breakpoints.Desktop);
  }, []);

  return breakPoint;
};
