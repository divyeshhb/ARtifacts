define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__colors_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var colors = Object.create(dart.library);
  var $modulo = dartx['%'];
  var $abs = dartx.abs;
  var $clamp = dartx.clamp;
  var $_get = dartx._get;
  var $runtimeType = dartx.runtimeType;
  var $_set = dartx._set;
  var $isNaN = dartx.isNaN;
  var $round = dartx.round;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var doubleTodynamic = () => (doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/colors.dart";
  var L1 = "package:flutter/src/painting/colors.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: diagnostics._NoDefaultValue.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_name]: "DiagnosticsTreeStyle.singleLine",
        index: 8
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name]: "DiagnosticLevel.info",
        index: 3
      });
    }
  }, false);
  var _scaleAlpha = dart.privateName(colors, "_scaleAlpha");
  var alpha$ = dart.privateName(colors, "HSVColor.alpha");
  var hue$ = dart.privateName(colors, "HSVColor.hue");
  var saturation$ = dart.privateName(colors, "HSVColor.saturation");
  var value$ = dart.privateName(colors, "HSVColor.value");
  colors.HSVColor = class HSVColor extends core.Object {
    get alpha() {
      return this[alpha$];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    static fromColor(color) {
      if (color == null) dart.nullFailed(L0, 110, 36, "color");
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = colors._getHue(red, green, blue, max, delta);
      let saturation = max === 0.0 ? 0.0 : delta / max;
      return new colors.HSVColor.fromAHSV(alpha, hue, saturation, max);
    }
    withAlpha(alpha) {
      if (alpha == null) dart.nullFailed(L0, 150, 29, "alpha");
      return new colors.HSVColor.fromAHSV(alpha, this.hue, this.saturation, this.value);
    }
    withHue(hue) {
      if (hue == null) dart.nullFailed(L0, 156, 27, "hue");
      return new colors.HSVColor.fromAHSV(this.alpha, hue, this.saturation, this.value);
    }
    withSaturation(saturation) {
      if (saturation == null) dart.nullFailed(L0, 162, 34, "saturation");
      return new colors.HSVColor.fromAHSV(this.alpha, this.hue, saturation, this.value);
    }
    withValue(value) {
      if (value == null) dart.nullFailed(L0, 168, 29, "value");
      return new colors.HSVColor.fromAHSV(this.alpha, this.hue, this.saturation, value);
    }
    toColor() {
      let chroma = dart.notNull(this.saturation) * dart.notNull(this.value);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.value) - chroma;
      return colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      if (factor == null) dart.nullFailed(L0, 181, 31, "factor");
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 201, 58, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 202, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new colors.HSVColor.fromAHSV(dart.nullCheck(ui.lerpDouble(a.alpha, b.alpha, t))[$clamp](0.0, 1.0), dart.nullCheck(ui.lerpDouble(a.hue, b.hue, t))[$modulo](360.0), dart.nullCheck(ui.lerpDouble(a.saturation, b.saturation, t))[$clamp](0.0, 1.0), dart.nullCheck(ui.lerpDouble(a.value, b.value, t))[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return colors.HSVColor.is(other) && other.alpha == this.alpha && other.hue == this.hue && other.saturation == this.saturation && other.value == this.value;
    }
    get hashCode() {
      return ui.hashValues(this.alpha, this.hue, this.saturation, this.value);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "HSVColor")) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.value) + ")";
    }
  };
  (colors.HSVColor.fromAHSV = function(alpha, hue, saturation, value) {
    if (alpha == null) dart.nullFailed(L0, 92, 32, "alpha");
    if (hue == null) dart.nullFailed(L0, 92, 44, "hue");
    if (saturation == null) dart.nullFailed(L0, 92, 54, "saturation");
    if (value == null) dart.nullFailed(L0, 92, 71, "value");
    this[alpha$] = alpha;
    this[hue$] = hue;
    this[saturation$] = saturation;
    this[value$] = value;
    if (!(alpha != null)) dart.assertFailed(null, L0, 93, 14, "alpha != null");
    if (!(hue != null)) dart.assertFailed(null, L0, 94, 14, "hue != null");
    if (!(saturation != null)) dart.assertFailed(null, L0, 95, 14, "saturation != null");
    if (!(value != null)) dart.assertFailed(null, L0, 96, 14, "value != null");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, L0, 97, 14, "alpha >= 0.0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, L0, 98, 14, "alpha <= 1.0");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, L0, 99, 14, "hue >= 0.0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, L0, 100, 14, "hue <= 360.0");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, L0, 101, 14, "saturation >= 0.0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, L0, 102, 14, "saturation <= 1.0");
    if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 103, 14, "value >= 0.0");
    if (!(dart.notNull(value) <= 1.0)) dart.assertFailed(null, L0, 104, 14, "value <= 1.0");
    ;
  }).prototype = colors.HSVColor.prototype;
  dart.addTypeTests(colors.HSVColor);
  dart.addTypeCaches(colors.HSVColor);
  dart.setMethodSignature(colors.HSVColor, () => ({
    __proto__: dart.getMethods(colors.HSVColor.__proto__),
    withAlpha: dart.fnType(colors.HSVColor, [core.double]),
    withHue: dart.fnType(colors.HSVColor, [core.double]),
    withSaturation: dart.fnType(colors.HSVColor, [core.double]),
    withValue: dart.fnType(colors.HSVColor, [core.double]),
    toColor: dart.fnType(ui.Color, []),
    [_scaleAlpha]: dart.fnType(colors.HSVColor, [core.double])
  }));
  dart.setLibraryUri(colors.HSVColor, L1);
  dart.setFieldSignature(colors.HSVColor, () => ({
    __proto__: dart.getFields(colors.HSVColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(colors.HSVColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(colors.HSVColor, ['hashCode']);
  var alpha$0 = dart.privateName(colors, "HSLColor.alpha");
  var hue$0 = dart.privateName(colors, "HSLColor.hue");
  var saturation$0 = dart.privateName(colors, "HSLColor.saturation");
  var lightness$ = dart.privateName(colors, "HSLColor.lightness");
  colors.HSLColor = class HSLColor extends core.Object {
    get alpha() {
      return this[alpha$0];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$0];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$0];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get lightness() {
      return this[lightness$];
    }
    set lightness(value) {
      super.lightness = value;
    }
    static fromColor(color) {
      if (color == null) dart.nullFailed(L0, 279, 36, "color");
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = colors._getHue(red, green, blue, max, delta);
      let lightness = (max + min) / 2.0;
      let saturation = lightness === 1.0 ? 0.0 : (delta / (1.0 - (2.0 * lightness - 1.0)[$abs]()))[$clamp](0.0, 1.0);
      return new colors.HSLColor.fromAHSL(alpha, hue, saturation, lightness);
    }
    withAlpha(alpha) {
      if (alpha == null) dart.nullFailed(L0, 324, 29, "alpha");
      return new colors.HSLColor.fromAHSL(alpha, this.hue, this.saturation, this.lightness);
    }
    withHue(hue) {
      if (hue == null) dart.nullFailed(L0, 330, 27, "hue");
      return new colors.HSLColor.fromAHSL(this.alpha, hue, this.saturation, this.lightness);
    }
    withSaturation(saturation) {
      if (saturation == null) dart.nullFailed(L0, 336, 34, "saturation");
      return new colors.HSLColor.fromAHSL(this.alpha, this.hue, saturation, this.lightness);
    }
    withLightness(lightness) {
      if (lightness == null) dart.nullFailed(L0, 342, 33, "lightness");
      return new colors.HSLColor.fromAHSL(this.alpha, this.hue, this.saturation, lightness);
    }
    toColor() {
      let chroma = (1.0 - (2.0 * dart.notNull(this.lightness) - 1.0)[$abs]()) * dart.notNull(this.saturation);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.lightness) - chroma / 2.0;
      return colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      if (factor == null) dart.nullFailed(L0, 355, 31, "factor");
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 385, 58, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 386, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new colors.HSLColor.fromAHSL(dart.nullCheck(ui.lerpDouble(a.alpha, b.alpha, t))[$clamp](0.0, 1.0), dart.nullCheck(ui.lerpDouble(a.hue, b.hue, t))[$modulo](360.0), dart.nullCheck(ui.lerpDouble(a.saturation, b.saturation, t))[$clamp](0.0, 1.0), dart.nullCheck(ui.lerpDouble(a.lightness, b.lightness, t))[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return colors.HSLColor.is(other) && other.alpha == this.alpha && other.hue == this.hue && other.saturation == this.saturation && other.lightness == this.lightness;
    }
    get hashCode() {
      return ui.hashValues(this.alpha, this.hue, this.saturation, this.lightness);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "HSLColor")) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.lightness) + ")";
    }
  };
  (colors.HSLColor.fromAHSL = function(alpha, hue, saturation, lightness) {
    if (alpha == null) dart.nullFailed(L0, 261, 32, "alpha");
    if (hue == null) dart.nullFailed(L0, 261, 44, "hue");
    if (saturation == null) dart.nullFailed(L0, 261, 54, "saturation");
    if (lightness == null) dart.nullFailed(L0, 261, 71, "lightness");
    this[alpha$0] = alpha;
    this[hue$0] = hue;
    this[saturation$0] = saturation;
    this[lightness$] = lightness;
    if (!(alpha != null)) dart.assertFailed(null, L0, 262, 14, "alpha != null");
    if (!(hue != null)) dart.assertFailed(null, L0, 263, 14, "hue != null");
    if (!(saturation != null)) dart.assertFailed(null, L0, 264, 14, "saturation != null");
    if (!(lightness != null)) dart.assertFailed(null, L0, 265, 14, "lightness != null");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, L0, 266, 14, "alpha >= 0.0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, L0, 267, 14, "alpha <= 1.0");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, L0, 268, 14, "hue >= 0.0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, L0, 269, 14, "hue <= 360.0");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, L0, 270, 14, "saturation >= 0.0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, L0, 271, 14, "saturation <= 1.0");
    if (!(dart.notNull(lightness) >= 0.0)) dart.assertFailed(null, L0, 272, 14, "lightness >= 0.0");
    if (!(dart.notNull(lightness) <= 1.0)) dart.assertFailed(null, L0, 273, 14, "lightness <= 1.0");
    ;
  }).prototype = colors.HSLColor.prototype;
  dart.addTypeTests(colors.HSLColor);
  dart.addTypeCaches(colors.HSLColor);
  dart.setMethodSignature(colors.HSLColor, () => ({
    __proto__: dart.getMethods(colors.HSLColor.__proto__),
    withAlpha: dart.fnType(colors.HSLColor, [core.double]),
    withHue: dart.fnType(colors.HSLColor, [core.double]),
    withSaturation: dart.fnType(colors.HSLColor, [core.double]),
    withLightness: dart.fnType(colors.HSLColor, [core.double]),
    toColor: dart.fnType(ui.Color, []),
    [_scaleAlpha]: dart.fnType(colors.HSLColor, [core.double])
  }));
  dart.setLibraryUri(colors.HSLColor, L1);
  dart.setFieldSignature(colors.HSLColor, () => ({
    __proto__: dart.getFields(colors.HSLColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    lightness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(colors.HSLColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(colors.HSLColor, ['hashCode']);
  var _swatch = dart.privateName(colors, "_swatch");
  const _is_ColorSwatch_default = Symbol('_is_ColorSwatch_default');
  var _swatch$ = dart.privateName(colors, "ColorSwatch._swatch");
  colors.ColorSwatch$ = dart.generic(T => {
    var ColorSwatchOfT = () => (ColorSwatchOfT = dart.constFn(colors.ColorSwatch$(T)))();
    class ColorSwatch extends ui.Color {
      get [_swatch]() {
        return this[_swatch$];
      }
      set [_swatch](value) {
        super[_swatch] = value;
      }
      _get(index) {
        T.as(index);
        return this[_swatch][$_get](index);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) return true;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        return super._equals(other) && ColorSwatchOfT().is(other) && dart.test(collections.mapEquals(T, ui.Color, other[_swatch], this[_swatch]));
      }
      get hashCode() {
        return ui.hashValues(this[$runtimeType], this.value, this[_swatch]);
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "ColorSwatch")) + "(primary value: " + dart.str(super.toString()) + ")";
      }
    }
    (ColorSwatch.new = function(primary, _swatch) {
      if (primary == null) dart.nullFailed(L0, 437, 25, "primary");
      if (_swatch == null) dart.nullFailed(L0, 437, 39, "_swatch");
      this[_swatch$] = _swatch;
      ColorSwatch.__proto__.new.call(this, primary);
      ;
    }).prototype = ColorSwatch.prototype;
    dart.addTypeTests(ColorSwatch);
    ColorSwatch.prototype[_is_ColorSwatch_default] = true;
    dart.addTypeCaches(ColorSwatch);
    dart.setMethodSignature(ColorSwatch, () => ({
      __proto__: dart.getMethods(ColorSwatch.__proto__),
      _get: dart.fnType(dart.nullable(ui.Color), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(ColorSwatch, L1);
    dart.setFieldSignature(ColorSwatch, () => ({
      __proto__: dart.getFields(ColorSwatch.__proto__),
      [_swatch]: dart.finalFieldType(core.Map$(T, ui.Color))
    }));
    dart.defineExtensionMethods(ColorSwatch, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ColorSwatch, ['hashCode']);
    return ColorSwatch;
  });
  colors.ColorSwatch = colors.ColorSwatch$();
  dart.addTypeTests(colors.ColorSwatch, _is_ColorSwatch_default);
  var C0;
  var _name = dart.privateName(diagnostics, "_name");
  var C1;
  var C2;
  colors.ColorProperty = class ColorProperty extends diagnostics.DiagnosticsProperty$(ui.Color) {
    toJsonMap(delegate) {
      if (delegate == null) dart.nullFailed(L0, 486, 67, "delegate");
      let json = super.toJsonMap(delegate);
      if (this.value != null) {
        json[$_set]("valueProperties", new (IdentityMapOfString$Object()).from(["red", dart.nullCheck(this.value).red, "green", dart.nullCheck(this.value).green, "blue", dart.nullCheck(this.value).blue, "alpha", dart.nullCheck(this.value).alpha]));
      }
      return json;
    }
  };
  (colors.ColorProperty.new = function(name, value, opts) {
    if (name == null) dart.nullFailed(L0, 469, 12, "name");
    let showName = opts && 'showName' in opts ? opts.showName : true;
    if (showName == null) dart.nullFailed(L0, 471, 10, "showName");
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C0 || CT.C0;
    let style = opts && 'style' in opts ? opts.style : C1 || CT.C1;
    if (style == null) dart.nullFailed(L0, 473, 26, "style");
    let level = opts && 'level' in opts ? opts.level : C2 || CT.C2;
    if (level == null) dart.nullFailed(L0, 474, 21, "level");
    if (!(showName != null)) dart.assertFailed(null, L0, 475, 15, "showName != null");
    if (!(style != null)) dart.assertFailed(null, L0, 476, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L0, 477, 15, "level != null");
    colors.ColorProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, showName: showName, style: style, level: level});
    ;
  }).prototype = colors.ColorProperty.prototype;
  dart.addTypeTests(colors.ColorProperty);
  dart.addTypeCaches(colors.ColorProperty);
  dart.setLibraryUri(colors.ColorProperty, L1);
  colors._getHue = function _getHue(red, green, blue, max, delta) {
    if (red == null) dart.nullFailed(L0, 11, 23, "red");
    if (green == null) dart.nullFailed(L0, 11, 35, "green");
    if (blue == null) dart.nullFailed(L0, 11, 49, "blue");
    if (max == null) dart.nullFailed(L0, 11, 62, "max");
    if (delta == null) dart.nullFailed(L0, 11, 74, "delta");
    let hue = null;
    let hue$35isSet = false;
    function hue$35get() {
      return hue$35isSet ? hue : dart.throw(new _internal.LateError.localNI("hue"));
    }
    dart.fn(hue$35get, VoidTodouble());
    function hue$35set(t3) {
      if (t3 == null) dart.nullFailed(L0, 12, 15, "null");
      hue$35isSet = true;
      return hue = t3;
    }
    dart.fn(hue$35set, doubleTodynamic());
    if (max === 0.0) {
      hue$35set(0.0);
    } else if (max == red) {
      hue$35set(60.0 * ((dart.notNull(green) - dart.notNull(blue)) / dart.notNull(delta))[$modulo](6));
    } else if (max == green) {
      hue$35set(60.0 * ((dart.notNull(blue) - dart.notNull(red)) / dart.notNull(delta) + 2));
    } else if (max == blue) {
      hue$35set(60.0 * ((dart.notNull(red) - dart.notNull(green)) / dart.notNull(delta) + 4));
    }
    hue$35set(hue$35get()[$isNaN] ? 0.0 : hue$35get());
    return hue$35get();
  };
  colors._colorFromHue = function _colorFromHue(alpha, hue, chroma, secondary, match) {
    if (alpha == null) dart.nullFailed(L0, 29, 10, "alpha");
    if (hue == null) dart.nullFailed(L0, 30, 10, "hue");
    if (chroma == null) dart.nullFailed(L0, 31, 10, "chroma");
    if (secondary == null) dart.nullFailed(L0, 32, 10, "secondary");
    if (match == null) dart.nullFailed(L0, 33, 10, "match");
    let red = null;
    let green = null;
    let blue = null;
    if (dart.notNull(hue) < 60.0) {
      red = chroma;
      green = secondary;
      blue = 0.0;
    } else if (dart.notNull(hue) < 120.0) {
      red = secondary;
      green = chroma;
      blue = 0.0;
    } else if (dart.notNull(hue) < 180.0) {
      red = 0.0;
      green = chroma;
      blue = secondary;
    } else if (dart.notNull(hue) < 240.0) {
      red = 0.0;
      green = secondary;
      blue = chroma;
    } else if (dart.notNull(hue) < 300.0) {
      red = secondary;
      green = 0.0;
      blue = chroma;
    } else {
      red = chroma;
      green = 0.0;
      blue = secondary;
    }
    return new ui.Color.fromARGB((dart.notNull(alpha) * 255)[$round](), ((dart.notNull(red) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(green) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(blue) + dart.notNull(match)) * 255)[$round]());
  };
  dart.trackLibraries("packages/flutter/src/painting/colors.dart", {
    "package:flutter/src/painting/colors.dart": colors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["colors.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+He;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;;UApCoB;AAClB,gBAAgB,aAAV,AAAM,KAAD,QAAO;AAClB,kBAAoB,aAAZ,AAAM,KAAD,UAAS;AACtB,iBAAkB,aAAX,AAAM,KAAD,SAAQ;AAEpB,gBAAM,sBAAS,GAAG,EAAE,sBAAS,KAAK,EAAE,IAAI;AACxC,gBAAM,sBAAS,GAAG,EAAE,sBAAS,KAAK,EAAE,IAAI;AACxC,kBAAQ,AAAI,GAAD,GAAG,GAAG;AAEjB,kBAAoB,aAAZ,AAAM,KAAD,UAAS;AACtB,gBAAM,eAAQ,GAAG,EAAE,KAAK,EAAE,IAAI,EAAE,GAAG,EAAE,KAAK;AAC1C,uBAAa,AAAI,GAAD,KAAI,MAAM,MAAM,AAAM,KAAD,GAAG,GAAG;AAExD,YAAgB,8BAAS,KAAK,EAAE,GAAG,EAAE,UAAU,EAAE,GAAG;IACtD;;UA0B0B;AACxB,YAAgB,8BAAS,KAAK,EAAE,UAAK,iBAAY;IACnD;;UAIwB;AACtB,YAAgB,8BAAS,YAAO,GAAG,EAAE,iBAAY;IACnD;;UAI+B;AAC7B,YAAgB,8BAAS,YAAO,UAAK,UAAU,EAAE;IACnD;;UAI0B;AACxB,YAAgB,8BAAS,YAAO,UAAK,iBAAY,KAAK;IACxD;;AAIe,mBAAoB,aAAX,gCAAa;AACtB,sBAAY,AAAO,MAAD,IAAI,AAAI,MAA+B,CAAd,AAAO,CAAf,aAAJ,YAAM,eAAQ,OAAO;AACpD,kBAAc,aAAN,cAAQ,MAAM;AAEnC,YAAO,sBAAc,YAAO,UAAK,MAAM,EAAE,SAAS,EAAE,KAAK;IAC3D;;UAE4B;AAC1B,YAAO,gBAAgB,aAAN,2BAAQ,MAAM;IACjC;gBAkBgC,GAAa;UAAU;AACrD,YAAO,AAAE,CAAD,IAAI;AACZ,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MACpB,MAAO;AACT,UAAI,AAAE,CAAD,IAAI,MACP,MAAQ,AAAE,gBAAH,CAAC,eAAc,CAAC;AACzB,UAAI,AAAE,CAAD,IAAI,MACP,MAAO,AAAE,EAAD,cAAa,AAAI,mBAAE,CAAC;AAC9B,YAAgB,8BACiB,AAAE,eAAjC,cAAW,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,WAAS,KAAK,MACjB,AAAE,eAA7B,cAAW,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,YAAK,QACU,AAAE,eAA3C,cAAW,AAAE,CAAD,aAAa,AAAE,CAAD,aAAa,CAAC,WAAS,KAAK,MACvB,AAAE,eAAjC,cAAW,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,WAAS,KAAK;IAEhD;;UAGwB;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,YAAa,AAIT,oBAJG,KAAK,KACL,AAAM,AAAM,KAAP,UAAU,cACf,AAAM,AAAI,KAAL,QAAQ,YACb,AAAM,AAAW,KAAZ,eAAe,mBACpB,AAAM,AAAM,KAAP,UAAU;IACxB;;AAGoB,2BAAW,YAAO,UAAK,iBAAY;IAAM;;AAGxC,YAA2E,UAAxE,yBAAkB,MAAM,eAAY,eAAE,cAAK,gBAAG,YAAG,gBAAG,mBAAU,gBAAG,cAAK;IAAE;;uCA5InE,OAAY,KAAU,YAAiB;QAAvC;QAAY;QAAU;QAAiB;IAAvC;IAAY;IAAU;IAAiB;UACzD,AAAM,KAAD,IAAI;UACT,AAAI,GAAD,IAAI;UACP,AAAW,UAAD,IAAI;UACd,AAAM,KAAD,IAAI;UACH,aAAN,KAAK,KAAI;UACH,aAAN,KAAK,KAAI;UACL,aAAJ,GAAG,KAAI;UACH,aAAJ,GAAG,KAAI;UACI,aAAX,UAAU,KAAI;UACH,aAAX,UAAU,KAAI;UACR,aAAN,KAAK,KAAI;UACH,aAAN,KAAK,KAAI;;EAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoMX;;;;;;IAMA;;;;;;IAMA;;;;;;IAQA;;;;;;;UAzCoB;AAClB,gBAAgB,aAAV,AAAM,KAAD,QAAO;AAClB,kBAAoB,aAAZ,AAAM,KAAD,UAAS;AACtB,iBAAkB,aAAX,AAAM,KAAD,SAAQ;AAEpB,gBAAM,sBAAS,GAAG,EAAE,sBAAS,KAAK,EAAE,IAAI;AACxC,gBAAM,sBAAS,GAAG,EAAE,sBAAS,KAAK,EAAE,IAAI;AACxC,kBAAQ,AAAI,GAAD,GAAG,GAAG;AAEjB,kBAAoB,aAAZ,AAAM,KAAD,UAAS;AACtB,gBAAM,eAAQ,GAAG,EAAE,KAAK,EAAE,IAAI,EAAE,GAAG,EAAE,KAAK;AAC1C,sBAAwB,CAAX,AAAI,GAAD,GAAG,GAAG,IAAI;AAE1B,uBAAa,AAAU,SAAD,KAAI,MACnC,MACiD,CAA/C,AAAM,KAAD,IAAI,AAAI,MAA0B,CAAvB,AAAI,AAAY,MAAV,SAAS,GAAG,uBAAmB,KAAK;AAChE,YAAgB,8BAAS,KAAK,EAAE,GAAG,EAAE,UAAU,EAAE,SAAS;IAC5D;;UA4B0B;AACxB,YAAgB,8BAAS,KAAK,EAAE,UAAK,iBAAY;IACnD;;UAIwB;AACtB,YAAgB,8BAAS,YAAO,GAAG,EAAE,iBAAY;IACnD;;UAI+B;AAC7B,YAAgB,8BAAS,YAAO,UAAK,UAAU,EAAE;IACnD;;UAI8B;AAC5B,YAAgB,8BAAS,YAAO,UAAK,iBAAY,SAAS;IAC5D;;AAIe,mBAA+C,CAArC,AAAI,MAA0B,CAAvB,AAAI,AAAY,mBAAV,kBAAY,6BAAc;AACjD,sBAAY,AAAO,MAAD,IAAI,AAAI,MAA+B,CAAd,AAAO,CAAf,aAAJ,YAAM,eAAQ,OAAO;AACpD,kBAAkB,aAAV,kBAAY,AAAO,MAAD,GAAG;AAE1C,YAAO,sBAAc,YAAO,UAAK,MAAM,EAAE,SAAS,EAAE,KAAK;IAC3D;;UAE4B;AAC1B,YAAO,gBAAgB,aAAN,2BAAQ,MAAM;IACjC;gBA4BgC,GAAa;UAAU;AACrD,YAAO,AAAE,CAAD,IAAI;AACZ,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MACpB,MAAO;AACT,UAAI,AAAE,CAAD,IAAI,MACP,MAAQ,AAAE,gBAAH,CAAC,eAAc,CAAC;AACzB,UAAI,AAAE,CAAD,IAAI,MACP,MAAO,AAAE,EAAD,cAAa,AAAI,mBAAE,CAAC;AAC9B,YAAgB,8BACiB,AAAE,eAAjC,cAAW,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,WAAS,KAAK,MACjB,AAAE,eAA7B,cAAW,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,YAAK,QACU,AAAE,eAA3C,cAAW,AAAE,CAAD,aAAa,AAAE,CAAD,aAAa,CAAC,WAAS,KAAK,MACf,AAAE,eAAzC,cAAW,AAAE,CAAD,YAAY,AAAE,CAAD,YAAY,CAAC,WAAS,KAAK;IAExD;;UAGwB;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,YAAa,AAIT,oBAJG,KAAK,KACL,AAAM,AAAM,KAAP,UAAU,cACf,AAAM,AAAI,KAAL,QAAQ,YACb,AAAM,AAAW,KAAZ,eAAe,mBACpB,AAAM,AAAU,KAAX,cAAc;IAC5B;;AAGoB,2BAAW,YAAO,UAAK,iBAAY;IAAU;;AAG5C,YAA+E,UAA5E,yBAAkB,MAAM,eAAY,eAAE,cAAK,gBAAG,YAAG,gBAAG,mBAAU,gBAAG,kBAAS;IAAE;;uCA3JvE,OAAY,KAAU,YAAiB;QAAvC;QAAY;QAAU;QAAiB;IAAvC;IAAY;IAAU;IAAiB;UACzD,AAAM,KAAD,IAAI;UACT,AAAI,GAAD,IAAI;UACP,AAAW,UAAD,IAAI;UACd,AAAU,SAAD,IAAI;UACP,aAAN,KAAK,KAAI;UACH,aAAN,KAAK,KAAI;UACL,aAAJ,GAAG,KAAI;UACH,aAAJ,GAAG,KAAI;UACI,aAAX,UAAU,KAAI;UACH,aAAX,UAAU,KAAI;UACJ,aAAV,SAAS,KAAI;UACH,aAAV,SAAS,KAAI;;EAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAuKR;;;;;;;aAGC;AAAU,cAAA,AAAO,sBAAC,KAAK;MAAC;;YAGrB;AACtB,YAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,yBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,cAAa,AAET,eAFY,KAAK,KACR,oBAAN,KAAK,eACL,mCAAoB,AAAM,KAAD,WAAU;MAC5C;;AAGoB,6BAAW,oBAAa,YAAO;MAAQ;;AAGtC,cAA+E,UAA5E,yBAAkB,MAAM,kBAAe,8BAAwB,oBAAW;MAAE;;gCAvB9E,SAAc;UAAd;UAAc;;AAAW,2CAAM,OAAO;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;UAiDG;AACnC,iBAAa,gBAAU,QAAQ;AAC1D,UAAI,cAAS;AAMV,QALD,AAAI,IAAA,QAAC,mBAAqC,yCACxC,OAAY,AAAE,eAAP,iBACP,SAAc,AAAE,eAAP,mBACT,QAAa,AAAE,eAAP,kBACR,SAAc,AAAE,eAAP;;AAGb,YAAO,KAAI;IACb;;uCA5BS,MACA;QADA;QAEF;;QACG;QACa;;QACL;;UACN,AAAS,QAAD,IAAI;UACZ,AAAM,KAAD,IAAI;UACT,AAAM,KAAD,IAAI;AAChB,kDAAM,IAAI,EAAE,KAAK,iBACD,YAAY,YAChB,QAAQ,SACX,KAAK,SACL,KAAK;;EACb;;;;oCAxdc,KAAY,OAAc,MAAa,KAAY;QAAnD;QAAY;QAAc;QAAa;QAAY;AAC3D;;;;;;;;;;;;AACZ,QAAI,AAAI,GAAD,KAAI;AACA,MAAT,UAAM;UACD,KAAI,AAAI,GAAD,IAAI,GAAG;AACwB,MAA3C,UAAM,AAAK,OAA4B,CAAT,CAAR,aAAN,KAAK,iBAAG,IAAI,kBAAI,KAAK,YAAI;UACpC,KAAI,AAAI,GAAD,IAAI,KAAK;AACoB,MAAzC,UAAM,AAAK,QAAiB,AAAS,CAAhB,aAAL,IAAI,iBAAG,GAAG,kBAAI,KAAK,IAAI;UAClC,KAAI,AAAI,GAAD,IAAI,IAAI;AACsB,MAA1C,UAAM,AAAK,QAAkB,AAAS,CAAlB,aAAJ,GAAG,iBAAG,KAAK,kBAAI,KAAK,IAAI;;AAIf,IAA3B,UAAM,AAAI,sBAAQ,MAAM;AACxB,UAAO;EACT;gDAGS,OACA,KACA,QACA,WACA;QAJA;QACA;QACA;QACA;QACA;AAEA;AACA;AACA;AACP,QAAQ,aAAJ,GAAG,IAAG;AACI,MAAZ,MAAM,MAAM;AACK,MAAjB,QAAQ,SAAS;AACP,MAAV,OAAO;UACF,KAAQ,aAAJ,GAAG,IAAG;AACA,MAAf,MAAM,SAAS;AACD,MAAd,QAAQ,MAAM;AACJ,MAAV,OAAO;UACF,KAAQ,aAAJ,GAAG,IAAG;AACN,MAAT,MAAM;AACQ,MAAd,QAAQ,MAAM;AACE,MAAhB,OAAO,SAAS;UACX,KAAQ,aAAJ,GAAG,IAAG;AACN,MAAT,MAAM;AACW,MAAjB,QAAQ,SAAS;AACJ,MAAb,OAAO,MAAM;UACR,KAAQ,aAAJ,GAAG,IAAG;AACA,MAAf,MAAM,SAAS;AACJ,MAAX,QAAQ;AACK,MAAb,OAAO,MAAM;;AAED,MAAZ,MAAM,MAAM;AACD,MAAX,QAAQ;AACQ,MAAhB,OAAO,SAAS;;AAElB,UAAa,uBAAwB,CAAR,aAAN,KAAK,IAAG,gBAAsC,CAAR,CAAT,aAAJ,GAAG,iBAAG,KAAK,KAAI,gBAAwC,CAAR,CAAT,aAAN,KAAK,iBAAG,KAAK,KAAI,gBAAuC,CAAR,CAAT,aAAL,IAAI,iBAAG,KAAK,KAAI;EACpI","file":"../../../../../../../../../../packages/flutter/src/painting/colors.dart.lib.js"}');
  // Exports:
  return {
    src__painting__colors: colors
  };
}));

//# sourceMappingURL=colors.dart.lib.js.map
