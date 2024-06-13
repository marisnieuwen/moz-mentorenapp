import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component to reset scroll position to the top
 * whenever the pathname changes. This ensures users start at
 * the top of the page when navigating to a new route.
 */

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
