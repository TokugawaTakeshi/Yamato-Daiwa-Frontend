# arrayConstructor__POLYFILL--YDF: the array constructor fixing one of Stylus issues

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-arrayConstructor__POLYFILL-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

The workaround for [Unsolicited two-dimensional array when trying to declare the plain one-dimensional array](https://github.com/stylus/stylus/issues/2582)
issue. No comments about this phenomenon has been left from the Styles maintenance team (last check: May of 2022).


```stylus
borderRadiusSpecification = {
  all: null,
  topSideFillets: null,
  leftSideFillets: null,
}

p(borderRadiusSpecification.all borderRadiusSpecification.topSideFillets borderRadiusSpecification.leftSideFillets)
// => (null) ((null) ((null)))
```

The second and third element has been braced. The `arrayConstructor__POLYFILL--YDF` solves it.

```stylus
p(arrayConstructor__POLYFILL--YDF(borderRadiusSpecification.all, borderRadiusSpecification.topSideFillets, borderRadiusSpecification.leftSideFillets))
// => null (null) (null)
```


## Investigations report

There no documentation there has been clarified what means the curly braces (please let to know if it has been added).
In [Build-in function](https://stylus-lang.com/docs/bifs.html) section, there are some mentions of so-called "pairs":

> ## keys(pairs)
> Return keys in the given pairs:
>
> ```stylus
> pairs = (one 1) (two 2) (three 3)
> keys(pairs)
> // => one two three
> ```
>
> ## values(pairs)
> Return values in the given pairs:
>
> ```stylus
> pairs = (one 1) (two 2) (three 3)
> values(pairs)
> // => 1 2 3
> ```
>
> [Stylus documentation](https://stylus-lang.com/docs/bifs.html)


However, the experiments detects that each braces group could contain more than two elements:

```stylus
sample = ("one" 11 "ALPHA") ("two" 22 "BRAVO") ("three" 33 "CHARLIE")

p(sample) // => ("one" 11 "ALPHA") ("two" 22 "BRAVO") ("three" 33 "CHARLIE")
p(keys(sample)) // => "one" ("two") ("three")
p(values(sample)) // => ("one" 11 "ALPHA") ("two" 22 "BRAVO") ("three" 33 "CHARLIE")
```

Currently, it's completely undefined why the values in below example has been braced.  

```stylus
p(borderRadiusSpecification.all borderRadiusSpecification.topSideFillets borderRadiusSpecification.leftSideFillets)
// => (null) ((null) ((null)))
```

## Development reports
## June 2022

Developing the **Button** component, we have encountered with yet another weird behaviour of Stylus.

The **Button** styles specification (at that time):

```stylus
Button = {

  defaultProperties: {

    themes: {
      regular: {

        geometricVariations: {

          regular: {

            rootElement: {
              // ...
              paddings: specifyPaddings--YDF({
                horizontalSymmetric: 15px,
                verticalSymmetric: 6px
              })
            },

            // ...
          }
        },

        // ...
      }
    }
  }
}
```

In the **Paddings** mixin, we had:

```stylus

Paddings--YDF(paddingsSpecification, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "Paddings",
    targetParameterNumber: 1,
    targetParameter: paddingsSpecification,
    schema: PaddingsSpecificationSchema--YDF,
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })

  log--YDF("===============================================================================================================")
  log--YDF(paddingsSpecification.all)
  log--YDF(paddingsSpecification.horizontalSymmetric)
  log--YDF(paddingsSpecification.left)
  log--YDF(paddingsSpecification.all paddingsSpecification.horizontalSymmetric paddingsSpecification.left)
```

Output:

```
inspect: null
inspect: 15px
inspect: null
inspect: (null) ((15px) ((null)))
```

Each scalar value has nothing extraordinary: `null`, `15px`, `null`.
But if we try to print the array... We have no idea what braces means and why Stylus grouped the second and third element, 
but this phenomenon already known for us.

Now, let us try to construct the array by **arrayConstructor__POLYFILL--YDF**. We'll print the **paddingsSpecification**
object before and after:

```stylus
log--YDF("===============================================================================================================")
log--YDF(paddingsSpecification)
log--YDF(arrayConstructor__POLYFILL--YDF(
  paddingsSpecification.all, paddingsSpecification.horizontalSymmetric, paddingsSpecification.left
))
log--YDF(paddingsSpecification)
```

Output:

```
inspect: '{
  all: null,
  horizontalSymmetric: 15px,
  upwardShifting: null,
  verticalSymmetric: 6px,
  top: null,
  bottom: null,
  left: null,
  right: null
}'

inspect: null (15px) (null)

inspect: '{
  all: null 15px null,
  horizontalSymmetric: 15px,
  upwardShifting: null,
  verticalSymmetric: 6px,
  top: null,
  bottom: null,
  left: null,
  right: null
}'
```

The **paddingsSpecification.all** has been mutated! First thought: something wrong **arrayConstructor__POLYFILL--YDF**.
At that time, the implementation of **arrayConstructor__POLYFILL--YDF** was:

```stylus
arrayConstructor__POLYFILL--YDF(elements...)

  accumulatingArray = elements[0]

  for element, interationNumber in elements

    if interationNumber > 0

      push(accumulatingArray, element)

  return accumulatingArray
```

Experimentally known that the cause is this line:

```stylus
accumulatingArray = elements[0]
```

But what wrong we are doing? We just copied the `null`.
Let use try to make the `paddingsSpecification.all` to non-null:

```stylus
Button = {

  defaultProperties: {

    themes: {
      regular: {

        geometricVariations: {

          regular: {

            rootElement: {
              // ...
              paddings: specifyPaddings--YDF({
                all: 13px
              })
            },

            // ...
          }

          // ...
       }
     }
   }
 }
}
```

Try to get output again:

```
inspect: '{
  all: 13px,
  horizontalSymmetric: null,
  upwardShifting: null,
  verticalSymmetric: null,
  top: null,
  bottom: null,
  left: null,
  right: null
}'
inspect: 13px (null) (null)
inspect: '{
  all: 13px null null,
  horizontalSymmetric: null,
  upwardShifting: null,
  verticalSymmetric: null,
  top: null,
  bottom: null,
  left: null,
  right: null
}'
```

The mutating left however with `accumulatingArray = elements[0]` we just copied the scalar value.
No understanding for us what is going on.

Next, we tried to change the implementation of `arrayConstructor__POLYFILL--YDF` to:

```stylus
arrayConstructor__POLYFILL--YDF(elements...)

  accumulatingArray = null

  for element, index in elements

    accumulatingArray[index] = element

  return accumulatingArray
```

It no use, the mutating left. ...If we do not skip the first element:

```stylus
arrayConstructor__POLYFILL--YDF(elements...)

  accumulatingArray = null

  for element, index in elements

    if index > 0

      accumulatingArray[index] = element

  return accumulatingArray
```


But it is not the solution.

Finally, we stopped at this implementation:

```stylus
arrayConstructor__POLYFILL--YDF(elements...)

  accumulatingArray = null

  hash = {}

  for element, index in elements

    hash["" + index] = element

  return values(hash)
```

Without converting of the index to string, this solution will equivalent to previous one.

We would be glad to report about this to Stylus development team, however we stop to do it after has been ignored for the multiple times
([1](https://github.com/stylus/stylus/issues/2596), [2](https://github.com/stylus/stylus/issues/2582), [3](https://github.com/stylus/stylus/issues/2557), [4](https://github.com/stylus/stylus/issues/2541), [5](https://github.com/stylus/stylus/issues/2539)).
