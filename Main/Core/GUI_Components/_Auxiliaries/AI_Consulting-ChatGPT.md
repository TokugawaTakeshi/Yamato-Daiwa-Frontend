The key TypeScript limitation is that a class has two distinct types:

- The instance type — the type of `new AdmotionBlock()`.
- The static side type — the type of `AdmotionBlock` itself, including its constructor and static members.

`extends React.Component` establishes the instance inheritance relationship. It does not provide a mechanism to inherit static members from an unrelated class, and TypeScript cannot infer a new class's static type merely because you assign properties to its constructor at runtime.

For your use case, the clean solution is to separate the runtime operation from the static type declaration, while keeping the metadata as the single source of truth. You should not need to manually map every metadata member.

## Recommended solution: `Object.assign()` with an inferred intersection type

You can solve both requirements without decorators, manual static-member mapping, `any`, or type assertions.

```
export const AdmotionBlock = Object.assign(
  class AdmotionBlock extends React.Component {
    // Your component implementation.
  },
  AdmonitionBlockMetadata
);
```

That's the essential solution.

### Why this works

`Object.assign()` has TypeScript overloads that preserve the types of the target and source objects. Consequently, TypeScript infers the resulting constructor as an intersection of the React component class's static type and `typeof AdmonitionBlockMetadata`.

Conceptually, the result is:

```
typeof AdmotionBlockClass & typeof AdmonitionBlockMetadata
```

This gives you both sides of the solution:

- Runtime: `Object.assign()` copies the metadata class's own enumerable static properties onto the component constructor.
- Compile time: TypeScript infers those properties in the resulting type, so they are available without manually declaring them.

For example, all of these are supported:

```
AdmotionBlock.CSS_NAMESPACE;

AdmotionBlock.Themes.regular;

AdmotionBlock.Positions.topLeft;

// Still a normal React component:
const component: React.ComponentType = AdmotionBlock;
```

The `Positions` enum is included because the merged namespace exposes it as a runtime property of `AdmonitionBlockMetadata`.

This approach relies on standard TypeScript and JavaScript behavior rather than a custom decorator or compiler plugin.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://www.typescriptlang.org\&sz=32)

Classes

+1



## One important consideration

The resulting declaration is a `const`, not a `class` declaration. You can still use it as a React component and instantiate it, but you cannot use interface merging against it as though it were a class declaration.

If retaining a traditional `class AdmotionBlock` declaration is mandatory, TypeScript does not provide a general mechanism to dynamically extend that declaration's static type from another class. Class/interface merging affects the instance side, not the static side.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://www.typescriptlang.org\&sz=32)

Declaration Merging

+1



My recommendation: use the `Object.assign(class ..., AdmonitionBlockMetadata)` pattern. It provides a single source of truth for the metadata, preserves the React inheritance chain, and automatically carries the metadata's inferred static types without boilerplate.
