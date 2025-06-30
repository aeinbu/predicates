# Placeholder for README.md

# @aeinbu/predicates

Lightweight and non-intrusive aggregate functions to use with array filters

- The functions are lightweight, as they are small and don't make you bring along lots of functions you don't need.
- These functions run just as well in a browser as they do in nodejs.
- The package is non-intrusive, as it doesn't extend arrays adding new and non-standard methods to them.
  - This is done by having functions that you use with `.every(...)`, `.some(...)` and `.filter(...)` on arrays.
- @types are included for better discoverability during development when you use editors with javascript/typescript intellisence support


## How to install <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@aeinbu/predicates">

With npm
```shell
npm install @aeinbu/predicates
```
...or with yarn
```shell
yarn add @aeinbu/predicates
```

## Quickstart
```javascript
//TODO:
```

## Documentation
For more documentation, follow these links:
- [areAllEqual](./areAllEqual.md)
- [areAllUnique](./areAllUnique.md)
- [isDeepEqual](./isDeepEqual.md)

Also, look in the `tests` directory for more examples. The tests demonstrate more ways to use this library

## Semantic versioning
This package follows semantic versioning (See [semver.org](https://semver.org) for more info)

## License
This package is published under the MIT License. (See [LICENSE file](/LICENSE) for more info)
