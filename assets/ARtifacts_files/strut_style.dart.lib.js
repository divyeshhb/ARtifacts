define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart'], (function load__packages__flutter__src__painting__strut_style_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _engine = dart_sdk._engine;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  var strut_style = Object.create(dart.library);
  var text_style = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $runtimeType = dartx.runtimeType;
  var $add = dartx.add;
  var $any = dartx.any;
  var $forEach = dartx.forEach;
  var $length = dartx.length;
  var $clamp = dartx.clamp;
  var $_get = dartx._get;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  var IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var DiagnosticsPropertyOfFontWeight = () => (DiagnosticsPropertyOfFontWeight = dart.constFn(diagnostics.DiagnosticsProperty$(ui.FontWeight)))();
  var EnumPropertyOfFontStyle = () => (EnumPropertyOfFontStyle = dart.constFn(diagnostics.EnumProperty$(ui.FontStyle)))();
  var DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [diagnostics.DiagnosticsNode])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var EnumPropertyOfTextBaseline = () => (EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))();
  var DiagnosticsPropertyOfLocale = () => (DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))();
  var DiagnosticsPropertyOfPaint = () => (DiagnosticsPropertyOfPaint = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Paint)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var DiagnosticsPropertyOfTextDecoration = () => (DiagnosticsPropertyOfTextDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(ui.TextDecoration)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  const CT = Object.create(null);
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/text_style.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/strut_style.dart";
  var L1 = "package:flutter/src/painting/strut_style.dart";
  var L3 = "package:flutter/src/painting/text_style.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: strut_style.StrutStyle.prototype,
        [debugLabel$]: null,
        [forceStrutHeight$]: null,
        [leading$]: 0,
        [fontStyle$]: null,
        [fontWeight$]: null,
        [height$]: 0,
        [fontSize$]: null,
        [_package$]: null,
        [_fontFamilyFallback$]: null,
        [fontFamily$]: null
      });
    }
  }, false);
  var _fontFamilyFallback = dart.privateName(strut_style, "_fontFamilyFallback");
  var _package = dart.privateName(strut_style, "_package");
  var fontFamily$ = dart.privateName(strut_style, "StrutStyle.fontFamily");
  var _fontFamilyFallback$ = dart.privateName(strut_style, "StrutStyle._fontFamilyFallback");
  var _package$ = dart.privateName(strut_style, "StrutStyle._package");
  var fontSize$ = dart.privateName(strut_style, "StrutStyle.fontSize");
  var height$ = dart.privateName(strut_style, "StrutStyle.height");
  var fontWeight$ = dart.privateName(strut_style, "StrutStyle.fontWeight");
  var fontStyle$ = dart.privateName(strut_style, "StrutStyle.fontStyle");
  var leading$ = dart.privateName(strut_style, "StrutStyle.leading");
  var forceStrutHeight$ = dart.privateName(strut_style, "StrutStyle.forceStrutHeight");
  var debugLabel$ = dart.privateName(strut_style, "StrutStyle.debugLabel");
  var C0;
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  strut_style.StrutStyle = class StrutStyle extends Object_Diagnosticable$36 {
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get [_fontFamilyFallback]() {
      return this[_fontFamilyFallback$];
    }
    set [_fontFamilyFallback](value) {
      super[_fontFamilyFallback] = value;
    }
    get [_package]() {
      return this[_package$];
    }
    set [_package](value) {
      super[_package] = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get fontWeight() {
      return this[fontWeight$];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get forceStrutHeight() {
      return this[forceStrutHeight$];
    }
    set forceStrutHeight(value) {
      super.forceStrutHeight = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get fontFamilyFallback() {
      if (this[_package] != null && this[_fontFamilyFallback] != null) return dart.nullCheck(this[_fontFamilyFallback])[$map](core.String, dart.fn(family => {
        if (family == null) dart.nullFailed(L0, 405, 47, "family");
        return "packages/" + dart.str(this[_package]) + "/" + dart.str(family);
      }, StringToString()))[$toList]();
      return this[_fontFamilyFallback];
    }
    compareTo(other) {
      if (other == null) dart.nullFailed(L0, 504, 41, "other");
      if (this === other) return basic_types.RenderComparison.identical;
      if (this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || !dart.equals(this.fontStyle, other.fontStyle) || this.height != other.height || this.leading != other.leading || !dart.equals(this.forceStrutHeight, other.forceStrutHeight) || !dart.test(collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return basic_types.RenderComparison.layout;
      return basic_types.RenderComparison.identical;
    }
    inheritFromTextStyle(other) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      if (other == null) return this;
      return new strut_style.StrutStyle.new({fontFamily: (t0 = this.fontFamily, t0 == null ? other.fontFamily : t0), fontFamilyFallback: (t0$ = this.fontFamilyFallback, t0$ == null ? other.fontFamilyFallback : t0$), fontSize: (t0$0 = this.fontSize, t0$0 == null ? other.fontSize : t0$0), height: (t0$1 = this.height, t0$1 == null ? other.height : t0$1), leading: this.leading, fontWeight: (t0$2 = this.fontWeight, t0$2 == null ? other.fontWeight : t0$2), fontStyle: (t0$3 = this.fontStyle, t0$3 == null ? other.fontStyle : t0$3), forceStrutHeight: this.forceStrutHeight, debugLabel: (t0$4 = this.debugLabel, t0$4 == null ? other.debugLabel : t0$4)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return strut_style.StrutStyle.is(other) && other.fontFamily == this.fontFamily && other.fontSize == this.fontSize && dart.equals(other.fontWeight, this.fontWeight) && dart.equals(other.fontStyle, this.fontStyle) && other.height == this.height && other.leading == this.leading && dart.equals(other.forceStrutHeight, this.forceStrutHeight);
    }
    get hashCode() {
      return ui.hashValues(this.fontFamily, this.fontSize, this.fontWeight, this.fontStyle, this.height, this.leading, this.forceStrutHeight);
    }
    toStringShort() {
      return object.objectRuntimeType(this, "StrutStyle");
    }
    debugFillProperties(properties, opts) {
      if (properties == null) dart.nullFailed(L0, 579, 56, "properties");
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      if (prefix == null) dart.nullFailed(L0, 579, 77, "prefix");
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", dart.nullCheck(this.debugLabel)));
      let styles = JSArrayOfDiagnosticsNode().of([new diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}), new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}), new diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null})]);
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = "w" + dart.str(dart.notNull(dart.nullCheck(this.fontWeight).index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new diagnostics.FlagProperty.new(dart.str(prefix) + "forceStrutHeight", {value: this.forceStrutHeight, defaultValue: null, ifTrue: dart.str(prefix) + "<strut height forced>", ifFalse: dart.str(prefix) + "<strut height normal>"}));
      let styleSpecified = styles[$any](dart.fn(n => {
        if (n == null) dart.nullFailed(L0, 605, 61, "n");
        return !dart.test(n.isFiltered(diagnostics.DiagnosticLevel.info));
      }, DiagnosticsNodeTobool()));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new diagnostics.FlagProperty.new("forceStrutHeight", {value: this.forceStrutHeight, ifTrue: dart.str(prefix) + "<strut height forced>", ifFalse: dart.str(prefix) + "<strut height normal>"}));
    }
  };
  (strut_style.StrutStyle.new = function(opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[fontSize$] = fontSize;
    this[height$] = height;
    this[leading$] = leading;
    this[fontWeight$] = fontWeight;
    this[fontStyle$] = fontStyle;
    this[forceStrutHeight$] = forceStrutHeight;
    this[debugLabel$] = debugLabel;
    this[fontFamily$] = $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback$] = fontFamilyFallback;
    this[_package$] = $package;
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, L0, 312, 15, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, L0, 313, 15, "leading == null || leading >= 0");
    if (!($package == null || fontFamily != null || fontFamilyFallback != null)) dart.assertFailed(null, L0, 314, 15, "package == null || (fontFamily != null || fontFamilyFallback != null)");
    ;
  }).prototype = strut_style.StrutStyle.prototype;
  (strut_style.StrutStyle.fromTextStyle = function(textStyle, opts) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3;
    if (textStyle == null) dart.nullFailed(L0, 336, 15, "textStyle");
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[leading$] = leading;
    this[forceStrutHeight$] = forceStrutHeight;
    if (!(textStyle != null)) dart.assertFailed(null, L0, 347, 15, "textStyle != null");
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, L0, 348, 15, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, L0, 349, 15, "leading == null || leading >= 0");
    if (!($package == null || fontFamily != null || fontFamilyFallback != null)) dart.assertFailed(null, L0, 350, 15, "package == null || fontFamily != null || fontFamilyFallback != null");
    this[fontFamily$] = fontFamily != null ? $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily) : textStyle.fontFamily;
    this[_fontFamilyFallback$] = (t0 = fontFamilyFallback, t0 == null ? textStyle.fontFamilyFallback : t0);
    this[height$] = (t0$ = height, t0$ == null ? textStyle.height : t0$);
    this[fontSize$] = (t0$0 = fontSize, t0$0 == null ? textStyle.fontSize : t0$0);
    this[fontWeight$] = (t0$1 = fontWeight, t0$1 == null ? textStyle.fontWeight : t0$1);
    this[fontStyle$] = (t0$2 = fontStyle, t0$2 == null ? textStyle.fontStyle : t0$2);
    this[debugLabel$] = (t0$3 = debugLabel, t0$3 == null ? textStyle.debugLabel : t0$3);
    this[_package$] = $package;
    ;
  }).prototype = strut_style.StrutStyle.prototype;
  dart.addTypeTests(strut_style.StrutStyle);
  dart.addTypeCaches(strut_style.StrutStyle);
  dart.setMethodSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getMethods(strut_style.StrutStyle.__proto__),
    compareTo: dart.fnType(basic_types.RenderComparison, [strut_style.StrutStyle]),
    inheritFromTextStyle: dart.fnType(strut_style.StrutStyle, [dart.nullable(text_style.TextStyle)]),
    debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String}, {})
  }));
  dart.setGetterSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getGetters(strut_style.StrutStyle.__proto__),
    fontFamilyFallback: dart.nullable(core.List$(core.String))
  }));
  dart.setLibraryUri(strut_style.StrutStyle, L1);
  dart.setFieldSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getFields(strut_style.StrutStyle.__proto__),
    fontFamily: dart.finalFieldType(dart.nullable(core.String)),
    [_fontFamilyFallback]: dart.finalFieldType(dart.nullable(core.List$(core.String))),
    [_package]: dart.finalFieldType(dart.nullable(core.String)),
    fontSize: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    fontWeight: dart.finalFieldType(dart.nullable(ui.FontWeight)),
    fontStyle: dart.finalFieldType(dart.nullable(ui.FontStyle)),
    leading: dart.finalFieldType(dart.nullable(core.double)),
    forceStrutHeight: dart.finalFieldType(dart.nullable(core.bool)),
    debugLabel: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(strut_style.StrutStyle, ['_equals']);
  dart.defineExtensionAccessors(strut_style.StrutStyle, ['hashCode']);
  dart.defineLazy(strut_style.StrutStyle, {
    /*strut_style.StrutStyle.disabled*/get disabled() {
      return C0 || CT.C0;
    }
  }, false);
  var _fontFamilyFallback$0 = dart.privateName(text_style, "_fontFamilyFallback");
  var _package$0 = dart.privateName(text_style, "_package");
  var inherit$ = dart.privateName(text_style, "TextStyle.inherit");
  var color$ = dart.privateName(text_style, "TextStyle.color");
  var backgroundColor$ = dart.privateName(text_style, "TextStyle.backgroundColor");
  var fontFamily$0 = dart.privateName(text_style, "TextStyle.fontFamily");
  var _fontFamilyFallback$1 = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var _package$1 = dart.privateName(text_style, "TextStyle._package");
  var fontSize$0 = dart.privateName(text_style, "TextStyle.fontSize");
  var fontWeight$0 = dart.privateName(text_style, "TextStyle.fontWeight");
  var fontStyle$0 = dart.privateName(text_style, "TextStyle.fontStyle");
  var letterSpacing$ = dart.privateName(text_style, "TextStyle.letterSpacing");
  var wordSpacing$ = dart.privateName(text_style, "TextStyle.wordSpacing");
  var textBaseline$ = dart.privateName(text_style, "TextStyle.textBaseline");
  var height$0 = dart.privateName(text_style, "TextStyle.height");
  var locale$ = dart.privateName(text_style, "TextStyle.locale");
  var foreground$ = dart.privateName(text_style, "TextStyle.foreground");
  var background$ = dart.privateName(text_style, "TextStyle.background");
  var decoration$ = dart.privateName(text_style, "TextStyle.decoration");
  var decorationColor$ = dart.privateName(text_style, "TextStyle.decorationColor");
  var decorationStyle$ = dart.privateName(text_style, "TextStyle.decorationStyle");
  var decorationThickness$ = dart.privateName(text_style, "TextStyle.decorationThickness");
  var debugLabel$0 = dart.privateName(text_style, "TextStyle.debugLabel");
  var shadows$ = dart.privateName(text_style, "TextStyle.shadows");
  var fontFeatures$ = dart.privateName(text_style, "TextStyle.fontFeatures");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  text_style.TextStyle = class TextStyle extends Object_Diagnosticable$36$ {
    get inherit() {
      return this[inherit$];
    }
    set inherit(value) {
      super.inherit = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get fontFamily() {
      return this[fontFamily$0];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get [_fontFamilyFallback$0]() {
      return this[_fontFamilyFallback$1];
    }
    set [_fontFamilyFallback$0](value) {
      super[_fontFamilyFallback$0] = value;
    }
    get [_package$0]() {
      return this[_package$1];
    }
    set [_package$0](value) {
      super[_package$0] = value;
    }
    get fontSize() {
      return this[fontSize$0];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get fontWeight() {
      return this[fontWeight$0];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$0];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get letterSpacing() {
      return this[letterSpacing$];
    }
    set letterSpacing(value) {
      super.letterSpacing = value;
    }
    get wordSpacing() {
      return this[wordSpacing$];
    }
    set wordSpacing(value) {
      super.wordSpacing = value;
    }
    get textBaseline() {
      return this[textBaseline$];
    }
    set textBaseline(value) {
      super.textBaseline = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get foreground() {
      return this[foreground$];
    }
    set foreground(value) {
      super.foreground = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get decorationColor() {
      return this[decorationColor$];
    }
    set decorationColor(value) {
      super.decorationColor = value;
    }
    get decorationStyle() {
      return this[decorationStyle$];
    }
    set decorationStyle(value) {
      super.decorationStyle = value;
    }
    get decorationThickness() {
      return this[decorationThickness$];
    }
    set decorationThickness(value) {
      super.decorationThickness = value;
    }
    get debugLabel() {
      return this[debugLabel$0];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    get fontFeatures() {
      return this[fontFeatures$];
    }
    set fontFeatures(value) {
      super.fontFeatures = value;
    }
    get fontFamilyFallback() {
      return this[_package$0] != null && this[_fontFamilyFallback$0] != null ? dart.nullCheck(this[_fontFamilyFallback$0])[$map](core.String, dart.fn(str => {
        if (str == null) dart.nullFailed(L2, 503, 126, "str");
        return "packages/" + dart.str(this[_package$0]) + "/" + dart.str(str);
      }, StringToString()))[$toList]() : this[_fontFamilyFallback$0];
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18;
      let inherit = opts && 'inherit' in opts ? opts.inherit : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
      let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let foreground = opts && 'foreground' in opts ? opts.foreground : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      if (!(color == null || foreground == null)) dart.assertFailed(text_style._kColorForegroundWarning, L2, 725, 12, "color == null || foreground == null");
      if (!(backgroundColor == null || background == null)) dart.assertFailed(text_style._kColorBackgroundWarning, L2, 726, 12, "backgroundColor == null || background == null");
      let newDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t0;
        if (this.debugLabel != null) newDebugLabel = (t0 = debugLabel, t0 == null ? "(" + dart.str(this.debugLabel) + ").copyWith" : t0);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 728, 12, "() {\n      if (this.debugLabel != null)\n        newDebugLabel = debugLabel ?? '(${this.debugLabel}).copyWith';\n      return true;\n    }()");
      return new text_style.TextStyle.new({inherit: (t0 = inherit, t0 == null ? this.inherit : t0), color: this.foreground == null && foreground == null ? (t0$ = color, t0$ == null ? this.color : t0$) : null, backgroundColor: this.background == null && background == null ? (t0$0 = backgroundColor, t0$0 == null ? this.backgroundColor : t0$0) : null, fontFamily: (t0$1 = fontFamily, t0$1 == null ? this.fontFamily : t0$1), fontFamilyFallback: (t0$2 = fontFamilyFallback, t0$2 == null ? this.fontFamilyFallback : t0$2), fontSize: (t0$3 = fontSize, t0$3 == null ? this.fontSize : t0$3), fontWeight: (t0$4 = fontWeight, t0$4 == null ? this.fontWeight : t0$4), fontStyle: (t0$5 = fontStyle, t0$5 == null ? this.fontStyle : t0$5), letterSpacing: (t0$6 = letterSpacing, t0$6 == null ? this.letterSpacing : t0$6), wordSpacing: (t0$7 = wordSpacing, t0$7 == null ? this.wordSpacing : t0$7), textBaseline: (t0$8 = textBaseline, t0$8 == null ? this.textBaseline : t0$8), height: (t0$9 = height, t0$9 == null ? this.height : t0$9), locale: (t0$10 = locale, t0$10 == null ? this.locale : t0$10), foreground: (t0$11 = foreground, t0$11 == null ? this.foreground : t0$11), background: (t0$12 = background, t0$12 == null ? this.background : t0$12), shadows: (t0$13 = shadows, t0$13 == null ? this.shadows : t0$13), fontFeatures: (t0$14 = fontFeatures, t0$14 == null ? this.fontFeatures : t0$14), decoration: (t0$15 = decoration, t0$15 == null ? this.decoration : t0$15), decorationColor: (t0$16 = decorationColor, t0$16 == null ? this.decorationColor : t0$16), decorationStyle: (t0$17 = decorationStyle, t0$17 == null ? this.decorationStyle : t0$17), decorationThickness: (t0$18 = decorationThickness, t0$18 == null ? this.decorationThickness : t0$18), debugLabel: newDebugLabel});
    }
    apply(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThicknessFactor = opts && 'decorationThicknessFactor' in opts ? opts.decorationThicknessFactor : 1;
      if (decorationThicknessFactor == null) dart.nullFailed(L2, 794, 12, "decorationThicknessFactor");
      let decorationThicknessDelta = opts && 'decorationThicknessDelta' in opts ? opts.decorationThicknessDelta : 0;
      if (decorationThicknessDelta == null) dart.nullFailed(L2, 795, 12, "decorationThicknessDelta");
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSizeFactor = opts && 'fontSizeFactor' in opts ? opts.fontSizeFactor : 1;
      if (fontSizeFactor == null) dart.nullFailed(L2, 798, 12, "fontSizeFactor");
      let fontSizeDelta = opts && 'fontSizeDelta' in opts ? opts.fontSizeDelta : 0;
      if (fontSizeDelta == null) dart.nullFailed(L2, 799, 12, "fontSizeDelta");
      let fontWeightDelta = opts && 'fontWeightDelta' in opts ? opts.fontWeightDelta : 0;
      if (fontWeightDelta == null) dart.nullFailed(L2, 800, 9, "fontWeightDelta");
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacingFactor = opts && 'letterSpacingFactor' in opts ? opts.letterSpacingFactor : 1;
      if (letterSpacingFactor == null) dart.nullFailed(L2, 802, 12, "letterSpacingFactor");
      let letterSpacingDelta = opts && 'letterSpacingDelta' in opts ? opts.letterSpacingDelta : 0;
      if (letterSpacingDelta == null) dart.nullFailed(L2, 803, 12, "letterSpacingDelta");
      let wordSpacingFactor = opts && 'wordSpacingFactor' in opts ? opts.wordSpacingFactor : 1;
      if (wordSpacingFactor == null) dart.nullFailed(L2, 804, 12, "wordSpacingFactor");
      let wordSpacingDelta = opts && 'wordSpacingDelta' in opts ? opts.wordSpacingDelta : 0;
      if (wordSpacingDelta == null) dart.nullFailed(L2, 805, 12, "wordSpacingDelta");
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : 1;
      if (heightFactor == null) dart.nullFailed(L2, 806, 12, "heightFactor");
      let heightDelta = opts && 'heightDelta' in opts ? opts.heightDelta : 0;
      if (heightDelta == null) dart.nullFailed(L2, 807, 12, "heightDelta");
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
      if (!(fontSizeFactor != null)) dart.assertFailed(null, L2, 813, 12, "fontSizeFactor != null");
      if (!(fontSizeDelta != null)) dart.assertFailed(null, L2, 814, 12, "fontSizeDelta != null");
      if (!(this.fontSize != null || fontSizeFactor === 1.0 && fontSizeDelta === 0.0)) dart.assertFailed(null, L2, 815, 12, "fontSize != null || (fontSizeFactor == 1.0 && fontSizeDelta == 0.0)");
      if (!(fontWeightDelta != null)) dart.assertFailed(null, L2, 816, 12, "fontWeightDelta != null");
      if (!(this.fontWeight != null || fontWeightDelta === 0.0)) dart.assertFailed(null, L2, 817, 12, "fontWeight != null || fontWeightDelta == 0.0");
      if (!(letterSpacingFactor != null)) dart.assertFailed(null, L2, 818, 12, "letterSpacingFactor != null");
      if (!(letterSpacingDelta != null)) dart.assertFailed(null, L2, 819, 12, "letterSpacingDelta != null");
      if (!(this.letterSpacing != null || letterSpacingFactor === 1.0 && letterSpacingDelta === 0.0)) dart.assertFailed(null, L2, 820, 12, "letterSpacing != null || (letterSpacingFactor == 1.0 && letterSpacingDelta == 0.0)");
      if (!(wordSpacingFactor != null)) dart.assertFailed(null, L2, 821, 12, "wordSpacingFactor != null");
      if (!(wordSpacingDelta != null)) dart.assertFailed(null, L2, 822, 12, "wordSpacingDelta != null");
      if (!(this.wordSpacing != null || wordSpacingFactor === 1.0 && wordSpacingDelta === 0.0)) dart.assertFailed(null, L2, 823, 12, "wordSpacing != null || (wordSpacingFactor == 1.0 && wordSpacingDelta == 0.0)");
      if (!(heightFactor != null)) dart.assertFailed(null, L2, 824, 12, "heightFactor != null");
      if (!(heightDelta != null)) dart.assertFailed(null, L2, 825, 12, "heightDelta != null");
      if (!(decorationThicknessFactor != null)) dart.assertFailed(null, L2, 826, 12, "decorationThicknessFactor != null");
      if (!(decorationThicknessDelta != null)) dart.assertFailed(null, L2, 827, 12, "decorationThicknessDelta != null");
      if (!(this.decorationThickness != null || decorationThicknessFactor === 1.0 && decorationThicknessDelta === 0.0)) dart.assertFailed(null, L2, 828, 12, "decorationThickness != null || (decorationThicknessFactor == 1.0 && decorationThicknessDelta == 0.0)");
      let modifiedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        if (this.debugLabel != null) modifiedDebugLabel = "(" + dart.str(this.debugLabel) + ").apply";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 831, 12, "() {\n      if (debugLabel != null)\n        modifiedDebugLabel = '($debugLabel).apply';\n      return true;\n    }()");
      return new text_style.TextStyle.new({inherit: this.inherit, color: this.foreground == null ? (t0 = color, t0 == null ? this.color : t0) : null, backgroundColor: this.background == null ? (t0$ = backgroundColor, t0$ == null ? this.backgroundColor : t0$) : null, fontFamily: (t0$0 = fontFamily, t0$0 == null ? this.fontFamily : t0$0), fontFamilyFallback: (t0$1 = fontFamilyFallback, t0$1 == null ? this.fontFamilyFallback : t0$1), fontSize: this.fontSize == null ? null : dart.nullCheck(this.fontSize) * dart.notNull(fontSizeFactor) + dart.notNull(fontSizeDelta), fontWeight: this.fontWeight == null ? null : ui.FontWeight.values[$_get]((dart.notNull(dart.nullCheck(this.fontWeight).index) + dart.notNull(fontWeightDelta))[$clamp](0, dart.notNull(ui.FontWeight.values[$length]) - 1)), fontStyle: (t0$2 = fontStyle, t0$2 == null ? this.fontStyle : t0$2), letterSpacing: this.letterSpacing == null ? null : dart.nullCheck(this.letterSpacing) * dart.notNull(letterSpacingFactor) + dart.notNull(letterSpacingDelta), wordSpacing: this.wordSpacing == null ? null : dart.nullCheck(this.wordSpacing) * dart.notNull(wordSpacingFactor) + dart.notNull(wordSpacingDelta), textBaseline: (t0$3 = textBaseline, t0$3 == null ? this.textBaseline : t0$3), height: this.height == null ? null : dart.nullCheck(this.height) * dart.notNull(heightFactor) + dart.notNull(heightDelta), locale: (t0$4 = locale, t0$4 == null ? this.locale : t0$4), foreground: this.foreground, background: this.background, shadows: (t0$5 = shadows, t0$5 == null ? this.shadows : t0$5), fontFeatures: (t0$6 = fontFeatures, t0$6 == null ? this.fontFeatures : t0$6), decoration: (t0$7 = decoration, t0$7 == null ? this.decoration : t0$7), decorationColor: (t0$8 = decorationColor, t0$8 == null ? this.decorationColor : t0$8), decorationStyle: (t0$9 = decorationStyle, t0$9 == null ? this.decorationStyle : t0$9), decorationThickness: this.decorationThickness == null ? null : dart.nullCheck(this.decorationThickness) * dart.notNull(decorationThicknessFactor) + dart.notNull(decorationThicknessDelta), debugLabel: modifiedDebugLabel});
    }
    merge(other) {
      if (other == null) return this;
      if (!dart.test(other.inherit)) return other;
      let mergedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t0, t0$;
        if (other.debugLabel != null || this.debugLabel != null) mergedDebugLabel = "(" + dart.str((t0 = this.debugLabel, t0 == null ? "unknown" : t0)) + ").merge(" + dart.str((t0$ = other.debugLabel, t0$ == null ? "unknown" : t0$)) + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 891, 12, "() {\n      if (other.debugLabel != null || debugLabel != null)\n        mergedDebugLabel = '(${debugLabel ?? _kDefaultDebugLabel}).merge(${other.debugLabel ?? _kDefaultDebugLabel})';\n      return true;\n    }()");
      return this.copyWith({color: other.color, backgroundColor: other.backgroundColor, fontFamily: other.fontFamily, fontFamilyFallback: other.fontFamilyFallback, fontSize: other.fontSize, fontWeight: other.fontWeight, fontStyle: other.fontStyle, letterSpacing: other.letterSpacing, wordSpacing: other.wordSpacing, textBaseline: other.textBaseline, height: other.height, locale: other.locale, foreground: other.foreground, background: other.background, shadows: other.shadows, fontFeatures: other.fontFeatures, decoration: other.decoration, decorationColor: other.decorationColor, decorationStyle: other.decorationStyle, decorationThickness: other.decorationThickness, debugLabel: mergedDebugLabel});
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t1, t0$6, t1$, t0$7, t1$0, t0$8, t1$1, t0$9, t0$10, t0$11;
      if (t == null) dart.nullFailed(L2, 935, 61, "t");
      if (!(t != null)) dart.assertFailed(null, L2, 936, 12, "t != null");
      if (!(a == null || b == null || dart.equals(a.inherit, b.inherit))) dart.assertFailed(null, L2, 937, 12, "a == null || b == null || a.inherit == b.inherit");
      if (a == null && b == null) {
        return null;
      }
      let lerpDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t0, t0$, t0$0, t0$1;
        lerpDebugLabel = "lerp(" + dart.str((t0$ = (t0 = a, t0 == null ? null : t0.debugLabel), t0$ == null ? "unknown" : t0$)) + " ⎯" + t[$toStringAsFixed](1) + "→ " + dart.str((t0$1 = (t0$0 = b, t0$0 == null ? null : t0$0.debugLabel), t0$1 == null ? "unknown" : t0$1)) + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 943, 12, "() {\n      lerpDebugLabel = 'lerp(${a?.debugLabel ?? _kDefaultDebugLabel} ⎯${t.toStringAsFixed(1)}→ ${b?.debugLabel ?? _kDefaultDebugLabel})';\n      return true;\n    }()");
      if (a == null) {
        return new text_style.TextStyle.new({inherit: dart.nullCheck(b).inherit, color: ui.Color.lerp(null, b.color, t), backgroundColor: ui.Color.lerp(null, b.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? null : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? null : b.fontFamilyFallback, fontSize: dart.notNull(t) < 0.5 ? null : b.fontSize, fontWeight: ui.FontWeight.lerp(null, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? null : b.fontStyle, letterSpacing: dart.notNull(t) < 0.5 ? null : b.letterSpacing, wordSpacing: dart.notNull(t) < 0.5 ? null : b.wordSpacing, textBaseline: dart.notNull(t) < 0.5 ? null : b.textBaseline, height: dart.notNull(t) < 0.5 ? null : b.height, locale: dart.notNull(t) < 0.5 ? null : b.locale, foreground: dart.notNull(t) < 0.5 ? null : b.foreground, background: dart.notNull(t) < 0.5 ? null : b.background, decoration: dart.notNull(t) < 0.5 ? null : b.decoration, shadows: dart.notNull(t) < 0.5 ? null : b.shadows, fontFeatures: dart.notNull(t) < 0.5 ? null : b.fontFeatures, decorationColor: ui.Color.lerp(null, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? null : b.decorationStyle, decorationThickness: dart.notNull(t) < 0.5 ? null : b.decorationThickness, debugLabel: lerpDebugLabel});
      }
      if (b == null) {
        return new text_style.TextStyle.new({inherit: a.inherit, color: ui.Color.lerp(a.color, null, t), backgroundColor: ui.Color.lerp(null, a.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : null, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : null, fontSize: dart.notNull(t) < 0.5 ? a.fontSize : null, fontWeight: ui.FontWeight.lerp(a.fontWeight, null, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : null, letterSpacing: dart.notNull(t) < 0.5 ? a.letterSpacing : null, wordSpacing: dart.notNull(t) < 0.5 ? a.wordSpacing : null, textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : null, height: dart.notNull(t) < 0.5 ? a.height : null, locale: dart.notNull(t) < 0.5 ? a.locale : null, foreground: dart.notNull(t) < 0.5 ? a.foreground : null, background: dart.notNull(t) < 0.5 ? a.background : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : null, fontFeatures: dart.notNull(t) < 0.5 ? a.fontFeatures : null, decoration: dart.notNull(t) < 0.5 ? a.decoration : null, decorationColor: ui.Color.lerp(a.decorationColor, null, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : null, decorationThickness: dart.notNull(t) < 0.5 ? a.decorationThickness : null, debugLabel: lerpDebugLabel});
      }
      return new text_style.TextStyle.new({inherit: b.inherit, color: a.foreground == null && b.foreground == null ? ui.Color.lerp(a.color, b.color, t) : null, backgroundColor: a.background == null && b.background == null ? ui.Color.lerp(a.backgroundColor, b.backgroundColor, t) : null, fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : b.fontFamilyFallback, fontSize: ui.lerpDouble((t0 = a.fontSize, t0 == null ? b.fontSize : t0), (t0$ = b.fontSize, t0$ == null ? a.fontSize : t0$), t), fontWeight: ui.FontWeight.lerp(a.fontWeight, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : b.fontStyle, letterSpacing: ui.lerpDouble((t0$0 = a.letterSpacing, t0$0 == null ? b.letterSpacing : t0$0), (t0$1 = b.letterSpacing, t0$1 == null ? a.letterSpacing : t0$1), t), wordSpacing: ui.lerpDouble((t0$2 = a.wordSpacing, t0$2 == null ? b.wordSpacing : t0$2), (t0$3 = b.wordSpacing, t0$3 == null ? a.wordSpacing : t0$3), t), textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : b.textBaseline, height: ui.lerpDouble((t0$4 = a.height, t0$4 == null ? b.height : t0$4), (t0$5 = b.height, t0$5 == null ? a.height : t0$5), t), locale: dart.notNull(t) < 0.5 ? a.locale : b.locale, foreground: a.foreground != null || b.foreground != null ? dart.notNull(t) < 0.5 ? (t0$6 = a.foreground, t0$6 == null ? (t1 = ui.Paint.new(), (() => {
          t1.color = dart.nullCheck(a.color);
          return t1;
        })()) : t0$6) : (t0$7 = b.foreground, t0$7 == null ? (t1$ = ui.Paint.new(), (() => {
          t1$.color = dart.nullCheck(b.color);
          return t1$;
        })()) : t0$7) : null, background: a.background != null || b.background != null ? dart.notNull(t) < 0.5 ? (t0$8 = a.background, t0$8 == null ? (t1$0 = ui.Paint.new(), (() => {
          t1$0.color = dart.nullCheck(a.backgroundColor);
          return t1$0;
        })()) : t0$8) : (t0$9 = b.background, t0$9 == null ? (t1$1 = ui.Paint.new(), (() => {
          t1$1.color = dart.nullCheck(b.backgroundColor);
          return t1$1;
        })()) : t0$9) : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : b.shadows, fontFeatures: dart.notNull(t) < 0.5 ? a.fontFeatures : b.fontFeatures, decoration: dart.notNull(t) < 0.5 ? a.decoration : b.decoration, decorationColor: ui.Color.lerp(a.decorationColor, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : b.decorationStyle, decorationThickness: ui.lerpDouble((t0$10 = a.decorationThickness, t0$10 == null ? b.decorationThickness : t0$10), (t0$11 = b.decorationThickness, t0$11 == null ? a.decorationThickness : t0$11), t), debugLabel: lerpDebugLabel});
    }
    getTextStyle(opts) {
      let t1, t0;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      if (textScaleFactor == null) dart.nullFailed(L2, 1037, 38, "textScaleFactor");
      return ui.TextStyle.new({color: this.color, decoration: this.decoration, decorationColor: this.decorationColor, decorationStyle: this.decorationStyle, decorationThickness: this.decorationThickness, fontWeight: this.fontWeight, fontStyle: this.fontStyle, textBaseline: this.textBaseline, fontFamily: this.fontFamily, fontFamilyFallback: this.fontFamilyFallback, fontSize: this.fontSize == null ? null : dart.nullCheck(this.fontSize) * dart.notNull(textScaleFactor), letterSpacing: this.letterSpacing, wordSpacing: this.wordSpacing, height: this.height, locale: this.locale, foreground: this.foreground, background: (t0 = this.background, t0 == null ? this.backgroundColor != null ? (t1 = ui.Paint.new(), (() => {
          t1.color = dart.nullCheck(this.backgroundColor);
          return t1;
        })()) : null : t0), shadows: this.shadows, fontFeatures: this.fontFeatures});
    }
    getParagraphStyle(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      if (textScaleFactor == null) dart.nullFailed(L2, 1075, 12, "textScaleFactor");
      let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      if (!(textScaleFactor != null)) dart.assertFailed(null, L2, 1087, 12, "textScaleFactor != null");
      if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, L2, 1088, 12, "maxLines == null || maxLines > 0");
      return ui.ParagraphStyle.new({textAlign: textAlign, textDirection: textDirection, fontWeight: (t0 = fontWeight, t0 == null ? this.fontWeight : t0), fontStyle: (t0$ = fontStyle, t0$ == null ? this.fontStyle : t0$), fontFamily: (t0$0 = fontFamily, t0$0 == null ? this.fontFamily : t0$0), fontSize: dart.notNull((t0$2 = (t0$1 = fontSize, t0$1 == null ? this.fontSize : t0$1), t0$2 == null ? 14 : t0$2)) * dart.notNull(textScaleFactor), height: (t0$3 = height, t0$3 == null ? this.height : t0$3), textHeightBehavior: textHeightBehavior, strutStyle: strutStyle == null ? null : new _engine.EngineStrutStyle.new({fontFamily: strutStyle.fontFamily, fontFamilyFallback: strutStyle.fontFamilyFallback, fontSize: strutStyle.fontSize == null ? null : dart.nullCheck(strutStyle.fontSize) * dart.notNull(textScaleFactor), height: strutStyle.height, leading: strutStyle.leading, fontWeight: strutStyle.fontWeight, fontStyle: strutStyle.fontStyle, forceStrutHeight: strutStyle.forceStrutHeight}), maxLines: maxLines, ellipsis: ellipsis, locale: locale});
    }
    compareTo(other) {
      if (other == null) dart.nullFailed(L2, 1122, 40, "other");
      if (this === other) return basic_types.RenderComparison.identical;
      if (!dart.equals(this.inherit, other.inherit) || this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || !dart.equals(this.fontStyle, other.fontStyle) || this.letterSpacing != other.letterSpacing || this.wordSpacing != other.wordSpacing || !dart.equals(this.textBaseline, other.textBaseline) || this.height != other.height || !dart.equals(this.locale, other.locale) || !dart.equals(this.foreground, other.foreground) || !dart.equals(this.background, other.background) || !dart.test(collections.listEquals(ui.Shadow, this.shadows, other.shadows)) || !dart.test(collections.listEquals(ui.FontFeature, this.fontFeatures, other.fontFeatures)) || !dart.test(collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return basic_types.RenderComparison.layout;
      if (!dart.equals(this.color, other.color) || !dart.equals(this.backgroundColor, other.backgroundColor) || !dart.equals(this.decoration, other.decoration) || !dart.equals(this.decorationColor, other.decorationColor) || !dart.equals(this.decorationStyle, other.decorationStyle) || this.decorationThickness != other.decorationThickness) return basic_types.RenderComparison.paint;
      return basic_types.RenderComparison.identical;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return text_style.TextStyle.is(other) && dart.equals(other.inherit, this.inherit) && dart.equals(other.color, this.color) && dart.equals(other.backgroundColor, this.backgroundColor) && other.fontFamily == this.fontFamily && other.fontSize == this.fontSize && dart.equals(other.fontWeight, this.fontWeight) && dart.equals(other.fontStyle, this.fontStyle) && other.letterSpacing == this.letterSpacing && other.wordSpacing == this.wordSpacing && dart.equals(other.textBaseline, this.textBaseline) && other.height == this.height && dart.equals(other.locale, this.locale) && dart.equals(other.foreground, this.foreground) && dart.equals(other.background, this.background) && dart.equals(other.decoration, this.decoration) && dart.equals(other.decorationColor, this.decorationColor) && dart.equals(other.decorationStyle, this.decorationStyle) && other.decorationThickness == this.decorationThickness && dart.test(collections.listEquals(ui.Shadow, other.shadows, this.shadows)) && dart.test(collections.listEquals(ui.FontFeature, other.fontFeatures, this.fontFeatures)) && dart.test(collections.listEquals(core.String, other.fontFamilyFallback, this.fontFamilyFallback));
    }
    get hashCode() {
      return ui.hashValues(this.inherit, this.color, this.backgroundColor, this.fontFamily, this.fontSize, this.fontWeight, this.fontStyle, this.letterSpacing, this.wordSpacing, this.textBaseline, this.height, this.locale, this.foreground, this.background, this.decoration, this.decorationColor, this.decorationStyle, ui.hashList(this.shadows), ui.hashList(this.fontFeatures), ui.hashList(this.fontFamilyFallback));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "TextStyle");
    }
    debugFillProperties(properties, opts) {
      if (properties == null) dart.nullFailed(L2, 1212, 56, "properties");
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      if (prefix == null) dart.nullFailed(L2, 1212, 77, "prefix");
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", dart.nullCheck(this.debugLabel)));
      let styles = JSArrayOfDiagnosticsNode().of([new colors.ColorProperty.new(dart.str(prefix) + "color", this.color, {defaultValue: null}), new colors.ColorProperty.new(dart.str(prefix) + "backgroundColor", this.backgroundColor, {defaultValue: null}), new diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}), new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}), new diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null})]);
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = dart.str(dart.notNull(dart.nullCheck(this.fontWeight).index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "letterSpacing", this.letterSpacing, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "wordSpacing", this.wordSpacing, {defaultValue: null}));
      styles[$add](new (EnumPropertyOfTextBaseline()).new(dart.str(prefix) + "baseline", this.textBaseline, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfLocale()).new(dart.str(prefix) + "locale", this.locale, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "foreground", this.foreground, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "background", this.background, {defaultValue: null}));
      if (this.decoration != null || this.decorationColor != null || this.decorationStyle != null || this.decorationThickness != null) {
        let decorationDescription = JSArrayOfString().of([]);
        if (this.decorationStyle != null) decorationDescription[$add](diagnostics.describeEnum(dart.nullCheck(this.decorationStyle)));
        styles[$add](new colors.ColorProperty.new(dart.str(prefix) + "decorationColor", this.decorationColor, {defaultValue: null, level: diagnostics.DiagnosticLevel.fine}));
        if (this.decorationColor != null) decorationDescription[$add](dart.str(this.decorationColor));
        styles[$add](new (DiagnosticsPropertyOfTextDecoration()).new(dart.str(prefix) + "decoration", this.decoration, {defaultValue: null, level: diagnostics.DiagnosticLevel.hidden}));
        if (this.decoration != null) decorationDescription[$add](dart.str(this.decoration));
        if (!dart.test(decorationDescription[$isNotEmpty])) dart.assertFailed(null, L2, 1262, 14, "decorationDescription.isNotEmpty");
        styles[$add](new diagnostics.MessageProperty.new(dart.str(prefix) + "decoration", decorationDescription[$join](" ")));
        styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "decorationThickness", this.decorationThickness, {unit: "x", defaultValue: null}));
      }
      let styleSpecified = styles[$any](dart.fn(n => {
        if (n == null) dart.nullFailed(L2, 1267, 61, "n");
        return !dart.test(n.isFiltered(diagnostics.DiagnosticLevel.info));
      }, DiagnosticsNodeTobool()));
      properties.add(new (DiagnosticsPropertyOfbool()).new(dart.str(prefix) + "inherit", this.inherit, {level: !dart.test(styleSpecified) && dart.test(this.inherit) ? diagnostics.DiagnosticLevel.fine : diagnostics.DiagnosticLevel.info}));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new diagnostics.FlagProperty.new("inherit", {value: this.inherit, ifTrue: dart.str(prefix) + "<all styles inherited>", ifFalse: dart.str(prefix) + "<no style specified>"}));
    }
  };
  (text_style.TextStyle.new = function(opts) {
    let inherit = opts && 'inherit' in opts ? opts.inherit : true;
    if (inherit == null) dart.nullFailed(L2, 408, 10, "inherit");
    let color = opts && 'color' in opts ? opts.color : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
    let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let foreground = opts && 'foreground' in opts ? opts.foreground : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
    let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
    let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[inherit$] = inherit;
    this[color$] = color;
    this[backgroundColor$] = backgroundColor;
    this[fontSize$0] = fontSize;
    this[fontWeight$0] = fontWeight;
    this[fontStyle$0] = fontStyle;
    this[letterSpacing$] = letterSpacing;
    this[wordSpacing$] = wordSpacing;
    this[textBaseline$] = textBaseline;
    this[height$0] = height;
    this[locale$] = locale;
    this[foreground$] = foreground;
    this[background$] = background;
    this[shadows$] = shadows;
    this[fontFeatures$] = fontFeatures;
    this[decoration$] = decoration;
    this[decorationColor$] = decorationColor;
    this[decorationStyle$] = decorationStyle;
    this[decorationThickness$] = decorationThickness;
    this[debugLabel$0] = debugLabel;
    this[fontFamily$0] = $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback$1] = fontFamilyFallback;
    this[_package$1] = $package;
    if (!(inherit != null)) dart.assertFailed(null, L2, 434, 15, "inherit != null");
    if (!(color == null || foreground == null)) dart.assertFailed(text_style._kColorForegroundWarning, L2, 435, 15, "color == null || foreground == null");
    if (!(backgroundColor == null || background == null)) dart.assertFailed(text_style._kColorBackgroundWarning, L2, 436, 15, "backgroundColor == null || background == null");
    ;
  }).prototype = text_style.TextStyle.prototype;
  dart.addTypeTests(text_style.TextStyle);
  dart.addTypeCaches(text_style.TextStyle);
  dart.setMethodSignature(text_style.TextStyle, () => ({
    __proto__: dart.getMethods(text_style.TextStyle.__proto__),
    copyWith: dart.fnType(text_style.TextStyle, [], {background: dart.nullable(ui.Paint), backgroundColor: dart.nullable(ui.Color), color: dart.nullable(ui.Color), debugLabel: dart.nullable(core.String), decoration: dart.nullable(ui.TextDecoration), decorationColor: dart.nullable(ui.Color), decorationStyle: dart.nullable(ui.TextDecorationStyle), decorationThickness: dart.nullable(core.double), fontFamily: dart.nullable(core.String), fontFamilyFallback: dart.nullable(core.List$(core.String)), fontFeatures: dart.nullable(core.List$(ui.FontFeature)), fontSize: dart.nullable(core.double), fontStyle: dart.nullable(ui.FontStyle), fontWeight: dart.nullable(ui.FontWeight), foreground: dart.nullable(ui.Paint), height: dart.nullable(core.double), inherit: dart.nullable(core.bool), letterSpacing: dart.nullable(core.double), locale: dart.nullable(ui.Locale), shadows: dart.nullable(core.List$(ui.Shadow)), textBaseline: dart.nullable(ui.TextBaseline), wordSpacing: dart.nullable(core.double)}, {}),
    apply: dart.fnType(text_style.TextStyle, [], {backgroundColor: dart.nullable(ui.Color), color: dart.nullable(ui.Color), decoration: dart.nullable(ui.TextDecoration), decorationColor: dart.nullable(ui.Color), decorationStyle: dart.nullable(ui.TextDecorationStyle), decorationThicknessDelta: core.double, decorationThicknessFactor: core.double, fontFamily: dart.nullable(core.String), fontFamilyFallback: dart.nullable(core.List$(core.String)), fontFeatures: dart.nullable(core.List$(ui.FontFeature)), fontSizeDelta: core.double, fontSizeFactor: core.double, fontStyle: dart.nullable(ui.FontStyle), fontWeightDelta: core.int, heightDelta: core.double, heightFactor: core.double, letterSpacingDelta: core.double, letterSpacingFactor: core.double, locale: dart.nullable(ui.Locale), shadows: dart.nullable(core.List$(ui.Shadow)), textBaseline: dart.nullable(ui.TextBaseline), wordSpacingDelta: core.double, wordSpacingFactor: core.double}, {}),
    merge: dart.fnType(text_style.TextStyle, [dart.nullable(text_style.TextStyle)]),
    getTextStyle: dart.fnType(ui.TextStyle, [], {textScaleFactor: core.double}, {}),
    getParagraphStyle: dart.fnType(ui.ParagraphStyle, [], {ellipsis: dart.nullable(core.String), fontFamily: dart.nullable(core.String), fontSize: dart.nullable(core.double), fontStyle: dart.nullable(ui.FontStyle), fontWeight: dart.nullable(ui.FontWeight), height: dart.nullable(core.double), locale: dart.nullable(ui.Locale), maxLines: dart.nullable(core.int), strutStyle: dart.nullable(strut_style.StrutStyle), textAlign: dart.nullable(ui.TextAlign), textDirection: dart.nullable(ui.TextDirection), textHeightBehavior: dart.nullable(ui.TextHeightBehavior), textScaleFactor: core.double}, {}),
    compareTo: dart.fnType(basic_types.RenderComparison, [text_style.TextStyle]),
    debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String}, {})
  }));
  dart.setGetterSignature(text_style.TextStyle, () => ({
    __proto__: dart.getGetters(text_style.TextStyle.__proto__),
    fontFamilyFallback: dart.nullable(core.List$(core.String))
  }));
  dart.setLibraryUri(text_style.TextStyle, L3);
  dart.setFieldSignature(text_style.TextStyle, () => ({
    __proto__: dart.getFields(text_style.TextStyle.__proto__),
    inherit: dart.finalFieldType(core.bool),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    fontFamily: dart.finalFieldType(dart.nullable(core.String)),
    [_fontFamilyFallback$0]: dart.finalFieldType(dart.nullable(core.List$(core.String))),
    [_package$0]: dart.finalFieldType(dart.nullable(core.String)),
    fontSize: dart.finalFieldType(dart.nullable(core.double)),
    fontWeight: dart.finalFieldType(dart.nullable(ui.FontWeight)),
    fontStyle: dart.finalFieldType(dart.nullable(ui.FontStyle)),
    letterSpacing: dart.finalFieldType(dart.nullable(core.double)),
    wordSpacing: dart.finalFieldType(dart.nullable(core.double)),
    textBaseline: dart.finalFieldType(dart.nullable(ui.TextBaseline)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    locale: dart.finalFieldType(dart.nullable(ui.Locale)),
    foreground: dart.finalFieldType(dart.nullable(ui.Paint)),
    background: dart.finalFieldType(dart.nullable(ui.Paint)),
    decoration: dart.finalFieldType(dart.nullable(ui.TextDecoration)),
    decorationColor: dart.finalFieldType(dart.nullable(ui.Color)),
    decorationStyle: dart.finalFieldType(dart.nullable(ui.TextDecorationStyle)),
    decorationThickness: dart.finalFieldType(dart.nullable(core.double)),
    debugLabel: dart.finalFieldType(dart.nullable(core.String)),
    shadows: dart.finalFieldType(dart.nullable(core.List$(ui.Shadow))),
    fontFeatures: dart.finalFieldType(dart.nullable(core.List$(ui.FontFeature)))
  }));
  dart.defineExtensionMethods(text_style.TextStyle, ['_equals']);
  dart.defineExtensionAccessors(text_style.TextStyle, ['hashCode']);
  dart.defineLazy(text_style, {
    /*text_style._kDefaultDebugLabel*/get _kDefaultDebugLabel() {
      return "unknown";
    },
    /*text_style._kColorForegroundWarning*/get _kColorForegroundWarning() {
      return "Cannot provide both a color and a foreground\nThe color argument is just a shorthand for \"foreground: new Paint()..color = color\".";
    },
    /*text_style._kColorBackgroundWarning*/get _kColorBackgroundWarning() {
      return "Cannot provide both a backgroundColor and a background\nThe backgroundColor argument is just a shorthand for \"background: new Paint()..color = color\".";
    },
    /*text_style._kDefaultFontSize*/get _kDefaultFontSize() {
      return 14;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/strut_style.dart", {
    "package:flutter/src/painting/strut_style.dart": strut_style,
    "package:flutter/src/painting/text_style.dart": text_style
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["strut_style.dart","text_style.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/strut_style.dart.lib.js"}');
  // Exports:
  return {
    src__painting__strut_style: strut_style,
    src__painting__text_style: text_style
  };
}));

//# sourceMappingURL=strut_style.dart.lib.js.map
