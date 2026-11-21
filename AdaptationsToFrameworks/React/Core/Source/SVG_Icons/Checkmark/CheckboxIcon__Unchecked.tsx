import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const CheckboxIcon__Unchecked: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M18.5 1.5v17h-17v-17h17M20 0H0v20h20V0z" />
      </svg>
      
    );


export default CheckboxIcon__Unchecked;
