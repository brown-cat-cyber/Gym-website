import { SetSelectedPageContext } from "@/contexts/SelectedPageContext";
import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {};

const AnchorLinkSpcial = (props: Props) => {
  const setSelectedPage = useContext(SetSelectedPageContext);

  return (
    <AnchorLink
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p>Learn More</p>
    </AnchorLink>
  );
};

export default AnchorLinkSpcial;
