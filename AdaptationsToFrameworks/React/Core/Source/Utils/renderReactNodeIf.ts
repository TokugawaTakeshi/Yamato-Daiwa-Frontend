import type { ReactNode } from "react";


export default function renderReactNodeIf(
  condition: boolean,
  reactNode: ReactNode
): ReactNode {
  return condition ? reactNode : null;
}

