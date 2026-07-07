import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import ScrollToTopButton from "../common/ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isViewPage = location.pathname.startsWith("/feed") && location.pathname !== "/feed";
  const isHomePage = location.pathname === "/";

  return (
    <div id="wrap">
      {!isViewPage && !isHomePage && <Header/>}
      {children}
      {!isViewPage && !isHomePage && <Footer/>}
      {isViewPage && <ScrollToTopButton className={isViewPage ? "scroll-to-top-button--view" : ""}/>}
    </div>
  );
};

export default Layout;