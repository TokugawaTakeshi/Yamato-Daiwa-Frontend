export { 
  
  CollapsingAnimation,
   
  ExpandingAnimation
   
} from "@yamato-daiwa/frontend";


export function putFocusOnElement(element: HTMLElement): void {
  element.focus();
}

export function triggerLeftClick(element: HTMLElement): void {
  element.click();
}

export function getDOM_ElementOffsetCoordinates(targetElement: HTMLElement): { left: number, top: number; } {
  return {
    left: targetElement.offsetLeft,
    top: targetElement.offsetTop
  };
}
