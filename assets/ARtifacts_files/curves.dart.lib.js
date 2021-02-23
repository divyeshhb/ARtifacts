define(['dart_sdk', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__animation__curves_dart(dart_sdk, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var curves = Object.create(dart.library);
  var $truncateToDouble = dartx.truncateToDouble;
  var $clamp = dartx.clamp;
  var $abs = dartx.abs;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $add = dartx.add;
  var $sign = dartx.sign;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $last = dartx.last;
  var $addAll = dartx.addAll;
  var $toDouble = dartx.toDouble;
  var $isNotEmpty = dartx.isNotEmpty;
  var $round = dartx.round;
  var $modulo = dartx['%'];
  var $floor = dartx.floor;
  var $clear = dartx.clear;
  var $join = dartx.join;
  var $toList = dartx.toList;
  var $first = dartx.first;
  var $isEmpty = dartx.isEmpty;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(false);
  var OffsetAndOffsetAndOffsetTobool = () => (OffsetAndOffsetAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [ui.Offset, ui.Offset, ui.Offset])))();
  var JSArrayOfCurve2DSample = () => (JSArrayOfCurve2DSample = dart.constFn(_interceptors.JSArray$(curves.Curve2DSample)))();
  var Curve2DSampleAndCurve2DSample__Tovoid = () => (Curve2DSampleAndCurve2DSample__Tovoid = dart.constFn(dart.fnType(dart.void, [curves.Curve2DSample, curves.Curve2DSample], {forceSubdivide: core.bool}, {})))();
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var doubleTodynamic = () => (doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))();
  var doubleTodouble = () => (doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))();
  var ListOfOffset = () => (ListOfOffset = dart.constFn(core.List$(ui.Offset)))();
  var JSArrayOfListOfOffset = () => (JSArrayOfListOfOffset = dart.constFn(_interceptors.JSArray$(ListOfOffset())))();
  var JSArrayOfOffset = () => (JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/animation/curves.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/animation/curves.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves._DecelerateCurve.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.04,
        [b$]: 1,
        [a$]: 0.18
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.25,
        [b$]: 0.1,
        [a$]: 0.25
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 1,
        [b$]: 0,
        [a$]: 0.42
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.09,
        [c$]: 0.65,
        [b$]: 0.03,
        [a$]: 0.67
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.715,
        [c$]: 0.745,
        [b$]: 0,
        [a$]: 0.47
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.53,
        [c$]: 0.68,
        [b$]: 0.085,
        [a$]: 0.55
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.19,
        [c$]: 0.675,
        [b$]: 0.055,
        [a$]: 0.55
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.22,
        [c$]: 0.685,
        [b$]: 0.03,
        [a$]: 0.895
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.06,
        [c$]: 0.855,
        [b$]: 0.05,
        [a$]: 0.755
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.035,
        [c$]: 0.795,
        [b$]: 0.05,
        [a$]: 0.95
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.335,
        [c$]: 0.98,
        [b$]: 0.04,
        [a$]: 0.6
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.045,
        [c$]: 0.735,
        [b$]: -0.28,
        [a$]: 0.6
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.58,
        [b$]: 0,
        [a$]: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.97,
        [c$]: 0.33,
        [b$]: 0.91,
        [a$]: 0.35
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.565,
        [b$]: 0.575,
        [a$]: 0.39
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.94,
        [c$]: 0.45,
        [b$]: 0.46,
        [a$]: 0.25
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.355,
        [b$]: 0.61,
        [a$]: 0.215
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.44,
        [b$]: 0.84,
        [a$]: 0.165
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.32,
        [b$]: 1,
        [a$]: 0.23
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.22,
        [b$]: 1,
        [a$]: 0.19
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.165,
        [b$]: 0.82,
        [a$]: 0.075
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1.275,
        [c$]: 0.32,
        [b$]: 0.885,
        [a$]: 0.175
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.58,
        [b$]: 0,
        [a$]: 0.42
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.95,
        [c$]: 0.55,
        [b$]: 0.05,
        [a$]: 0.445
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.955,
        [c$]: 0.515,
        [b$]: 0.03,
        [a$]: 0.455
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.355,
        [b$]: 0.045,
        [a$]: 0.645
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.175,
        [b$]: 0,
        [a$]: 0.77
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.07,
        [b$]: 0,
        [a$]: 0.86
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0,
        [b$]: 0,
        [a$]: 1
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.86,
        [c$]: 0.15,
        [b$]: 0.135,
        [a$]: 0.785
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1.55,
        [c$]: 0.265,
        [b$]: -0.55,
        [a$]: 0.68
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.2,
        [b$]: 0,
        [a$]: 0.4
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.15,
        [c$]: 0.85,
        [b$]: 0.85,
        [a$]: 0.15
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: curves._BounceInCurve.prototype
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: curves._BounceOutCurve.prototype
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: curves._BounceInOutCurve.prototype
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: curves.ElasticInCurve.prototype,
        [period$]: 0.4
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: curves.ElasticOutCurve.prototype,
        [period$0]: 0.4
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: curves.ElasticInOutCurve.prototype,
        [period$1]: 0.4
      });
    }
  }, false);
  const _is_ParametricCurve_default = Symbol('_is_ParametricCurve_default');
  curves.ParametricCurve$ = dart.generic(T => {
    class ParametricCurve extends core.Object {
      transform(t) {
        if (t == null) dart.nullFailed(L0, 35, 22, "t");
        if (!(t != null)) dart.assertFailed(null, L0, 36, 12, "t != null");
        if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed("parametric value " + dart.str(t) + " is outside of [0, 1] range.", L0, 37, 12, "t >= 0.0 && t <= 1.0");
        return this.transformInternal(t);
      }
      transformInternal(t) {
        if (t == null) dart.nullFailed(L0, 45, 30, "t");
        dart.throw(new core.UnimplementedError.new());
      }
      toString() {
        return object.objectRuntimeType(this, "ParametricCurve");
      }
    }
    (ParametricCurve.new = function() {
      ;
    }).prototype = ParametricCurve.prototype;
    dart.addTypeTests(ParametricCurve);
    ParametricCurve.prototype[_is_ParametricCurve_default] = true;
    dart.addTypeCaches(ParametricCurve);
    dart.setMethodSignature(ParametricCurve, () => ({
      __proto__: dart.getMethods(ParametricCurve.__proto__),
      transform: dart.fnType(T, [core.double]),
      transformInternal: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(ParametricCurve, L1);
    dart.defineExtensionMethods(ParametricCurve, ['toString']);
    return ParametricCurve;
  });
  curves.ParametricCurve = curves.ParametricCurve$();
  dart.addTypeTests(curves.ParametricCurve, _is_ParametricCurve_default);
  curves.Curve = class Curve extends curves.ParametricCurve$(core.double) {
    transform(t) {
      if (t == null) dart.nullFailed(L0, 88, 27, "t");
      if (t === 0.0 || t === 1.0) {
        return t;
      }
      return super.transform(t);
    }
    get flipped() {
      return new curves.FlippedCurve.new(this);
    }
  };
  (curves.Curve.new = function() {
    curves.Curve.__proto__.new.call(this);
    ;
  }).prototype = curves.Curve.prototype;
  dart.addTypeTests(curves.Curve);
  dart.addTypeCaches(curves.Curve);
  dart.setGetterSignature(curves.Curve, () => ({
    __proto__: dart.getGetters(curves.Curve.__proto__),
    flipped: curves.Curve
  }));
  dart.setLibraryUri(curves.Curve, L1);
  curves._Linear = class _Linear extends curves.Curve {
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 117, 35, "t");
      return t;
    }
  };
  (curves._Linear.__ = function() {
    curves._Linear.__proto__.new.call(this);
    ;
  }).prototype = curves._Linear.prototype;
  dart.addTypeTests(curves._Linear);
  dart.addTypeCaches(curves._Linear);
  dart.setLibraryUri(curves._Linear, L1);
  var count$ = dart.privateName(curves, "SawTooth.count");
  curves.SawTooth = class SawTooth extends curves.Curve {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 136, 35, "t");
      t = dart.notNull(t) * dart.notNull(this.count);
      return dart.notNull(t) - t[$truncateToDouble]();
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "SawTooth")) + "(" + dart.str(this.count) + ")";
    }
  };
  (curves.SawTooth.new = function(count) {
    if (count == null) dart.nullFailed(L0, 130, 23, "count");
    this[count$] = count;
    if (!(count != null)) dart.assertFailed(null, L0, 130, 39, "count != null");
    curves.SawTooth.__proto__.new.call(this);
    ;
  }).prototype = curves.SawTooth.prototype;
  dart.addTypeTests(curves.SawTooth);
  dart.addTypeCaches(curves.SawTooth);
  dart.setLibraryUri(curves.SawTooth, L1);
  dart.setFieldSignature(curves.SawTooth, () => ({
    __proto__: dart.getFields(curves.SawTooth.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(curves.SawTooth, ['toString']);
  var C0;
  var begin$ = dart.privateName(curves, "Interval.begin");
  var end$ = dart.privateName(curves, "Interval.end");
  var curve$ = dart.privateName(curves, "Interval.curve");
  curves.Interval = class Interval extends curves.Curve {
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
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 179, 35, "t");
      if (!(dart.notNull(this.begin) >= 0.0)) dart.assertFailed(null, L0, 180, 12, "begin >= 0.0");
      if (!(dart.notNull(this.begin) <= 1.0)) dart.assertFailed(null, L0, 181, 12, "begin <= 1.0");
      if (!(dart.notNull(this.end) >= 0.0)) dart.assertFailed(null, L0, 182, 12, "end >= 0.0");
      if (!(dart.notNull(this.end) <= 1.0)) dart.assertFailed(null, L0, 183, 12, "end <= 1.0");
      if (!(dart.notNull(this.end) >= dart.notNull(this.begin))) dart.assertFailed(null, L0, 184, 12, "end >= begin");
      t = ((dart.notNull(t) - dart.notNull(this.begin)) / (dart.notNull(this.end) - dart.notNull(this.begin)))[$clamp](0.0, 1.0);
      if (t === 0.0 || t === 1.0) return t;
      return this.curve.transform(t);
    }
    toString() {
      if (!curves._Linear.is(this.curve)) return dart.str(object.objectRuntimeType(this, "Interval")) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")➩" + dart.str(this.curve);
      return dart.str(object.objectRuntimeType(this, "Interval")) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")";
    }
  };
  (curves.Interval.new = function(begin, end, opts) {
    if (begin == null) dart.nullFailed(L0, 160, 23, "begin");
    if (end == null) dart.nullFailed(L0, 160, 35, "end");
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 160, 47, "curve");
    this[begin$] = begin;
    this[end$] = end;
    this[curve$] = curve;
    if (!(begin != null)) dart.assertFailed(null, L0, 161, 14, "begin != null");
    if (!(end != null)) dart.assertFailed(null, L0, 162, 14, "end != null");
    if (!(curve != null)) dart.assertFailed(null, L0, 163, 14, "curve != null");
    curves.Interval.__proto__.new.call(this);
    ;
  }).prototype = curves.Interval.prototype;
  dart.addTypeTests(curves.Interval);
  dart.addTypeCaches(curves.Interval);
  dart.setLibraryUri(curves.Interval, L1);
  dart.setFieldSignature(curves.Interval, () => ({
    __proto__: dart.getFields(curves.Interval.__proto__),
    begin: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.Interval, ['toString']);
  var threshold$ = dart.privateName(curves, "Threshold.threshold");
  curves.Threshold = class Threshold extends curves.Curve {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 214, 35, "t");
      if (!(dart.notNull(this.threshold) >= 0.0)) dart.assertFailed(null, L0, 215, 12, "threshold >= 0.0");
      if (!(dart.notNull(this.threshold) <= 1.0)) dart.assertFailed(null, L0, 216, 12, "threshold <= 1.0");
      return dart.notNull(t) < dart.notNull(this.threshold) ? 0.0 : 1.0;
    }
  };
  (curves.Threshold.new = function(threshold) {
    if (threshold == null) dart.nullFailed(L0, 206, 24, "threshold");
    this[threshold$] = threshold;
    if (!(threshold != null)) dart.assertFailed(null, L0, 206, 44, "threshold != null");
    curves.Threshold.__proto__.new.call(this);
    ;
  }).prototype = curves.Threshold.prototype;
  dart.addTypeTests(curves.Threshold);
  dart.addTypeCaches(curves.Threshold);
  dart.setLibraryUri(curves.Threshold, L1);
  dart.setFieldSignature(curves.Threshold, () => ({
    __proto__: dart.getFields(curves.Threshold.__proto__),
    threshold: dart.finalFieldType(core.double)
  }));
  var _evaluateCubic = dart.privateName(curves, "_evaluateCubic");
  var a$ = dart.privateName(curves, "Cubic.a");
  var b$ = dart.privateName(curves, "Cubic.b");
  var c$ = dart.privateName(curves, "Cubic.c");
  var d$ = dart.privateName(curves, "Cubic.d");
  curves.Cubic = class Cubic extends curves.Curve {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    [_evaluateCubic](a, b, m) {
      if (a == null) dart.nullFailed(L0, 280, 32, "a");
      if (b == null) dart.nullFailed(L0, 280, 42, "b");
      if (m == null) dart.nullFailed(L0, 280, 52, "m");
      return 3 * dart.notNull(a) * (1 - dart.notNull(m)) * (1 - dart.notNull(m)) * dart.notNull(m) + 3 * dart.notNull(b) * (1 - dart.notNull(m)) * dart.notNull(m) * dart.notNull(m) + dart.notNull(m) * dart.notNull(m) * dart.notNull(m);
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 287, 35, "t");
      let start = 0.0;
      let end = 1.0;
      while (true) {
        let midpoint = (start + end) / 2;
        let estimate = this[_evaluateCubic](this.a, this.c, midpoint);
        if ((dart.notNull(t) - dart.notNull(estimate))[$abs]() < 0.001) return this[_evaluateCubic](this.b, this.d, midpoint);
        if (dart.notNull(estimate) < dart.notNull(t))
          start = midpoint;
        else
          end = midpoint;
      }
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "Cubic")) + "(" + this.a[$toStringAsFixed](2) + ", " + this.b[$toStringAsFixed](2) + ", " + this.c[$toStringAsFixed](2) + ", " + this.d[$toStringAsFixed](2) + ")";
    }
  };
  (curves.Cubic.new = function(a, b, c, d) {
    if (a == null) dart.nullFailed(L0, 248, 20, "a");
    if (b == null) dart.nullFailed(L0, 248, 28, "b");
    if (c == null) dart.nullFailed(L0, 248, 36, "c");
    if (d == null) dart.nullFailed(L0, 248, 44, "d");
    this[a$] = a;
    this[b$] = b;
    this[c$] = c;
    this[d$] = d;
    if (!(a != null)) dart.assertFailed(null, L0, 249, 14, "a != null");
    if (!(b != null)) dart.assertFailed(null, L0, 250, 14, "b != null");
    if (!(c != null)) dart.assertFailed(null, L0, 251, 14, "c != null");
    if (!(d != null)) dart.assertFailed(null, L0, 252, 14, "d != null");
    curves.Cubic.__proto__.new.call(this);
    ;
  }).prototype = curves.Cubic.prototype;
  dart.addTypeTests(curves.Cubic);
  dart.addTypeCaches(curves.Cubic);
  dart.setMethodSignature(curves.Cubic, () => ({
    __proto__: dart.getMethods(curves.Cubic.__proto__),
    [_evaluateCubic]: dart.fnType(core.double, [core.double, core.double, core.double])
  }));
  dart.setLibraryUri(curves.Cubic, L1);
  dart.setFieldSignature(curves.Cubic, () => ({
    __proto__: dart.getFields(curves.Cubic.__proto__),
    a: dart.finalFieldType(core.double),
    b: dart.finalFieldType(core.double),
    c: dart.finalFieldType(core.double),
    d: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.Cubic, ['toString']);
  dart.defineLazy(curves.Cubic, {
    /*curves.Cubic._cubicErrorBound*/get _cubicErrorBound() {
      return 0.001;
    }
  }, false);
  curves.Curve2D = class Curve2D extends curves.ParametricCurve$(ui.Offset) {
    generateSamples(opts) {
      let start = opts && 'start' in opts ? opts.start : 0;
      if (start == null) dart.nullFailed(L0, 452, 12, "start");
      let end = opts && 'end' in opts ? opts.end : 1;
      if (end == null) dart.nullFailed(L0, 453, 12, "end");
      let tolerance = opts && 'tolerance' in opts ? opts.tolerance : 1e-10;
      if (tolerance == null) dart.nullFailed(L0, 454, 12, "tolerance");
      if (!(tolerance != null)) dart.assertFailed(null, L0, 466, 12, "tolerance != null");
      if (!(start != null)) dart.assertFailed(null, L0, 467, 12, "start != null");
      if (!(end != null)) dart.assertFailed(null, L0, 468, 12, "end != null");
      if (!(dart.notNull(end) > dart.notNull(start))) dart.assertFailed(null, L0, 469, 12, "end > start");
      let rand = math.Random.new(this.samplingSeed);
      function isFlat(p, q, r) {
        if (p == null) dart.nullFailed(L0, 473, 24, "p");
        if (q == null) dart.nullFailed(L0, 473, 34, "q");
        if (r == null) dart.nullFailed(L0, 473, 44, "r");
        let pr = p['-'](r);
        let qr = q['-'](r);
        let z = dart.notNull(pr.dx) * dart.notNull(qr.dy) - dart.notNull(qr.dx) * dart.notNull(pr.dy);
        return z * z < dart.notNull(tolerance);
      }
      dart.fn(isFlat, OffsetAndOffsetAndOffsetTobool());
      let first = new curves.Curve2DSample.new(start, this.transform(start));
      let last = new curves.Curve2DSample.new(end, this.transform(end));
      let samples = JSArrayOfCurve2DSample().of([first]);
      const sample = (p, q, opts) => {
        if (p == null) dart.nullFailed(L0, 484, 31, "p");
        if (q == null) dart.nullFailed(L0, 484, 48, "q");
        let forceSubdivide = opts && 'forceSubdivide' in opts ? opts.forceSubdivide : false;
        if (forceSubdivide == null) dart.nullFailed(L0, 484, 57, "forceSubdivide");
        let t = dart.notNull(p.t) + (0.45 + 0.1 * dart.notNull(rand.nextDouble())) * (dart.notNull(q.t) - dart.notNull(p.t));
        let r = new curves.Curve2DSample.new(t, this.transform(t));
        if (!dart.test(forceSubdivide) && dart.test(isFlat(p.value, q.value, r.value))) {
          samples[$add](q);
        } else {
          sample(p, r);
          sample(r, q);
        }
      };
      dart.fn(sample, Curve2DSampleAndCurve2DSample__Tovoid());
      sample(first, last, {forceSubdivide: (dart.notNull(first.value.dx) - dart.notNull(last.value.dx))[$abs]() < dart.notNull(tolerance) && (dart.notNull(first.value.dy) - dart.notNull(last.value.dy))[$abs]() < dart.notNull(tolerance)});
      return samples;
    }
    get samplingSeed() {
      return 0;
    }
    findInverse(x) {
      if (x == null) dart.nullFailed(L0, 524, 29, "x");
      if (!(x != null)) dart.assertFailed(null, L0, 525, 12, "x != null");
      let start = 0.0;
      let end = 1.0;
      let mid = null;
      let mid$35isSet = false;
      function mid$35get() {
        return mid$35isSet ? mid : dart.throw(new _internal.LateError.localNI("mid"));
      }
      dart.fn(mid$35get, VoidTodouble());
      function mid$35set(t3) {
        if (t3 == null) dart.nullFailed(L0, 528, 17, "null");
        mid$35isSet = true;
        return mid = t3;
      }
      dart.fn(mid$35set, doubleTodynamic());
      const offsetToOrigin = pos => {
        if (pos == null) dart.nullFailed(L0, 529, 34, "pos");
        return dart.notNull(x) - dart.notNull(this.transform(pos).dx);
      };
      dart.fn(offsetToOrigin, doubleTodouble());
      let count = 100;
      let startValue = offsetToOrigin(start);
      while ((dart.notNull(end) - dart.notNull(start)) / 2.0 > 0.000001 && count > 0) {
        mid$35set((dart.notNull(end) + dart.notNull(start)) / 2.0);
        let value = offsetToOrigin(mid$35get());
        if (value[$sign] === startValue[$sign]) {
          start = mid$35get();
        } else {
          end = mid$35get();
        }
        count = count - 1;
      }
      return mid$35get();
    }
  };
  (curves.Curve2D.new = function() {
    curves.Curve2D.__proto__.new.call(this);
    ;
  }).prototype = curves.Curve2D.prototype;
  dart.addTypeTests(curves.Curve2D);
  dart.addTypeCaches(curves.Curve2D);
  dart.setMethodSignature(curves.Curve2D, () => ({
    __proto__: dart.getMethods(curves.Curve2D.__proto__),
    generateSamples: dart.fnType(core.Iterable$(curves.Curve2DSample), [], {end: core.double, start: core.double, tolerance: core.double}, {}),
    findInverse: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(curves.Curve2D, () => ({
    __proto__: dart.getGetters(curves.Curve2D.__proto__),
    samplingSeed: core.int
  }));
  dart.setLibraryUri(curves.Curve2D, L1);
  var t$ = dart.privateName(curves, "Curve2DSample.t");
  var value$ = dart.privateName(curves, "Curve2DSample.value");
  curves.Curve2DSample = class Curve2DSample extends core.Object {
    get t() {
      return this[t$];
    }
    set t(value) {
      super.t = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    toString() {
      return "[(" + this.value.dx[$toStringAsFixed](2) + ", " + this.value.dy[$toStringAsFixed](2) + "), " + this.t[$toStringAsFixed](2) + "]";
    }
  };
  (curves.Curve2DSample.new = function(t, value) {
    if (t == null) dart.nullFailed(L0, 560, 28, "t");
    if (value == null) dart.nullFailed(L0, 560, 36, "value");
    this[t$] = t;
    this[value$] = value;
    if (!(t != null)) dart.assertFailed(null, L0, 560, 52, "t != null");
    if (!(value != null)) dart.assertFailed(null, L0, 560, 71, "value != null");
    ;
  }).prototype = curves.Curve2DSample.prototype;
  dart.addTypeTests(curves.Curve2DSample);
  dart.addTypeCaches(curves.Curve2DSample);
  dart.setLibraryUri(curves.Curve2DSample, L1);
  dart.setFieldSignature(curves.Curve2DSample, () => ({
    __proto__: dart.getFields(curves.Curve2DSample.__proto__),
    t: dart.finalFieldType(core.double),
    value: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(curves.Curve2DSample, ['toString']);
  var _controlPoints = dart.privateName(curves, "_controlPoints");
  var _startHandle = dart.privateName(curves, "_startHandle");
  var _endHandle = dart.privateName(curves, "_endHandle");
  var _tension = dart.privateName(curves, "_tension");
  var _cubicSegments = dart.privateName(curves, "_cubicSegments");
  var _initializeIfNeeded = dart.privateName(curves, "_initializeIfNeeded");
  curves.CatmullRomSpline = class CatmullRomSpline extends curves.Curve2D {
    static _computeSegments(controlPoints, tension, opts) {
      if (controlPoints == null) dart.nullFailed(L0, 663, 20, "controlPoints");
      if (tension == null) dart.nullFailed(L0, 664, 14, "tension");
      let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
      let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
      startHandle == null ? startHandle = controlPoints[$_get](0)['*'](2.0)['-'](controlPoints[$_get](1)) : null;
      endHandle == null ? endHandle = controlPoints[$last]['*'](2.0)['-'](controlPoints[$_get](dart.notNull(controlPoints[$length]) - 2)) : null;
      let allPoints = (() => {
        let t5 = JSArrayOfOffset().of([startHandle]);
        t5[$addAll](controlPoints);
        t5.push(endHandle);
        return t5;
      })();
      let reverseTension = 1.0 - dart.notNull(tension);
      let result = JSArrayOfListOfOffset().of([]);
      for (let i = 0; i < dart.notNull(allPoints[$length]) - 3; i = i + 1) {
        let curve = JSArrayOfOffset().of([allPoints[$_get](i), allPoints[$_get](i + 1), allPoints[$_get](i + 2), allPoints[$_get](i + 3)]);
        let diffCurve10 = curve[$_get](1)['-'](curve[$_get](0));
        let diffCurve21 = curve[$_get](2)['-'](curve[$_get](1));
        let diffCurve32 = curve[$_get](3)['-'](curve[$_get](2));
        let t01 = math.pow(diffCurve10.distance, 0.5)[$toDouble]();
        let t12 = math.pow(diffCurve21.distance, 0.5)[$toDouble]();
        let t23 = math.pow(diffCurve32.distance, 0.5)[$toDouble]();
        let m1 = diffCurve21['+'](diffCurve10['/'](t01)['-'](curve[$_get](2)['-'](curve[$_get](0))['/'](t01 + t12))['*'](t12))['*'](reverseTension);
        let m2 = diffCurve21['+'](diffCurve32['/'](t23)['-'](curve[$_get](3)['-'](curve[$_get](1))['/'](t12 + t23))['*'](t12))['*'](reverseTension);
        let sumM12 = m1['+'](m2);
        let segment = JSArrayOfOffset().of([diffCurve21['*'](-2.0)['+'](sumM12), diffCurve21['*'](3.0)['-'](m1)['-'](sumM12), m1, curve[$_get](1)]);
        result[$add](segment);
      }
      return result;
    }
    [_initializeIfNeeded]() {
      if (dart.test(this[_cubicSegments][$isNotEmpty])) {
        return;
      }
      this[_cubicSegments][$addAll](curves.CatmullRomSpline._computeSegments(dart.nullCheck(this[_controlPoints]), dart.nullCheck(this[_tension]), {startHandle: this[_startHandle], endHandle: this[_endHandle]}));
    }
    get samplingSeed() {
      this[_initializeIfNeeded]();
      let seedPoint = this[_cubicSegments][$_get](0)[$_get](1);
      return ((dart.notNull(seedPoint.dx) + dart.notNull(seedPoint.dy)) * 10000)[$round]();
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 738, 35, "t");
      this[_initializeIfNeeded]();
      let length = this[_cubicSegments][$length][$toDouble]();
      let position = null;
      let localT = null;
      let index = null;
      if (dart.notNull(t) < 1.0) {
        position = dart.notNull(t) * length;
        localT = position[$modulo](1.0);
        index = position[$floor]();
      } else {
        position = length;
        localT = 1.0;
        index = dart.notNull(this[_cubicSegments][$length]) - 1;
      }
      let cubicControlPoints = this[_cubicSegments][$_get](index);
      let localT2 = dart.notNull(localT) * dart.notNull(localT);
      return cubicControlPoints[$_get](0)['*'](localT2)['*'](localT)['+'](cubicControlPoints[$_get](1)['*'](localT2))['+'](cubicControlPoints[$_get](2)['*'](localT))['+'](cubicControlPoints[$_get](3));
    }
  };
  (curves.CatmullRomSpline.new = function(controlPoints, opts) {
    if (controlPoints == null) dart.nullFailed(L0, 626, 20, "controlPoints");
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    if (tension == null) dart.nullFailed(L0, 627, 16, "tension");
    let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
    let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
    if (!(controlPoints != null)) dart.assertFailed(null, L0, 630, 19, "controlPoints != null");
    if (!(tension != null)) dart.assertFailed(null, L0, 631, 19, "tension != null");
    if (!(dart.notNull(tension) <= 1.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be greater than 1.0.", L0, 632, 19, "tension <= 1.0");
    if (!(dart.notNull(tension) >= 0.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be negative.", L0, 633, 19, "tension >= 0.0");
    if (!(dart.notNull(controlPoints[$length]) > 3)) dart.assertFailed("There must be at least four control points to create a CatmullRomSpline.", L0, 634, 19, "controlPoints.length > 3");
    this[_controlPoints] = controlPoints;
    this[_startHandle] = startHandle;
    this[_endHandle] = endHandle;
    this[_tension] = tension;
    this[_cubicSegments] = JSArrayOfListOfOffset().of([]);
    curves.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomSpline.prototype;
  (curves.CatmullRomSpline.precompute = function(controlPoints, opts) {
    if (controlPoints == null) dart.nullFailed(L0, 646, 20, "controlPoints");
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    if (tension == null) dart.nullFailed(L0, 647, 16, "tension");
    let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
    let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
    if (!(controlPoints != null)) dart.assertFailed(null, L0, 650, 19, "controlPoints != null");
    if (!(tension != null)) dart.assertFailed(null, L0, 651, 19, "tension != null");
    if (!(dart.notNull(tension) <= 1.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be greater than 1.0.", L0, 652, 19, "tension <= 1.0");
    if (!(dart.notNull(tension) >= 0.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be negative.", L0, 653, 19, "tension >= 0.0");
    if (!(dart.notNull(controlPoints[$length]) > 3)) dart.assertFailed("There must be at least four control points to create a CatmullRomSpline.", L0, 654, 19, "controlPoints.length > 3");
    this[_controlPoints] = null;
    this[_startHandle] = null;
    this[_endHandle] = null;
    this[_tension] = null;
    this[_cubicSegments] = curves.CatmullRomSpline._computeSegments(controlPoints, tension, {startHandle: startHandle, endHandle: endHandle});
    curves.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomSpline.prototype;
  dart.addTypeTests(curves.CatmullRomSpline);
  dart.addTypeCaches(curves.CatmullRomSpline);
  dart.setMethodSignature(curves.CatmullRomSpline, () => ({
    __proto__: dart.getMethods(curves.CatmullRomSpline.__proto__),
    [_initializeIfNeeded]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(curves.CatmullRomSpline, L1);
  dart.setFieldSignature(curves.CatmullRomSpline, () => ({
    __proto__: dart.getFields(curves.CatmullRomSpline.__proto__),
    [_cubicSegments]: dart.finalFieldType(core.List$(core.List$(ui.Offset))),
    [_controlPoints]: dart.finalFieldType(dart.nullable(core.List$(ui.Offset))),
    [_startHandle]: dart.finalFieldType(dart.nullable(ui.Offset)),
    [_endHandle]: dart.finalFieldType(dart.nullable(ui.Offset)),
    [_tension]: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _precomputedSamples = dart.privateName(curves, "_precomputedSamples");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C1;
  var controlPoints$ = dart.privateName(curves, "CatmullRomCurve.controlPoints");
  var tension$ = dart.privateName(curves, "CatmullRomCurve.tension");
  curves.CatmullRomCurve = class CatmullRomCurve extends curves.Curve {
    get controlPoints() {
      return this[controlPoints$];
    }
    set controlPoints(value) {
      super.controlPoints = value;
    }
    get tension() {
      return this[tension$];
    }
    set tension(value) {
      super.tension = value;
    }
    static _computeSamples(controlPoints, tension) {
      if (controlPoints == null) dart.nullFailed(L0, 837, 59, "controlPoints");
      if (tension == null) dart.nullFailed(L0, 837, 81, "tension");
      return new curves.CatmullRomSpline.precompute((() => {
        let t6 = JSArrayOfOffset().of([ui.Offset.zero]);
        t6[$addAll](controlPoints);
        t6.push(C1 || CT.C1);
        return t6;
      })(), {tension: tension}).generateSamples({start: 0.0, end: 1.0, tolerance: 1e-12})[$toList]();
    }
    static validateControlPoints(controlPoints, opts) {
      let tension = opts && 'tension' in opts ? opts.tension : 0;
      if (tension == null) dart.nullFailed(L0, 908, 14, "tension");
      let reasons = opts && 'reasons' in opts ? opts.reasons : null;
      if (!(tension != null)) dart.assertFailed(null, L0, 911, 12, "tension != null");
      if (controlPoints == null) {
        if (!dart.test(dart.fn(() => {
          let t7;
          t7 = reasons;
          t7 == null ? null : t7[$add]("Supplied control points cannot be null");
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 913, 14, "() {\n        reasons?.add('Supplied control points cannot be null');\n        return true;\n      }()");
        return false;
      }
      if (dart.notNull(controlPoints[$length]) < 2) {
        if (!dart.test(dart.fn(() => {
          let t7;
          t7 = reasons;
          t7 == null ? null : t7[$add]("There must be at least two points supplied to create a valid curve.");
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 921, 14, "() {\n        reasons?.add('There must be at least two points supplied to create a valid curve.');\n        return true;\n      }()");
        return false;
      }
      controlPoints = (() => {
        let t7 = JSArrayOfOffset().of([ui.Offset.zero]);
        t7[$addAll](controlPoints);
        t7.push(C1 || CT.C1);
        return t7;
      })();
      let startHandle = controlPoints[$_get](0)['*'](2.0)['-'](controlPoints[$_get](1));
      let endHandle = controlPoints[$last]['*'](2.0)['-'](controlPoints[$_get](dart.notNull(controlPoints[$length]) - 2));
      controlPoints = (() => {
        let t8 = JSArrayOfOffset().of([startHandle]);
        t8[$addAll](controlPoints);
        t8.push(endHandle);
        return t8;
      })();
      let lastX = -(1 / 0);
      for (let i = 0; i < dart.notNull(controlPoints[$length]); i = i + 1) {
        if (i > 1 && i < dart.notNull(controlPoints[$length]) - 2 && (dart.notNull(controlPoints[$_get](i).dx) <= 0.0 || dart.notNull(controlPoints[$_get](i).dx) >= 1.0)) {
          if (!dart.test(dart.fn(() => {
            let t9;
            t9 = reasons;
            t9 == null ? null : t9[$add]("Control points must have X values between 0.0 and 1.0, exclusive. " + "Point " + dart.str(i) + " has an x value (" + dart.str(dart.nullCheck(controlPoints)[$_get](i).dx) + ") which is outside the range.");
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 937, 16, "() {\n          reasons?.add('Control points must have X values between 0.0 and 1.0, exclusive. '\n              'Point $i has an x value (${controlPoints![i].dx}) which is outside the range.');\n          return true;\n        }()");
          return false;
        }
        if (dart.notNull(controlPoints[$_get](i).dx) <= dart.notNull(lastX)) {
          if (!dart.test(dart.fn(() => {
            let t9;
            t9 = reasons;
            t9 == null ? null : t9[$add]("Each X coordinate must be greater than the preceding X coordinate " + "(i.e. must be monotonically increasing in X). Point " + dart.str(i) + " has an x value of " + dart.str(dart.nullCheck(controlPoints)[$_get](i).dx) + ", which is not greater than " + dart.str(lastX));
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 945, 16, "() {\n          reasons?.add('Each X coordinate must be greater than the preceding X coordinate '\n              '(i.e. must be monotonically increasing in X). Point $i has an x value of '\n              '${controlPoints![i].dx}, which is not greater than $lastX');\n          return true;\n        }()");
          return false;
        }
        lastX = controlPoints[$_get](i).dx;
      }
      let success = true;
      lastX = -(1 / 0);
      let testSpline = new curves.CatmullRomSpline.new(controlPoints, {tension: tension});
      let start = testSpline.findInverse(0.0);
      let end = testSpline.findInverse(1.0);
      let samplePoints = testSpline.generateSamples({start: start, end: end});
      if (samplePoints[$first].value.dy[$abs]() > 0.001 || (1.0 - dart.notNull(samplePoints[$last].value.dy))[$abs]() > 0.001) {
        let bail = true;
        success = false;
        if (!dart.test(dart.fn(() => {
          let t9;
          t9 = reasons;
          t9 == null ? null : t9[$add]("The curve has more than one Y value at X = " + dart.str(samplePoints[$first].value.dx) + ". " + "Try moving some control points further away from this value of X, or increasing " + "the tension.");
          bail = reasons == null;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 970, 14, "() {\n        reasons?.add('The curve has more than one Y value at X = ${samplePoints.first.value.dx}. '\n            'Try moving some control points further away from this value of X, or increasing '\n            'the tension.');\n        // No need to keep going if we're not giving reasons.\n        bail = reasons == null;\n        return true;\n      }()");
        if (bail) {
          return false;
        }
      }
      for (let sample of samplePoints) {
        let point = sample.value;
        let t = sample.t;
        let x = point.dx;
        if (dart.notNull(t) >= dart.notNull(start) && dart.notNull(t) <= dart.notNull(end) && (dart.notNull(x) < -0.001 || dart.notNull(x) > 1.0 + 0.001)) {
          let bail = true;
          success = false;
          if (!dart.test(dart.fn(() => {
            let t9;
            t9 = reasons;
            t9 == null ? null : t9[$add]("The resulting curve has an X value (" + dart.str(x) + ") which is outside " + "the range [0.0, 1.0], inclusive.");
            bail = reasons == null;
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 991, 16, "() {\n          reasons?.add('The resulting curve has an X value ($x) which is outside '\n              'the range [0.0, 1.0], inclusive.');\n          // No need to keep going if we're not giving reasons.\n          bail = reasons == null;\n          return true;\n        }()");
          if (bail) {
            return false;
          }
        }
        if (dart.notNull(x) < dart.notNull(lastX)) {
          let bail = true;
          success = false;
          if (!dart.test(dart.fn(() => {
            let t9;
            t9 = reasons;
            t9 == null ? null : t9[$add]("The curve has more than one Y value at x = " + dart.str(x) + ". Try moving " + "some control points further apart in X, or increasing the tension.");
            bail = reasons == null;
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 1007, 16, "() {\n          reasons?.add('The curve has more than one Y value at x = $x. Try moving '\n            'some control points further apart in X, or increasing the tension.');\n          // No need to keep going if we're not giving reasons.\n          bail = reasons == null;\n          return true;\n        }()");
          if (bail) {
            return false;
          }
        }
        lastX = x;
      }
      return success;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1026, 35, "t");
      if (dart.test(this[_precomputedSamples][$isEmpty])) {
        this[_precomputedSamples][$addAll](curves.CatmullRomCurve._computeSamples(this.controlPoints, this.tension));
      }
      let start = 0;
      let end = dart.notNull(this[_precomputedSamples][$length]) - 1;
      let mid = null;
      let value = null;
      let startValue = this[_precomputedSamples][$_get](start).value;
      let endValue = this[_precomputedSamples][$_get](end).value;
      while (dart.notNull(end) - dart.notNull(start) > 1) {
        mid = ((dart.notNull(end) + dart.notNull(start)) / 2)[$truncate]();
        value = this[_precomputedSamples][$_get](mid).value;
        if (dart.notNull(t) >= dart.notNull(value.dx)) {
          start = mid;
          startValue = value;
        } else {
          end = mid;
          endValue = value;
        }
      }
      let t2 = (dart.notNull(t) - dart.notNull(startValue.dx)) / (dart.notNull(endValue.dx) - dart.notNull(startValue.dx));
      return dart.nullCheck(ui.lerpDouble(startValue.dy, endValue.dy, t2));
    }
  };
  (curves.CatmullRomCurve.new = function(controlPoints, opts) {
    if (controlPoints == null) dart.nullFailed(L0, 807, 24, "controlPoints");
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    if (tension == null) dart.nullFailed(L0, 807, 45, "tension");
    this[controlPoints$] = controlPoints;
    this[tension$] = tension;
    if (!(tension != null)) dart.assertFailed(null, L0, 808, 16, "tension != null");
    if (!dart.test(dart.fn(() => {
      let t6;
      return curves.CatmullRomCurve.validateControlPoints(controlPoints, {tension: tension, reasons: (t6 = curves.CatmullRomCurve._debugAssertReasons, (() => {
          t6[$clear]();
          return t6;
        })())});
    }, VoidTobool())())) dart.assertFailed("control points " + dart.str(controlPoints) + " could not be validated:\n  " + dart.str(curves.CatmullRomCurve._debugAssertReasons[$join]("\n  ")), L0, 809, 16, "() {\n          return validateControlPoints(\n            controlPoints,\n            tension: tension,\n            reasons: _debugAssertReasons..clear(),\n          );\n        }()");
    this[_precomputedSamples] = JSArrayOfCurve2DSample().of([]);
    curves.CatmullRomCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomCurve.prototype;
  (curves.CatmullRomCurve.precompute = function(controlPoints, opts) {
    if (controlPoints == null) dart.nullFailed(L0, 824, 35, "controlPoints");
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    if (tension == null) dart.nullFailed(L0, 824, 56, "tension");
    this[controlPoints$] = controlPoints;
    this[tension$] = tension;
    if (!(tension != null)) dart.assertFailed(null, L0, 825, 16, "tension != null");
    if (!dart.test(dart.fn(() => {
      let t6;
      return curves.CatmullRomCurve.validateControlPoints(controlPoints, {tension: tension, reasons: (t6 = curves.CatmullRomCurve._debugAssertReasons, (() => {
          t6[$clear]();
          return t6;
        })())});
    }, VoidTobool())())) dart.assertFailed("control points " + dart.str(controlPoints) + " could not be validated:\n  " + dart.str(curves.CatmullRomCurve._debugAssertReasons[$join]("\n  ")), L0, 826, 16, "() {\n          return validateControlPoints(\n            controlPoints,\n            tension: tension,\n            reasons: _debugAssertReasons..clear(),\n          );\n        }()");
    this[_precomputedSamples] = curves.CatmullRomCurve._computeSamples(controlPoints, tension);
    curves.CatmullRomCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomCurve.prototype;
  dart.addTypeTests(curves.CatmullRomCurve);
  dart.addTypeCaches(curves.CatmullRomCurve);
  dart.setLibraryUri(curves.CatmullRomCurve, L1);
  dart.setFieldSignature(curves.CatmullRomCurve, () => ({
    __proto__: dart.getFields(curves.CatmullRomCurve.__proto__),
    [_precomputedSamples]: dart.finalFieldType(core.List$(curves.Curve2DSample)),
    controlPoints: dart.finalFieldType(core.List$(ui.Offset)),
    tension: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(curves.CatmullRomCurve, {
    /*curves.CatmullRomCurve._debugAssertReasons*/get _debugAssertReasons() {
      return JSArrayOfString().of([]);
    }
  }, false);
  var curve$0 = dart.privateName(curves, "FlippedCurve.curve");
  curves.FlippedCurve = class FlippedCurve extends curves.Curve {
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1087, 35, "t");
      return 1.0 - dart.notNull(this.curve.transform(1.0 - dart.notNull(t)));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "FlippedCurve")) + "(" + dart.str(this.curve) + ")";
    }
  };
  (curves.FlippedCurve.new = function(curve) {
    if (curve == null) dart.nullFailed(L0, 1081, 27, "curve");
    this[curve$0] = curve;
    if (!(curve != null)) dart.assertFailed(null, L0, 1081, 43, "curve != null");
    curves.FlippedCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.FlippedCurve.prototype;
  dart.addTypeTests(curves.FlippedCurve);
  dart.addTypeCaches(curves.FlippedCurve);
  dart.setLibraryUri(curves.FlippedCurve, L1);
  dart.setFieldSignature(curves.FlippedCurve, () => ({
    __proto__: dart.getFields(curves.FlippedCurve.__proto__),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.FlippedCurve, ['toString']);
  curves._DecelerateCurve = class _DecelerateCurve extends curves.Curve {
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1106, 35, "t");
      t = 1.0 - dart.notNull(t);
      return 1.0 - dart.notNull(t) * dart.notNull(t);
    }
  };
  (curves._DecelerateCurve.__ = function() {
    curves._DecelerateCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._DecelerateCurve.prototype;
  dart.addTypeTests(curves._DecelerateCurve);
  dart.addTypeCaches(curves._DecelerateCurve);
  dart.setLibraryUri(curves._DecelerateCurve, L1);
  curves._BounceInCurve = class _BounceInCurve extends curves.Curve {
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1138, 35, "t");
      return 1.0 - dart.notNull(curves._bounce(1.0 - dart.notNull(t)));
    }
  };
  (curves._BounceInCurve.__ = function() {
    curves._BounceInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInCurve.prototype;
  dart.addTypeTests(curves._BounceInCurve);
  dart.addTypeCaches(curves._BounceInCurve);
  dart.setLibraryUri(curves._BounceInCurve, L1);
  curves._BounceOutCurve = class _BounceOutCurve extends curves.Curve {
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1150, 35, "t");
      return curves._bounce(t);
    }
  };
  (curves._BounceOutCurve.__ = function() {
    curves._BounceOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceOutCurve.prototype;
  dart.addTypeTests(curves._BounceOutCurve);
  dart.addTypeCaches(curves._BounceOutCurve);
  dart.setLibraryUri(curves._BounceOutCurve, L1);
  curves._BounceInOutCurve = class _BounceInOutCurve extends curves.Curve {
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1162, 35, "t");
      if (dart.notNull(t) < 0.5)
        return (1.0 - dart.notNull(curves._bounce(1.0 - dart.notNull(t) * 2.0))) * 0.5;
      else
        return dart.notNull(curves._bounce(dart.notNull(t) * 2.0 - 1.0)) * 0.5 + 0.5;
    }
  };
  (curves._BounceInOutCurve.__ = function() {
    curves._BounceInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInOutCurve.prototype;
  dart.addTypeTests(curves._BounceInOutCurve);
  dart.addTypeCaches(curves._BounceInOutCurve);
  dart.setLibraryUri(curves._BounceInOutCurve, L1);
  var period$ = dart.privateName(curves, "ElasticInCurve.period");
  curves.ElasticInCurve = class ElasticInCurve extends curves.Curve {
    get period() {
      return this[period$];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1189, 35, "t");
      let s = dart.notNull(this.period) / 4.0;
      t = dart.notNull(t) - 1.0;
      return -math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ElasticInCurve")) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInCurve.new = function(period = 0.4) {
    if (period == null) dart.nullFailed(L0, 1183, 30, "period");
    this[period$] = period;
    curves.ElasticInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInCurve.prototype;
  dart.addTypeTests(curves.ElasticInCurve);
  dart.addTypeCaches(curves.ElasticInCurve);
  dart.setLibraryUri(curves.ElasticInCurve, L1);
  dart.setFieldSignature(curves.ElasticInCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInCurve, ['toString']);
  var period$0 = dart.privateName(curves, "ElasticOutCurve.period");
  curves.ElasticOutCurve = class ElasticOutCurve extends curves.Curve {
    get period() {
      return this[period$0];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1217, 35, "t");
      let s = dart.notNull(this.period) / 4.0;
      return math.pow(2.0, -10 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) + 1.0;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ElasticOutCurve")) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticOutCurve.new = function(period = 0.4) {
    if (period == null) dart.nullFailed(L0, 1211, 31, "period");
    this[period$0] = period;
    curves.ElasticOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticOutCurve.prototype;
  dart.addTypeTests(curves.ElasticOutCurve);
  dart.addTypeCaches(curves.ElasticOutCurve);
  dart.setLibraryUri(curves.ElasticOutCurve, L1);
  dart.setFieldSignature(curves.ElasticOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticOutCurve, ['toString']);
  var period$1 = dart.privateName(curves, "ElasticInOutCurve.period");
  curves.ElasticInOutCurve = class ElasticInOutCurve extends curves.Curve {
    get period() {
      return this[period$1];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      if (t == null) dart.nullFailed(L0, 1245, 35, "t");
      let s = dart.notNull(this.period) / 4.0;
      t = 2.0 * dart.notNull(t) - 1.0;
      if (dart.notNull(t) < 0.0)
        return -0.5 * math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
      else
        return math.pow(2.0, -10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) * 0.5 + 1.0;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ElasticInOutCurve")) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInOutCurve.new = function(period = 0.4) {
    if (period == null) dart.nullFailed(L0, 1239, 33, "period");
    this[period$1] = period;
    curves.ElasticInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInOutCurve.prototype;
  dart.addTypeTests(curves.ElasticInOutCurve);
  dart.addTypeCaches(curves.ElasticInOutCurve);
  dart.setLibraryUri(curves.ElasticInOutCurve, L1);
  dart.setFieldSignature(curves.ElasticInOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInOutCurve, ['toString']);
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  curves.Curves = class Curves extends core.Object {};
  (curves.Curves.__ = function() {
    ;
  }).prototype = curves.Curves.prototype;
  dart.addTypeTests(curves.Curves);
  dart.addTypeCaches(curves.Curves);
  dart.setLibraryUri(curves.Curves, L1);
  dart.defineLazy(curves.Curves, {
    /*curves.Curves.linear*/get linear() {
      return C0 || CT.C0;
    },
    /*curves.Curves.decelerate*/get decelerate() {
      return C2 || CT.C2;
    },
    /*curves.Curves.fastLinearToSlowEaseIn*/get fastLinearToSlowEaseIn() {
      return C3 || CT.C3;
    },
    /*curves.Curves.ease*/get ease() {
      return C4 || CT.C4;
    },
    /*curves.Curves.easeIn*/get easeIn() {
      return C5 || CT.C5;
    },
    /*curves.Curves.easeInToLinear*/get easeInToLinear() {
      return C6 || CT.C6;
    },
    /*curves.Curves.easeInSine*/get easeInSine() {
      return C7 || CT.C7;
    },
    /*curves.Curves.easeInQuad*/get easeInQuad() {
      return C8 || CT.C8;
    },
    /*curves.Curves.easeInCubic*/get easeInCubic() {
      return C9 || CT.C9;
    },
    /*curves.Curves.easeInQuart*/get easeInQuart() {
      return C10 || CT.C10;
    },
    /*curves.Curves.easeInQuint*/get easeInQuint() {
      return C11 || CT.C11;
    },
    /*curves.Curves.easeInExpo*/get easeInExpo() {
      return C12 || CT.C12;
    },
    /*curves.Curves.easeInCirc*/get easeInCirc() {
      return C13 || CT.C13;
    },
    /*curves.Curves.easeInBack*/get easeInBack() {
      return C14 || CT.C14;
    },
    /*curves.Curves.easeOut*/get easeOut() {
      return C15 || CT.C15;
    },
    /*curves.Curves.linearToEaseOut*/get linearToEaseOut() {
      return C16 || CT.C16;
    },
    /*curves.Curves.easeOutSine*/get easeOutSine() {
      return C17 || CT.C17;
    },
    /*curves.Curves.easeOutQuad*/get easeOutQuad() {
      return C18 || CT.C18;
    },
    /*curves.Curves.easeOutCubic*/get easeOutCubic() {
      return C19 || CT.C19;
    },
    /*curves.Curves.easeOutQuart*/get easeOutQuart() {
      return C20 || CT.C20;
    },
    /*curves.Curves.easeOutQuint*/get easeOutQuint() {
      return C21 || CT.C21;
    },
    /*curves.Curves.easeOutExpo*/get easeOutExpo() {
      return C22 || CT.C22;
    },
    /*curves.Curves.easeOutCirc*/get easeOutCirc() {
      return C23 || CT.C23;
    },
    /*curves.Curves.easeOutBack*/get easeOutBack() {
      return C24 || CT.C24;
    },
    /*curves.Curves.easeInOut*/get easeInOut() {
      return C25 || CT.C25;
    },
    /*curves.Curves.easeInOutSine*/get easeInOutSine() {
      return C26 || CT.C26;
    },
    /*curves.Curves.easeInOutQuad*/get easeInOutQuad() {
      return C27 || CT.C27;
    },
    /*curves.Curves.easeInOutCubic*/get easeInOutCubic() {
      return C28 || CT.C28;
    },
    /*curves.Curves.easeInOutQuart*/get easeInOutQuart() {
      return C29 || CT.C29;
    },
    /*curves.Curves.easeInOutQuint*/get easeInOutQuint() {
      return C30 || CT.C30;
    },
    /*curves.Curves.easeInOutExpo*/get easeInOutExpo() {
      return C31 || CT.C31;
    },
    /*curves.Curves.easeInOutCirc*/get easeInOutCirc() {
      return C32 || CT.C32;
    },
    /*curves.Curves.easeInOutBack*/get easeInOutBack() {
      return C33 || CT.C33;
    },
    /*curves.Curves.fastOutSlowIn*/get fastOutSlowIn() {
      return C34 || CT.C34;
    },
    /*curves.Curves.slowMiddle*/get slowMiddle() {
      return C35 || CT.C35;
    },
    /*curves.Curves.bounceIn*/get bounceIn() {
      return C36 || CT.C36;
    },
    /*curves.Curves.bounceOut*/get bounceOut() {
      return C37 || CT.C37;
    },
    /*curves.Curves.bounceInOut*/get bounceInOut() {
      return C38 || CT.C38;
    },
    /*curves.Curves.elasticIn*/get elasticIn() {
      return C39 || CT.C39;
    },
    /*curves.Curves.elasticOut*/get elasticOut() {
      return C40 || CT.C40;
    },
    /*curves.Curves.elasticInOut*/get elasticInOut() {
      return C41 || CT.C41;
    }
  }, false);
  curves._bounce = function _bounce(t) {
    if (t == null) dart.nullFailed(L0, 1117, 23, "t");
    if (dart.notNull(t) < 1.0 / 2.75) {
      return 7.5625 * dart.notNull(t) * dart.notNull(t);
    } else if (dart.notNull(t) < 2 / 2.75) {
      t = dart.notNull(t) - 1.5 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.75;
    } else if (dart.notNull(t) < 2.5 / 2.75) {
      t = dart.notNull(t) - 2.25 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.9375;
    }
    t = dart.notNull(t) - 2.625 / 2.75;
    return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.984375;
  };
  dart.trackLibraries("packages/flutter/src/animation/curves.dart", {
    "package:flutter/src/animation/curves.dart": curves
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["curves.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/animation/curves.dart.lib.js"}');
  // Exports:
  return {
    src__animation__curves: curves
  };
}));

//# sourceMappingURL=curves.dart.lib.js.map
