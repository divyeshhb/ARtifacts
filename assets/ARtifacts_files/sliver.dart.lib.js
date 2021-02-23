define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/semantics/semantics.dart'], (function load__packages__flutter__src__rendering__sliver_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__semantics__semantics$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  var sliver$ = Object.create(dart.library);
  var viewport = Object.create(dart.library);
  var $isNaN = dartx.isNaN;
  var $runtimeType = dartx.runtimeType;
  var $addAll = dartx.addAll;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $join = dartx.join;
  var $add = dartx.add;
  var $clamp = dartx.clamp;
  var $isFinite = dartx.isFinite;
  var $where = dartx.where;
  var $forEach = dartx.forEach;
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(false);
  var GrowthDirectionL = () => (GrowthDirectionL = dart.constFn(dart.legacy(sliver$.GrowthDirection)))();
  var boolAndStringTovoid = () => (boolAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.bool, core.String])))();
  var doubleAndString__Tovoid = () => (doubleAndString__Tovoid = dart.constFn(dart.fnType(dart.void, [core.double, core.String], {mustBeNegative: core.bool, mustBePositive: core.bool}, {})))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var DiagnosticsPropertyOfSliverConstraints = () => (DiagnosticsPropertyOfSliverConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(sliver$.SliverConstraints)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var ListOfDiagnosticsNode = () => (ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))();
  var ListNOfDiagnosticsNode = () => (ListNOfDiagnosticsNode = dart.constFn(dart.nullable(ListOfDiagnosticsNode())))();
  var boolAndString__Tovoid = () => (boolAndString__Tovoid = dart.constFn(dart.fnType(dart.void, [core.bool, core.String], {details: ListNOfDiagnosticsNode()}, {})))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var VoidToNever = () => (VoidToNever = dart.constFn(dart.fnType(dart.Never, [])))();
  var DiagnosticsPropertyOfSliverGeometry = () => (DiagnosticsPropertyOfSliverGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(sliver$.SliverGeometry)))();
  var BoxHitTestResultTobool = () => (BoxHitTestResultTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult])))();
  var CacheExtentStyleL = () => (CacheExtentStyleL = dart.constFn(dart.legacy(viewport.CacheExtentStyle)))();
  var RenderObjectN = () => (RenderObjectN = dart.constFn(dart.nullable(object.RenderObject)))();
  var RenderSliverTobool = () => (RenderSliverTobool = dart.constFn(dart.fnType(core.bool, [sliver$.RenderSliver])))();
  var RenderSliverN = () => (RenderSliverN = dart.constFn(dart.nullable(sliver$.RenderSliver)))();
  var EnumPropertyOfAxisDirection = () => (EnumPropertyOfAxisDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.AxisDirection)))();
  var DiagnosticsPropertyOfViewportOffset = () => (DiagnosticsPropertyOfViewportOffset = dart.constFn(diagnostics.DiagnosticsProperty$(viewport_offset.ViewportOffset)))();
  var SyncIterableOfRenderSliver = () => (SyncIterableOfRenderSliver = dart.constFn(_js_helper.SyncIterable$(sliver$.RenderSliver)))();
  const CT = Object.create(null);
  var L2 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/viewport.dart";
  var L1 = "package:flutter/src/rendering/sliver.dart";
  var L3 = "package:flutter/src/rendering/viewport.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: sliver$.GrowthDirection.prototype,
        [_name$]: "GrowthDirection.forward",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: sliver$.GrowthDirection.prototype,
        [_name$]: "GrowthDirection.reverse",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], GrowthDirectionL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: sliver$.SliverGeometry.prototype,
        [cacheExtent$]: 0,
        [scrollOffsetCorrection$]: null,
        [hasVisualOverflow$]: false,
        [visible$]: false,
        [hitTestExtent$]: 0,
        [maxScrollObstructionExtent$]: 0,
        [maxPaintExtent$]: 0,
        [layoutExtent$]: 0,
        [paintExtent$]: 0,
        [paintOrigin$]: 0,
        [scrollExtent$]: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281584691.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: viewport.CacheExtentStyle.prototype,
        [_name$0]: "CacheExtentStyle.pixel",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: viewport.CacheExtentStyle.prototype,
        [_name$0]: "CacheExtentStyle.viewport",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.constList([C11 || CT.C11, C12 || CT.C12], CacheExtentStyleL());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$1]: "Clip.hardEdge",
        index: 1
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255360.0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: semantics.SemanticsTag.prototype,
        [SemanticsTag_name]: "RenderViewport.twoPane"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: semantics.SemanticsTag.prototype,
        [SemanticsTag_name]: "RenderViewport.excludeFromScrolling"
      });
    }
  }, false);
  var _name$ = dart.privateName(sliver$, "_name");
  var C0;
  var C1;
  var C2;
  sliver$.GrowthDirection = class GrowthDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (sliver$.GrowthDirection.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 34, 6, "index");
    if (_name == null) dart.nullFailed(L0, 34, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = sliver$.GrowthDirection.prototype;
  dart.addTypeTests(sliver$.GrowthDirection);
  dart.addTypeCaches(sliver$.GrowthDirection);
  dart.setLibraryUri(sliver$.GrowthDirection, L1);
  dart.setFieldSignature(sliver$.GrowthDirection, () => ({
    __proto__: dart.getFields(sliver$.GrowthDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(sliver$.GrowthDirection, ['toString']);
  sliver$.GrowthDirection.forward = C0 || CT.C0;
  sliver$.GrowthDirection.reverse = C1 || CT.C1;
  sliver$.GrowthDirection.values = C2 || CT.C2;
  var _name = dart.privateName(basic_types, "_name");
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var axisDirection$ = dart.privateName(sliver$, "SliverConstraints.axisDirection");
  var growthDirection$ = dart.privateName(sliver$, "SliverConstraints.growthDirection");
  var userScrollDirection$ = dart.privateName(sliver$, "SliverConstraints.userScrollDirection");
  var scrollOffset$ = dart.privateName(sliver$, "SliverConstraints.scrollOffset");
  var precedingScrollExtent$ = dart.privateName(sliver$, "SliverConstraints.precedingScrollExtent");
  var overlap$ = dart.privateName(sliver$, "SliverConstraints.overlap");
  var remainingPaintExtent$ = dart.privateName(sliver$, "SliverConstraints.remainingPaintExtent");
  var crossAxisExtent$ = dart.privateName(sliver$, "SliverConstraints.crossAxisExtent");
  var crossAxisDirection$ = dart.privateName(sliver$, "SliverConstraints.crossAxisDirection");
  var viewportMainAxisExtent$ = dart.privateName(sliver$, "SliverConstraints.viewportMainAxisExtent");
  var cacheOrigin$ = dart.privateName(sliver$, "SliverConstraints.cacheOrigin");
  var remainingCacheExtent$ = dart.privateName(sliver$, "SliverConstraints.remainingCacheExtent");
  sliver$.SliverConstraints = class SliverConstraints extends object.Constraints {
    get axisDirection() {
      return this[axisDirection$];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    get growthDirection() {
      return this[growthDirection$];
    }
    set growthDirection(value) {
      super.growthDirection = value;
    }
    get userScrollDirection() {
      return this[userScrollDirection$];
    }
    set userScrollDirection(value) {
      super.userScrollDirection = value;
    }
    get scrollOffset() {
      return this[scrollOffset$];
    }
    set scrollOffset(value) {
      super.scrollOffset = value;
    }
    get precedingScrollExtent() {
      return this[precedingScrollExtent$];
    }
    set precedingScrollExtent(value) {
      super.precedingScrollExtent = value;
    }
    get overlap() {
      return this[overlap$];
    }
    set overlap(value) {
      super.overlap = value;
    }
    get remainingPaintExtent() {
      return this[remainingPaintExtent$];
    }
    set remainingPaintExtent(value) {
      super.remainingPaintExtent = value;
    }
    get crossAxisExtent() {
      return this[crossAxisExtent$];
    }
    set crossAxisExtent(value) {
      super.crossAxisExtent = value;
    }
    get crossAxisDirection() {
      return this[crossAxisDirection$];
    }
    set crossAxisDirection(value) {
      super.crossAxisDirection = value;
    }
    get viewportMainAxisExtent() {
      return this[viewportMainAxisExtent$];
    }
    set viewportMainAxisExtent(value) {
      super.viewportMainAxisExtent = value;
    }
    get cacheOrigin() {
      return this[cacheOrigin$];
    }
    set cacheOrigin(value) {
      super.cacheOrigin = value;
    }
    get remainingCacheExtent() {
      return this[remainingCacheExtent$];
    }
    set remainingCacheExtent(value) {
      super.remainingCacheExtent = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let growthDirection = opts && 'growthDirection' in opts ? opts.growthDirection : null;
      let userScrollDirection = opts && 'userScrollDirection' in opts ? opts.userScrollDirection : null;
      let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
      let precedingScrollExtent = opts && 'precedingScrollExtent' in opts ? opts.precedingScrollExtent : null;
      let overlap = opts && 'overlap' in opts ? opts.overlap : null;
      let remainingPaintExtent = opts && 'remainingPaintExtent' in opts ? opts.remainingPaintExtent : null;
      let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
      let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
      let viewportMainAxisExtent = opts && 'viewportMainAxisExtent' in opts ? opts.viewportMainAxisExtent : null;
      let remainingCacheExtent = opts && 'remainingCacheExtent' in opts ? opts.remainingCacheExtent : null;
      let cacheOrigin = opts && 'cacheOrigin' in opts ? opts.cacheOrigin : null;
      return new sliver$.SliverConstraints.new({axisDirection: (t0 = axisDirection, t0 == null ? this.axisDirection : t0), growthDirection: (t0$ = growthDirection, t0$ == null ? this.growthDirection : t0$), userScrollDirection: (t0$0 = userScrollDirection, t0$0 == null ? this.userScrollDirection : t0$0), scrollOffset: (t0$1 = scrollOffset, t0$1 == null ? this.scrollOffset : t0$1), precedingScrollExtent: (t0$2 = precedingScrollExtent, t0$2 == null ? this.precedingScrollExtent : t0$2), overlap: (t0$3 = overlap, t0$3 == null ? this.overlap : t0$3), remainingPaintExtent: (t0$4 = remainingPaintExtent, t0$4 == null ? this.remainingPaintExtent : t0$4), crossAxisExtent: (t0$5 = crossAxisExtent, t0$5 == null ? this.crossAxisExtent : t0$5), crossAxisDirection: (t0$6 = crossAxisDirection, t0$6 == null ? this.crossAxisDirection : t0$6), viewportMainAxisExtent: (t0$7 = viewportMainAxisExtent, t0$7 == null ? this.viewportMainAxisExtent : t0$7), remainingCacheExtent: (t0$8 = remainingCacheExtent, t0$8 == null ? this.remainingCacheExtent : t0$8), cacheOrigin: (t0$9 = cacheOrigin, t0$9 == null ? this.cacheOrigin : t0$9)});
    }
    get axis() {
      return basic_types.axisDirectionToAxis(this.axisDirection);
    }
    get normalizedGrowthDirection() {
      if (!(this.axisDirection != null)) dart.assertFailed(null, L0, 346, 12, "axisDirection != null");
      switch (this.axisDirection) {
        case C3 || CT.C3:
        case C4 || CT.C4:
        {
          return this.growthDirection;
        }
        case C5 || CT.C5:
        case C6 || CT.C6:
        {
          switch (this.growthDirection) {
            case C0 || CT.C0:
            {
              return sliver$.GrowthDirection.reverse;
            }
            case C1 || CT.C1:
            {
              return sliver$.GrowthDirection.forward;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get isTight() {
      return false;
    }
    get isNormalized() {
      return dart.notNull(this.scrollOffset) >= 0.0 && dart.notNull(this.crossAxisExtent) >= 0.0 && !dart.equals(basic_types.axisDirectionToAxis(this.axisDirection), basic_types.axisDirectionToAxis(this.crossAxisDirection)) && dart.notNull(this.viewportMainAxisExtent) >= 0.0 && dart.notNull(this.remainingPaintExtent) >= 0.0;
    }
    asBoxConstraints(opts) {
      let minExtent = opts && 'minExtent' in opts ? opts.minExtent : 0;
      if (minExtent == null) dart.nullFailed(L0, 383, 12, "minExtent");
      let maxExtent = opts && 'maxExtent' in opts ? opts.maxExtent : 1 / 0;
      if (maxExtent == null) dart.nullFailed(L0, 384, 12, "maxExtent");
      let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
      crossAxisExtent == null ? crossAxisExtent = this.crossAxisExtent : null;
      switch (this.axis) {
        case C7 || CT.C7:
        {
          return new box.BoxConstraints.new({minHeight: crossAxisExtent, maxHeight: crossAxisExtent, minWidth: minExtent, maxWidth: maxExtent});
        }
        case C8 || CT.C8:
        {
          return new box.BoxConstraints.new({minWidth: crossAxisExtent, maxWidth: crossAxisExtent, minHeight: minExtent, maxHeight: maxExtent});
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      if (isAppliedConstraint == null) dart.nullFailed(L0, 408, 10, "isAppliedConstraint");
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.test(dart.fn(() => {
        let hasErrors = false;
        let errorMessage = new core.StringBuffer.new("\n");
        function verify(check, message) {
          if (check == null) dart.nullFailed(L0, 414, 24, "check");
          if (message == null) dart.nullFailed(L0, 414, 38, "message");
          if (dart.test(check)) return;
          hasErrors = true;
          errorMessage.writeln("  " + dart.str(message));
        }
        dart.fn(verify, boolAndStringTovoid());
        function verifyDouble(property, name, opts) {
          if (property == null) dart.nullFailed(L0, 420, 32, "property");
          if (name == null) dart.nullFailed(L0, 420, 49, "name");
          let mustBeNegative = opts && 'mustBeNegative' in opts ? opts.mustBeNegative : false;
          if (mustBeNegative == null) dart.nullFailed(L0, 420, 90, "mustBeNegative");
          let mustBePositive = opts && 'mustBePositive' in opts ? opts.mustBePositive : false;
          if (mustBePositive == null) dart.nullFailed(L0, 420, 61, "mustBePositive");
          verify(property != null, "The \"" + dart.str(name) + "\" is null.");
          if (property[$isNaN]) {
            let additional = ".";
            if (dart.test(mustBePositive)) {
              additional = ", expected greater than or equal to zero.";
            } else if (dart.test(mustBeNegative)) {
              additional = ", expected less than or equal to zero.";
            }
            verify(false, "The \"" + dart.str(name) + "\" is NaN" + additional);
          } else if (dart.test(mustBePositive)) {
            verify(dart.notNull(property) >= 0.0, "The \"" + dart.str(name) + "\" is negative.");
          } else if (dart.test(mustBeNegative)) {
            verify(dart.notNull(property) <= 0.0, "The \"" + dart.str(name) + "\" is positive.");
          }
        }
        dart.fn(verifyDouble, doubleAndString__Tovoid());
        verify(this.axis != null, "The \"axis\" is null.");
        verify(this.growthDirection != null, "The \"growthDirection\" is null.");
        verifyDouble(this.scrollOffset, "scrollOffset");
        verifyDouble(this.overlap, "overlap");
        verifyDouble(this.crossAxisExtent, "crossAxisExtent");
        verifyDouble(this.scrollOffset, "scrollOffset", {mustBePositive: true});
        verify(this.crossAxisDirection != null, "The \"crossAxisDirection\" is null.");
        verify(!dart.equals(basic_types.axisDirectionToAxis(this.axisDirection), basic_types.axisDirectionToAxis(this.crossAxisDirection)), "The \"axisDirection\" and the \"crossAxisDirection\" are along the same axis.");
        verifyDouble(this.viewportMainAxisExtent, "viewportMainAxisExtent", {mustBePositive: true});
        verifyDouble(this.remainingPaintExtent, "remainingPaintExtent", {mustBePositive: true});
        verifyDouble(this.remainingCacheExtent, "remainingCacheExtent", {mustBePositive: true});
        verifyDouble(this.cacheOrigin, "cacheOrigin", {mustBeNegative: true});
        verifyDouble(this.precedingScrollExtent, "precedingScrollExtent", {mustBePositive: true});
        verify(this.isNormalized, "The constraints are not normalized.");
        if (hasErrors) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t0 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " is not valid: " + dart.str(errorMessage))]);
            if (informationCollector != null) t0[$addAll](informationCollector());
            t0.push(new (DiagnosticsPropertyOfSliverConstraints()).new("The offending constraints were", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            return t0;
          })()));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 411, 12, "() {\n      bool hasErrors = false;\n      final StringBuffer errorMessage = StringBuffer('\\n');\n      void verify(bool check, String message) {\n        if (check)\n          return;\n        hasErrors = true;\n        errorMessage.writeln('  $message');\n      }\n      void verifyDouble(double property, String name, {bool mustBePositive = false, bool mustBeNegative = false}) {\n        verify(property != null, 'The \"$name\" is null.');\n        if (property.isNaN) {\n          String additional = '.';\n          if (mustBePositive) {\n            additional = ', expected greater than or equal to zero.';\n          } else if (mustBeNegative) {\n            additional = ', expected less than or equal to zero.';\n          }\n          verify(false, 'The \"$name\" is NaN$additional');\n        } else if (mustBePositive) {\n          verify(property >= 0.0, 'The \"$name\" is negative.');\n        } else if (mustBeNegative) {\n          verify(property <= 0.0, 'The \"$name\" is positive.');\n        }\n      }\n      verify(axis != null, 'The \"axis\" is null.');\n      verify(growthDirection != null, 'The \"growthDirection\" is null.');\n      verifyDouble(scrollOffset, 'scrollOffset');\n      verifyDouble(overlap, 'overlap');\n      verifyDouble(crossAxisExtent, 'crossAxisExtent');\n      verifyDouble(scrollOffset, 'scrollOffset', mustBePositive: true);\n      verify(crossAxisDirection != null, 'The \"crossAxisDirection\" is null.');\n      verify(axisDirectionToAxis(axisDirection) != axisDirectionToAxis(crossAxisDirection), 'The \"axisDirection\" and the \"crossAxisDirection\" are along the same axis.');\n      verifyDouble(viewportMainAxisExtent, 'viewportMainAxisExtent', mustBePositive: true);\n      verifyDouble(remainingPaintExtent, 'remainingPaintExtent', mustBePositive: true);\n      verifyDouble(remainingCacheExtent, 'remainingCacheExtent', mustBePositive: true);\n      verifyDouble(cacheOrigin, 'cacheOrigin', mustBeNegative: true);\n      verifyDouble(precedingScrollExtent, 'precedingScrollExtent', mustBePositive: true);\n      verify(isNormalized, 'The constraints are not normalized.'); // should be redundant with earlier checks\n      if (hasErrors) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType is not valid: $errorMessage'),\n          if (informationCollector != null)\n            ...informationCollector(),\n          DiagnosticsProperty<SliverConstraints>('The offending constraints were', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      return true;\n    }()");
      return true;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!sliver$.SliverConstraints.is(other)) return false;
      if (!(sliver$.SliverConstraints.is(other) && dart.test(other.debugAssertIsValid()))) dart.assertFailed(null, L0, 469, 12, "other is SliverConstraints && other.debugAssertIsValid()");
      return sliver$.SliverConstraints.is(other) && dart.equals(other.axisDirection, this.axisDirection) && dart.equals(other.growthDirection, this.growthDirection) && other.scrollOffset == this.scrollOffset && other.overlap == this.overlap && other.remainingPaintExtent == this.remainingPaintExtent && other.crossAxisExtent == this.crossAxisExtent && dart.equals(other.crossAxisDirection, this.crossAxisDirection) && other.viewportMainAxisExtent == this.viewportMainAxisExtent && other.remainingCacheExtent == this.remainingCacheExtent && other.cacheOrigin == this.cacheOrigin;
    }
    get hashCode() {
      return ui.hashValues(this.axisDirection, this.growthDirection, this.scrollOffset, this.overlap, this.remainingPaintExtent, this.crossAxisExtent, this.crossAxisDirection, this.viewportMainAxisExtent, this.remainingCacheExtent, this.cacheOrigin);
    }
    toString() {
      let properties = (() => {
        let t1 = JSArrayOfString().of([dart.str(this.axisDirection), dart.str(this.growthDirection), dart.str(this.userScrollDirection), "scrollOffset: " + this.scrollOffset[$toStringAsFixed](1), "remainingPaintExtent: " + this.remainingPaintExtent[$toStringAsFixed](1)]);
        if (this.overlap !== 0.0) t1.push("overlap: " + this.overlap[$toStringAsFixed](1));
        t1.push("crossAxisExtent: " + this.crossAxisExtent[$toStringAsFixed](1));
        t1.push("crossAxisDirection: " + dart.str(this.crossAxisDirection));
        t1.push("viewportMainAxisExtent: " + this.viewportMainAxisExtent[$toStringAsFixed](1));
        t1.push("remainingCacheExtent: " + this.remainingCacheExtent[$toStringAsFixed](1));
        t1.push("cacheOrigin: " + this.cacheOrigin[$toStringAsFixed](1));
        return t1;
      })();
      return "SliverConstraints(" + dart.str(properties[$join](", ")) + ")";
    }
  };
  (sliver$.SliverConstraints.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    if (axisDirection == null) dart.nullFailed(L0, 96, 19, "axisDirection");
    let growthDirection = opts && 'growthDirection' in opts ? opts.growthDirection : null;
    if (growthDirection == null) dart.nullFailed(L0, 97, 19, "growthDirection");
    let userScrollDirection = opts && 'userScrollDirection' in opts ? opts.userScrollDirection : null;
    if (userScrollDirection == null) dart.nullFailed(L0, 98, 19, "userScrollDirection");
    let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
    if (scrollOffset == null) dart.nullFailed(L0, 99, 19, "scrollOffset");
    let precedingScrollExtent = opts && 'precedingScrollExtent' in opts ? opts.precedingScrollExtent : null;
    if (precedingScrollExtent == null) dart.nullFailed(L0, 100, 19, "precedingScrollExtent");
    let overlap = opts && 'overlap' in opts ? opts.overlap : null;
    if (overlap == null) dart.nullFailed(L0, 101, 19, "overlap");
    let remainingPaintExtent = opts && 'remainingPaintExtent' in opts ? opts.remainingPaintExtent : null;
    if (remainingPaintExtent == null) dart.nullFailed(L0, 102, 19, "remainingPaintExtent");
    let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
    if (crossAxisExtent == null) dart.nullFailed(L0, 103, 19, "crossAxisExtent");
    let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
    if (crossAxisDirection == null) dart.nullFailed(L0, 104, 19, "crossAxisDirection");
    let viewportMainAxisExtent = opts && 'viewportMainAxisExtent' in opts ? opts.viewportMainAxisExtent : null;
    if (viewportMainAxisExtent == null) dart.nullFailed(L0, 105, 19, "viewportMainAxisExtent");
    let remainingCacheExtent = opts && 'remainingCacheExtent' in opts ? opts.remainingCacheExtent : null;
    if (remainingCacheExtent == null) dart.nullFailed(L0, 106, 19, "remainingCacheExtent");
    let cacheOrigin = opts && 'cacheOrigin' in opts ? opts.cacheOrigin : null;
    if (cacheOrigin == null) dart.nullFailed(L0, 107, 19, "cacheOrigin");
    this[axisDirection$] = axisDirection;
    this[growthDirection$] = growthDirection;
    this[userScrollDirection$] = userScrollDirection;
    this[scrollOffset$] = scrollOffset;
    this[precedingScrollExtent$] = precedingScrollExtent;
    this[overlap$] = overlap;
    this[remainingPaintExtent$] = remainingPaintExtent;
    this[crossAxisExtent$] = crossAxisExtent;
    this[crossAxisDirection$] = crossAxisDirection;
    this[viewportMainAxisExtent$] = viewportMainAxisExtent;
    this[remainingCacheExtent$] = remainingCacheExtent;
    this[cacheOrigin$] = cacheOrigin;
    if (!(axisDirection != null)) dart.assertFailed(null, L0, 108, 15, "axisDirection != null");
    if (!(growthDirection != null)) dart.assertFailed(null, L0, 109, 15, "growthDirection != null");
    if (!(userScrollDirection != null)) dart.assertFailed(null, L0, 110, 15, "userScrollDirection != null");
    if (!(scrollOffset != null)) dart.assertFailed(null, L0, 111, 15, "scrollOffset != null");
    if (!(precedingScrollExtent != null)) dart.assertFailed(null, L0, 112, 15, "precedingScrollExtent != null");
    if (!(overlap != null)) dart.assertFailed(null, L0, 113, 15, "overlap != null");
    if (!(remainingPaintExtent != null)) dart.assertFailed(null, L0, 114, 15, "remainingPaintExtent != null");
    if (!(crossAxisExtent != null)) dart.assertFailed(null, L0, 115, 15, "crossAxisExtent != null");
    if (!(crossAxisDirection != null)) dart.assertFailed(null, L0, 116, 15, "crossAxisDirection != null");
    if (!(viewportMainAxisExtent != null)) dart.assertFailed(null, L0, 117, 15, "viewportMainAxisExtent != null");
    if (!(remainingCacheExtent != null)) dart.assertFailed(null, L0, 118, 15, "remainingCacheExtent != null");
    if (!(cacheOrigin != null)) dart.assertFailed(null, L0, 119, 15, "cacheOrigin != null");
    sliver$.SliverConstraints.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverConstraints.prototype;
  dart.addTypeTests(sliver$.SliverConstraints);
  dart.addTypeCaches(sliver$.SliverConstraints);
  dart.setMethodSignature(sliver$.SliverConstraints, () => ({
    __proto__: dart.getMethods(sliver$.SliverConstraints.__proto__),
    copyWith: dart.fnType(sliver$.SliverConstraints, [], {axisDirection: dart.nullable(basic_types.AxisDirection), cacheOrigin: dart.nullable(core.double), crossAxisDirection: dart.nullable(basic_types.AxisDirection), crossAxisExtent: dart.nullable(core.double), growthDirection: dart.nullable(sliver$.GrowthDirection), overlap: dart.nullable(core.double), precedingScrollExtent: dart.nullable(core.double), remainingCacheExtent: dart.nullable(core.double), remainingPaintExtent: dart.nullable(core.double), scrollOffset: dart.nullable(core.double), userScrollDirection: dart.nullable(viewport_offset.ScrollDirection), viewportMainAxisExtent: dart.nullable(core.double)}, {}),
    asBoxConstraints: dart.fnType(box.BoxConstraints, [], {crossAxisExtent: dart.nullable(core.double), maxExtent: core.double, minExtent: core.double}, {})
  }));
  dart.setGetterSignature(sliver$.SliverConstraints, () => ({
    __proto__: dart.getGetters(sliver$.SliverConstraints.__proto__),
    axis: basic_types.Axis,
    normalizedGrowthDirection: sliver$.GrowthDirection,
    isTight: core.bool,
    isNormalized: core.bool
  }));
  dart.setLibraryUri(sliver$.SliverConstraints, L1);
  dart.setFieldSignature(sliver$.SliverConstraints, () => ({
    __proto__: dart.getFields(sliver$.SliverConstraints.__proto__),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection),
    growthDirection: dart.finalFieldType(sliver$.GrowthDirection),
    userScrollDirection: dart.finalFieldType(viewport_offset.ScrollDirection),
    scrollOffset: dart.finalFieldType(core.double),
    precedingScrollExtent: dart.finalFieldType(core.double),
    overlap: dart.finalFieldType(core.double),
    remainingPaintExtent: dart.finalFieldType(core.double),
    crossAxisExtent: dart.finalFieldType(core.double),
    crossAxisDirection: dart.finalFieldType(basic_types.AxisDirection),
    viewportMainAxisExtent: dart.finalFieldType(core.double),
    cacheOrigin: dart.finalFieldType(core.double),
    remainingCacheExtent: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(sliver$.SliverConstraints, ['_equals', 'toString']);
  dart.defineExtensionAccessors(sliver$.SliverConstraints, ['hashCode']);
  var scrollExtent$ = dart.privateName(sliver$, "SliverGeometry.scrollExtent");
  var paintOrigin$ = dart.privateName(sliver$, "SliverGeometry.paintOrigin");
  var paintExtent$ = dart.privateName(sliver$, "SliverGeometry.paintExtent");
  var layoutExtent$ = dart.privateName(sliver$, "SliverGeometry.layoutExtent");
  var maxPaintExtent$ = dart.privateName(sliver$, "SliverGeometry.maxPaintExtent");
  var maxScrollObstructionExtent$ = dart.privateName(sliver$, "SliverGeometry.maxScrollObstructionExtent");
  var hitTestExtent$ = dart.privateName(sliver$, "SliverGeometry.hitTestExtent");
  var visible$ = dart.privateName(sliver$, "SliverGeometry.visible");
  var hasVisualOverflow$ = dart.privateName(sliver$, "SliverGeometry.hasVisualOverflow");
  var scrollOffsetCorrection$ = dart.privateName(sliver$, "SliverGeometry.scrollOffsetCorrection");
  var cacheExtent$ = dart.privateName(sliver$, "SliverGeometry.cacheExtent");
  var C9;
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  sliver$.SliverGeometry = class SliverGeometry extends Object_Diagnosticable$36 {
    get scrollExtent() {
      return this[scrollExtent$];
    }
    set scrollExtent(value) {
      super.scrollExtent = value;
    }
    get paintOrigin() {
      return this[paintOrigin$];
    }
    set paintOrigin(value) {
      super.paintOrigin = value;
    }
    get paintExtent() {
      return this[paintExtent$];
    }
    set paintExtent(value) {
      super.paintExtent = value;
    }
    get layoutExtent() {
      return this[layoutExtent$];
    }
    set layoutExtent(value) {
      super.layoutExtent = value;
    }
    get maxPaintExtent() {
      return this[maxPaintExtent$];
    }
    set maxPaintExtent(value) {
      super.maxPaintExtent = value;
    }
    get maxScrollObstructionExtent() {
      return this[maxScrollObstructionExtent$];
    }
    set maxScrollObstructionExtent(value) {
      super.maxScrollObstructionExtent = value;
    }
    get hitTestExtent() {
      return this[hitTestExtent$];
    }
    set hitTestExtent(value) {
      super.hitTestExtent = value;
    }
    get visible() {
      return this[visible$];
    }
    set visible(value) {
      super.visible = value;
    }
    get hasVisualOverflow() {
      return this[hasVisualOverflow$];
    }
    set hasVisualOverflow(value) {
      super.hasVisualOverflow = value;
    }
    get scrollOffsetCorrection() {
      return this[scrollOffsetCorrection$];
    }
    set scrollOffsetCorrection(value) {
      super.scrollOffsetCorrection = value;
    }
    get cacheExtent() {
      return this[cacheExtent$];
    }
    set cacheExtent(value) {
      super.cacheExtent = value;
    }
    debugAssertIsValid(opts) {
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.test(dart.fn(() => {
        let t4;
        const verify = (check, summary, opts) => {
          if (check == null) dart.nullFailed(L0, 710, 24, "check");
          if (summary == null) dart.nullFailed(L0, 710, 38, "summary");
          let details = opts && 'details' in opts ? opts.details : null;
          if (dart.test(check)) return;
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t2 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(object$.objectRuntimeType(this, "SliverGeometry")) + " is not valid: " + dart.str(summary))]);
            let t3 = details;
            if (t3 != null) t2[$addAll](t3);
            if (informationCollector != null) t2[$addAll](informationCollector());
            return t2;
          })()));
        };
        dart.fn(verify, boolAndString__Tovoid());
        verify(this.scrollExtent != null, "The \"scrollExtent\" is null.");
        verify(dart.notNull(this.scrollExtent) >= 0.0, "The \"scrollExtent\" is negative.");
        verify(this.paintExtent != null, "The \"paintExtent\" is null.");
        verify(dart.notNull(this.paintExtent) >= 0.0, "The \"paintExtent\" is negative.");
        verify(this.paintOrigin != null, "The \"paintOrigin\" is null.");
        verify(this.layoutExtent != null, "The \"layoutExtent\" is null.");
        verify(dart.notNull(this.layoutExtent) >= 0.0, "The \"layoutExtent\" is negative.");
        verify(dart.notNull(this.cacheExtent) >= 0.0, "The \"cacheExtent\" is negative.");
        if (dart.notNull(this.layoutExtent) > dart.notNull(this.paintExtent)) {
          verify(false, "The \"layoutExtent\" exceeds the \"paintExtent\".", {details: sliver$._debugCompareFloats("paintExtent", this.paintExtent, "layoutExtent", this.layoutExtent)});
        }
        verify(this.maxPaintExtent != null, "The \"maxPaintExtent\" is null.");
        if (dart.notNull(this.paintExtent) - dart.notNull(this.maxPaintExtent) > 1e-10) {
          verify(false, "The \"maxPaintExtent\" is less than the \"paintExtent\".", {details: (t4 = sliver$._debugCompareFloats("maxPaintExtent", this.maxPaintExtent, "paintExtent", this.paintExtent), (() => {
              t4[$add](new assertions.ErrorDescription.new("By definition, a sliver can't paint more than the maximum that it can paint!"));
              return t4;
            })())});
        }
        verify(this.hitTestExtent != null, "The \"hitTestExtent\" is null.");
        verify(dart.notNull(this.hitTestExtent) >= 0.0, "The \"hitTestExtent\" is negative.");
        verify(this.visible != null, "The \"visible\" property is null.");
        verify(this.hasVisualOverflow != null, "The \"hasVisualOverflow\" is null.");
        verify(this.scrollOffsetCorrection !== 0.0, "The \"scrollOffsetCorrection\" is zero.");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 709, 12, "() {\n      void verify(bool check, String summary, {List<DiagnosticsNode>? details}) {\n        if (check)\n          return;\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('${objectRuntimeType(this, 'SliverGeometry')} is not valid: $summary'),\n          ...?details,\n          if (informationCollector != null)\n            ...informationCollector(),\n        ]);\n      }\n\n      verify(scrollExtent != null, 'The \"scrollExtent\" is null.');\n      verify(scrollExtent >= 0.0, 'The \"scrollExtent\" is negative.');\n      verify(paintExtent != null, 'The \"paintExtent\" is null.');\n      verify(paintExtent >= 0.0, 'The \"paintExtent\" is negative.');\n      verify(paintOrigin != null, 'The \"paintOrigin\" is null.');\n      verify(layoutExtent != null, 'The \"layoutExtent\" is null.');\n      verify(layoutExtent >= 0.0, 'The \"layoutExtent\" is negative.');\n      verify(cacheExtent >= 0.0, 'The \"cacheExtent\" is negative.');\n      if (layoutExtent > paintExtent) {\n        verify(false,\n          'The \"layoutExtent\" exceeds the \"paintExtent\".',\n          details: _debugCompareFloats('paintExtent', paintExtent, 'layoutExtent', layoutExtent),\n        );\n      }\n      verify(maxPaintExtent != null, 'The \"maxPaintExtent\" is null.');\n      // If the paintExtent is slightly more than the maxPaintExtent, but the difference is still less\n      // than precisionErrorTolerance, we will not throw the assert below.\n      if (paintExtent - maxPaintExtent > precisionErrorTolerance) {\n        verify(false,\n          'The \"maxPaintExtent\" is less than the \"paintExtent\".',\n          details:\n            _debugCompareFloats('maxPaintExtent', maxPaintExtent, 'paintExtent', paintExtent)\n              ..add(ErrorDescription(\"By definition, a sliver can't paint more than the maximum that it can paint!\")),\n        );\n      }\n      verify(hitTestExtent != null, 'The \"hitTestExtent\" is null.');\n      verify(hitTestExtent >= 0.0, 'The \"hitTestExtent\" is negative.');\n      verify(visible != null, 'The \"visible\" property is null.');\n      verify(hasVisualOverflow != null, 'The \"hasVisualOverflow\" is null.');\n      verify(scrollOffsetCorrection != 0.0, 'The \"scrollOffsetCorrection\" is zero.');\n      return true;\n    }()");
      return true;
    }
    toStringShort() {
      return object$.objectRuntimeType(this, "SliverGeometry");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 760, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("scrollExtent", this.scrollExtent));
      if (dart.notNull(this.paintExtent) > 0.0) {
        properties.add(new diagnostics.DoubleProperty.new("paintExtent", this.paintExtent, {unit: dart.test(this.visible) ? null : " but not painting"}));
      } else if (this.paintExtent === 0.0) {
        if (dart.test(this.visible)) {
          properties.add(new diagnostics.DoubleProperty.new("paintExtent", this.paintExtent, {unit: dart.test(this.visible) ? null : " but visible"}));
        }
        properties.add(new diagnostics.FlagProperty.new("visible", {value: this.visible, ifFalse: "hidden"}));
      } else {
        properties.add(new diagnostics.DoubleProperty.new("paintExtent", this.paintExtent, {tooltip: "!"}));
      }
      properties.add(new diagnostics.DoubleProperty.new("paintOrigin", this.paintOrigin, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("layoutExtent", this.layoutExtent, {defaultValue: this.paintExtent}));
      properties.add(new diagnostics.DoubleProperty.new("maxPaintExtent", this.maxPaintExtent));
      properties.add(new diagnostics.DoubleProperty.new("hitTestExtent", this.hitTestExtent, {defaultValue: this.paintExtent}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("hasVisualOverflow", this.hasVisualOverflow, {defaultValue: false}));
      properties.add(new diagnostics.DoubleProperty.new("scrollOffsetCorrection", this.scrollOffsetCorrection, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("cacheExtent", this.cacheExtent, {defaultValue: 0.0}));
    }
  };
  (sliver$.SliverGeometry.new = function(opts) {
    let t2, t2$, t2$0, t2$1, t2$2;
    let scrollExtent = opts && 'scrollExtent' in opts ? opts.scrollExtent : 0;
    if (scrollExtent == null) dart.nullFailed(L0, 533, 10, "scrollExtent");
    let paintExtent = opts && 'paintExtent' in opts ? opts.paintExtent : 0;
    if (paintExtent == null) dart.nullFailed(L0, 534, 10, "paintExtent");
    let paintOrigin = opts && 'paintOrigin' in opts ? opts.paintOrigin : 0;
    if (paintOrigin == null) dart.nullFailed(L0, 535, 10, "paintOrigin");
    let layoutExtent = opts && 'layoutExtent' in opts ? opts.layoutExtent : null;
    let maxPaintExtent = opts && 'maxPaintExtent' in opts ? opts.maxPaintExtent : 0;
    if (maxPaintExtent == null) dart.nullFailed(L0, 537, 10, "maxPaintExtent");
    let maxScrollObstructionExtent = opts && 'maxScrollObstructionExtent' in opts ? opts.maxScrollObstructionExtent : 0;
    if (maxScrollObstructionExtent == null) dart.nullFailed(L0, 538, 10, "maxScrollObstructionExtent");
    let hitTestExtent = opts && 'hitTestExtent' in opts ? opts.hitTestExtent : null;
    let visible = opts && 'visible' in opts ? opts.visible : null;
    let hasVisualOverflow = opts && 'hasVisualOverflow' in opts ? opts.hasVisualOverflow : false;
    if (hasVisualOverflow == null) dart.nullFailed(L0, 541, 10, "hasVisualOverflow");
    let scrollOffsetCorrection = opts && 'scrollOffsetCorrection' in opts ? opts.scrollOffsetCorrection : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    this[scrollExtent$] = scrollExtent;
    this[paintExtent$] = paintExtent;
    this[paintOrigin$] = paintOrigin;
    this[maxPaintExtent$] = maxPaintExtent;
    this[maxScrollObstructionExtent$] = maxScrollObstructionExtent;
    this[hasVisualOverflow$] = hasVisualOverflow;
    this[scrollOffsetCorrection$] = scrollOffsetCorrection;
    if (!(scrollExtent != null)) dart.assertFailed(null, L0, 544, 15, "scrollExtent != null");
    if (!(paintExtent != null)) dart.assertFailed(null, L0, 545, 15, "paintExtent != null");
    if (!(paintOrigin != null)) dart.assertFailed(null, L0, 546, 15, "paintOrigin != null");
    if (!(maxPaintExtent != null)) dart.assertFailed(null, L0, 547, 15, "maxPaintExtent != null");
    if (!(hasVisualOverflow != null)) dart.assertFailed(null, L0, 548, 15, "hasVisualOverflow != null");
    if (!(scrollOffsetCorrection !== 0.0)) dart.assertFailed(null, L0, 549, 15, "scrollOffsetCorrection != 0.0");
    this[layoutExtent$] = (t2 = layoutExtent, t2 == null ? paintExtent : t2);
    this[hitTestExtent$] = (t2$ = hitTestExtent, t2$ == null ? paintExtent : t2$);
    this[cacheExtent$] = (t2$1 = (t2$0 = cacheExtent, t2$0 == null ? layoutExtent : t2$0), t2$1 == null ? paintExtent : t2$1);
    this[visible$] = (t2$2 = visible, t2$2 == null ? dart.notNull(paintExtent) > 0.0 : t2$2);
    ;
  }).prototype = sliver$.SliverGeometry.prototype;
  dart.addTypeTests(sliver$.SliverGeometry);
  dart.addTypeCaches(sliver$.SliverGeometry);
  dart.setMethodSignature(sliver$.SliverGeometry, () => ({
    __proto__: dart.getMethods(sliver$.SliverGeometry.__proto__),
    debugAssertIsValid: dart.fnType(core.bool, [], {informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), []))}, {})
  }));
  dart.setLibraryUri(sliver$.SliverGeometry, L1);
  dart.setFieldSignature(sliver$.SliverGeometry, () => ({
    __proto__: dart.getFields(sliver$.SliverGeometry.__proto__),
    scrollExtent: dart.finalFieldType(core.double),
    paintOrigin: dart.finalFieldType(core.double),
    paintExtent: dart.finalFieldType(core.double),
    layoutExtent: dart.finalFieldType(core.double),
    maxPaintExtent: dart.finalFieldType(core.double),
    maxScrollObstructionExtent: dart.finalFieldType(core.double),
    hitTestExtent: dart.finalFieldType(core.double),
    visible: dart.finalFieldType(core.bool),
    hasVisualOverflow: dart.finalFieldType(core.bool),
    scrollOffsetCorrection: dart.finalFieldType(dart.nullable(core.double)),
    cacheExtent: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(sliver$.SliverGeometry, {
    /*sliver$.SliverGeometry.zero*/get zero() {
      return C9 || CT.C9;
    }
  }, false);
  sliver$.SliverHitTestResult = class SliverHitTestResult extends hit_test.HitTestResult {
    addWithAxisOffset(opts) {
      let paintOffset = opts && 'paintOffset' in opts ? opts.paintOffset : null;
      let mainAxisOffset = opts && 'mainAxisOffset' in opts ? opts.mainAxisOffset : null;
      if (mainAxisOffset == null) dart.nullFailed(L0, 845, 21, "mainAxisOffset");
      let crossAxisOffset = opts && 'crossAxisOffset' in opts ? opts.crossAxisOffset : null;
      if (crossAxisOffset == null) dart.nullFailed(L0, 846, 21, "crossAxisOffset");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 847, 21, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 848, 21, "crossAxisPosition");
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (hitTest == null) dart.nullFailed(L0, 849, 28, "hitTest");
      if (!(mainAxisOffset != null)) dart.assertFailed(null, L0, 851, 12, "mainAxisOffset != null");
      if (!(crossAxisOffset != null)) dart.assertFailed(null, L0, 852, 12, "crossAxisOffset != null");
      if (!(mainAxisPosition != null)) dart.assertFailed(null, L0, 853, 12, "mainAxisPosition != null");
      if (!(crossAxisPosition != null)) dart.assertFailed(null, L0, 854, 12, "crossAxisPosition != null");
      if (!(hitTest != null)) dart.assertFailed(null, L0, 855, 12, "hitTest != null");
      if (paintOffset != null) {
        this.pushOffset(paintOffset._negate());
      }
      let isHit = hitTest(this, {mainAxisPosition: dart.notNull(mainAxisPosition) - dart.notNull(mainAxisOffset), crossAxisPosition: dart.notNull(crossAxisPosition) - dart.notNull(crossAxisOffset)});
      if (paintOffset != null) {
        this.popTransform();
      }
      return isHit;
    }
  };
  (sliver$.SliverHitTestResult.new = function() {
    sliver$.SliverHitTestResult.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverHitTestResult.prototype;
  (sliver$.SliverHitTestResult.wrap = function(result) {
    if (result == null) dart.nullFailed(L0, 821, 42, "result");
    sliver$.SliverHitTestResult.__proto__.wrap.call(this, result);
    ;
  }).prototype = sliver$.SliverHitTestResult.prototype;
  dart.addTypeTests(sliver$.SliverHitTestResult);
  dart.addTypeCaches(sliver$.SliverHitTestResult);
  dart.setMethodSignature(sliver$.SliverHitTestResult, () => ({
    __proto__: dart.getMethods(sliver$.SliverHitTestResult.__proto__),
    addWithAxisOffset: dart.fnType(core.bool, [], {}, {crossAxisOffset: core.double, crossAxisPosition: core.double, hitTest: dart.fnType(core.bool, [sliver$.SliverHitTestResult], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}), mainAxisOffset: core.double, mainAxisPosition: core.double, paintOffset: dart.nullable(ui.Offset)})
  }));
  dart.setLibraryUri(sliver$.SliverHitTestResult, L1);
  var mainAxisPosition$ = dart.privateName(sliver$, "SliverHitTestEntry.mainAxisPosition");
  var crossAxisPosition$ = dart.privateName(sliver$, "SliverHitTestEntry.crossAxisPosition");
  sliver$.SliverHitTestEntry = class SliverHitTestEntry extends hit_test.HitTestEntry {
    get mainAxisPosition() {
      return this[mainAxisPosition$];
    }
    set mainAxisPosition(value) {
      super.mainAxisPosition = value;
    }
    get crossAxisPosition() {
      return this[crossAxisPosition$];
    }
    set crossAxisPosition(value) {
      super.crossAxisPosition = value;
    }
    get target() {
      return sliver$.RenderSliver.as(super.target);
    }
    toString() {
      return dart.str(dart.runtimeType(this.target)) + "@(mainAxis: " + dart.str(this.mainAxisPosition) + ", crossAxis: " + dart.str(this.crossAxisPosition) + ")";
    }
  };
  (sliver$.SliverHitTestEntry.new = function(target, opts) {
    if (target == null) dart.nullFailed(L0, 880, 18, "target");
    let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
    if (mainAxisPosition == null) dart.nullFailed(L0, 881, 19, "mainAxisPosition");
    let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
    if (crossAxisPosition == null) dart.nullFailed(L0, 882, 19, "crossAxisPosition");
    this[mainAxisPosition$] = mainAxisPosition;
    this[crossAxisPosition$] = crossAxisPosition;
    if (!(mainAxisPosition != null)) dart.assertFailed(null, L0, 883, 15, "mainAxisPosition != null");
    if (!(crossAxisPosition != null)) dart.assertFailed(null, L0, 884, 15, "crossAxisPosition != null");
    sliver$.SliverHitTestEntry.__proto__.new.call(this, target);
    ;
  }).prototype = sliver$.SliverHitTestEntry.prototype;
  dart.addTypeTests(sliver$.SliverHitTestEntry);
  dart.addTypeCaches(sliver$.SliverHitTestEntry);
  dart.setGetterSignature(sliver$.SliverHitTestEntry, () => ({
    __proto__: dart.getGetters(sliver$.SliverHitTestEntry.__proto__),
    target: sliver$.RenderSliver
  }));
  dart.setLibraryUri(sliver$.SliverHitTestEntry, L1);
  dart.setFieldSignature(sliver$.SliverHitTestEntry, () => ({
    __proto__: dart.getFields(sliver$.SliverHitTestEntry.__proto__),
    mainAxisPosition: dart.finalFieldType(core.double),
    crossAxisPosition: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(sliver$.SliverHitTestEntry, ['toString']);
  var layoutOffset = dart.privateName(sliver$, "SliverLogicalParentData.layoutOffset");
  sliver$.SliverLogicalParentData = class SliverLogicalParentData extends object.ParentData {
    get layoutOffset() {
      return this[layoutOffset];
    }
    set layoutOffset(value) {
      this[layoutOffset] = value;
    }
    toString() {
      return "layoutOffset=" + (this.layoutOffset == null ? "None" : dart.nullCheck(this.layoutOffset)[$toStringAsFixed](1));
    }
  };
  (sliver$.SliverLogicalParentData.new = function() {
    this[layoutOffset] = null;
    ;
  }).prototype = sliver$.SliverLogicalParentData.prototype;
  dart.addTypeTests(sliver$.SliverLogicalParentData);
  dart.addTypeCaches(sliver$.SliverLogicalParentData);
  dart.setLibraryUri(sliver$.SliverLogicalParentData, L1);
  dart.setFieldSignature(sliver$.SliverLogicalParentData, () => ({
    __proto__: dart.getFields(sliver$.SliverLogicalParentData.__proto__),
    layoutOffset: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(sliver$.SliverLogicalParentData, ['toString']);
  var _geometry = dart.privateName(sliver$, "_geometry");
  var _debugDrawArrow = dart.privateName(sliver$, "_debugDrawArrow");
  var Color_value = dart.privateName(ui, "Color.value");
  var C10;
  sliver$.RenderSliver = class RenderSliver extends object.RenderObject {
    get constraints() {
      return sliver$.SliverConstraints.as(super.constraints);
    }
    get geometry() {
      return this[_geometry];
    }
    set geometry(value) {
      if (!!(dart.test(this.debugDoingThisResize) && dart.test(this.debugDoingThisLayout))) dart.assertFailed(null, L0, 1147, 12, "!(debugDoingThisResize && debugDoingThisLayout)");
      if (!(dart.test(this.sizedByParent) || !dart.test(this.debugDoingThisResize))) dart.assertFailed(null, L0, 1148, 12, "sizedByParent || !debugDoingThisResize");
      if (!dart.test(dart.fn(() => {
        if (dart.test(this.sizedByParent) && dart.test(this.debugDoingThisResize) || !dart.test(this.sizedByParent) && dart.test(this.debugDoingThisLayout)) return true;
        if (!!dart.test(this.debugDoingThisResize)) dart.assertFailed(null, L0, 1153, 14, "!debugDoingThisResize");
        let contract = null;
        let violation = null;
        let hint = null;
        if (dart.test(this.debugDoingThisLayout)) {
          if (!dart.test(this.sizedByParent)) dart.assertFailed(null, L0, 1156, 16, "sizedByParent");
          violation = new assertions.ErrorDescription.new("It appears that the geometry setter was called from performLayout().");
        } else {
          violation = new assertions.ErrorDescription.new("The geometry setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).");
          if (this.owner != null && dart.test(dart.nullCheck(this.owner).debugDoingLayout)) hint = new assertions.ErrorDescription.new("Only the object itself can set its geometry. It is a contract violation for other objects to set it.");
        }
        if (dart.test(this.sizedByParent))
          contract = new assertions.ErrorDescription.new("Because this RenderSliver has sizedByParent set to true, it must set its geometry in performResize().");
        else
          contract = new assertions.ErrorDescription.new("Because this RenderSliver has sizedByParent set to false, it must set its geometry in performLayout().");
        let information = (() => {
          let t4 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderSliver geometry setter called incorrectly."), violation]);
          if (hint != null) t4.push(hint);
          t4.push(contract);
          t4.push(this.describeForError("The RenderSliver in question is"));
          return t4;
        })();
        dart.throw(new assertions.FlutterError.fromParts(information));
      }, VoidTobool())())) dart.assertFailed(null, L0, 1149, 12, "() {\n      if ((sizedByParent && debugDoingThisResize) ||\n          (!sizedByParent && debugDoingThisLayout))\n        return true;\n      assert(!debugDoingThisResize);\n      DiagnosticsNode? contract, violation, hint;\n      if (debugDoingThisLayout) {\n        assert(sizedByParent);\n        violation = ErrorDescription('It appears that the geometry setter was called from performLayout().');\n      } else {\n        violation = ErrorDescription('The geometry setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).');\n        if (owner != null && owner!.debugDoingLayout)\n          hint = ErrorDescription('Only the object itself can set its geometry. It is a contract violation for other objects to set it.');\n      }\n      if (sizedByParent)\n        contract = ErrorDescription('Because this RenderSliver has sizedByParent set to true, it must set its geometry in performResize().');\n      else\n        contract = ErrorDescription('Because this RenderSliver has sizedByParent set to false, it must set its geometry in performLayout().');\n\n      final List<DiagnosticsNode> information = <DiagnosticsNode>[\n        ErrorSummary('RenderSliver geometry setter called incorrectly.'),\n        violation,\n        if (hint != null) hint,\n        contract,\n        describeForError('The RenderSliver in question is'),\n      ];\n      throw FlutterError.fromParts(information);\n    }()");
      this[_geometry] = value;
    }
    get semanticBounds() {
      return this.paintBounds;
    }
    get paintBounds() {
      if (!(this.constraints.axis != null)) dart.assertFailed(null, L0, 1185, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C7 || CT.C7:
        {
          return new ui.Rect.fromLTWH(0.0, 0.0, dart.nullCheck(this.geometry).paintExtent, this.constraints.crossAxisExtent);
        }
        case C8 || CT.C8:
        {
          return new ui.Rect.fromLTWH(0.0, 0.0, this.constraints.crossAxisExtent, dart.nullCheck(this.geometry).paintExtent);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    debugResetSize() {
    }
    debugAssertDoesMeetConstraints() {
      if (!dart.test(dart.nullCheck(this.geometry).debugAssertIsValid({informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
          yield this.describeForError("The RenderSliver that returned the offending geometry was");
        }).bind(this)), VoidToIterableOfDiagnosticsNode())}))) dart.assertFailed(null, L0, 1207, 12, "geometry!.debugAssertIsValid(\n      informationCollector: () sync* {\n        yield describeForError('The RenderSliver that returned the offending geometry was');\n      }\n    )");
      if (!dart.test(dart.fn(() => {
        if (dart.notNull(dart.nullCheck(this.geometry).paintOrigin) + dart.notNull(dart.nullCheck(this.geometry).paintExtent) > dart.notNull(this.constraints.remainingPaintExtent)) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t5 = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("SliverGeometry has a paintOffset that exceeds the remainingPaintExtent from the constraints."), this.describeForError("The render object whose geometry violates the constraints is the following")]);
            t5[$addAll](sliver$._debugCompareFloats("remainingPaintExtent", this.constraints.remainingPaintExtent, "paintOrigin + paintExtent", dart.notNull(dart.nullCheck(this.geometry).paintOrigin) + dart.notNull(dart.nullCheck(this.geometry).paintExtent)));
            t5.push(new assertions.ErrorDescription.new("The paintOrigin and paintExtent must cause the child sliver to paint " + "within the viewport, and so cannot exceed the remainingPaintExtent."));
            return t5;
          })()));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1212, 12, "() {\n      if (geometry!.paintOrigin + geometry!.paintExtent > constraints.remainingPaintExtent) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('SliverGeometry has a paintOffset that exceeds the remainingPaintExtent from the constraints.'),\n          describeForError('The render object whose geometry violates the constraints is the following'),\n          ..._debugCompareFloats(\n            'remainingPaintExtent', constraints.remainingPaintExtent,\n            'paintOrigin + paintExtent', geometry!.paintOrigin + geometry!.paintExtent,\n          ),\n          ErrorDescription(\n            'The paintOrigin and paintExtent must cause the child sliver to paint '\n            'within the viewport, and so cannot exceed the remainingPaintExtent.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
    }
    performResize() {
      if (!false) dart.assertFailed(null, L0, 1233, 12, "false");
    }
    get centerOffsetAdjustment() {
      return 0.0;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 1286, 36, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 1286, 62, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 1286, 96, "crossAxisPosition");
      if (dart.notNull(mainAxisPosition) >= 0.0 && dart.notNull(mainAxisPosition) < dart.notNull(dart.nullCheck(this.geometry).hitTestExtent) && dart.notNull(crossAxisPosition) >= 0.0 && dart.notNull(crossAxisPosition) < dart.notNull(this.constraints.crossAxisExtent)) {
        if (dart.test(this.hitTestChildren(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition})) || dart.test(this.hitTestSelf({mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}))) {
          result.add(new sliver$.SliverHitTestEntry.new(this, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}));
          return true;
        }
      }
      return false;
    }
    hitTestSelf(opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 1310, 38, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 1310, 72, "crossAxisPosition");
      return false;
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 1324, 44, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 1324, 70, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 1324, 104, "crossAxisPosition");
      return false;
    }
    calculatePaintOffset(constraints, opts) {
      if (constraints == null) dart.nullFailed(L0, 1343, 49, "constraints");
      let from = opts && 'from' in opts ? opts.from : null;
      if (from == null) dart.nullFailed(L0, 1343, 80, "from");
      let to = opts && 'to' in opts ? opts.to : null;
      if (to == null) dart.nullFailed(L0, 1343, 102, "to");
      if (!(dart.notNull(from) <= dart.notNull(to))) dart.assertFailed(null, L0, 1344, 12, "from <= to");
      let a = constraints.scrollOffset;
      let b = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.remainingPaintExtent);
      return (to[$clamp](a, b) - from[$clamp](a, b))[$clamp](0.0, constraints.remainingPaintExtent);
    }
    calculateCacheOffset(constraints, opts) {
      if (constraints == null) dart.nullFailed(L0, 1359, 49, "constraints");
      let from = opts && 'from' in opts ? opts.from : null;
      if (from == null) dart.nullFailed(L0, 1359, 80, "from");
      let to = opts && 'to' in opts ? opts.to : null;
      if (to == null) dart.nullFailed(L0, 1359, 102, "to");
      if (!(dart.notNull(from) <= dart.notNull(to))) dart.assertFailed(null, L0, 1360, 12, "from <= to");
      let a = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.cacheOrigin);
      let b = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.remainingCacheExtent);
      return (to[$clamp](a, b) - from[$clamp](a, b))[$clamp](0.0, constraints.remainingCacheExtent);
    }
    childMainAxisPosition(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 1394, 55, "child");
      if (!dart.dtest((dart.fn(() => {
        dart.throw(assertions.FlutterError.new(dart.str(object$.objectRuntimeType(this, "RenderSliver")) + " does not implement childPosition."));
      }, VoidToNever())(), dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."))))) dart.assertFailed(null, L0, 1395, 12, "() {\n      throw FlutterError('${objectRuntimeType(this, 'RenderSliver')} does not implement childPosition.');\n    }()");
      return 0.0;
    }
    childCrossAxisPosition(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 1415, 56, "child");
      return 0.0;
    }
    childScrollOffset(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 1425, 52, "child");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L0, 1426, 12, "child.parent == this");
      return 0.0;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 1431, 41, "child");
      if (transform == null) dart.nullFailed(L0, 1431, 56, "transform");
      if (!dart.dtest((dart.fn(() => {
        dart.throw(assertions.FlutterError.new(dart.str(object$.objectRuntimeType(this, "RenderSliver")) + " does not implement applyPaintTransform."));
      }, VoidToNever())(), dart.throw(new _internal.ReachabilityError.new("`null` encountered as the result from expression with type `Never`."))))) dart.assertFailed(null, L0, 1432, 12, "() {\n      throw FlutterError('${objectRuntimeType(this, 'RenderSliver')} does not implement applyPaintTransform.');\n    }()");
    }
    getAbsoluteSizeRelativeToOrigin() {
      if (!(this.geometry != null)) dart.assertFailed(null, L0, 1448, 12, "geometry != null");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 1449, 12, "!debugNeedsLayout");
      switch (sliver$.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C5 || CT.C5:
        {
          return new ui.Size.new(this.constraints.crossAxisExtent, -dart.notNull(dart.nullCheck(this.geometry).paintExtent));
        }
        case C4 || CT.C4:
        {
          return new ui.Size.new(dart.nullCheck(this.geometry).paintExtent, this.constraints.crossAxisExtent);
        }
        case C3 || CT.C3:
        {
          return new ui.Size.new(this.constraints.crossAxisExtent, dart.nullCheck(this.geometry).paintExtent);
        }
        case C6 || CT.C6:
        {
          return new ui.Size.new(-dart.notNull(dart.nullCheck(this.geometry).paintExtent), this.constraints.crossAxisExtent);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    getAbsoluteSize() {
      if (!(this.geometry != null)) dart.assertFailed(null, L0, 1473, 12, "geometry != null");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 1474, 12, "!debugNeedsLayout");
      switch (this.constraints.axisDirection) {
        case C5 || CT.C5:
        case C3 || CT.C3:
        {
          return new ui.Size.new(this.constraints.crossAxisExtent, dart.nullCheck(this.geometry).paintExtent);
        }
        case C4 || CT.C4:
        case C6 || CT.C6:
        {
          return new ui.Size.new(dart.nullCheck(this.geometry).paintExtent, this.constraints.crossAxisExtent);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_debugDrawArrow](canvas, paint, p0, p1, direction) {
      if (canvas == null) dart.nullFailed(L0, 1485, 31, "canvas");
      if (paint == null) dart.nullFailed(L0, 1485, 45, "paint");
      if (p0 == null) dart.nullFailed(L0, 1485, 59, "p0");
      if (p1 == null) dart.nullFailed(L0, 1485, 70, "p1");
      if (direction == null) dart.nullFailed(L0, 1485, 90, "direction");
      if (!dart.test(dart.fn(() => {
        let t6;
        if (dart.equals(p0, p1)) return true;
        if (!(p0.dx == p1.dx || p0.dy == p1.dy)) dart.assertFailed(null, L0, 1489, 14, "p0.dx == p1.dx || p0.dy == p1.dy");
        let d = dart.notNull(p1['-'](p0).distance) * 0.2;
        let temp = null;
        let dx1 = null;
        let dx2 = null;
        let dy1 = null;
        let dy2 = null;
        switch (direction) {
          case C0 || CT.C0:
          {
            dx1 = dx2 = dy1 = dy2 = d;
            break;
          }
          case C1 || CT.C1:
          {
            temp = p0;
            p0 = p1;
            p1 = temp;
            dx1 = dx2 = dy1 = dy2 = -d;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        if (p0.dx == p1.dx) {
          dx2 = -dart.notNull(dx2);
        } else {
          dy2 = -dart.notNull(dy2);
        }
        canvas.drawPath((t6 = ui.Path.new(), (() => {
          t6.moveTo(p0.dx, p0.dy);
          t6.lineTo(p1.dx, p1.dy);
          t6.moveTo(dart.notNull(p1.dx) - dart.notNull(dx1), dart.notNull(p1.dy) - dart.notNull(dy1));
          t6.lineTo(p1.dx, p1.dy);
          t6.lineTo(dart.notNull(p1.dx) - dart.notNull(dx2), dart.notNull(p1.dy) - dart.notNull(dy2));
          return t6;
        })()), paint);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1486, 12, "() {\n      if (p0 == p1)\n        return true;\n      assert(p0.dx == p1.dx || p0.dy == p1.dy); // must be axis-aligned\n      final double d = (p1 - p0).distance * 0.2;\n      final Offset temp;\n      double dx1, dx2, dy1, dy2;\n      switch (direction) {\n        case GrowthDirection.forward:\n          dx1 = dx2 = dy1 = dy2 = d;\n          break;\n        case GrowthDirection.reverse:\n          temp = p0;\n          p0 = p1;\n          p1 = temp;\n          dx1 = dx2 = dy1 = dy2 = -d;\n          break;\n      }\n      if (p0.dx == p1.dx) {\n        dx2 = -dx2;\n      } else {\n        dy2 = -dy2;\n      }\n      canvas.drawPath(\n        Path()\n          ..moveTo(p0.dx, p0.dy)\n          ..lineTo(p1.dx, p1.dy)\n          ..moveTo(p1.dx - dx1, p1.dy - dy1)\n          ..lineTo(p1.dx, p1.dy)\n          ..lineTo(p1.dx - dx2, p1.dy - dy2),\n        paint,\n      );\n      return true;\n    }()");
    }
    debugPaint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1523, 35, "context");
      if (offset == null) dart.nullFailed(L0, 1523, 51, "offset");
      if (!dart.test(dart.fn(() => {
        let t6;
        if (dart.test(debug.debugPaintSizeEnabled)) {
          let strokeWidth = math.min(core.double, 4.0, dart.notNull(dart.nullCheck(this.geometry).paintExtent) / 30.0);
          let paint = (t6 = ui.Paint.new(), (() => {
            t6.color = C10 || CT.C10;
            t6.strokeWidth = strokeWidth;
            t6.style = ui.PaintingStyle.stroke;
            t6.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.solid, strokeWidth);
            return t6;
          })());
          let arrowExtent = dart.nullCheck(this.geometry).paintExtent;
          let padding = math.max(core.double, 2.0, strokeWidth);
          let canvas = context.canvas;
          canvas.drawCircle(offset.translate(padding, padding), padding * 0.5, paint);
          switch (this.constraints.axis) {
            case C8 || CT.C8:
            {
              canvas.drawLine(offset, offset.translate(this.constraints.crossAxisExtent, 0.0), paint);
              this[_debugDrawArrow](canvas, paint, offset.translate(dart.notNull(this.constraints.crossAxisExtent) * 1.0 / 4.0, padding), offset.translate(dart.notNull(this.constraints.crossAxisExtent) * 1.0 / 4.0, dart.notNull(arrowExtent) - padding), this.constraints.normalizedGrowthDirection);
              this[_debugDrawArrow](canvas, paint, offset.translate(dart.notNull(this.constraints.crossAxisExtent) * 3.0 / 4.0, padding), offset.translate(dart.notNull(this.constraints.crossAxisExtent) * 3.0 / 4.0, dart.notNull(arrowExtent) - padding), this.constraints.normalizedGrowthDirection);
              break;
            }
            case C7 || CT.C7:
            {
              canvas.drawLine(offset, offset.translate(0.0, this.constraints.crossAxisExtent), paint);
              this[_debugDrawArrow](canvas, paint, offset.translate(padding, dart.notNull(this.constraints.crossAxisExtent) * 1.0 / 4.0), offset.translate(dart.notNull(arrowExtent) - padding, dart.notNull(this.constraints.crossAxisExtent) * 1.0 / 4.0), this.constraints.normalizedGrowthDirection);
              this[_debugDrawArrow](canvas, paint, offset.translate(padding, dart.notNull(this.constraints.crossAxisExtent) * 3.0 / 4.0), offset.translate(dart.notNull(arrowExtent) - padding, dart.notNull(this.constraints.crossAxisExtent) * 3.0 / 4.0), this.constraints.normalizedGrowthDirection);
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1524, 12, "() {\n      if (debugPaintSizeEnabled) {\n        final double strokeWidth = math.min(4.0, geometry!.paintExtent / 30.0);\n        final Paint paint = Paint()\n          ..color = const Color(0xFF33CC33)\n          ..strokeWidth = strokeWidth\n          ..style = PaintingStyle.stroke\n          ..maskFilter = MaskFilter.blur(BlurStyle.solid, strokeWidth);\n        final double arrowExtent = geometry!.paintExtent;\n        final double padding = math.max(2.0, strokeWidth);\n        final Canvas canvas = context.canvas;\n        canvas.drawCircle(\n          offset.translate(padding, padding),\n          padding * 0.5,\n          paint,\n        );\n        switch (constraints.axis) {\n          case Axis.vertical:\n            canvas.drawLine(\n              offset,\n              offset.translate(constraints.crossAxisExtent, 0.0),\n              paint,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(constraints.crossAxisExtent * 1.0 / 4.0, padding),\n              offset.translate(constraints.crossAxisExtent * 1.0 / 4.0, arrowExtent - padding),\n              constraints.normalizedGrowthDirection,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(constraints.crossAxisExtent * 3.0 / 4.0, padding),\n              offset.translate(constraints.crossAxisExtent * 3.0 / 4.0, arrowExtent - padding),\n              constraints.normalizedGrowthDirection,\n            );\n            break;\n          case Axis.horizontal:\n            canvas.drawLine(\n              offset,\n              offset.translate(0.0, constraints.crossAxisExtent),\n              paint,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(padding, constraints.crossAxisExtent * 1.0 / 4.0),\n              offset.translate(arrowExtent - padding, constraints.crossAxisExtent * 1.0 / 4.0),\n              constraints.normalizedGrowthDirection,\n            );\n            _debugDrawArrow(\n              canvas,\n              paint,\n              offset.translate(padding, constraints.crossAxisExtent * 3.0 / 4.0),\n              offset.translate(arrowExtent - padding, constraints.crossAxisExtent * 3.0 / 4.0),\n              constraints.normalizedGrowthDirection,\n            );\n            break;\n        }\n      }\n      return true;\n    }()");
    }
    handleEvent(event, entry) {
      if (event == null) dart.nullFailed(L0, 1591, 33, "event");
      sliver$.SliverHitTestEntry.as(entry);
      if (entry == null) dart.nullFailed(L0, 1591, 59, "entry");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1594, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfSliverGeometry()).new("geometry", this.geometry));
    }
  };
  (sliver$.RenderSliver.new = function() {
    this[_geometry] = null;
    sliver$.RenderSliver.__proto__.new.call(this);
    ;
  }).prototype = sliver$.RenderSliver.prototype;
  dart.addTypeTests(sliver$.RenderSliver);
  dart.addTypeCaches(sliver$.RenderSliver);
  dart.setMethodSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliver.__proto__),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    performResize: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [sliver$.SliverHitTestResult], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    hitTestSelf: dart.fnType(core.bool, [], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    hitTestChildren: dart.fnType(core.bool, [sliver$.SliverHitTestResult], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    calculatePaintOffset: dart.fnType(core.double, [sliver$.SliverConstraints], {}, {from: core.double, to: core.double}),
    calculateCacheOffset: dart.fnType(core.double, [sliver$.SliverConstraints], {}, {from: core.double, to: core.double}),
    childMainAxisPosition: dart.fnType(core.double, [dart.nullable(core.Object)]),
    childCrossAxisPosition: dart.fnType(core.double, [dart.nullable(core.Object)]),
    childScrollOffset: dart.fnType(dart.nullable(core.double), [dart.nullable(core.Object)]),
    getAbsoluteSizeRelativeToOrigin: dart.fnType(ui.Size, []),
    getAbsoluteSize: dart.fnType(ui.Size, []),
    [_debugDrawArrow]: dart.fnType(dart.void, [ui.Canvas, ui.Paint, ui.Offset, ui.Offset, sliver$.GrowthDirection])
  }));
  dart.setGetterSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getGetters(sliver$.RenderSliver.__proto__),
    constraints: sliver$.SliverConstraints,
    geometry: dart.nullable(sliver$.SliverGeometry),
    semanticBounds: ui.Rect,
    paintBounds: ui.Rect,
    centerOffsetAdjustment: core.double
  }));
  dart.setSetterSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getSetters(sliver$.RenderSliver.__proto__),
    geometry: dart.nullable(sliver$.SliverGeometry)
  }));
  dart.setLibraryUri(sliver$.RenderSliver, L1);
  dart.setFieldSignature(sliver$.RenderSliver, () => ({
    __proto__: dart.getFields(sliver$.RenderSliver.__proto__),
    [_geometry]: dart.fieldType(dart.nullable(sliver$.SliverGeometry))
  }));
  const SliverLogicalParentData_ContainerParentDataMixin$36 = class SliverLogicalParentData_ContainerParentDataMixin extends sliver$.SliverLogicalParentData {};
  (SliverLogicalParentData_ContainerParentDataMixin$36.new = function() {
    object.ContainerParentDataMixin$(sliver$.RenderSliver)[dart.mixinNew].call(this);
    SliverLogicalParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverLogicalParentData_ContainerParentDataMixin$36.prototype;
  dart.applyMixin(SliverLogicalParentData_ContainerParentDataMixin$36, object.ContainerParentDataMixin$(sliver$.RenderSliver));
  sliver$.SliverLogicalContainerParentData = class SliverLogicalContainerParentData extends SliverLogicalParentData_ContainerParentDataMixin$36 {};
  (sliver$.SliverLogicalContainerParentData.new = function() {
    sliver$.SliverLogicalContainerParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverLogicalContainerParentData.prototype;
  dart.addTypeTests(sliver$.SliverLogicalContainerParentData);
  dart.addTypeCaches(sliver$.SliverLogicalContainerParentData);
  dart.setLibraryUri(sliver$.SliverLogicalContainerParentData, L1);
  var paintOffset = dart.privateName(sliver$, "SliverPhysicalParentData.paintOffset");
  sliver$.SliverPhysicalParentData = class SliverPhysicalParentData extends object.ParentData {
    get paintOffset() {
      return this[paintOffset];
    }
    set paintOffset(value) {
      this[paintOffset] = value;
    }
    applyPaintTransform(transform) {
      if (transform == null) dart.nullFailed(L0, 962, 36, "transform");
      transform.translate(this.paintOffset.dx, this.paintOffset.dy);
    }
    toString() {
      return "paintOffset=" + dart.str(this.paintOffset);
    }
  };
  (sliver$.SliverPhysicalParentData.new = function() {
    this[paintOffset] = ui.Offset.zero;
    ;
  }).prototype = sliver$.SliverPhysicalParentData.prototype;
  dart.addTypeTests(sliver$.SliverPhysicalParentData);
  dart.addTypeCaches(sliver$.SliverPhysicalParentData);
  dart.setMethodSignature(sliver$.SliverPhysicalParentData, () => ({
    __proto__: dart.getMethods(sliver$.SliverPhysicalParentData.__proto__),
    applyPaintTransform: dart.fnType(dart.void, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(sliver$.SliverPhysicalParentData, L1);
  dart.setFieldSignature(sliver$.SliverPhysicalParentData, () => ({
    __proto__: dart.getFields(sliver$.SliverPhysicalParentData.__proto__),
    paintOffset: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(sliver$.SliverPhysicalParentData, ['toString']);
  const SliverPhysicalParentData_ContainerParentDataMixin$36 = class SliverPhysicalParentData_ContainerParentDataMixin extends sliver$.SliverPhysicalParentData {};
  (SliverPhysicalParentData_ContainerParentDataMixin$36.new = function() {
    object.ContainerParentDataMixin$(sliver$.RenderSliver)[dart.mixinNew].call(this);
    SliverPhysicalParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverPhysicalParentData_ContainerParentDataMixin$36.prototype;
  dart.applyMixin(SliverPhysicalParentData_ContainerParentDataMixin$36, object.ContainerParentDataMixin$(sliver$.RenderSliver));
  sliver$.SliverPhysicalContainerParentData = class SliverPhysicalContainerParentData extends SliverPhysicalParentData_ContainerParentDataMixin$36 {};
  (sliver$.SliverPhysicalContainerParentData.new = function() {
    sliver$.SliverPhysicalContainerParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver$.SliverPhysicalContainerParentData.prototype;
  dart.addTypeTests(sliver$.SliverPhysicalContainerParentData);
  dart.addTypeCaches(sliver$.SliverPhysicalContainerParentData);
  dart.setLibraryUri(sliver$.SliverPhysicalContainerParentData, L1);
  var _getRightWayUp = dart.privateName(sliver$, "_getRightWayUp");
  sliver$.RenderSliverHelpers = class RenderSliverHelpers extends core.Object {
    [_getRightWayUp](constraints) {
      if (constraints == null) dart.nullFailed(L0, 1603, 41, "constraints");
      if (!(constraints != null)) dart.assertFailed(null, L0, 1604, 12, "constraints != null");
      if (!(constraints.axisDirection != null)) dart.assertFailed(null, L0, 1605, 12, "constraints.axisDirection != null");
      let rightWayUp = null;
      switch (constraints.axisDirection) {
        case C5 || CT.C5:
        case C6 || CT.C6:
        {
          rightWayUp = false;
          break;
        }
        case C3 || CT.C3:
        case C4 || CT.C4:
        {
          rightWayUp = true;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(constraints.growthDirection != null)) dart.assertFailed(null, L0, 1617, 12, "constraints.growthDirection != null");
      switch (constraints.growthDirection) {
        case C0 || CT.C0:
        {
          break;
        }
        case C1 || CT.C1:
        {
          rightWayUp = !dart.test(rightWayUp);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(rightWayUp != null)) dart.assertFailed(null, L0, 1625, 12, "rightWayUp != null");
      return rightWayUp;
    }
    hitTestBoxChild(result, child, opts) {
      if (result == null) dart.nullFailed(L0, 1640, 41, "result");
      if (child == null) dart.nullFailed(L0, 1640, 59, "child");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 1640, 84, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 1640, 118, "crossAxisPosition");
      let rightWayUp = this[_getRightWayUp](this.constraints);
      let delta = this.childMainAxisPosition(child);
      let crossAxisDelta = this.childCrossAxisPosition(child);
      let absolutePosition = dart.notNull(mainAxisPosition) - dart.notNull(delta);
      let absoluteCrossAxisPosition = dart.notNull(crossAxisPosition) - dart.notNull(crossAxisDelta);
      let paintOffset = null;
      let transformedPosition = null;
      if (!(this.constraints.axis != null)) dart.assertFailed(null, L0, 1647, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C7 || CT.C7:
        {
          if (!dart.test(rightWayUp)) {
            absolutePosition = dart.notNull(child.size.width) - absolutePosition;
            delta = dart.notNull(dart.nullCheck(this.geometry).paintExtent) - dart.notNull(child.size.width) - dart.notNull(delta);
          }
          paintOffset = new ui.Offset.new(delta, crossAxisDelta);
          transformedPosition = new ui.Offset.new(absolutePosition, absoluteCrossAxisPosition);
          break;
        }
        case C8 || CT.C8:
        {
          if (!dart.test(rightWayUp)) {
            absolutePosition = dart.notNull(child.size.height) - absolutePosition;
            delta = dart.notNull(dart.nullCheck(this.geometry).paintExtent) - dart.notNull(child.size.height) - dart.notNull(delta);
          }
          paintOffset = new ui.Offset.new(crossAxisDelta, delta);
          transformedPosition = new ui.Offset.new(absoluteCrossAxisPosition, absolutePosition);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(paintOffset != null)) dart.assertFailed(null, L0, 1666, 12, "paintOffset != null");
      if (!(transformedPosition != null)) dart.assertFailed(null, L0, 1667, 12, "transformedPosition != null");
      return result.addWithOutOfBandPosition({paintOffset: paintOffset, hitTest: dart.fn(result => {
          if (result == null) dart.nullFailed(L0, 1670, 34, "result");
          return child.hitTest(result, {position: transformedPosition});
        }, BoxHitTestResultTobool())});
    }
    applyPaintTransformForBoxChild(child, transform) {
      if (child == null) dart.nullFailed(L0, 1685, 49, "child");
      if (transform == null) dart.nullFailed(L0, 1685, 64, "transform");
      let rightWayUp = this[_getRightWayUp](this.constraints);
      let delta = this.childMainAxisPosition(child);
      let crossAxisDelta = this.childCrossAxisPosition(child);
      if (!(this.constraints.axis != null)) dart.assertFailed(null, L0, 1689, 12, "constraints.axis != null");
      switch (this.constraints.axis) {
        case C7 || CT.C7:
        {
          if (!dart.test(rightWayUp)) delta = dart.notNull(dart.nullCheck(this.geometry).paintExtent) - dart.notNull(child.size.width) - dart.notNull(delta);
          transform.translate(delta, crossAxisDelta);
          break;
        }
        case C8 || CT.C8:
        {
          if (!dart.test(rightWayUp)) delta = dart.notNull(dart.nullCheck(this.geometry).paintExtent) - dart.notNull(child.size.height) - dart.notNull(delta);
          transform.translate(crossAxisDelta, delta);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
  };
  (sliver$.RenderSliverHelpers.new = function() {
    ;
  }).prototype = sliver$.RenderSliverHelpers.prototype;
  dart.addTypeTests(sliver$.RenderSliverHelpers);
  dart.addTypeCaches(sliver$.RenderSliverHelpers);
  sliver$.RenderSliverHelpers[dart.implements] = () => [sliver$.RenderSliver];
  dart.setMethodSignature(sliver$.RenderSliverHelpers, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliverHelpers.__proto__),
    [_getRightWayUp]: dart.fnType(core.bool, [sliver$.SliverConstraints]),
    hitTestBoxChild: dart.fnType(core.bool, [box.BoxHitTestResult, box.RenderBox], {}, {crossAxisPosition: core.double, mainAxisPosition: core.double}),
    applyPaintTransformForBoxChild: dart.fnType(dart.void, [box.RenderBox, vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(sliver$.RenderSliverHelpers, L1);
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver$.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderSliver_RenderSliverHelpers$36 = class RenderSliver_RenderSliverHelpers extends RenderSliver_RenderObjectWithChildMixin$36 {};
  (RenderSliver_RenderSliverHelpers$36.new = function() {
    RenderSliver_RenderSliverHelpers$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverHelpers$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverHelpers$36, sliver$.RenderSliverHelpers);
  sliver$.RenderSliverSingleBoxAdapter = class RenderSliverSingleBoxAdapter extends RenderSliver_RenderSliverHelpers$36 {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 1727, 37, "child");
      if (!sliver$.SliverPhysicalParentData.is(child.parentData)) child.parentData = new sliver$.SliverPhysicalParentData.new();
    }
    setChildParentData(child, constraints, geometry) {
      if (child == null) dart.nullFailed(L0, 1736, 40, "child");
      if (constraints == null) dart.nullFailed(L0, 1736, 65, "constraints");
      if (geometry == null) dart.nullFailed(L0, 1736, 93, "geometry");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      if (!(constraints.axisDirection != null)) dart.assertFailed(null, L0, 1738, 12, "constraints.axisDirection != null");
      if (!(constraints.growthDirection != null)) dart.assertFailed(null, L0, 1739, 12, "constraints.growthDirection != null");
      switch (sliver$.applyGrowthDirectionToAxisDirection(constraints.axisDirection, constraints.growthDirection)) {
        case C5 || CT.C5:
        {
          childParentData.paintOffset = new ui.Offset.new(0.0, -(dart.notNull(geometry.scrollExtent) - (dart.notNull(geometry.paintExtent) + dart.notNull(constraints.scrollOffset))));
          break;
        }
        case C4 || CT.C4:
        {
          childParentData.paintOffset = new ui.Offset.new(-dart.notNull(constraints.scrollOffset), 0.0);
          break;
        }
        case C3 || CT.C3:
        {
          childParentData.paintOffset = new ui.Offset.new(0.0, -dart.notNull(constraints.scrollOffset));
          break;
        }
        case C6 || CT.C6:
        {
          childParentData.paintOffset = new ui.Offset.new(-(dart.notNull(geometry.scrollExtent) - (dart.notNull(geometry.paintExtent) + dart.notNull(constraints.scrollOffset))), 0.0);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(childParentData.paintOffset != null)) dart.assertFailed(null, L0, 1754, 12, "childParentData.paintOffset != null");
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 1758, 44, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L0, 1758, 70, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L0, 1758, 104, "crossAxisPosition");
      if (!(dart.notNull(dart.nullCheck(this.geometry).hitTestExtent) > 0.0)) dart.assertFailed(null, L0, 1759, 12, "geometry!.hitTestExtent > 0.0");
      if (this.child != null) return this.hitTestBoxChild(new box.BoxHitTestResult.wrap(result), dart.nullCheck(this.child), {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
      return false;
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 1766, 42, "child");
      return -dart.notNull(this.constraints.scrollOffset);
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 1771, 41, "child");
      if (transform == null) dart.nullFailed(L0, 1771, 56, "transform");
      if (!(child != null)) dart.assertFailed(null, L0, 1772, 12, "child != null");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L0, 1773, 12, "child == this.child");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1779, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1779, 46, "offset");
      if (this.child != null && dart.test(dart.nullCheck(this.geometry).visible)) {
        let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.paintChild(dart.nullCheck(this.child), offset['+'](childParentData.paintOffset));
      }
    }
  };
  (sliver$.RenderSliverSingleBoxAdapter.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    sliver$.RenderSliverSingleBoxAdapter.__proto__.new.call(this);
    this.child = child;
  }).prototype = sliver$.RenderSliverSingleBoxAdapter.prototype;
  dart.addTypeTests(sliver$.RenderSliverSingleBoxAdapter);
  dart.addTypeCaches(sliver$.RenderSliverSingleBoxAdapter);
  dart.setMethodSignature(sliver$.RenderSliverSingleBoxAdapter, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliverSingleBoxAdapter.__proto__),
    setChildParentData: dart.fnType(dart.void, [object.RenderObject, sliver$.SliverConstraints, sliver$.SliverGeometry])
  }));
  dart.setLibraryUri(sliver$.RenderSliverSingleBoxAdapter, L1);
  sliver$.RenderSliverToBoxAdapter = class RenderSliverToBoxAdapter extends sliver$.RenderSliverSingleBoxAdapter {
    performLayout() {
      if (this.child == null) {
        this.geometry = sliver$.SliverGeometry.zero;
        return;
      }
      let constraints = this.constraints;
      dart.nullCheck(this.child).layout(constraints.asBoxConstraints(), {parentUsesSize: true});
      let childExtent = null;
      switch (constraints.axis) {
        case C7 || CT.C7:
        {
          childExtent = dart.nullCheck(this.child).size.width;
          break;
        }
        case C8 || CT.C8:
        {
          childExtent = dart.nullCheck(this.child).size.height;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(childExtent != null)) dart.assertFailed(null, L0, 1822, 12, "childExtent != null");
      let paintedChildSize = this.calculatePaintOffset(constraints, {from: 0.0, to: childExtent});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: 0.0, to: childExtent});
      if (!paintedChildSize[$isFinite]) dart.assertFailed(null, L0, 1826, 12, "paintedChildSize.isFinite");
      if (!(dart.notNull(paintedChildSize) >= 0.0)) dart.assertFailed(null, L0, 1827, 12, "paintedChildSize >= 0.0");
      this.geometry = new sliver$.SliverGeometry.new({scrollExtent: childExtent, paintExtent: paintedChildSize, cacheExtent: cacheExtent, maxPaintExtent: childExtent, hitTestExtent: paintedChildSize, hasVisualOverflow: dart.notNull(childExtent) > dart.notNull(constraints.remainingPaintExtent) || dart.notNull(constraints.scrollOffset) > 0.0});
      this.setChildParentData(dart.nullCheck(this.child), constraints, dart.nullCheck(this.geometry));
    }
  };
  (sliver$.RenderSliverToBoxAdapter.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    sliver$.RenderSliverToBoxAdapter.__proto__.new.call(this, {child: child});
    ;
  }).prototype = sliver$.RenderSliverToBoxAdapter.prototype;
  dart.addTypeTests(sliver$.RenderSliverToBoxAdapter);
  dart.addTypeCaches(sliver$.RenderSliverToBoxAdapter);
  dart.setMethodSignature(sliver$.RenderSliverToBoxAdapter, () => ({
    __proto__: dart.getMethods(sliver$.RenderSliverToBoxAdapter.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver$.RenderSliverToBoxAdapter, L1);
  sliver$.applyGrowthDirectionToAxisDirection = function applyGrowthDirectionToAxisDirection(axisDirection, growthDirection) {
    if (axisDirection == null) dart.nullFailed(L0, 53, 65, "axisDirection");
    if (growthDirection == null) dart.nullFailed(L0, 53, 96, "growthDirection");
    if (!(axisDirection != null)) dart.assertFailed(null, L0, 54, 10, "axisDirection != null");
    if (!(growthDirection != null)) dart.assertFailed(null, L0, 55, 10, "growthDirection != null");
    switch (growthDirection) {
      case C0 || CT.C0:
      {
        return axisDirection;
      }
      case C1 || CT.C1:
      {
        return basic_types.flipAxisDirection(axisDirection);
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  sliver$.applyGrowthDirectionToScrollDirection = function applyGrowthDirectionToScrollDirection(scrollDirection, growthDirection) {
    if (scrollDirection == null) dart.nullFailed(L0, 73, 71, "scrollDirection");
    if (growthDirection == null) dart.nullFailed(L0, 73, 104, "growthDirection");
    if (!(scrollDirection != null)) dart.assertFailed(null, L0, 74, 10, "scrollDirection != null");
    if (!(growthDirection != null)) dart.assertFailed(null, L0, 75, 10, "growthDirection != null");
    switch (growthDirection) {
      case C0 || CT.C0:
      {
        return scrollDirection;
      }
      case C1 || CT.C1:
      {
        return viewport_offset.flipScrollDirection(scrollDirection);
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  sliver$._debugCompareFloats = function _debugCompareFloats(labelA, valueA, labelB, valueB) {
    if (labelA == null) dart.nullFailed(L0, 975, 50, "labelA");
    if (valueA == null) dart.nullFailed(L0, 975, 65, "valueA");
    if (labelB == null) dart.nullFailed(L0, 975, 80, "labelB");
    if (valueB == null) dart.nullFailed(L0, 975, 95, "valueB");
    return (() => {
      let t6 = JSArrayOfDiagnosticsNode().of([]);
      if (valueA[$toStringAsFixed](1) !== valueB[$toStringAsFixed](1))
        t6.push(new assertions.ErrorDescription.new("The " + dart.str(labelA) + " is " + valueA[$toStringAsFixed](1) + ", but " + "the " + dart.str(labelB) + " is " + valueB[$toStringAsFixed](1) + "."));
      else
        t6[$addAll](JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("The " + dart.str(labelA) + " is " + dart.str(valueA) + ", but the " + dart.str(labelB) + " is " + dart.str(valueB) + "."), new assertions.ErrorHint.new("Maybe you have fallen prey to floating point rounding errors, and should explicitly " + "apply the min() or max() functions, or the clamp() method, to the " + dart.str(labelB) + "?")]));
      return t6;
    })();
  };
  var _name$0 = dart.privateName(viewport, "_name");
  var C11;
  var C12;
  var C13;
  viewport.CacheExtentStyle = class CacheExtentStyle extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (viewport.CacheExtentStyle.new = function(index, _name) {
    if (index == null) dart.nullFailed(L2, 20, 6, "index");
    if (_name == null) dart.nullFailed(L2, 20, 6, "_name");
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = viewport.CacheExtentStyle.prototype;
  dart.addTypeTests(viewport.CacheExtentStyle);
  dart.addTypeCaches(viewport.CacheExtentStyle);
  dart.setLibraryUri(viewport.CacheExtentStyle, L3);
  dart.setFieldSignature(viewport.CacheExtentStyle, () => ({
    __proto__: dart.getFields(viewport.CacheExtentStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(viewport.CacheExtentStyle, ['toString']);
  viewport.CacheExtentStyle.pixel = C11 || CT.C11;
  viewport.CacheExtentStyle.viewport = C12 || CT.C12;
  viewport.CacheExtentStyle.values = C13 || CT.C13;
  viewport.RenderAbstractViewport = class RenderAbstractViewport extends object.RenderObject {
    static __() {
      return dart.throw(new core.Error.new());
    }
    static of(object) {
      while (object != null) {
        if (viewport.RenderAbstractViewport.is(object)) return object;
        object = RenderObjectN().as(object.parent);
      }
      return null;
    }
  };
  dart.addTypeTests(viewport.RenderAbstractViewport);
  dart.addTypeCaches(viewport.RenderAbstractViewport);
  dart.setLibraryUri(viewport.RenderAbstractViewport, L3);
  dart.defineLazy(viewport.RenderAbstractViewport, {
    /*viewport.RenderAbstractViewport.defaultCacheExtent*/get defaultCacheExtent() {
      return 250;
    }
  }, false);
  var offset$ = dart.privateName(viewport, "RevealedOffset.offset");
  var rect$ = dart.privateName(viewport, "RevealedOffset.rect");
  viewport.RevealedOffset = class RevealedOffset extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    toString() {
      return dart.str(object$.objectRuntimeType(this, "RevealedOffset")) + "(offset: " + dart.str(this.offset) + ", rect: " + dart.str(this.rect) + ")";
    }
  };
  (viewport.RevealedOffset.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L2, 106, 19, "offset");
    let rect = opts && 'rect' in opts ? opts.rect : null;
    if (rect == null) dart.nullFailed(L2, 107, 19, "rect");
    this[offset$] = offset;
    this[rect$] = rect;
    if (!(offset != null)) dart.assertFailed(null, L2, 108, 15, "offset != null");
    if (!(rect != null)) dart.assertFailed(null, L2, 109, 15, "rect != null");
    ;
  }).prototype = viewport.RevealedOffset.prototype;
  dart.addTypeTests(viewport.RevealedOffset);
  dart.addTypeCaches(viewport.RevealedOffset);
  dart.setLibraryUri(viewport.RevealedOffset, L3);
  dart.setFieldSignature(viewport.RevealedOffset, () => ({
    __proto__: dart.getFields(viewport.RevealedOffset.__proto__),
    offset: dart.finalFieldType(core.double),
    rect: dart.finalFieldType(ui.Rect)
  }));
  dart.defineExtensionMethods(viewport.RevealedOffset, ['toString']);
  var _name$1 = dart.privateName(ui, "_name");
  var C14;
  var _calculatedCacheExtent = dart.privateName(viewport, "_calculatedCacheExtent");
  var _clipBehavior = dart.privateName(viewport, "_clipBehavior");
  var _clipRectLayer = dart.privateName(viewport, "_clipRectLayer");
  var _axisDirection = dart.privateName(viewport, "_axisDirection");
  var _crossAxisDirection = dart.privateName(viewport, "_crossAxisDirection");
  var _offset = dart.privateName(viewport, "_offset");
  var _cacheExtent = dart.privateName(viewport, "_cacheExtent");
  var _cacheExtentStyle = dart.privateName(viewport, "_cacheExtentStyle");
  var _paintContents = dart.privateName(viewport, "_paintContents");
  var C15;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C16;
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C17;
  const _is_RenderViewportBase_default = Symbol('_is_RenderViewportBase_default');
  viewport.RenderViewportBase$ = dart.generic(ParentDataClass => {
    const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
    (RenderBox_ContainerRenderObjectMixin$36.new = function() {
      object.ContainerRenderObjectMixin$(sliver$.RenderSliver, ParentDataClass)[dart.mixinNew].call(this);
      RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
    }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
    dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(sliver$.RenderSliver, ParentDataClass));
    class RenderViewportBase extends RenderBox_ContainerRenderObjectMixin$36 {
      describeSemanticsConfiguration(config) {
        if (config == null) dart.nullFailed(L2, 215, 62, "config");
        super.describeSemanticsConfiguration(config);
        config.addTagForChildren(viewport.RenderViewport.useTwoPaneSemantics);
      }
      visitChildrenForSemantics(visitor) {
        if (visitor == null) dart.nullFailed(L2, 222, 54, "visitor");
        this.childrenInPaintOrder[$where](dart.fn(sliver => {
          if (sliver == null) dart.nullFailed(L2, 224, 30, "sliver");
          return dart.test(dart.nullCheck(sliver.geometry).visible) || dart.notNull(dart.nullCheck(sliver.geometry).cacheExtent) > 0.0;
        }, RenderSliverTobool()))[$forEach](visitor);
      }
      get axisDirection() {
        return this[_axisDirection];
      }
      set axisDirection(value) {
        if (value == null) dart.nullFailed(L2, 235, 35, "value");
        if (!(value != null)) dart.assertFailed(null, L2, 236, 12, "value != null");
        if (dart.equals(value, this[_axisDirection])) return;
        this[_axisDirection] = value;
        this.markNeedsLayout();
      }
      get crossAxisDirection() {
        return this[_crossAxisDirection];
      }
      set crossAxisDirection(value) {
        if (value == null) dart.nullFailed(L2, 251, 40, "value");
        if (!(value != null)) dart.assertFailed(null, L2, 252, 12, "value != null");
        if (dart.equals(value, this[_crossAxisDirection])) return;
        this[_crossAxisDirection] = value;
        this.markNeedsLayout();
      }
      get axis() {
        return basic_types.axisDirectionToAxis(this.axisDirection);
      }
      get offset() {
        return this[_offset];
      }
      set offset(value) {
        if (value == null) dart.nullFailed(L2, 273, 29, "value");
        if (!(value != null)) dart.assertFailed(null, L2, 274, 12, "value != null");
        if (dart.equals(value, this[_offset])) return;
        if (dart.test(this.attached)) this[_offset].removeListener(dart.bind(this, 'markNeedsLayout'));
        this[_offset] = value;
        if (dart.test(this.attached)) this[_offset].addListener(dart.bind(this, 'markNeedsLayout'));
        this.markNeedsLayout();
      }
      get cacheExtent() {
        return this[_cacheExtent];
      }
      set cacheExtent(value) {
        value == null ? value = 250 : null;
        if (!(value != null)) dart.assertFailed(null, L2, 324, 12, "value != null");
        if (value == this[_cacheExtent]) return;
        this[_cacheExtent] = value;
        this.markNeedsLayout();
      }
      get cacheExtentStyle() {
        return this[_cacheExtentStyle];
      }
      set cacheExtentStyle(value) {
        if (value == null) dart.nullFailed(L2, 355, 41, "value");
        if (!(value != null)) dart.assertFailed(null, L2, 356, 12, "value != null");
        if (dart.equals(value, this[_cacheExtentStyle])) {
          return;
        }
        this[_cacheExtentStyle] = value;
        this.markNeedsLayout();
      }
      get clipBehavior() {
        return this[_clipBehavior];
      }
      set clipBehavior(value) {
        if (value == null) dart.nullFailed(L2, 369, 25, "value");
        if (!(value != null)) dart.assertFailed(null, L2, 370, 12, "value != null");
        if (!dart.equals(value, this[_clipBehavior])) {
          this[_clipBehavior] = value;
          this.markNeedsPaint();
          this.markNeedsSemanticsUpdate();
        }
      }
      attach(owner) {
        object.PipelineOwner.as(owner);
        if (owner == null) dart.nullFailed(L2, 379, 29, "owner");
        super.attach(owner);
        this[_offset].addListener(dart.bind(this, 'markNeedsLayout'));
      }
      detach() {
        this[_offset].removeListener(dart.bind(this, 'markNeedsLayout'));
        super.detach();
      }
      debugThrowIfNotCheckingIntrinsics() {
        if (!dart.test(dart.fn(() => {
          if (!dart.test(object.RenderObject.debugCheckingIntrinsics)) {
            if (!!viewport.RenderShrinkWrappingViewport.is(this)) dart.assertFailed(null, L2, 401, 16, "this is! RenderShrinkWrappingViewport");
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not support returning intrinsic dimensions."), new assertions.ErrorDescription.new("Calculating the intrinsic dimensions would require instantiating every child of " + "the viewport, which defeats the point of viewports being lazy."), new assertions.ErrorHint.new("If you are merely trying to shrink-wrap the viewport in the main axis direction, " + "consider a RenderShrinkWrappingViewport render object (ShrinkWrappingViewport widget), " + "which achieves that effect without implementing the intrinsic dimension API.")])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L2, 399, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        assert(this is! RenderShrinkWrappingViewport); // it has its own message\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not support returning intrinsic dimensions.'),\n          ErrorDescription(\n            'Calculating the intrinsic dimensions would require instantiating every child of '\n            'the viewport, which defeats the point of viewports being lazy.',\n          ),\n          ErrorHint(\n            'If you are merely trying to shrink-wrap the viewport in the main axis direction, '\n            'consider a RenderShrinkWrappingViewport render object (ShrinkWrappingViewport widget), '\n            'which achieves that effect without implementing the intrinsic dimension API.'\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      computeMinIntrinsicWidth(height) {
        if (height == null) dart.nullFailed(L2, 421, 42, "height");
        if (!dart.test(this.debugThrowIfNotCheckingIntrinsics())) dart.assertFailed(null, L2, 422, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      computeMaxIntrinsicWidth(height) {
        if (height == null) dart.nullFailed(L2, 427, 42, "height");
        if (!dart.test(this.debugThrowIfNotCheckingIntrinsics())) dart.assertFailed(null, L2, 428, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      computeMinIntrinsicHeight(width) {
        if (width == null) dart.nullFailed(L2, 433, 43, "width");
        if (!dart.test(this.debugThrowIfNotCheckingIntrinsics())) dart.assertFailed(null, L2, 434, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      computeMaxIntrinsicHeight(width) {
        if (width == null) dart.nullFailed(L2, 439, 43, "width");
        if (!dart.test(this.debugThrowIfNotCheckingIntrinsics())) dart.assertFailed(null, L2, 440, 12, "debugThrowIfNotCheckingIntrinsics()");
        return 0.0;
      }
      get isRepaintBoundary() {
        return true;
      }
      layoutChildSequence(opts) {
        let child = opts && 'child' in opts ? opts.child : null;
        let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
        if (scrollOffset == null) dart.nullFailed(L2, 480, 21, "scrollOffset");
        let overlap = opts && 'overlap' in opts ? opts.overlap : null;
        if (overlap == null) dart.nullFailed(L2, 481, 21, "overlap");
        let layoutOffset = opts && 'layoutOffset' in opts ? opts.layoutOffset : null;
        if (layoutOffset == null) dart.nullFailed(L2, 482, 21, "layoutOffset");
        let remainingPaintExtent = opts && 'remainingPaintExtent' in opts ? opts.remainingPaintExtent : null;
        if (remainingPaintExtent == null) dart.nullFailed(L2, 483, 21, "remainingPaintExtent");
        let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
        if (mainAxisExtent == null) dart.nullFailed(L2, 484, 21, "mainAxisExtent");
        let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
        if (crossAxisExtent == null) dart.nullFailed(L2, 485, 21, "crossAxisExtent");
        let growthDirection = opts && 'growthDirection' in opts ? opts.growthDirection : null;
        if (growthDirection == null) dart.nullFailed(L2, 486, 30, "growthDirection");
        let advance = opts && 'advance' in opts ? opts.advance : null;
        if (advance == null) dart.nullFailed(L2, 487, 57, "advance");
        let remainingCacheExtent = opts && 'remainingCacheExtent' in opts ? opts.remainingCacheExtent : null;
        if (remainingCacheExtent == null) dart.nullFailed(L2, 488, 21, "remainingCacheExtent");
        let cacheOrigin = opts && 'cacheOrigin' in opts ? opts.cacheOrigin : null;
        if (cacheOrigin == null) dart.nullFailed(L2, 489, 21, "cacheOrigin");
        if (!scrollOffset[$isFinite]) dart.assertFailed(null, L2, 491, 12, "scrollOffset.isFinite");
        if (!(dart.notNull(scrollOffset) >= 0.0)) dart.assertFailed(null, L2, 492, 12, "scrollOffset >= 0.0");
        let initialLayoutOffset = layoutOffset;
        let adjustedUserScrollDirection = sliver$.applyGrowthDirectionToScrollDirection(this.offset.userScrollDirection, growthDirection);
        if (!(adjustedUserScrollDirection != null)) dart.assertFailed(null, L2, 496, 12, "adjustedUserScrollDirection != null");
        let maxPaintOffset = dart.notNull(layoutOffset) + dart.notNull(overlap);
        let precedingScrollExtent = 0.0;
        while (child != null) {
          let sliverScrollOffset = dart.notNull(scrollOffset) <= 0.0 ? 0.0 : scrollOffset;
          let correctedCacheOrigin = math.max(core.double, cacheOrigin, -dart.notNull(sliverScrollOffset));
          let cacheExtentCorrection = dart.notNull(cacheOrigin) - correctedCacheOrigin;
          if (!(dart.notNull(sliverScrollOffset) >= correctedCacheOrigin[$abs]())) dart.assertFailed(null, L2, 508, 14, "sliverScrollOffset >= correctedCacheOrigin.abs()");
          if (!(correctedCacheOrigin <= 0.0)) dart.assertFailed(null, L2, 509, 14, "correctedCacheOrigin <= 0.0");
          if (!(dart.notNull(sliverScrollOffset) >= 0.0)) dart.assertFailed(null, L2, 510, 14, "sliverScrollOffset >= 0.0");
          if (!(cacheExtentCorrection <= 0.0)) dart.assertFailed(null, L2, 511, 14, "cacheExtentCorrection <= 0.0");
          child.layout(new sliver$.SliverConstraints.new({axisDirection: this.axisDirection, growthDirection: growthDirection, userScrollDirection: adjustedUserScrollDirection, scrollOffset: sliverScrollOffset, precedingScrollExtent: precedingScrollExtent, overlap: maxPaintOffset - dart.notNull(layoutOffset), remainingPaintExtent: math.max(core.double, 0.0, dart.notNull(remainingPaintExtent) - dart.notNull(layoutOffset) + dart.notNull(initialLayoutOffset)), crossAxisExtent: crossAxisExtent, crossAxisDirection: this.crossAxisDirection, viewportMainAxisExtent: mainAxisExtent, remainingCacheExtent: math.max(core.double, 0.0, dart.notNull(remainingCacheExtent) + cacheExtentCorrection), cacheOrigin: correctedCacheOrigin}), {parentUsesSize: true});
          let childLayoutGeometry = dart.nullCheck(child.geometry);
          if (!dart.test(childLayoutGeometry.debugAssertIsValid())) dart.assertFailed(null, L2, 529, 14, "childLayoutGeometry.debugAssertIsValid()");
          if (childLayoutGeometry.scrollOffsetCorrection != null) return dart.nullCheck(childLayoutGeometry.scrollOffsetCorrection);
          let effectiveLayoutOffset = dart.notNull(layoutOffset) + dart.notNull(childLayoutGeometry.paintOrigin);
          if (dart.test(childLayoutGeometry.visible) || dart.notNull(scrollOffset) > 0) {
            this.updateChildLayoutOffset(child, effectiveLayoutOffset, growthDirection);
          } else {
            this.updateChildLayoutOffset(child, -dart.notNull(scrollOffset) + dart.notNull(initialLayoutOffset), growthDirection);
          }
          maxPaintOffset = math.max(core.double, effectiveLayoutOffset + dart.notNull(childLayoutGeometry.paintExtent), maxPaintOffset);
          scrollOffset = dart.notNull(scrollOffset) - dart.notNull(childLayoutGeometry.scrollExtent);
          precedingScrollExtent = precedingScrollExtent + dart.notNull(childLayoutGeometry.scrollExtent);
          layoutOffset = dart.notNull(layoutOffset) + dart.notNull(childLayoutGeometry.layoutExtent);
          if (childLayoutGeometry.cacheExtent !== 0.0) {
            remainingCacheExtent = dart.notNull(remainingCacheExtent) - (dart.notNull(childLayoutGeometry.cacheExtent) - cacheExtentCorrection);
            cacheOrigin = math.min(core.double, correctedCacheOrigin + dart.notNull(childLayoutGeometry.cacheExtent), 0.0);
          }
          this.updateOutOfBandData(growthDirection, childLayoutGeometry);
          child = advance(child);
        }
        return 0.0;
      }
      describeApproximatePaintClip(child) {
        sliver$.RenderSliver.as(child);
        if (child == null) dart.nullFailed(L2, 568, 50, "child");
        let viewportClip = ui.Offset.zero['&'](this.size);
        if (child.constraints.overlap === 0 || !child.constraints.viewportMainAxisExtent[$isFinite]) {
          return viewportClip;
        }
        let left = viewportClip.left;
        let right = viewportClip.right;
        let top = viewportClip.top;
        let bottom = viewportClip.bottom;
        let startOfOverlap = dart.notNull(child.constraints.viewportMainAxisExtent) - dart.notNull(child.constraints.remainingPaintExtent);
        let overlapCorrection = startOfOverlap + dart.notNull(child.constraints.overlap);
        switch (sliver$.applyGrowthDirectionToAxisDirection(this.axisDirection, child.constraints.growthDirection)) {
          case C3 || CT.C3:
          {
            top = dart.notNull(top) + overlapCorrection;
            break;
          }
          case C5 || CT.C5:
          {
            bottom = dart.notNull(bottom) - overlapCorrection;
            break;
          }
          case C4 || CT.C4:
          {
            left = dart.notNull(left) + overlapCorrection;
            break;
          }
          case C6 || CT.C6:
          {
            right = dart.notNull(right) - overlapCorrection;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        return new ui.Rect.fromLTRB(left, top, right, bottom);
      }
      describeSemanticsClip(child) {
        RenderSliverN().as(child);
        if (!(this.axis != null)) dart.assertFailed(null, L2, 609, 12, "axis != null");
        if (this[_calculatedCacheExtent] == null) {
          return this.semanticBounds;
        }
        switch (this.axis) {
          case C8 || CT.C8:
          {
            return new ui.Rect.fromLTRB(this.semanticBounds.left, dart.notNull(this.semanticBounds.top) - dart.nullCheck(this[_calculatedCacheExtent]), this.semanticBounds.right, dart.notNull(this.semanticBounds.bottom) + dart.nullCheck(this[_calculatedCacheExtent]));
          }
          case C7 || CT.C7:
          {
            return new ui.Rect.fromLTRB(dart.notNull(this.semanticBounds.left) - dart.nullCheck(this[_calculatedCacheExtent]), this.semanticBounds.top, dart.notNull(this.semanticBounds.right) + dart.nullCheck(this[_calculatedCacheExtent]), this.semanticBounds.bottom);
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      paint(context, offset) {
        if (context == null) dart.nullFailed(L2, 634, 30, "context");
        if (offset == null) dart.nullFailed(L2, 634, 46, "offset");
        if (this.firstChild == null) return;
        if (dart.test(this.hasVisualOverflow) && !dart.equals(this.clipBehavior, ui.Clip.none)) {
          this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintContents), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
        } else {
          this[_clipRectLayer] = null;
          this[_paintContents](context, offset);
        }
      }
      [_paintContents](context, offset) {
        if (context == null) dart.nullFailed(L2, 648, 39, "context");
        if (offset == null) dart.nullFailed(L2, 648, 55, "offset");
        for (let child of this.childrenInPaintOrder) {
          if (dart.test(dart.nullCheck(child.geometry).visible)) context.paintChild(child, offset['+'](this.paintOffsetOf(child)));
        }
      }
      debugPaintSize(context, offset) {
        if (context == null) dart.nullFailed(L2, 656, 39, "context");
        if (offset == null) dart.nullFailed(L2, 656, 55, "offset");
        if (!dart.test(dart.fn(() => {
          let t7;
          super.debugPaintSize(context, offset);
          let paint = (t7 = ui.Paint.new(), (() => {
            t7.style = ui.PaintingStyle.stroke;
            t7.strokeWidth = 1.0;
            t7.color = C15 || CT.C15;
            return t7;
          })());
          let canvas = context.canvas;
          let child = this.firstChild;
          while (child != null) {
            let size = null;
            switch (this.axis) {
              case C8 || CT.C8:
              {
                size = new ui.Size.new(child.constraints.crossAxisExtent, dart.nullCheck(child.geometry).layoutExtent);
                break;
              }
              case C7 || CT.C7:
              {
                size = new ui.Size.new(dart.nullCheck(child.geometry).layoutExtent, child.constraints.crossAxisExtent);
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
            if (!(size != null)) dart.assertFailed(null, L2, 675, 16, "size != null");
            canvas.drawRect(offset['+'](this.paintOffsetOf(child))['&'](size).deflate(0.5), paint);
            child = this.childAfter(child);
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L2, 657, 12, "() {\n      super.debugPaintSize(context, offset);\n      final Paint paint = Paint()\n        ..style = PaintingStyle.stroke\n        ..strokeWidth = 1.0\n        ..color = const Color(0xFF00FF00);\n      final Canvas canvas = context.canvas;\n      RenderSliver? child = firstChild;\n      while (child != null) {\n        final Size size;\n        switch (axis) {\n          case Axis.vertical:\n            size = Size(child.constraints.crossAxisExtent, child.geometry!.layoutExtent);\n            break;\n          case Axis.horizontal:\n            size = Size(child.geometry!.layoutExtent, child.constraints.crossAxisExtent);\n            break;\n        }\n        assert(size != null);\n        canvas.drawRect(((offset + paintOffsetOf(child)) & size).deflate(0.5), paint);\n        child = childAfter(child);\n      }\n      return true;\n    }()");
      }
      hitTestChildren(result, opts) {
        if (result == null) dart.nullFailed(L2, 684, 41, "result");
        let position = opts && 'position' in opts ? opts.position : null;
        if (position == null) dart.nullFailed(L2, 684, 67, "position");
        let mainAxisPosition = null;
        let crossAxisPosition = null;
        switch (this.axis) {
          case C8 || CT.C8:
          {
            mainAxisPosition = position.dy;
            crossAxisPosition = position.dx;
            break;
          }
          case C7 || CT.C7:
          {
            mainAxisPosition = position.dx;
            crossAxisPosition = position.dy;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        if (!(mainAxisPosition != null)) dart.assertFailed(null, L2, 696, 12, "mainAxisPosition != null");
        if (!(crossAxisPosition != null)) dart.assertFailed(null, L2, 697, 12, "crossAxisPosition != null");
        let sliverResult = new sliver$.SliverHitTestResult.wrap(result);
        for (let child of this.childrenInHitTestOrder) {
          if (!dart.test(dart.nullCheck(child.geometry).visible)) {
            continue;
          }
          let transform = vector_math_64.Matrix4.identity();
          this.applyPaintTransform(child, transform);
          let isHit = result.addWithOutOfBandPosition({paintTransform: transform, hitTest: dart.fn(result => {
              if (result == null) dart.nullFailed(L2, 707, 36, "result");
              return child.hitTest(sliverResult, {mainAxisPosition: this.computeChildMainAxisPosition(child, mainAxisPosition), crossAxisPosition: crossAxisPosition});
            }, BoxHitTestResultTobool())});
          if (dart.test(isHit)) {
            return true;
          }
        }
        return false;
      }
      getOffsetToReveal(target, alignment, opts) {
        if (target == null) dart.nullFailed(L2, 723, 49, "target");
        if (alignment == null) dart.nullFailed(L2, 723, 64, "alignment");
        let rect = opts && 'rect' in opts ? opts.rect : null;
        let leadingScrollOffset = 0.0;
        let child = target;
        let pivot = null;
        let onlySlivers = sliver$.RenderSliver.is(target);
        while (!dart.equals(child.parent, this)) {
          let parent = object.RenderObject.as(dart.nullCheck(child.parent));
          if (!(parent !== null)) dart.assertFailed(dart.str(target) + " must be a descendant of " + dart.str(this), L2, 750, 14, "parent != null");
          if (box.RenderBox.is(child)) {
            pivot = child;
          }
          if (sliver$.RenderSliver.is(parent)) {
            leadingScrollOffset = dart.notNull(leadingScrollOffset) + dart.nullCheck(parent.childScrollOffset(child));
          } else {
            onlySlivers = false;
            leadingScrollOffset = 0.0;
          }
          child = parent;
        }
        let rectLocal = null;
        let pivotExtent = null;
        let growthDirection = null;
        if (pivot != null) {
          if (!(pivot.parent != null)) dart.assertFailed(null, L2, 772, 14, "pivot.parent != null");
          if (!!dart.equals(pivot.parent, this)) dart.assertFailed(null, L2, 773, 14, "pivot.parent != this");
          if (!!dart.equals(pivot, this)) dart.assertFailed(null, L2, 774, 14, "pivot != this");
          if (!sliver$.RenderSliver.is(pivot.parent)) dart.assertFailed(null, L2, 775, 14, "pivot.parent is RenderSliver");
          let pivotParent = sliver$.RenderSliver.as(dart.nullCheck(pivot.parent));
          growthDirection = pivotParent.constraints.growthDirection;
          switch (this.axis) {
            case C7 || CT.C7:
            {
              pivotExtent = pivot.size.width;
              break;
            }
            case C8 || CT.C8:
            {
              pivotExtent = pivot.size.height;
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
          rect == null ? rect = target.paintBounds : null;
          rectLocal = matrix_utils.MatrixUtils.transformRect(target.getTransformTo(pivot), rect);
        } else if (onlySlivers) {
          let targetSliver = sliver$.RenderSliver.as(target);
          growthDirection = targetSliver.constraints.growthDirection;
          pivotExtent = dart.nullCheck(targetSliver.geometry).scrollExtent;
          if (rect == null) {
            switch (this.axis) {
              case C7 || CT.C7:
              {
                rect = new ui.Rect.fromLTWH(0.0, 0.0, dart.nullCheck(targetSliver.geometry).scrollExtent, targetSliver.constraints.crossAxisExtent);
                break;
              }
              case C8 || CT.C8:
              {
                rect = new ui.Rect.fromLTWH(0.0, 0.0, targetSliver.constraints.crossAxisExtent, dart.nullCheck(targetSliver.geometry).scrollExtent);
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          }
          rectLocal = rect;
        } else {
          if (!(rect != null)) dart.assertFailed(null, L2, 816, 14, "rect != null");
          return new viewport.RevealedOffset.new({offset: this.offset.pixels, rect: dart.nullCheck(rect)});
        }
        if (!(pivotExtent != null)) dart.assertFailed(null, L2, 820, 12, "pivotExtent != null");
        if (!(rect != null)) dart.assertFailed(null, L2, 821, 12, "rect != null");
        if (!(rectLocal != null)) dart.assertFailed(null, L2, 822, 12, "rectLocal != null");
        if (!(growthDirection != null)) dart.assertFailed(null, L2, 823, 12, "growthDirection != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, L2, 824, 12, "child.parent == this");
        if (!sliver$.RenderSliver.is(child)) dart.assertFailed(null, L2, 825, 12, "child is RenderSliver");
        let sliver = sliver$.RenderSliver.as(child);
        let targetMainAxisExtent = null;
        switch (sliver$.applyGrowthDirectionToAxisDirection(this.axisDirection, growthDirection)) {
          case C5 || CT.C5:
          {
            leadingScrollOffset = dart.notNull(leadingScrollOffset) + (dart.notNull(pivotExtent) - dart.notNull(rectLocal.bottom));
            targetMainAxisExtent = rectLocal.height;
            break;
          }
          case C4 || CT.C4:
          {
            leadingScrollOffset = dart.notNull(leadingScrollOffset) + dart.notNull(rectLocal.left);
            targetMainAxisExtent = rectLocal.width;
            break;
          }
          case C3 || CT.C3:
          {
            leadingScrollOffset = dart.notNull(leadingScrollOffset) + dart.notNull(rectLocal.top);
            targetMainAxisExtent = rectLocal.height;
            break;
          }
          case C6 || CT.C6:
          {
            leadingScrollOffset = dart.notNull(leadingScrollOffset) + (dart.notNull(pivotExtent) - dart.notNull(rectLocal.right));
            targetMainAxisExtent = rectLocal.width;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        let isPinned = dart.notNull(dart.nullCheck(sliver.geometry).maxScrollObstructionExtent) > 0 && dart.notNull(leadingScrollOffset) >= 0;
        leadingScrollOffset = this.scrollOffsetOf(sliver, leadingScrollOffset);
        let transform = target.getTransformTo(this);
        let targetRect = matrix_utils.MatrixUtils.transformRect(transform, rect);
        let extentOfPinnedSlivers = this.maxScrollObstructionExtentBefore(sliver);
        switch (sliver.constraints.growthDirection) {
          case C0 || CT.C0:
          {
            if (isPinned && dart.notNull(alignment) <= 0) return new viewport.RevealedOffset.new({offset: 1 / 0, rect: targetRect});
            leadingScrollOffset = dart.notNull(leadingScrollOffset) - dart.notNull(extentOfPinnedSlivers);
            break;
          }
          case C1 || CT.C1:
          {
            if (isPinned && dart.notNull(alignment) >= 1) return new viewport.RevealedOffset.new({offset: -1 / 0, rect: targetRect});
            switch (this.axis) {
              case C8 || CT.C8:
              {
                leadingScrollOffset = dart.notNull(leadingScrollOffset) - dart.notNull(targetRect.height);
                break;
              }
              case C7 || CT.C7:
              {
                leadingScrollOffset = dart.notNull(leadingScrollOffset) - dart.notNull(targetRect.width);
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        let mainAxisExtent = null;
        switch (this.axis) {
          case C7 || CT.C7:
          {
            mainAxisExtent = dart.notNull(this.size.width) - dart.notNull(extentOfPinnedSlivers);
            break;
          }
          case C8 || CT.C8:
          {
            mainAxisExtent = dart.notNull(this.size.height) - dart.notNull(extentOfPinnedSlivers);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        let targetOffset = dart.notNull(leadingScrollOffset) - (dart.notNull(mainAxisExtent) - dart.notNull(targetMainAxisExtent)) * dart.notNull(alignment);
        let offsetDifference = dart.notNull(this.offset.pixels) - targetOffset;
        switch (this.axisDirection) {
          case C3 || CT.C3:
          {
            targetRect = targetRect.translate(0.0, offsetDifference);
            break;
          }
          case C4 || CT.C4:
          {
            targetRect = targetRect.translate(offsetDifference, 0.0);
            break;
          }
          case C5 || CT.C5:
          {
            targetRect = targetRect.translate(0.0, -offsetDifference);
            break;
          }
          case C6 || CT.C6:
          {
            targetRect = targetRect.translate(-offsetDifference, 0.0);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        return new viewport.RevealedOffset.new({offset: targetOffset, rect: targetRect});
      }
      computeAbsolutePaintOffset(child, layoutOffset, growthDirection) {
        if (child == null) dart.nullFailed(L2, 932, 50, "child");
        if (layoutOffset == null) dart.nullFailed(L2, 932, 64, "layoutOffset");
        if (growthDirection == null) dart.nullFailed(L2, 932, 94, "growthDirection");
        if (!dart.test(this.hasSize)) dart.assertFailed(null, L2, 933, 12, "hasSize");
        if (!(this.axisDirection != null)) dart.assertFailed(null, L2, 934, 12, "axisDirection != null");
        if (!(growthDirection != null)) dart.assertFailed(null, L2, 935, 12, "growthDirection != null");
        if (!(child != null)) dart.assertFailed(null, L2, 936, 12, "child != null");
        if (!(child.geometry != null)) dart.assertFailed(null, L2, 937, 12, "child.geometry != null");
        switch (sliver$.applyGrowthDirectionToAxisDirection(this.axisDirection, growthDirection)) {
          case C5 || CT.C5:
          {
            return new ui.Offset.new(0.0, dart.notNull(this.size.height) - (dart.notNull(layoutOffset) + dart.notNull(dart.nullCheck(child.geometry).paintExtent)));
          }
          case C4 || CT.C4:
          {
            return new ui.Offset.new(layoutOffset, 0.0);
          }
          case C3 || CT.C3:
          {
            return new ui.Offset.new(0.0, layoutOffset);
          }
          case C6 || CT.C6:
          {
            return new ui.Offset.new(dart.notNull(this.size.width) - (dart.notNull(layoutOffset) + dart.notNull(dart.nullCheck(child.geometry).paintExtent)), 0.0);
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      debugFillProperties(properties) {
        if (properties == null) dart.nullFailed(L2, 951, 56, "properties");
        super.debugFillProperties(properties);
        properties.add(new (EnumPropertyOfAxisDirection()).new("axisDirection", this.axisDirection));
        properties.add(new (EnumPropertyOfAxisDirection()).new("crossAxisDirection", this.crossAxisDirection));
        properties.add(new (DiagnosticsPropertyOfViewportOffset()).new("offset", this.offset));
      }
      debugDescribeChildren() {
        let children = JSArrayOfDiagnosticsNode().of([]);
        let child = this.firstChild;
        if (child == null) return children;
        let count = this.indexOfFirstChild;
        while (true) {
          children[$add](dart.nullCheck(child).toDiagnosticsNode({name: this.labelForChild(count)}));
          if (dart.equals(child, this.lastChild)) break;
          count = dart.notNull(count) + 1;
          child = this.childAfter(child);
        }
        return children;
      }
      showOnScreen(opts) {
        let descendant = opts && 'descendant' in opts ? opts.descendant : null;
        let rect = opts && 'rect' in opts ? opts.rect : null;
        let duration = opts && 'duration' in opts ? opts.duration : C16 || CT.C16;
        if (duration == null) dart.nullFailed(L2, 1090, 14, "duration");
        let curve = opts && 'curve' in opts ? opts.curve : C17 || CT.C17;
        if (curve == null) dart.nullFailed(L2, 1091, 11, "curve");
        if (!dart.test(this.offset.allowImplicitScrolling)) {
          return super.showOnScreen({descendant: descendant, rect: rect, duration: duration, curve: curve});
        }
        let newRect = viewport.RenderViewportBase.showInViewport({descendant: descendant, viewport: this, offset: this.offset, rect: rect, duration: duration, curve: curve});
        super.showOnScreen({rect: newRect, duration: duration, curve: curve});
      }
      static showInViewport(opts) {
        let t7;
        let descendant = opts && 'descendant' in opts ? opts.descendant : null;
        let rect = opts && 'rect' in opts ? opts.rect : null;
        let viewport = opts && 'viewport' in opts ? opts.viewport : null;
        if (viewport == null) dart.nullFailed(L2, 1146, 37, "viewport");
        let offset = opts && 'offset' in opts ? opts.offset : null;
        if (offset == null) dart.nullFailed(L2, 1147, 29, "offset");
        let duration = opts && 'duration' in opts ? opts.duration : C16 || CT.C16;
        if (duration == null) dart.nullFailed(L2, 1148, 14, "duration");
        let curve = opts && 'curve' in opts ? opts.curve : C17 || CT.C17;
        if (curve == null) dart.nullFailed(L2, 1149, 11, "curve");
        if (!(viewport != null)) dart.assertFailed(null, L2, 1151, 12, "viewport != null");
        if (!(offset != null)) dart.assertFailed(null, L2, 1152, 12, "offset != null");
        if (descendant == null) {
          return rect;
        }
        let leadingEdgeOffset = viewport.getOffsetToReveal(descendant, 0.0, {rect: rect});
        let trailingEdgeOffset = viewport.getOffsetToReveal(descendant, 1.0, {rect: rect});
        let currentOffset = offset.pixels;
        let targetOffset = null;
        if (dart.notNull(leadingEdgeOffset.offset) < dart.notNull(trailingEdgeOffset.offset)) {
          let leadingEdgeDiff = (dart.notNull(offset.pixels) - dart.notNull(leadingEdgeOffset.offset))[$abs]();
          let trailingEdgeDiff = (dart.notNull(offset.pixels) - dart.notNull(trailingEdgeOffset.offset))[$abs]();
          targetOffset = leadingEdgeDiff < trailingEdgeDiff ? leadingEdgeOffset : trailingEdgeOffset;
        } else if (dart.notNull(currentOffset) > dart.notNull(leadingEdgeOffset.offset)) {
          targetOffset = leadingEdgeOffset;
        } else if (dart.notNull(currentOffset) < dart.notNull(trailingEdgeOffset.offset)) {
          targetOffset = trailingEdgeOffset;
        } else {
          let transform = descendant.getTransformTo(object.RenderObject.as(dart.nullCheck(viewport.parent)));
          return matrix_utils.MatrixUtils.transformRect(transform, (t7 = rect, t7 == null ? descendant.paintBounds : t7));
        }
        if (!(targetOffset != null)) dart.assertFailed(null, L2, 1203, 12, "targetOffset != null");
        offset.moveTo(targetOffset.offset, {duration: duration, curve: curve});
        return targetOffset.rect;
      }
    }
    (RenderViewportBase.new = function(opts) {
      let t7;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C3 || CT.C3;
      if (axisDirection == null) dart.nullFailed(L2, 179, 19, "axisDirection");
      let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
      if (crossAxisDirection == null) dart.nullFailed(L2, 180, 28, "crossAxisDirection");
      let offset = opts && 'offset' in opts ? opts.offset : null;
      if (offset == null) dart.nullFailed(L2, 181, 29, "offset");
      let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
      let cacheExtentStyle = opts && 'cacheExtentStyle' in opts ? opts.cacheExtentStyle : C11 || CT.C11;
      if (cacheExtentStyle == null) dart.nullFailed(L2, 183, 22, "cacheExtentStyle");
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C14 || CT.C14;
      if (clipBehavior == null) dart.nullFailed(L2, 184, 10, "clipBehavior");
      this[_calculatedCacheExtent] = null;
      this[_clipBehavior] = ui.Clip.hardEdge;
      this[_clipRectLayer] = null;
      if (!(axisDirection != null)) dart.assertFailed(null, L2, 185, 15, "axisDirection != null");
      if (!(crossAxisDirection != null)) dart.assertFailed(null, L2, 186, 15, "crossAxisDirection != null");
      if (!(offset != null)) dart.assertFailed(null, L2, 187, 15, "offset != null");
      if (!!dart.equals(basic_types.axisDirectionToAxis(axisDirection), basic_types.axisDirectionToAxis(crossAxisDirection))) dart.assertFailed(null, L2, 188, 15, "axisDirectionToAxis(axisDirection) != axisDirectionToAxis(crossAxisDirection)");
      if (!(cacheExtentStyle != null)) dart.assertFailed(null, L2, 189, 15, "cacheExtentStyle != null");
      if (!(cacheExtent != null || dart.equals(cacheExtentStyle, viewport.CacheExtentStyle.pixel))) dart.assertFailed(null, L2, 190, 15, "cacheExtent != null || cacheExtentStyle == CacheExtentStyle.pixel");
      if (!(clipBehavior != null)) dart.assertFailed(null, L2, 191, 15, "clipBehavior != null");
      this[_axisDirection] = axisDirection;
      this[_crossAxisDirection] = crossAxisDirection;
      this[_offset] = offset;
      this[_cacheExtent] = (t7 = cacheExtent, t7 == null ? 250 : t7);
      this[_cacheExtentStyle] = cacheExtentStyle;
      this[_clipBehavior] = clipBehavior;
      RenderViewportBase.__proto__.new.call(this);
      ;
    }).prototype = RenderViewportBase.prototype;
    dart.addTypeTests(RenderViewportBase);
    RenderViewportBase.prototype[_is_RenderViewportBase_default] = true;
    dart.addTypeCaches(RenderViewportBase);
    RenderViewportBase[dart.implements] = () => [viewport.RenderAbstractViewport];
    dart.setMethodSignature(RenderViewportBase, () => ({
      __proto__: dart.getMethods(RenderViewportBase.__proto__),
      debugThrowIfNotCheckingIntrinsics: dart.fnType(core.bool, []),
      layoutChildSequence: dart.fnType(core.double, [], {}, {advance: dart.fnType(dart.nullable(sliver$.RenderSliver), [sliver$.RenderSliver]), cacheOrigin: core.double, child: dart.nullable(sliver$.RenderSliver), crossAxisExtent: core.double, growthDirection: sliver$.GrowthDirection, layoutOffset: core.double, mainAxisExtent: core.double, overlap: core.double, remainingCacheExtent: core.double, remainingPaintExtent: core.double, scrollOffset: core.double}),
      describeApproximatePaintClip: dart.fnType(ui.Rect, [dart.nullable(core.Object)]),
      describeSemanticsClip: dart.fnType(ui.Rect, [dart.nullable(core.Object)]),
      [_paintContents]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
      getOffsetToReveal: dart.fnType(viewport.RevealedOffset, [object.RenderObject, core.double], {rect: dart.nullable(ui.Rect)}, {}),
      computeAbsolutePaintOffset: dart.fnType(ui.Offset, [sliver$.RenderSliver, core.double, sliver$.GrowthDirection])
    }));
    dart.setGetterSignature(RenderViewportBase, () => ({
      __proto__: dart.getGetters(RenderViewportBase.__proto__),
      axisDirection: basic_types.AxisDirection,
      crossAxisDirection: basic_types.AxisDirection,
      axis: basic_types.Axis,
      offset: viewport_offset.ViewportOffset,
      cacheExtent: dart.nullable(core.double),
      cacheExtentStyle: viewport.CacheExtentStyle,
      clipBehavior: ui.Clip
    }));
    dart.setSetterSignature(RenderViewportBase, () => ({
      __proto__: dart.getSetters(RenderViewportBase.__proto__),
      axisDirection: basic_types.AxisDirection,
      crossAxisDirection: basic_types.AxisDirection,
      offset: viewport_offset.ViewportOffset,
      cacheExtent: dart.nullable(core.double),
      cacheExtentStyle: viewport.CacheExtentStyle,
      clipBehavior: ui.Clip
    }));
    dart.setLibraryUri(RenderViewportBase, L3);
    dart.setFieldSignature(RenderViewportBase, () => ({
      __proto__: dart.getFields(RenderViewportBase.__proto__),
      [_axisDirection]: dart.fieldType(basic_types.AxisDirection),
      [_crossAxisDirection]: dart.fieldType(basic_types.AxisDirection),
      [_offset]: dart.fieldType(viewport_offset.ViewportOffset),
      [_cacheExtent]: dart.fieldType(core.double),
      [_calculatedCacheExtent]: dart.fieldType(dart.nullable(core.double)),
      [_cacheExtentStyle]: dart.fieldType(viewport.CacheExtentStyle),
      [_clipBehavior]: dart.fieldType(ui.Clip),
      [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
    }));
    return RenderViewportBase;
  });
  viewport.RenderViewportBase = viewport.RenderViewportBase$();
  dart.addTypeTests(viewport.RenderViewportBase, _is_RenderViewportBase_default);
  var __RenderViewport__minScrollExtent = dart.privateName(viewport, "_#RenderViewport#_minScrollExtent");
  var __RenderViewport__minScrollExtent_isSet = dart.privateName(viewport, "_#RenderViewport#_minScrollExtent#isSet");
  var __RenderViewport__maxScrollExtent = dart.privateName(viewport, "_#RenderViewport#_maxScrollExtent");
  var __RenderViewport__maxScrollExtent_isSet = dart.privateName(viewport, "_#RenderViewport#_maxScrollExtent#isSet");
  var _hasVisualOverflow = dart.privateName(viewport, "_hasVisualOverflow");
  var _anchor = dart.privateName(viewport, "_anchor");
  var _center = dart.privateName(viewport, "_center");
  var _minScrollExtent = dart.privateName(viewport, "_minScrollExtent");
  var _maxScrollExtent = dart.privateName(viewport, "_maxScrollExtent");
  var _attemptLayout = dart.privateName(viewport, "_attemptLayout");
  var SemanticsTag_name = dart.privateName(semantics, "SemanticsTag.name");
  var C18;
  var C19;
  viewport.RenderViewport = class RenderViewport extends viewport.RenderViewportBase$(sliver$.SliverPhysicalContainerParentData) {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L2, 1314, 37, "child");
      if (!sliver$.SliverPhysicalContainerParentData.is(child.parentData)) child.parentData = new sliver$.SliverPhysicalContainerParentData.new();
    }
    get anchor() {
      return this[_anchor];
    }
    set anchor(value) {
      if (value == null) dart.nullFailed(L2, 1328, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L2, 1329, 12, "value != null");
      if (!(dart.notNull(value) >= 0.0 && dart.notNull(value) <= 1.0)) dart.assertFailed(null, L2, 1330, 12, "value >= 0.0 && value <= 1.0");
      if (value == this[_anchor]) return;
      this[_anchor] = value;
      this.markNeedsLayout();
    }
    get center() {
      return this[_center];
    }
    set center(value) {
      if (dart.equals(value, this[_center])) return;
      this[_center] = value;
      this.markNeedsLayout();
    }
    get sizedByParent() {
      return true;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L2, 1360, 40, "constraints");
      if (!dart.test(dart.fn(() => {
        if (!dart.test(constraints.hasBoundedHeight) || !dart.test(constraints.hasBoundedWidth)) {
          switch (this.axis) {
            case C8 || CT.C8:
            {
              if (!dart.test(constraints.hasBoundedHeight)) {
                dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Vertical viewport was given unbounded height."), new assertions.ErrorDescription.new("Viewports expand in the scrolling direction to fill their container. " + "In this case, a vertical viewport was given an unlimited amount of " + "vertical space in which to expand. This situation typically happens " + "when a scrollable widget is nested inside another scrollable widget."), new assertions.ErrorHint.new("If this widget is always nested in a scrollable widget there " + "is no need to use a viewport because there will always be enough " + "vertical space for the children. In this case, consider using a " + "Column instead. Otherwise, consider using the \"shrinkWrap\" property " + "(or a ShrinkWrappingViewport) to size the height of the viewport " + "to the sum of the heights of its children.")])));
              }
              if (!dart.test(constraints.hasBoundedWidth)) {
                dart.throw(assertions.FlutterError.new("Vertical viewport was given unbounded width.\n" + "Viewports expand in the cross axis to fill their container and " + "constrain their children to match their extent in the cross axis. " + "In this case, a vertical viewport was given an unlimited amount of " + "horizontal space in which to expand."));
              }
              break;
            }
            case C7 || CT.C7:
            {
              if (!dart.test(constraints.hasBoundedWidth)) {
                dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Horizontal viewport was given unbounded width."), new assertions.ErrorDescription.new("Viewports expand in the scrolling direction to fill their container. " + "In this case, a horizontal viewport was given an unlimited amount of " + "horizontal space in which to expand. This situation typically happens " + "when a scrollable widget is nested inside another scrollable widget."), new assertions.ErrorHint.new("If this widget is always nested in a scrollable widget there " + "is no need to use a viewport because there will always be enough " + "horizontal space for the children. In this case, consider using a " + "Row instead. Otherwise, consider using the \"shrinkWrap\" property " + "(or a ShrinkWrappingViewport) to size the width of the viewport " + "to the sum of the widths of its children.")])));
              }
              if (!dart.test(constraints.hasBoundedHeight)) {
                dart.throw(assertions.FlutterError.new("Horizontal viewport was given unbounded height.\n" + "Viewports expand in the cross axis to fill their container and " + "constrain their children to match their extent in the cross axis. " + "In this case, a horizontal viewport was given an unlimited amount of " + "vertical space in which to expand."));
              }
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 1361, 12, "() {\n      if (!constraints.hasBoundedHeight || !constraints.hasBoundedWidth) {\n        switch (axis) {\n          case Axis.vertical:\n            if (!constraints.hasBoundedHeight) {\n              throw FlutterError.fromParts(<DiagnosticsNode>[\n                ErrorSummary('Vertical viewport was given unbounded height.'),\n                ErrorDescription(\n                  'Viewports expand in the scrolling direction to fill their container. '\n                  'In this case, a vertical viewport was given an unlimited amount of '\n                  'vertical space in which to expand. This situation typically happens '\n                  'when a scrollable widget is nested inside another scrollable widget.'\n                ),\n                ErrorHint(\n                  'If this widget is always nested in a scrollable widget there '\n                  'is no need to use a viewport because there will always be enough '\n                  'vertical space for the children. In this case, consider using a '\n                  'Column instead. Otherwise, consider using the \"shrinkWrap\" property '\n                  '(or a ShrinkWrappingViewport) to size the height of the viewport '\n                  'to the sum of the heights of its children.'\n                )\n              ]);\n            }\n            if (!constraints.hasBoundedWidth) {\n              throw FlutterError(\n                'Vertical viewport was given unbounded width.\\n'\n                'Viewports expand in the cross axis to fill their container and '\n                'constrain their children to match their extent in the cross axis. '\n                'In this case, a vertical viewport was given an unlimited amount of '\n                'horizontal space in which to expand.'\n              );\n            }\n            break;\n          case Axis.horizontal:\n            if (!constraints.hasBoundedWidth) {\n              throw FlutterError.fromParts(<DiagnosticsNode>[\n                ErrorSummary('Horizontal viewport was given unbounded width.'),\n                ErrorDescription(\n                  'Viewports expand in the scrolling direction to fill their container. '\n                  'In this case, a horizontal viewport was given an unlimited amount of '\n                  'horizontal space in which to expand. This situation typically happens '\n                  'when a scrollable widget is nested inside another scrollable widget.'\n                ),\n                ErrorHint(\n                  'If this widget is always nested in a scrollable widget there '\n                  'is no need to use a viewport because there will always be enough '\n                  'horizontal space for the children. In this case, consider using a '\n                  'Row instead. Otherwise, consider using the \"shrinkWrap\" property '\n                  '(or a ShrinkWrappingViewport) to size the width of the viewport '\n                  'to the sum of the widths of its children.'\n                )\n              ]);\n            }\n            if (!constraints.hasBoundedHeight) {\n              throw FlutterError(\n                'Horizontal viewport was given unbounded height.\\n'\n                'Viewports expand in the cross axis to fill their container and '\n                'constrain their children to match their extent in the cross axis. '\n                'In this case, a horizontal viewport was given an unlimited amount of '\n                'vertical space in which to expand.'\n              );\n            }\n            break;\n        }\n      }\n      return true;\n    }()");
      return constraints.biggest;
    }
    get [_minScrollExtent]() {
      let t7;
      return dart.test(this[__RenderViewport__minScrollExtent_isSet]) ? (t7 = this[__RenderViewport__minScrollExtent], t7) : dart.throw(new _internal.LateError.fieldNI("_minScrollExtent"));
    }
    set [_minScrollExtent](t7) {
      if (t7 == null) dart.nullFailed(L2, 1434, 15, "null");
      this[__RenderViewport__minScrollExtent_isSet] = true;
      this[__RenderViewport__minScrollExtent] = t7;
    }
    get [_maxScrollExtent]() {
      let t8;
      return dart.test(this[__RenderViewport__maxScrollExtent_isSet]) ? (t8 = this[__RenderViewport__maxScrollExtent], t8) : dart.throw(new _internal.LateError.fieldNI("_maxScrollExtent"));
    }
    set [_maxScrollExtent](t8) {
      if (t8 == null) dart.nullFailed(L2, 1435, 15, "null");
      this[__RenderViewport__maxScrollExtent_isSet] = true;
      this[__RenderViewport__maxScrollExtent] = t8;
    }
    performLayout() {
      switch (this.axis) {
        case C8 || CT.C8:
        {
          this.offset.applyViewportDimension(this.size.height);
          break;
        }
        case C7 || CT.C7:
        {
          this.offset.applyViewportDimension(this.size.width);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (this.center == null) {
        if (!(this.firstChild == null)) dart.assertFailed(null, L2, 1452, 14, "firstChild == null");
        this[_minScrollExtent] = 0.0;
        this[_maxScrollExtent] = 0.0;
        this[_hasVisualOverflow] = false;
        this.offset.applyContentDimensions(0.0, 0.0);
        return;
      }
      if (!dart.equals(dart.nullCheck(this.center).parent, this)) dart.assertFailed(null, L2, 1459, 12, "center!.parent == this");
      let mainAxisExtent = null;
      let crossAxisExtent = null;
      switch (this.axis) {
        case C8 || CT.C8:
        {
          mainAxisExtent = this.size.height;
          crossAxisExtent = this.size.width;
          break;
        }
        case C7 || CT.C7:
        {
          mainAxisExtent = this.size.width;
          crossAxisExtent = this.size.height;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let centerOffsetAdjustment = dart.nullCheck(this.center).centerOffsetAdjustment;
      let correction = null;
      let count = 0;
      do {
        if (!(this.offset.pixels != null)) dart.assertFailed(null, L2, 1479, 14, "offset.pixels != null");
        correction = this[_attemptLayout](mainAxisExtent, crossAxisExtent, dart.notNull(this.offset.pixels) + dart.notNull(centerOffsetAdjustment));
        if (correction !== 0.0) {
          this.offset.correctBy(correction);
        } else {
          if (dart.test(this.offset.applyContentDimensions(math.min(core.double, 0.0, dart.notNull(this[_minScrollExtent]) + dart.notNull(mainAxisExtent) * dart.notNull(this.anchor)), math.max(core.double, 0.0, dart.notNull(this[_maxScrollExtent]) - dart.notNull(mainAxisExtent) * (1.0 - dart.notNull(this.anchor)))))) break;
        }
        count = count + 1;
      } while (count < 10);
      if (!dart.test(dart.fn(() => {
        if (count >= 10) {
          if (!(count !== 1)) dart.assertFailed(null, L2, 1494, 16, "count != 1");
          dart.throw(assertions.FlutterError.new("A RenderViewport exceeded its maximum number of layout cycles.\n" + "RenderViewport render objects, during layout, can retry if either their " + "slivers or their ViewportOffset decide that the offset should be corrected " + "to take into account information collected during that layout.\n" + "In the case of this RenderViewport object, however, this happened " + dart.str(count) + " " + "times and still there was no consensus on the scroll offset. This usually " + "indicates a bug. Specifically, it means that one of the following three " + "problems is being experienced by the RenderViewport object:\n" + " * One of the RenderSliver children or the ViewportOffset have a bug such" + " that they always think that they need to correct the offset regardless.\n" + " * Some combination of the RenderSliver children and the ViewportOffset" + " have a bad interaction such that one applies a correction then another" + " applies a reverse correction, leading to an infinite loop of corrections.\n" + " * There is a pathological case that would eventually resolve, but it is" + " so complicated that it cannot be resolved in any reasonable number of" + " layout passes."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 1492, 12, "() {\n      if (count >= _maxLayoutCycles) {\n        assert(count != 1);\n        throw FlutterError(\n          'A RenderViewport exceeded its maximum number of layout cycles.\\n'\n          'RenderViewport render objects, during layout, can retry if either their '\n          'slivers or their ViewportOffset decide that the offset should be corrected '\n          'to take into account information collected during that layout.\\n'\n          'In the case of this RenderViewport object, however, this happened $count '\n          'times and still there was no consensus on the scroll offset. This usually '\n          'indicates a bug. Specifically, it means that one of the following three '\n          'problems is being experienced by the RenderViewport object:\\n'\n          ' * One of the RenderSliver children or the ViewportOffset have a bug such'\n          ' that they always think that they need to correct the offset regardless.\\n'\n          ' * Some combination of the RenderSliver children and the ViewportOffset'\n          ' have a bad interaction such that one applies a correction then another'\n          ' applies a reverse correction, leading to an infinite loop of corrections.\\n'\n          ' * There is a pathological case that would eventually resolve, but it is'\n          ' so complicated that it cannot be resolved in any reasonable number of'\n          ' layout passes.'\n        );\n      }\n      return true;\n    }()");
    }
    [_attemptLayout](mainAxisExtent, crossAxisExtent, correctedOffset) {
      if (mainAxisExtent == null) dart.nullFailed(L2, 1518, 32, "mainAxisExtent");
      if (crossAxisExtent == null) dart.nullFailed(L2, 1518, 55, "crossAxisExtent");
      if (correctedOffset == null) dart.nullFailed(L2, 1518, 79, "correctedOffset");
      if (!!mainAxisExtent[$isNaN]) dart.assertFailed(null, L2, 1519, 12, "!mainAxisExtent.isNaN");
      if (!(dart.notNull(mainAxisExtent) >= 0.0)) dart.assertFailed(null, L2, 1520, 12, "mainAxisExtent >= 0.0");
      if (!crossAxisExtent[$isFinite]) dart.assertFailed(null, L2, 1521, 12, "crossAxisExtent.isFinite");
      if (!(dart.notNull(crossAxisExtent) >= 0.0)) dart.assertFailed(null, L2, 1522, 12, "crossAxisExtent >= 0.0");
      if (!correctedOffset[$isFinite]) dart.assertFailed(null, L2, 1523, 12, "correctedOffset.isFinite");
      this[_minScrollExtent] = 0.0;
      this[_maxScrollExtent] = 0.0;
      this[_hasVisualOverflow] = false;
      let centerOffset = dart.notNull(mainAxisExtent) * dart.notNull(this.anchor) - dart.notNull(correctedOffset);
      let reverseDirectionRemainingPaintExtent = centerOffset[$clamp](0.0, mainAxisExtent);
      let forwardDirectionRemainingPaintExtent = (dart.notNull(mainAxisExtent) - centerOffset)[$clamp](0.0, mainAxisExtent);
      switch (this.cacheExtentStyle) {
        case C11 || CT.C11:
        {
          this[_calculatedCacheExtent] = this.cacheExtent;
          break;
        }
        case C12 || CT.C12:
        {
          this[_calculatedCacheExtent] = dart.notNull(mainAxisExtent) * dart.notNull(this[_cacheExtent]);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let fullCacheExtent = dart.notNull(mainAxisExtent) + 2 * dart.nullCheck(this[_calculatedCacheExtent]);
      let centerCacheOffset = centerOffset + dart.nullCheck(this[_calculatedCacheExtent]);
      let reverseDirectionRemainingCacheExtent = centerCacheOffset[$clamp](0.0, fullCacheExtent);
      let forwardDirectionRemainingCacheExtent = (fullCacheExtent - centerCacheOffset)[$clamp](0.0, fullCacheExtent);
      let leadingNegativeChild = this.childBefore(dart.nullCheck(this.center));
      if (leadingNegativeChild != null) {
        let result = this.layoutChildSequence({child: leadingNegativeChild, scrollOffset: math.max(core.double, mainAxisExtent, centerOffset) - dart.notNull(mainAxisExtent), overlap: 0.0, layoutOffset: forwardDirectionRemainingPaintExtent, remainingPaintExtent: reverseDirectionRemainingPaintExtent, mainAxisExtent: mainAxisExtent, crossAxisExtent: crossAxisExtent, growthDirection: sliver$.GrowthDirection.reverse, advance: dart.bind(this, 'childBefore'), remainingCacheExtent: reverseDirectionRemainingCacheExtent, cacheOrigin: (dart.notNull(mainAxisExtent) - centerOffset)[$clamp](-dart.nullCheck(this[_calculatedCacheExtent]), 0.0)});
        if (result !== 0.0) return -dart.notNull(result);
      }
      return this.layoutChildSequence({child: this.center, scrollOffset: math.max(core.double, 0.0, -centerOffset), overlap: leadingNegativeChild == null ? math.min(core.double, 0.0, -centerOffset) : 0.0, layoutOffset: centerOffset >= dart.notNull(mainAxisExtent) ? centerOffset : reverseDirectionRemainingPaintExtent, remainingPaintExtent: forwardDirectionRemainingPaintExtent, mainAxisExtent: mainAxisExtent, crossAxisExtent: crossAxisExtent, growthDirection: sliver$.GrowthDirection.forward, advance: dart.bind(this, 'childAfter'), remainingCacheExtent: forwardDirectionRemainingCacheExtent, cacheOrigin: centerOffset[$clamp](-dart.nullCheck(this[_calculatedCacheExtent]), 0.0)});
    }
    get hasVisualOverflow() {
      return this[_hasVisualOverflow];
    }
    updateOutOfBandData(growthDirection, childLayoutGeometry) {
      if (growthDirection == null) dart.nullFailed(L2, 1590, 44, "growthDirection");
      if (childLayoutGeometry == null) dart.nullFailed(L2, 1590, 76, "childLayoutGeometry");
      switch (growthDirection) {
        case C0 || CT.C0:
        {
          this[_maxScrollExtent] = dart.notNull(this[_maxScrollExtent]) + dart.notNull(childLayoutGeometry.scrollExtent);
          break;
        }
        case C1 || CT.C1:
        {
          this[_minScrollExtent] = dart.notNull(this[_minScrollExtent]) - dart.notNull(childLayoutGeometry.scrollExtent);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (dart.test(childLayoutGeometry.hasVisualOverflow)) this[_hasVisualOverflow] = true;
    }
    updateChildLayoutOffset(child, layoutOffset, growthDirection) {
      if (child == null) dart.nullFailed(L2, 1604, 45, "child");
      if (layoutOffset == null) dart.nullFailed(L2, 1604, 59, "layoutOffset");
      if (growthDirection == null) dart.nullFailed(L2, 1604, 89, "growthDirection");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.paintOffset = this.computeAbsolutePaintOffset(child, layoutOffset, growthDirection);
    }
    paintOffsetOf(child) {
      if (child == null) dart.nullFailed(L2, 1610, 37, "child");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      return childParentData.paintOffset;
    }
    scrollOffsetOf(child, scrollOffsetWithinChild) {
      if (child == null) dart.nullFailed(L2, 1616, 38, "child");
      if (scrollOffsetWithinChild == null) dart.nullFailed(L2, 1616, 52, "scrollOffsetWithinChild");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L2, 1617, 12, "child.parent == this");
      let growthDirection = child.constraints.growthDirection;
      if (!(growthDirection != null)) dart.assertFailed(null, L2, 1619, 12, "growthDirection != null");
      switch (growthDirection) {
        case C0 || CT.C0:
        {
          let scrollOffsetToChild = 0.0;
          let current = this.center;
          while (!dart.equals(current, child)) {
            scrollOffsetToChild = scrollOffsetToChild + dart.notNull(dart.nullCheck(dart.nullCheck(current).geometry).scrollExtent);
            current = this.childAfter(current);
          }
          return scrollOffsetToChild + dart.notNull(scrollOffsetWithinChild);
        }
        case C1 || CT.C1:
        {
          let scrollOffsetToChild = 0.0;
          let current = this.childBefore(dart.nullCheck(this.center));
          while (!dart.equals(current, child)) {
            scrollOffsetToChild = scrollOffsetToChild - dart.notNull(dart.nullCheck(dart.nullCheck(current).geometry).scrollExtent);
            current = this.childBefore(current);
          }
          return scrollOffsetToChild - dart.notNull(scrollOffsetWithinChild);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    maxScrollObstructionExtentBefore(child) {
      if (child == null) dart.nullFailed(L2, 1641, 56, "child");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L2, 1642, 12, "child.parent == this");
      let growthDirection = child.constraints.growthDirection;
      if (!(growthDirection != null)) dart.assertFailed(null, L2, 1644, 12, "growthDirection != null");
      switch (growthDirection) {
        case C0 || CT.C0:
        {
          let pinnedExtent = 0.0;
          let current = this.center;
          while (!dart.equals(current, child)) {
            pinnedExtent = pinnedExtent + dart.notNull(dart.nullCheck(dart.nullCheck(current).geometry).maxScrollObstructionExtent);
            current = this.childAfter(current);
          }
          return pinnedExtent;
        }
        case C1 || CT.C1:
        {
          let pinnedExtent = 0.0;
          let current = this.childBefore(dart.nullCheck(this.center));
          while (!dart.equals(current, child)) {
            pinnedExtent = pinnedExtent + dart.notNull(dart.nullCheck(dart.nullCheck(current).geometry).maxScrollObstructionExtent);
            current = this.childBefore(current);
          }
          return pinnedExtent;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L2, 1666, 41, "child");
      if (transform == null) dart.nullFailed(L2, 1666, 56, "transform");
      if (!(child != null)) dart.assertFailed(null, L2, 1668, 12, "child != null");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
    computeChildMainAxisPosition(child, parentMainAxisPosition) {
      if (child == null) dart.nullFailed(L2, 1674, 52, "child");
      if (parentMainAxisPosition == null) dart.nullFailed(L2, 1674, 66, "parentMainAxisPosition");
      if (!(child != null)) dart.assertFailed(null, L2, 1675, 12, "child != null");
      if (!(child.constraints != null)) dart.assertFailed(null, L2, 1676, 12, "child.constraints != null");
      let childParentData = sliver$.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      switch (sliver$.applyGrowthDirectionToAxisDirection(child.constraints.axisDirection, child.constraints.growthDirection)) {
        case C3 || CT.C3:
        {
          return dart.notNull(parentMainAxisPosition) - dart.notNull(childParentData.paintOffset.dy);
        }
        case C4 || CT.C4:
        {
          return dart.notNull(parentMainAxisPosition) - dart.notNull(childParentData.paintOffset.dx);
        }
        case C5 || CT.C5:
        {
          return dart.notNull(dart.nullCheck(child.geometry).paintExtent) - (dart.notNull(parentMainAxisPosition) - dart.notNull(childParentData.paintOffset.dy));
        }
        case C6 || CT.C6:
        {
          return dart.notNull(dart.nullCheck(child.geometry).paintExtent) - (dart.notNull(parentMainAxisPosition) - dart.notNull(childParentData.paintOffset.dx));
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get indexOfFirstChild() {
      if (!(this.center != null)) dart.assertFailed(null, L2, 1692, 12, "center != null");
      if (!dart.equals(dart.nullCheck(this.center).parent, this)) dart.assertFailed(null, L2, 1693, 12, "center!.parent == this");
      if (!(this.firstChild != null)) dart.assertFailed(null, L2, 1694, 12, "firstChild != null");
      let count = 0;
      let child = this.center;
      while (!dart.equals(child, this.firstChild)) {
        count = count - 1;
        child = this.childBefore(dart.nullCheck(child));
      }
      return count;
    }
    labelForChild(index) {
      if (index == null) dart.nullFailed(L2, 1705, 28, "index");
      if (index === 0) return "center child";
      return "child " + dart.str(index);
    }
    get childrenInPaintOrder() {
      return new (SyncIterableOfRenderSliver()).new((function* childrenInPaintOrder() {
        if (this.firstChild == null) return;
        let child = this.firstChild;
        while (!dart.equals(child, this.center)) {
          yield dart.nullCheck(child);
          child = this.childAfter(child);
        }
        child = this.lastChild;
        while (true) {
          yield dart.nullCheck(child);
          if (dart.equals(child, this.center)) return;
          child = this.childBefore(child);
        }
      }).bind(this));
    }
    get childrenInHitTestOrder() {
      return new (SyncIterableOfRenderSliver()).new((function* childrenInHitTestOrder() {
        if (this.firstChild == null) return;
        let child = this.center;
        while (child != null) {
          yield child;
          child = this.childAfter(child);
        }
        child = this.childBefore(dart.nullCheck(this.center));
        while (child != null) {
          yield child;
          child = this.childBefore(child);
        }
      }).bind(this));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L2, 1746, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("anchor", this.anchor));
    }
  };
  (viewport.RenderViewport.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C3 || CT.C3;
    if (axisDirection == null) dart.nullFailed(L2, 1250, 19, "axisDirection");
    let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
    if (crossAxisDirection == null) dart.nullFailed(L2, 1251, 28, "crossAxisDirection");
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L2, 1252, 29, "offset");
    let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
    if (anchor == null) dart.nullFailed(L2, 1253, 12, "anchor");
    let children = opts && 'children' in opts ? opts.children : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let cacheExtentStyle = opts && 'cacheExtentStyle' in opts ? opts.cacheExtentStyle : C11 || CT.C11;
    if (cacheExtentStyle == null) dart.nullFailed(L2, 1257, 22, "cacheExtentStyle");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C14 || CT.C14;
    if (clipBehavior == null) dart.nullFailed(L2, 1258, 10, "clipBehavior");
    this[__RenderViewport__minScrollExtent] = null;
    this[__RenderViewport__minScrollExtent_isSet] = false;
    this[__RenderViewport__maxScrollExtent] = null;
    this[__RenderViewport__maxScrollExtent_isSet] = false;
    this[_hasVisualOverflow] = false;
    if (!(anchor != null)) dart.assertFailed(null, L2, 1259, 15, "anchor != null");
    if (!(dart.notNull(anchor) >= 0.0 && dart.notNull(anchor) <= 1.0)) dart.assertFailed(null, L2, 1260, 15, "anchor >= 0.0 && anchor <= 1.0");
    if (!(!dart.equals(cacheExtentStyle, viewport.CacheExtentStyle.viewport) || cacheExtent != null)) dart.assertFailed(null, L2, 1261, 15, "cacheExtentStyle != CacheExtentStyle.viewport || cacheExtent != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L2, 1262, 15, "clipBehavior != null");
    this[_anchor] = anchor;
    this[_center] = center;
    viewport.RenderViewport.__proto__.new.call(this, {axisDirection: axisDirection, crossAxisDirection: crossAxisDirection, offset: offset, cacheExtent: cacheExtent, cacheExtentStyle: cacheExtentStyle, clipBehavior: clipBehavior});
    this.addAll(children);
    if (center == null && this.firstChild != null) this[_center] = this.firstChild;
  }).prototype = viewport.RenderViewport.prototype;
  dart.addTypeTests(viewport.RenderViewport);
  dart.addTypeCaches(viewport.RenderViewport);
  dart.setMethodSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getMethods(viewport.RenderViewport.__proto__),
    [_attemptLayout]: dart.fnType(core.double, [core.double, core.double, core.double]),
    updateOutOfBandData: dart.fnType(dart.void, [sliver$.GrowthDirection, sliver$.SliverGeometry]),
    updateChildLayoutOffset: dart.fnType(dart.void, [sliver$.RenderSliver, core.double, sliver$.GrowthDirection]),
    paintOffsetOf: dart.fnType(ui.Offset, [sliver$.RenderSliver]),
    scrollOffsetOf: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    maxScrollObstructionExtentBefore: dart.fnType(core.double, [sliver$.RenderSliver]),
    computeChildMainAxisPosition: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    labelForChild: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getGetters(viewport.RenderViewport.__proto__),
    anchor: core.double,
    center: dart.nullable(sliver$.RenderSliver),
    [_minScrollExtent]: core.double,
    [_maxScrollExtent]: core.double,
    hasVisualOverflow: core.bool,
    indexOfFirstChild: core.int,
    childrenInPaintOrder: core.Iterable$(sliver$.RenderSliver),
    childrenInHitTestOrder: core.Iterable$(sliver$.RenderSliver)
  }));
  dart.setSetterSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getSetters(viewport.RenderViewport.__proto__),
    anchor: core.double,
    center: dart.nullable(sliver$.RenderSliver),
    [_minScrollExtent]: core.double,
    [_maxScrollExtent]: core.double
  }));
  dart.setLibraryUri(viewport.RenderViewport, L3);
  dart.setFieldSignature(viewport.RenderViewport, () => ({
    __proto__: dart.getFields(viewport.RenderViewport.__proto__),
    [_anchor]: dart.fieldType(core.double),
    [_center]: dart.fieldType(dart.nullable(sliver$.RenderSliver)),
    [__RenderViewport__minScrollExtent]: dart.fieldType(dart.nullable(core.double)),
    [__RenderViewport__minScrollExtent_isSet]: dart.fieldType(core.bool),
    [__RenderViewport__maxScrollExtent]: dart.fieldType(dart.nullable(core.double)),
    [__RenderViewport__maxScrollExtent_isSet]: dart.fieldType(core.bool),
    [_hasVisualOverflow]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(viewport.RenderViewport, {
    /*viewport.RenderViewport.useTwoPaneSemantics*/get useTwoPaneSemantics() {
      return C18 || CT.C18;
    },
    /*viewport.RenderViewport.excludeFromScrolling*/get excludeFromScrolling() {
      return C19 || CT.C19;
    },
    /*viewport.RenderViewport._maxLayoutCycles*/get _maxLayoutCycles() {
      return 10;
    }
  }, false);
  var __RenderShrinkWrappingViewport__maxScrollExtent = dart.privateName(viewport, "_#RenderShrinkWrappingViewport#_maxScrollExtent");
  var __RenderShrinkWrappingViewport__maxScrollExtent_isSet = dart.privateName(viewport, "_#RenderShrinkWrappingViewport#_maxScrollExtent#isSet");
  var __RenderShrinkWrappingViewport__shrinkWrapExtent = dart.privateName(viewport, "_#RenderShrinkWrappingViewport#_shrinkWrapExtent");
  var __RenderShrinkWrappingViewport__shrinkWrapExtent_isSet = dart.privateName(viewport, "_#RenderShrinkWrappingViewport#_shrinkWrapExtent#isSet");
  var _shrinkWrapExtent = dart.privateName(viewport, "_shrinkWrapExtent");
  viewport.RenderShrinkWrappingViewport = class RenderShrinkWrappingViewport extends viewport.RenderViewportBase$(sliver$.SliverLogicalContainerParentData) {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L2, 1799, 37, "child");
      if (!sliver$.SliverLogicalContainerParentData.is(child.parentData)) child.parentData = new sliver$.SliverLogicalContainerParentData.new();
    }
    debugThrowIfNotCheckingIntrinsics() {
      if (!dart.test(dart.fn(() => {
        if (!dart.test(object.RenderObject.debugCheckingIntrinsics)) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not support returning intrinsic dimensions."), new assertions.ErrorDescription.new("Calculating the intrinsic dimensions would require instantiating every child of " + "the viewport, which defeats the point of viewports being lazy."), new assertions.ErrorHint.new("If you are merely trying to shrink-wrap the viewport in the main axis direction, " + "you should be able to achieve that effect by just giving the viewport loose " + "constraints, without needing to measure its intrinsic dimensions.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L2, 1806, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not support returning intrinsic dimensions.'),\n          ErrorDescription(\n           'Calculating the intrinsic dimensions would require instantiating every child of '\n           'the viewport, which defeats the point of viewports being lazy.'\n          ),\n          ErrorHint(\n            'If you are merely trying to shrink-wrap the viewport in the main axis direction, '\n            'you should be able to achieve that effect by just giving the viewport loose '\n            'constraints, without needing to measure its intrinsic dimensions.'\n          )\n        ]);\n      }\n      return true;\n    }()");
      return true;
    }
    get [_maxScrollExtent]() {
      let t9;
      return dart.test(this[__RenderShrinkWrappingViewport__maxScrollExtent_isSet]) ? (t9 = this[__RenderShrinkWrappingViewport__maxScrollExtent], t9) : dart.throw(new _internal.LateError.fieldNI("_maxScrollExtent"));
    }
    set [_maxScrollExtent](t9) {
      if (t9 == null) dart.nullFailed(L2, 1827, 15, "null");
      this[__RenderShrinkWrappingViewport__maxScrollExtent_isSet] = true;
      this[__RenderShrinkWrappingViewport__maxScrollExtent] = t9;
    }
    get [_shrinkWrapExtent]() {
      let t10;
      return dart.test(this[__RenderShrinkWrappingViewport__shrinkWrapExtent_isSet]) ? (t10 = this[__RenderShrinkWrappingViewport__shrinkWrapExtent], t10) : dart.throw(new _internal.LateError.fieldNI("_shrinkWrapExtent"));
    }
    set [_shrinkWrapExtent](t10) {
      if (t10 == null) dart.nullFailed(L2, 1828, 15, "null");
      this[__RenderShrinkWrappingViewport__shrinkWrapExtent_isSet] = true;
      this[__RenderShrinkWrappingViewport__shrinkWrapExtent] = t10;
    }
    performLayout() {
      let constraints = this.constraints;
      if (this.firstChild == null) {
        switch (this.axis) {
          case C8 || CT.C8:
          {
            if (!dart.test(constraints.hasBoundedWidth)) dart.assertFailed(null, L2, 1837, 18, "constraints.hasBoundedWidth");
            this.size = new ui.Size.new(constraints.maxWidth, constraints.minHeight);
            break;
          }
          case C7 || CT.C7:
          {
            if (!dart.test(constraints.hasBoundedHeight)) dart.assertFailed(null, L2, 1841, 18, "constraints.hasBoundedHeight");
            this.size = new ui.Size.new(constraints.minWidth, constraints.maxHeight);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        this.offset.applyViewportDimension(0.0);
        this[_maxScrollExtent] = 0.0;
        this[_shrinkWrapExtent] = 0.0;
        this[_hasVisualOverflow] = false;
        this.offset.applyContentDimensions(0.0, 0.0);
        return;
      }
      let mainAxisExtent = null;
      let crossAxisExtent = null;
      switch (this.axis) {
        case C8 || CT.C8:
        {
          if (!dart.test(constraints.hasBoundedWidth)) dart.assertFailed(null, L2, 1857, 16, "constraints.hasBoundedWidth");
          mainAxisExtent = constraints.maxHeight;
          crossAxisExtent = constraints.maxWidth;
          break;
        }
        case C7 || CT.C7:
        {
          if (!dart.test(constraints.hasBoundedHeight)) dart.assertFailed(null, L2, 1862, 16, "constraints.hasBoundedHeight");
          mainAxisExtent = constraints.maxWidth;
          crossAxisExtent = constraints.maxHeight;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let correction = null;
      let effectiveExtent = null;
      do {
        if (!(this.offset.pixels != null)) dart.assertFailed(null, L2, 1871, 14, "offset.pixels != null");
        correction = this[_attemptLayout](mainAxisExtent, crossAxisExtent, this.offset.pixels);
        if (correction !== 0.0) {
          this.offset.correctBy(correction);
        } else {
          switch (this.axis) {
            case C8 || CT.C8:
            {
              effectiveExtent = constraints.constrainHeight(this[_shrinkWrapExtent]);
              break;
            }
            case C7 || CT.C7:
            {
              effectiveExtent = constraints.constrainWidth(this[_shrinkWrapExtent]);
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
          let didAcceptViewportDimension = this.offset.applyViewportDimension(effectiveExtent);
          let didAcceptContentDimension = this.offset.applyContentDimensions(0.0, math.max(core.double, 0.0, dart.notNull(this[_maxScrollExtent]) - dart.notNull(effectiveExtent)));
          if (dart.test(didAcceptViewportDimension) && dart.test(didAcceptContentDimension)) break;
        }
      } while (true);
      switch (this.axis) {
        case C8 || CT.C8:
        {
          this.size = constraints.constrainDimensions(crossAxisExtent, effectiveExtent);
          break;
        }
        case C7 || CT.C7:
        {
          this.size = constraints.constrainDimensions(effectiveExtent, crossAxisExtent);
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_attemptLayout](mainAxisExtent, crossAxisExtent, correctedOffset) {
      if (mainAxisExtent == null) dart.nullFailed(L2, 1900, 32, "mainAxisExtent");
      if (crossAxisExtent == null) dart.nullFailed(L2, 1900, 55, "crossAxisExtent");
      if (correctedOffset == null) dart.nullFailed(L2, 1900, 79, "correctedOffset");
      if (!!mainAxisExtent[$isNaN]) dart.assertFailed(null, L2, 1906, 12, "!mainAxisExtent.isNaN");
      if (!(dart.notNull(mainAxisExtent) >= 0.0)) dart.assertFailed(null, L2, 1907, 12, "mainAxisExtent >= 0.0");
      if (!crossAxisExtent[$isFinite]) dart.assertFailed(null, L2, 1908, 12, "crossAxisExtent.isFinite");
      if (!(dart.notNull(crossAxisExtent) >= 0.0)) dart.assertFailed(null, L2, 1909, 12, "crossAxisExtent >= 0.0");
      if (!correctedOffset[$isFinite]) dart.assertFailed(null, L2, 1910, 12, "correctedOffset.isFinite");
      this[_maxScrollExtent] = 0.0;
      this[_shrinkWrapExtent] = 0.0;
      this[_hasVisualOverflow] = false;
      return this.layoutChildSequence({child: this.firstChild, scrollOffset: math.max(core.double, 0.0, correctedOffset), overlap: math.min(core.double, 0.0, correctedOffset), layoutOffset: 0.0, remainingPaintExtent: mainAxisExtent, mainAxisExtent: mainAxisExtent, crossAxisExtent: crossAxisExtent, growthDirection: sliver$.GrowthDirection.forward, advance: dart.bind(this, 'childAfter'), remainingCacheExtent: dart.notNull(mainAxisExtent) + 2 * dart.notNull(this[_cacheExtent]), cacheOrigin: -dart.notNull(this[_cacheExtent])});
    }
    get hasVisualOverflow() {
      return this[_hasVisualOverflow];
    }
    updateOutOfBandData(growthDirection, childLayoutGeometry) {
      if (growthDirection == null) dart.nullFailed(L2, 1933, 44, "growthDirection");
      if (childLayoutGeometry == null) dart.nullFailed(L2, 1933, 76, "childLayoutGeometry");
      if (!dart.equals(growthDirection, sliver$.GrowthDirection.forward)) dart.assertFailed(null, L2, 1934, 12, "growthDirection == GrowthDirection.forward");
      this[_maxScrollExtent] = dart.notNull(this[_maxScrollExtent]) + dart.notNull(childLayoutGeometry.scrollExtent);
      if (dart.test(childLayoutGeometry.hasVisualOverflow)) this[_hasVisualOverflow] = true;
      this[_shrinkWrapExtent] = dart.notNull(this[_shrinkWrapExtent]) + dart.notNull(childLayoutGeometry.maxPaintExtent);
    }
    updateChildLayoutOffset(child, layoutOffset, growthDirection) {
      if (child == null) dart.nullFailed(L2, 1942, 45, "child");
      if (layoutOffset == null) dart.nullFailed(L2, 1942, 59, "layoutOffset");
      if (growthDirection == null) dart.nullFailed(L2, 1942, 89, "growthDirection");
      if (!dart.equals(growthDirection, sliver$.GrowthDirection.forward)) dart.assertFailed(null, L2, 1943, 12, "growthDirection == GrowthDirection.forward");
      let childParentData = sliver$.SliverLogicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.layoutOffset = layoutOffset;
    }
    paintOffsetOf(child) {
      if (child == null) dart.nullFailed(L2, 1949, 37, "child");
      let childParentData = sliver$.SliverLogicalParentData.as(dart.nullCheck(child.parentData));
      return this.computeAbsolutePaintOffset(child, dart.nullCheck(childParentData.layoutOffset), sliver$.GrowthDirection.forward);
    }
    scrollOffsetOf(child, scrollOffsetWithinChild) {
      if (child == null) dart.nullFailed(L2, 1955, 38, "child");
      if (scrollOffsetWithinChild == null) dart.nullFailed(L2, 1955, 52, "scrollOffsetWithinChild");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L2, 1956, 12, "child.parent == this");
      if (!dart.equals(child.constraints.growthDirection, sliver$.GrowthDirection.forward)) dart.assertFailed(null, L2, 1957, 12, "child.constraints.growthDirection == GrowthDirection.forward");
      let scrollOffsetToChild = 0.0;
      let current = this.firstChild;
      while (!dart.equals(current, child)) {
        scrollOffsetToChild = scrollOffsetToChild + dart.notNull(dart.nullCheck(dart.nullCheck(current).geometry).scrollExtent);
        current = this.childAfter(current);
      }
      return scrollOffsetToChild + dart.notNull(scrollOffsetWithinChild);
    }
    maxScrollObstructionExtentBefore(child) {
      if (child == null) dart.nullFailed(L2, 1968, 56, "child");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L2, 1969, 12, "child.parent == this");
      if (!dart.equals(child.constraints.growthDirection, sliver$.GrowthDirection.forward)) dart.assertFailed(null, L2, 1970, 12, "child.constraints.growthDirection == GrowthDirection.forward");
      let pinnedExtent = 0.0;
      let current = this.firstChild;
      while (!dart.equals(current, child)) {
        pinnedExtent = pinnedExtent + dart.notNull(dart.nullCheck(dart.nullCheck(current).geometry).maxScrollObstructionExtent);
        current = this.childAfter(current);
      }
      return pinnedExtent;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L2, 1981, 41, "child");
      if (transform == null) dart.nullFailed(L2, 1981, 56, "transform");
      if (!(child != null)) dart.assertFailed(null, L2, 1983, 12, "child != null");
      let offset = this.paintOffsetOf(sliver$.RenderSliver.as(child));
      transform.translate(offset.dx, offset.dy);
    }
    computeChildMainAxisPosition(child, parentMainAxisPosition) {
      if (child == null) dart.nullFailed(L2, 1989, 52, "child");
      if (parentMainAxisPosition == null) dart.nullFailed(L2, 1989, 66, "parentMainAxisPosition");
      if (!(child != null)) dart.assertFailed(null, L2, 1990, 12, "child != null");
      if (!(child.constraints != null)) dart.assertFailed(null, L2, 1991, 12, "child.constraints != null");
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L2, 1992, 12, "hasSize");
      let childParentData = sliver$.SliverLogicalParentData.as(dart.nullCheck(child.parentData));
      switch (sliver$.applyGrowthDirectionToAxisDirection(child.constraints.axisDirection, child.constraints.growthDirection)) {
        case C3 || CT.C3:
        case C4 || CT.C4:
        {
          return dart.notNull(parentMainAxisPosition) - dart.nullCheck(childParentData.layoutOffset);
        }
        case C5 || CT.C5:
        {
          return dart.notNull(this.size.height) - dart.notNull(parentMainAxisPosition) - dart.nullCheck(childParentData.layoutOffset);
        }
        case C6 || CT.C6:
        {
          return dart.notNull(this.size.width) - dart.notNull(parentMainAxisPosition) - dart.nullCheck(childParentData.layoutOffset);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get indexOfFirstChild() {
      return 0;
    }
    labelForChild(index) {
      if (index == null) dart.nullFailed(L2, 2009, 28, "index");
      return "child " + dart.str(index);
    }
    get childrenInPaintOrder() {
      return new (SyncIterableOfRenderSliver()).new((function* childrenInPaintOrder() {
        let child = this.firstChild;
        while (child != null) {
          yield child;
          child = this.childAfter(child);
        }
      }).bind(this));
    }
    get childrenInHitTestOrder() {
      return new (SyncIterableOfRenderSliver()).new((function* childrenInHitTestOrder() {
        let child = this.lastChild;
        while (child != null) {
          yield child;
          child = this.childBefore(child);
        }
      }).bind(this));
    }
  };
  (viewport.RenderShrinkWrappingViewport.new = function(opts) {
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C3 || CT.C3;
    if (axisDirection == null) dart.nullFailed(L2, 1784, 19, "axisDirection");
    let crossAxisDirection = opts && 'crossAxisDirection' in opts ? opts.crossAxisDirection : null;
    if (crossAxisDirection == null) dart.nullFailed(L2, 1785, 28, "crossAxisDirection");
    let offset = opts && 'offset' in opts ? opts.offset : null;
    if (offset == null) dart.nullFailed(L2, 1786, 29, "offset");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C14 || CT.C14;
    if (clipBehavior == null) dart.nullFailed(L2, 1787, 10, "clipBehavior");
    let children = opts && 'children' in opts ? opts.children : null;
    this[__RenderShrinkWrappingViewport__maxScrollExtent] = null;
    this[__RenderShrinkWrappingViewport__maxScrollExtent_isSet] = false;
    this[__RenderShrinkWrappingViewport__shrinkWrapExtent] = null;
    this[__RenderShrinkWrappingViewport__shrinkWrapExtent_isSet] = false;
    this[_hasVisualOverflow] = false;
    viewport.RenderShrinkWrappingViewport.__proto__.new.call(this, {axisDirection: axisDirection, crossAxisDirection: crossAxisDirection, offset: offset, clipBehavior: clipBehavior});
    this.addAll(children);
  }).prototype = viewport.RenderShrinkWrappingViewport.prototype;
  dart.addTypeTests(viewport.RenderShrinkWrappingViewport);
  dart.addTypeCaches(viewport.RenderShrinkWrappingViewport);
  dart.setMethodSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getMethods(viewport.RenderShrinkWrappingViewport.__proto__),
    [_attemptLayout]: dart.fnType(core.double, [core.double, core.double, core.double]),
    updateOutOfBandData: dart.fnType(dart.void, [sliver$.GrowthDirection, sliver$.SliverGeometry]),
    updateChildLayoutOffset: dart.fnType(dart.void, [sliver$.RenderSliver, core.double, sliver$.GrowthDirection]),
    paintOffsetOf: dart.fnType(ui.Offset, [sliver$.RenderSliver]),
    scrollOffsetOf: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    maxScrollObstructionExtentBefore: dart.fnType(core.double, [sliver$.RenderSliver]),
    computeChildMainAxisPosition: dart.fnType(core.double, [sliver$.RenderSliver, core.double]),
    labelForChild: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getGetters(viewport.RenderShrinkWrappingViewport.__proto__),
    [_maxScrollExtent]: core.double,
    [_shrinkWrapExtent]: core.double,
    hasVisualOverflow: core.bool,
    indexOfFirstChild: core.int,
    childrenInPaintOrder: core.Iterable$(sliver$.RenderSliver),
    childrenInHitTestOrder: core.Iterable$(sliver$.RenderSliver)
  }));
  dart.setSetterSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getSetters(viewport.RenderShrinkWrappingViewport.__proto__),
    [_maxScrollExtent]: core.double,
    [_shrinkWrapExtent]: core.double
  }));
  dart.setLibraryUri(viewport.RenderShrinkWrappingViewport, L3);
  dart.setFieldSignature(viewport.RenderShrinkWrappingViewport, () => ({
    __proto__: dart.getFields(viewport.RenderShrinkWrappingViewport.__proto__),
    [__RenderShrinkWrappingViewport__maxScrollExtent]: dart.fieldType(dart.nullable(core.double)),
    [__RenderShrinkWrappingViewport__maxScrollExtent_isSet]: dart.fieldType(core.bool),
    [__RenderShrinkWrappingViewport__shrinkWrapExtent]: dart.fieldType(dart.nullable(core.double)),
    [__RenderShrinkWrappingViewport__shrinkWrapExtent_isSet]: dart.fieldType(core.bool),
    [_hasVisualOverflow]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver.dart", {
    "package:flutter/src/rendering/sliver.dart": sliver$,
    "package:flutter/src/rendering/viewport.dart": viewport
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver.dart","viewport.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver: sliver$,
    src__rendering__viewport: viewport
  };
}));

//# sourceMappingURL=sliver.dart.lib.js.map
