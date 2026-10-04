/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { AdmonitionBlock } from "../../../../Source";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";
import { createRoot } from "react-dom/client";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";


createRoot(getExpectedToBeSingleDOM_Element({ selector: "#APPLICATION" })).
    render(
      <>

        <AdmonitionBlock
          title="Test"
          decorativeVariation={ AdmonitionBlock.DecorativeVariations.success }
          dismissible={ true }
        >
          Looks like has been successfully rendered!
        </AdmonitionBlock>

      </>
    );

/* ━━━ Live Template ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
// <AdmonitionBlock
//   title="Title" { /* TODO Edit if the title is required otherwise remove */ }
//   SVG_Icon={ true } { /* TODO Remove if default icon is not required */ }
//   SVG_Icon={ CustomIcon } { /* TODO Edit if the custom icon is required otherwise remove */ }
//   actionBarContent={
//     /* TODO Edit if the action bar is required otherwise remove */
//     <>
//       <Button label="Action 1"/>
//       <Button label="Action 2"/>
//     </>
//   }
//   dismissible={ true } { /* TODO Remove if the dismissing is not required */ }
//   theme={ AdmonitionBlock.Themes.regular } { /* TODO Remove if theme is only one, default or common */ }
//   areThemesCSS_ClassesCommon={ true } { /* TODO Remove if false or has been set to `true` globally */ }
//   geometricVariation={ AdmonitionBlock.GeometricVariations.$GEOMETRIC_VARIATION$ } { /* TODO Remove if the geometric variation is `regular` (default) */ }
//   decorativeVariation={ AdmonitionBlock.DecorativeVariations.$DECORATIVE_VARIATION$ }
// >
//
//   { /* TODO Add the specific content */ }
//
//   { /* TODO Edit if the centered button is required otherwise remove */ }
//   <Button
//     className="AdmonitionBlock--YDF-CenteredButton"
//     label="Action 1"
//   />
//
// </AdmonitionBlock>
