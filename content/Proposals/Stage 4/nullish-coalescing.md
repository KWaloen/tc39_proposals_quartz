[[Stage 4]]<br>Classification: [[Syntactic Change]]<br>Human Validated: KW<br>Title: Nullish coalescing Operator<br>Authors: Gabriel Isenberg<br>Champions: Gabriel Isenberg, Justin Ridgewell, Daniel Rosenwasser<br>Last Presented: December 2019<br>Stage Upgrades:<br>Stage 1: 2017-09-28  
Stage 2: 2019-06-05  
Stage 2.7: NA  
Stage 3: 2019-07-23  
Stage 4: 2020-01-21<br>Last Commit: 2022-11-24<br>Keywords: #null #undefined #property_access #default_value #falsy_value #equality_check #optional_chaining #complementary_operator #nullary_coalescing #operator<br>GitHub Link: https://github.com/tc39/proposal-nullish-coalescing <br>GitHub Note Link: https://github.com/tc39/notes/blob/HEAD/meetings/2019-12/december-4.md#nullish-coalescing-for-stage-4
# Proposal Description:
# Nullish Coalescing for JavaScript

## Status
Current Stage:
* Stage 4

## Authors

* Gabriel Isenberg ([github](https://github.com/gisenberg), [twitter](https://twitter.com/the_gisenberg))
* Daniel Ehrenberg ([github](https://github.com/littledan), [twitter](https://twitter.com/littledan))
* Daniel Rosenwasser ([github](https://github.com/DanielRosenwasser), [twitter](https://twitter.com/drosenwasser))

## Overview and motivation
When performing property accesses, it is often desired to provide a default value if the result of that property access is `null` or `undefined`. At present, a typical way to express this intent in JavaScript is by using the `||` operator.

```javascript
const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: '',
    showSplashScreen: false
  }
};

const undefinedValue = response.settings.undefinedValue || 'some other default'; // result: 'some other default'
const nullValue = response.settings.nullValue || 'some other default'; // result: 'some other default'
```

This works well for the common case of `null` and `undefined` values, but there are a number of falsy values that might produce surprising results:

```javascript
const headerText = response.settings.headerText || 'Hello, world!'; // Potentially unintended. '' is falsy, result: 'Hello, world!'
const animationDuration = response.settings.animationDuration || 300; // Potentially unintended. 0 is falsy, result: 300
const showSplashScreen = response.settings.showSplashScreen || true; // Potentially unintended. false is falsy, result: true
```

The nullary coalescing operator is intended to handle these cases better and serves as an equality check against nullary values (`null` or `undefined`). 

## Syntax
*Base case*. If the expression at the left-hand side of the `??` operator evaluates to `undefined` or `null`, its right-hand side is returned.

```javascript
const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: '',
    showSplashScreen: false
  }
};

const undefinedValue = response.settings.undefinedValue ?? 'some other default'; // result: 'some other default'
const nullValue = response.settings.nullValue ?? 'some other default'; // result: 'some other default'
const headerText = response.settings.headerText ?? 'Hello, world!'; // result: ''
const animationDuration = response.settings.animationDuration ?? 300; // result: 0
const showSplashScreen = response.settings.showSplashScreen ?? true; // result: false
```

## Notes
While this proposal specifically calls out `null` and `undefined` values, the intent is to provide a complementary operator to the [optional chaining operator](https://github.com/TC39/proposal-optional-chaining). This proposal will update to match the semantics of that operator.

## Prior Art
* [Null coalescing operator](https://en.wikipedia.org/wiki/Null_coalescing_operator)

## Specification
* https://tc39.github.io/proposal-nullish-coalescing/

## References
* [TC39 Slide Deck: Null Coalescing Operator](https://docs.google.com/presentation/d/1m5nxTH8ifcmOlyaTmTuMAa1bawiGUyKJzQGlw-EVSKM/edit?usp=sharing)

## Prior discussion
* https://stackoverflow.com/questions/476436/is-there-a-null-coalescing-operator-in-javascript
* https://esdiscuss.org/topic/proposal-for-a-null-coalescing-operator
<br>