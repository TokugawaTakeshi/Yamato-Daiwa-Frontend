import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const MenuIcon__ThreeDots__Vertical: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 5 20"
        className={ className }
      >
        <circle
          cx="2.5"
          cy="10"
          r="2.5"
        />
        <circle
          cx="2.5"
          cy="2.49"
          r="2.5"
        />
        <circle
          cx="2.5"
          cy="17.51"
          r="2.5"
        />
      </svg>
      
    );


export default MenuIcon__ThreeDots__Vertical;
