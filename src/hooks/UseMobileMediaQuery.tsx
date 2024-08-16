"use client";

import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { MobileScreenContextValue } from "@/types";

const MobileScreenContext = createContext<MobileScreenContextValue>({} as MobileScreenContextValue);

type Props = {
  children: React.ReactNode;
};

export const MobileScreenProvider: React.FC<Props> = ({ children }) => {
  const [mobileScreen, setMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setMobileScreen(true);
      else setMobileScreen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const childrenWithNav = <>{children}</>;

  return (
    <MobileScreenContext.Provider
      value={{
        mobileScreen,
      }}
    >
      {childrenWithNav}
    </MobileScreenContext.Provider>
  );
};

export const useMobileScreen = (): MobileScreenContextValue => {
  const context = useContext(MobileScreenContext);
  if (!context) {
    throw new Error("useMobileScreen must be used within a MobileScreenProvider");
  }
  return context;
};