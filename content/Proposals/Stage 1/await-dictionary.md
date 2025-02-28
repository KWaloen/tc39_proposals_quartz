[[Stage 1]]<br>Classification: [[API Change]]<br>Human Validated: KW<br>Title: Await Dictionary<br>Authors: Alexander J. Vincent<br>Champions: Ashley Claymore, Jordan Harband, Chris de Almeida<br>Last Presented: March 2023<br>Stage Upgrades:<br>Stage 1: 2023-03-23  
Stage 2: NA  
Stage 2.7: NA  
Stage 3: NA  
Stage 4: NA<br>Last Commit: 2023-03-25<br>Keywords: #promise #properties #parallel #waterfall #pollution #entries #object #native #polyfill #asynchronous<br>GitHub Link: https://github.com/tc39/proposal-await-dictionary <br>GitHub Note Link: https://github.com/tc39/notes/blob/HEAD/meetings/2023-03/mar-22.md#await-dictionary-for-stage-1
# Proposal Description:
# Await dictionary of Promises

## Status

Stage: 1

Champions:

- Ashley Claymore ([@acutmore](https://github.com/acutmore))
- Jordan Harband ([@ljharb](https://github.com/ljharb))
- Chris de Almeida ([@ctcpip](https://github.com/ctcpip))
- TBC: Rick Waldron ([@rwaldron](https://github.com/rwaldron))

Authors:

- Alexander J. Vincent ([@ajvincent](https://github.com/ajvincent))
- Ashley Claymore ([@acutmore](https://github.com/acutmore))

## Motivation

`await` on individual properties creates a waterfall, rather than running requests in parallel:

```javascript
const obj = {
  shape: await getShape(),
  color: await getColor(),
  mass: await getMass(),
};
```

`Promise.all` helps, but is based on order, rather than names, which could lead to mixups:

```javascript
const [
  color,
  shape,
  mass,
] = await Promise.all([
  getShape(),
  getColor(),
  getMass(),
]);
```

Solutions using existing syntax can be verbose and _pollute_ the number of variables in scope:

```javascript
const shapeRequest = getShape();
const colorRequest = getColor();
const massRequest = getMass();

const shape = await shapeRequest;
const color = await colorRequest;
const mass = await massRequest;
```

## Potential solutions

### Promise.ownProperties

```javascript
const {
  shape,
  color,
  mass,
} = await Promise.ownProperties({
  shape: getShape(),
  color: getColor(),
  mass: getMass(),
});
```

### Promise.fromEntries

```javascript
const {
  shape,
  color,
  mass,
} = await Promise.fromEntries(Object.entries({
  shape: getShape(),
  color: getColor(),
  mass: getMass(),
}));
```

## Existing solutions

http://bluebirdjs.com/docs/api/promise.props.html

https://github.com/slorber/combine-promises

https://github.com/sindresorhus/p-props

## Implementations

### Polyfill/transpiler implementations

None.

### Native implementations

None.

## Q&A

**Q**: Why not a deep-copy option?

**A**: Deep copy traditionally has been left out of JavaScript for a number of reasons.  While a recursive promise walking API might be possible, combining it with this feels overcomplicated and unlikely to pass TC39's smell tests.

**Q**: Why not all keys?

**A**: This implies walking the prototype chain.  Note this proposal would have been `Promise.allProperties()` originally, but that naming confuses what the polyfill does above with that intended use case.  Plus, if a prototype has promises on it, then how would we safely construct the prototype of the resulting object?  Going down the prototype chain opens a can of worms.

**Q**: What about symbol keys?

**A**: We haven't really talked about them yet.  That said, `Object.entries()`, for better or for worse, only considers string keys.

<br>