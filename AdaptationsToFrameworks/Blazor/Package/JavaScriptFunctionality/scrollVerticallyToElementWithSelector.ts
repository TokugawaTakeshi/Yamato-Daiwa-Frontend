export function scrollVerticallyToElementWithSelector(targetElementSelector: string, yCoordinate: number): void {
  document.querySelector(targetElementSelector)?.scrollTo({ top: yCoordinate, behavior: "smooth" });
}
