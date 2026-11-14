import type SearchBox from "./SearchBox.base";


export const SearchBoxLocalization__English: SearchBox.Localization = {
  inputElement: { defaultAccessibilityGuidance: "Please input search request here" },
  buttons: {
    searching: { label: "Search", accessibilityGuidance: "Submit search request" },
    resetting: { label: "Reset", accessibilityGuidance: "Reset search request" }
  },
  tooltip: {
    generateMessage:
        ({ minimalCharactersCount }: Readonly<{ minimalCharactersCount: string; }>): string =>
            `Please input at least ${ minimalCharactersCount } characters.`
  }
};


export default SearchBoxLocalization__English;
