import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const FolderIcon__Filled: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 16"
        className={ className }
      >
        <path d="M18 2h-8L8 0H2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      </svg>
      
    );


export default FolderIcon__Filled;
