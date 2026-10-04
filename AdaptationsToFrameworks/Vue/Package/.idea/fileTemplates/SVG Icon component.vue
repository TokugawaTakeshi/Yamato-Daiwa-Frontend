<template lang="pug">

include ../../../node_modules/@yamato-daiwa/frontend/Markup/Assets/SVG_Icons/${SUBDIRECTORY_OF_YDF_SVG_ICONS}/${ICON_NAME}Icon${POSTFIXES}.pug

+${ICON_NAME}${POSTFIXES}--YDF_Icon

</template>


<script>

  export default {
    name: "${ICON_NAME}${POSTFIXES}--YDF_Icon"
  };

</script>