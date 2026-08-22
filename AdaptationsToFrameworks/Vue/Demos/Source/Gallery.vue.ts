import {
  Vue as VueComponent,
  Component as VueComponentConfiguration,
  Prop as VueProperty
} from "vue-facing-decorator";


@VueComponentConfiguration({})
export default abstract class Gallery<
  PartialFlags extends Readonly<{ [partialKey: string]: boolean | undefined; }>
> extends VueComponent {

  protected abstract initializeNonReactiveClassFields(): void;


  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({ type: Boolean, default: false })
  protected readonly mustVisuallyHideTopHeading!: boolean;

  @VueProperty({ type: Boolean, default: false })
  protected readonly mustVisuallyHideAllHeadings!: boolean;

  /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
  * Maybe it is possible to pass the default value from the parent class, but while all properties are optional it is
  *   not required. */
  @VueProperty({ type: Object, default: (): PartialFlags => ({}) as PartialFlags })
  protected readonly partialsFlags!: PartialFlags;


  /* ━━━ Computed ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get mustRenderAllPartials(): boolean {
    return !Object.values(this.partialsFlags).some((value: boolean | undefined): boolean => value !== true);
  }


  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected THEME_KEY_LABEL_PREFIX: string = "";
  protected GEOMETRIC_VARIATION_KEY_LABEL_PREFIX: string = "";
  protected DECORATIVE_VARIATION_KEY_LABEL_PREFIX: string = "";


  /* ━━━ Lifecycle hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected created(): void {
    this.initializeNonReactiveClassFields();
  }

}
