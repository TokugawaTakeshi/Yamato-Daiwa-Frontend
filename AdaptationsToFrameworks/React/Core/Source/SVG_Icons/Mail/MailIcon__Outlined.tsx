import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const MailIcon__Outlined: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 15.79"
        className={ className }
      >
        <path d="M18.5 1.5v12.79h-17V1.5h17M20 0H0v15.79h20V0z" />
        <path d="M17.48 1.5L10 7.09 2.52 1.5h15M20 0H0v1.5L10 9l10-7.5V0z" />
      </svg>
      
    );


export default MailIcon__Outlined;
