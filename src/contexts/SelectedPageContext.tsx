import { SelectedPage } from "@/shared/types";
import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const SelectedPageContext = createContext(SelectedPage.Home);

export const SetSelectedPageContext = createContext(
  (value: SelectedPage) => {}
);

export function SelectedPageProvider({ children }: Props) {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  return (
    <SelectedPageContext.Provider value={selectedPage}>
      <SetSelectedPageContext.Provider value={setSelectedPage}>
        {children}
      </SetSelectedPageContext.Provider>
    </SelectedPageContext.Provider>
  );
}
