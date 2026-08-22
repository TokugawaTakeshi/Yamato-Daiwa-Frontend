/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import AdmonitionBlockGallery from "./_AdmonitionBlockGallery";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";
import { createRoot } from "react-dom/client";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";


const applicationRootElement: HTMLElement = getExpectedToBeSingleDOM_Element({
  selector: "#APPLICATION",
  expectedDOM_ElementSubtype: HTMLElement
});

const hasPartialNameBeenSpecified: boolean = isNonEmptyString(applicationRootElement.dataset.partial_name);


createRoot(applicationRootElement).render(
  <AdmonitionBlockGallery
    mustVisuallyHideTopHeading={ applicationRootElement.dataset.must_visually_hide_top_heading === "" }
    mustVisuallyHideAllHeadings={ applicationRootElement.dataset.must_visually_hide_all_headings === "" }
    partialsFlags={
      {
        minimal:
          !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "MINIMAL",
          titles:
              !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "TITLES",
          defaultSVG_Icons:
              !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "DEFAULT_SVG_ICONS",
          customSVG_Icons:
              !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "CUSTOM_SVG_ICONS",
          titlesAndSVG_Icons:
              !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "TITLES_AND_SVG_ICONS",
          dismissingButton:
              !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "DISMISSING_BUTTON",
          centeredButton:
              !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "CENTERED_BUTTON",
          actionBar:
              !hasPartialNameBeenSpecified || applicationRootElement.dataset.partial_name === "ACTION_BAR"
      }
    }
  />
);
