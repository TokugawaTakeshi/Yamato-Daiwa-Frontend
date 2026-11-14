import * as ReactRouter from "react-router";
import type Button from "./../Button";
import React from "react";


const ReactRouterLinkRendererForButton: Button.LinkRenderer<ReactRouter.To> =
     (
      route: string | object,
      requiredAttributes: React.RefAttributes<HTMLAnchorElement>,
      childrenElements: React.ReactNode
    ): React.ReactNode =>
        (
          <ReactRouter.Link
            to={ route }
            { ...requiredAttributes }
          >
            { childrenElements }
          </ReactRouter.Link>
        );


export default ReactRouterLinkRendererForButton;
