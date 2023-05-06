export {

  /* === Arrays ===================================================================================================== */
  addElementsToArray,
  getArrayElementSatisfiesThePredicateIfSuchElementIsExactlyOne,
  getIndexesOfArrayElementsWhichSatisfiesThePredicate,
  getIndexOfArrayElementSatisfiesThePredicateIfSuchElementIsExactlyOne,
  getLastElementOfArray,
  removeArrayElementsByIndexes,
  removeArrayElementsByPredicates,
  replaceArrayElementsByIndexesImmutably,
  replaceArrayElementsByPredicates,
  twoDimensionalizeArray,

  /* === Constants and enumerations ================================================================================= */
  /* --- Date & Time ------------------------------------------------------------------------------------------------ */
  CHARACTERS_COUNT_OF_DATE_PART_IN_ISO8601_STRING,
  DaysOfWeek,
  HOURS_PER_STELLAR_DAY,
  MAXIMAL_DAYS_AT_MONTH,
  MINUTES_PER_HOUR,
  MONTHS_PER_YEAR,
  MonthsNames,
  SECONDS_PER_MINUTE,

  /* --- Date & Time ------------------------------------------------------------------------------------------------ */
  HTTP_Methods,
  HTTP_StatusCodes,
  InformationalResponsesHTTP_StatusCodes,
  SuccessfulResponsesHTTP_StatusCodes,
  RedirectionResponsesHTTP_StatusCodes,
  ClientErrorsHTTP_StatusCodes,
  ServerErrorsHTTP_StatusCodes,


  /* === Data mocking =============================================================================================== */
  DataMocking,
  MockGatewayHelper,
  MockGatewayHelperLocalization__English,


  /* === Date & Time ================================================================================================ */
  /* --- Other ------------------------------------------------------------------------------------------------------ */
  CalendarBuilder,
  getDaysCountInSpecificMonth,
  getMonthNameByNumber,
  getMonthNumberByName,
  getNextMonthNumber,
  getPreviousMonthNumber,
  getYearOfNextMonth,
  getYearOfPreviousMonth,
  hasTimeCome,
  millisecondsToSeconds,
  secondsToMilliseconds,
  TimePoint,
  Timer,


  /* === Default value substituters ================================================================================= */
  substituteWhenNull,
  substituteWhenUndefined,


  /* === Errors ===================================================================================================== */
  AlgorithmMismatchError,
  AlgorithmMismatchErrorLocalization__English,
  ClassRedundantSubsequentInitializationError,
  ClassRedundantSubsequentInitializationErrorLocalization__English,
  ClassRequiredInitializationHasNotBeenExecutedError,
  ClassRequiredInitializationHasNotBeenExecutedErrorLocalization__English,
  ConfigFileNotFoundError,
  ConfigFileNotFoundErrorLocalization__English,
  CrossBrowserIssueError,
  CrossBrowserIssueErrorLocalization__English,
  DataRetrievingFailedError,
  DataRetrievingFailedErrorLocalization__English,
  DataSubmittingFailedError,
  DataSubmittingFailedErrorLocalization__English,
  DOM_ElementRetrievingFailedError,
  DOM_ElementRetrievingFailedErrorLocalization__English,
  FileReadingFailedError,
  FileReadingFailedErrorLocalization__English,
  FileWritingFailedError,
  FileWritingFailedErrorLocalization__English,
  ImproperUsageError,
  ImproperUsageErrorLocalization__English,
  IncompatiblePropertiesInObjectTypeParameterError,
  IncompatiblePropertiesInObjectTypeParameterErrorLocalization__English,
  InterProcessInteractionFailedError,
  InterProcessInteractionFailedErrorLocalization__English,
  InvalidConfigError,
  InvalidConfigErrorLocalization__English,
  InvalidExternalDataError,
  InvalidExternalDataErrorLocalization__English,
  InvalidParameterValueError,
  InvalidParameterValueErrorLocalization__English,
  ModuleDynamicLoadingFailedError,
  ModuleDynamicLoadingFailedErrorLocalization__English,
  UnexpectedEventError,
  UnexpectedEventErrorLocalization__English,
  UnsupportedScenarioError,
  UnsupportedScenarioErrorLocalization__English,


  /* === Logging ==================================================================================================== */
  /* --- PoliteErrorsMessageBuilder --------------------------------------------------------------------------------- */
  PoliteErrorsMessagesBuilder,
  PoliteErrorsMessagesBuilder__English,

  /* --- Rest ------------------------------------------------------------------------------------------------------- */
  Logger,
  LoggerLocalization__English,


  /* === Maps ======================================================================================================= */
  addMultiplePairsToMap,
  createMapBasedOnOtherMap,
  filterMap,


  /* === Numbers ==================================================================================================== */
  formatNumberWith4KetaKanji,
  getArithmeticMean,
  isStringifiedNonNegativeIntegerOfRegularNotation,
  roundDownToSpecificIntegerPlaceValue,
  roundToSpecificNearestIntegerPlaceValue,
  roundToSpecifiedNearestDecimalPlaceValue,
  roundUpToSpecificIntegerPlaceValue,
  separateEach3DigitsGroupWithComma,
  separateEach4DigitsGroupWithComma,


  /* === Objects ===================================================================================================== */
  getObjectPropertySafely,


  /* === Pagination ================================================================================================= */
  computeFirstItemNumberForSpecificPaginationPage,
  computeLastItemNumberForSpecificPaginationPage,
  splitToPaginationCollection,


  /* === Promises queue ============================================================================================= */
  PromisesQueue,


  /* === Random values generators =================================================================================== */
  getRandomString,
  RandomStringsGenerator,
  getRandomArrayElement,
  getRandomBoolean,
  getRandomInteger,
  getRandomLatinCharacter,
  getRandomObjectPropertyValue,
  getRandomSubarray,
  getSpecificBooleanValueWithProbability,
  removeRandomArrayElement,


  /* === Raw object data processor ================================================================================== */
  RawObjectDataProcessor,
  RawObjectDataProcessorLocalization__English,
  convertPotentialStringToNumberIfPossible,
  convertPotentialStringToIntegerIfPossible,
  convertPotentialStringToFloatIfPossible,


  /* === Sets ======================================================================================================= */
  createSetBasedOnOtherSet,
  addMultipleElementsToSet,


  /* === Strings ==================================================================================================== */
  /* --- Characters assets ------------------------------------------------------------------------------------------ */
  EscapeCharacters,
  lowercaseLatinCharacters,
  SpaceCharacters,
  SpaceCharactersStringifiedHexCharactersForRegularExpressionWithUnicodeFlag,
  stringifiedDigits,
  uppercaseLatinCharacters,

  /* --- Regular expressions ---------------------------------------------------------------------------------------- */
  getMatchingWithFirstRegularExpressionCapturingGroup,
  extractMatchingsWithRegularExpression,

  /* --- URI -------------------------------------------------------------------------------------------------------- */
  /* --- Files and directories --- */
  appendLastFileNameExtension,
  extractAllFileNameExtensions,
  extractLastExtensionOfFileName,

  /* --- Rest --- */
  appendFragmentToURI,
  getURI_PartWithoutFragment,
  getURI_Fragment,

  /* --- Rest ------------------------------------------------------------------------------------------------------- */
  appendCharacterIfItDoesNotPresentInLastPosition,
  areStringifiedDigitsOnly,
  capitalizeFirstCharacter,
  EmailAddress,
  explodeCasedPhraseToWords,
  getEnglishAbbreviatedOrdinalNumber,
  getLastCharacter,
  getPositionsOfAllSubstringOccurrences,
  hasStringOnlySpecificCharacters,
  insertSubstring,
  insertSubstringIf,
  isIPv4AddressLiesInRange,
  removeAllSpecifiedCharacters,
  removeLastCharacter,
  removeNonDigitsCharacters,
  removeNthCharacter,
  removeSpecificCharacterFromCertainPosition,
  replace2OrMoreSpacesTo1,
  replaceBrHTML_TagToNewLineEscapeSequence,
  replaceDoubleBackslashesWithForwardSlashes,
  reverseString,
  splitString,
  stringifyAndFormatArbitraryValue,
  toLowerCamelCase,
  toScreamingSnakeCase,
  toUpperCamelCase,
  trimSpaces,


  /* === Type guards ================================================================================================ */
  /* --- Arrays ----------------------------------------------------------------------------------------------------- */
  isArrayOfCertainTypeElements,
  isArrayOfLength,
  isEmptyArray,
  isNonEmptyArray,

  /* --- Nullables -------------------------------------------------------------------------------------------------- */
  isNeitherUndefinedNorNull,
  isEitherUndefinedOrNull,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,

  /* --- Numbers ---------------------------------------------------------------------------------------------------- */
  isDecimalFractionOfAnySign,
  isNaturalNumber,
  isNegativeDecimalFraction,
  isNegativeInteger,
  isNegativeIntegerOrZero,
  isNonNegativeInteger,
  isNumber,
  isPositiveDecimalFraction,

  /* --- Objects ---------------------------------------------------------------------------------------------------- */
  isArbitraryObject,
  isEmptyObject,
  isNonEmptyArbitraryObject,
  isNonEmptyObject,
  isNonNullObject,

  /* --- Strings ---------------------------------------------------------------------------------------------------- */
  isEmptyString,
  isNonEmptyString,
  isString,
  isStringOfLength,
  IsStringOfLengthCheckingOperation,

  /* --- Others ----------------------------------------------------------------------------------------------------- */
  isBoolean,
  isElementOfEnumeration,
  isFunctionLike,


  /* === Value transformers ========================================================================================= */
  emptyStringToNull,
  nullToEmptyString,
  nullToUndefined,
  nullToZero,
  undefinedToEmptyArray,
  undefinedToEmptyString,
  undefinedToNull

} from "@yamato-daiwa/es-extensions";

export { default as buildEmailLinkHrefAttributeValue } from "./PugExtensions/buildEmailLinkHrefAttributeValue";
export { default as buildPhoneNumberLinkHrefAttributeValue } from "./PugExtensions/buildPhoneNumberLinkHrefAttributeValue";

export { default as PugMixinsObjectTypeParametersProcessor } from "./PugExtensions/PugMixinsObjectTypeParametersProcessor";
