import { useMediaQuery } from "react-responsive";

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
};

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.mobile });
  const isTablet = useMediaQuery({
    minWidth: BREAKPOINTS.mobile + 1,
    maxWidth: BREAKPOINTS.tablet
  });
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.tablet + 1 });

  return {
    isMobile,
    isTablet,
    isDesktop,
    breakpoints: BREAKPOINTS
  };
};