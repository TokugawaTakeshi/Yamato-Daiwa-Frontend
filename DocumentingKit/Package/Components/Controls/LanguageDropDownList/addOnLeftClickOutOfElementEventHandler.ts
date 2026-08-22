export default function addOnLeftClickOutOfElementEventHandler(
  compoundParameter: Readonly<
    {
      container?: Element;
      targetElement: Element;
      handler: (leftClickEvent: MouseEvent) => unknown;
    }
  >
): void {

  const container: Element | Window = compoundParameter.container ?? window;
  const targetElement: Element = compoundParameter.targetElement;

  container.addEventListener("click", (event: Event): void => {

    if (!(event instanceof MouseEvent)) {
      return;
    }

    if (!(event.target instanceof Element)) {
      return;
    }


    if (!targetElement.contains(event.target)) {
      compoundParameter.handler(event);
    }

  });

}
