import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const CheckboxIcon__Checked: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M0 .13v20h20v-20zm8.47 14.73l-.09-.09-4.05-4L5.55 9.5l2.92 2.91 5.89-5.9 1.23 1.23z" />
      </svg>
      
    );


export default CheckboxIcon__Checked;
