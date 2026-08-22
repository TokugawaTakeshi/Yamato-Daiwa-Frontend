# Configuration 

Some mixins suggested by YDF depends on the configuration represented by `Configuration--YDF` object.
This configuration can be changed according to your design guidelines.


> [!WARNING] 
> The `Configuration--YDF` itself does not apply any styles — the styles can be applied only via the appropriate mixins
>   such as `InitialGlobalCSS_Rules--YDF()`.


## `Configuration--YDF` object

Has multiple depth levels.

### `fontsStacks` — The Fonts Stacks
#### `main`

The primary font that will be used as default.
For example, if to use `InitialGlobalCSS_Rules--YDF()` mixin, the font stack will be applied to `html` element.



## `overrideConfiguration--YDF` function

Simplifies the overriding of `Configuration--YDF` object.

Without this function, you have 2 basic ways to redefine the `Configuration--YDF` object: 
