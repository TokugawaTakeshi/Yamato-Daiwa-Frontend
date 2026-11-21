import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const FilteringIcon__Outlined: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M14.54 1.5L9.23 7a1.53 1.53 0 00-.41 1v9.23l-1.1-.68V8.08A1.51 1.51 0 007.27 7L1.7 1.5h12.84M16.25 0H0v1.93l6.22 6.15v9.39l4.1 2.53V8.08l5.93-6.19V0zM16.22 20l-3.78-3.79H20L16.22 20z" />
      </svg>
      
    );


export default FilteringIcon__Outlined;
