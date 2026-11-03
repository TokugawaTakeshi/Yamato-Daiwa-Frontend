import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const MultiplicationSignIcon: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M20 18l-8.01-8.01L20 1.98l-2-2-8.01 8.01L1.98-.02l-2 2 8.01 8.01L-.02 18l2 2 8.01-8.01L18 20l2-2z" />
      </svg>
      
    );


export default MultiplicationSignIcon;
