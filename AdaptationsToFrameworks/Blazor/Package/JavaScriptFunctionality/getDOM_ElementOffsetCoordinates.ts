export function getDOM_ElementOffsetCoordinates(targetElement: HTMLElement): { left: number; top: number; } {
  return {
    left: targetElement.offsetLeft,
    top: targetElement.offsetTop
  };
}
