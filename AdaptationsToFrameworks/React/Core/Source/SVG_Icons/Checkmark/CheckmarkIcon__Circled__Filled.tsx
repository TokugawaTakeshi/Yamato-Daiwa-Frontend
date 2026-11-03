import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const CheckmarkIcon__Circled__Filled: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zM8.47 14.74l-.09-.09-4.05-4.05 1.22-1.23 2.92 2.91 5.89-5.9 1.23 1.23z" />
      </svg>
      
    );


export default CheckmarkIcon__Circled__Filled;
