[[Stage 4]]<br>Classification: [[API Change]]<br>Human Validated: No<br>Title: Shared memory and atomics<br>Authors: Lars T Hansen<br>Champions: Lars T Hansen<br>Last Presented: January 2017<br>Stage Upgrades:<br>Stage 1: 2015-06-24  
Stage 2: 2016-01-28  
Stage 2.7: NA  
Stage 3: 2016-12-02  
Stage 4: 2017-02-09<br>Last Commit: 2017-02-09<br>Keywords: #shared_memory #atomics #multithreading #synchronization #concurrency #memory_model #data_race #shared_array_buffer #thread_safety #performance<br>GitHub Link: https://github.com/tc39/proposal-ecmascript-sharedmem <br>GitHub Note Link: https://github.com/tc39/notes/blob/HEAD/meetings/2017-01/jan-24.md#13if-seeking-stage-4-for-sharedarraybuffer
# Proposal Description:
# ecmascript_sharedmem

This is a specification for Shared Memory and Atomics for ECMAScript, a proposal submitted to Ecma TC39 and currently at Stage 4 in the ECMAScript approval process.

**IMPORTANT NOTE:**  As of February 2017 this proposal has been merged into the [ECMAScript specification](https://tc39.github.io/ecma262/).  Bug fixing and further evolution take place in that document, and the prose in the present repository will increasingly become irrelevant.  If you find bugs, please check the ECMAScript specification first, and if the bugs are also in that version then please file bugs [in the ecma262 bug tracker](https://github.com/tc39/ecma262/issues), not in this repository.

## Documentation and other materials

* [Formatted specification](http://tc39.github.io/ecmascript_sharedmem/shmem.html)
* [DOM companion specification](http://tc39.github.io/ecmascript_sharedmem/dom_shmem.html)
* [asm.js companion specification](http://tc39.github.io/ecmascript_sharedmem/asmjs_shmem.html)
* [Simple tutorial introduction](TUTORIAL.md)
* [Demo programs and other examples](DEMOS.md)
* [Frequently asked questions](FAQ.md)
* [High-level design issues, cross-cutting concerns, security concerns, etc](DISCUSSION.md)
* Slide decks for presentations given to Ecma TC39:
  * [September 2015](https://github.com/tc39/ecmascript_sharedmem/blob/master/tc39/presentation-sept-2015.odp)
  * [January 2016](https://github.com/tc39/ecmascript_sharedmem/blob/master/tc39/presentation-jan-2016.odp)

## Implementations

Firefox, Chrome and WebKit ship with prototype implementations of the proposal; these are largely compatible.

* The feature is enabled by default in Firefox Nightly; starting with Firefox 46, users of Developer Edition, Aurora, Beta, and Release can visit `about:config` and set the option `javascript.options.shared_memory` to `true`.
* The feature is off by default in Chrome, but can be enabled by passing the command line options `--js-flags=--harmony-sharedarraybuffer` and `--enable-blink-feature=SharedArrayBuffer`.  (Known to work in Chrome 48.)
* The feature is enabled by default in WebKit Nightly and Safari Technology Preview as of STP 20.

## Miscellaneous

The sources for the specs are in the tc39/ subdirectory and the formatted versions are generated with the `format.sh` script.

<br>