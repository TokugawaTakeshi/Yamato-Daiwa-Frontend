<template lang="pug">

  .Snackbar--YD(
    v-if="isDisplaying"
    role="status"
    aria-live="assertive"
  )

    p.Snackbar--YDF-Message(
      v-html="messageTextOrHTML"
    )

    //-


      @using YamatoDaiwa.Frontend.SVG_Icons.Checkmark
      @using YamatoDaiwa.Frontend.SVG_Icons.ExclamationMark
      @using YamatoDaiwa.Frontend.SVG_Icons.InfoSign
      @using YamatoDaiwa.Frontend.SVG_Icons.MultiplicationSign


      @if (this.isDisplaying)
      {

        <div
          class=@this.classAttributeValueForRootElement
          role="status"
          aria-live="polite"
        >

          @switch (this._decorativeVariation)
          {
            case nameof(StandardDecorativeVariations.error):
              <ExclamationMarkIcon__Circled__Filled rootElementModifierCSS_Class="Snackbar--YDF-Icon" />
              break;
            case nameof(StandardDecorativeVariations.warning):
              <ExclamationMarkIcon__Triangled__Filled rootElementModifierCSS_Class="Snackbar--YDF-Icon"/>
              break;
            case nameof(StandardDecorativeVariations.info):
              <InfoSignIcon__Circled__Filled rootElementModifierCSS_Class="Snackbar--YDF-Icon" />
              break;
            case nameof(StandardDecorativeVariations.success):
              <CheckmarkIcon__Circled__Filled rootElementModifierCSS_Class="Snackbar--YDF-Icon" />
              break;
          }

          <p class="Snackbar--YDF-Message">@(this.message)</p>

          <button
            class="Snackbar--YDF-DismissingButton"
            type="button"
            aria-label=@Snackbar.localization.dismissingButton.accessibilityGuidance
            @onclick=@Snackbar.hide
          >
            <MultiplicationSignIcon__Octagoned__Filled rootElementModifierCSS_Class="Snackbar--YDF-DismissingButton-Icon" />
          </button>

        </div>

      }

      ===============================================================================
      mixin Snackbar--YDF(properties, statesSimulations)

      -

        const {
          textOrHTML,
          position,
          theme,
          areThemesCSS_ClassesCommon,
          geometricVariation,
          decorativeVariation
        } = YDF.processObjectTypeParameterOfPugMixin({
          rawParameter: properties,
          parameterNumber: 1,
          parameterName: "properties",
          parameterPropertiesSpecification: Snackbar__YDF.propertiesSpecification,
          mixinName: Snackbar__YDF.CSS_NAMESPACE
        });

        const {
          mounted,
          hidden
        } = YDF.processObjectTypeParameterOfPugMixin({
          rawParameter: statesSimulations,
          parameterNumber: 2,
          parameterName: "statesSimulations",
          parameterPropertiesSpecification: Snackbar__YDF.statesSimulationsSpecification,
          mixinName: Snackbar__YDF.CSS_NAMESPACE
        });

        const rootElementModifierCSS_Classes = [

          ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
            theme,
            allThemes: Snackbar__YDF.Themes,
            CSS_Namespace: Snackbar__YDF.CSS_NAMESPACE,
            areThemesCSS_ClassesCommon
          }),

          ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
            geometricVariation,
            allGeometricVariations: Snackbar__YDF.GeometricVariations,
            CSS_Namespace: Snackbar__YDF.CSS_NAMESPACE
          }),

          ...ComponentsAuxiliaries.addDecorativeVariationCSS_ClassToArrayIfMust({
            decorativeVariation,
            allDecorativeVariations: Snackbar__YDF.DecorativeVariations,
            CSS_Namespace: Snackbar__YDF.CSS_NAMESPACE
          }),

          `${ Snackbar__YDF.CSS_NAMESPACE }__${ YDF.toUpperCamelCase(position) }Position`,

          ...hidden ?
              [
                `${ Snackbar__YDF.CSS_NAMESPACE }-Transition__Appearing`,
                `${ Snackbar__YDF.CSS_NAMESPACE }-Transition__HiddenState`
              ] :
              [
                `${ Snackbar__YDF.CSS_NAMESPACE }-Transition__DisplayingState`,
                `${ Snackbar__YDF.CSS_NAMESPACE }-Transition__Disappearing`
              ]

        ];

      //- [ Reference ] https://www.magentaa11y.com/checklist-web/toast-snackbar/

      if mounted

        .Snackbar--YDF&attributes(attributes)(
          class=rootElementModifierCSS_Classes
          role="status"
          aria-live="assertive"
          hidden=hidden
        )

          +ExclamationMark__Circled__Filled--YDF_Icon.Snackbar--YDF-SVG_Icon

          p.Snackbar--YDF-Message!= textOrHTML

          button.Snackbar--YDF-DismissingButton(
            type="button"
            aria-label=Snackbar__YDF.localization.dismissingButton.accessibilityGuidance
          ): +MultiplicationSign__Boxed__Filled--YDF_Icon.Snackbar--YDF-DismissingButton-Icon


</template>


<script lang="ts">

  /* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  import SnackbarLogic from "./SnackbarLogic.vue";

  /* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import ExclamationMarkIcon__Circled__Filled from
      "../../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Circled__Filled.vue";
  import ExclamationMarkIcon__Triangled__Filled from
      "../../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Triangled__Filled.vue";
  import InfoSignIcon__Circled__Filled from "../../SVG_Icons/InfoSign/InfoSignIcon__Circled__Filled.vue";
  import CheckmarkIcon__Circled__Filled from "../../SVG_Icons/Checkmark/CheckmarkIcon__Circled__Filled.vue";
  import MultiplicationSignIcon__Octagoned__Filled from
      "../../SVG_Icons/MultiplicationSign/MultiplicationSignIcon__Octagoned__Filled.vue";

  /* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  /* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


  @VueComponentConfiguration({
    name: SnackbarLogic.CSS_NAMESPACE,
    components: {
      ExclamationMarkIcon__Circled__Filled,
      ExclamationMarkIcon__Triangled__Filled,
      InfoSignIcon__Circled__Filled,
      CheckmarkIcon__Circled__Filled,
      MultiplicationSignIcon__Octagoned__Filled
    }
  })
  class Snackbar extends SnackbarLogic {}


  export default Snackbar.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(Snackbar)
  );

</script>
