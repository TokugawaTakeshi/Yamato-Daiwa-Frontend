import type { LinkValidationRule } from "@yamato-daiwa/frontend";


export const LinkValidationRuleLocalization__Japanese:
    LinkValidationRule.Localization =
{
  errorMessageBuilder: (): string =>
      "入力された文字は合わせてリンクそうになっていません。" +
      "お手数ですが、リンクを共有した情報源と、当リンクは実在のウェブページ又は他の資料に該当しているか、ご確認を上、正しい値を入力して下さい" +
        "（コピー・貼り付け推薦です）。"
};
