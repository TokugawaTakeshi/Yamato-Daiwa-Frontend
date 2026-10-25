# `@yamato-daiwa/frontend`の日本語化

## 導入

当パッケージは **@yamato-daiwa/frontend**と言う主要パッケージに対してピア依存性となっているので、主要パッケージと一緒に導入する事。

```bash
npm i @yamato-daiwa/frontend 2.0.0-beta.10 @yamato-daiwa/frontend-localization-japanese -E
``` 

尚、当パッケージをJavaScriptフレームワークへの対応と一緒に利用可能。

| JavaScriptフレームワーク | パッケージ名・リンク                                                                                 |
|-------------------|--------------------------------------------------------------------------------------------|
| Vue               | [@yamato-daiwa/frontend-vue](https://www.npmjs.com/package/@yamato-daiwa/frontend-vue)     |
| React             | [@yamato-daiwa/frontend-react](https://www.npmjs.com/package/@yamato-daiwa/frontend-react) |


## 目次

+ ページ原形
  + [staticPreviewAnywherePageLocalization__japanese](#)
+ [GUIコンポーネント]()


## StaticPreviewAnywherePage　静的プレビューの「どこでも」ページ

1. `include`ディレクティブで`StaticPreviewAnywherePageLocalization.pug`ファイルをインポートする。
   `Requirements`と言うPugブロックの中で行う事を推奨。
2. [JavaScriptブロック](https://pugjs.org/language/code.html)に於いて、`StaticPreviewAnywherePage__YDF.configure({})`を呼び出す際、
   `localization`と言うオブジェクト型の単一引数のプロパティに`staticPreviewAnywherePageLocalization__japanese`定数を指定する。

```pug
//- 貴方のプロジェクトの場合、「node_modules」への相対パスが異なる可能性がある 
extends ../../node_modules/@yamato-daiwa/frontend/PagesTemplates/StaticPreviewAnywherePageTemplate.pug


block append Requirements

  //- 貴方のプロジェクトの場合、「node_modules」への相対パスが異なる可能性がある
  include ../../node_modules/@yamato-daiwa/frontend-localization-japanese/StaticPreviewAnywherePageLocalization.japanese.pug
    

block append Metadata

  -

    StaticPreviewAnywherePage__YDF.configure({

      metadata: {
        locale: "ja",
        title: "ページのタイトル",
        // ...
      },

      localization: staticPreviewAnywherePageLocalization__japanese,
      
      // ...

    });
```


## グラフィカル・ユーザ・インターフェースのコンポネント
### マーカップの日本語化

先ず`include`ディレクティブで`GUI_Components.pug`をインポートする。

```
//- 貴方のプロジェクトの場合、「node_modules」への相対パスが異なる可能性がある
extends ../../@yamato-daiwa/frontend-localization-japanese/GUI_Components.pug
```

其の上、具体的なコンポーネントのマークアップを日本語化するには、当コンポーネントのPugミックスインを呼び出す前に、
  [JavaScriptブロック](https://pugjs.org/language/code.html)内で当コンポネントに
  該当しているJavaScriptクラスの`localization`と言う静的フィルドに**日本語化のオブジェクト**を設定する。
日本語化のオブジェクトは下記の原形に従っている。

```
[コンポーネント名（小文字から、ベンダー語尾無し）]YDF_ComponentLocalization__japanese
```

例えば、`AttentionBox`コンポーネントの場合、日本語化のオブジェクトは`attentionBoxYDF_ComponentLocalization__japanese`になり、当コンポーネント
  を日本語化するには、下記のコードが必要。

```pug
- AttentionBox__YDF.localization = attentionBoxYDF_ComponentLocalization__japanese;
```

| コンポネントのPug混入の名前   | JavaScriptクラス名      | 日本語化オブジェクト名                                       |
|-------------------|---------------------|---------------------------------------------------|
| AttentionBox--YDF | `AttentionBox__YDF` | `attentionBoxYDF_ComponentLocalization__japanese` |
