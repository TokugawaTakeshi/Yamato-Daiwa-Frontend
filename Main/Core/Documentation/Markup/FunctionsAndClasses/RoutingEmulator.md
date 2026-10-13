# `YDF.RoutingEmulator`

The abstract class intended for the working with internal links, mainly in [static previews](https://automation.yamato-daiwa.com/Terminology/Terminology.english.html#PROJECT_BUILDING_MODE--SECTION)
  and static sites.


## Motivation

### The Problem 

Even for static sites and/or the [static preview](https://automation.yamato-daiwa.com/Terminology/Terminology.english.html#PROJECT_BUILDING_MODE--SECTION), 
  routing may be relevant.

For instance, a page may contain a navigation menu in which the item corresponding to the current page is highlighted.  
If the source code has been written in pure HTML, then there is no other choice but to hardcode everything, including the
  link highlighting, for each page.
When using the Pug preprocessor, some code may be reused across pages, e.g. by extracting the navigation menu's
  code into a Pug mixin in a separate file. 
But this still does not solve the above problem, because a navigation menu mixin will be reused across multiple pages,
  and inside the mixin it is unknown in advance on which pages it will be used.
The typical solution is passing settings to the Pug mixin via parameters, but then it is necessary to decide which parameter 
  value will correspond to which page, and it must work for all pages, at least for the ones mentioned in the navigation menu.


### YDF Solution

Well, just one class embedded into the JavaScript runtime of Pug is not enough to solve the above problem.
Inside each file, the references to a certain other file may differ depending on the specific file and how deeply
  it is nested in subdirectories.
For instance, the reference to the `about.html` file may be `about.html`, `../about.html`, `../../about.html`, depending
  on the relative placement of `about.html` and the file whose code refers to `about.html`.
The [@yamato-daiwa/automation](https://www.npmjs.com/package/@yamato-daiwa/automation) project building tool
  [offers a solution](https://automation.yamato-daiwa.com/Functionality/MarkupProcessing/ResourcesPointersResolving/ResourcesPointersResolving.english.html);
  if you don't want to use it, you will need to prepare your own solution.

Once the above problem has been solved, represent the routing as an object.
You are free to decide how to represent it.
For instance,

```pug
- 

  const routing = {
    
    top: {
      URI: "/",
      title: "Top"
    },
    
    about: {
      URI: "/about",
      title: "About"
    },
    
    adminPanel: {
      
      dashboard: {
        URI: "/admin/dashboard",
        title: "Dashboard"
      }
      
    }
    
  }
```

Here, shortened absolute paths have been used, but they will not work without a development server ([see details](https://automation.yamato-daiwa.com/Functionality/MarkupProcessing/ResourcesPointersResolving/ResourcesPointersResolving.english.html)).
Relative paths, in turn, depend on the specific page, so the above object would actually be page-dependent.

Below is the routing definition with which **@yamato-daiwa/automation** works.
Optionally, it supports locale-dependent pages:

```typescript
export type NormalizedRouting = NormalizedRouting.Routes | NormalizedRouting.Localized;

export namespace NormalizedRouting {

  export type Localized = { [locale: string]: Routes; };

  export type Routes = { [route: string]: Route; };

  export type Route = {
    $heading: string;
    $URI?: string;
    $children?: Routes;
    $sectioning?: Sectioning;
  };


  export type Sectioning = { [key: string]: Section; };

  export type Section = {
    $heading: string;
    $anchor: string;
    readonly $URI: string;
    $children?: Sectioning;
  };

}
```

Then, for each page, set the current route using the `setCurrentRoute()` method.
For instance,

```pug
- YDF.RoutingEmulator.setCurrentRoute("adminPanel.dashboard");
```

Again, you are free to decide how to specify the current route.

Now you can use the `routing` and `currentRoute` getters.

+ With the `routing` getter, you can generate a full sitemap.
+ With `currentRoute`, you can check whether a specific route is the current one.


Here is an example of a table-of-contents-like GUI component using `YDF.RoutingEmulator.currentRoute`: 

```pug
mixin CompactTableOfContents--YDF_DK(localizedRouting, options, iterationData)

  if localizedRouting

    -

      options =
          options ??
          {
            mustApplyAnchorsInsteadOfURIs: false
          };

      iterationData =
          iterationData ??
          {
            currentDepthLevel__numerationFrom0: -1,
            currentRouteSegments: []
          }

    ul.CompactTableOfContents--YDF_DK&attributes(attributes)

      each metadata, key in localizedRouting

        -
          iterationData.currentDepthLevel__numerationFrom0++;
          iterationData.currentRouteSegments[iterationData.currentDepthLevel__numerationFrom0] = key;
          const route = iterationData.currentRouteSegments.join(".");


        li.CompactTableOfContents--YDF_DK-Item

          -

            let children;

            if (YDF.isNotUndefined(metadata.$children)) {
              children = metadata.$children;
            } else if (YDF.isNotUndefined(metadata.$sectioning) && metadata.$mustDisplayDirectDecadentSectioning) {
              children = metadata.$sectioning;
            }


          if children

            button.CompactTableOfContents--YDF_DK-Item-CollapsingToggle(
              type="button"
              aria-label="Collapse"
            ): +Triangle__Upward__Circled__Filled--YDF_Icon.CompactTableOfContents--YDF_DK-Item-CollapsingToggle-Icon

          if metadata.$URI


            -

              const isCurrentRoute = route === YDF.RoutingEmulator.currentRoute;
              const linkModifierCSS_Classes = isCurrentRoute ? [ "CompactTableOfContents--YDF_DK-Item-Link__Current" ] : [];

              const anchorURI = options.mustApplyAnchorsInsteadOfURIs === true ? `#${ metadata.$anchor }` : metadata.$URI;


            a.CompactTableOfContents--YDF_DK-Item-Link(
              href=anchorURI
              class=linkModifierCSS_Classes
              aria-current=isCurrentRoute ? "page" : null
            )!= metadata.$heading

          else

            span.CompactTableOfContents--YDF_DK-Item-Title!= metadata.$heading

          if children

            +CompactTableOfContents--YDF_DK(children, options, iterationData)

        -
          iterationData.currentDepthLevel__numerationFrom0--;
          iterationData.currentRouteSegments.splice(-1, 1);
```

## API
### Public Methods
#### `initialize`

```
(routing: object): typeof RoutingEmulator
```

Sets the `routing`.
Must be called exactly once per page.


#### `setCurrentRoute`

```
(route: string): typeof RoutingEmulator
```

Defines the route for the current page.
Basically, the `route` is the route name or something path-like (depending on the specific routing schema).


### Public Getters
#### `routing`

Provides access to the routing object, which must be defined beforehand via the `initialize` method.


#### `currentRoute`

Provides access to the string representing the current route, which must be defined beforehand via the 
  `setCurrentRoute` method.
