define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/collections.dart'], (function load__packages__flutter__src__painting__borders_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__collections$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  var borders$ = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $length = dartx.length;
  var $any = dartx.any;
  var $fold = dartx.fold;
  var $last = dartx.last;
  var $first = dartx.first;
  var $_set = dartx._set;
  var $addAll = dartx.addAll;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $reversed = dartx.reversed;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var BorderStyleL = () => (BorderStyleL = dart.constFn(dart.legacy(borders$.BorderStyle)))();
  var JSArrayOfShapeBorder = () => (JSArrayOfShapeBorder = dart.constFn(_interceptors.JSArray$(borders$.ShapeBorder)))();
  var ShapeBorderTobool = () => (ShapeBorderTobool = dart.constFn(dart.fnType(core.bool, [borders$.ShapeBorder])))();
  var EdgeInsetsGeometryAndShapeBorderToEdgeInsetsGeometry = () => (EdgeInsetsGeometryAndShapeBorderToEdgeInsetsGeometry = dart.constFn(dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry, borders$.ShapeBorder])))();
  var ListOfShapeBorder = () => (ListOfShapeBorder = dart.constFn(core.List$(borders$.ShapeBorder)))();
  var ShapeBorderToShapeBorder = () => (ShapeBorderToShapeBorder = dart.constFn(dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder])))();
  var ShapeBorderN = () => (ShapeBorderN = dart.constFn(dart.nullable(borders$.ShapeBorder)))();
  var JSArrayOfShapeBorderN = () => (JSArrayOfShapeBorderN = dart.constFn(_interceptors.JSArray$(ShapeBorderN())))();
  var ShapeBorderToString = () => (ShapeBorderToString = dart.constFn(dart.fnType(core.String, [borders$.ShapeBorder])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/painting/borders.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/borders.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: borders$.BorderStyle.prototype,
        [_name$]: "BorderStyle.none",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: borders$.BorderStyle.prototype,
        [_name$]: "BorderStyle.solid",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], BorderStyleL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: borders$.BorderSide.prototype,
        [style$]: C0 || CT.C0,
        [width$]: 0,
        [color$]: C3 || CT.C3
      });
    }
  }, false);
  var _name$ = dart.privateName(borders$, "_name");
  var C0;
  var C1;
  var C2;
  borders$.BorderStyle = class BorderStyle extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (borders$.BorderStyle.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 15, 6, "index");
    if (_name == null) dart.nullFailed(L0, 15, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = borders$.BorderStyle.prototype;
  dart.addTypeTests(borders$.BorderStyle);
  dart.addTypeCaches(borders$.BorderStyle);
  dart.setLibraryUri(borders$.BorderStyle, L1);
  dart.setFieldSignature(borders$.BorderStyle, () => ({
    __proto__: dart.getFields(borders$.BorderStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(borders$.BorderStyle, ['toString']);
  borders$.BorderStyle.none = C0 || CT.C0;
  borders$.BorderStyle.solid = C1 || CT.C1;
  borders$.BorderStyle.values = C2 || CT.C2;
  var Color_value = dart.privateName(ui, "Color.value");
  var C3;
  var C4;
  var color$ = dart.privateName(borders$, "BorderSide.color");
  var width$ = dart.privateName(borders$, "BorderSide.width");
  var style$ = dart.privateName(borders$, "BorderSide.style");
  var C5;
  borders$.BorderSide = class BorderSide extends core.Object {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static merge(a, b) {
      if (a == null) dart.nullFailed(L0, 86, 38, "a");
      if (b == null) dart.nullFailed(L0, 86, 52, "b");
      if (!(a != null)) dart.assertFailed(null, L0, 87, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, L0, 88, 12, "b != null");
      if (!dart.test(borders$.BorderSide.canMerge(a, b))) dart.assertFailed(null, L0, 89, 12, "canMerge(a, b)");
      let aIsNone = dart.equals(a.style, borders$.BorderStyle.none) && a.width === 0.0;
      let bIsNone = dart.equals(b.style, borders$.BorderStyle.none) && b.width === 0.0;
      if (aIsNone && bIsNone) return borders$.BorderSide.none;
      if (aIsNone) return b;
      if (bIsNone) return a;
      if (!dart.equals(a.color, b.color)) dart.assertFailed(null, L0, 98, 12, "a.color == b.color");
      if (!dart.equals(a.style, b.style)) dart.assertFailed(null, L0, 99, 12, "a.style == b.style");
      return new borders$.BorderSide.new({color: a.color, width: dart.notNull(a.width) + dart.notNull(b.width), style: a.style});
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let color = opts && 'color' in opts ? opts.color : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let style = opts && 'style' in opts ? opts.style : null;
      if (!(width == null || dart.notNull(width) >= 0.0)) dart.assertFailed(null, L0, 136, 12, "width == null || width >= 0.0");
      return new borders$.BorderSide.new({color: (t0 = color, t0 == null ? this.color : t0), width: (t0$ = width, t0$ == null ? this.width : t0$), style: (t0$0 = style, t0$0 == null ? this.style : t0$0)});
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 160, 27, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 161, 12, "t != null");
      return new borders$.BorderSide.new({color: this.color, width: math.max(core.double, 0.0, dart.notNull(this.width) * dart.notNull(t)), style: dart.notNull(t) <= 0.0 ? borders$.BorderStyle.none : this.style});
    }
    toPaint() {
      let t0, t0$;
      switch (this.style) {
        case C1 || CT.C1:
        {
          t0 = ui.Paint.new();
          return (() => {
            t0.color = this.color;
            t0.strokeWidth = this.width;
            t0.style = ui.PaintingStyle.stroke;
            return t0;
          })();
        }
        case C0 || CT.C0:
        {
          t0$ = ui.Paint.new();
          return (() => {
            t0$.color = C4 || CT.C4;
            t0$.strokeWidth = 0.0;
            t0$.style = ui.PaintingStyle.stroke;
            return t0$;
          })();
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    static canMerge(a, b) {
      if (a == null) dart.nullFailed(L0, 197, 35, "a");
      if (b == null) dart.nullFailed(L0, 197, 49, "b");
      if (!(a != null)) dart.assertFailed(null, L0, 198, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, L0, 199, 12, "b != null");
      if (dart.equals(a.style, borders$.BorderStyle.none) && a.width === 0.0 || dart.equals(b.style, borders$.BorderStyle.none) && b.width === 0.0) return true;
      return dart.equals(a.style, b.style) && dart.equals(a.color, b.color);
    }
    static lerp(a, b, t) {
      if (a == null) dart.nullFailed(L0, 212, 37, "a");
      if (b == null) dart.nullFailed(L0, 212, 51, "b");
      if (t == null) dart.nullFailed(L0, 212, 61, "t");
      if (!(a != null)) dart.assertFailed(null, L0, 213, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, L0, 214, 12, "b != null");
      if (!(t != null)) dart.assertFailed(null, L0, 215, 12, "t != null");
      if (t === 0.0) return a;
      if (t === 1.0) return b;
      let width = dart.nullCheck(ui.lerpDouble(a.width, b.width, t));
      if (width < 0.0) return borders$.BorderSide.none;
      if (dart.equals(a.style, b.style)) {
        return new borders$.BorderSide.new({color: dart.nullCheck(ui.Color.lerp(a.color, b.color, t)), width: width, style: a.style});
      }
      let colorA = null;
      let colorB = null;
      switch (a.style) {
        case C1 || CT.C1:
        {
          colorA = a.color;
          break;
        }
        case C0 || CT.C0:
        {
          colorA = a.color.withAlpha(0);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      switch (b.style) {
        case C1 || CT.C1:
        {
          colorB = b.color;
          break;
        }
        case C0 || CT.C0:
        {
          colorB = b.color.withAlpha(0);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      return new borders$.BorderSide.new({color: dart.nullCheck(ui.Color.lerp(colorA, colorB, t)), width: width, style: borders$.BorderStyle.solid});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return borders$.BorderSide.is(other) && dart.equals(other.color, this.color) && other.width == this.width && dart.equals(other.style, this.style);
    }
    get hashCode() {
      return ui.hashValues(this.color, this.width, this.style);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "BorderSide")) + "(" + dart.str(this.color) + ", " + this.width[$toStringAsFixed](1) + ", " + dart.str(this.style) + ")";
    }
  };
  (borders$.BorderSide.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : C3 || CT.C3;
    if (color == null) dart.nullFailed(L0, 67, 10, "color");
    let width = opts && 'width' in opts ? opts.width : 1;
    if (width == null) dart.nullFailed(L0, 68, 10, "width");
    let style = opts && 'style' in opts ? opts.style : C1 || CT.C1;
    if (style == null) dart.nullFailed(L0, 69, 10, "style");
    this[color$] = color;
    this[width$] = width;
    this[style$] = style;
    if (!(color != null)) dart.assertFailed(null, L0, 70, 15, "color != null");
    if (!(width != null)) dart.assertFailed(null, L0, 71, 15, "width != null");
    if (!(dart.notNull(width) >= 0.0)) dart.assertFailed(null, L0, 72, 15, "width >= 0.0");
    if (!(style != null)) dart.assertFailed(null, L0, 73, 15, "style != null");
    ;
  }).prototype = borders$.BorderSide.prototype;
  dart.addTypeTests(borders$.BorderSide);
  dart.addTypeCaches(borders$.BorderSide);
  dart.setMethodSignature(borders$.BorderSide, () => ({
    __proto__: dart.getMethods(borders$.BorderSide.__proto__),
    copyWith: dart.fnType(borders$.BorderSide, [], {color: dart.nullable(ui.Color), style: dart.nullable(borders$.BorderStyle), width: dart.nullable(core.double)}, {}),
    scale: dart.fnType(borders$.BorderSide, [core.double]),
    toPaint: dart.fnType(ui.Paint, [])
  }));
  dart.setLibraryUri(borders$.BorderSide, L1);
  dart.setFieldSignature(borders$.BorderSide, () => ({
    __proto__: dart.getFields(borders$.BorderSide.__proto__),
    color: dart.finalFieldType(ui.Color),
    width: dart.finalFieldType(core.double),
    style: dart.finalFieldType(borders$.BorderStyle)
  }));
  dart.defineExtensionMethods(borders$.BorderSide, ['_equals', 'toString']);
  dart.defineExtensionAccessors(borders$.BorderSide, ['hashCode']);
  dart.defineLazy(borders$.BorderSide, {
    /*borders$.BorderSide.none*/get none() {
      return C5 || CT.C5;
    }
  }, false);
  borders$.ShapeBorder = class ShapeBorder extends core.Object {
    add(other, opts) {
      if (other == null) dart.nullFailed(L0, 320, 32, "other");
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (reversed == null) dart.nullFailed(L0, 320, 46, "reversed");
      return null;
    }
    ['+'](other) {
      let t0, t0$;
      if (other == null) dart.nullFailed(L0, 330, 38, "other");
      t0$ = (t0 = this.add(other), t0 == null ? other.add(this, {reversed: true}) : t0);
      return t0$ == null ? new borders$._CompoundBorder.new(JSArrayOfShapeBorder().of([other, this])) : t0$;
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 383, 48, "t");
      if (a == null) return this.scale(t);
      return null;
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 415, 46, "t");
      if (b == null) return this.scale(1.0 - dart.notNull(t));
      return null;
    }
    static lerp(a, b, t) {
      let t0;
      if (t == null) dart.nullFailed(L0, 429, 67, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 430, 12, "t != null");
      let result = null;
      if (b != null) result = b.lerpFrom(a, t);
      if (result == null && a != null) result = a.lerpTo(b, t);
      t0 = result;
      return t0 == null ? dart.notNull(t) < 0.5 ? a : b : t0;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ShapeBorder")) + "()";
    }
  };
  (borders$.ShapeBorder.new = function() {
    ;
  }).prototype = borders$.ShapeBorder.prototype;
  dart.addTypeTests(borders$.ShapeBorder);
  dart.addTypeCaches(borders$.ShapeBorder);
  dart.setMethodSignature(borders$.ShapeBorder, () => ({
    __proto__: dart.getMethods(borders$.ShapeBorder.__proto__),
    add: dart.fnType(dart.nullable(borders$.ShapeBorder), [borders$.ShapeBorder], {reversed: core.bool}, {}),
    '+': dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder]),
    lerpFrom: dart.fnType(dart.nullable(borders$.ShapeBorder), [dart.nullable(borders$.ShapeBorder), core.double]),
    lerpTo: dart.fnType(dart.nullable(borders$.ShapeBorder), [dart.nullable(borders$.ShapeBorder), core.double])
  }));
  dart.setLibraryUri(borders$.ShapeBorder, L1);
  dart.defineExtensionMethods(borders$.ShapeBorder, ['toString']);
  var side$ = dart.privateName(borders$, "OutlinedBorder.side");
  borders$.OutlinedBorder = class OutlinedBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
  };
  (borders$.OutlinedBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    if (side == null) dart.nullFailed(L0, 503, 31, "side");
    this[side$] = side;
    if (!(side != null)) dart.assertFailed(null, L0, 503, 66, "side != null");
    borders$.OutlinedBorder.__proto__.new.call(this);
    ;
  }).prototype = borders$.OutlinedBorder.prototype;
  dart.addTypeTests(borders$.OutlinedBorder);
  dart.addTypeCaches(borders$.OutlinedBorder);
  dart.setLibraryUri(borders$.OutlinedBorder, L1);
  dart.setFieldSignature(borders$.OutlinedBorder, () => ({
    __proto__: dart.getFields(borders$.OutlinedBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide)
  }));
  borders$._CompoundBorder = class _CompoundBorder extends borders$.ShapeBorder {
    get dimensions() {
      return this.borders[$fold](edge_insets.EdgeInsetsGeometry, edge_insets.EdgeInsets.zero, dart.fn((previousValue, border) => {
        if (previousValue == null) dart.nullFailed(L0, 531, 27, "previousValue");
        if (border == null) dart.nullFailed(L0, 531, 54, "border");
        return previousValue.add(border.dimensions);
      }, EdgeInsetsGeometryAndShapeBorderToEdgeInsetsGeometry()));
    }
    add(other, opts) {
      let t0;
      if (other == null) dart.nullFailed(L0, 538, 31, "other");
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (reversed == null) dart.nullFailed(L0, 538, 45, "reversed");
      if (!borders$._CompoundBorder.is(other)) {
        let ours = dart.test(reversed) ? this.borders[$last] : this.borders[$first];
        let merged = (t0 = ours.add(other, {reversed: reversed}), t0 == null ? other.add(ours, {reversed: !dart.test(reversed)}) : t0);
        if (merged != null) {
          let result = (() => {
            let t0 = ListOfShapeBorder().of(this.borders);
            return t0;
          })();
          result[$_set](dart.test(reversed) ? dart.notNull(result[$length]) - 1 : 0, merged);
          return new borders$._CompoundBorder.new(result);
        }
      }
      let mergedBorders = (() => {
        let t1 = JSArrayOfShapeBorder().of([]);
        if (dart.test(reversed)) t1[$addAll](this.borders);
        if (borders$._CompoundBorder.is(other))
          t1[$addAll](other.borders);
        else
          t1.push(other);
        if (!dart.test(reversed)) t1[$addAll](this.borders);
        return t1;
      })();
      return new borders$._CompoundBorder.new(mergedBorders);
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 568, 28, "t");
      return new borders$._CompoundBorder.new(this.borders[$map](borders$.ShapeBorder, dart.fn(border => {
        if (border == null) dart.nullFailed(L0, 570, 45, "border");
        return border.scale(t);
      }, ShapeBorderToShapeBorder()))[$toList]());
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 575, 48, "t");
      return borders$._CompoundBorder.lerp(a, this, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 580, 46, "t");
      return borders$._CompoundBorder.lerp(this, b, t);
    }
    static lerp(a, b, t) {
      let t2;
      if (t == null) dart.nullFailed(L0, 584, 70, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 585, 12, "t != null");
      if (!(borders$._CompoundBorder.is(a) || borders$._CompoundBorder.is(b))) dart.assertFailed(null, L0, 586, 12, "a is _CompoundBorder || b is _CompoundBorder");
      let aList = borders$._CompoundBorder.is(a) ? a.borders : JSArrayOfShapeBorderN().of([a]);
      let bList = borders$._CompoundBorder.is(b) ? b.borders : JSArrayOfShapeBorderN().of([b]);
      let results = JSArrayOfShapeBorder().of([]);
      let length = math.max(core.int, aList[$length], bList[$length]);
      for (let index = 0; index < length; index = index + 1) {
        let localA = index < dart.notNull(aList[$length]) ? aList[$_get](index) : null;
        let localB = index < dart.notNull(bList[$length]) ? bList[$_get](index) : null;
        if (localA != null && localB != null) {
          let localResult = (t2 = localA.lerpTo(localB, t), t2 == null ? localB.lerpFrom(localA, t) : t2);
          if (localResult != null) {
            results[$add](localResult);
            continue;
          }
        }
        if (localB != null) results[$add](localB.scale(t));
        if (localA != null) results[$add](localA.scale(1.0 - dart.notNull(t)));
      }
      return new borders$._CompoundBorder.new(results);
    }
    getInnerPath(rect, opts) {
      if (rect == null) dart.nullFailed(L0, 614, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      for (let index = 0; index < dart.notNull(this.borders[$length]) - 1; index = index + 1)
        rect = this.borders[$_get](index).dimensions.resolve(textDirection).deflateRect(rect);
      return this.borders[$last].getInnerPath(rect, {textDirection: textDirection});
    }
    getOuterPath(rect, opts) {
      if (rect == null) dart.nullFailed(L0, 621, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this.borders[$first].getOuterPath(rect, {textDirection: textDirection});
    }
    paint(canvas, rect, opts) {
      if (canvas == null) dart.nullFailed(L0, 626, 21, "canvas");
      if (rect == null) dart.nullFailed(L0, 626, 34, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      for (let border of this.borders) {
        border.paint(canvas, rect, {textDirection: textDirection});
        rect = border.dimensions.resolve(textDirection).deflateRect(rect);
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return borders$._CompoundBorder.is(other) && dart.test(collections.listEquals(borders$.ShapeBorder, other.borders, this.borders));
    }
    get hashCode() {
      return ui.hashList(this.borders);
    }
    toString() {
      return this.borders[$reversed][$map](core.String, dart.fn(border => {
        if (border == null) dart.nullFailed(L0, 652, 54, "border");
        return dart.toString(border);
      }, ShapeBorderToString()))[$join](" + ");
    }
  };
  (borders$._CompoundBorder.new = function(borders) {
    if (borders == null) dart.nullFailed(L0, 520, 24, "borders");
    this.borders = borders;
    if (!(borders != null)) dart.assertFailed(null, L0, 521, 14, "borders != null");
    if (!(dart.notNull(borders[$length]) >= 2)) dart.assertFailed(null, L0, 522, 14, "borders.length >= 2");
    if (!!dart.test(borders[$any](dart.fn(border => {
      if (border == null) dart.nullFailed(L0, 523, 40, "border");
      return borders$._CompoundBorder.is(border);
    }, ShapeBorderTobool())))) dart.assertFailed(null, L0, 523, 14, "!borders.any((ShapeBorder border) => border is _CompoundBorder)");
    borders$._CompoundBorder.__proto__.new.call(this);
    ;
  }).prototype = borders$._CompoundBorder.prototype;
  dart.addTypeTests(borders$._CompoundBorder);
  dart.addTypeCaches(borders$._CompoundBorder);
  dart.setMethodSignature(borders$._CompoundBorder, () => ({
    __proto__: dart.getMethods(borders$._CompoundBorder.__proto__),
    add: dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder], {reversed: core.bool}, {}),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(borders$._CompoundBorder, () => ({
    __proto__: dart.getGetters(borders$._CompoundBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(borders$._CompoundBorder, L1);
  dart.setFieldSignature(borders$._CompoundBorder, () => ({
    __proto__: dart.getFields(borders$._CompoundBorder.__proto__),
    borders: dart.finalFieldType(core.List$(borders$.ShapeBorder))
  }));
  dart.defineExtensionMethods(borders$._CompoundBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(borders$._CompoundBorder, ['hashCode']);
  borders$.paintBorder = function paintBorder(canvas, rect, opts) {
    let t2;
    if (canvas == null) dart.nullFailed(L0, 674, 10, "canvas");
    if (rect == null) dart.nullFailed(L0, 675, 8, "rect");
    let top = opts && 'top' in opts ? opts.top : C5 || CT.C5;
    if (top == null) dart.nullFailed(L0, 676, 14, "top");
    let right = opts && 'right' in opts ? opts.right : C5 || CT.C5;
    if (right == null) dart.nullFailed(L0, 677, 14, "right");
    let bottom = opts && 'bottom' in opts ? opts.bottom : C5 || CT.C5;
    if (bottom == null) dart.nullFailed(L0, 678, 14, "bottom");
    let left = opts && 'left' in opts ? opts.left : C5 || CT.C5;
    if (left == null) dart.nullFailed(L0, 679, 14, "left");
    if (!(canvas != null)) dart.assertFailed(null, L0, 681, 10, "canvas != null");
    if (!(rect != null)) dart.assertFailed(null, L0, 682, 10, "rect != null");
    if (!(top != null)) dart.assertFailed(null, L0, 683, 10, "top != null");
    if (!(right != null)) dart.assertFailed(null, L0, 684, 10, "right != null");
    if (!(bottom != null)) dart.assertFailed(null, L0, 685, 10, "bottom != null");
    if (!(left != null)) dart.assertFailed(null, L0, 686, 10, "left != null");
    let paint = (t2 = ui.Paint.new(), (() => {
      t2.strokeWidth = 0.0;
      return t2;
    })());
    let path = ui.Path.new();
    switch (top.style) {
      case C1 || CT.C1:
      {
        paint.color = top.color;
        path.reset();
        path.moveTo(rect.left, rect.top);
        path.lineTo(rect.right, rect.top);
        if (top.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.top) + dart.notNull(top.width));
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.top) + dart.notNull(top.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C0 || CT.C0:
      {
        break;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
    switch (right.style) {
      case C1 || CT.C1:
      {
        paint.color = right.color;
        path.reset();
        path.moveTo(rect.right, rect.top);
        path.lineTo(rect.right, rect.bottom);
        if (right.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.top) + dart.notNull(top.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C0 || CT.C0:
      {
        break;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
    switch (bottom.style) {
      case C1 || CT.C1:
      {
        paint.color = bottom.color;
        path.reset();
        path.moveTo(rect.right, rect.bottom);
        path.lineTo(rect.left, rect.bottom);
        if (bottom.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C0 || CT.C0:
      {
        break;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
    switch (left.style) {
      case C1 || CT.C1:
      {
        paint.color = left.color;
        path.reset();
        path.moveTo(rect.left, rect.bottom);
        path.lineTo(rect.left, rect.top);
        if (left.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.top) + dart.notNull(top.width));
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C0 || CT.C0:
      {
        break;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  dart.trackLibraries("packages/flutter/src/painting/borders.dart", {
    "package:flutter/src/painting/borders.dart": borders$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["borders.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/borders.dart.lib.js"}');
  // Exports:
  return {
    src__painting__borders: borders$
  };
}));

//# sourceMappingURL=borders.dart.lib.js.map
