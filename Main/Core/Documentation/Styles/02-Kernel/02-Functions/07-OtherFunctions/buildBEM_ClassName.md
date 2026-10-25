# buildBEM_ClassName--YDF: generating of BEM class name

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-bbcn-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

Generating BEM class according specified `block` (required), `element` and `modifier`.
The separators are `BEM_ELEMENT_SEPARATOR` (`-` as default) and `BEM_MODIFIER_SEPARATOR` (`__` as default) are 
basic variables which could be redefined.


```stylus
p(buildBEM_ClassName--YDF({ block: "Button" })) 
// => "Button"

p(buildBEM_ClassName--YDF({ block: "Button", element: "Icon" })) 
// => "Button__Icon"

p(buildBEM_ClassName--YDF({ block: "Button", modifier: "BasicTheme" })) 
// => "Button_BasicTheme"

p(buildBEM_ClassName--YDF({ block: "Header", element: "Icon", modifier: "BasicTheme" })) 
// => "Header__Icon_BasicTheme"

p(buildBEM_ClassName--YDF({
  block: "Header",
  element: "Icon",
  modifier: "BasicTheme",
  elementSeparator: "-",
  modifierSeparator: "__"
})) // => Header-Icon__BasicTheme
```
