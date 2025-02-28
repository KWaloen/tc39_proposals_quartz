[[Stage 0]]<br>Classification: [[Syntactic Change]]<br>Human Validated: KW<br>Title: Object Shorthand Improvements<br>Authors: Ron Buckton<br>Champions: Ron Buckton<br>Last Presented: Sep 2017<br>Stage Upgrades:<br>Stage 1: NA  
Stage 2: NA  
Stage 2.7: NA  
Stage 3: NA  
Stage 4: NA<br>Last Commit: 2017-07-25<br>Keywords: #object_initializers #property_accessors #dot_notation #bracket_notation #destructuring_assignment #assignment_target #property_name #shorthand_syntax #member_expression #call_expression<br>GitHub Link: https://github.com/rbuckton/proposal-shorthand-improvements <br>GitHub Note Link: https://github.com/tc39/notes/blob/HEAD/meetings/2017-09/sept-28.md#13i-object-shorthand-improvements
# Proposal Description:<br>
# ECMAScript Shorthand Property Assignment Improvements

This proposal introduces new forms of shorthand assignments for both object literal initializers 
and object assignment patterns, allowing the use of property accessors in addition to identifiers 
for shorthand assignments. 

## Status

**Stage:** 0  
**Champion:** Ron Buckton (@rbuckton)

_For more information see the [TC39 proposal process](https://tc39.github.io/process-document/)._

## Authors

* Ron Buckton (@rbuckton)

# Proposal

## Object Initializers

When property accessors are used in an object initializer, the property name of the accessor is 
used as the property name of the object and the value of property accessor is used as the value of 
the property in the object. This is illustrated by the following syntactic conversion:

```js
const a = { o.x };
```

is identical in its behavior to:

```js
const a = { x: o.x };
```

In addition to the dot notation for property access, bracket notation can be used as well. As with 
the dot notation, the expression of the bracket notation is used as the property name of the object. 
This is illustrated by the following syntactic conversion:

```js
const a = { o["x"] };
```

is (roughly) identical in its behavior to:

```js
const a = { ["x"]: o["x"] };
```

Note that rather than duplicating the expression `"x"` above, the actual implementation will rely on 
[GetReferencedName](https://tc39.github.io/ecma262/#sec-getreferencedname).

## Destructuring Assignments

When property accessors are used in a destructuring assignment, the property name of the accessor 
is used as the property name for the assignment property, while the property accessor itself is 
used as the assignment target. This is illustrated by the following syntactic conversion:

```js
({ a.x } = o);
```

is identical in its behavior to:

```js
({ x: a.x } = o);
```

In addition to the dot notation, bracket notation can be used here as well. When the bracket 
notation is used, the expression of the bracket notation is evaluated and used as the property name
of the assignment property, while the property accessor itself is used as the assignment target.
This is illustrated by the following syntactic conversion:

```js
({ a["x"] } = o);
```

is (roughly) identical in its behavior to:

```js
({ ["x"]: a["x"] } = o);
```

Note that rather than duplicating the expression `"x"` above, the actual implementation will rely on 
[GetReferencedName](https://tc39.github.io/ecma262/#sec-getreferencedname).


# Grammar

```grammarkdown
PropertyDefinition[Yield, Await]:
    MemberExpression[?Yield, ?Await] `.` IdentifierName
    MemberExpression[?Yield, ?Await] `[` Expression `]`
    CallExpression[?Yield, ?Await] `.` IdentifierName
    CallExpression[?Yield, ?Await] `[` Expression `]`
    ...

AssignmentProperty[Yield, Await]:
    MemberExpression[?Yield, ?Await] `.` IdentifierName Initializer[+In, ?Yield, ?Await]?
    MemberExpression[?Yield, ?Await] `[` Expression `]` Initializer[+In, ?Yield, ?Await]?
    CallExpression[?Yield, ?Await] `.` IdentifierName Initializer[+In, ?Yield, ?Await]?
    CallExpression[?Yield, ?Await] `[` Expression `]` Initializer[+In, ?Yield, ?Await]?
```

# Resources

- [Overview Slides](https://rbuckton.github.io/proposal-shorthand-improvements/ShorthandImprovements-tc39.pptx)

# TODO

The following is a high-level list of tasks to progress through each stage of the [TC39 proposal process](https://tc39.github.io/process-document/):

### Stage 1 Entrance Criteria

* [x] Identified a "[champion][Champion]" who will advance the addition.  
* [x] [Prose][Prose] outlining the problem or need and the general shape of a solution.  
* [x] Illustrative [examples][Examples] of usage.  
* [x] ~High-level API~ _(proposal does not introduce an API)_.  

### Stage 2 Entrance Criteria

* [ ] [Initial specification text][Specification].  
* [ ] _Optional_. [Transpiler support][Transpiler].  

### Stage 3 Entrance Criteria

* [ ] [Complete specification text][Specification].  
* [ ] Designated reviewers have [signed off][Stage3ReviewerSignOff] on the current spec text.  
* [ ] The ECMAScript editor has [signed off][Stage3EditorSignOff] on the current spec text.  

### Stage 4 Entrance Criteria

* [ ] [Test262](https://github.com/tc39/test262) acceptance tests have been written for mainline usage scenarios and [merged][Test262PullRequest].  
* [ ] Two compatible implementations which pass the acceptance tests: [\[1\]][Implementation1], [\[2\]][Implementation2].  
* [ ] A [pull request][Ecma262PullRequest] has been sent to tc39/ecma262 with the integrated spec text.  
* [ ] The ECMAScript editor has signed off on the [pull request][Ecma262PullRequest].  

<!-- The following are shared links used throughout the README: -->

[Champion]: #status
[Prose]: #proposal
[Examples]: #proposal
[Specification]: #todo
[Transpiler]: #todo
[Stage3ReviewerSignOff]: #todo
[Stage3EditorSignOff]: #todo
[Test262PullRequest]: #todo
[Implementation1]: #todo
[Implementation2]: #todo
[Ecma262PullRequest]: #todo