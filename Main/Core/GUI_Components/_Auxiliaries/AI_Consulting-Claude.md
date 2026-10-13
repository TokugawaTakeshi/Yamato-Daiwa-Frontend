
That's all a component needs. When you add a new static member to `AdmonitionBlockMetadata`, it shows up on `AdmonitionBlock` without any other change.

## Why each piece is there

- **`Omit<StaticMembersSource, "prototype">`**: `typeof AdmonitionBlockMetadata` also carries a construct signature, `new () => AdmonitionBlockMetadata`. If you intersect it with `React.Component`'s construct signature as is, `extends` fails with *TS2510: Base constructors must all have the same return type*. `Omit` is a mapped type, so it drops the signatures and keeps only the properties. It also keeps `readonly`, so `CSS_NAMESPACE` stays readonly.
- **Namespace members come along automatically**: TypeScript compiles `export namespace AdmonitionBlockMetadata { export enum Positions … }` into an own property `AdmonitionBlockMetadata.Positions`. So `Positions` is in `typeof AdmonitionBlockMetadata` for the types, and in `Object.getOwnPropertyDescriptors` at runtime.
- **`Object.defineProperties` instead of `Object.assign`**: it copies getters, non-enumerable members and `readonly`/`writable` flags exactly. Removing `prototype`, `length` and `name` matters because those are non-configurable on the target, and redefining them would throw.
- **The intermediate class**: without it the statics would land on `React.Component` itself and leak into every component.
- **No `any`**: the usual TS mixin pattern (`class extends Base` where `Base` is a type parameter) requires the exact constraint `new (...args: any[]) => {}` (TS2545). That would clash with `no-explicit-any` in your style guide. Casting the base to a non-generic constructor type inside the helper avoids the rule entirely.
- **`React.Component<AdmonitionBlock.Props>` as a value**: this is an instantiation expression, which needs TypeScript 4.7 or later. It keeps `this.props` correctly typed.

## One limitation

The approach copies **values** only, not type namespaces. `AdmonitionBlock.Positions.topLeft` works as a value. But in a type position, such as `position: AdmonitionBlock.Positions`, TypeScript won't resolve it. There, use `AdmonitionBlockMetadata.Positions`, which is semantically correct anyway because the metadata class is where the enum is defined. If you really want `AdmonitionBlock.Positions` as a type too, the only way is a merged `namespace AdmonitionBlock { export type Positions = AdmonitionBlockMetadata.Positions; }`. That's one line per type, though, which is the manual mapping you wanted to avoid, so I'd skip it.
