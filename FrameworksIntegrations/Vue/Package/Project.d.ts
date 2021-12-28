declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}

declare module "*.pug" {
  const template: string;
  export default template;
}
