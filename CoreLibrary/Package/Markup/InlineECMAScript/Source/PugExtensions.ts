export {

  /* ━━━ AJAX ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  AJAX_Service,
  FetchAPI_Service,
  serializeURI_QueryParameters,


  /* ━━━ Arrays ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  addElementsToArray,
  addElementsToArrayIfTheyAreNotPresentOtherwiseRemove,
  createArrayOfNaturalNumbers,
  cropArray,
  getArrayElementSatisfiesThePredicateIfSuchElementIsExactlyOne,
  getIndexesOfSatisfiesThePredicateArrayElements,
  getIndexOfArrayElementSatisfiesThePredicateIfSuchElementIsExactlyOne,
  getLastElementOfArray,
  moveArrayElementTo1Position,
  removeArrayElementsByIndexes,
  removeArrayElementsByPredicates,
  replaceArrayElementsByIndexesImmutably,
  replaceArrayElementsByPredicates,
  swapArrayElements,
  twoDimensionalizeArray,


  /* ━━━ Constants and enumerations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── HTTP ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
  HTTP_Methods,
  HTTP_StatusCodes,
  InformationalResponsesHTTP_StatusCodes,
  SuccessfulResponsesHTTP_StatusCodes,
  RedirectionResponsesHTTP_StatusCodes,
  ClientErrorsHTTP_StatusCodes,
  ServerErrorsHTTP_StatusCodes,

  /* ─── Re-exporting from "fundamental-constants" ────────────────────────────────────────────────────────────────── */
  HTTP_DEFAULT_PORT,
  HTTPS_DEFAULT_PORT,
  NETWORK_PORT_MAXIMAL_VALUE,
  NETWORK_PORT_MINIMAL_VALUE,
  DAYS_COUNT_IN_WEEK,
  DaysOfWeekNames,
  HOURS_COUNT_IN_STELLAR_DAY,
  MAXIMAL_DAYS_IN_MONTH,
  MINUTES_COUNT_IN_HOUR,
  MONTHS_COUNT_IN_YEAR,
  MonthsNames,
  SECONDS_COUNT_IN_MINUTE,
  MAXIMAL_CHARACTERS_COUNT_IN_DATE_PART_OF_ISO8601_STRING,
  CHARACTERS_COUNT_IN_FULL_ISO8601_STRING,
  EMAIL_ADDRESS_VALID_PATTERN,
  MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS,
  MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS,


  /* ━━━ Data mocking ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  DataMocking,
  MockGatewayHelper,
  MockGatewayHelperLocalization__English,


  /* ━━━ Date & Time ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  CalendarBuilder,
  convert24HoursFormatTo12HoursFormat,
  DateWithoutTime,
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


  /* ━━━ Default value substituters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  substituteWhenNull,
  substituteWhenUndefined,


  /* ━━━ Errors ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  AlgorithmMismatchError,
  algorithmMismatchErrorLocalization__english,
  ClassRedundantSubsequentInitializationError,
  classRedundantSubsequentInitializationErrorLocalization__english,
  ClassRequiredInitializationHasNotBeenExecutedError,
  classRequiredInitializationHasNotBeenExecutedErrorLocalization__english,
  ConfigFileNotFoundError,
  configFileNotFoundErrorLocalization__english,
  CrossBrowserIssueError,
  crossBrowserIssueErrorLocalization__english,
  DataRetrievingFailedError,
  dataRetrievingFailedErrorLocalization__english,
  DataSubmittingFailedError,
  dataSubmittingFailedErrorLocalization__english,
  DOM_ElementRetrievingFailedError,
  DOM_ElementRetrievingFailedErrorLocalization__english,
  FileReadingFailedError,
  fileReadingFailedErrorLocalization__english,
  FileWritingFailedError,
  fileWritingFailedErrorLocalization__english,
  ImproperUsageError,
  improperUsageErrorLocalization__english,
  IncompatiblePropertiesInObjectTypeParameterError,
  incompatiblePropertiesInObjectTypeParameterErrorLocalization__english,
  InterProcessInteractionFailedError,
  interProcessInteractionFailedErrorLocalization__english,
  InvalidConfigError,
  invalidConfigErrorLocalization__english,
  InvalidExternalDataError,
  invalidExternalDataErrorLocalization__english,
  InvalidParameterValueError,
  invalidParameterValueErrorLocalization__english,
  ModuleDynamicLoadingFailedError,
  moduleDynamicLoadingFailedErrorLocalization__english,
  UnexpectedEventError,
  unexpectedEventErrorLocalization__english,
  UnsupportedScenarioError,
  unsupportedScenarioErrorLocalization__english,


  /* ━━━ Files ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  encodeFileToBase64,

  /* ━━━ Logging ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── PoliteErrorsMessageBuilder ───────────────────────────────────────────────────────────────────────────────── */
  PoliteErrorsMessagesBuilder,
  PoliteErrorsMessagesBuilder__English,

  /* ─── Rest ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
  Logger,
  loggerLocalization__english,


  /* ━━━ Maps ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  addEntriesToMap,
  createMapBasedOnOtherMap,
  filterMap,
  removeEntriesFromMap,
  replaceValuesInMap,


  /* ━━━ Numbers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  formatNumberWith4KetaKanji,
  getArithmeticMean,
  isStringifiedNonNegativeIntegerOfRegularNotation,
  limitMaximalValue,
  limitMinimalValue,
  roundDownToSpecificIntegerPlaceValue,
  roundToSpecificNearestIntegerPlaceValue,
  roundToSpecifiedNearestDecimalPlaceValue,
  roundUpToSpecificIntegerPlaceValue,
  separateEach3DigitsGroupWithComma,
  separateEach4DigitsGroupWithComma,


  /* ━━━ Objects ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  getObjectPropertySafely,


  /* ━━━ Pagination ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  computeFirstItemNumberForSpecificPaginationPage,
  computeLastItemNumberForSpecificPaginationPage,
  getItemsOfPaginationPage,
  PaginationCollection,


  /* ━━━ Promises ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  PromisesQueue,


  /* ━━━ Random values generators ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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


  /* ━━━ Raw object data processor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  RawObjectDataProcessor,
  rawObjectDataProcessorLocalization__english,
  convertPotentialStringToNumberIfPossible,
  convertPotentialStringToIntegerIfPossible,
  convertPotentialStringToFloatIfPossible,


  /* ━━━ Sets ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  createSetBasedOnOtherSet,
  addMultipleElementsToSet,


  /* ━━━ Strings ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Characters assets ────────────────────────────────────────────────────────────────────────────────────────── */
  EscapeCharacters,
  lowercaseLatinCharacters,
  SpaceCharacters,
  SpaceCharactersStringifiedHexCharactersForRegularExpressionWithUnicodeFlag,
  stringifiedDigits,
  uppercaseLatinCharacters,

  /* ─── Line separators ──────────────────────────────────────────────────────────────────────────────────────────── */
  getLineSeparatorType,
  LineSeparators,

  /* ─── Regular expressions ──────────────────────────────────────────────────────────────────────────────────────── */
  getMatchingWithFirstRegularExpressionCapturingGroup,
  extractMatchingsWithRegularExpression,
  replaceMatchesWithRegularExpressionToDynamicValue,

  /* ─── URI ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  /* --- Files and directories -------------------------------------------------------------------------------------- */
  appendLastFileNameExtension,
  extractAllFileNameExtensions,
  extractFileNameWithAllExtensionsFromPath,
  extractFileNameWithoutAnyExtensions,
  extractFileNameWithoutLastExtension,
  extractLastExtensionOfFileName,
  removeAllFileNameExtensions,

  /* --- Rest ------------------------------------------------------------------------------------------------------- */
  appendFragmentToURI,
  explodeURI_PathToSegments,
  getURI_Fragment,
  getURI_PartWithoutFragment,
  removeSpecificSegmentsFromURI_Path,
  replaceLastURI_PathSegment,

  /* ─── Rest ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
  appendCharacterIfItDoesNotPresentInLastPosition,
  capitalizeFirstCharacter,
  cropString,
  EmailAddress,
  explodeCasedPhraseToWords,
  explodeStringToLines,
  getEnglishAbbreviatedOrdinalNumber,
  getLastCharacter,
  getPositionsOfAllSubstringOccurrences,
  hasStringOnlySpecificCharacters,
  insertSubstring,
  insertSubstringIf,
  isIPv4AddressLiesInRange,
  isStringIncludingAtLeastOneOfSubstrings,
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
  surroundLabelByOrnament,
  toLowerCamelCase,
  toScreamingSnakeCase,
  toUpperCamelCase,
  trimSpaces,


  /* ━━━ Type guards ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Arrays ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  isArrayOfCertainTypeElements,
  isArrayOfLength,
  isEmptyArray,
  isNonEmptyArray,

  /* ─── Nullables ────────────────────────────────────────────────────────────────────────────────────────────────── */
  isNeitherUndefinedNorNull,
  isEitherUndefinedOrNull,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,

  /* ─── Numbers ──────────────────────────────────────────────────────────────────────────────────────────────────── */
  isDecimalFractionOfAnySign,
  isNaturalNumber,
  isNaturalNumberOrZero,
  isNegativeDecimalFraction,
  isNegativeInteger,
  isNegativeIntegerOrZero,
  isNumber,
  isPositiveDecimalFraction,

  /* ─── Objects ──────────────────────────────────────────────────────────────────────────────────────────────────── */
  isArbitraryObject,
  isEmptyObject,
  isNonEmptyArbitraryObject,
  isNonEmptyObject,
  isNonNullObject,

  /* ─── ParsedJSON ───────────────────────────────────────────────────────────────────────────────────────────────── */
  isPossiblyReadonlyParsedJSON,
  isPossiblyReadonlyParsedJSON_Object,

  /* ─── Strings ──────────────────────────────────────────────────────────────────────────────────────────────────── */
  areStringifiedDigitsOnly,
  isEmptyString,
  isNonEmptyString,
  isString,
  isStringOfLength,
  IsStringOfLengthCheckingOperation,

  /* ─── Rest ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
  isBoolean,
  isElementOfEnumeration,
  isFunctionLike,


  /* ━━━ Value transformers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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

export { default as processObjectTypeParameterOfPugMixin } from "./PugExtensions/processObjectTypeParameterOfPugMixin";
