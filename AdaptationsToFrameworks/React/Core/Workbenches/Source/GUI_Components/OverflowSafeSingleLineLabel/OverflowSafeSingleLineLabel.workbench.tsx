import React from "react";
import { createRoot } from "react-dom/client";
import { isNotNull } from "@yamato-daiwa/es-extensions";

import { OverflowSafeSingleLineLabel } from "../../../../Source";


const rootElement: Element | null = document.getElementById("APPLICATION");


if (isNotNull(rootElement)) {
  createRoot(rootElement).render(
    <div className="TestSite">

      <OverflowSafeSingleLineLabel className="PlainLabelTest">
        YourLayoutDefinitelyWillBrakeHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa
      </OverflowSafeSingleLineLabel>

      <dl className="DefinitionsListTest">

        <dt className="DefinitionsListTest-Key">ID</dt>
        <OverflowSafeSingleLineLabel rootElementTag="dd" className="PlainLabelTest">
          YourLayoutDefinitelyWillBrakeHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa
        </OverflowSafeSingleLineLabel>

        <dt className="Displaying name">ID</dt>
        <OverflowSafeSingleLineLabel rootElementTag="dd" className="PlainLabelTest">
          YourLayoutDefinitelyWillBrakeHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHaHa
        </OverflowSafeSingleLineLabel>

      </dl>
    </div>
  );
}
