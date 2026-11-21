<template lang="pug">

  a.DummyLogoLink--YDF(
    href="#"
  )

    .DummyLogoLink--YDF-Icon {{ iconTextContent }}

    .DummyLogoLink--YDF-Heading {{ heading }}
    .DummyLogoLink--YDF-Subheading {{ subheading }}

</template>


<script lang="ts">

  import {
    Component as VueComponentConfiguration,
    Vue as VueComponent,
    Prop as VueProperty,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  import type VuePropertyValidator from "../../_VuePropertiesValidators/VuePropertyValidator";
  import NonEmptyStringVuePropertyValidator from "../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
  import preventNullForOptionalVueProperty from "../../_Decorators/preventNullForOptionalVueProperty";

  @VueComponentConfiguration({
    name: "DummyLogoLink",
    components: {}
  })
  class DummyLogoLink extends VueComponent {

    public static readonly CSS_NAMESPACE: string = "DummyLogoLink--YDF";

    @VueProperty({
      required: true,
      get validator(): VuePropertyValidator {
        return NonEmptyStringVuePropertyValidator({
          propertyName: "iconTextContent",
          componentName: DummyLogoLink.CSS_NAMESPACE,
          isPropertyRequired: this.required === true
        });
      }
    })
    @preventNullForOptionalVueProperty
    protected readonly iconTextContent!: string;

    @VueProperty({
      default: "NNN Application prototype",
      get validator(): VuePropertyValidator {
        return NonEmptyStringVuePropertyValidator({
          propertyName: "heading",
          componentName: DummyLogoLink.CSS_NAMESPACE,
          isPropertyRequired: this.required === true
        });
      }
    })
    @preventNullForOptionalVueProperty
    protected readonly heading!: string;

    @VueProperty({
      required: true,
      get validator(): VuePropertyValidator {
        return NonEmptyStringVuePropertyValidator({
          propertyName: "subheading",
          componentName: DummyLogoLink.CSS_NAMESPACE,
          isPropertyRequired: this.required === true
        });
      }
    })
    @preventNullForOptionalVueProperty
    protected readonly subheading!: string;

  }


  export default transformToOptionAPI_VueComponent(DummyLogoLink);

</script>
