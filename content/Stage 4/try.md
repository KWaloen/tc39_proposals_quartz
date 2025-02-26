[[Stage 4]]<br>Classification: [[API Change]]<br>Human Validated: No<br>Title: Promise.try<br>Authors: Jordan Harband<br>Champions: Jordan Harband<br>Last Presented: October 2024<br>Stage Upgrades:<br>Stage 1: 2016-11-29  
Stage 2: 2024-03-26  
Stage 2.7: 2024-04-08  
Stage 3: 2024-07-03  
Stage 4: 2024-10-09<br>Last Commit: 2024-10-09<br>Keywords: #promise #synchronous #execution #function #exception #semantics #ergonomic #wrap #parallel #behavior<br>GitHub Link: https://github.com/tc39/proposal-promise-try <br>GitHub Note Link: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-09.md#promisetry-for-stage-4
# Proposal Description:
# Promise.try
ECMAScript Proposal, specs, and reference implementation for `Promise.try`

Spec drafted by [@ljharb](https://github.com/ljharb).

This proposal is currently [stage 4](https://github.com/tc39/proposals/) of the [process](https://tc39.github.io/process-document/).

## Rationale

A common use case that I, and many others, have, is that I have a function, `f`. This function may be async, and return a Promise, or it may not - I don’t wish to have to know. However, I'd like to wrap it in a Promise so that if it _is_ async, or if it throws, I can lean on Promise semantics and `.catch` to handle it.

The typical “easy to remember” way this is achieved in JS Promises is with `Promise.resolve().then(f)`. This works great! It catches any exceptions thrown, and it Promise-wraps any thenable or value returned from the function. However, `f` is needlessly run asynchronously, on a future tick.

If I want `f` to be run on the same tick - since, after all, it might be synchronously returning a value - or if I want parallel semantics with an `async function` up to the first `await` - then I need to use `new Promise(resolve => resolve(f()))`. This achieves my goal, but is not ergonomic to write nor easy to remember.

Using `Promise.try(f)`, I can get the same semantics as the `new Promise` mess above, nicely mirroring `async function`, and allowing optimistically synchronous, but safe, execution of a function, and being able to work with a Promise afterwards. Yay!

Userland implementations
 - [`p-try` package](https://www.npmjs.com/package/p-try) (44M weekly downloads, [8.9B total downloads](https://npm-stat.com/charts.html?package=p-try&from=2011-01-01); [alternate link](https://npmtrends.com/p-try-vs-promise-try-vs-promise.try-vs-try-to-catch))
 - Bluebird: [`Promise.try`/`Promise.attempt`](http://bluebirdjs.com/docs/api/promise.try.html) - takes one function, calls it with no args.
 - Q: [`Q.try`/`Promise.prototype.fcall`](https://github.com/kriskowal/q/wiki/API-Reference#promisefcallargs) - `Q.try` takes one function, calls it with no args. `Promise#fcall` is deprecated, but takes a list of arguments, and invokes the given function with that list of arguments.
 - when: [`when.try`/`when.attempt`](https://github.com/cujojs/when/blob/master/docs/api.md#whentry) - takes one function, and an optional list of arguments, and invokes the given function with that list of arguments.
 - ES6: [`es6-promise-try`](https://www.npmjs.com/package/es6-promise-try) - takes one function, calls it with no args. Functionally equivalent to Bluebird's `Promise.try`, but a stand-alone implementation using ES6 Promises.
 - [dojo/when](https://dojotoolkit.org/reference-guide/1.10/dojo/when.html)

Further reading
 - http://cryto.net/~joepie91/blog/2016/05/11/what-is-promise-try-and-why-does-it-matter/
 - https://twitter.com/RReverser/status/695678489937186816

## Naming

The most common name is `try`, which has a clean parallel with a syntactic `try` block. A common alternative name is `attempt`, but this has been primarily for ES3 compatibility, and is not necessary here.

## Spec
You can view the spec rendered as [HTML](https://tc39.github.io/proposal-promise-try/).

## Polyfills
 - [core-js](https://www.npmjs.com/package/core-js) v3.37+ ([docs](https://github.com/zloirock/core-js#promisetry))
 - es-shims: [promise.try](https://www.npmjs.com/package/promise.try)
<br>