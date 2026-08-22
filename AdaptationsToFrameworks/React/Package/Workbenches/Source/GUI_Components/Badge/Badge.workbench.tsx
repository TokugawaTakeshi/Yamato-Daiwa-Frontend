/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { Badge, BadgeLoadingPlaceholder } from "../../../../Source";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";
import { createRoot } from "react-dom/client";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";


createRoot(getExpectedToBeSingleDOM_Element({ selector: "#APPLICATION" })).
    render(
      <>

        <Badge
          valueLabel="Test"
          decorativeVariation={ Badge.DecorativeVariations.calmingBright }
        />

        <BadgeLoadingPlaceholder/>

      </>
    );

/* ━━━ Live Template ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
// <Badge
//   SVG_Icon={ CalendarIcon } { /* TODO Replace icon or, if no icon required, remove it */ }
//   keyLabel="$KEY$" { /* TODO Remove if the badge is value-only */ }
//   valueLabel="$VALUE$"
//   rootElementTag="div" { /* TODO Remove is "span" is fine */ }
//   theme={ Badge.Themes.regular }$END$ { /* TODO Remove if theme is only one, default or common */ }
//   areThemesCSS_ClassesCommon={ true } { /* TODO Remove if false or has been set to `true` globally */ }
//   geometricVariation={ Badge.DecorativeVariations.$GEOMETRIC_VARIATION$ } { /* TODO Remove if the geometric variation is `regular` (default) */ }
//   geometricModifiers={ [ Badge.GeometricModifiers.pillShape, Badge.GeometricModifiers.singleLine ] } { /* TODO Remove if no geometric modifiers required */ }
//   decorativeVariation={ Badge.DecorativeVariations.$DECORATIVE_VARIATION$ }
//   decorativeModifiers={ [ Badge.DecorativeModifiers.bordersDisguising, Badge.DecorativeModifiers.noBackground ] } { /* TODO Remove if no decorative modifiers required */ }
// />
//
// <BadgeLoadingPlaceholder
//   theme={ Badge.Themes.regular$END$ } { /* TODO Remove if theme is only one, default or external */ }
//   areThemesCSS_ClassesCommon={ true } { /* TODO Remove if false or has been set to `true` globally */ }
//   geometricVariation={ Badge.DecorativeVariations.$GEOMETRIC_VARIATION$ } { /* TODO Remove if the geometric variation is `regular` (default) */ }
//   geometricModifiers={ [ Badge.GeometricModifiers.pillShape ] } { /* TODO Remove if no geometric modifiers required */ }
// />
