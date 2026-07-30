# `centerHorizontallyWithoutWrapper--YDF` 

[![Official plugin](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-chww-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

```
centerHorizontallyWithoutWrapper--YDF({
  targetElementType: HorizontalCenteringWithoutWrapper--YDF.TargetElementTypes,
  maximalWidth?: DataTypes--YDF.unit,
  horizontalSpaceBetweenSelfAndParent?: DataTypes--YDF.unit 
})

enum HorizontalCenteringWithoutWrapper--YDF.TargetElementTypes {
  block = "BLOCK",
  inlineBlock = "INLINE_BLOCK"
}
```

Centers the block or inline-block element inside non-flex and non-grid wrapper


## Problem overview

A lot of novices engineers and also some methodologies prone to abuse the wrappers like:

```html
<div class="container">
  <div class="wrapper">
    <div class="inner-wrapper">
      <!-- ... -->
    </div>
  </div>  
</div>
```

In most cases, ever one wrapper is enough, or wrapper is not required.
The opposite to wrapper-focused methodologies is **one tag - one visible element** principle itended to
keep markup clean and easily to embrace the compliance between markup and displaying in browser.
Of course, the search engine optimization and accessibility could be the reason to add some tags
(like `nav>ul>li>a` composition which could be *visually* identical to `div>a`), but there also a lot of
cases where extra tags are being added without such reason.

Below code does not obey to this  **one tag - one visible element** principle, because the element with class `.center` 
is not the visible element and also not required for search engine optimization and accessibility:

```html
<div class="card">
  <div class="center">
    <button type="button" class="button">Submit</button>
  </div>  
</div>
```

Even if the `card` is not **flex** or **grid** element, we can center it by CSS,
but unlike block-type elements, the inline-block elements like `button` could not be centered by
left and right margins with value `auto`.

```html
<div class="card">
  <button type="button" class="button">Submit</button>
</div>
```

```stylus
.card .button
  
  position relative
  left 50%
  transform translateX(-50%)
```

With `centerHorizontallyWithoutWrapper--YDF`, it's possible to reduce above code to:

```stylus
.card .button

  centerHorizontallyWithoutWrapper--YDF({ targetElementType: HorizontalCenteringWithoutWrapper--YDF.TargetElementTypes.inlineBlock }) 
```

A little bit long, but with <kbd>hcww</kbd> live template of IntelliJ IDEA family IDE, it could be inputted in about
one second.


## Usage

The centering approach is depending on type of target element - block or inline-block.
It's required to specify respective parameter explicitly:


```stylus
.TopPage

  &-Message
  
    centerHorizontallyWithoutWrapper--YDF({ targetElementType: HorizontalCenteringWithoutWrapper--YDF.TargetElementTypes.block }) 

    
  &-Button

    centerHorizontallyWithoutWrapper--YDF({ targetElementType: HorizontalCenteringWithoutWrapper--YDF.TargetElementTypes.inlineBlock })
```

In the case of block element, you may want to specify the maximal width of the element. 
You are free to do it via `max-width`, but there is also optional parameter `maximalWidth` has been prepared:

```stylus
.TopPage

  &-Message
  
    centerHorizontallyWithoutWrapper--YDF({ 
      targetElementType: HorizontalCenteringWithoutWrapper--YDF.TargetElementTypes.block,
      maximalWidth: 640px 
    })
```

When the width of the target element like `.TopPage-Message` in the above example reduced until parent element's
width in narrow screens, you may add some gap at the left and right between target element and it's parent.
You are free to add `padding-left` and `padding-right` to parent element, but if you don't want to touch the parent
for some reason, you can specify `horizontalSpaceBetweenSelfAndParent` parameter:


```stylus
.TopPage

  &-Message
  
    centerHorizontallyWithoutWrapper--YDF({ 
      targetElementType: HorizontalCenteringWithoutWrapper--YDF.TargetElementTypes.block,
      maximalWidth: 640px,
      horizontalSpaceBetweenSelfAndParent: 20px 
    })
```
