//- TODO Correct the relative path to "node_modules" and remove this comment
extends RELATIVE/PATH/TO/node_modules/@yamato-daiwa/frontend/PagesTemplates/RegularWebPage.pug

//- Or:
//- TODO Correct the relative path to your layout (extended from "RegularWebPage.pug") and remove this comment
extends RELATIVE/PATH/TO/00-Components/SharedSingletons/Layouts/Main/MainLayout.pug


block append Metadata

  -

    HTML_PAGE_LANGUAGE = "en";  // TODO Specify the code of your language (see https://www.w3schools.com/tags/ref_language_codes.asp) and remove this comment 
    HTML_PAGE_TITLE = "Top page - You great web site/application";　　// TODO Edit the title of your page and remove this comment

    // TODO Edit the meta of your page or remove it you don't need the Search Engine Optimization for now.
    HTML_PageMetaData = {
      description: "The introduction of sedans of NNN company",
      keywords: "NNN, sedan",
      author: "NNN company"
    };

    // TODO Edit the path to your favicon and remove this comment
    FAVICON_URI = "PATH/TO/FAVICON/FILE/favicon.ico"

    // TODO Correct the path to AMP version of this page or remove it if no AMP version planned for this page
    PAGE_AMP_VERSION_URI = "AMP_Version.html"

    // TODO Edit the path to your stylesheet(s) and remove this comment
    styleSheetsURIs = [ "./TopPage.css", "OtherStylesheet.css" ];

    // TODO Edit the path to your scripts(s) which must be added to end of the head or remove it if no such scripts
    scriptsURIs.endOfHead = [ "Script1.js", "Script2.js" ]

    // TODO Edit the path to your scripts(s) which must be added to end of the body or remove it if no such scripts
    scriptsURIs.endOfBody = [ "TopPage.js", "Script3.js" ]


block append Data

  -

    // TODO add some data (actual or mock) or include it from external file to this block, or remove this block it you don't need the data
    const mockData = {};


block append Requirements

  //- TODO Include files with mixins here and remove this comment
  include RELATIVE/PATH/TO/00-Components/Components.pug

  include _Partials/Partial1/Partial1.pug
  include _Partials/Partial2/Partial2.pug


block append StatesSimulations

  -

    // TODO Edit the state simulations actual for your page and remove this comment.
    const TopPageStateSimulations = {
      loading: false,
      error: false,
      noData: false,
      simulateLoadingState() { this.loading = true; },
      simulateErrorState() { this.error = true; },
      simulateNoDataState() { this.noData = true; }
    }


block append HeadBegin

  //- TODO You can add something in the begin of the HTML head, but make sure that you are understanding what you are doing


block append StylesLinks

  //- TODO You can declare the internal styles here


block append HeadScriptsLinks

  //- TODO You can add internal scripts here (for example, Google Analytics™) but if possible add them to the end of body instead


block append PageContent

  //- 
    TODO If this page extended from some layout, maybe you need to append the markup to other block instead of "PageContent"
    declared inside `PageContent` in layout file

  //- TODO Fill your page with target HTML code (in Pug syntax, of course).
  +Partial1.TopPage-Partial1
  +Partial2.TopPage-Partial2


block append EndBodyScriptsLinks

  //- TODO You can add more scripts here if `scriptsURIs.endOfBody` was not enough for some reason
