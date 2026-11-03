import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const InfoSignIcon__Circled__Outlined: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M10 1.5A8.5 8.5 0 111.5 10 8.51 8.51 0 0110 1.5M10 0a10 10 0 1010 10A10 10 0 0010 0z" />
        <path d="M11.17 15.58H8.82V8.93h2.35zM11.17 6.68H8.91V4.42h2.26z" />
      </svg>
      
    );


export default InfoSignIcon__Circled__Outlined;
