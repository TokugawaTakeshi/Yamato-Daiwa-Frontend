import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const MenuIcon__ThreeDots__Horizontal: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 5"
    className={ className }
  >
    <circle cx="10.01" cy="2.5" r="2.5" />
    <circle cx="17.51" cy="2.5" r="2.5" />
    <circle cx="2.5" cy="2.5" r="2.5" />
  </svg>
);


export default MenuIcon__ThreeDots__Horizontal;
