# Русификация `@yamato-daiwa/frontend`

## Установка

Данный пакет является одноранговой зависимостью (peer dependency) по отношению к основному пакету — 
  **@yamato-daiwa/frontend**, потому должен быть установлен вместе с основным:

```bash
npm i @yamato-daiwa/frontend 2.0.0-beta.10 @yamato-daiwa/frontend-localization-russian -E
``` 

Также, данный пакет может быть использован с адаптациями для JavaScript фреймворков:

| JavaScript-фреймворк | Имя пакета и ссылка                                                                        |
|----------------------|--------------------------------------------------------------------------------------------|
| Vue                  | [@yamato-daiwa/frontend-vue](https://www.npmjs.com/package/@yamato-daiwa/frontend-vue)     |
| React                | [@yamato-daiwa/frontend-react](https://www.npmjs.com/package/@yamato-daiwa/frontend-react) |


## Содержание

+ Шаблоны страниц
  + [staticPreviewAnywherePageLocalization__russian](#staticpreviewanywherepagelocalization__russian--локализация-для-шаблона-страницы-staticpreviewanywherepage-)
+ [Компоненты графического пользовательского интерфейса](#компоненты-графического-пользовательского-интерфейса)


## Документация
### Шаблоны страниц
### `staticPreviewAnywherePageLocalization__russian` — локализация для шаблона страницы `StaticPreviewAnywherePage` 

1. Импортируйте файл `StaticPreviewAnywherePageLocalization.russian.pug` директивой `include`.
   Это рекомендуется сделать в Pug-блоке `Requirements`.
2. В [JavaScript-блоке](https://pugjs.org/language/code.html) при вызове `StaticPreviewAnywherePage__YDF.configure({})` 
   укажите свойству `localization` единственного параметра типа «объект» константу 
   `staticPreviewAnywherePageLocalization__russian`:  

```pug
//- В Вашем случае, относительный путь к "node_modules" может отличаться 
extends ../../node_modules/@yamato-daiwa/frontend/PagesTemplates/StaticPreviewAnywherePageTemplate.pug


block append Requirements

  //- В Вашем случае, относительный путь к "node_modules" может отличаться
  include ../../node_modules/@yamato-daiwa/frontend-localization-russian/StaticPreviewAnywherePageLocalization.russian.pug
    

block append Metadata

  -

    StaticPreviewAnywherePage__YDF.configure({

      metadata: {
        locale: "ru",
        title: "Заголовок страницы",
        // ...
      },

      localization: staticPreviewAnywherePageLocalization__russian,
      
      // ...

    });
```


## Компоненты графического пользовательского интерфейса
### Локализация разметки

Импортируйте файл `GUI_Components.pug` директивой `include`:

```
//- В Вашем случае, относительный путь к "node_modules" может отличаться.
extends ../../@yamato-daiwa/frontend-localization-russian/GUI_Components.pug
```

Далее, для того чтобы локализовать Pug-разметку конкретного компонента, необходимо в
   [JavaScript-блоке](https://pugjs.org/language/code.html) установить **объект локализации** статическому полю 
  `localization` у JavaScript-класса этого компонента до того, как будет вызвана его 
  [Pug-примесь](https://pugjs.org/language/mixins.html).
Имя **объекта русской локализации** подчиняется шаблону

```
[Имя компонента с маленькой буквы без вендорного постфикса]YDF_ComponentLocalization__russian
```

Например, в случае компонента `AttentionBox` это будет `attentionBoxYDF_ComponentLocalization__russian`, и таким образом,
  для русификации этого компонента потребуется нижеследующая строка кода:

```pug
- AttentionBox__YDF.localization = attentionBoxYDF_ComponentLocalization__russian;
```

| Pug-примесь компонента    | Имя JavaScript-класса | Имя объекта русской локализации                          |
|---------------------------|-----------------------|----------------------------------------------------------|
| AttentionBox--YDF         | `AttentionBox__YDF`   | `attentionBoxYDF_ComponentLocalization__russian`         |
