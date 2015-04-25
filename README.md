# MPD Parser #

Parses mpd files, this module is a part of Google Shaka player, we've extracted its parser to act as a standalone module, Shaka uses Closure compiler to transform its module code into a single javascript file, we're following the same path to create a single 'compiled' javascript which performs mpd parsing.

## Dependencies ##

[Closure Compiler]: https://developers.google.com/closure/compiler/

## Building ##

```Shell
closurebuilder.py --root=CLOSURE_LIBRARY --root=PROJECT_ROOT   --namespace="SR_MPD_PARSER" --output_mode=compiled --compiler_jar=COMPILER_JAR --compiler_flags="--compilation_level=WHITESPACE_ONLY" > OUTPUT
```

Where:
CLOSURE_LIBRARY - path to your closure library
PROJECT_ROOT - path to root of this project
SR_MPD_PARSER - module name from which dependency tree is built
COMPILER_JAR - path to closure compiler
compilation_level - whichever level you'll like to use (https://developers.google.com/closure/compiler/docs/compilation_levels)
OUTPUT - compilation result end up here.

e.g.

```Shell
closure-library/closure/bin/build/closurebuilder.py --root=closure-library/ --root=/streamrail/frontend/shaka-player/ --namespace="sr.mpdParser" --output_mode=compiled --compiler_jar=compiler.jar --compiler_flags="--compilation_level=WHITESPACE_ONLY" >compiled.js
```

Finally to make compiled.js readable run its content through jsbeautifier.

## Usage ##
```JavaScript
// Issues an ajax request to retrive given file
// Parses xml response
// Constructs an object from xml
// resolve promise with object
sr.mpdParser(http://dash.edgesuite.net/envivio/dashpr/clear/Manifest.mpd).then(function(mpd) {
	// Inspect, work with parsed object.
});
```