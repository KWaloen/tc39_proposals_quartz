[[Stage 0]]<br>Classification: [[Syntactic Change]]<br>Human Validated: KW<br>Title: Function expression decorators<br>Authors: Igor Minar<br>Champions: Igor Minar<br>Last Presented: None<br>Stage Upgrades:<br>Stage 1: NA  
Stage 2: NA  
Stage 2.7: NA  
Stage 3: NA  
Stage 4: NA<br>Last Commit: 2016-01-25<br>Keywords: #function_expression_decorators #memoization #logging #error_handling #dependency_injection #testing_frameworks #async_functions #metadata_annotations #callback_wrapping #decorator_patterns #ecmascript<br>Link: https://goo.gl/8MmCMG <br>GitHub Note Link: None
# Proposal Description:<br>
# Function Expression Decorators

ECMA-262 Proposal

Author: @IgorMinar, Short Url: [https://goo.gl/8MmCMG](https://goo.gl/8MmCMG)

Status: [Stage 0 candidate](https://github.com/tc39/ecma262/pull/324), Last Update: 2016-01-25


This proposal builds on top of the [[decorators]] proposal and adds decorator support for function expressions.

# Motivating Use Cases

  ## Augmenting function expressions


A decorator could augment function expression by wrapping it into another function.  There are many reasons why this would be useful, here is just a few:

- memoization
    
- logging / tracing
    
- error handling
    

## Metadata providing additional information about callbacks


When registering callbacks, function expression decorators can be used to provide information about the callback.

  

There are two existing areas where libraries and frameworks simulate use of function expression decorators:

  
### Dependency Injection

  

@inject decorators could be used to specify that a function expression / callback should be injected by the injector.

  
  

### Testing

  

Libraries like Jasmine and Mocha use custom DSL to partially simulate the use of function expression decorators. Example decorators that would be useful for developers:

  

- @timeout(5000) - kill this test after 5sec
    
- @flaky - mark this test as one known to be flaky (ignore errors)
    
- @disabled - exclude this test from a test run
    
- @expensive / @slow - deprioritize a test known to be slow, run it only if fast tests pass
    
- @description('should do foo..') - provide human readable description of a test
    
- @async - flags a test as asynchronous. This requires the testing harness to wait until the tests signals that it's done executing before starting other tests.
    

  
  
  

# Basic Usage

  

### Usage

  

scheduleForFrequentReexecution(@memoize function(value) { 

  value++

});

  

### Decorator definition

  

export function memoize(...) {

  // at minimum, the arguments of this function should contain:

  // - reference to the decorated function expression

  // - arguments passed into the memoize function (if any)

  

  // wrap the decorated function expression memoization implementation and return it

}

  

# Implementation Discussion / FAQ

  

## Possible Implementation Approaches

  

While for Stage 0, we are not aiming to specify the particular implementation approach, there are at least three approaches that have been discussed or implemented so far:

  

- The TypeScript v1.5-1.8 implementation based on the very same decorator implementation as that used for Class and property decorators.
    
- [Mirrors](https://gist.github.com/rbuckton/8e6806fb6852b50e4052/) as proposed by Ron Buckton
    

  
  

## Function Declarations

  

Unlike decorating function expressions, decorating function declarations exposes us to a TDZ issue due to the hoisting that function declarations are subject to.

  
The TDZ issue can be resolved using [Mirrors](https://gist.github.com/rbuckton/8e6806fb6852b50e4052/) and if this proves to be an acceptable solution this proposal can be expanded to include function declarations as well.