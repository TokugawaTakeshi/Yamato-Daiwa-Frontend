# `YDF.RoutingEmulator`

Even for static sites and/or the [static preview](https://automation.yamato-daiwa.com/Terminology/Terminology.english.html#PROJECT_BUILDING_MODE--SECTION) 
  the routing may be actual.

Commonly, a ste may contain internal links or navigation menus with highlighting of current page.  
If the source code has been written by pure HTML, than everything hardcoded, but when using the Pug preprocessor,
  some code may be reused across the pages.
For example, the navigation menu will be represented with single Pug mixin but the highlighted link corresponding to
  the current page will be different each time.

Such problems can be solved but the multiple ways, and there is nothing difficult if to use the Pug preprocessor.
One way is to create the object contains the paths of all files, titles of any page, and optipnally something else.



## Public Methods
### `initialize`

```
(routing: object): typeof RoutingEmulator
```

Sets the `routing`.
Must be called exactly one time.


### `setCurrentRoute`

```
(route: string): typeof RoutingEmulator
```

Defines the route for current page.
Basically the `route` is the route name or something path-like (depends on specific routing schema).


### Public Getters
#### `routing`

Provides assess to routing object which must be preliminary defined via `initialize` method.


#### `currentRoute`

Provides assess to string represents the current route which must be preliminary defined via 
  `setCurrentRoute` method.
