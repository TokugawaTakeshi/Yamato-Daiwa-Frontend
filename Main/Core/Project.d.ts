declare module "*.pug" {
  const HTML_Template: string;
  export default HTML_Template;
}

declare module "*.renderer.pug" {
  export default function (dynamicData: Readonly<{ [key: string]: unknown; }>): string;
}
