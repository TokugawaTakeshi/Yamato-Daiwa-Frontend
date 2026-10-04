# `validateObjectTypeParameter--YDF` - object-type parameter validation

[![Official IntelliJ IDEA plugin live template](https://img.shields.io/badge/IntelliJ_IDEA_Live_Template-votp-blue.svg?style=flat)](https://plugins.jetbrains.com/plugin/17677-yamato-daiwa-frontend)

## Object type parameter concept

Stylus pre-processor supports the named parameters:

```stylus
exampleMixin(alpha = 1, bravo = "foo", charlie = false)
```

However, the engineer is free specify the keys and values when call the function/mixin, or values only:

```stylus
exampleMixin(1, "foo", false)
```

Most engineers prefers quick-and-dirty coding rather than invest the efforts and time to maintainability including readability.
The **object type parameter conception** pattern together with the validation don't leave choice to engineer specify keys on no -
these keys must be specified now, or error will occur:

```stylus
exampleMixin({
  alpha: 1, 
  bravo: "foo", 
  charlie: false
})
```

Additionally, `validateObjectTypeParameter--YDF` will validate this object-type parameter according specified schema.


## Options

### mixinOrFunctionName

First, define 'mixinOrFunctionName' for exact error message where invalid data error occurred (when it will): 

```stylus
exampleMixin(parametersObject = {}, restParameters__MUST_NOT_BE...)

  // [ Interim code warning ] Just below code will not work
  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "exampleMixin"
  })
```

### parameterNumber

`validateObjectTypeParameter--YDF` works not only for first parameter. Specify explicitly the number of target parameter for
exact logging:

```stylus
exampleMixin(parametersObject = {}, restParameters__MUST_NOT_BE...)

  // [ Interim code warning ] Just below code will not work
  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "exampleMixin",
    targetParameterNumber: 1
  })
```

You can call `validateObjectTypeParameter--YDF` for each of multiple object-type parameters is there are.


### targetParameter

Of course, the parameter which will be validated must be explicitly passed to `validateObjectTypeParameter--YDF` function:

```stylus
exampleMixin(parametersObject = {}, restParameters__MUST_NOT_BE...)

  // [ Interim code warning ] Just below code will not work
  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "exampleMixin",
    targetParameterNumber: 1,
    targetParameter: parametersObject
  })
```

If this parameter is optional, specify the empty object as default value, or Stylus will throw the native error before 
validation start:

```
argument "parametersObject" required for buildBEM_ClassName--YDF(parametersObject, restParameters__MUST_NOT_BE)
```


### followingParametersWhichMustNotBe

If you are want to forbid following parameters, declare them using the Stylus
[rest parameters literal](https://stylus-lang.com/docs/vargs.html) and pass to `validateObjectTypeParameter--YDF`

```stylus
exampleMixin(parametersObject = {}, restParameters__MUST_NOT_BE...)

  // [ Interim code warning ] Just below code will not work
  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "exampleMixin",
    targetParameterNumber: 1,
    targetParameter: parametersObject,
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

### schema

Finally, the parameter's properties validation schema.
Specify the `schema` property following below manual.

```stylus
exampleMixin(parametersObject = {}, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "exampleMixin",
    targetParameterNumber: 1,
    targetParameter: parametersObject,
    schema: {
      // define the schema of valid parametersObject
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```


## Validation

### Requirement check

* Set `required: true` for desired property to mark it as required.
* If it is optional, you can skip the `required: false`.

```stylus
buildBEM_ClassName--YDF(compoundParameter, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "buildBEM_Class",
    targetParameterNumber: 1,
    targetParameter: compoundParameter,
    schema: {
      block: {
        type: DataTypes--YDF.string,
        required: true
      },
      element: {
        type: DataTypes--YDF.string
      },
      modifier: {
        type: DataTypes--YDF.string
      }
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

If the required property will be omitted like:

```stylus
buildBEM_ClassName--YDF({ element: "Icon" })
```

the error like below will be thrown:

```
Invalid parameter at:
  ●  Function/mixin: buildBEM_Class
  ●  Parameter number: 1
  ●  Parameter's property: block
This property is required while actually has been omited or explicitly set to null.
Please check the specification of this property: 
{
  type: STRING,
  required: true
}
```


#### Conditional requirement

* Set `requiredIf` object with below two properties to specify the conditional requirement
  * `predicate` - the anonymous function; has two parameters:
    * `objectOfCurrentLevel` - even with parameter when the parameter has single depth level, otherwise the specific
      depth level of target parameter.
    * `targetParameter` - the parameter itself. Even with first parameter when has single depth level.
  * `conditionDescription` - the condition description for logging.


```stylus
TextElementHeightSizingTypes--YDF = {
  fixed: "FIXED",
  natural: "NATURAL"
}

TextElementHeightSizing--YDF(textElementHeightSizingSpecification, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "TextElementHeightSizing--YDF",
    targetParameterNumber: 1,
    targetParameter: textElementHeightSizingSpecification,
    schema: {
      type: {
        type: DataTypes--YDF.string,
        required: true,
        allowedValues: values(TextElementHeightSizingTypes--YDF)
      },  
      fixedHeight: {
        type: DataTypes--YDF.dimensionalQuantity,
        requiredIf: {
          predicate: @(textElementHeightSizingSpecification) {
            return textElementHeightSizingSpecification.type == TextElementHeightSizingTypes--YDF.fixed
          },
          conditionDescription: "'type' is 'TextElementHeightSizingTypes--YDF.fixed'"
        }
      }
      // ...
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

Now if property `type` will be `TextElementHeightSizingTypes--YDF.fixed` but `fixedHeight` will be omitted:

```stylus
.Sample

  TextElementHeightSizing--YDF({
    type: TextElementHeightSizingTypes--YDF.fixed
  })
```

below error will be thrown:

```
Invalid parameter at:
  ●  Function/mixin: TextElementHeightSizing--YDF
  ●  Parameter number: 1
  ●  Parameter's property: fixedHeight
This property is required when 'type' is 'TextElementHeightSizingTypes--YDF.fixed' and this condition has been satisfied while this proeprt
y has been omited or explicitly set to null.
Please check the specification of this property:
{
  type: DIMENSIONAL_AMOUNT,
  requiredIf: {
    predicate: anonymous(textElementHeightSizingSpecification),
    conditionDescription: 'type' is 'TextElementHeightSizingTypes--YDF.fixed'
  }
}
```


### Default value

Specify the **defaultValue** value which will be substituted when target property will be omitted.
Do not specify the `required: true` or `required: false` if you defined the **defaultValue**.

```stylus
buildBEM_ClassName--YDF(compoundParameter, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "buildBEM_Class",
    targetParameterNumber: 1,
    targetParameter: compoundParameter,
    schema: {
      block: {
        type: DataTypes--YDF.string,
        required: true
      },
      element: {
        type: DataTypes--YDF.string,
        required: false
      },
      modifier: {
        type: DataTypes--YDF.string,
        required: false
      },
      elementSeparator: {
        type: DataTypes--YDF.string,
        defaultValue: BEM_ELEMENT_SEPARATOR
      },
      modifierSeparator: {
        type: DataTypes--YDF.string,
        defaultValue: BEM_MODIFIER_SEPARATOR
      }
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

Testing:

```stylus
p(buildBEM_ClassName--YDF({
  block: "Component",
  element: "Element",
  modifier: "Modifier"
})) // => "Component__Element_Modifier"

p(buildBEM_ClassName--YDF({
  block: "Component",
  element: "Element",
  modifier: "Modifier",
  elementSeparator: "-",
  modifierSeparator: "__"
})) // => "Component-Element__Modifier"
```


### Properties incompatibility

Some properties mutually exclusive thus must not be specified altogether.
For example, in **widthSizing** mixin, either fixed width has been specified, minimal width and maximal width could not be
specified anymore:

```stylus
widthSizing({
  fixedWidth: 300px
})

// or
widthSizing({
  minimalWidth: 250px,
  maximalWidth: 350px
})
```

But what is user violated it? The first way to solve is priority - one of mutually exclusive rules been ignored.
The disadvantage of this approach is mixin still don't understand what he is doing. So the second approach is the 
throwing of error. To be thrown of incompatible properties error, specify **incompatibleWith** with incompatible properties
names:

```stylus
widthSizing(compoundParameter, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "widthSizing",
    targetParameterNumber: 1,
    targetParameter: compoundParameter,
    schema: {
      fixedWidth: {
        type: DataTypes--YDF.dimensionalQuantity,
        incompatibleWith: "minimalWidth" "maximalWidth"
      },
      minimalWidth: {
        type: DataTypes--YDF.dimensionalQuantity
      },
      maximalWidth: {
        type: DataTypes--YDF.dimensionalQuantity
      }
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

Now, if mutually exclusive rules will be passed as 

```stylus
widthSizing({
  fixedWidth: 100px,
  minimalWidth: 80px,
  maximalWidth: 120px
})
```

below error will be thrown:

```
Invalid parameter at:
  ●  Function/mixin: widthSizing
  ●  Parameter number: 1
  ●  Parameter's property: fixedWidth
This property is incompatible with property 'minimalWidth'.
Please check the specification of this property:
{
  type: DIMENSIONAL_AMOUNT,
  incompatibleWith: minimalWidth maximalWidth
}
```

In the nested property case, specify **incompatibleWith** with the property path:

```stylus
BordersSizing--YDF(parametersObject, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "Borders",
    targetParameterNumber: 1,
    targetParameter: parametersObject,
    schema: {
      thickness: {
        type: DataTypes--YDF.object,
        required: false,
        properties: {
          horizontalSymmetric: {
            type: DataTypes--YDF.dimensionalQuantity,
            required: false,
            incompatibleWith: "thickness.all"
          },
          left: {
            type: DataTypes--YDF.dimensionalQuantity,
            required: false,
            incompatibleWith: "thickness.all" "thickness.horizontalSymmetric"
          },
          // ...
        }
      }
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

Now, if mutually exclusive rules will be passed as

```stylus
BordersSizing--YDF({
  thickness: {
    horizontalSymmetric: 2px,
    left: 4px
  }
})
```

below error will be thrown:


```
Invalid parameter at:
  ●  Function/mixin: Borders
  ●  Parameter number: 1
  ●  Parameter's property: thickness.left
This property is incompatible with property 'thickness.horizontalSymmetric'.
Please check the specification of this property:
{
  type: DIMENSIONAL_AMOUNT,
  required: false,
  incompatibleWith: thickness.all thickness.horizontalSymmetric
}
```

### Type checking

Specify the **type** of each property with the member or **DataTypes** enumeration.

```stylus
buildBEM_ClassName--YDF(compoundParameter, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "buildBEM_Class",
    targetParameterNumber: 1,
    targetParameter: compoundParameter,
    schema: {
      block: {
        type: DataTypes--YDF.string,
        required: true
      },
      element: {
        type: DataTypes--YDF.string,
        required: false
      },
      modifier: {
        type: DataTypes--YDF.string,
        required: false
      }
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

If it will be violated like:

```stylus
p(buildBEM_ClassName--YDF({ block: 1 }))
```

the error as below will be thrown:

```
Invalid parameter at:
  ●  Function/mixin: buildBEM_Class
  ●  Parameter number: 1
  ●  Parameter's property: block
This property must be the string while actually has type 'unit' and value '1'.
Please check the specification of this property:
{
  type: STRING,
  required: true
}
```

#### Amounts
##### Allow both dimensional and dimensionless amount

It is possible to allow both dimensional and dimensionless amounts (actual for line height definition for example).
Specify **type** with two values `DataTypes--YDF.dimensionalQuantity DataTypes--YDF.dimensionlessQuantity` _in this sequence_.

```stylus
TextElementHeightSizing--YDF(textElementHeightSizingSpecification, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "TextElementHeightSizing--YDF",
    targetParameterNumber: 1,
    targetParameter: textElementHeightSizingSpecification,
    schema: {
      // ...
      lineHeight: {
        type: DataTypes--YDF.dimensionalQuantity DataTypes--YDF.dimensionlessQuantity
      }
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

> :warning: **Warning:** Currently, the **type** could have the tuple value only for dimensional and dimensionless amount
> combination. No other combinations supported; in other cases the **type** must be specified with single string. 

```stylus
.Correct1

  TextElementHeightSizing--YDF({
    type: TextElementHeightSizingTypes--YDF.natural,
    lineHeight: 18px
  })

  
.Correct2

  TextElementHeightSizing--YDF({
    type: TextElementHeightSizingTypes--YDF.natural,
    lineHeight: 1.3
  })

  
.Incorrect

  TextElementHeightSizing--YDF({
    type: TextElementHeightSizingTypes--YDF.natural,
    lineHeight: "Invalid"
  })
```

Now, in **.Incorrect** case, below exception will be thrown.

```
Invalid parameter at:
  ●  Function/mixin: TextElementHeightSizing--YDF
  ●  Parameter number: 1
  ●  Parameter's property: lineHeight
This property must be either dimensional or dimensionless amount while actually has type 'string' and value 'Invalid'.
Please check the specification of this property:
{
  type: DIMENSIONAL_AMOUNT DIMENSIONLESS_AMOUNT,
  incompatibleWith: lineSpacing
}
```

##### Minimal/maximal value

Specify **minimalValue** for the amount property to the allowed minimal value and **maximalValue** - to limit the maximal
value.

```stylus
TextElementHeightSizing--YDF(textElementHeightSizingSpecification, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "TextElementHeightSizing--YDF",
    targetParameterNumber: 1,
    targetParameter: textElementHeightSizingSpecification,
    schema: {
      // ...
      linesCount: {
        type: DataTypes--YDF.dimensionlessQuantity
        defaultValue: 1,
        minimalValue: 1
      }
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

Now, if this limitation will be violated as

```stylus
.Sample

  TextElementHeightSizing--YDF({
    type: TextElementHeightSizingTypes--YDF.natural,
    linesCount: 0
  })
```

the error as below will be thrown:

```
Invalid parameter at:
  ●  Function/mixin: TextElementHeightSizing--YDF
  ●  Parameter number: 1
  ●  Parameter's property: linesCount
This amount has value 0 while minimal allowed value is 1.
Please check the specification of this property:
{
  type: DIMENSIONLESS_AMOUNT,
  defaultValue: 1,
  minimalValue: 1
}
```

Besides dimensionless amounts the Stylus could compare the dimensional amount, but in the case when both dimensionless
and dimensional amounts allowed, there could not be the correct comparison. 


#### Strings
##### Minimal/maximal characters count

Specify **minimalCharactersCount** for the string-type property to set allowed minimal characters count and 
**maximalCharactersCount** - to limit maximal characters count.

```stylus
buildBEM_ClassName--YDF(compoundParameter, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "buildBEM_Class",
    targetParameterNumber: 1,
    targetParameter: compoundParameter,
    schema: {
      block: {
        type: DataTypes--YDF.string,
        required: true,
        minimalCharactersCount: 1
      }
      // ...
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

Now if this limitation will be violated as

```stylus
buildBEM_ClassName--YDF({ block: "" })
```
the error as below will be thrown:

```
Invalid parameter at:
  ●  Function/mixin: buildBEM_Class
  ●  Parameter number: 1
  ●  Parameter's property: block
This string-type property has 0 characters while at least 1 required.
Please check the specification of this property: 
{
  type: STRING,
  required: true,
  minimalCharactersCount: 1
}
```


##### Allowed alternatives

Specify `allowedAlternatives` with array of strings to restrict the allowed values to elements of this array:

```stylus
TextElementHeightSizingTypes--YDF = {
  fixed: "FIXED",
  natural: "NATURAL"
}

TextElementHeightSizing--YDF(textElementHeightSizingSpecification, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "TextElementHeightSizing",
    targetParameterNumber: 1,
    targetParameter: textElementHeightSizingSpecification,
    schema: {
      type: {
        type: DataTypes--YDF.string,
        required: true,
        allowedAlternatives: values(TextElementHeightSizingTypes--YDF)
      }
      // ...
    },
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

Now if this limitation will be violated as

```stylus
.Sample

  TextElementHeightSizing({
    type: "OTHER"
  })
```

the error as below will be thrown:

```
Invalid parameter at:
  ●  Function/mixin: TextElementHeightSizing
  ●  Parameter number: 1
  ●  Parameter's property: type
This string-type property has value 'OTHER' while below alternatives only allowed:
FIXED, NATURAL
Please check the specification of this property: 
{
  type: STRING,
  required: true,
  allowedAlternatives: FIXED NATURAL
}
```


### Making of the whole object type parameter optional

Stylus [supports](https://stylus-lang.com/docs/functions.html#argument-defaults) the default parameter value.

```stylus
BordersSizing--YDF(bordersSpecification = {}, restParameters__MUST_NOT_BE...)

  validateObjectTypeParameter--YDF({
    mixinOrFunctionName: "BordersSizing--YDF",
    targetParameterNumber: 1,
    targetParameter: bordersSpecification,
    schema: BordersSizingSpecificationSchema--YDF,
    followingParametersWhichMustNotBe: restParameters__MUST_NOT_BE
  })
```

But here is another pitfall of the Stylus language.
For the one side, unlike ECMAScript, Stylus has no `undefined` value/type additionally to `null`.
From the other side, "the unspecified parameter" and null are different cases.
The substitution of the default value will be if and only if the parameter has not been passed.

Consider below example:

```stylus
Test(parameter = {})

  p(parameter)

sampleObject = { alpha: "FOO" }

Test()
Test(null)
Test(sampleObject.bravo)
```

1. In the first case, the `{}` will be substituted because the parameter has been omitted.
2. In the second case, the parameter will _not_ be substituted because it has been specified is spit of its value is explicit `null`
3. In the tried case,  the parameter will _not_ be substituted because it has been specified is spit its value is null
   as not existing object property for the Stylus case 

The `validateObjectTypeParameter--YDF` converts null to empty object, but as the Stylus user, you have to know about above pitfall. 
