# `HeadingLevelsCoordinator`

The abstract class intended for _generating_ the HTML heading tags (`h1`-`h6`) instead of hardcoding them.


## Motivation

### The Problem 

From the viewpoint of valid and accessible HTML code, the heading tags (h1-h6) must be logically structured.
For instance, a section with an **h2** heading may be followed by a section with an **h2** or **h3** heading, but
  by neither **h1** nor **h4-h6** ones.
The main problem is that in a sufficiently large website or application, restructuring the headings with changing of
  their levels across the website/application may take too much time and mental energy, which is unacceptable for the
  high-quality and productive web development of the 2020s.


#### In the GUI Components

Consider the following [Bootstrap 5 example](https://getbootstrap.com/docs/5.0/components/card/#example):

```pug
.card(style="width: 18rem;")
  img.card-img-top(src="..." alt="...")
  .card-body
    h5.card-title Card title
    p.card-text
      | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
    a.btn.btn-primary(href="#") Go somewhere
```

This card has been implemented with SEO and accessibility in mind (however, if it is part of a flow of cards, it is
  better to have `li` as the outermost tag instead of a plain `div`).
Each card has a title represented by a heading of level 5 (the `h5` tag).

If such cards are used across multiple pages, it is reasonable to implement them as a (GUI) component.
In the plain Pug case, such a component can be implemented as the following mixin:

```pug
mixin Card(options)

  -
  
    const {
      imageURI,
      imageAlternatingText,
      title,
      linkURI,
      linkText
    } = options;

  .card
  
    img.card-img-top(
      src=imageURI 
      alt=imageAlternatingText
    )
    
    .card-body
    
      h5.card-title= title
      
      p.card-text
        block
        
      a.btn.btn-primary(href=linkURI)= linkText
```

But from the viewpoint of HTML validity and accessibility, such a component can be used only inside sections with
  a heading of the 4th level.
What if, depending on the specific page, the parent section has a heading of another level?

The simplest solution is to pass the heading level as a parameter:

```pug
mixin Card(options)

  -
  
    const {
      imageURI,
      imageAlternatingText,
      title,
      headingLevel,
      linkURI,
      linkText
    } = options;

    const titleTag = `h${headingLevel}`;

  .card
  
    img.card-img-top(
      src=imageURI 
      alt=imageAlternatingText
    )
    
    .card-body
    
      #{ titleTag }.card-title= title
      
      p.card-text
        block
        
      a.btn.btn-primary(href=linkURI)= linkText
```

But the main problem is still present.
The restructuring of the headings across the website/application may take too much time.


### YDF Solution

Instead of hardcoding the heading tags, use the `HeadingLevelsCoordinator` class.
Initially, it is set to the first level.
For instance, when `HeadingLevelsCoordinator` is used for the first time, the following code

```pug
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-title Title
```

will output:

```html
<h1 class="card-title">Title</h1>
```

To generate the heading of the next level, use the `incrementLevelAndGetHeadingTag` method:  

```pug
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-title Title
#{ YDF.HeadingLevelsCoordinator.incrementLevelAndGetHeadingTag() }.card-subtitle Subtitle
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-subtitle Subtitle
```

It will output:

```html
<h1 class="card-title">Title</h1>
<h2 class="card-subtitle">Subtitle</h2>
<h2 class="card-subtitle">Subtitle</h2>
```

Alternatively, you can use the `incrementLevel()` method, but it returns nothing and thus cannot be interpolated:

```pug
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-title Title

- YDF.HeadingLevelsCoordinator.incrementLevel()

#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-subtitle Subtitle
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-subtitle Subtitle
```

It will give the same output.
Similarly, you can use the `decrementLevelAndGetHeadingTag` and `decrementLevel` methods to generate the headings of upper levels:


```pug
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-title Title

#{ YDF.HeadingLevelsCoordinator.incrementLevelAndGetHeadingTag() }.card-subtitle Subtitle
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-subtitle Subtitle

#{ YDF.HeadingLevelsCoordinator.incrementLevelAndGetHeadingTag() }.card-subsubtitle Subsubtitle
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-subsubtitle Subsubtitle

#{ YDF.HeadingLevelsCoordinator.decrementLevelAndGetHeadingTag() }.card-subtitle Subtitle
#{ YDF.HeadingLevelsCoordinator.headingTagOfCurrentLevel }.card-subtitle Subtitle
```

It will output:

```html
<h1 class="card-title">Title</h1>
<h2 class="card-subtitle">Subtitle</h2>
<h2 class="card-subtitle">Subtitle</h2>
<h3 class="card-subsubtitle">Subsubtitle</h3>
<h4 class="card-subsubtitle">Subsubtitle</h3>
<h2 class="card-subtitle">Subtitle</h2>
<h2 class="card-subtitle">Subtitle</h2>
```


## API
### Static Getters
#### `currentLevel`

Returns the number representing the current nesting level.
It is a natural number from 1 to 6 (initially 1).


### `headingTagOfCurrentLevel`

Returns the tag name representing the current nesting level (from `h1` to `h6`).
The returned value is intended to be interpolated as follows: 

```pug
#{ YDF.HeadingsLevelsCoordinator.headingTagOfCurrentLevel }.Card-Title
```


### Static Methods
#### `incrementLevel`

```
() => void
```

Increments the heading level.
Will fail with `ImproperUsageError` if the current level is 6, which corresponds to the maximal nesting level in valid HTML.

```pug
-

  console.log(YDF.HeadingsLevelsCoordinator.currentLevel); // 1
  YDF.HeadingsLevelsCoordinator.incrementLevel();
  console.log(YDF.HeadingsLevelsCoordinator.currentLevel); // 2
```

#### `decrementLevel`

```
() => void
```

Decrements the heading level.
Will fail with `ImproperUsageError` if the current level is 1, which corresponds to the `h1` heading in HTML.

```pug
-

  console.log(YDF.HeadingsLevelsCoordinator.currentLevel); // 1
  
  YDF.HeadingsLevelsCoordinator.incrementLevel();
  console.log(YDF.HeadingsLevelsCoordinator.currentLevel); // 2
  
  YDF.HeadingsLevelsCoordinator.decrementLevel();
  console.log(YDF.HeadingsLevelsCoordinator.currentLevel); // 1
```


### `incrementLevelAndGetHeadingTag`

```
() => string
```

Increments the nesting level and returns the heading tag corresponding to the new depth level.

```pug
-

  console.log(YDF.HeadingsLevelsCoordinator.currentLevel); // 1
  
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h2"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h3"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h4"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h5"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h6"
```


### `decrementLevelAndGetHeadingTag`

```
() => string
```

Decrements the nesting level and returns the heading tag corresponding to the new depth level.

```pug
-

  console.log(YDF.HeadingsLevelsCoordinator.currentLevel); // 1
  
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h2"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h3"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h4"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h5"
  console.log(YDF.HeadingsLevelsCoordinator.incrementLevelAndGetHeadingTag()); // "h6"
  
  console.log(YDF.HeadingsLevelsCoordinator.decrementLevelAndGetHeadingTag()); // "h5"
  console.log(YDF.HeadingsLevelsCoordinator.decrementLevelAndGetHeadingTag()); // "h4"
  console.log(YDF.HeadingsLevelsCoordinator.decrementLevelAndGetHeadingTag()); // "h3"
  console.log(YDF.HeadingsLevelsCoordinator.decrementLevelAndGetHeadingTag()); // "h2"
  console.log(YDF.HeadingsLevelsCoordinator.decrementLevelAndGetHeadingTag()); // "h1"
```
