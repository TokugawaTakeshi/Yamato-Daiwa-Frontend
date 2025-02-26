import React from "react";

abstract class Gallery<PartialsFlags extends Readonly<{ [key: string]: boolean | undefined; }>>
  extends React.Component<Gallery.Properties<PartialsFlags>>
/* eslint-disable-next-line @stylistic/brace-style -- In this case, the Allman style is more elegant. */
{

  protected get mustRenderAllPartials(): boolean {
    return Object.values(this.props.partialsFlags).every((value: boolean | undefined): boolean => value === true);
  }

}


namespace Gallery {

  export type Properties<PartialsFlags extends Readonly<{ [key: string]: boolean | undefined; }>> = Readonly<{
    mustVisuallyHideTopHeading: boolean;
    mustVisuallyHideAllHeadings: boolean;
    partialsFlags: PartialsFlags;
  }>;

}


export default Gallery;
