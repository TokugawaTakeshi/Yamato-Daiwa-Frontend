import InformationSourceReferenceLocalization__English from "./InformationSourceReference.english";


export class InformationSourceReferenceBase {

  public static localization: InformationSourceReferenceBase.Localization = InformationSourceReferenceLocalization__English;

}


export namespace InformationSourceReferenceBase {

  export type Localization = Readonly<{ defaultLabel: string; }>;

}


export default InformationSourceReferenceBase;
