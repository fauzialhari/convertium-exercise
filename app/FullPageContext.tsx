'use client'
import { ReactNode, createContext, useContext } from "react";

export const FullPageContext = createContext(-1);
export function FullPageContextProvider({
  children,
  loadedSlide,
}: {
  children: ReactNode;
  loadedSlide: number;
}) {
  return (
    <FullPageContext.Provider value={loadedSlide}>
      {children}
    </FullPageContext.Provider>
  );
}
export function useFullPageContext() {
  return useContext(FullPageContext);
}
