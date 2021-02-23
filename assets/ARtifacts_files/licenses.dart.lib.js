define(['dart_sdk'], (function load__packages__flutter__src__foundation__licenses_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var licenses = Object.create(dart.library);
  var $substring = dartx.substring;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $trimLeft = dartx.trimLeft;
  var $clear = dartx.clear;
  var $_get = dartx._get;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(false);
  var _LicenseEntryWithLineBreaksParserStateL = () => (_LicenseEntryWithLineBreaksParserStateL = dart.constFn(dart.legacy(licenses._LicenseEntryWithLineBreaksParserState)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLicenseParagraph = () => (VoidToLicenseParagraph = dart.constFn(dart.fnType(licenses.LicenseParagraph, [])))();
  var SyncIterableOfLicenseParagraph = () => (SyncIterableOfLicenseParagraph = dart.constFn(_js_helper.SyncIterable$(licenses.LicenseParagraph)))();
  var StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(licenses.LicenseEntry)))();
  var VoidToStreamOfLicenseEntry = () => (VoidToStreamOfLicenseEntry = dart.constFn(dart.fnType(StreamOfLicenseEntry(), [])))();
  var JSArrayOfVoidToStreamOfLicenseEntry = () => (JSArrayOfVoidToStreamOfLicenseEntry = dart.constFn(_interceptors.JSArray$(VoidToStreamOfLicenseEntry())))();
  var _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(licenses.LicenseEntry)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/foundation/licenses.dart";
  var L1 = "package:flutter/src/foundation/licenses.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_name$]: "_LicenseEntryWithLineBreaksParserState.beforeParagraph",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_name$]: "_LicenseEntryWithLineBreaksParserState.inParagraph",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], _LicenseEntryWithLineBreaksParserStateL());
    }
  }, false);
  var text$ = dart.privateName(licenses, "LicenseParagraph.text");
  var indent$ = dart.privateName(licenses, "LicenseParagraph.indent");
  licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
  };
  (licenses.LicenseParagraph.new = function(text, indent) {
    if (text == null) dart.nullFailed(L0, 15, 31, "text");
    if (indent == null) dart.nullFailed(L0, 15, 42, "indent");
    this[text$] = text;
    this[indent$] = indent;
    ;
  }).prototype = licenses.LicenseParagraph.prototype;
  dart.addTypeTests(licenses.LicenseParagraph);
  dart.addTypeCaches(licenses.LicenseParagraph);
  dart.setLibraryUri(licenses.LicenseParagraph, L1);
  dart.setFieldSignature(licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(core.String),
    indent: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(licenses.LicenseParagraph, {
    /*licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  }, false);
  licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (licenses.LicenseEntry.new = function() {
    ;
  }).prototype = licenses.LicenseEntry.prototype;
  dart.addTypeTests(licenses.LicenseEntry);
  dart.addTypeCaches(licenses.LicenseEntry);
  dart.setLibraryUri(licenses.LicenseEntry, L1);
  var _name$ = dart.privateName(licenses, "_name");
  var C0;
  var C1;
  var C2;
  licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (licenses._LicenseEntryWithLineBreaksParserState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 56, 6, "index");
    if (_name == null) dart.nullFailed(L0, 56, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(licenses._LicenseEntryWithLineBreaksParserState);
  dart.addTypeCaches(licenses._LicenseEntryWithLineBreaksParserState);
  dart.setLibraryUri(licenses._LicenseEntryWithLineBreaksParserState, L1);
  dart.setFieldSignature(licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getFields(licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = C0 || CT.C0;
  licenses._LicenseEntryWithLineBreaksParserState.inParagraph = C1 || CT.C1;
  licenses._LicenseEntryWithLineBreaksParserState.values = C2 || CT.C2;
  var packages$ = dart.privateName(licenses, "LicenseEntryWithLineBreaks.packages");
  var text$0 = dart.privateName(licenses, "LicenseEntryWithLineBreaks.text");
  licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get paragraphs() {
      return new (SyncIterableOfLicenseParagraph()).new((function* paragraphs() {
        let lineStart = 0;
        let currentPosition = 0;
        let lastLineIndent = 0;
        let currentLineIndent = 0;
        let currentParagraphIndentation = null;
        let state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
        let lines = JSArrayOfString().of([]);
        const addLine = () => {
          if (!(lineStart < currentPosition)) dart.assertFailed(null, L0, 152, 14, "lineStart < currentPosition");
          lines[$add](this.text[$substring](lineStart, currentPosition));
        };
        dart.fn(addLine, VoidTovoid());
        function getParagraph() {
          if (!dart.test(lines[$isNotEmpty])) dart.assertFailed(null, L0, 157, 14, "lines.isNotEmpty");
          if (!(currentParagraphIndentation != null)) dart.assertFailed(null, L0, 158, 14, "currentParagraphIndentation != null");
          let result = new licenses.LicenseParagraph.new(lines[$join](" "), dart.nullCheck(currentParagraphIndentation));
          if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed(null, L0, 160, 14, "result.text.trimLeft() == result.text");
          if (!result.text[$isNotEmpty]) dart.assertFailed(null, L0, 161, 14, "result.text.isNotEmpty");
          lines[$clear]();
          return result;
        }
        dart.fn(getParagraph, VoidToLicenseParagraph());
        while (currentPosition < this.text.length) {
          switch (state) {
            case C0 || CT.C0:
            {
              if (!(lineStart === currentPosition)) dart.assertFailed(null, L0, 169, 18, "lineStart == currentPosition");
              let labelState = this.text[$_get](currentPosition);
              SL0:
                while (true) {
                  switch (labelState) {
                    case " ":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 1;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\t":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 8;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\r":
                    case "\n":
                    case "\f":
                    {
                      if (dart.test(lines[$isNotEmpty])) {
                        yield getParagraph();
                      }
                      if (this.text[$_get](currentPosition) === "\r" && currentPosition < this.text.length - 1 && this.text[$_get](currentPosition + 1) === "\n") {
                        currentPosition = currentPosition + 1;
                      }
                      lastLineIndent = 0;
                      currentLineIndent = 0;
                      currentParagraphIndentation = null;
                      lineStart = currentPosition + 1;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "[":
                    {
                      currentLineIndent = currentLineIndent + 1;
                      labelState = Symbol('_default');
                      continue SL0;
                    }
                    default:
                    {
                      if (dart.test(lines[$isNotEmpty]) && currentLineIndent > lastLineIndent) {
                        yield getParagraph();
                        currentParagraphIndentation = null;
                      }
                      if (currentParagraphIndentation == null) {
                        if (currentLineIndent > 10)
                          currentParagraphIndentation = -1;
                        else
                          currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                      }
                      state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                      break SL0;
                    }
                  }
                  break;
                }
              break;
            }
            case C1 || CT.C1:
            {
              switch (this.text[$_get](currentPosition)) {
                case "\n":
                {
                  addLine();
                  lastLineIndent = currentLineIndent;
                  currentLineIndent = 0;
                  lineStart = currentPosition + 1;
                  state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\f":
                {
                  addLine();
                  yield getParagraph();
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                default:
                {
                  state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
          currentPosition = currentPosition + 1;
        }
        switch (state) {
          case C0 || CT.C0:
          {
            if (dart.test(lines[$isNotEmpty])) {
              yield getParagraph();
            }
            break;
          }
          case C1 || CT.C1:
          {
            addLine();
            yield getParagraph();
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }).bind(this));
    }
  };
  (licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    if (packages == null) dart.nullFailed(L0, 121, 41, "packages");
    if (text == null) dart.nullFailed(L0, 121, 56, "text");
    this[packages$] = packages;
    this[text$0] = text;
    licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
    ;
  }).prototype = licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(licenses.LicenseEntryWithLineBreaks);
  dart.addTypeCaches(licenses.LicenseEntryWithLineBreaks);
  dart.setGetterSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: core.Iterable$(licenses.LicenseParagraph)
  }));
  dart.setLibraryUri(licenses.LicenseEntryWithLineBreaks, L1);
  dart.setFieldSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(core.List$(core.String)),
    text: dart.finalFieldType(core.String)
  }));
  licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static addLicense(collector) {
      if (collector == null) dart.nullFailed(L0, 303, 48, "collector");
      licenses.LicenseRegistry._collectors == null ? licenses.LicenseRegistry._collectors = JSArrayOfVoidToStreamOfLicenseEntry().of([]) : null;
      dart.nullCheck(licenses.LicenseRegistry._collectors)[$add](collector);
    }
    static get licenses() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* licenses$(stream) {
        if (licenses.LicenseRegistry._collectors == null) return;
        for (let collector of dart.nullCheck(licenses.LicenseRegistry._collectors)) {
          if (stream.addStream(collector())) return;
          yield;
        }
      }).stream;
    }
    static reset() {
      licenses.LicenseRegistry._collectors = null;
    }
  };
  (licenses.LicenseRegistry.__ = function() {
    ;
  }).prototype = licenses.LicenseRegistry.prototype;
  dart.addTypeTests(licenses.LicenseRegistry);
  dart.addTypeCaches(licenses.LicenseRegistry);
  dart.setLibraryUri(licenses.LicenseRegistry, L1);
  dart.defineLazy(licenses.LicenseRegistry, {
    /*licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/licenses.dart", {
    "package:flutter/src/foundation/licenses.dart": licenses
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["licenses.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/licenses.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__licenses: licenses
  };
}));

//# sourceMappingURL=licenses.dart.lib.js.map
