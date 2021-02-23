define(['dart_sdk', 'packages/flutter/src/services/text_input.dart', 'packages/characters/src/characters_impl.dart', 'packages/characters/src/extensions.dart', 'packages/flutter/src/services/text_editing.dart'], (function load__packages__flutter__src__services__text_formatter_dart(dart_sdk, packages__flutter__src__services__text_input$46dart, packages__characters__src__characters_impl$46dart, packages__characters__src__extensions$46dart, packages__flutter__src__services__text_editing$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_input = packages__flutter__src__services__text_input$46dart.src__services__text_input;
  const characters_impl = packages__characters__src__characters_impl$46dart.src__characters_impl;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  var text_formatter = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $splitMapJoin = dartx.splitMapJoin;
  var $length = dartx.length;
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(false);
  var MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  var StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/text_formatter.dart";
  var L1 = "package:flutter/src/services/text_formatter.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1,
        [TextSelection_isDirectional]: false,
        [TextSelection_affinity]: C1 || CT.C1,
        [TextSelection_extentOffset]: -1,
        [TextSelection_baseOffset]: -1
      });
    }
  }, false);
  text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      if (formatFunction == null) dart.nullFailed(L0, 52, 29, "formatFunction");
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (text_formatter.TextInputFormatter.new = function() {
    ;
  }).prototype = text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.TextInputFormatter);
  dart.addTypeCaches(text_formatter.TextInputFormatter);
  dart.setLibraryUri(text_formatter.TextInputFormatter, L1);
  text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends text_formatter.TextInputFormatter {
    formatEditUpdate(oldValue, newValue) {
      let t1, t0;
      if (oldValue == null) dart.nullFailed(L0, 74, 22, "oldValue");
      if (newValue == null) dart.nullFailed(L0, 75, 22, "newValue");
      t0 = oldValue;
      t1 = newValue;
      return this.formatFunction(t0, t1);
    }
  };
  (text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    if (formatFunction == null) dart.nullFailed(L0, 67, 34, "formatFunction");
    this.formatFunction = formatFunction;
    if (!(formatFunction != null)) dart.assertFailed(null, L0, 68, 14, "formatFunction != null");
    ;
  }).prototype = text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter._SimpleTextInputFormatter);
  dart.addTypeCaches(text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter._SimpleTextInputFormatter, L1);
  dart.setFieldSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]))
  }));
  var filterPattern$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.filterPattern");
  var allow$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.allow");
  var replacementString$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.replacementString");
  text_formatter.FilteringTextInputFormatter = class FilteringTextInputFormatter extends text_formatter.TextInputFormatter {
    get filterPattern() {
      return this[filterPattern$];
    }
    set filterPattern(value) {
      super.filterPattern = value;
    }
    get allow() {
      return this[allow$];
    }
    set allow(value) {
      super.allow = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    formatEditUpdate(oldValue, newValue) {
      if (oldValue == null) dart.nullFailed(L0, 220, 22, "oldValue");
      if (newValue == null) dart.nullFailed(L0, 221, 22, "newValue");
      return text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => {
        if (substring == null) dart.nullFailed(L0, 225, 15, "substring");
        return substring[$splitMapJoin](this.filterPattern, {onMatch: !dart.test(this.allow) ? dart.fn(match => {
            if (match == null) dart.nullFailed(L0, 228, 36, "match");
            return this.replacementString;
          }, MatchToString()) : null, onNonMatch: dart.test(this.allow) ? dart.fn(nonMatch => {
            if (nonMatch == null) dart.nullFailed(L0, 229, 39, "nonMatch");
            return nonMatch[$isNotEmpty] ? this.replacementString : "";
          }, StringToString()) : null});
      }, StringToString()));
    }
  };
  (text_formatter.FilteringTextInputFormatter.new = function(filterPattern, opts) {
    if (filterPattern == null) dart.nullFailed(L0, 107, 10, "filterPattern");
    let allow = opts && 'allow' in opts ? opts.allow : null;
    if (allow == null) dart.nullFailed(L0, 108, 19, "allow");
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    if (replacementString == null) dart.nullFailed(L0, 109, 10, "replacementString");
    this[filterPattern$] = filterPattern;
    this[allow$] = allow;
    this[replacementString$] = replacementString;
    if (!(filterPattern != null)) dart.assertFailed(null, L0, 110, 15, "filterPattern != null");
    if (!(allow != null)) dart.assertFailed(null, L0, 111, 15, "allow != null");
    if (!(replacementString != null)) dart.assertFailed(null, L0, 112, 15, "replacementString != null");
    ;
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  (text_formatter.FilteringTextInputFormatter.allow = function(filterPattern, opts) {
    if (filterPattern == null) dart.nullFailed(L0, 119, 10, "filterPattern");
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    if (replacementString == null) dart.nullFailed(L0, 120, 10, "replacementString");
    this[filterPattern$] = filterPattern;
    this[replacementString$] = replacementString;
    if (!(filterPattern != null)) dart.assertFailed(null, L0, 121, 15, "filterPattern != null");
    if (!(replacementString != null)) dart.assertFailed(null, L0, 122, 15, "replacementString != null");
    this[allow$] = true;
    ;
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  (text_formatter.FilteringTextInputFormatter.deny = function(filterPattern, opts) {
    if (filterPattern == null) dart.nullFailed(L0, 130, 10, "filterPattern");
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    if (replacementString == null) dart.nullFailed(L0, 131, 10, "replacementString");
    this[filterPattern$] = filterPattern;
    this[replacementString$] = replacementString;
    if (!(filterPattern != null)) dart.assertFailed(null, L0, 132, 15, "filterPattern != null");
    if (!(replacementString != null)) dart.assertFailed(null, L0, 133, 15, "replacementString != null");
    this[allow$] = false;
    ;
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.FilteringTextInputFormatter);
  dart.addTypeCaches(text_formatter.FilteringTextInputFormatter);
  dart.setMethodSignature(text_formatter.FilteringTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.FilteringTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.FilteringTextInputFormatter, L1);
  dart.setFieldSignature(text_formatter.FilteringTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.FilteringTextInputFormatter.__proto__),
    filterPattern: dart.finalFieldType(core.Pattern),
    allow: dart.finalFieldType(core.bool),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(text_formatter.FilteringTextInputFormatter, {
    /*text_formatter.FilteringTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new text_formatter.FilteringTextInputFormatter.deny("\n");
    },
    /*text_formatter.FilteringTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new text_formatter.FilteringTextInputFormatter.allow(core.RegExp.new("[0-9]"));
    }
  }, false);
  text_formatter.BlacklistingTextInputFormatter = class BlacklistingTextInputFormatter extends text_formatter.FilteringTextInputFormatter {
    get blacklistedPattern() {
      return this.filterPattern;
    }
  };
  (text_formatter.BlacklistingTextInputFormatter.new = function(blacklistedPattern, opts) {
    if (blacklistedPattern == null) dart.nullFailed(L0, 254, 13, "blacklistedPattern");
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    if (replacementString == null) dart.nullFailed(L0, 255, 12, "replacementString");
    text_formatter.BlacklistingTextInputFormatter.__proto__.deny.call(this, blacklistedPattern, {replacementString: replacementString});
    ;
  }).prototype = text_formatter.BlacklistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.BlacklistingTextInputFormatter);
  dart.addTypeCaches(text_formatter.BlacklistingTextInputFormatter);
  dart.setGetterSignature(text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getGetters(text_formatter.BlacklistingTextInputFormatter.__proto__),
    blacklistedPattern: core.Pattern
  }));
  dart.setLibraryUri(text_formatter.BlacklistingTextInputFormatter, L1);
  dart.defineLazy(text_formatter.BlacklistingTextInputFormatter, {
    /*text_formatter.BlacklistingTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new text_formatter.BlacklistingTextInputFormatter.new(core.RegExp.new("\\n"));
    }
  }, false);
  text_formatter.WhitelistingTextInputFormatter = class WhitelistingTextInputFormatter extends text_formatter.FilteringTextInputFormatter {
    get whitelistedPattern() {
      return this.filterPattern;
    }
  };
  (text_formatter.WhitelistingTextInputFormatter.new = function(whitelistedPattern) {
    if (whitelistedPattern == null) dart.nullFailed(L0, 285, 42, "whitelistedPattern");
    if (!(whitelistedPattern != null)) dart.assertFailed(null, L0, 286, 14, "whitelistedPattern != null");
    text_formatter.WhitelistingTextInputFormatter.__proto__.allow.call(this, whitelistedPattern);
    ;
  }).prototype = text_formatter.WhitelistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.WhitelistingTextInputFormatter);
  dart.addTypeCaches(text_formatter.WhitelistingTextInputFormatter);
  dart.setGetterSignature(text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getGetters(text_formatter.WhitelistingTextInputFormatter.__proto__),
    whitelistedPattern: core.Pattern
  }));
  dart.setLibraryUri(text_formatter.WhitelistingTextInputFormatter, L1);
  dart.defineLazy(text_formatter.WhitelistingTextInputFormatter, {
    /*text_formatter.WhitelistingTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d+"));
    }
  }, false);
  var maxLength$ = dart.privateName(text_formatter, "LengthLimitingTextInputFormatter.maxLength");
  text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    static truncate(value, maxLength) {
      if (value == null) dart.nullFailed(L0, 373, 53, "value");
      if (maxLength == null) dart.nullFailed(L0, 373, 64, "maxLength");
      let iterator = new characters_impl.StringCharacterRange.new(value.text);
      if (dart.notNull(extensions['StringCharacters|get#characters'](value.text)[$length]) > dart.notNull(maxLength)) {
        iterator.expandNext(maxLength);
      }
      let truncated = iterator.current;
      return new text_input.TextEditingValue.new({text: truncated, selection: value.selection.copyWith({baseOffset: math.min(core.int, value.selection.start, truncated.length), extentOffset: math.min(core.int, value.selection.end, truncated.length)}), composing: ui.TextRange.empty});
    }
    formatEditUpdate(oldValue, newValue) {
      if (oldValue == null) dart.nullFailed(L0, 391, 22, "oldValue");
      if (newValue == null) dart.nullFailed(L0, 392, 22, "newValue");
      let maxLength = this.maxLength;
      if (maxLength == null || maxLength === -1 || dart.notNull(extensions['StringCharacters|get#characters'](newValue.text)[$length]) <= dart.notNull(maxLength)) return newValue;
      if (!(dart.notNull(maxLength) > 0)) dart.assertFailed(null, L0, 399, 12, "maxLength > 0");
      if (extensions['StringCharacters|get#characters'](oldValue.text)[$length] == maxLength && !dart.test(oldValue.composing.isValid)) {
        return oldValue;
      }
      return dart.test(newValue.composing.isValid) ? newValue : text_formatter.LengthLimitingTextInputFormatter.truncate(newValue, maxLength);
    }
  };
  (text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength) {
    this[maxLength$] = maxLength;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, L0, 326, 14, "maxLength == null || maxLength == -1 || maxLength > 0");
    ;
  }).prototype = text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.LengthLimitingTextInputFormatter);
  dart.addTypeCaches(text_formatter.LengthLimitingTextInputFormatter);
  dart.setMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.LengthLimitingTextInputFormatter, L1);
  dart.setFieldSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(dart.nullable(core.int))
  }));
  var TextRange_end = dart.privateName(ui, "TextRange.end");
  var TextRange_start = dart.privateName(ui, "TextRange.start");
  var TextSelection_isDirectional = dart.privateName(text_editing, "TextSelection.isDirectional");
  var _name = dart.privateName(ui, "_name");
  var C1;
  var TextSelection_affinity = dart.privateName(text_editing, "TextSelection.affinity");
  var TextSelection_extentOffset = dart.privateName(text_editing, "TextSelection.extentOffset");
  var TextSelection_baseOffset = dart.privateName(text_editing, "TextSelection.baseOffset");
  var C0;
  text_formatter._selectionAwareTextManipulation = function _selectionAwareTextManipulation(value, substringManipulation) {
    let t0;
    if (value == null) dart.nullFailed(L0, 414, 20, "value");
    if (substringManipulation == null) dart.nullFailed(L0, 415, 10, "substringManipulation");
    let selectionStartIndex = value.selection.start;
    let selectionEndIndex = value.selection.end;
    let manipulatedText = null;
    let manipulatedSelection = null;
    if (dart.notNull(selectionStartIndex) < 0 || dart.notNull(selectionEndIndex) < 0) {
      manipulatedText = substringManipulation(value.text);
    } else {
      let beforeSelection = substringManipulation(value.text[$substring](0, selectionStartIndex));
      let inSelection = substringManipulation(value.text[$substring](selectionStartIndex, selectionEndIndex));
      let afterSelection = substringManipulation(value.text[$substring](selectionEndIndex));
      manipulatedText = dart.notNull(beforeSelection) + dart.notNull(inSelection) + dart.notNull(afterSelection);
      if (dart.notNull(value.selection.baseOffset) > dart.notNull(value.selection.extentOffset)) {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length + inSelection.length, extentOffset: beforeSelection.length});
      } else {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length, extentOffset: beforeSelection.length + inSelection.length});
      }
    }
    return new text_input.TextEditingValue.new({text: manipulatedText, selection: (t0 = manipulatedSelection, t0 == null ? C0 || CT.C0 : t0), composing: manipulatedText == value.text ? value.composing : ui.TextRange.empty});
  };
  dart.trackLibraries("packages/flutter/src/services/text_formatter.dart", {
    "package:flutter/src/services/text_formatter.dart": text_formatter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_formatter.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/services/text_formatter.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_formatter: text_formatter
  };
}));

//# sourceMappingURL=text_formatter.dart.lib.js.map
