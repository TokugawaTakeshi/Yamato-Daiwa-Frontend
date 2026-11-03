import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const MenuIcon__ThreeDots__Vertical__Circled__Outlined: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M10 1.5A8.5 8.5 0 111.5 10 8.51 8.51 0 0110 1.5M10 0a10 10 0 1010 10A10 10 0 0010 0z" />
        <circle
          cx="10"
          cy="10"
          r="1.5"
        />
        <circle
          cx="10"
          cy="4.19"
          r="1.5"
        />
        <circle
          cx="10"
          cy="15.81"
          r="1.5"
        />
      </svg>
      
    );


export default MenuIcon__ThreeDots__Vertical__Circled__Outlined;
