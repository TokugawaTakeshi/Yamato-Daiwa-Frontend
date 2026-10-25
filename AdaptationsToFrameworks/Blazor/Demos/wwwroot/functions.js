function setPageDependentStylesheet(styleSheetFileNameWithoutExtension) {

  const targetLink = document.getElementById("PAGE_DEPENDENT_STYLESHEET");

  if (targetLink === null) {
    return;
  }


  targetLink.href = `css/${ styleSheetFileNameWithoutExtension }.css`;

}
