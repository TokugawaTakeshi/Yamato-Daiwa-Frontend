/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { Button, ReactRouterLinkRendererForButton } from "../../../../../../Source";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import React from "react";
import * as ReactRouter from "react-router";
import { createRoot } from "react-dom/client";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";


Button.internalLinkRenderer = ReactRouterLinkRendererForButton;


createRoot(getExpectedToBeSingleDOM_Element({ selector: "#APPLICATION" })).
    render(
      <ReactRouter.HashRouter>
        <ReactRouter.Routes>
          <ReactRouter.Route
            path="/"
            element={
              <div style={ { display: "grid", gap: 12 } }>
                <Button label="Plain Button" />
                <Button
                  label="To Other Route"
                  route="/another_one"
                />
              </div>
            }
          />
          <ReactRouter.Route
            path="/another_one"
            element={
              <div style={ { display: "grid", gap: 12 } }>
                <Button label="Plain Button" />
                <Button
                  label="Back"
                  route="/"
                />
              </div>
            }
          />
        </ReactRouter.Routes>
      </ReactRouter.HashRouter>
    );
