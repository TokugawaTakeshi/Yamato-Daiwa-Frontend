import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const HamburgerMenuIcon: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 13.74"
        className={ className }
      >
        <path d="M0 0h20v3H0zM0 5.37h20v3H0zM0 10.74h20v3H0z" />
      </svg>
      
    );


export default HamburgerMenuIcon;
