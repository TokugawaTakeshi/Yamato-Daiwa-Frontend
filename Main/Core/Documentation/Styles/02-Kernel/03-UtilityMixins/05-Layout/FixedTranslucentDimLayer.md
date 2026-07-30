# `FixedTranslucentDimLayer--YDF`

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-ftdl-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
FixedTranslucentDimLayer--YDF({
  ZIndex: DataTypes--YDF.unit = ZIndexes.blockingOverlay,
  backgroundColor: DataTypes--YDF.colorDefinition = rgba(black, 0.25)
})
```

The mixin intended to be applied to `div` element to overlap the other content which translucent dim layer.
Such element is frequently being used as underlay for modal dialogs.

```stylus
.ModalDialog

  &-DimUnderlay

    FixedTranslucentDimLayer--YDF({
      ZIndex: 1,
      backgroundColor: rgb(255, 255, 128)
    })
```
