define(['dart_sdk', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__gradient_dart(dart_sdk, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var gradient = Object.create(dart.library);
  var $length = dartx.length;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $last = dartx.last;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  var intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  var ColorToColor = () => (ColorToColor = dart.constFn(dart.fnType(ui.Color, [ui.Color])))();
  var LinearGradientN = () => (LinearGradientN = dart.constFn(dart.nullable(gradient.LinearGradient)))();
  var RadialGradientN = () => (RadialGradientN = dart.constFn(dart.nullable(gradient.RadialGradient)))();
  var SweepGradientN = () => (SweepGradientN = dart.constFn(dart.nullable(gradient.SweepGradient)))();
  var doubleTobool = () => (doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))();
  var SplayTreeSetOfdouble = () => (SplayTreeSetOfdouble = dart.constFn(collection.SplayTreeSet$(core.double)))();
  var doubleToColor = () => (doubleToColor = dart.constFn(dart.fnType(ui.Color, [core.double])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/gradient.dart";
  var L1 = "package:flutter/src/painting/gradient.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: -1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.TileMode.prototype,
        [_name]: "TileMode.clamp",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    }
  }, false);
  gradient._ColorsAndStops = class _ColorsAndStops extends core.Object {};
  (gradient._ColorsAndStops.new = function(colors, stops) {
    if (colors == null) dart.nullFailed(L0, 18, 24, "colors");
    if (stops == null) dart.nullFailed(L0, 18, 37, "stops");
    this.colors = colors;
    this.stops = stops;
    ;
  }).prototype = gradient._ColorsAndStops.prototype;
  dart.addTypeTests(gradient._ColorsAndStops);
  dart.addTypeCaches(gradient._ColorsAndStops);
  dart.setLibraryUri(gradient._ColorsAndStops, L1);
  dart.setFieldSignature(gradient._ColorsAndStops, () => ({
    __proto__: dart.getFields(gradient._ColorsAndStops.__proto__),
    colors: dart.finalFieldType(core.List$(ui.Color)),
    stops: dart.finalFieldType(core.List$(core.double))
  }));
  gradient.GradientTransform = class GradientTransform extends core.Object {};
  (gradient.GradientTransform.new = function() {
    ;
  }).prototype = gradient.GradientTransform.prototype;
  dart.addTypeTests(gradient.GradientTransform);
  dart.addTypeCaches(gradient.GradientTransform);
  dart.setLibraryUri(gradient.GradientTransform, L1);
  var radians$ = dart.privateName(gradient, "GradientRotation.radians");
  gradient.GradientRotation = class GradientRotation extends gradient.GradientTransform {
    get radians() {
      return this[radians$];
    }
    set radians(value) {
      super.radians = value;
    }
    transform(bounds, opts) {
      let t0;
      if (bounds == null) dart.nullFailed(L0, 108, 26, "bounds");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(bounds != null)) dart.assertFailed(null, L0, 109, 12, "bounds != null");
      let sinRadians = math.sin(this.radians);
      let oneMinusCosRadians = 1 - math.cos(this.radians);
      let center = bounds.center;
      let originX = sinRadians * dart.notNull(center.dy) + oneMinusCosRadians * dart.notNull(center.dx);
      let originY = -sinRadians * dart.notNull(center.dx) + oneMinusCosRadians * dart.notNull(center.dy);
      t0 = vector_math_64.Matrix4.identity();
      return (() => {
        t0.translate(originX, originY);
        t0.rotateZ(this.radians);
        return t0;
      })();
    }
  };
  (gradient.GradientRotation.new = function(radians) {
    if (radians == null) dart.nullFailed(L0, 102, 31, "radians");
    this[radians$] = radians;
    gradient.GradientRotation.__proto__.new.call(this);
    ;
  }).prototype = gradient.GradientRotation.prototype;
  dart.addTypeTests(gradient.GradientRotation);
  dart.addTypeCaches(gradient.GradientRotation);
  dart.setMethodSignature(gradient.GradientRotation, () => ({
    __proto__: dart.getMethods(gradient.GradientRotation.__proto__),
    transform: dart.fnType(vector_math_64.Matrix4, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setLibraryUri(gradient.GradientRotation, L1);
  dart.setFieldSignature(gradient.GradientRotation, () => ({
    __proto__: dart.getFields(gradient.GradientRotation.__proto__),
    radians: dart.finalFieldType(core.double)
  }));
  var _impliedStops = dart.privateName(gradient, "_impliedStops");
  var _resolveTransform = dart.privateName(gradient, "_resolveTransform");
  var colors$ = dart.privateName(gradient, "Gradient.colors");
  var stops$ = dart.privateName(gradient, "Gradient.stops");
  var transform$ = dart.privateName(gradient, "Gradient.transform");
  gradient.Gradient = class Gradient extends core.Object {
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    get stops() {
      return this[stops$];
    }
    set stops(value) {
      super.stops = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    [_impliedStops]() {
      if (this.stops != null) return dart.nullCheck(this.stops);
      if (!(dart.notNull(this.colors[$length]) >= 2)) dart.assertFailed("colors list must have at least two colors", L0, 189, 12, "colors.length >= 2");
      let separation = 1.0 / (dart.notNull(this.colors[$length]) - 1);
      return ListOfdouble().generate(this.colors[$length], dart.fn(index => {
        if (index == null) dart.nullFailed(L0, 193, 12, "index");
        return dart.notNull(index) * separation;
      }, intTodouble()), {growable: false});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 244, 42, "t");
      if (a == null) return this.scale(t);
      return null;
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 275, 40, "t");
      if (b == null) return this.scale(1.0 - dart.notNull(t));
      return null;
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 289, 58, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 290, 12, "t != null");
      let result = null;
      if (b != null) result = b.lerpFrom(a, t);
      if (result == null && a != null) result = a.lerpTo(b, t);
      if (result != null) return result;
      if (a == null && b == null) return null;
      if (!(a != null && b != null)) dart.assertFailed(null, L0, 300, 12, "a != null && b != null");
      return dart.notNull(t) < 0.5 ? dart.nullCheck(a).scale(1.0 - dart.notNull(t) * 2.0) : dart.nullCheck(b).scale((dart.notNull(t) - 0.5) * 2.0);
    }
    [_resolveTransform](bounds, textDirection) {
      let t1, t0;
      if (bounds == null) dart.nullFailed(L0, 304, 39, "bounds");
      t0 = this.transform;
      return t0 == null ? null : (t1 = t0.transform(bounds, {textDirection: textDirection}), t1 == null ? null : t1.storage);
    }
  };
  (gradient.Gradient.new = function(opts) {
    let colors = opts && 'colors' in opts ? opts.colors : null;
    if (colors == null) dart.nullFailed(L0, 149, 19, "colors");
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[colors$] = colors;
    this[stops$] = stops;
    this[transform$] = transform;
    if (!(colors != null)) dart.assertFailed(null, L0, 152, 15, "colors != null");
    ;
  }).prototype = gradient.Gradient.prototype;
  dart.addTypeTests(gradient.Gradient);
  dart.addTypeCaches(gradient.Gradient);
  dart.setMethodSignature(gradient.Gradient, () => ({
    __proto__: dart.getMethods(gradient.Gradient.__proto__),
    [_impliedStops]: dart.fnType(core.List$(core.double), []),
    lerpFrom: dart.fnType(dart.nullable(gradient.Gradient), [dart.nullable(gradient.Gradient), core.double]),
    lerpTo: dart.fnType(dart.nullable(gradient.Gradient), [dart.nullable(gradient.Gradient), core.double]),
    [_resolveTransform]: dart.fnType(dart.nullable(typed_data.Float64List), [ui.Rect, dart.nullable(ui.TextDirection)])
  }));
  dart.setLibraryUri(gradient.Gradient, L1);
  dart.setFieldSignature(gradient.Gradient, () => ({
    __proto__: dart.getFields(gradient.Gradient.__proto__),
    colors: dart.finalFieldType(core.List$(ui.Color)),
    stops: dart.finalFieldType(dart.nullable(core.List$(core.double))),
    transform: dart.finalFieldType(dart.nullable(gradient.GradientTransform))
  }));
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C0;
  var C1;
  var _name = dart.privateName(ui, "_name");
  var C2;
  var begin$ = dart.privateName(gradient, "LinearGradient.begin");
  var end$ = dart.privateName(gradient, "LinearGradient.end");
  var tileMode$ = dart.privateName(gradient, "LinearGradient.tileMode");
  gradient.LinearGradient = class LinearGradient extends gradient.Gradient {
    get begin() {
      return this[begin$];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get tileMode() {
      return this[tileMode$];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    createShader(rect, opts) {
      if (rect == null) dart.nullFailed(L0, 419, 28, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui.Gradient.linear(this.begin.resolve(textDirection).withinRect(rect), this.end.resolve(textDirection).withinRect(rect), this.colors, this[_impliedStops](), this.tileMode, this[_resolveTransform](rect, textDirection));
    }
    scale(factor) {
      if (factor == null) dart.nullFailed(L0, 432, 31, "factor");
      return new gradient.LinearGradient.new({begin: this.begin, end: this.end, colors: this.colors[$map](ui.Color, dart.fn(color => {
          if (color == null) dart.nullFailed(L0, 436, 40, "color");
          return dart.nullCheck(ui.Color.lerp(null, color, factor));
        }, ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 443, 42, "t");
      if (a == null || gradient.LinearGradient.is(a)) return gradient.LinearGradient.lerp(LinearGradientN().as(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 450, 40, "t");
      if (b == null || gradient.LinearGradient.is(b)) return gradient.LinearGradient.lerp(this, LinearGradientN().as(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 475, 76, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 476, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = gradient._interpolateColorsAndStops(a.colors, a[_impliedStops](), b.colors, b[_impliedStops](), t);
      return new gradient.LinearGradient.new({begin: dart.nullCheck(alignment.AlignmentGeometry.lerp(a.begin, b.begin, t)), end: dart.nullCheck(alignment.AlignmentGeometry.lerp(a.end, b.end, t)), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return gradient.LinearGradient.is(other) && dart.equals(other.begin, this.begin) && dart.equals(other.end, this.end) && dart.equals(other.tileMode, this.tileMode) && dart.test(collections.listEquals(ui.Color, other.colors, this.colors)) && dart.test(collections.listEquals(core.double, other.stops, this.stops));
    }
    get hashCode() {
      return ui.hashValues(this.begin, this.end, this.tileMode, ui.hashList(this.colors), ui.hashList(this.stops));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "LinearGradient")) + "(" + dart.str(this.begin) + ", " + dart.str(this.end) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
    }
  };
  (gradient.LinearGradient.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : C0 || CT.C0;
    if (begin == null) dart.nullFailed(L0, 367, 10, "begin");
    let end = opts && 'end' in opts ? opts.end : C1 || CT.C1;
    if (end == null) dart.nullFailed(L0, 368, 10, "end");
    let colors = opts && 'colors' in opts ? opts.colors : null;
    if (colors == null) dart.nullFailed(L0, 369, 26, "colors");
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : C2 || CT.C2;
    if (tileMode == null) dart.nullFailed(L0, 371, 10, "tileMode");
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[begin$] = begin;
    this[end$] = end;
    this[tileMode$] = tileMode;
    if (!(begin != null)) dart.assertFailed(null, L0, 373, 15, "begin != null");
    if (!(end != null)) dart.assertFailed(null, L0, 374, 15, "end != null");
    if (!(tileMode != null)) dart.assertFailed(null, L0, 375, 15, "tileMode != null");
    gradient.LinearGradient.__proto__.new.call(this, {colors: colors, stops: stops, transform: transform});
    ;
  }).prototype = gradient.LinearGradient.prototype;
  dart.addTypeTests(gradient.LinearGradient);
  dart.addTypeCaches(gradient.LinearGradient);
  dart.setMethodSignature(gradient.LinearGradient, () => ({
    __proto__: dart.getMethods(gradient.LinearGradient.__proto__),
    createShader: dart.fnType(ui.Shader, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    scale: dart.fnType(gradient.LinearGradient, [core.double])
  }));
  dart.setLibraryUri(gradient.LinearGradient, L1);
  dart.setFieldSignature(gradient.LinearGradient, () => ({
    __proto__: dart.getFields(gradient.LinearGradient.__proto__),
    begin: dart.finalFieldType(alignment.AlignmentGeometry),
    end: dart.finalFieldType(alignment.AlignmentGeometry),
    tileMode: dart.finalFieldType(ui.TileMode)
  }));
  dart.defineExtensionMethods(gradient.LinearGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(gradient.LinearGradient, ['hashCode']);
  var C3;
  var center$ = dart.privateName(gradient, "RadialGradient.center");
  var radius$ = dart.privateName(gradient, "RadialGradient.radius");
  var tileMode$0 = dart.privateName(gradient, "RadialGradient.tileMode");
  var focal$ = dart.privateName(gradient, "RadialGradient.focal");
  var focalRadius$ = dart.privateName(gradient, "RadialGradient.focalRadius");
  gradient.RadialGradient = class RadialGradient extends gradient.Gradient {
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get tileMode() {
      return this[tileMode$0];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    get focal() {
      return this[focal$];
    }
    set focal(value) {
      super.focal = value;
    }
    get focalRadius() {
      return this[focalRadius$];
    }
    set focalRadius(value) {
      super.focalRadius = value;
    }
    createShader(rect, opts) {
      if (rect == null) dart.nullFailed(L0, 672, 28, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui.Gradient.radial(this.center.resolve(textDirection).withinRect(rect), dart.notNull(this.radius) * dart.notNull(rect.shortestSide), this.colors, this[_impliedStops](), this.tileMode, this[_resolveTransform](rect, textDirection), this.focal == null ? null : dart.nullCheck(this.focal).resolve(textDirection).withinRect(rect), dart.notNull(this.focalRadius) * dart.notNull(rect.shortestSide));
    }
    scale(factor) {
      if (factor == null) dart.nullFailed(L0, 688, 31, "factor");
      return new gradient.RadialGradient.new({center: this.center, radius: this.radius, colors: this.colors[$map](ui.Color, dart.fn(color => {
          if (color == null) dart.nullFailed(L0, 692, 40, "color");
          return dart.nullCheck(ui.Color.lerp(null, color, factor));
        }, ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode, focal: this.focal, focalRadius: this.focalRadius});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 701, 42, "t");
      if (a == null || gradient.RadialGradient.is(a)) return gradient.RadialGradient.lerp(RadialGradientN().as(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 708, 40, "t");
      if (b == null || gradient.RadialGradient.is(b)) return gradient.RadialGradient.lerp(this, RadialGradientN().as(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 733, 76, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 734, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = gradient._interpolateColorsAndStops(a.colors, a[_impliedStops](), b.colors, b[_impliedStops](), t);
      return new gradient.RadialGradient.new({center: dart.nullCheck(alignment.AlignmentGeometry.lerp(a.center, b.center, t)), radius: math.max(core.double, 0.0, dart.nullCheck(ui.lerpDouble(a.radius, b.radius, t))), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode, focal: alignment.AlignmentGeometry.lerp(a.focal, b.focal, t), focalRadius: math.max(core.double, 0.0, dart.nullCheck(ui.lerpDouble(a.focalRadius, b.focalRadius, t)))});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return gradient.RadialGradient.is(other) && dart.equals(other.center, this.center) && other.radius == this.radius && dart.equals(other.tileMode, this.tileMode) && dart.test(collections.listEquals(ui.Color, other.colors, this.colors)) && dart.test(collections.listEquals(core.double, other.stops, this.stops)) && dart.equals(other.focal, this.focal) && other.focalRadius == this.focalRadius;
    }
    get hashCode() {
      return ui.hashValues(this.center, this.radius, this.tileMode, ui.hashList(this.colors), ui.hashList(this.stops), this.focal, this.focalRadius);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RadialGradient")) + "(" + dart.str(this.center) + ", " + dart.str(this.radius) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ", " + dart.str(this.focal) + ", " + dart.str(this.focalRadius) + ")";
    }
  };
  (gradient.RadialGradient.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : C3 || CT.C3;
    if (center == null) dart.nullFailed(L0, 597, 10, "center");
    let radius = opts && 'radius' in opts ? opts.radius : 0.5;
    if (radius == null) dart.nullFailed(L0, 598, 10, "radius");
    let colors = opts && 'colors' in opts ? opts.colors : null;
    if (colors == null) dart.nullFailed(L0, 599, 26, "colors");
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : C2 || CT.C2;
    if (tileMode == null) dart.nullFailed(L0, 601, 10, "tileMode");
    let focal = opts && 'focal' in opts ? opts.focal : null;
    let focalRadius = opts && 'focalRadius' in opts ? opts.focalRadius : 0;
    if (focalRadius == null) dart.nullFailed(L0, 603, 10, "focalRadius");
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[center$] = center;
    this[radius$] = radius;
    this[tileMode$0] = tileMode;
    this[focal$] = focal;
    this[focalRadius$] = focalRadius;
    if (!(center != null)) dart.assertFailed(null, L0, 605, 15, "center != null");
    if (!(radius != null)) dart.assertFailed(null, L0, 606, 15, "radius != null");
    if (!(tileMode != null)) dart.assertFailed(null, L0, 607, 15, "tileMode != null");
    if (!(focalRadius != null)) dart.assertFailed(null, L0, 608, 15, "focalRadius != null");
    gradient.RadialGradient.__proto__.new.call(this, {colors: colors, stops: stops, transform: transform});
    ;
  }).prototype = gradient.RadialGradient.prototype;
  dart.addTypeTests(gradient.RadialGradient);
  dart.addTypeCaches(gradient.RadialGradient);
  dart.setMethodSignature(gradient.RadialGradient, () => ({
    __proto__: dart.getMethods(gradient.RadialGradient.__proto__),
    createShader: dart.fnType(ui.Shader, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    scale: dart.fnType(gradient.RadialGradient, [core.double])
  }));
  dart.setLibraryUri(gradient.RadialGradient, L1);
  dart.setFieldSignature(gradient.RadialGradient, () => ({
    __proto__: dart.getFields(gradient.RadialGradient.__proto__),
    center: dart.finalFieldType(alignment.AlignmentGeometry),
    radius: dart.finalFieldType(core.double),
    tileMode: dart.finalFieldType(ui.TileMode),
    focal: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry)),
    focalRadius: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(gradient.RadialGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(gradient.RadialGradient, ['hashCode']);
  var center$0 = dart.privateName(gradient, "SweepGradient.center");
  var startAngle$ = dart.privateName(gradient, "SweepGradient.startAngle");
  var endAngle$ = dart.privateName(gradient, "SweepGradient.endAngle");
  var tileMode$1 = dart.privateName(gradient, "SweepGradient.tileMode");
  gradient.SweepGradient = class SweepGradient extends gradient.Gradient {
    get center() {
      return this[center$0];
    }
    set center(value) {
      super.center = value;
    }
    get startAngle() {
      return this[startAngle$];
    }
    set startAngle(value) {
      super.startAngle = value;
    }
    get endAngle() {
      return this[endAngle$];
    }
    set endAngle(value) {
      super.endAngle = value;
    }
    get tileMode() {
      return this[tileMode$1];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    createShader(rect, opts) {
      if (rect == null) dart.nullFailed(L0, 922, 28, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui.Gradient.sweep(this.center.resolve(textDirection).withinRect(rect), this.colors, this[_impliedStops](), this.tileMode, this.startAngle, this.endAngle, this[_resolveTransform](rect, textDirection));
    }
    scale(factor) {
      if (factor == null) dart.nullFailed(L0, 937, 30, "factor");
      return new gradient.SweepGradient.new({center: this.center, startAngle: this.startAngle, endAngle: this.endAngle, colors: this.colors[$map](ui.Color, dart.fn(color => {
          if (color == null) dart.nullFailed(L0, 942, 40, "color");
          return dart.nullCheck(ui.Color.lerp(null, color, factor));
        }, ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 949, 42, "t");
      if (a == null || gradient.SweepGradient.is(a)) return gradient.SweepGradient.lerp(SweepGradientN().as(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 956, 40, "t");
      if (b == null || gradient.SweepGradient.is(b)) return gradient.SweepGradient.lerp(this, SweepGradientN().as(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 980, 73, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 981, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = gradient._interpolateColorsAndStops(a.colors, a[_impliedStops](), b.colors, b[_impliedStops](), t);
      return new gradient.SweepGradient.new({center: dart.nullCheck(alignment.AlignmentGeometry.lerp(a.center, b.center, t)), startAngle: math.max(core.double, 0.0, dart.nullCheck(ui.lerpDouble(a.startAngle, b.startAngle, t))), endAngle: math.max(core.double, 0.0, dart.nullCheck(ui.lerpDouble(a.endAngle, b.endAngle, t))), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return gradient.SweepGradient.is(other) && dart.equals(other.center, this.center) && other.startAngle == this.startAngle && other.endAngle == this.endAngle && dart.equals(other.tileMode, this.tileMode) && dart.test(collections.listEquals(ui.Color, other.colors, this.colors)) && dart.test(collections.listEquals(core.double, other.stops, this.stops));
    }
    get hashCode() {
      return ui.hashValues(this.center, this.startAngle, this.endAngle, this.tileMode, ui.hashList(this.colors), ui.hashList(this.stops));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "SweepGradient")) + "(" + dart.str(this.center) + ", " + dart.str(this.startAngle) + ", " + dart.str(this.endAngle) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
    }
  };
  (gradient.SweepGradient.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : C3 || CT.C3;
    if (center == null) dart.nullFailed(L0, 872, 10, "center");
    let startAngle = opts && 'startAngle' in opts ? opts.startAngle : 0;
    if (startAngle == null) dart.nullFailed(L0, 873, 10, "startAngle");
    let endAngle = opts && 'endAngle' in opts ? opts.endAngle : 6.283185307179586;
    if (endAngle == null) dart.nullFailed(L0, 874, 10, "endAngle");
    let colors = opts && 'colors' in opts ? opts.colors : null;
    if (colors == null) dart.nullFailed(L0, 875, 26, "colors");
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : C2 || CT.C2;
    if (tileMode == null) dart.nullFailed(L0, 877, 10, "tileMode");
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[center$0] = center;
    this[startAngle$] = startAngle;
    this[endAngle$] = endAngle;
    this[tileMode$1] = tileMode;
    if (!(center != null)) dart.assertFailed(null, L0, 879, 15, "center != null");
    if (!(startAngle != null)) dart.assertFailed(null, L0, 880, 15, "startAngle != null");
    if (!(endAngle != null)) dart.assertFailed(null, L0, 881, 15, "endAngle != null");
    if (!(tileMode != null)) dart.assertFailed(null, L0, 882, 15, "tileMode != null");
    gradient.SweepGradient.__proto__.new.call(this, {colors: colors, stops: stops, transform: transform});
    ;
  }).prototype = gradient.SweepGradient.prototype;
  dart.addTypeTests(gradient.SweepGradient);
  dart.addTypeCaches(gradient.SweepGradient);
  dart.setMethodSignature(gradient.SweepGradient, () => ({
    __proto__: dart.getMethods(gradient.SweepGradient.__proto__),
    createShader: dart.fnType(ui.Shader, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    scale: dart.fnType(gradient.SweepGradient, [core.double])
  }));
  dart.setLibraryUri(gradient.SweepGradient, L1);
  dart.setFieldSignature(gradient.SweepGradient, () => ({
    __proto__: dart.getFields(gradient.SweepGradient.__proto__),
    center: dart.finalFieldType(alignment.AlignmentGeometry),
    startAngle: dart.finalFieldType(core.double),
    endAngle: dart.finalFieldType(core.double),
    tileMode: dart.finalFieldType(ui.TileMode)
  }));
  dart.defineExtensionMethods(gradient.SweepGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(gradient.SweepGradient, ['hashCode']);
  gradient._sample = function _sample(colors, stops, t) {
    if (colors == null) dart.nullFailed(L0, 24, 27, "colors");
    if (stops == null) dart.nullFailed(L0, 24, 48, "stops");
    if (t == null) dart.nullFailed(L0, 24, 62, "t");
    if (!(colors != null)) dart.assertFailed(null, L0, 25, 10, "colors != null");
    if (!dart.test(colors[$isNotEmpty])) dart.assertFailed(null, L0, 26, 10, "colors.isNotEmpty");
    if (!(stops != null)) dart.assertFailed(null, L0, 27, 10, "stops != null");
    if (!dart.test(stops[$isNotEmpty])) dart.assertFailed(null, L0, 28, 10, "stops.isNotEmpty");
    if (!(t != null)) dart.assertFailed(null, L0, 29, 10, "t != null");
    if (dart.notNull(t) <= dart.notNull(stops[$first])) return colors[$first];
    if (dart.notNull(t) >= dart.notNull(stops[$last])) return colors[$last];
    let index = stops[$lastIndexWhere](dart.fn(s => {
      if (s == null) dart.nullFailed(L0, 34, 50, "s");
      return dart.notNull(s) <= dart.notNull(t);
    }, doubleTobool()));
    if (!(index !== -1)) dart.assertFailed(null, L0, 35, 10, "index != -1");
    return dart.nullCheck(ui.Color.lerp(colors[$_get](index), colors[$_get](dart.notNull(index) + 1), (dart.notNull(t) - dart.notNull(stops[$_get](index))) / (dart.notNull(stops[$_get](dart.notNull(index) + 1)) - dart.notNull(stops[$_get](index)))));
  };
  gradient._interpolateColorsAndStops = function _interpolateColorsAndStops(aColors, aStops, bColors, bStops, t) {
    let t0;
    if (aColors == null) dart.nullFailed(L0, 43, 15, "aColors");
    if (aStops == null) dart.nullFailed(L0, 44, 16, "aStops");
    if (bColors == null) dart.nullFailed(L0, 45, 15, "bColors");
    if (bStops == null) dart.nullFailed(L0, 46, 16, "bStops");
    if (t == null) dart.nullFailed(L0, 47, 10, "t");
    if (!(dart.notNull(aColors[$length]) >= 2)) dart.assertFailed(null, L0, 49, 10, "aColors.length >= 2");
    if (!(dart.notNull(bColors[$length]) >= 2)) dart.assertFailed(null, L0, 50, 10, "bColors.length >= 2");
    if (!(aStops[$length] == aColors[$length])) dart.assertFailed(null, L0, 51, 10, "aStops.length == aColors.length");
    if (!(bStops[$length] == bColors[$length])) dart.assertFailed(null, L0, 52, 10, "bStops.length == bColors.length");
    let stops = (t0 = new (SplayTreeSetOfdouble()).new(), (() => {
      t0.addAll(aStops);
      t0.addAll(bStops);
      return t0;
    })());
    let interpolatedStops = stops.toList({growable: false});
    let interpolatedColors = interpolatedStops[$map](ui.Color, dart.fn(stop => {
      if (stop == null) dart.nullFailed(L0, 58, 19, "stop");
      return dart.nullCheck(ui.Color.lerp(gradient._sample(aColors, aStops, stop), gradient._sample(bColors, bStops, stop), t));
    }, doubleToColor()))[$toList]({growable: false});
    return new gradient._ColorsAndStops.new(interpolatedColors, interpolatedStops);
  };
  dart.trackLibraries("packages/flutter/src/painting/gradient.dart", {
    "package:flutter/src/painting/gradient.dart": gradient
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gradient.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/gradient.dart.lib.js"}');
  // Exports:
  return {
    src__painting__gradient: gradient
  };
}));

//# sourceMappingURL=gradient.dart.lib.js.map
