[[Inactive]]<br>Classification: [[API Change]]<br>Human Validated: KW<br>Title: {Set,Map}.prototype.toJSON<br>Authors: David Bruant, Jordan Harband<br>Rejected: better solved by a custom replacer function.<br>Last Presented: None<br>Stage Upgrades:
Stage 1: NA
Stage 2: NA  
Stage 2.7: NA  
Stage 3: NA  
Stage 4: NA<br>Last Commit: 2016-04-01<br>Keywords: #json_serialization #map_structure #set_structure #data_conversion #object_representation #prototype_extension #stringification #default_behavior #web_compatibility #data_persistence<br>GitHub Link: https://github.com/DavidBruant/Map-Set.prototype.toJSON <br>GitHub Note Link: https://github.com/DavidBruant/Map-Set.prototype.toJSON/issues/16
# Proposal Description:<br>
# Map-Set.prototype.toJSON

An [ECMAScript](https://github.com/tc39/ecma262) proposal. ~~Currently at **Stage 0**.~~

This proposal was brought before the committee in the March 2016 meeting, and thoroughly rejected. [Details](https://github.com/DavidBruant/Map-Set.prototype.toJSON/issues/16)

## Problem

Here is the current situation:

````js
var s = new Set(['yo', 'ya', true, 8]);

console.log(JSON.stringify(s)); // '{}'
````

This result is unhelpful. Same goes for Map.


## Proposal

This proposal is about providing a sensible default to the common operation of JSON serialization via default `toJSON` implementations on `Set.prototype` and `Map.prototype`. Of course, userland code can always shadow this value on specific instances.

### Map.prototype.toJSON

The essence of the proposal is captured in this snippet (spec in [markdown](spec.md#mapprototypetojson--) or [HTML](http://davidbruant.github.io/Map-Set.prototype.toJSON/#Map.prototype.toJSON)):

````js
Map.prototype.toJSON = function toJSON() {
  return [...Map.prototype.entries.call(this)];
}
````

### Set.prototype.toJSON

The essence of the proposal is captured in this snippet (spec in [markdown](spec.md#setprototypetojson--) or [HTML](http://davidbruant.github.io/Map-Set.prototype.toJSON/#Set.prototype.toJSON)):

````js
Set.prototype.toJSON = function toJSON() {
  return [...Set.prototype.values.call(this)];
}
````

## Discussion

There might be a web compat concern if code using native Map and Set or polyfill relies on the current JSON.stringify behavior.


# Licence

This work is dedicated to the public domain. It is [CC0 licenced](https://creativecommons.org/publicdomain/zero/1.0/).