[[Stage 1]]<br>Classification: [[API Change]]<br>Human Validated: No<br>Title: Array.zip and Array.zipKeyed<br>Authors: Jordan Harband<br>Champions: Jordan Harband<br>Last Presented: October 2024<br>Stage Upgrades:<br>Stage 1: 2024-10-09  
Stage 2: NA  
Stage 2.7: NA  
Stage 3: NA  
Stage 4: NA<br>Last Commit: 2024-10-10<br>Keywords: #iteration #synchronization #performance #static_method #iterable #array_zip #utilities #joint_iteration #compatibility #iteration_helpers<br>GitHub Link: https://github.com/tc39/proposal-array-zip <br>GitHub Note Link: https://github.com/tc39/notes/blob/HEAD/meetings/2024-10/october-09.md#arrayzip-for-stage-1-or-2-or-27
# Proposal Description:
# proposal-array-zip

A TC39 proposal to synchronize the iteration of multiple arrays.

This proposal is based entirely on https://github.com/tc39/proposal-joint-iteration - in other words, this proposal is `Iterator.zip` and `Iterator.zipKeyed` for arrays.

**Stage**: 1

**Specification**: https://tc39.es/proposal-array-zip/

## Motivation / Problem

Despite iterators existing for over a decade, it is still exceedingly common to use - and prefer - arrays over iterators, especially for small finite lists. They're simpler to work with, often more performant, and more broadly compatible with ecosystem libraries.

One can now always turn any iterator into an array with `.toArray()` - which is useful, but not ergnomic, especially when combined with the need to wrap the value in `Iterator.from()` before accessing iterator helpers.

## Solution

Add `Array.zip` and `Array.zipKeyed` static methods to the `Array` constructor.

### Rationales

 - the method names, APIs, and semantics must match https://github.com/tc39/proposal-joint-iteration, to avoid confusion
  - this includes accepting iterables, like `Array.from` and `Array.fromAsync`
 - Adding Array.prototype methods is the most frequent cause of web compatibility issues, and browsers have expressed an unwillingness to even attempt adding more in the future - thus, they must be static
<br>