# `applyIfNotZero`: applying non-zero CSS properties

Adds each specified CSS property to target ruleset when if it's not `0`. Intended to be used in
cases when CSS values are unknown in advance (actual for the frameworks development).


## Example

```stylus
EXAMPLE_ELEMENT_PADDINGS = 0
EXAMPLE_ELEMENT_MARGINS = 12px


.Example

  applyIfNotZero({
    padding: EXAMPLE_ELEMENT_PADDINGS,
    margin: EXAMPLE_ELEMENT_MARGINS
  })
```

Output:

```css
.Example {
  margin: 12px;
}
```

The `padding` property has not been added because the `EXAMPLE_ELEMENT_PADDINGS` equals `0`.


Please note that the keys must be the valid CSS key.

```stylus
.Example

  // ⇩ Right
  applyIfNotZero({ line-height: 1 })

  // ⇩ Wrong: the `lineHeight` is not a valid CSS key
  applyIfNotZero({ lineHeight: 1 })
```
