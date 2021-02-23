define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/services/text_editing.dart'], (function load__packages__flutter__src__rendering__proxy_box_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__debug$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__services__text_editing$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const mouse_cursor = packages__flutter__src__rendering__layer$46dart.src__rendering__mouse_cursor;
  const mouse_tracking = packages__flutter__src__rendering__layer$46dart.src__rendering__mouse_tracking;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const inline_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__inline_span;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const debug = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  var proxy_box = Object.create(dart.library);
  var $isFinite = dartx.isFinite;
  var $runtimeType = dartx.runtimeType;
  var $ceil = dartx.ceil;
  var $_equals = dartx._equals;
  var $every = dartx.every;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(false);
  var HitTestBehaviorL = () => (HitTestBehaviorL = dart.constFn(dart.legacy(proxy_box.HitTestBehavior)))();
  var EnumPropertyOfHitTestBehavior = () => (EnumPropertyOfHitTestBehavior = dart.constFn(diagnostics.EnumProperty$(proxy_box.HitTestBehavior)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var DiagnosticsPropertyOfBoxConstraints = () => (DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))();
  var RenderBoxAndBoxConstraintsToSize = () => (RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))();
  var OpacityLayerN = () => (OpacityLayerN = dart.constFn(dart.nullable(layer.OpacityLayer)))();
  var AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  var DiagnosticsPropertyOfAnimationOfdouble = () => (DiagnosticsPropertyOfAnimationOfdouble = dart.constFn(diagnostics.DiagnosticsProperty$(AnimationOfdouble())))();
  var ShaderMaskLayerN = () => (ShaderMaskLayerN = dart.constFn(dart.nullable(layer.ShaderMaskLayer)))();
  var BackdropFilterLayerN = () => (BackdropFilterLayerN = dart.constFn(dart.nullable(layer.BackdropFilterLayer)))();
  var CustomClipperOfPath = () => (CustomClipperOfPath = dart.constFn(proxy_box.CustomClipper$(ui.Path)))();
  var JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  var ClipRectLayerN = () => (ClipRectLayerN = dart.constFn(dart.nullable(layer.ClipRectLayer)))();
  var ClipRRectLayerN = () => (ClipRRectLayerN = dart.constFn(dart.nullable(layer.ClipRRectLayer)))();
  var ClipPathLayerN = () => (ClipPathLayerN = dart.constFn(dart.nullable(layer.ClipPathLayer)))();
  var PhysicalModelLayerN = () => (PhysicalModelLayerN = dart.constFn(dart.nullable(layer.PhysicalModelLayer)))();
  var DiagnosticsPropertyOfBoxShape = () => (DiagnosticsPropertyOfBoxShape = dart.constFn(diagnostics.DiagnosticsProperty$(box_border.BoxShape)))();
  var DiagnosticsPropertyOfBorderRadius = () => (DiagnosticsPropertyOfBorderRadius = dart.constFn(diagnostics.DiagnosticsProperty$(border_radius.BorderRadius)))();
  var DiagnosticsPropertyOfCustomClipperOfPath = () => (DiagnosticsPropertyOfCustomClipperOfPath = dart.constFn(diagnostics.DiagnosticsProperty$(CustomClipperOfPath())))();
  var DecorationPositionL = () => (DecorationPositionL = dart.constFn(dart.legacy(proxy_box.DecorationPosition)))();
  var DiagnosticsPropertyOfDecoration = () => (DiagnosticsPropertyOfDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(decoration.Decoration)))();
  var DiagnosticsPropertyOfBoxPainter = () => (DiagnosticsPropertyOfBoxPainter = dart.constFn(diagnostics.DiagnosticsProperty$(decoration.BoxPainter)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var DiagnosticsPropertyOfImageConfiguration = () => (DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))();
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  var TransformLayerN = () => (TransformLayerN = dart.constFn(dart.nullable(layer.TransformLayer)))();
  var DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))();
  var DiagnosticsPropertyOfAlignmentGeometry = () => (DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var doubleTobool = () => (doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))();
  var EnumPropertyOfBoxFit = () => (EnumPropertyOfBoxFit = dart.constFn(diagnostics.EnumProperty$(box_fit.BoxFit)))();
  var FunctionN = () => (FunctionN = dart.constFn(dart.nullable(core.Function)))();
  var FlagsSummaryOfFunctionN = () => (FlagsSummaryOfFunctionN = dart.constFn(diagnostics.FlagsSummary$(FunctionN())))();
  var IdentityMapOfString$FunctionN = () => (IdentityMapOfString$FunctionN = dart.constFn(_js_helper.IdentityMap$(core.String, FunctionN())))();
  var DiagnosticsPropertyOfMouseCursor = () => (DiagnosticsPropertyOfMouseCursor = dart.constFn(diagnostics.DiagnosticsProperty$(mouse_cursor.MouseCursor)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  var DiagnosticsPropertyOfint = () => (DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))();
  var DiagnosticsPropertyOfLayerLink = () => (DiagnosticsPropertyOfLayerLink = dart.constFn(diagnostics.DiagnosticsProperty$(layer.LayerLink)))();
  var FollowerLayerN = () => (FollowerLayerN = dart.constFn(dart.nullable(layer.FollowerLayer)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/proxy_box.dart";
  var L1 = "package:flutter/src/rendering/proxy_box.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_name$]: "HitTestBehavior.deferToChild",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_name$]: "HitTestBehavior.opaque",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_name$]: "HitTestBehavior.translucent",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], HitTestBehaviorL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2425393296.0
      });
    },
    get C5() {
      return C5 = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, RenderBoxAndBoxConstraintsToSize());
    },
    get C6() {
      return C6 = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, RenderBoxAndBoxConstraintsToSize());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.BlendMode.prototype,
        [_name]: "BlendMode.modulate",
        index: 13
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.antiAlias",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 10
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294902015.0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C12 || CT.C12,
        [TextStyle_inherit]: true
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: text_span.TextSpan.prototype,
        [InlineSpan_style]: C14 || CT.C14,
        [TextSpan_semanticsLabel]: null,
        [TextSpan_recognizer]: null,
        [TextSpan_children]: null,
        [TextSpan_text]: "✂"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C16 || CT.C16,
        [BorderRadius_bottomLeft]: C16 || CT.C16,
        [BorderRadius_topRight]: C16 || CT.C16,
        [BorderRadius_topLeft]: C16 || CT.C16
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.none",
        index: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$0]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$0]: "BoxShape.circle",
        index: 1
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: proxy_box.DecorationPosition.prototype,
        [_name$]: "DecorationPosition.background",
        index: 0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: proxy_box.DecorationPosition.prototype,
        [_name$]: "DecorationPosition.foreground",
        index: 1
      });
    },
    get C23() {
      return C23 = dart.constList([C21 || CT.C21, C22 || CT.C22], DecorationPositionL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [ImageConfiguration_platform]: null,
        [ImageConfiguration_size]: null,
        [ImageConfiguration_textDirection]: null,
        [ImageConfiguration_locale]: null,
        [ImageConfiguration_devicePixelRatio]: null,
        [ImageConfiguration_bundle]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$1]: "BoxFit.contain",
        index: 1
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$1]: "BoxFit.scaleDown",
        index: 6
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: mouse_cursor._DeferringMouseCursor.prototype
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: -1
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: ui.Rect.prototype,
        [Rect_bottom]: 1 / 0,
        [Rect_right]: 1 / 0,
        [Rect_top]: -1 / 0,
        [Rect_left]: -1 / 0
      });
    }
  }, false);
  const _is_RenderProxyBoxMixin_default = Symbol('_is_RenderProxyBoxMixin_default');
  proxy_box.RenderProxyBoxMixin$ = dart.generic(T => {
    class RenderProxyBoxMixin extends core.Object {}
    RenderProxyBoxMixin[dart.mixinOn] = _RenderProxyBoxMixin$36RenderBox$36RenderObjectWithChildMixin => class RenderProxyBoxMixin extends _RenderProxyBoxMixin$36RenderBox$36RenderObjectWithChildMixin {
      setupParentData(child) {
        object.RenderObject.as(child);
        if (child == null) dart.nullFailed(L0, 67, 37, "child");
        if (!object.ParentData.is(child.parentData)) child.parentData = new object.ParentData.new();
      }
      computeMinIntrinsicWidth(height) {
        if (height == null) dart.nullFailed(L0, 75, 42, "height");
        if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
        return 0.0;
      }
      computeMaxIntrinsicWidth(height) {
        if (height == null) dart.nullFailed(L0, 82, 42, "height");
        if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
        return 0.0;
      }
      computeMinIntrinsicHeight(width) {
        if (width == null) dart.nullFailed(L0, 89, 43, "width");
        if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
        return 0.0;
      }
      computeMaxIntrinsicHeight(width) {
        if (width == null) dart.nullFailed(L0, 96, 43, "width");
        if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
        return 0.0;
      }
      computeDistanceToActualBaseline(baseline) {
        if (baseline == null) dart.nullFailed(L0, 103, 56, "baseline");
        if (this.child != null) return dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
        return super.computeDistanceToActualBaseline(baseline);
      }
      computeDryLayout(constraints) {
        if (constraints == null) dart.nullFailed(L0, 110, 40, "constraints");
        if (this.child != null) {
          return dart.nullCheck(this.child).getDryLayout(constraints);
        }
        return this.computeSizeForNoChild(constraints);
      }
      performLayout() {
        if (this.child != null) {
          dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
          this.size = dart.nullCheck(this.child).size;
        } else {
          this.size = this.computeSizeForNoChild(this.constraints);
        }
      }
      computeSizeForNoChild(constraints) {
        if (constraints == null) dart.nullFailed(L0, 129, 45, "constraints");
        return constraints.smallest;
      }
      hitTestChildren(result, opts) {
        let t0, t0$;
        if (result == null) dart.nullFailed(L0, 134, 41, "result");
        let position = opts && 'position' in opts ? opts.position : null;
        if (position == null) dart.nullFailed(L0, 134, 67, "position");
        t0$ = (t0 = this.child, t0 == null ? null : t0.hitTest(result, {position: position}));
        return t0$ == null ? false : t0$;
      }
      applyPaintTransform(child, transform) {
        object.RenderObject.as(child);
        if (child == null) dart.nullFailed(L0, 139, 41, "child");
        if (transform == null) dart.nullFailed(L0, 139, 56, "transform");
      }
      paint(context, offset) {
        if (context == null) dart.nullFailed(L0, 142, 30, "context");
        if (offset == null) dart.nullFailed(L0, 142, 46, "offset");
        if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
      }
    };
    dart.addTypeTests(RenderProxyBoxMixin);
    RenderProxyBoxMixin.prototype[_is_RenderProxyBoxMixin_default] = true;
    dart.addTypeCaches(RenderProxyBoxMixin);
    RenderProxyBoxMixin[dart.implements] = () => [object.RenderObjectWithChildMixin$(T), box.RenderBox];
    dart.setMethodSignature(RenderProxyBoxMixin, () => ({
      __proto__: dart.getMethods(RenderProxyBoxMixin.__proto__),
      setupParentData: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      computeMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
      computeMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
      computeMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
      computeMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
      computeDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      computeDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
      performLayout: dart.fnType(dart.void, []),
      computeSizeForNoChild: dart.fnType(ui.Size, [box.BoxConstraints]),
      hitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
      applyPaintTransform: dart.fnType(dart.void, [dart.nullable(core.Object), vector_math_64.Matrix4]),
      paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
    }));
    dart.setLibraryUri(RenderProxyBoxMixin, L1);
    return RenderProxyBoxMixin;
  });
  proxy_box.RenderProxyBoxMixin = proxy_box.RenderProxyBoxMixin$();
  dart.addTypeTests(proxy_box.RenderProxyBoxMixin, _is_RenderProxyBoxMixin_default);
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderBox_RenderProxyBoxMixin$36 = class RenderBox_RenderProxyBoxMixin extends RenderBox_RenderObjectWithChildMixin$36 {};
  (RenderBox_RenderProxyBoxMixin$36.new = function() {
    RenderBox_RenderProxyBoxMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderProxyBoxMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderProxyBoxMixin$36, proxy_box.RenderProxyBoxMixin$(box.RenderBox));
  proxy_box.RenderProxyBox = class RenderProxyBox extends RenderBox_RenderProxyBoxMixin$36 {};
  (proxy_box.RenderProxyBox.new = function(child = null) {
    proxy_box.RenderProxyBox.__proto__.new.call(this);
    this.child = child;
  }).prototype = proxy_box.RenderProxyBox.prototype;
  dart.addTypeTests(proxy_box.RenderProxyBox);
  dart.addTypeCaches(proxy_box.RenderProxyBox);
  dart.setLibraryUri(proxy_box.RenderProxyBox, L1);
  var _name$ = dart.privateName(proxy_box, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  proxy_box.HitTestBehavior = class HitTestBehavior extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (proxy_box.HitTestBehavior.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 149, 6, "index");
    if (_name == null) dart.nullFailed(L0, 149, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = proxy_box.HitTestBehavior.prototype;
  dart.addTypeTests(proxy_box.HitTestBehavior);
  dart.addTypeCaches(proxy_box.HitTestBehavior);
  dart.setLibraryUri(proxy_box.HitTestBehavior, L1);
  dart.setFieldSignature(proxy_box.HitTestBehavior, () => ({
    __proto__: dart.getFields(proxy_box.HitTestBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(proxy_box.HitTestBehavior, ['toString']);
  proxy_box.HitTestBehavior.deferToChild = C0 || CT.C0;
  proxy_box.HitTestBehavior.opaque = C1 || CT.C1;
  proxy_box.HitTestBehavior.translucent = C2 || CT.C2;
  proxy_box.HitTestBehavior.values = C3 || CT.C3;
  var behavior$ = dart.privateName(proxy_box, "RenderProxyBoxWithHitTestBehavior.behavior");
  proxy_box.RenderProxyBoxWithHitTestBehavior = class RenderProxyBoxWithHitTestBehavior extends proxy_box.RenderProxyBox {
    get behavior() {
      return this[behavior$];
    }
    set behavior(value) {
      this[behavior$] = value;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 179, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 179, 59, "position");
      let hitTarget = false;
      if (dart.test(this.size.contains(position))) {
        hitTarget = dart.test(this.hitTestChildren(result, {position: position})) || dart.test(this.hitTestSelf(position));
        if (hitTarget || dart.equals(this.behavior, proxy_box.HitTestBehavior.translucent)) result.add(new box.BoxHitTestEntry.new(this, position));
      }
      return hitTarget;
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L0, 190, 27, "position");
      return dart.equals(this.behavior, proxy_box.HitTestBehavior.opaque);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 193, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfHitTestBehavior()).new("behavior", this.behavior, {defaultValue: null}));
    }
  };
  (proxy_box.RenderProxyBoxWithHitTestBehavior.new = function(opts) {
    let behavior = opts && 'behavior' in opts ? opts.behavior : C0 || CT.C0;
    if (behavior == null) dart.nullFailed(L0, 171, 10, "behavior");
    let child = opts && 'child' in opts ? opts.child : null;
    this[behavior$] = behavior;
    proxy_box.RenderProxyBoxWithHitTestBehavior.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderProxyBoxWithHitTestBehavior.prototype;
  dart.addTypeTests(proxy_box.RenderProxyBoxWithHitTestBehavior);
  dart.addTypeCaches(proxy_box.RenderProxyBoxWithHitTestBehavior);
  dart.setLibraryUri(proxy_box.RenderProxyBoxWithHitTestBehavior, L1);
  dart.setFieldSignature(proxy_box.RenderProxyBoxWithHitTestBehavior, () => ({
    __proto__: dart.getFields(proxy_box.RenderProxyBoxWithHitTestBehavior.__proto__),
    behavior: dart.fieldType(proxy_box.HitTestBehavior)
  }));
  var _additionalConstraints = dart.privateName(proxy_box, "_additionalConstraints");
  var Color_value = dart.privateName(ui, "Color.value");
  var C4;
  proxy_box.RenderConstrainedBox = class RenderConstrainedBox extends proxy_box.RenderProxyBox {
    get additionalConstraints() {
      return this[_additionalConstraints];
    }
    set additionalConstraints(value) {
      if (value == null) dart.nullFailed(L0, 224, 44, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 225, 12, "value != null");
      if (!dart.test(value.debugAssertIsValid())) dart.assertFailed(null, L0, 226, 12, "value.debugAssertIsValid()");
      if (dart.equals(this[_additionalConstraints], value)) return;
      this[_additionalConstraints] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 234, 42, "height");
      if (dart.test(this[_additionalConstraints].hasBoundedWidth) && dart.test(this[_additionalConstraints].hasTightWidth)) return this[_additionalConstraints].minWidth;
      let width = super.computeMinIntrinsicWidth(height);
      if (!width[$isFinite]) dart.assertFailed(null, L0, 238, 12, "width.isFinite");
      if (!dart.test(this[_additionalConstraints].hasInfiniteWidth)) return this[_additionalConstraints].constrainWidth(width);
      return width;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 245, 42, "height");
      if (dart.test(this[_additionalConstraints].hasBoundedWidth) && dart.test(this[_additionalConstraints].hasTightWidth)) return this[_additionalConstraints].minWidth;
      let width = super.computeMaxIntrinsicWidth(height);
      if (!width[$isFinite]) dart.assertFailed(null, L0, 249, 12, "width.isFinite");
      if (!dart.test(this[_additionalConstraints].hasInfiniteWidth)) return this[_additionalConstraints].constrainWidth(width);
      return width;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 256, 43, "width");
      if (dart.test(this[_additionalConstraints].hasBoundedHeight) && dart.test(this[_additionalConstraints].hasTightHeight)) return this[_additionalConstraints].minHeight;
      let height = super.computeMinIntrinsicHeight(width);
      if (!height[$isFinite]) dart.assertFailed(null, L0, 260, 12, "height.isFinite");
      if (!dart.test(this[_additionalConstraints].hasInfiniteHeight)) return this[_additionalConstraints].constrainHeight(height);
      return height;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 267, 43, "width");
      if (dart.test(this[_additionalConstraints].hasBoundedHeight) && dart.test(this[_additionalConstraints].hasTightHeight)) return this[_additionalConstraints].minHeight;
      let height = super.computeMaxIntrinsicHeight(width);
      if (!height[$isFinite]) dart.assertFailed(null, L0, 271, 12, "height.isFinite");
      if (!dart.test(this[_additionalConstraints].hasInfiniteHeight)) return this[_additionalConstraints].constrainHeight(height);
      return height;
    }
    performLayout() {
      let constraints = this.constraints;
      if (this.child != null) {
        dart.nullCheck(this.child).layout(this[_additionalConstraints].enforce(constraints), {parentUsesSize: true});
        this.size = dart.nullCheck(this.child).size;
      } else {
        this.size = this[_additionalConstraints].enforce(constraints).constrain(ui.Size.zero);
      }
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 289, 40, "constraints");
      if (this.child != null) {
        return dart.nullCheck(this.child).getDryLayout(this[_additionalConstraints].enforce(constraints));
      } else {
        return this[_additionalConstraints].enforce(constraints).constrain(ui.Size.zero);
      }
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 298, 39, "context");
      if (offset == null) dart.nullFailed(L0, 298, 55, "offset");
      super.debugPaintSize(context, offset);
      if (!dart.test(dart.fn(() => {
        let t0;
        let paint = null;
        if (this.child == null || dart.test(dart.nullCheck(this.child).size.isEmpty)) {
          paint = (t0 = ui.Paint.new(), (() => {
            t0.color = C4 || CT.C4;
            return t0;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 300, 12, "() {\n      final Paint paint;\n      if (child == null || child!.size.isEmpty) {\n        paint = Paint()\n          ..color = const Color(0x90909090);\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 312, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfBoxConstraints()).new("additionalConstraints", this.additionalConstraints));
    }
  };
  (proxy_box.RenderConstrainedBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let additionalConstraints = opts && 'additionalConstraints' in opts ? opts.additionalConstraints : null;
    if (additionalConstraints == null) dart.nullFailed(L0, 215, 29, "additionalConstraints");
    if (!(additionalConstraints != null)) dart.assertFailed(null, L0, 216, 15, "additionalConstraints != null");
    if (!dart.test(additionalConstraints.debugAssertIsValid())) dart.assertFailed(null, L0, 217, 15, "additionalConstraints.debugAssertIsValid()");
    this[_additionalConstraints] = additionalConstraints;
    proxy_box.RenderConstrainedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderConstrainedBox.prototype;
  dart.addTypeTests(proxy_box.RenderConstrainedBox);
  dart.addTypeCaches(proxy_box.RenderConstrainedBox);
  dart.setGetterSignature(proxy_box.RenderConstrainedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderConstrainedBox.__proto__),
    additionalConstraints: box.BoxConstraints
  }));
  dart.setSetterSignature(proxy_box.RenderConstrainedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderConstrainedBox.__proto__),
    additionalConstraints: box.BoxConstraints
  }));
  dart.setLibraryUri(proxy_box.RenderConstrainedBox, L1);
  dart.setFieldSignature(proxy_box.RenderConstrainedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderConstrainedBox.__proto__),
    [_additionalConstraints]: dart.fieldType(box.BoxConstraints)
  }));
  var _maxWidth = dart.privateName(proxy_box, "_maxWidth");
  var _maxHeight = dart.privateName(proxy_box, "_maxHeight");
  var _limitConstraints = dart.privateName(proxy_box, "_limitConstraints");
  var _computeSize = dart.privateName(proxy_box, "_computeSize");
  var C5;
  var C6;
  proxy_box.RenderLimitedBox = class RenderLimitedBox extends proxy_box.RenderProxyBox {
    get maxWidth() {
      return this[_maxWidth];
    }
    set maxWidth(value) {
      if (value == null) dart.nullFailed(L0, 349, 23, "value");
      if (!(value != null && dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 350, 12, "value != null && value >= 0.0");
      if (this[_maxWidth] == value) return;
      this[_maxWidth] = value;
      this.markNeedsLayout();
    }
    get maxHeight() {
      return this[_maxHeight];
    }
    set maxHeight(value) {
      if (value == null) dart.nullFailed(L0, 360, 24, "value");
      if (!(value != null && dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 361, 12, "value != null && value >= 0.0");
      if (this[_maxHeight] == value) return;
      this[_maxHeight] = value;
      this.markNeedsLayout();
    }
    [_limitConstraints](constraints) {
      if (constraints == null) dart.nullFailed(L0, 368, 51, "constraints");
      return new box.BoxConstraints.new({minWidth: constraints.minWidth, maxWidth: dart.test(constraints.hasBoundedWidth) ? constraints.maxWidth : constraints.constrainWidth(this.maxWidth), minHeight: constraints.minHeight, maxHeight: dart.test(constraints.hasBoundedHeight) ? constraints.maxHeight : constraints.constrainHeight(this.maxHeight)});
    }
    [_computeSize](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (constraints == null) dart.nullFailed(L0, 377, 46, "constraints");
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (layoutChild == null) dart.nullFailed(L0, 377, 82, "layoutChild");
      if (this.child != null) {
        let childSize = layoutChild(dart.nullCheck(this.child), this[_limitConstraints](constraints));
        return constraints.constrain(childSize);
      }
      return this[_limitConstraints](constraints).constrain(ui.Size.zero);
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 386, 40, "constraints");
      return this[_computeSize]({constraints: constraints, layoutChild: C5 || CT.C5});
    }
    performLayout() {
      this.size = this[_computeSize]({constraints: this.constraints, layoutChild: C6 || CT.C6});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 402, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("maxWidth", this.maxWidth, {defaultValue: 1 / 0}));
      properties.add(new diagnostics.DoubleProperty.new("maxHeight", this.maxHeight, {defaultValue: 1 / 0}));
    }
  };
  (proxy_box.RenderLimitedBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
    if (maxWidth == null) dart.nullFailed(L0, 338, 12, "maxWidth");
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
    if (maxHeight == null) dart.nullFailed(L0, 339, 12, "maxHeight");
    if (!(maxWidth != null && dart.notNull(maxWidth) >= 0.0)) dart.assertFailed(null, L0, 340, 15, "maxWidth != null && maxWidth >= 0.0");
    if (!(maxHeight != null && dart.notNull(maxHeight) >= 0.0)) dart.assertFailed(null, L0, 341, 15, "maxHeight != null && maxHeight >= 0.0");
    this[_maxWidth] = maxWidth;
    this[_maxHeight] = maxHeight;
    proxy_box.RenderLimitedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderLimitedBox.prototype;
  dart.addTypeTests(proxy_box.RenderLimitedBox);
  dart.addTypeCaches(proxy_box.RenderLimitedBox);
  dart.setMethodSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getMethods(proxy_box.RenderLimitedBox.__proto__),
    [_limitConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setGetterSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderLimitedBox.__proto__),
    maxWidth: core.double,
    maxHeight: core.double
  }));
  dart.setSetterSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderLimitedBox.__proto__),
    maxWidth: core.double,
    maxHeight: core.double
  }));
  dart.setLibraryUri(proxy_box.RenderLimitedBox, L1);
  dart.setFieldSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderLimitedBox.__proto__),
    [_maxWidth]: dart.fieldType(core.double),
    [_maxHeight]: dart.fieldType(core.double)
  }));
  var _aspectRatio = dart.privateName(proxy_box, "_aspectRatio");
  var _applyAspectRatio = dart.privateName(proxy_box, "_applyAspectRatio");
  proxy_box.RenderAspectRatio = class RenderAspectRatio extends proxy_box.RenderProxyBox {
    get aspectRatio() {
      return this[_aspectRatio];
    }
    set aspectRatio(value) {
      if (value == null) dart.nullFailed(L0, 454, 26, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 455, 12, "value != null");
      if (!(dart.notNull(value) > 0.0)) dart.assertFailed(null, L0, 456, 12, "value > 0.0");
      if (!value[$isFinite]) dart.assertFailed(null, L0, 457, 12, "value.isFinite");
      if (this[_aspectRatio] == value) return;
      this[_aspectRatio] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 465, 42, "height");
      if (height[$isFinite]) return dart.notNull(height) * dart.notNull(this[_aspectRatio]);
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 474, 42, "height");
      if (height[$isFinite]) return dart.notNull(height) * dart.notNull(this[_aspectRatio]);
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 483, 43, "width");
      if (width[$isFinite]) return dart.notNull(width) / dart.notNull(this[_aspectRatio]);
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 492, 43, "width");
      if (width[$isFinite]) return dart.notNull(width) / dart.notNull(this[_aspectRatio]);
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      return 0.0;
    }
    [_applyAspectRatio](constraints) {
      if (constraints == null) dart.nullFailed(L0, 500, 41, "constraints");
      if (!dart.test(constraints.debugAssertIsValid())) dart.assertFailed(null, L0, 501, 12, "constraints.debugAssertIsValid()");
      if (!dart.test(dart.fn(() => {
        if (!dart.test(constraints.hasBoundedWidth) && !dart.test(constraints.hasBoundedHeight)) {
          dart.throw(assertions.FlutterError.new(dart.str(this[$runtimeType]) + " has unbounded constraints.\n" + "This " + dart.str(this[$runtimeType]) + " was given an aspect ratio of " + dart.str(this.aspectRatio) + " but was given " + "both unbounded width and unbounded height constraints. Because both " + "constraints were unbounded, this render object doesn't know how much " + "size to consume."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 502, 12, "() {\n      if (!constraints.hasBoundedWidth && !constraints.hasBoundedHeight) {\n        throw FlutterError(\n          '$runtimeType has unbounded constraints.\\n'\n          'This $runtimeType was given an aspect ratio of $aspectRatio but was given '\n          'both unbounded width and unbounded height constraints. Because both '\n          'constraints were unbounded, this render object doesn\\'t know how much '\n          'size to consume.'\n        );\n      }\n      return true;\n    }()");
      if (dart.test(constraints.isTight)) return constraints.smallest;
      let width = constraints.maxWidth;
      let height = null;
      if (width[$isFinite]) {
        height = dart.notNull(width) / dart.notNull(this[_aspectRatio]);
      } else {
        height = constraints.maxHeight;
        width = dart.notNull(height) * dart.notNull(this[_aspectRatio]);
      }
      if (dart.notNull(width) > dart.notNull(constraints.maxWidth)) {
        width = constraints.maxWidth;
        height = dart.notNull(width) / dart.notNull(this[_aspectRatio]);
      }
      if (dart.notNull(height) > dart.notNull(constraints.maxHeight)) {
        height = constraints.maxHeight;
        width = dart.notNull(height) * dart.notNull(this[_aspectRatio]);
      }
      if (dart.notNull(width) < dart.notNull(constraints.minWidth)) {
        width = constraints.minWidth;
        height = dart.notNull(width) / dart.notNull(this[_aspectRatio]);
      }
      if (dart.notNull(height) < dart.notNull(constraints.minHeight)) {
        height = constraints.minHeight;
        width = dart.notNull(height) * dart.notNull(this[_aspectRatio]);
      }
      return constraints.constrain(new ui.Size.new(width, height));
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 560, 40, "constraints");
      return this[_applyAspectRatio](constraints);
    }
    performLayout() {
      this.size = this.computeDryLayout(this.constraints);
      if (this.child != null) dart.nullCheck(this.child).layout(new box.BoxConstraints.tight(this.size));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 572, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("aspectRatio", this.aspectRatio));
    }
  };
  (proxy_box.RenderAspectRatio.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let aspectRatio = opts && 'aspectRatio' in opts ? opts.aspectRatio : null;
    if (aspectRatio == null) dart.nullFailed(L0, 441, 21, "aspectRatio");
    if (!(aspectRatio != null)) dart.assertFailed(null, L0, 442, 15, "aspectRatio != null");
    if (!(dart.notNull(aspectRatio) > 0.0)) dart.assertFailed(null, L0, 443, 15, "aspectRatio > 0.0");
    if (!aspectRatio[$isFinite]) dart.assertFailed(null, L0, 444, 15, "aspectRatio.isFinite");
    this[_aspectRatio] = aspectRatio;
    proxy_box.RenderAspectRatio.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderAspectRatio.prototype;
  dart.addTypeTests(proxy_box.RenderAspectRatio);
  dart.addTypeCaches(proxy_box.RenderAspectRatio);
  dart.setMethodSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getMethods(proxy_box.RenderAspectRatio.__proto__),
    [_applyAspectRatio]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getGetters(proxy_box.RenderAspectRatio.__proto__),
    aspectRatio: core.double
  }));
  dart.setSetterSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getSetters(proxy_box.RenderAspectRatio.__proto__),
    aspectRatio: core.double
  }));
  dart.setLibraryUri(proxy_box.RenderAspectRatio, L1);
  dart.setFieldSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getFields(proxy_box.RenderAspectRatio.__proto__),
    [_aspectRatio]: dart.fieldType(core.double)
  }));
  var _stepWidth = dart.privateName(proxy_box, "_stepWidth");
  var _stepHeight = dart.privateName(proxy_box, "_stepHeight");
  proxy_box.RenderIntrinsicWidth = class RenderIntrinsicWidth extends proxy_box.RenderProxyBox {
    get stepWidth() {
      return this[_stepWidth];
    }
    set stepWidth(value) {
      if (!(value == null || dart.notNull(value) > 0.0)) dart.assertFailed(null, L0, 631, 12, "value == null || value > 0.0");
      if (value == this[_stepWidth]) return;
      this[_stepWidth] = value;
      this.markNeedsLayout();
    }
    get stepHeight() {
      return this[_stepHeight];
    }
    set stepHeight(value) {
      if (!(value == null || dart.notNull(value) > 0.0)) dart.assertFailed(null, L0, 644, 12, "value == null || value > 0.0");
      if (value == this[_stepHeight]) return;
      this[_stepHeight] = value;
      this.markNeedsLayout();
    }
    static _applyStep(input, step) {
      if (input == null) dart.nullFailed(L0, 651, 35, "input");
      if (!input[$isFinite]) dart.assertFailed(null, L0, 652, 12, "input.isFinite");
      if (step == null) return input;
      return (dart.notNull(input) / dart.notNull(step))[$ceil]() * dart.notNull(step);
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 659, 42, "height");
      return this.computeMaxIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 664, 42, "height");
      if (this.child == null) return 0.0;
      let width = dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      return proxy_box.RenderIntrinsicWidth._applyStep(width, this[_stepWidth]);
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 672, 43, "width");
      if (this.child == null) return 0.0;
      if (!width[$isFinite]) width = this.computeMaxIntrinsicWidth(1 / 0);
      if (!width[$isFinite]) dart.assertFailed(null, L0, 677, 12, "width.isFinite");
      let height = dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      return proxy_box.RenderIntrinsicWidth._applyStep(height, this[_stepHeight]);
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 683, 43, "width");
      if (this.child == null) return 0.0;
      if (!width[$isFinite]) width = this.computeMaxIntrinsicWidth(1 / 0);
      if (!width[$isFinite]) dart.assertFailed(null, L0, 688, 12, "width.isFinite");
      let height = dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      return proxy_box.RenderIntrinsicWidth._applyStep(height, this[_stepHeight]);
    }
    [_computeSize](opts) {
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (layoutChild == null) dart.nullFailed(L0, 693, 45, "layoutChild");
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (constraints == null) dart.nullFailed(L0, 693, 82, "constraints");
      if (this.child != null) {
        if (!dart.test(constraints.hasTightWidth)) {
          let width = dart.nullCheck(this.child).getMaxIntrinsicWidth(constraints.maxHeight);
          if (!width[$isFinite]) dart.assertFailed(null, L0, 697, 16, "width.isFinite");
          constraints = constraints.tighten({width: proxy_box.RenderIntrinsicWidth._applyStep(width, this[_stepWidth])});
        }
        if (this[_stepHeight] != null) {
          let height = dart.nullCheck(this.child).getMaxIntrinsicHeight(constraints.maxWidth);
          if (!height[$isFinite]) dart.assertFailed(null, L0, 702, 16, "height.isFinite");
          constraints = constraints.tighten({height: proxy_box.RenderIntrinsicWidth._applyStep(height, this[_stepHeight])});
        }
        return layoutChild(dart.nullCheck(this.child), constraints);
      } else {
        return constraints.smallest;
      }
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 712, 40, "constraints");
      return this[_computeSize]({layoutChild: C5 || CT.C5, constraints: constraints});
    }
    performLayout() {
      this.size = this[_computeSize]({layoutChild: C6 || CT.C6, constraints: this.constraints});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 728, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("stepWidth", this.stepWidth));
      properties.add(new diagnostics.DoubleProperty.new("stepHeight", this.stepHeight));
    }
  };
  (proxy_box.RenderIntrinsicWidth.new = function(opts) {
    let stepWidth = opts && 'stepWidth' in opts ? opts.stepWidth : null;
    let stepHeight = opts && 'stepHeight' in opts ? opts.stepHeight : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(stepWidth == null || dart.notNull(stepWidth) > 0.0)) dart.assertFailed(null, L0, 619, 15, "stepWidth == null || stepWidth > 0.0");
    if (!(stepHeight == null || dart.notNull(stepHeight) > 0.0)) dart.assertFailed(null, L0, 620, 15, "stepHeight == null || stepHeight > 0.0");
    this[_stepWidth] = stepWidth;
    this[_stepHeight] = stepHeight;
    proxy_box.RenderIntrinsicWidth.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderIntrinsicWidth.prototype;
  dart.addTypeTests(proxy_box.RenderIntrinsicWidth);
  dart.addTypeCaches(proxy_box.RenderIntrinsicWidth);
  dart.setMethodSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getMethods(proxy_box.RenderIntrinsicWidth.__proto__),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setGetterSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getGetters(proxy_box.RenderIntrinsicWidth.__proto__),
    stepWidth: dart.nullable(core.double),
    stepHeight: dart.nullable(core.double)
  }));
  dart.setSetterSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getSetters(proxy_box.RenderIntrinsicWidth.__proto__),
    stepWidth: dart.nullable(core.double),
    stepHeight: dart.nullable(core.double)
  }));
  dart.setLibraryUri(proxy_box.RenderIntrinsicWidth, L1);
  dart.setFieldSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getFields(proxy_box.RenderIntrinsicWidth.__proto__),
    [_stepWidth]: dart.fieldType(dart.nullable(core.double)),
    [_stepHeight]: dart.fieldType(dart.nullable(core.double))
  }));
  proxy_box.RenderIntrinsicHeight = class RenderIntrinsicHeight extends proxy_box.RenderProxyBox {
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 770, 42, "height");
      if (this.child == null) return 0.0;
      if (!height[$isFinite]) height = dart.nullCheck(this.child).getMaxIntrinsicHeight(1 / 0);
      if (!height[$isFinite]) dart.assertFailed(null, L0, 775, 12, "height.isFinite");
      return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 780, 42, "height");
      if (this.child == null) return 0.0;
      if (!height[$isFinite]) height = dart.nullCheck(this.child).getMaxIntrinsicHeight(1 / 0);
      if (!height[$isFinite]) dart.assertFailed(null, L0, 785, 12, "height.isFinite");
      return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 790, 43, "width");
      return this.computeMaxIntrinsicHeight(width);
    }
    [_computeSize](opts) {
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (layoutChild == null) dart.nullFailed(L0, 794, 45, "layoutChild");
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (constraints == null) dart.nullFailed(L0, 794, 82, "constraints");
      if (this.child != null) {
        if (!dart.test(constraints.hasTightHeight)) {
          let height = dart.nullCheck(this.child).getMaxIntrinsicHeight(constraints.maxWidth);
          if (!height[$isFinite]) dart.assertFailed(null, L0, 798, 16, "height.isFinite");
          constraints = constraints.tighten({height: height});
        }
        return layoutChild(dart.nullCheck(this.child), constraints);
      } else {
        return constraints.smallest;
      }
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 808, 40, "constraints");
      return this[_computeSize]({layoutChild: C5 || CT.C5, constraints: constraints});
    }
    performLayout() {
      this.size = this[_computeSize]({layoutChild: C6 || CT.C6, constraints: this.constraints});
    }
  };
  (proxy_box.RenderIntrinsicHeight.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    proxy_box.RenderIntrinsicHeight.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderIntrinsicHeight.prototype;
  dart.addTypeTests(proxy_box.RenderIntrinsicHeight);
  dart.addTypeCaches(proxy_box.RenderIntrinsicHeight);
  dart.setMethodSignature(proxy_box.RenderIntrinsicHeight, () => ({
    __proto__: dart.getMethods(proxy_box.RenderIntrinsicHeight.__proto__),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setLibraryUri(proxy_box.RenderIntrinsicHeight, L1);
  var _opacity = dart.privateName(proxy_box, "_opacity");
  var _alwaysIncludeSemantics = dart.privateName(proxy_box, "_alwaysIncludeSemantics");
  var _alpha = dart.privateName(proxy_box, "_alpha");
  proxy_box.RenderOpacity = class RenderOpacity extends proxy_box.RenderProxyBox {
    get alwaysNeedsCompositing() {
      return this.child != null && this[_alpha] !== 0 && this[_alpha] !== 255;
    }
    get opacity() {
      return this[_opacity];
    }
    set opacity(value) {
      if (value == null) dart.nullFailed(L0, 866, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 867, 12, "value != null");
      if (!(dart.notNull(value) >= 0.0 && dart.notNull(value) <= 1.0)) dart.assertFailed(null, L0, 868, 12, "value >= 0.0 && value <= 1.0");
      if (this[_opacity] == value) return;
      let didNeedCompositing = this.alwaysNeedsCompositing;
      let wasVisible = this[_alpha] !== 0;
      this[_opacity] = value;
      this[_alpha] = ui.Color.getAlphaFromOpacity(this[_opacity]);
      if (!dart.equals(didNeedCompositing, this.alwaysNeedsCompositing)) this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
      if (!wasVisible[$_equals](this[_alpha] !== 0) && !dart.test(this.alwaysIncludeSemantics)) this.markNeedsSemanticsUpdate();
    }
    get alwaysIncludeSemantics() {
      return this[_alwaysIncludeSemantics];
    }
    set alwaysIncludeSemantics(value) {
      if (value == null) dart.nullFailed(L0, 889, 35, "value");
      if (dart.equals(value, this[_alwaysIncludeSemantics])) return;
      this[_alwaysIncludeSemantics] = value;
      this.markNeedsSemanticsUpdate();
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 897, 30, "context");
      if (offset == null) dart.nullFailed(L0, 897, 46, "offset");
      if (this.child != null) {
        if (this[_alpha] === 0) {
          this.layer = null;
          return;
        }
        if (this[_alpha] === 255) {
          this.layer = null;
          context.paintChild(dart.nullCheck(this.child), offset);
          return;
        }
        if (!dart.test(this.needsCompositing)) dart.assertFailed(null, L0, 910, 14, "needsCompositing");
        this.layer = context.pushOpacity(offset, this[_alpha], dart.bind(this, 'paint', super.paint), {oldLayer: OpacityLayerN().as(this.layer)});
      }
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 916, 54, "visitor");
      if (this.child != null && (this[_alpha] !== 0 || dart.test(this.alwaysIncludeSemantics))) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 922, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
      properties.add(new diagnostics.FlagProperty.new("alwaysIncludeSemantics", {value: this.alwaysIncludeSemantics, ifTrue: "alwaysIncludeSemantics"}));
    }
  };
  (proxy_box.RenderOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    if (opacity == null) dart.nullFailed(L0, 838, 12, "opacity");
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    if (alwaysIncludeSemantics == null) dart.nullFailed(L0, 839, 10, "alwaysIncludeSemantics");
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(opacity != null)) dart.assertFailed(null, L0, 841, 15, "opacity != null");
    if (!(dart.notNull(opacity) >= 0.0 && dart.notNull(opacity) <= 1.0)) dart.assertFailed(null, L0, 842, 15, "opacity >= 0.0 && opacity <= 1.0");
    if (!(alwaysIncludeSemantics != null)) dart.assertFailed(null, L0, 843, 15, "alwaysIncludeSemantics != null");
    this[_opacity] = opacity;
    this[_alwaysIncludeSemantics] = alwaysIncludeSemantics;
    this[_alpha] = ui.Color.getAlphaFromOpacity(opacity);
    proxy_box.RenderOpacity.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderOpacity.prototype;
  dart.addTypeTests(proxy_box.RenderOpacity);
  dart.addTypeCaches(proxy_box.RenderOpacity);
  dart.setGetterSignature(proxy_box.RenderOpacity, () => ({
    __proto__: dart.getGetters(proxy_box.RenderOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderOpacity, () => ({
    __proto__: dart.getSetters(proxy_box.RenderOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderOpacity, L1);
  dart.setFieldSignature(proxy_box.RenderOpacity, () => ({
    __proto__: dart.getFields(proxy_box.RenderOpacity.__proto__),
    [_alpha]: dart.fieldType(core.int),
    [_opacity]: dart.fieldType(core.double),
    [_alwaysIncludeSemantics]: dart.fieldType(core.bool)
  }));
  var _currentlyNeedsCompositing = dart.privateName(proxy_box, "_currentlyNeedsCompositing");
  var _updateOpacity = dart.privateName(proxy_box, "_updateOpacity");
  const _is_RenderAnimatedOpacityMixin_default = Symbol('_is_RenderAnimatedOpacityMixin_default');
  proxy_box.RenderAnimatedOpacityMixin$ = dart.generic(T => {
    class RenderAnimatedOpacityMixin extends object.RenderObjectWithChildMixin$(T) {}
    RenderAnimatedOpacityMixin[dart.mixinOn] = RenderObjectWithChildMixin => class RenderAnimatedOpacityMixin extends RenderObjectWithChildMixin {
      get alwaysNeedsCompositing() {
        return this.child != null && dart.nullCheck(this[_currentlyNeedsCompositing]);
      }
      get opacity() {
        return dart.nullCheck(this[_opacity]);
      }
      set opacity(value) {
        if (value == null) dart.nullFailed(L0, 953, 33, "value");
        if (!(value != null)) dart.assertFailed(null, L0, 954, 12, "value != null");
        if (dart.equals(this[_opacity], value)) return;
        if (dart.test(this.attached) && this[_opacity] != null) this.opacity.removeListener(dart.bind(this, _updateOpacity));
        this[_opacity] = value;
        if (dart.test(this.attached)) this.opacity.addListener(dart.bind(this, _updateOpacity));
        this[_updateOpacity]();
      }
      get alwaysIncludeSemantics() {
        return dart.nullCheck(this[_alwaysIncludeSemantics]);
      }
      set alwaysIncludeSemantics(value) {
        if (value == null) dart.nullFailed(L0, 975, 35, "value");
        if (dart.equals(value, this[_alwaysIncludeSemantics])) return;
        this[_alwaysIncludeSemantics] = value;
        this.markNeedsSemanticsUpdate();
      }
      attach(owner) {
        object.PipelineOwner.as(owner);
        if (owner == null) dart.nullFailed(L0, 983, 29, "owner");
        super.attach(owner);
        this.opacity.addListener(dart.bind(this, _updateOpacity));
        this[_updateOpacity]();
      }
      detach() {
        this.opacity.removeListener(dart.bind(this, _updateOpacity));
        super.detach();
      }
      [_updateOpacity]() {
        let oldAlpha = this[_alpha];
        this[_alpha] = ui.Color.getAlphaFromOpacity(this.opacity.value);
        if (oldAlpha != this[_alpha]) {
          let didNeedCompositing = this[_currentlyNeedsCompositing];
          this[_currentlyNeedsCompositing] = dart.nullCheck(this[_alpha]) > 0 && dart.nullCheck(this[_alpha]) < 255;
          if (this.child != null && !dart.equals(didNeedCompositing, this[_currentlyNeedsCompositing])) this.markNeedsCompositingBitsUpdate();
          this.markNeedsPaint();
          if (oldAlpha === 0 || this[_alpha] === 0) this.markNeedsSemanticsUpdate();
        }
      }
      paint(context, offset) {
        if (context == null) dart.nullFailed(L0, 1010, 30, "context");
        if (offset == null) dart.nullFailed(L0, 1010, 46, "offset");
        if (this.child != null) {
          if (this[_alpha] === 0) {
            this.layer = null;
            return;
          }
          if (this[_alpha] === 255) {
            this.layer = null;
            context.paintChild(dart.nullCheck(this.child), offset);
            return;
          }
          if (!dart.test(this.needsCompositing)) dart.assertFailed(null, L0, 1023, 14, "needsCompositing");
          this.layer = context.pushOpacity(offset, dart.nullCheck(this[_alpha]), dart.bind(this, 'paint', super.paint), {oldLayer: OpacityLayerN().as(this.layer)});
        }
      }
      visitChildrenForSemantics(visitor) {
        if (visitor == null) dart.nullFailed(L0, 1029, 54, "visitor");
        if (this.child != null && (this[_alpha] !== 0 || dart.test(this.alwaysIncludeSemantics))) visitor(dart.nullCheck(this.child));
      }
      debugFillProperties(properties) {
        if (properties == null) dart.nullFailed(L0, 1035, 56, "properties");
        super.debugFillProperties(properties);
        properties.add(new (DiagnosticsPropertyOfAnimationOfdouble()).new("opacity", this.opacity));
        properties.add(new diagnostics.FlagProperty.new("alwaysIncludeSemantics", {value: this.alwaysIncludeSemantics, ifTrue: "alwaysIncludeSemantics"}));
      }
    };
    (RenderAnimatedOpacityMixin[dart.mixinNew] = function() {
      this[_alpha] = null;
      this[_currentlyNeedsCompositing] = null;
      this[_opacity] = null;
      this[_alwaysIncludeSemantics] = null;
    }).prototype = RenderAnimatedOpacityMixin.prototype;
    dart.addTypeTests(RenderAnimatedOpacityMixin);
    RenderAnimatedOpacityMixin.prototype[_is_RenderAnimatedOpacityMixin_default] = true;
    dart.addTypeCaches(RenderAnimatedOpacityMixin);
    RenderAnimatedOpacityMixin[dart.implements] = () => [object.RenderObjectWithChildMixin$(T)];
    dart.setMethodSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getMethods(RenderAnimatedOpacityMixin.__proto__),
      [_updateOpacity]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getGetters(RenderAnimatedOpacityMixin.__proto__),
      opacity: animation.Animation$(core.double),
      alwaysIncludeSemantics: core.bool
    }));
    dart.setSetterSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getSetters(RenderAnimatedOpacityMixin.__proto__),
      opacity: animation.Animation$(core.double),
      alwaysIncludeSemantics: core.bool
    }));
    dart.setLibraryUri(RenderAnimatedOpacityMixin, L1);
    dart.setFieldSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getFields(RenderAnimatedOpacityMixin.__proto__),
      [_alpha]: dart.fieldType(dart.nullable(core.int)),
      [_currentlyNeedsCompositing]: dart.fieldType(dart.nullable(core.bool)),
      [_opacity]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
      [_alwaysIncludeSemantics]: dart.fieldType(dart.nullable(core.bool))
    }));
    return RenderAnimatedOpacityMixin;
  });
  proxy_box.RenderAnimatedOpacityMixin = proxy_box.RenderAnimatedOpacityMixin$();
  dart.addTypeTests(proxy_box.RenderAnimatedOpacityMixin, _is_RenderAnimatedOpacityMixin_default);
  const RenderProxyBox_RenderProxyBoxMixin$36 = class RenderProxyBox_RenderProxyBoxMixin extends proxy_box.RenderProxyBox {};
  (RenderProxyBox_RenderProxyBoxMixin$36.new = function(child) {
    RenderProxyBox_RenderProxyBoxMixin$36.__proto__.new.call(this, child);
  }).prototype = RenderProxyBox_RenderProxyBoxMixin$36.prototype;
  dart.applyMixin(RenderProxyBox_RenderProxyBoxMixin$36, proxy_box.RenderProxyBoxMixin$(box.RenderBox));
  const RenderProxyBox_RenderAnimatedOpacityMixin$36 = class RenderProxyBox_RenderAnimatedOpacityMixin extends RenderProxyBox_RenderProxyBoxMixin$36 {};
  (RenderProxyBox_RenderAnimatedOpacityMixin$36.new = function(child) {
    proxy_box.RenderAnimatedOpacityMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderProxyBox_RenderAnimatedOpacityMixin$36.__proto__.new.call(this, child);
  }).prototype = RenderProxyBox_RenderAnimatedOpacityMixin$36.prototype;
  dart.applyMixin(RenderProxyBox_RenderAnimatedOpacityMixin$36, proxy_box.RenderAnimatedOpacityMixin$(box.RenderBox));
  proxy_box.RenderAnimatedOpacity = class RenderAnimatedOpacity extends RenderProxyBox_RenderAnimatedOpacityMixin$36 {};
  (proxy_box.RenderAnimatedOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    if (opacity == null) dart.nullFailed(L0, 1051, 32, "opacity");
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    if (alwaysIncludeSemantics == null) dart.nullFailed(L0, 1052, 10, "alwaysIncludeSemantics");
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(opacity != null)) dart.assertFailed(null, L0, 1054, 15, "opacity != null");
    if (!(alwaysIncludeSemantics != null)) dart.assertFailed(null, L0, 1055, 15, "alwaysIncludeSemantics != null");
    proxy_box.RenderAnimatedOpacity.__proto__.new.call(this, child);
    this.opacity = opacity;
    this.alwaysIncludeSemantics = alwaysIncludeSemantics;
  }).prototype = proxy_box.RenderAnimatedOpacity.prototype;
  dart.addTypeTests(proxy_box.RenderAnimatedOpacity);
  dart.addTypeCaches(proxy_box.RenderAnimatedOpacity);
  dart.setLibraryUri(proxy_box.RenderAnimatedOpacity, L1);
  var _name = dart.privateName(ui, "_name");
  var C7;
  var _shaderCallback = dart.privateName(proxy_box, "_shaderCallback");
  var _blendMode = dart.privateName(proxy_box, "_blendMode");
  proxy_box.RenderShaderMask = class RenderShaderMask extends proxy_box.RenderProxyBox {
    get layer() {
      return ShaderMaskLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get shaderCallback() {
      return this[_shaderCallback];
    }
    set shaderCallback(value) {
      if (value == null) dart.nullFailed(L0, 1099, 37, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1100, 12, "value != null");
      if (dart.equals(this[_shaderCallback], value)) return;
      this[_shaderCallback] = value;
      this.markNeedsPaint();
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (value == null) dart.nullFailed(L0, 1113, 27, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1114, 12, "value != null");
      if (dart.equals(this[_blendMode], value)) return;
      this[_blendMode] = value;
      this.markNeedsPaint();
    }
    get alwaysNeedsCompositing() {
      return this.child != null;
    }
    paint(context, offset) {
      let t1, t0;
      if (context == null) dart.nullFailed(L0, 1125, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1125, 46, "offset");
      if (this.child != null) {
        if (!dart.test(this.needsCompositing)) dart.assertFailed(null, L0, 1127, 14, "needsCompositing");
        this.layer == null ? this.layer = new layer.ShaderMaskLayer.new() : null;
        t0 = dart.nullCheck(this.layer);
        (() => {
          t0.shader = (t1 = ui.Offset.zero['&'](this.size), this[_shaderCallback](t1));
          t0.maskRect = offset['&'](this.size);
          t0.blendMode = this[_blendMode];
          return t0;
        })();
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset);
      } else {
        this.layer = null;
      }
    }
  };
  (proxy_box.RenderShaderMask.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let shaderCallback = opts && 'shaderCallback' in opts ? opts.shaderCallback : null;
    if (shaderCallback == null) dart.nullFailed(L0, 1077, 29, "shaderCallback");
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C7 || CT.C7;
    if (blendMode == null) dart.nullFailed(L0, 1078, 15, "blendMode");
    if (!(shaderCallback != null)) dart.assertFailed(null, L0, 1079, 15, "shaderCallback != null");
    if (!(blendMode != null)) dart.assertFailed(null, L0, 1080, 15, "blendMode != null");
    this[_shaderCallback] = shaderCallback;
    this[_blendMode] = blendMode;
    proxy_box.RenderShaderMask.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderShaderMask.prototype;
  dart.addTypeTests(proxy_box.RenderShaderMask);
  dart.addTypeCaches(proxy_box.RenderShaderMask);
  dart.setGetterSignature(proxy_box.RenderShaderMask, () => ({
    __proto__: dart.getGetters(proxy_box.RenderShaderMask.__proto__),
    layer: dart.nullable(layer.ShaderMaskLayer),
    shaderCallback: dart.fnType(ui.Shader, [ui.Rect]),
    blendMode: ui.BlendMode
  }));
  dart.setSetterSignature(proxy_box.RenderShaderMask, () => ({
    __proto__: dart.getSetters(proxy_box.RenderShaderMask.__proto__),
    shaderCallback: dart.fnType(ui.Shader, [ui.Rect]),
    blendMode: ui.BlendMode
  }));
  dart.setLibraryUri(proxy_box.RenderShaderMask, L1);
  dart.setFieldSignature(proxy_box.RenderShaderMask, () => ({
    __proto__: dart.getFields(proxy_box.RenderShaderMask.__proto__),
    [_shaderCallback]: dart.fieldType(dart.fnType(ui.Shader, [ui.Rect])),
    [_blendMode]: dart.fieldType(ui.BlendMode)
  }));
  var _filter = dart.privateName(proxy_box, "_filter");
  proxy_box.RenderBackdropFilter = class RenderBackdropFilter extends proxy_box.RenderProxyBox {
    get layer() {
      return BackdropFilterLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get filter() {
      return this[_filter];
    }
    set filter(value) {
      if (value == null) dart.nullFailed(L0, 1163, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1164, 12, "value != null");
      if (dart.equals(this[_filter], value)) return;
      this[_filter] = value;
      this.markNeedsPaint();
    }
    get alwaysNeedsCompositing() {
      return this.child != null;
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1175, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1175, 46, "offset");
      if (this.child != null) {
        if (!dart.test(this.needsCompositing)) dart.assertFailed(null, L0, 1177, 14, "needsCompositing");
        this.layer == null ? this.layer = new layer.BackdropFilterLayer.new() : null;
        dart.nullCheck(this.layer).filter = this[_filter];
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset);
      } else {
        this.layer = null;
      }
    }
  };
  (proxy_box.RenderBackdropFilter.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let filter = opts && 'filter' in opts ? opts.filter : null;
    if (filter == null) dart.nullFailed(L0, 1148, 68, "filter");
    if (!(filter != null)) dart.assertFailed(null, L0, 1149, 14, "filter != null");
    this[_filter] = filter;
    proxy_box.RenderBackdropFilter.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderBackdropFilter.prototype;
  dart.addTypeTests(proxy_box.RenderBackdropFilter);
  dart.addTypeCaches(proxy_box.RenderBackdropFilter);
  dart.setGetterSignature(proxy_box.RenderBackdropFilter, () => ({
    __proto__: dart.getGetters(proxy_box.RenderBackdropFilter.__proto__),
    layer: dart.nullable(layer.BackdropFilterLayer),
    filter: ui.ImageFilter
  }));
  dart.setSetterSignature(proxy_box.RenderBackdropFilter, () => ({
    __proto__: dart.getSetters(proxy_box.RenderBackdropFilter.__proto__),
    filter: ui.ImageFilter
  }));
  dart.setLibraryUri(proxy_box.RenderBackdropFilter, L1);
  dart.setFieldSignature(proxy_box.RenderBackdropFilter, () => ({
    __proto__: dart.getFields(proxy_box.RenderBackdropFilter.__proto__),
    [_filter]: dart.fieldType(ui.ImageFilter)
  }));
  var _reclip = dart.privateName(proxy_box, "_reclip");
  const _is_CustomClipper_default = Symbol('_is_CustomClipper_default');
  var _reclip$ = dart.privateName(proxy_box, "CustomClipper._reclip");
  proxy_box.CustomClipper$ = dart.generic(T => {
    class CustomClipper extends change_notifier.Listenable {
      get [_reclip]() {
        return this[_reclip$];
      }
      set [_reclip](value) {
        super[_reclip] = value;
      }
      addListener(listener) {
        let t0;
        if (listener == null) dart.nullFailed(L0, 1224, 33, "listener");
        t0 = this[_reclip];
        return t0 == null ? null : t0.addListener(listener);
      }
      removeListener(listener) {
        let t0;
        if (listener == null) dart.nullFailed(L0, 1233, 36, "listener");
        t0 = this[_reclip];
        return t0 == null ? null : t0.removeListener(listener);
      }
      getApproximateClipRect(size) {
        if (size == null) dart.nullFailed(L0, 1247, 36, "size");
        return ui.Offset.zero['&'](size);
      }
      toString() {
        return object$.objectRuntimeType(this, "CustomClipper");
      }
    }
    (CustomClipper.new = function(opts) {
      let reclip = opts && 'reclip' in opts ? opts.reclip : null;
      this[_reclip$] = reclip;
      CustomClipper.__proto__.new.call(this);
      ;
    }).prototype = CustomClipper.prototype;
    dart.addTypeTests(CustomClipper);
    CustomClipper.prototype[_is_CustomClipper_default] = true;
    dart.addTypeCaches(CustomClipper);
    dart.setMethodSignature(CustomClipper, () => ({
      __proto__: dart.getMethods(CustomClipper.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      getApproximateClipRect: dart.fnType(ui.Rect, [ui.Size])
    }));
    dart.setLibraryUri(CustomClipper, L1);
    dart.setFieldSignature(CustomClipper, () => ({
      __proto__: dart.getFields(CustomClipper.__proto__),
      [_reclip]: dart.finalFieldType(dart.nullable(change_notifier.Listenable))
    }));
    dart.defineExtensionMethods(CustomClipper, ['toString']);
    return CustomClipper;
  });
  proxy_box.CustomClipper = proxy_box.CustomClipper$();
  dart.addTypeTests(proxy_box.CustomClipper, _is_CustomClipper_default);
  var shape$ = dart.privateName(proxy_box, "ShapeBorderClipper.shape");
  var textDirection$ = dart.privateName(proxy_box, "ShapeBorderClipper.textDirection");
  proxy_box.ShapeBorderClipper = class ShapeBorderClipper extends proxy_box.CustomClipper$(ui.Path) {
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    getClip(size) {
      if (size == null) dart.nullFailed(L0, 1296, 21, "size");
      return this.shape.getOuterPath(ui.Offset.zero['&'](size), {textDirection: this.textDirection});
    }
    shouldReclip(oldClipper) {
      CustomClipperOfPath().as(oldClipper);
      if (oldClipper == null) dart.nullFailed(L0, 1301, 41, "oldClipper");
      if (!dart.equals(dart.runtimeType(oldClipper), dart.wrapType(proxy_box.ShapeBorderClipper))) return true;
      let typedOldClipper = proxy_box.ShapeBorderClipper.as(oldClipper);
      return !dart.equals(typedOldClipper.shape, this.shape) || !dart.equals(typedOldClipper.textDirection, this.textDirection);
    }
  };
  (proxy_box.ShapeBorderClipper.new = function(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    if (shape == null) dart.nullFailed(L0, 1281, 19, "shape");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[shape$] = shape;
    this[textDirection$] = textDirection;
    if (!(shape != null)) dart.assertFailed(null, L0, 1283, 15, "shape != null");
    proxy_box.ShapeBorderClipper.__proto__.new.call(this);
    ;
  }).prototype = proxy_box.ShapeBorderClipper.prototype;
  dart.addTypeTests(proxy_box.ShapeBorderClipper);
  dart.addTypeCaches(proxy_box.ShapeBorderClipper);
  dart.setMethodSignature(proxy_box.ShapeBorderClipper, () => ({
    __proto__: dart.getMethods(proxy_box.ShapeBorderClipper.__proto__),
    getClip: dart.fnType(ui.Path, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(proxy_box.ShapeBorderClipper, L1);
  dart.setFieldSignature(proxy_box.ShapeBorderClipper, () => ({
    __proto__: dart.getFields(proxy_box.ShapeBorderClipper.__proto__),
    shape: dart.finalFieldType(borders.ShapeBorder),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  var C8;
  var _clip = dart.privateName(proxy_box, "_clip");
  var _debugPaint = dart.privateName(proxy_box, "_debugPaint");
  var _debugText = dart.privateName(proxy_box, "_debugText");
  var _clipper = dart.privateName(proxy_box, "_clipper");
  var _clipBehavior = dart.privateName(proxy_box, "_clipBehavior");
  var _markNeedsClip = dart.privateName(proxy_box, "_markNeedsClip");
  var _defaultClip = dart.privateName(proxy_box, "_defaultClip");
  var _updateClip = dart.privateName(proxy_box, "_updateClip");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C9;
  var C10;
  var C11;
  var C12;
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C14;
  var InlineSpan_style = dart.privateName(inline_span, "InlineSpan.style");
  var TextSpan_semanticsLabel = dart.privateName(text_span, "TextSpan.semanticsLabel");
  var TextSpan_recognizer = dart.privateName(text_span, "TextSpan.recognizer");
  var TextSpan_children = dart.privateName(text_span, "TextSpan.children");
  var TextSpan_text = dart.privateName(text_span, "TextSpan.text");
  var C13;
  const _is__RenderCustomClip_default = Symbol('_is__RenderCustomClip_default');
  proxy_box._RenderCustomClip$ = dart.generic(T => {
    var CustomClipperOfT = () => (CustomClipperOfT = dart.constFn(proxy_box.CustomClipper$(T)))();
    var CustomClipperNOfT = () => (CustomClipperNOfT = dart.constFn(dart.nullable(CustomClipperOfT())))();
    class _RenderCustomClip extends proxy_box.RenderProxyBox {
      get clipper() {
        return this[_clipper];
      }
      set clipper(newClipper) {
        let t0, t0$;
        CustomClipperNOfT().as(newClipper);
        if (dart.equals(this[_clipper], newClipper)) return;
        let oldClipper = this[_clipper];
        this[_clipper] = newClipper;
        if (!(newClipper != null || oldClipper != null)) dart.assertFailed(null, L0, 1328, 12, "newClipper != null || oldClipper != null");
        if (newClipper == null || oldClipper == null || !dart.equals(dart.runtimeType(newClipper), dart.runtimeType(oldClipper)) || dart.test(newClipper.shouldReclip(oldClipper))) {
          this[_markNeedsClip]();
        }
        if (dart.test(this.attached)) {
          t0 = oldClipper;
          t0 == null ? null : t0.removeListener(dart.bind(this, _markNeedsClip));
          t0$ = newClipper;
          t0$ == null ? null : t0$.addListener(dart.bind(this, _markNeedsClip));
        }
      }
      attach(owner) {
        let t0;
        object.PipelineOwner.as(owner);
        if (owner == null) dart.nullFailed(L0, 1341, 29, "owner");
        super.attach(owner);
        t0 = this[_clipper];
        t0 == null ? null : t0.addListener(dart.bind(this, _markNeedsClip));
      }
      detach() {
        let t0;
        t0 = this[_clipper];
        t0 == null ? null : t0.removeListener(dart.bind(this, _markNeedsClip));
        super.detach();
      }
      [_markNeedsClip]() {
        this[_clip] = null;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
      get clipBehavior() {
        return this[_clipBehavior];
      }
      set clipBehavior(value) {
        if (value == null) dart.nullFailed(L0, 1362, 25, "value");
        if (!dart.equals(value, this[_clipBehavior])) {
          this[_clipBehavior] = value;
          this.markNeedsPaint();
        }
      }
      performLayout() {
        let oldSize = dart.test(this.hasSize) ? this.size : null;
        super.performLayout();
        if (!dart.equals(oldSize, this.size)) this[_clip] = null;
      }
      [_updateClip]() {
        let t0, t0$;
        this[_clip] == null ? this[_clip] = (t0$ = (t0 = this[_clipper], t0 == null ? null : t0.getClip(this.size)), t0$ == null ? this[_defaultClip] : t0$) : null;
      }
      describeApproximatePaintClip(child) {
        let t0, t0$;
        object.RenderObject.as(child);
        if (child == null) dart.nullFailed(L0, 1383, 50, "child");
        t0$ = (t0 = this[_clipper], t0 == null ? null : t0.getApproximateClipRect(this.size));
        return t0$ == null ? ui.Offset.zero['&'](this.size) : t0$;
      }
      debugPaintSize(context, offset) {
        if (context == null) dart.nullFailed(L0, 1390, 39, "context");
        if (offset == null) dart.nullFailed(L0, 1390, 55, "offset");
        if (!dart.test(dart.fn(() => {
          let t0, t0$;
          this[_debugPaint] == null ? this[_debugPaint] = (t0 = ui.Paint.new(), (() => {
            t0.shader = ui.Gradient.linear(C9 || CT.C9, C10 || CT.C10, JSArrayOfColor().of([C11 || CT.C11, C12 || CT.C12, C12 || CT.C12, C11 || CT.C11]), JSArrayOfdouble().of([0.25, 0.25, 0.75, 0.75]), ui.TileMode.repeated);
            t0.strokeWidth = 2.0;
            t0.style = ui.PaintingStyle.stroke;
            return t0;
          })()) : null;
          this[_debugText] == null ? this[_debugText] = (t0$ = new text_painter.TextPainter.new({text: C13 || CT.C13, textDirection: ui.TextDirection.rtl}), (() => {
            t0$.layout();
            return t0$;
          })()) : null;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 1391, 12, "() {\n      _debugPaint ??= Paint()\n        ..shader = ui.Gradient.linear(\n          const Offset(0.0, 0.0),\n          const Offset(10.0, 10.0),\n          <Color>[const Color(0x00000000), const Color(0xFFFF00FF), const Color(0xFFFF00FF), const Color(0x00000000)],\n          <double>[0.25, 0.25, 0.75, 0.75],\n          TileMode.repeated,\n        )\n        ..strokeWidth = 2.0\n        ..style = PaintingStyle.stroke;\n      _debugText ??= TextPainter(\n        text: const TextSpan(\n          text: '✂',\n          style: TextStyle(\n            color: Color(0xFFFF00FF),\n              fontSize: 14.0,\n            ),\n          ),\n          textDirection: TextDirection.rtl, // doesn't matter, it's one character\n        )\n        ..layout();\n      return true;\n    }()");
      }
    }
    (_RenderCustomClip.new = function(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C8 || CT.C8;
      if (clipBehavior == null) dart.nullFailed(L0, 1314, 10, "clipBehavior");
      this[_clip] = null;
      this[_debugPaint] = null;
      this[_debugText] = null;
      if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1315, 15, "clipBehavior != null");
      this[_clipper] = clipper;
      this[_clipBehavior] = clipBehavior;
      _RenderCustomClip.__proto__.new.call(this, child);
      ;
    }).prototype = _RenderCustomClip.prototype;
    dart.addTypeTests(_RenderCustomClip);
    _RenderCustomClip.prototype[_is__RenderCustomClip_default] = true;
    dart.addTypeCaches(_RenderCustomClip);
    dart.setMethodSignature(_RenderCustomClip, () => ({
      __proto__: dart.getMethods(_RenderCustomClip.__proto__),
      [_markNeedsClip]: dart.fnType(dart.void, []),
      [_updateClip]: dart.fnType(dart.void, []),
      describeApproximatePaintClip: dart.fnType(ui.Rect, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(_RenderCustomClip, () => ({
      __proto__: dart.getGetters(_RenderCustomClip.__proto__),
      clipper: dart.nullable(proxy_box.CustomClipper$(T)),
      clipBehavior: ui.Clip
    }));
    dart.setSetterSignature(_RenderCustomClip, () => ({
      __proto__: dart.getSetters(_RenderCustomClip.__proto__),
      clipper: dart.nullable(core.Object),
      clipBehavior: ui.Clip
    }));
    dart.setLibraryUri(_RenderCustomClip, L1);
    dart.setFieldSignature(_RenderCustomClip, () => ({
      __proto__: dart.getFields(_RenderCustomClip.__proto__),
      [_clipper]: dart.fieldType(dart.nullable(proxy_box.CustomClipper$(T))),
      [_clip]: dart.fieldType(dart.nullable(T)),
      [_clipBehavior]: dart.fieldType(ui.Clip),
      [_debugPaint]: dart.fieldType(dart.nullable(ui.Paint)),
      [_debugText]: dart.fieldType(dart.nullable(text_painter.TextPainter))
    }));
    return _RenderCustomClip;
  });
  proxy_box._RenderCustomClip = proxy_box._RenderCustomClip$();
  dart.addTypeTests(proxy_box._RenderCustomClip, _is__RenderCustomClip_default);
  proxy_box.RenderClipRect = class RenderClipRect extends proxy_box._RenderCustomClip$(ui.Rect) {
    get [_defaultClip]() {
      return ui.Offset.zero['&'](this.size);
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 1442, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1442, 59, "position");
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, L0, 1445, 14, "_clip != null");
        if (!dart.test(dart.nullCheck(this[_clip]).contains(position))) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1453, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1453, 46, "offset");
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipRect(this.needsCompositing, offset, dart.nullCheck(this[_clip]), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: ClipRectLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 1470, 39, "context");
      if (offset == null) dart.nullFailed(L0, 1470, 55, "offset");
      if (!dart.test(dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawRect(dart.nullCheck(this[_clip]).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset['+'](new ui.Offset.new(dart.notNull(dart.nullCheck(this[_clip]).width) / 8.0, -dart.nullCheck(dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_debugText]).text).style).fontSize) * 1.1)));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1471, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawRect(_clip!.shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset + Offset(_clip!.width / 8.0, -_debugText!.text!.style!.fontSize! * 1.1));\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipRect.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C8 || CT.C8;
    if (clipBehavior == null) dart.nullFailed(L0, 1433, 10, "clipBehavior");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1434, 15, "clipBehavior != null");
    if (!!dart.equals(clipBehavior, ui.Clip.none)) dart.assertFailed(null, L0, 1435, 15, "clipBehavior != Clip.none");
    proxy_box.RenderClipRect.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderClipRect.prototype;
  dart.addTypeTests(proxy_box.RenderClipRect);
  dart.addTypeCaches(proxy_box.RenderClipRect);
  dart.setGetterSignature(proxy_box.RenderClipRect, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipRect.__proto__),
    [_defaultClip]: ui.Rect
  }));
  dart.setLibraryUri(proxy_box.RenderClipRect, L1);
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C16;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C15;
  var _borderRadius = dart.privateName(proxy_box, "_borderRadius");
  proxy_box.RenderClipRRect = class RenderClipRRect extends proxy_box._RenderCustomClip$(ui.RRect) {
    get borderRadius() {
      return this[_borderRadius];
    }
    set borderRadius(value) {
      if (value == null) dart.nullFailed(L0, 1519, 33, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1520, 12, "value != null");
      if (dart.equals(this[_borderRadius], value)) return;
      this[_borderRadius] = value;
      this[_markNeedsClip]();
    }
    get [_defaultClip]() {
      return this[_borderRadius].toRRect(ui.Offset.zero['&'](this.size));
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 1531, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1531, 59, "position");
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, L0, 1534, 14, "_clip != null");
        if (!dart.test(dart.nullCheck(this[_clip]).contains(position))) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1542, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1542, 46, "offset");
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipRRect(this.needsCompositing, offset, dart.nullCheck(this[_clip]).outerRect, dart.nullCheck(this[_clip]), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: ClipRRectLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 1558, 39, "context");
      if (offset == null) dart.nullFailed(L0, 1558, 55, "offset");
      if (!dart.test(dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawRRect(dart.nullCheck(this[_clip]).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset['+'](new ui.Offset.new(dart.nullCheck(this[_clip]).tlRadiusX, -dart.nullCheck(dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_debugText]).text).style).fontSize) * 1.1)));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1559, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawRRect(_clip!.shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset + Offset(_clip!.tlRadiusX, -_debugText!.text!.style!.fontSize! * 1.1));\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipRRect.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C15 || CT.C15;
    if (borderRadius == null) dart.nullFailed(L0, 1498, 18, "borderRadius");
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C8 || CT.C8;
    if (clipBehavior == null) dart.nullFailed(L0, 1500, 10, "clipBehavior");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1501, 15, "clipBehavior != null");
    if (!!dart.equals(clipBehavior, ui.Clip.none)) dart.assertFailed(null, L0, 1502, 15, "clipBehavior != Clip.none");
    this[_borderRadius] = borderRadius;
    proxy_box.RenderClipRRect.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    if (!(this[_borderRadius] != null || clipper != null)) dart.assertFailed(null, L0, 1508, 12, "_borderRadius != null || clipper != null");
  }).prototype = proxy_box.RenderClipRRect.prototype;
  dart.addTypeTests(proxy_box.RenderClipRRect);
  dart.addTypeCaches(proxy_box.RenderClipRRect);
  dart.setGetterSignature(proxy_box.RenderClipRRect, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipRRect.__proto__),
    borderRadius: border_radius.BorderRadius,
    [_defaultClip]: ui.RRect
  }));
  dart.setSetterSignature(proxy_box.RenderClipRRect, () => ({
    __proto__: dart.getSetters(proxy_box.RenderClipRRect.__proto__),
    borderRadius: border_radius.BorderRadius
  }));
  dart.setLibraryUri(proxy_box.RenderClipRRect, L1);
  dart.setFieldSignature(proxy_box.RenderClipRRect, () => ({
    __proto__: dart.getFields(proxy_box.RenderClipRRect.__proto__),
    [_borderRadius]: dart.fieldType(border_radius.BorderRadius)
  }));
  var _cachedRect = dart.privateName(proxy_box, "_cachedRect");
  var __RenderClipOval__cachedPath = dart.privateName(proxy_box, "_#RenderClipOval#_cachedPath");
  var __RenderClipOval__cachedPath_isSet = dart.privateName(proxy_box, "_#RenderClipOval#_cachedPath#isSet");
  var _cachedPath = dart.privateName(proxy_box, "_cachedPath");
  var _getClipPath = dart.privateName(proxy_box, "_getClipPath");
  proxy_box.RenderClipOval = class RenderClipOval extends proxy_box._RenderCustomClip$(ui.Rect) {
    get [_cachedPath]() {
      let t0;
      return dart.test(this[__RenderClipOval__cachedPath_isSet]) ? (t0 = this[__RenderClipOval__cachedPath], t0) : dart.throw(new _internal.LateError.fieldNI("_cachedPath"));
    }
    set [_cachedPath](t0) {
      if (t0 == null) dart.nullFailed(L0, 1591, 13, "null");
      this[__RenderClipOval__cachedPath_isSet] = true;
      this[__RenderClipOval__cachedPath] = t0;
    }
    [_getClipPath](rect) {
      let t1;
      if (rect == null) dart.nullFailed(L0, 1593, 26, "rect");
      if (!dart.equals(rect, this[_cachedRect])) {
        this[_cachedRect] = rect;
        this[_cachedPath] = (t1 = ui.Path.new(), (() => {
          t1.addOval(dart.nullCheck(this[_cachedRect]));
          return t1;
        })());
      }
      return this[_cachedPath];
    }
    get [_defaultClip]() {
      return ui.Offset.zero['&'](this.size);
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 1605, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1605, 59, "position");
      this[_updateClip]();
      if (!(this[_clip] != null)) dart.assertFailed(null, L0, 1607, 12, "_clip != null");
      let center = dart.nullCheck(this[_clip]).center;
      let offset = new ui.Offset.new((dart.notNull(position.dx) - dart.notNull(center.dx)) / dart.notNull(dart.nullCheck(this[_clip]).width), (dart.notNull(position.dy) - dart.notNull(center.dy)) / dart.notNull(dart.nullCheck(this[_clip]).height));
      if (dart.notNull(offset.distanceSquared) > 0.25) return false;
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1619, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1619, 46, "offset");
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipPath(this.needsCompositing, offset, dart.nullCheck(this[_clip]), this[_getClipPath](dart.nullCheck(this[_clip])), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: ClipPathLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 1637, 39, "context");
      if (offset == null) dart.nullFailed(L0, 1637, 55, "offset");
      if (!dart.test(dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawPath(this[_getClipPath](dart.nullCheck(this[_clip])).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset['+'](new ui.Offset.new((dart.notNull(dart.nullCheck(this[_clip]).width) - dart.notNull(dart.nullCheck(this[_debugText]).width)) / 2.0, -dart.nullCheck(dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_debugText]).text).style).fontSize) * 1.1)));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1638, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawPath(_getClipPath(_clip!).shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset + Offset((_clip!.width - _debugText!.width) / 2.0, -_debugText!.text!.style!.fontSize! * 1.1));\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipOval.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C8 || CT.C8;
    if (clipBehavior == null) dart.nullFailed(L0, 1585, 10, "clipBehavior");
    this[_cachedRect] = null;
    this[__RenderClipOval__cachedPath] = null;
    this[__RenderClipOval__cachedPath_isSet] = false;
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1586, 15, "clipBehavior != null");
    if (!!dart.equals(clipBehavior, ui.Clip.none)) dart.assertFailed(null, L0, 1587, 15, "clipBehavior != Clip.none");
    proxy_box.RenderClipOval.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderClipOval.prototype;
  dart.addTypeTests(proxy_box.RenderClipOval);
  dart.addTypeCaches(proxy_box.RenderClipOval);
  dart.setMethodSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getMethods(proxy_box.RenderClipOval.__proto__),
    [_getClipPath]: dart.fnType(ui.Path, [ui.Rect])
  }));
  dart.setGetterSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipOval.__proto__),
    [_cachedPath]: ui.Path,
    [_defaultClip]: ui.Rect
  }));
  dart.setSetterSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getSetters(proxy_box.RenderClipOval.__proto__),
    [_cachedPath]: ui.Path
  }));
  dart.setLibraryUri(proxy_box.RenderClipOval, L1);
  dart.setFieldSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getFields(proxy_box.RenderClipOval.__proto__),
    [_cachedRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [__RenderClipOval__cachedPath]: dart.fieldType(dart.nullable(ui.Path)),
    [__RenderClipOval__cachedPath_isSet]: dart.fieldType(core.bool)
  }));
  proxy_box.RenderClipPath = class RenderClipPath extends proxy_box._RenderCustomClip$(ui.Path) {
    get [_defaultClip]() {
      let t1;
      t1 = ui.Path.new();
      return (() => {
        t1.addRect(ui.Offset.zero['&'](this.size));
        return t1;
      })();
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 1681, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1681, 59, "position");
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, L0, 1684, 14, "_clip != null");
        if (!dart.test(dart.nullCheck(this[_clip]).contains(position))) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1692, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1692, 46, "offset");
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipPath(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.nullCheck(this[_clip]), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: ClipPathLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (context == null) dart.nullFailed(L0, 1710, 39, "context");
      if (offset == null) dart.nullFailed(L0, 1710, 55, "offset");
      if (!dart.test(dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawPath(dart.nullCheck(this[_clip]).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1711, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawPath(_clip!.shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset);\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipPath.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C8 || CT.C8;
    if (clipBehavior == null) dart.nullFailed(L0, 1672, 10, "clipBehavior");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1673, 15, "clipBehavior != null");
    if (!!dart.equals(clipBehavior, ui.Clip.none)) dart.assertFailed(null, L0, 1674, 15, "clipBehavior != Clip.none");
    proxy_box.RenderClipPath.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderClipPath.prototype;
  dart.addTypeTests(proxy_box.RenderClipPath);
  dart.addTypeCaches(proxy_box.RenderClipPath);
  dart.setGetterSignature(proxy_box.RenderClipPath, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipPath.__proto__),
    [_defaultClip]: ui.Path
  }));
  dart.setLibraryUri(proxy_box.RenderClipPath, L1);
  var C17;
  var _elevation = dart.privateName(proxy_box, "_elevation");
  var _color = dart.privateName(proxy_box, "_color");
  var _shadowColor = dart.privateName(proxy_box, "_shadowColor");
  const _is__RenderPhysicalModelBase_default = Symbol('_is__RenderPhysicalModelBase_default');
  proxy_box._RenderPhysicalModelBase$ = dart.generic(T => {
    class _RenderPhysicalModelBase extends proxy_box._RenderCustomClip$(T) {
      get elevation() {
        return this[_elevation];
      }
      set elevation(value) {
        if (value == null) dart.nullFailed(L0, 1753, 24, "value");
        if (!(value != null && dart.notNull(value) >= 0.0)) dart.assertFailed(null, L0, 1754, 12, "value != null && value >= 0.0");
        if (this.elevation == value) return;
        let didNeedCompositing = this.alwaysNeedsCompositing;
        this[_elevation] = value;
        if (!dart.equals(didNeedCompositing, this.alwaysNeedsCompositing)) this.markNeedsCompositingBitsUpdate();
        this.markNeedsPaint();
      }
      get shadowColor() {
        return this[_shadowColor];
      }
      set shadowColor(value) {
        if (value == null) dart.nullFailed(L0, 1767, 25, "value");
        if (!(value != null)) dart.assertFailed(null, L0, 1768, 12, "value != null");
        if (dart.equals(this.shadowColor, value)) return;
        this[_shadowColor] = value;
        this.markNeedsPaint();
      }
      get color() {
        return this[_color];
      }
      set color(value) {
        if (value == null) dart.nullFailed(L0, 1778, 19, "value");
        if (!(value != null)) dart.assertFailed(null, L0, 1779, 12, "value != null");
        if (dart.equals(this.color, value)) return;
        this[_color] = value;
        this.markNeedsPaint();
      }
      get alwaysNeedsCompositing() {
        return true;
      }
      describeSemanticsConfiguration(config) {
        if (config == null) dart.nullFailed(L0, 1790, 62, "config");
        super.describeSemanticsConfiguration(config);
        config.elevation = this.elevation;
      }
      debugFillProperties(description) {
        if (description == null) dart.nullFailed(L0, 1796, 56, "description");
        super.debugFillProperties(description);
        description.add(new diagnostics.DoubleProperty.new("elevation", this.elevation));
        description.add(new colors.ColorProperty.new("color", this.color));
        description.add(new colors.ColorProperty.new("shadowColor", this.color));
      }
    }
    (_RenderPhysicalModelBase.new = function(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      if (elevation == null) dart.nullFailed(L0, 1731, 21, "elevation");
      let color = opts && 'color' in opts ? opts.color : null;
      if (color == null) dart.nullFailed(L0, 1732, 20, "color");
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      if (shadowColor == null) dart.nullFailed(L0, 1733, 20, "shadowColor");
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C17 || CT.C17;
      if (clipBehavior == null) dart.nullFailed(L0, 1734, 10, "clipBehavior");
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      if (!(elevation != null && dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, L0, 1736, 15, "elevation != null && elevation >= 0.0");
      if (!(color != null)) dart.assertFailed(null, L0, 1737, 15, "color != null");
      if (!(shadowColor != null)) dart.assertFailed(null, L0, 1738, 15, "shadowColor != null");
      if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1739, 15, "clipBehavior != null");
      this[_elevation] = elevation;
      this[_color] = color;
      this[_shadowColor] = shadowColor;
      _RenderPhysicalModelBase.__proto__.new.call(this, {child: child, clipBehavior: clipBehavior, clipper: clipper});
      ;
    }).prototype = _RenderPhysicalModelBase.prototype;
    dart.addTypeTests(_RenderPhysicalModelBase);
    _RenderPhysicalModelBase.prototype[_is__RenderPhysicalModelBase_default] = true;
    dart.addTypeCaches(_RenderPhysicalModelBase);
    dart.setGetterSignature(_RenderPhysicalModelBase, () => ({
      __proto__: dart.getGetters(_RenderPhysicalModelBase.__proto__),
      elevation: core.double,
      shadowColor: ui.Color,
      color: ui.Color
    }));
    dart.setSetterSignature(_RenderPhysicalModelBase, () => ({
      __proto__: dart.getSetters(_RenderPhysicalModelBase.__proto__),
      elevation: core.double,
      shadowColor: ui.Color,
      color: ui.Color
    }));
    dart.setLibraryUri(_RenderPhysicalModelBase, L1);
    dart.setFieldSignature(_RenderPhysicalModelBase, () => ({
      __proto__: dart.getFields(_RenderPhysicalModelBase.__proto__),
      [_elevation]: dart.fieldType(core.double),
      [_shadowColor]: dart.fieldType(ui.Color),
      [_color]: dart.fieldType(ui.Color)
    }));
    return _RenderPhysicalModelBase;
  });
  proxy_box._RenderPhysicalModelBase = proxy_box._RenderPhysicalModelBase$();
  dart.addTypeTests(proxy_box._RenderPhysicalModelBase, _is__RenderPhysicalModelBase_default);
  var _name$0 = dart.privateName(box_border, "_name");
  var C18;
  var C19;
  var _shape = dart.privateName(proxy_box, "_shape");
  var C20;
  proxy_box.RenderPhysicalModel = class RenderPhysicalModel extends proxy_box._RenderPhysicalModelBase$(ui.RRect) {
    get layer() {
      return PhysicalModelLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get shape() {
      return this[_shape];
    }
    set shape(value) {
      if (value == null) dart.nullFailed(L0, 1848, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 1849, 12, "value != null");
      if (dart.equals(this.shape, value)) return;
      this[_shape] = value;
      this[_markNeedsClip]();
    }
    get borderRadius() {
      return this[_borderRadius];
    }
    set borderRadius(value) {
      if (dart.equals(this.borderRadius, value)) return;
      this[_borderRadius] = value;
      this[_markNeedsClip]();
    }
    get [_defaultClip]() {
      let t1;
      if (!dart.test(this.hasSize)) dart.assertFailed(null, L0, 1875, 12, "hasSize");
      if (!(this[_shape] != null)) dart.assertFailed(null, L0, 1876, 12, "_shape != null");
      switch (this[_shape]) {
        case C18 || CT.C18:
        {
          return (t1 = this.borderRadius, t1 == null ? border_radius.BorderRadius.zero : t1).toRRect(ui.Offset.zero['&'](this.size));
        }
        case C20 || CT.C20:
        {
          let rect = ui.Offset.zero['&'](this.size);
          return new ui.RRect.fromRectXY(rect, dart.notNull(rect.width) / 2, dart.notNull(rect.height) / 2);
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 1887, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1887, 59, "position");
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, L0, 1890, 14, "_clip != null");
        if (!dart.test(dart.nullCheck(this[_clip]).contains(position))) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      let t1, t1$;
      if (context == null) dart.nullFailed(L0, 1898, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1898, 46, "offset");
      if (this.child != null) {
        this[_updateClip]();
        let offsetRRect = dart.nullCheck(this[_clip]).shift(offset);
        let offsetBounds = offsetRRect.outerRect;
        let offsetRRectAsPath = (t1 = ui.Path.new(), (() => {
          t1.addRRect(offsetRRect);
          return t1;
        })());
        let paintShadows = true;
        if (!dart.test(dart.fn(() => {
          let t1;
          if (dart.test(debug.debugDisableShadows)) {
            if (dart.notNull(this.elevation) > 0.0) {
              context.canvas.drawRRect(offsetRRect, (t1 = ui.Paint.new(), (() => {
                t1.color = this.shadowColor;
                t1.style = ui.PaintingStyle.stroke;
                t1.strokeWidth = dart.notNull(this.elevation) * 2.0;
                return t1;
              })()));
            }
            paintShadows = false;
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 1905, 14, "() {\n        if (debugDisableShadows) {\n          if (elevation > 0.0) {\n            context.canvas.drawRRect(\n              offsetRRect,\n              Paint()\n                ..color = shadowColor\n                ..style = PaintingStyle.stroke\n                ..strokeWidth = elevation * 2.0,\n            );\n          }\n          paintShadows = false;\n        }\n        return true;\n      }()");
        this.layer == null ? this.layer = new layer.PhysicalModelLayer.new() : null;
        t1$ = dart.nullCheck(this.layer);
        (() => {
          t1$.clipPath = offsetRRectAsPath;
          t1$.clipBehavior = this.clipBehavior;
          t1$.elevation = paintShadows ? this.elevation : 0.0;
          t1$.color = this.color;
          t1$.shadowColor = this.shadowColor;
          return t1$;
        })();
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset, {childPaintBounds: offsetBounds});
        if (!dart.test(dart.fn(() => {
          dart.nullCheck(this.layer).debugCreator = this.debugCreator;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 1928, 14, "() {\n        layer!.debugCreator = debugCreator;\n        return true;\n      }()");
      } else {
        this.layer = null;
      }
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 1938, 56, "description");
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfBoxShape()).new("shape", this.shape));
      description.add(new (DiagnosticsPropertyOfBorderRadius()).new("borderRadius", this.borderRadius));
    }
  };
  (proxy_box.RenderPhysicalModel.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let shape = opts && 'shape' in opts ? opts.shape : C18 || CT.C18;
    if (shape == null) dart.nullFailed(L0, 1818, 14, "shape");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C17 || CT.C17;
    if (clipBehavior == null) dart.nullFailed(L0, 1819, 10, "clipBehavior");
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
    if (elevation == null) dart.nullFailed(L0, 1821, 12, "elevation");
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L0, 1822, 20, "color");
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : C19 || CT.C19;
    if (shadowColor == null) dart.nullFailed(L0, 1823, 11, "shadowColor");
    if (!(shape != null)) dart.assertFailed(null, L0, 1824, 15, "shape != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1825, 15, "clipBehavior != null");
    if (!(elevation != null && dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, L0, 1826, 15, "elevation != null && elevation >= 0.0");
    if (!(color != null)) dart.assertFailed(null, L0, 1827, 15, "color != null");
    if (!(shadowColor != null)) dart.assertFailed(null, L0, 1828, 15, "shadowColor != null");
    this[_shape] = shape;
    this[_borderRadius] = borderRadius;
    proxy_box.RenderPhysicalModel.__proto__.new.call(this, {clipBehavior: clipBehavior, child: child, elevation: elevation, color: color, shadowColor: shadowColor});
    ;
  }).prototype = proxy_box.RenderPhysicalModel.prototype;
  dart.addTypeTests(proxy_box.RenderPhysicalModel);
  dart.addTypeCaches(proxy_box.RenderPhysicalModel);
  dart.setGetterSignature(proxy_box.RenderPhysicalModel, () => ({
    __proto__: dart.getGetters(proxy_box.RenderPhysicalModel.__proto__),
    layer: dart.nullable(layer.PhysicalModelLayer),
    shape: box_border.BoxShape,
    borderRadius: dart.nullable(border_radius.BorderRadius),
    [_defaultClip]: ui.RRect
  }));
  dart.setSetterSignature(proxy_box.RenderPhysicalModel, () => ({
    __proto__: dart.getSetters(proxy_box.RenderPhysicalModel.__proto__),
    shape: box_border.BoxShape,
    borderRadius: dart.nullable(border_radius.BorderRadius)
  }));
  dart.setLibraryUri(proxy_box.RenderPhysicalModel, L1);
  dart.setFieldSignature(proxy_box.RenderPhysicalModel, () => ({
    __proto__: dart.getFields(proxy_box.RenderPhysicalModel.__proto__),
    [_shape]: dart.fieldType(box_border.BoxShape),
    [_borderRadius]: dart.fieldType(dart.nullable(border_radius.BorderRadius))
  }));
  proxy_box.RenderPhysicalShape = class RenderPhysicalShape extends proxy_box._RenderPhysicalModelBase$(ui.Path) {
    get layer() {
      return PhysicalModelLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get [_defaultClip]() {
      let t1;
      t1 = ui.Path.new();
      return (() => {
        t1.addRect(ui.Offset.zero['&'](this.size));
        return t1;
      })();
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 1987, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1987, 59, "position");
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, L0, 1990, 14, "_clip != null");
        if (!dart.test(dart.nullCheck(this[_clip]).contains(position))) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      let t1;
      if (context == null) dart.nullFailed(L0, 1998, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1998, 46, "offset");
      if (this.child != null) {
        this[_updateClip]();
        let offsetBounds = offset['&'](this.size);
        let offsetPath = dart.nullCheck(this[_clip]).shift(offset);
        let paintShadows = true;
        if (!dart.test(dart.fn(() => {
          let t1;
          if (dart.test(debug.debugDisableShadows)) {
            if (dart.notNull(this.elevation) > 0.0) {
              context.canvas.drawPath(offsetPath, (t1 = ui.Paint.new(), (() => {
                t1.color = this.shadowColor;
                t1.style = ui.PaintingStyle.stroke;
                t1.strokeWidth = dart.notNull(this.elevation) * 2.0;
                return t1;
              })()));
            }
            paintShadows = false;
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 2004, 14, "() {\n        if (debugDisableShadows) {\n          if (elevation > 0.0) {\n            context.canvas.drawPath(\n              offsetPath,\n              Paint()\n                ..color = shadowColor\n                ..style = PaintingStyle.stroke\n                ..strokeWidth = elevation * 2.0,\n            );\n          }\n          paintShadows = false;\n        }\n        return true;\n      }()");
        this.layer == null ? this.layer = new layer.PhysicalModelLayer.new() : null;
        t1 = dart.nullCheck(this.layer);
        (() => {
          t1.clipPath = offsetPath;
          t1.clipBehavior = this.clipBehavior;
          t1.elevation = paintShadows ? this.elevation : 0.0;
          t1.color = this.color;
          t1.shadowColor = this.shadowColor;
          return t1;
        })();
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset, {childPaintBounds: offsetBounds});
        if (!dart.test(dart.fn(() => {
          dart.nullCheck(this.layer).debugCreator = this.debugCreator;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 2027, 14, "() {\n        layer!.debugCreator = debugCreator;\n        return true;\n      }()");
      } else {
        this.layer = null;
      }
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 2037, 56, "description");
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfCustomClipperOfPath()).new("clipper", this.clipper));
    }
  };
  (proxy_box.RenderPhysicalShape.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    if (clipper == null) dart.nullFailed(L0, 1962, 34, "clipper");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C17 || CT.C17;
    if (clipBehavior == null) dart.nullFailed(L0, 1963, 10, "clipBehavior");
    let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
    if (elevation == null) dart.nullFailed(L0, 1964, 12, "elevation");
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L0, 1965, 20, "color");
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : C19 || CT.C19;
    if (shadowColor == null) dart.nullFailed(L0, 1966, 11, "shadowColor");
    if (!(clipper != null)) dart.assertFailed(null, L0, 1967, 15, "clipper != null");
    if (!(elevation != null && dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, L0, 1968, 15, "elevation != null && elevation >= 0.0");
    if (!(color != null)) dart.assertFailed(null, L0, 1969, 15, "color != null");
    if (!(shadowColor != null)) dart.assertFailed(null, L0, 1970, 15, "shadowColor != null");
    proxy_box.RenderPhysicalShape.__proto__.new.call(this, {child: child, elevation: elevation, color: color, shadowColor: shadowColor, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderPhysicalShape.prototype;
  dart.addTypeTests(proxy_box.RenderPhysicalShape);
  dart.addTypeCaches(proxy_box.RenderPhysicalShape);
  dart.setGetterSignature(proxy_box.RenderPhysicalShape, () => ({
    __proto__: dart.getGetters(proxy_box.RenderPhysicalShape.__proto__),
    layer: dart.nullable(layer.PhysicalModelLayer),
    [_defaultClip]: ui.Path
  }));
  dart.setLibraryUri(proxy_box.RenderPhysicalShape, L1);
  var C21;
  var C22;
  var C23;
  proxy_box.DecorationPosition = class DecorationPosition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (proxy_box.DecorationPosition.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 2044, 6, "index");
    if (_name == null) dart.nullFailed(L0, 2044, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = proxy_box.DecorationPosition.prototype;
  dart.addTypeTests(proxy_box.DecorationPosition);
  dart.addTypeCaches(proxy_box.DecorationPosition);
  dart.setLibraryUri(proxy_box.DecorationPosition, L1);
  dart.setFieldSignature(proxy_box.DecorationPosition, () => ({
    __proto__: dart.getFields(proxy_box.DecorationPosition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(proxy_box.DecorationPosition, ['toString']);
  proxy_box.DecorationPosition.background = C21 || CT.C21;
  proxy_box.DecorationPosition.foreground = C22 || CT.C22;
  proxy_box.DecorationPosition.values = C23 || CT.C23;
  var ImageConfiguration_platform = dart.privateName(image_provider, "ImageConfiguration.platform");
  var ImageConfiguration_size = dart.privateName(image_provider, "ImageConfiguration.size");
  var ImageConfiguration_textDirection = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  var ImageConfiguration_locale = dart.privateName(image_provider, "ImageConfiguration.locale");
  var ImageConfiguration_devicePixelRatio = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  var ImageConfiguration_bundle = dart.privateName(image_provider, "ImageConfiguration.bundle");
  var C24;
  var _painter = dart.privateName(proxy_box, "_painter");
  var _decoration = dart.privateName(proxy_box, "_decoration");
  var _position = dart.privateName(proxy_box, "_position");
  var _configuration = dart.privateName(proxy_box, "_configuration");
  proxy_box.RenderDecoratedBox = class RenderDecoratedBox extends proxy_box.RenderProxyBox {
    get decoration() {
      return this[_decoration];
    }
    set decoration(value) {
      let t1;
      if (value == null) dart.nullFailed(L0, 2081, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2082, 12, "value != null");
      if (dart.equals(value, this[_decoration])) return;
      t1 = this[_painter];
      t1 == null ? null : t1.dispose();
      this[_painter] = null;
      this[_decoration] = value;
      this.markNeedsPaint();
    }
    get position() {
      return this[_position];
    }
    set position(value) {
      if (value == null) dart.nullFailed(L0, 2094, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2095, 12, "value != null");
      if (dart.equals(value, this[_position])) return;
      this[_position] = value;
      this.markNeedsPaint();
    }
    get configuration() {
      return this[_configuration];
    }
    set configuration(value) {
      if (value == null) dart.nullFailed(L0, 2110, 40, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2111, 12, "value != null");
      if (dart.equals(value, this[_configuration])) return;
      this[_configuration] = value;
      this.markNeedsPaint();
    }
    detach() {
      let t1;
      t1 = this[_painter];
      t1 == null ? null : t1.dispose();
      this[_painter] = null;
      super.detach();
      this.markNeedsPaint();
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L0, 2132, 27, "position");
      return this[_decoration].hitTest(this.size, position, {textDirection: this.configuration.textDirection});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 2137, 30, "context");
      if (offset == null) dart.nullFailed(L0, 2137, 46, "offset");
      if (!(this.size.width != null)) dart.assertFailed(null, L0, 2138, 12, "size.width != null");
      if (!(this.size.height != null)) dart.assertFailed(null, L0, 2139, 12, "size.height != null");
      this[_painter] == null ? this[_painter] = this[_decoration].createBoxPainter(dart.bind(this, 'markNeedsPaint')) : null;
      let filledConfiguration = this.configuration.copyWith({size: this.size});
      if (dart.equals(this.position, proxy_box.DecorationPosition.background)) {
        let debugSaveCount = null;
        if (!dart.test(dart.fn(() => {
          debugSaveCount = context.canvas.getSaveCount();
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 2144, 14, "() {\n        debugSaveCount = context.canvas.getSaveCount();\n        return true;\n      }()");
        dart.nullCheck(this[_painter]).paint(context.canvas, offset, filledConfiguration);
        if (!dart.test(dart.fn(() => {
          if (debugSaveCount != context.canvas.getSaveCount()) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(dart.runtimeType(this[_decoration])) + " painter had mismatching save and restore calls."), new assertions.ErrorDescription.new("Before painting the decoration, the canvas save count was " + dart.str(debugSaveCount) + ". " + "After painting it, the canvas save count was " + dart.str(context.canvas.getSaveCount()) + ". " + "Every call to save() or saveLayer() must be matched by a call to restore()."), new (DiagnosticsPropertyOfDecoration()).new("The decoration was", this.decoration, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (DiagnosticsPropertyOfBoxPainter()).new("The painter was", this[_painter], {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 2149, 14, "() {\n        if (debugSaveCount != context.canvas.getSaveCount()) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('${_decoration.runtimeType} painter had mismatching save and restore calls.'),\n            ErrorDescription(\n              'Before painting the decoration, the canvas save count was $debugSaveCount. '\n              'After painting it, the canvas save count was ${context.canvas.getSaveCount()}. '\n              'Every call to save() or saveLayer() must be matched by a call to restore().'\n            ),\n            DiagnosticsProperty<Decoration>('The decoration was', decoration, style: DiagnosticsTreeStyle.errorProperty),\n            DiagnosticsProperty<BoxPainter>('The painter was', _painter, style: DiagnosticsTreeStyle.errorProperty),\n          ]);\n        }\n        return true;\n      }()");
        if (dart.test(this.decoration.isComplex)) context.setIsComplexHint();
      }
      super.paint(context, offset);
      if (dart.equals(this.position, proxy_box.DecorationPosition.foreground)) {
        dart.nullCheck(this[_painter]).paint(context.canvas, offset, filledConfiguration);
        if (dart.test(this.decoration.isComplex)) context.setIsComplexHint();
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2176, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(this[_decoration].toDiagnosticsNode({name: "decoration"}));
      properties.add(new (DiagnosticsPropertyOfImageConfiguration()).new("configuration", this.configuration));
    }
  };
  (proxy_box.RenderDecoratedBox.new = function(opts) {
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    if (decoration == null) dart.nullFailed(L0, 2062, 25, "decoration");
    let position = opts && 'position' in opts ? opts.position : C21 || CT.C21;
    if (position == null) dart.nullFailed(L0, 2063, 24, "position");
    let configuration = opts && 'configuration' in opts ? opts.configuration : C24 || CT.C24;
    if (configuration == null) dart.nullFailed(L0, 2064, 24, "configuration");
    let child = opts && 'child' in opts ? opts.child : null;
    this[_painter] = null;
    if (!(decoration != null)) dart.assertFailed(null, L0, 2066, 15, "decoration != null");
    if (!(position != null)) dart.assertFailed(null, L0, 2067, 15, "position != null");
    if (!(configuration != null)) dart.assertFailed(null, L0, 2068, 15, "configuration != null");
    this[_decoration] = decoration;
    this[_position] = position;
    this[_configuration] = configuration;
    proxy_box.RenderDecoratedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderDecoratedBox.prototype;
  dart.addTypeTests(proxy_box.RenderDecoratedBox);
  dart.addTypeCaches(proxy_box.RenderDecoratedBox);
  dart.setGetterSignature(proxy_box.RenderDecoratedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderDecoratedBox.__proto__),
    decoration: decoration.Decoration,
    position: proxy_box.DecorationPosition,
    configuration: image_provider.ImageConfiguration
  }));
  dart.setSetterSignature(proxy_box.RenderDecoratedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderDecoratedBox.__proto__),
    decoration: decoration.Decoration,
    position: proxy_box.DecorationPosition,
    configuration: image_provider.ImageConfiguration
  }));
  dart.setLibraryUri(proxy_box.RenderDecoratedBox, L1);
  dart.setFieldSignature(proxy_box.RenderDecoratedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderDecoratedBox.__proto__),
    [_painter]: dart.fieldType(dart.nullable(decoration.BoxPainter)),
    [_decoration]: dart.fieldType(decoration.Decoration),
    [_position]: dart.fieldType(proxy_box.DecorationPosition),
    [_configuration]: dart.fieldType(image_provider.ImageConfiguration)
  }));
  var _origin = dart.privateName(proxy_box, "_origin");
  var _alignment = dart.privateName(proxy_box, "_alignment");
  var _textDirection = dart.privateName(proxy_box, "_textDirection");
  var _transform = dart.privateName(proxy_box, "_transform");
  var _effectiveTransform = dart.privateName(proxy_box, "_effectiveTransform");
  var transformHitTests$ = dart.privateName(proxy_box, "RenderTransform.transformHitTests");
  proxy_box.RenderTransform = class RenderTransform extends proxy_box.RenderProxyBox {
    get transformHitTests() {
      return this[transformHitTests$];
    }
    set transformHitTests(value) {
      this[transformHitTests$] = value;
    }
    get origin() {
      return this[_origin];
    }
    set origin(value) {
      if (dart.equals(this[_origin], value)) return;
      this[_origin] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (dart.equals(this[_alignment], value)) return;
      this[_alignment] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    set transform(value) {
      if (value == null) dart.nullFailed(L0, 2265, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2266, 12, "value != null");
      if (dart.equals(this[_transform], value)) return;
      this[_transform] = vector_math_64.Matrix4.copy(value);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    setIdentity() {
      dart.nullCheck(this[_transform]).setIdentity();
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    rotateX(radians) {
      if (radians == null) dart.nullFailed(L0, 2282, 23, "radians");
      dart.nullCheck(this[_transform]).rotateX(radians);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    rotateY(radians) {
      if (radians == null) dart.nullFailed(L0, 2289, 23, "radians");
      dart.nullCheck(this[_transform]).rotateY(radians);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    rotateZ(radians) {
      if (radians == null) dart.nullFailed(L0, 2296, 23, "radians");
      dart.nullCheck(this[_transform]).rotateZ(radians);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    translate(x, y = 0, z = 0) {
      if (x == null) dart.nullFailed(L0, 2303, 25, "x");
      if (y == null) dart.nullFailed(L0, 2303, 37, "y");
      if (z == null) dart.nullFailed(L0, 2303, 53, "z");
      dart.nullCheck(this[_transform]).translate(x, y, z);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    scale(x, y = null, z = null) {
      if (x == null) dart.nullFailed(L0, 2310, 21, "x");
      dart.nullCheck(this[_transform]).scale(x, y, z);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get [_effectiveTransform]() {
      let t1;
      let resolvedAlignment = (t1 = this.alignment, t1 == null ? null : t1.resolve(this.textDirection));
      if (this[_origin] == null && resolvedAlignment == null) return this[_transform];
      let result = vector_math_64.Matrix4.identity();
      if (this[_origin] != null) result.translate(dart.nullCheck(this[_origin]).dx, dart.nullCheck(this[_origin]).dy);
      let translation = null;
      if (resolvedAlignment != null) {
        translation = resolvedAlignment.alongSize(this.size);
        result.translate(translation.dx, translation.dy);
      }
      result.multiply(dart.nullCheck(this[_transform]));
      if (resolvedAlignment != null) result.translate(-dart.notNull(dart.nullCheck(translation).dx), -dart.notNull(translation.dy));
      if (this[_origin] != null) result.translate(-dart.notNull(dart.nullCheck(this[_origin]).dx), -dart.notNull(dart.nullCheck(this[_origin]).dy));
      return result;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 2337, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 2337, 59, "position");
      return this.hitTestChildren(result, {position: position});
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 2346, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 2346, 67, "position");
      if (!(!dart.test(this.transformHitTests) || this[_effectiveTransform] != null)) dart.assertFailed(null, L0, 2347, 12, "!transformHitTests || _effectiveTransform != null");
      return result.addWithPaintTransform({transform: dart.test(this.transformHitTests) ? this[_effectiveTransform] : null, position: position, hitTest: dart.fn((result, position) => {
          if (result == null) dart.nullFailed(L0, 2351, 34, "result");
          return super.hitTestChildren(result, {position: dart.nullCheck(position)});
        }, BoxHitTestResultAndOffsetNTobool())});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 2358, 30, "context");
      if (offset == null) dart.nullFailed(L0, 2358, 46, "offset");
      if (this.child != null) {
        let transform = dart.nullCheck(this[_effectiveTransform]);
        let childOffset = matrix_utils.MatrixUtils.getAsTranslation(transform);
        if (childOffset == null) {
          this.layer = context.pushTransform(this.needsCompositing, offset, transform, dart.bind(this, 'paint', super.paint), {oldLayer: TransformLayerN().as(this.layer)});
        } else {
          super.paint(context, offset['+'](childOffset));
          this.layer = null;
        }
      }
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 2378, 38, "child");
      if (transform == null) dart.nullFailed(L0, 2378, 53, "transform");
      transform.multiply(dart.nullCheck(this[_effectiveTransform]));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2383, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new matrix_utils.TransformProperty.new("transform matrix", this[_transform]));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("origin", this.origin));
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("transformHitTests", this.transformHitTests));
    }
  };
  (proxy_box.RenderTransform.new = function(opts) {
    let transform = opts && 'transform' in opts ? opts.transform : null;
    if (transform == null) dart.nullFailed(L0, 2189, 22, "transform");
    let origin = opts && 'origin' in opts ? opts.origin : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let transformHitTests = opts && 'transformHitTests' in opts ? opts.transformHitTests : true;
    if (transformHitTests == null) dart.nullFailed(L0, 2193, 10, "transformHitTests");
    let child = opts && 'child' in opts ? opts.child : null;
    this[_origin] = null;
    this[_alignment] = null;
    this[_textDirection] = null;
    this[_transform] = null;
    this[transformHitTests$] = transformHitTests;
    if (!(transform != null)) dart.assertFailed(null, L0, 2195, 15, "transform != null");
    proxy_box.RenderTransform.__proto__.new.call(this, child);
    this.transform = transform;
    this.alignment = alignment;
    this.textDirection = textDirection;
    this.origin = origin;
  }).prototype = proxy_box.RenderTransform.prototype;
  dart.addTypeTests(proxy_box.RenderTransform);
  dart.addTypeCaches(proxy_box.RenderTransform);
  dart.setMethodSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getMethods(proxy_box.RenderTransform.__proto__),
    setIdentity: dart.fnType(dart.void, []),
    rotateX: dart.fnType(dart.void, [core.double]),
    rotateY: dart.fnType(dart.void, [core.double]),
    rotateZ: dart.fnType(dart.void, [core.double]),
    translate: dart.fnType(dart.void, [core.double], [core.double, core.double]),
    scale: dart.fnType(dart.void, [core.double], [dart.nullable(core.double), dart.nullable(core.double)])
  }));
  dart.setGetterSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getGetters(proxy_box.RenderTransform.__proto__),
    origin: dart.nullable(ui.Offset),
    alignment: dart.nullable(alignment.AlignmentGeometry),
    textDirection: dart.nullable(ui.TextDirection),
    [_effectiveTransform]: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setSetterSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getSetters(proxy_box.RenderTransform.__proto__),
    origin: dart.nullable(ui.Offset),
    alignment: dart.nullable(alignment.AlignmentGeometry),
    textDirection: dart.nullable(ui.TextDirection),
    transform: vector_math_64.Matrix4
  }));
  dart.setLibraryUri(proxy_box.RenderTransform, L1);
  dart.setFieldSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getFields(proxy_box.RenderTransform.__proto__),
    [_origin]: dart.fieldType(dart.nullable(ui.Offset)),
    [_alignment]: dart.fieldType(dart.nullable(alignment.AlignmentGeometry)),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    transformHitTests: dart.fieldType(core.bool),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4))
  }));
  var _name$1 = dart.privateName(box_fit, "_name");
  var C25;
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C26;
  var _resolvedAlignment = dart.privateName(proxy_box, "_resolvedAlignment");
  var _hasVisualOverflow = dart.privateName(proxy_box, "_hasVisualOverflow");
  var _fit = dart.privateName(proxy_box, "_fit");
  var _resolve = dart.privateName(proxy_box, "_resolve");
  var _markNeedResolution = dart.privateName(proxy_box, "_markNeedResolution");
  var C27;
  var _fitAffectsLayout = dart.privateName(proxy_box, "_fitAffectsLayout");
  var _clearPaintData = dart.privateName(proxy_box, "_clearPaintData");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var C28;
  var C29;
  var _updatePaintData = dart.privateName(proxy_box, "_updatePaintData");
  var _paintChildWithTransform = dart.privateName(proxy_box, "_paintChildWithTransform");
  proxy_box.RenderFittedBox = class RenderFittedBox extends proxy_box.RenderProxyBox {
    [_resolve]() {
      if (this[_resolvedAlignment] != null) return;
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this.markNeedsPaint();
    }
    [_fitAffectsLayout](fit) {
      if (fit == null) dart.nullFailed(L0, 2426, 33, "fit");
      switch (fit) {
        case C27 || CT.C27:
        {
          return true;
        }
        default:
        {
          return false;
        }
      }
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (value == null) dart.nullFailed(L0, 2438, 18, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2439, 12, "value != null");
      if (dart.equals(this[_fit], value)) return;
      let lastFit = this[_fit];
      this[_fit] = value;
      if (dart.test(this[_fitAffectsLayout](lastFit)) || dart.test(this[_fitAffectsLayout](value))) {
        this.markNeedsLayout();
      } else {
        this[_clearPaintData]();
        this.markNeedsPaint();
      }
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (value == null) dart.nullFailed(L0, 2462, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2463, 12, "value != null");
      if (dart.equals(this[_alignment], value)) return;
      this[_alignment] = value;
      this[_clearPaintData]();
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this[_clearPaintData]();
      this[_markNeedResolution]();
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 2488, 40, "constraints");
      if (this.child != null) {
        let childSize = dart.nullCheck(this.child).getDryLayout(C28 || CT.C28);
        let invalidChildSize = false;
        if (!dart.test(dart.fn(() => {
          if (dart.test(object.RenderObject.debugCheckingIntrinsics) && dart.notNull(childSize.width) * dart.notNull(childSize.height) === 0.0) {
            invalidChildSize = true;
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L0, 2497, 14, "() {\n        if (RenderObject.debugCheckingIntrinsics && childSize.width * childSize.height == 0.0) {\n          invalidChildSize = true;\n        }\n        return true;\n      }()");
        if (invalidChildSize) {
          if (!dart.test(this.debugCannotComputeDryLayout({reason: "Child provided invalid size of " + dart.str(childSize) + "."}))) dart.assertFailed(null, L0, 2504, 16, "debugCannotComputeDryLayout(\n          reason: 'Child provided invalid size of $childSize.',\n        )");
          return C29 || CT.C29;
        }
        switch (this.fit) {
          case C27 || CT.C27:
          {
            let sizeConstraints = constraints.loosen();
            let unconstrainedSize = sizeConstraints.constrainSizeAndAttemptToPreserveAspectRatio(childSize);
            return constraints.constrain(unconstrainedSize);
          }
          default:
          {
            return constraints.constrainSizeAndAttemptToPreserveAspectRatio(childSize);
          }
        }
      } else {
        return constraints.smallest;
      }
    }
    performLayout() {
      if (this.child != null) {
        dart.nullCheck(this.child).layout(C28 || CT.C28, {parentUsesSize: true});
        switch (this.fit) {
          case C27 || CT.C27:
          {
            let sizeConstraints = this.constraints.loosen();
            let unconstrainedSize = sizeConstraints.constrainSizeAndAttemptToPreserveAspectRatio(dart.nullCheck(this.child).size);
            this.size = this.constraints.constrain(unconstrainedSize);
            break;
          }
          default:
          {
            this.size = this.constraints.constrainSizeAndAttemptToPreserveAspectRatio(dart.nullCheck(this.child).size);
            break;
          }
        }
        this[_clearPaintData]();
      } else {
        this.size = this.constraints.smallest;
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 2551, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2552, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    [_clearPaintData]() {
      this[_hasVisualOverflow] = null;
      this[_transform] = null;
    }
    [_updatePaintData]() {
      let t1;
      if (this[_transform] != null) return;
      if (this.child == null) {
        this[_hasVisualOverflow] = false;
        this[_transform] = vector_math_64.Matrix4.identity();
      } else {
        this[_resolve]();
        let childSize = dart.nullCheck(this.child).size;
        let sizes = box_fit.applyBoxFit(this[_fit], childSize, this.size);
        let scaleX = dart.notNull(sizes.destination.width) / dart.notNull(sizes.source.width);
        let scaleY = dart.notNull(sizes.destination.height) / dart.notNull(sizes.source.height);
        let sourceRect = dart.nullCheck(this[_resolvedAlignment]).inscribe(sizes.source, ui.Offset.zero['&'](childSize));
        let destinationRect = dart.nullCheck(this[_resolvedAlignment]).inscribe(sizes.destination, ui.Offset.zero['&'](this.size));
        this[_hasVisualOverflow] = dart.notNull(sourceRect.width) < dart.notNull(childSize.width) || dart.notNull(sourceRect.height) < dart.notNull(childSize.height);
        if (!(scaleX[$isFinite] && scaleY[$isFinite])) dart.assertFailed(null, L0, 2581, 14, "scaleX.isFinite && scaleY.isFinite");
        this[_transform] = (t1 = vector_math_64.Matrix4.translationValues(destinationRect.left, destinationRect.top, 0.0), (() => {
          t1.scale(scaleX, scaleY, 1.0);
          t1.translate(-dart.notNull(sourceRect.left), -dart.notNull(sourceRect.top));
          return t1;
        })());
        if (!dart.test(dart.nullCheck(this[_transform]).storage[$every](dart.fn(value => {
          if (value == null) dart.nullFailed(L0, 2585, 48, "value");
          return value[$isFinite];
        }, doubleTobool())))) dart.assertFailed(null, L0, 2585, 14, "_transform!.storage.every((double value) => value.isFinite)");
      }
    }
    [_paintChildWithTransform](context, offset) {
      if (context == null) dart.nullFailed(L0, 2589, 60, "context");
      if (offset == null) dart.nullFailed(L0, 2589, 76, "offset");
      let childOffset = matrix_utils.MatrixUtils.getAsTranslation(dart.nullCheck(this[_transform]));
      if (childOffset == null)
        return context.pushTransform(this.needsCompositing, offset, dart.nullCheck(this[_transform]), dart.bind(this, 'paint', super.paint), {oldLayer: layer.TransformLayer.is(this.layer) ? layer.TransformLayer.as(dart.nullCheck(this.layer)) : null});
      else
        super.paint(context, offset['+'](childOffset));
      return null;
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 2600, 30, "context");
      if (offset == null) dart.nullFailed(L0, 2600, 46, "offset");
      if (dart.test(this.size.isEmpty) || dart.test(dart.nullCheck(this.child).size.isEmpty)) return;
      this[_updatePaintData]();
      if (this.child != null) {
        if (dart.nullCheck(this[_hasVisualOverflow]) && !dart.equals(this.clipBehavior, ui.Clip.none))
          this.layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintChildWithTransform), {oldLayer: layer.ClipRectLayer.is(this.layer) ? layer.ClipRectLayer.as(dart.nullCheck(this.layer)) : null, clipBehavior: this.clipBehavior});
        else
          this.layer = this[_paintChildWithTransform](context, offset);
      }
    }
    hitTestChildren(result, opts) {
      let t1;
      if (result == null) dart.nullFailed(L0, 2614, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 2614, 67, "position");
      if (dart.test(this.size.isEmpty) || dart.equals((t1 = this.child, t1 == null ? null : t1.size.isEmpty), true)) return false;
      this[_updatePaintData]();
      return result.addWithPaintTransform({transform: this[_transform], position: position, hitTest: dart.fn((result, position) => {
          if (result == null) dart.nullFailed(L0, 2621, 34, "result");
          return super.hitTestChildren(result, {position: dart.nullCheck(position)});
        }, BoxHitTestResultAndOffsetNTobool())});
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 2628, 38, "child");
      if (transform == null) dart.nullFailed(L0, 2628, 53, "transform");
      if (dart.test(this.size.isEmpty) || dart.test(child.size.isEmpty)) {
        transform.setZero();
      } else {
        this[_updatePaintData]();
        transform.multiply(dart.nullCheck(this[_transform]));
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2638, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfBoxFit()).new("fit", this.fit));
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (proxy_box.RenderFittedBox.new = function(opts) {
    let fit = opts && 'fit' in opts ? opts.fit : C25 || CT.C25;
    if (fit == null) dart.nullFailed(L0, 2399, 12, "fit");
    let alignment = opts && 'alignment' in opts ? opts.alignment : C26 || CT.C26;
    if (alignment == null) dart.nullFailed(L0, 2400, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C17 || CT.C17;
    if (clipBehavior == null) dart.nullFailed(L0, 2403, 10, "clipBehavior");
    this[_resolvedAlignment] = null;
    this[_hasVisualOverflow] = null;
    this[_transform] = null;
    this[_clipBehavior] = ui.Clip.none;
    if (!(fit != null)) dart.assertFailed(null, L0, 2404, 15, "fit != null");
    if (!(alignment != null)) dart.assertFailed(null, L0, 2405, 15, "alignment != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 2406, 15, "clipBehavior != null");
    this[_fit] = fit;
    this[_alignment] = alignment;
    this[_textDirection] = textDirection;
    this[_clipBehavior] = clipBehavior;
    proxy_box.RenderFittedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderFittedBox.prototype;
  dart.addTypeTests(proxy_box.RenderFittedBox);
  dart.addTypeCaches(proxy_box.RenderFittedBox);
  dart.setMethodSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getMethods(proxy_box.RenderFittedBox.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    [_fitAffectsLayout]: dart.fnType(core.bool, [box_fit.BoxFit]),
    [_clearPaintData]: dart.fnType(dart.void, []),
    [_updatePaintData]: dart.fnType(dart.void, []),
    [_paintChildWithTransform]: dart.fnType(dart.nullable(layer.TransformLayer), [object.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderFittedBox.__proto__),
    fit: box_fit.BoxFit,
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderFittedBox.__proto__),
    fit: box_fit.BoxFit,
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(proxy_box.RenderFittedBox, L1);
  dart.setFieldSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderFittedBox.__proto__),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_fit]: dart.fieldType(box_fit.BoxFit),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_hasVisualOverflow]: dart.fieldType(dart.nullable(core.bool)),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _translation = dart.privateName(proxy_box, "_translation");
  var transformHitTests$0 = dart.privateName(proxy_box, "RenderFractionalTranslation.transformHitTests");
  proxy_box.RenderFractionalTranslation = class RenderFractionalTranslation extends proxy_box.RenderProxyBox {
    get transformHitTests() {
      return this[transformHitTests$0];
    }
    set transformHitTests(value) {
      this[transformHitTests$0] = value;
    }
    get translation() {
      return this[_translation];
    }
    set translation(value) {
      if (value == null) dart.nullFailed(L0, 2673, 26, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 2674, 12, "value != null");
      if (dart.equals(this[_translation], value)) return;
      this[_translation] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 2683, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 2683, 59, "position");
      return this.hitTestChildren(result, {position: position});
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 2700, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 2700, 67, "position");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 2701, 12, "!debugNeedsLayout");
      return result.addWithPaintOffset({offset: dart.test(this.transformHitTests) ? new ui.Offset.new(dart.notNull(this.translation.dx) * dart.notNull(this.size.width), dart.notNull(this.translation.dy) * dart.notNull(this.size.height)) : null, position: position, hitTest: dart.fn((result, position) => {
          if (result == null) dart.nullFailed(L0, 2707, 34, "result");
          return super.hitTestChildren(result, {position: dart.nullCheck(position)});
        }, BoxHitTestResultAndOffsetNTobool())});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 2714, 30, "context");
      if (offset == null) dart.nullFailed(L0, 2714, 46, "offset");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 2715, 12, "!debugNeedsLayout");
      if (this.child != null) {
        super.paint(context, new ui.Offset.new(dart.notNull(offset.dx) + dart.notNull(this.translation.dx) * dart.notNull(this.size.width), dart.notNull(offset.dy) + dart.notNull(this.translation.dy) * dart.notNull(this.size.height)));
      }
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 2725, 38, "child");
      if (transform == null) dart.nullFailed(L0, 2725, 53, "transform");
      transform.translate(dart.notNull(this.translation.dx) * dart.notNull(this.size.width), dart.notNull(this.translation.dy) * dart.notNull(this.size.height));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2733, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("translation", this.translation));
      properties.add(new (DiagnosticsPropertyOfbool()).new("transformHitTests", this.transformHitTests));
    }
  };
  (proxy_box.RenderFractionalTranslation.new = function(opts) {
    let translation = opts && 'translation' in opts ? opts.translation : null;
    if (translation == null) dart.nullFailed(L0, 2660, 21, "translation");
    let transformHitTests = opts && 'transformHitTests' in opts ? opts.transformHitTests : true;
    if (transformHitTests == null) dart.nullFailed(L0, 2661, 10, "transformHitTests");
    let child = opts && 'child' in opts ? opts.child : null;
    this[transformHitTests$0] = transformHitTests;
    if (!(translation != null)) dart.assertFailed(null, L0, 2663, 15, "translation != null");
    this[_translation] = translation;
    proxy_box.RenderFractionalTranslation.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderFractionalTranslation.prototype;
  dart.addTypeTests(proxy_box.RenderFractionalTranslation);
  dart.addTypeCaches(proxy_box.RenderFractionalTranslation);
  dart.setGetterSignature(proxy_box.RenderFractionalTranslation, () => ({
    __proto__: dart.getGetters(proxy_box.RenderFractionalTranslation.__proto__),
    translation: ui.Offset
  }));
  dart.setSetterSignature(proxy_box.RenderFractionalTranslation, () => ({
    __proto__: dart.getSetters(proxy_box.RenderFractionalTranslation.__proto__),
    translation: ui.Offset
  }));
  dart.setLibraryUri(proxy_box.RenderFractionalTranslation, L1);
  dart.setFieldSignature(proxy_box.RenderFractionalTranslation, () => ({
    __proto__: dart.getFields(proxy_box.RenderFractionalTranslation.__proto__),
    [_translation]: dart.fieldType(ui.Offset),
    transformHitTests: dart.fieldType(core.bool)
  }));
  var onPointerDown$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerDown");
  var onPointerMove$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerMove");
  var onPointerUp$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerUp");
  var onPointerHover$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerHover");
  var onPointerCancel$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerCancel");
  var onPointerSignal$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerSignal");
  proxy_box.RenderPointerListener = class RenderPointerListener extends proxy_box.RenderProxyBoxWithHitTestBehavior {
    get onPointerDown() {
      return this[onPointerDown$];
    }
    set onPointerDown(value) {
      this[onPointerDown$] = value;
    }
    get onPointerMove() {
      return this[onPointerMove$];
    }
    set onPointerMove(value) {
      this[onPointerMove$] = value;
    }
    get onPointerUp() {
      return this[onPointerUp$];
    }
    set onPointerUp(value) {
      this[onPointerUp$] = value;
    }
    get onPointerHover() {
      return this[onPointerHover$];
    }
    set onPointerHover(value) {
      this[onPointerHover$] = value;
    }
    get onPointerCancel() {
      return this[onPointerCancel$];
    }
    set onPointerCancel(value) {
      this[onPointerCancel$] = value;
    }
    get onPointerSignal() {
      return this[onPointerSignal$];
    }
    set onPointerSignal(value) {
      this[onPointerSignal$] = value;
    }
    computeSizeForNoChild(constraints) {
      if (constraints == null) dart.nullFailed(L0, 2815, 45, "constraints");
      return constraints.biggest;
    }
    handleEvent(event, entry) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3;
      if (event == null) dart.nullFailed(L0, 2820, 33, "event");
      hit_test.HitTestEntry.as(entry);
      if (entry == null) dart.nullFailed(L0, 2820, 53, "entry");
      if (!dart.test(this.debugHandleEvent(event, entry))) dart.assertFailed(null, L0, 2821, 12, "debugHandleEvent(event, entry)");
      if (events.PointerDownEvent.is(event)) {
        t1 = this.onPointerDown;
        return t1 == null ? null : t1(event);
      }
      if (events.PointerMoveEvent.is(event)) {
        t1$ = this.onPointerMove;
        return t1$ == null ? null : t1$(event);
      }
      if (events.PointerUpEvent.is(event)) {
        t1$0 = this.onPointerUp;
        return t1$0 == null ? null : t1$0(event);
      }
      if (events.PointerHoverEvent.is(event)) {
        t1$1 = this.onPointerHover;
        return t1$1 == null ? null : t1$1(event);
      }
      if (events.PointerCancelEvent.is(event)) {
        t1$2 = this.onPointerCancel;
        return t1$2 == null ? null : t1$2(event);
      }
      if (events.PointerSignalEvent.is(event)) {
        t1$3 = this.onPointerSignal;
        return t1$3 == null ? null : t1$3(event);
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2837, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (FlagsSummaryOfFunctionN()).new("listeners", new (IdentityMapOfString$FunctionN()).from(["down", this.onPointerDown, "move", this.onPointerMove, "up", this.onPointerUp, "hover", this.onPointerHover, "cancel", this.onPointerCancel, "signal", this.onPointerSignal]), {ifEmpty: "<none>"}));
    }
  };
  (proxy_box.RenderPointerListener.new = function(opts) {
    let onPointerDown = opts && 'onPointerDown' in opts ? opts.onPointerDown : null;
    let onPointerMove = opts && 'onPointerMove' in opts ? opts.onPointerMove : null;
    let onPointerUp = opts && 'onPointerUp' in opts ? opts.onPointerUp : null;
    let onPointerHover = opts && 'onPointerHover' in opts ? opts.onPointerHover : null;
    let onPointerCancel = opts && 'onPointerCancel' in opts ? opts.onPointerCancel : null;
    let onPointerSignal = opts && 'onPointerSignal' in opts ? opts.onPointerSignal : null;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C0 || CT.C0;
    if (behavior == null) dart.nullFailed(L0, 2788, 21, "behavior");
    let child = opts && 'child' in opts ? opts.child : null;
    this[onPointerDown$] = onPointerDown;
    this[onPointerMove$] = onPointerMove;
    this[onPointerUp$] = onPointerUp;
    this[onPointerHover$] = onPointerHover;
    this[onPointerCancel$] = onPointerCancel;
    this[onPointerSignal$] = onPointerSignal;
    proxy_box.RenderPointerListener.__proto__.new.call(this, {behavior: behavior, child: child});
    ;
  }).prototype = proxy_box.RenderPointerListener.prototype;
  dart.addTypeTests(proxy_box.RenderPointerListener);
  dart.addTypeCaches(proxy_box.RenderPointerListener);
  dart.setLibraryUri(proxy_box.RenderPointerListener, L1);
  dart.setFieldSignature(proxy_box.RenderPointerListener, () => ({
    __proto__: dart.getFields(proxy_box.RenderPointerListener.__proto__),
    onPointerDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerDownEvent]))),
    onPointerMove: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerMoveEvent]))),
    onPointerUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerUpEvent]))),
    onPointerHover: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerHoverEvent]))),
    onPointerCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerCancelEvent]))),
    onPointerSignal: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerSignalEvent])))
  }));
  var C30;
  var _cursor = dart.privateName(proxy_box, "_cursor");
  var _validForMouseTracker = dart.privateName(proxy_box, "_validForMouseTracker");
  var _opaque = dart.privateName(proxy_box, "_opaque");
  var onEnter$ = dart.privateName(proxy_box, "RenderMouseRegion.onEnter");
  var onHover$ = dart.privateName(proxy_box, "RenderMouseRegion.onHover");
  var onExit$ = dart.privateName(proxy_box, "RenderMouseRegion.onExit");
  proxy_box.RenderMouseRegion = class RenderMouseRegion extends proxy_box.RenderProxyBox {
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      this[onEnter$] = value;
    }
    get onHover() {
      return this[onHover$];
    }
    set onHover(value) {
      this[onHover$] = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      this[onExit$] = value;
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L0, 2895, 27, "position");
      return true;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 2898, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 2898, 59, "position");
      return dart.test(super.hitTest(result, {position: position})) && dart.test(this[_opaque]);
    }
    handleEvent(event, entry) {
      if (event == null) dart.nullFailed(L0, 2903, 33, "event");
      hit_test.HitTestEntry.as(entry);
      if (entry == null) dart.nullFailed(L0, 2903, 53, "entry");
      if (!dart.test(this.debugHandleEvent(event, entry))) dart.assertFailed(null, L0, 2904, 12, "debugHandleEvent(event, entry)");
      if (this.onHover != null && events.PointerHoverEvent.is(event)) return dart.nullCheck(this.onHover)(event);
    }
    get opaque() {
      return this[_opaque];
    }
    set opaque(value) {
      if (value == null) dart.nullFailed(L0, 2925, 19, "value");
      if (!dart.equals(this[_opaque], value)) {
        this[_opaque] = value;
        this.markNeedsPaint();
      }
    }
    get cursor() {
      return this[_cursor];
    }
    set cursor(value) {
      if (value == null) dart.nullFailed(L0, 2948, 26, "value");
      if (!dart.equals(this[_cursor], value)) {
        this[_cursor] = value;
        this.markNeedsPaint();
      }
    }
    get validForMouseTracker() {
      return this[_validForMouseTracker];
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L0, 2962, 29, "owner");
      super.attach(owner);
      this[_validForMouseTracker] = true;
    }
    detach() {
      this[_validForMouseTracker] = false;
      super.detach();
    }
    computeSizeForNoChild(constraints) {
      if (constraints == null) dart.nullFailed(L0, 2977, 45, "constraints");
      return constraints.biggest;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 2982, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (FlagsSummaryOfFunctionN()).new("listeners", new (IdentityMapOfString$FunctionN()).from(["enter", this.onEnter, "hover", this.onHover, "exit", this.onExit]), {ifEmpty: "<none>"}));
      properties.add(new (DiagnosticsPropertyOfMouseCursor()).new("cursor", this.cursor, {defaultValue: mouse_cursor.MouseCursor.defer}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("opaque", this.opaque, {defaultValue: true}));
      properties.add(new diagnostics.FlagProperty.new("validForMouseTracker", {value: this.validForMouseTracker, defaultValue: true, ifFalse: "invalid for MouseTracker"}));
    }
  };
  (proxy_box.RenderMouseRegion.new = function(opts) {
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    let cursor = opts && 'cursor' in opts ? opts.cursor : C30 || CT.C30;
    if (cursor == null) dart.nullFailed(L0, 2882, 17, "cursor");
    let validForMouseTracker = opts && 'validForMouseTracker' in opts ? opts.validForMouseTracker : true;
    if (validForMouseTracker == null) dart.nullFailed(L0, 2883, 10, "validForMouseTracker");
    let opaque = opts && 'opaque' in opts ? opts.opaque : true;
    if (opaque == null) dart.nullFailed(L0, 2884, 10, "opaque");
    let child = opts && 'child' in opts ? opts.child : null;
    this[onEnter$] = onEnter;
    this[onHover$] = onHover;
    this[onExit$] = onExit;
    if (!(opaque != null)) dart.assertFailed(null, L0, 2886, 15, "opaque != null");
    if (!(cursor != null)) dart.assertFailed(null, L0, 2887, 15, "cursor != null");
    this[_cursor] = cursor;
    this[_validForMouseTracker] = validForMouseTracker;
    this[_opaque] = opaque;
    proxy_box.RenderMouseRegion.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderMouseRegion.prototype;
  dart.addTypeTests(proxy_box.RenderMouseRegion);
  dart.addTypeCaches(proxy_box.RenderMouseRegion);
  proxy_box.RenderMouseRegion[dart.implements] = () => [mouse_tracking.MouseTrackerAnnotation];
  dart.setGetterSignature(proxy_box.RenderMouseRegion, () => ({
    __proto__: dart.getGetters(proxy_box.RenderMouseRegion.__proto__),
    opaque: core.bool,
    cursor: mouse_cursor.MouseCursor,
    validForMouseTracker: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderMouseRegion, () => ({
    __proto__: dart.getSetters(proxy_box.RenderMouseRegion.__proto__),
    opaque: core.bool,
    cursor: mouse_cursor.MouseCursor
  }));
  dart.setLibraryUri(proxy_box.RenderMouseRegion, L1);
  dart.setFieldSignature(proxy_box.RenderMouseRegion, () => ({
    __proto__: dart.getFields(proxy_box.RenderMouseRegion.__proto__),
    [_opaque]: dart.fieldType(core.bool),
    onEnter: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerEnterEvent]))),
    onHover: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerHoverEvent]))),
    onExit: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerExitEvent]))),
    [_cursor]: dart.fieldType(mouse_cursor.MouseCursor),
    [_validForMouseTracker]: dart.fieldType(core.bool)
  }));
  var _debugSymmetricPaintCount = dart.privateName(proxy_box, "_debugSymmetricPaintCount");
  var _debugAsymmetricPaintCount = dart.privateName(proxy_box, "_debugAsymmetricPaintCount");
  proxy_box.RenderRepaintBoundary = class RenderRepaintBoundary extends proxy_box.RenderProxyBox {
    get isRepaintBoundary() {
      return true;
    }
    toImage(opts) {
      let pixelRatio = opts && 'pixelRatio' in opts ? opts.pixelRatio : 1;
      if (pixelRatio == null) dart.nullFailed(L0, 3090, 37, "pixelRatio");
      if (!!dart.test(this.debugNeedsPaint)) dart.assertFailed(null, L0, 3091, 12, "!debugNeedsPaint");
      let offsetLayer = layer.OffsetLayer.as(dart.nullCheck(this.layer));
      return offsetLayer.toImage(ui.Offset.zero['&'](this.size), {pixelRatio: pixelRatio});
    }
    get debugSymmetricPaintCount() {
      return this[_debugSymmetricPaintCount];
    }
    get debugAsymmetricPaintCount() {
      return this[_debugAsymmetricPaintCount];
    }
    debugResetMetrics() {
      if (!dart.test(dart.fn(() => {
        this[_debugSymmetricPaintCount] = 0;
        this[_debugAsymmetricPaintCount] = 0;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 3132, 12, "() {\n      _debugSymmetricPaintCount = 0;\n      _debugAsymmetricPaintCount = 0;\n      return true;\n    }()");
    }
    debugRegisterRepaintBoundaryPaint(opts) {
      let includedParent = opts && 'includedParent' in opts ? opts.includedParent : true;
      if (includedParent == null) dart.nullFailed(L0, 3140, 49, "includedParent");
      let includedChild = opts && 'includedChild' in opts ? opts.includedChild : false;
      if (includedChild == null) dart.nullFailed(L0, 3140, 77, "includedChild");
      if (!dart.test(dart.fn(() => {
        if (dart.test(includedParent) && dart.test(includedChild))
          this[_debugSymmetricPaintCount] = dart.notNull(this[_debugSymmetricPaintCount]) + 1;
        else
          this[_debugAsymmetricPaintCount] = dart.notNull(this[_debugAsymmetricPaintCount]) + 1;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 3141, 12, "() {\n      if (includedParent && includedChild)\n        _debugSymmetricPaintCount += 1;\n      else\n        _debugAsymmetricPaintCount += 1;\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 3151, 56, "properties");
      super.debugFillProperties(properties);
      let inReleaseMode = true;
      if (!dart.test(dart.fn(() => {
        inReleaseMode = false;
        if (dart.notNull(this.debugSymmetricPaintCount) + dart.notNull(this.debugAsymmetricPaintCount) === 0) {
          properties.add(new diagnostics.MessageProperty.new("usefulness ratio", "no metrics collected yet (never painted)"));
        } else {
          let fraction = dart.notNull(this.debugAsymmetricPaintCount) / (dart.notNull(this.debugSymmetricPaintCount) + dart.notNull(this.debugAsymmetricPaintCount));
          let diagnosis = null;
          if (dart.notNull(this.debugSymmetricPaintCount) + dart.notNull(this.debugAsymmetricPaintCount) < 5) {
            diagnosis = "insufficient data to draw conclusion (less than five repaints)";
          } else if (fraction > 0.9) {
            diagnosis = "this is an outstandingly useful repaint boundary and should definitely be kept";
          } else if (fraction > 0.5) {
            diagnosis = "this is a useful repaint boundary and should be kept";
          } else if (fraction > 0.3) {
            diagnosis = "this repaint boundary is probably useful, but maybe it would be more useful in tandem with adding more repaint boundaries elsewhere";
          } else if (fraction > 0.1) {
            diagnosis = "this repaint boundary does sometimes show value, though currently not that often";
          } else if (this.debugAsymmetricPaintCount === 0) {
            diagnosis = "this repaint boundary is astoundingly ineffectual and should be removed";
          } else {
            diagnosis = "this repaint boundary is not very effective and should probably be removed";
          }
          properties.add(new diagnostics.PercentProperty.new("metrics", fraction, {unit: "useful", tooltip: dart.str(this.debugSymmetricPaintCount) + " bad vs " + dart.str(this.debugAsymmetricPaintCount) + " good"}));
          properties.add(new diagnostics.MessageProperty.new("diagnosis", diagnosis));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 3154, 12, "() {\n      inReleaseMode = false;\n      if (debugSymmetricPaintCount + debugAsymmetricPaintCount == 0) {\n        properties.add(MessageProperty('usefulness ratio', 'no metrics collected yet (never painted)'));\n      } else {\n        final double fraction = debugAsymmetricPaintCount / (debugSymmetricPaintCount + debugAsymmetricPaintCount);\n        final String diagnosis;\n        if (debugSymmetricPaintCount + debugAsymmetricPaintCount < 5) {\n          diagnosis = 'insufficient data to draw conclusion (less than five repaints)';\n        } else if (fraction > 0.9) {\n          diagnosis = 'this is an outstandingly useful repaint boundary and should definitely be kept';\n        } else if (fraction > 0.5) {\n          diagnosis = 'this is a useful repaint boundary and should be kept';\n        } else if (fraction > 0.30) {\n          diagnosis = 'this repaint boundary is probably useful, but maybe it would be more useful in tandem with adding more repaint boundaries elsewhere';\n        } else if (fraction > 0.1) {\n          diagnosis = 'this repaint boundary does sometimes show value, though currently not that often';\n        } else if (debugAsymmetricPaintCount == 0) {\n          diagnosis = 'this repaint boundary is astoundingly ineffectual and should be removed';\n        } else {\n          diagnosis = 'this repaint boundary is not very effective and should probably be removed';\n        }\n        properties.add(PercentProperty('metrics', fraction, unit: 'useful', tooltip: '$debugSymmetricPaintCount bad vs $debugAsymmetricPaintCount good'));\n        properties.add(MessageProperty('diagnosis', diagnosis));\n      }\n      return true;\n    }()");
      if (inReleaseMode) properties.add(diagnostics.DiagnosticsNode.message("(run in checked mode to collect repaint boundary statistics)"));
    }
  };
  (proxy_box.RenderRepaintBoundary.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    this[_debugSymmetricPaintCount] = 0;
    this[_debugAsymmetricPaintCount] = 0;
    proxy_box.RenderRepaintBoundary.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderRepaintBoundary.prototype;
  dart.addTypeTests(proxy_box.RenderRepaintBoundary);
  dart.addTypeCaches(proxy_box.RenderRepaintBoundary);
  dart.setMethodSignature(proxy_box.RenderRepaintBoundary, () => ({
    __proto__: dart.getMethods(proxy_box.RenderRepaintBoundary.__proto__),
    toImage: dart.fnType(async.Future$(ui.Image), [], {pixelRatio: core.double}, {}),
    debugResetMetrics: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(proxy_box.RenderRepaintBoundary, () => ({
    __proto__: dart.getGetters(proxy_box.RenderRepaintBoundary.__proto__),
    debugSymmetricPaintCount: core.int,
    debugAsymmetricPaintCount: core.int
  }));
  dart.setLibraryUri(proxy_box.RenderRepaintBoundary, L1);
  dart.setFieldSignature(proxy_box.RenderRepaintBoundary, () => ({
    __proto__: dart.getFields(proxy_box.RenderRepaintBoundary.__proto__),
    [_debugSymmetricPaintCount]: dart.fieldType(core.int),
    [_debugAsymmetricPaintCount]: dart.fieldType(core.int)
  }));
  var _ignoring = dart.privateName(proxy_box, "_ignoring");
  var _ignoringSemantics = dart.privateName(proxy_box, "_ignoringSemantics");
  var _effectiveIgnoringSemantics = dart.privateName(proxy_box, "_effectiveIgnoringSemantics");
  proxy_box.RenderIgnorePointer = class RenderIgnorePointer extends proxy_box.RenderProxyBox {
    get ignoring() {
      return this[_ignoring];
    }
    set ignoring(value) {
      if (value == null) dart.nullFailed(L0, 3222, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 3223, 12, "value != null");
      if (dart.equals(value, this[_ignoring])) return;
      this[_ignoring] = value;
      if (this[_ignoringSemantics] == null || !dart.nullCheck(this[_ignoringSemantics])) this.markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() {
      return this[_ignoringSemantics];
    }
    set ignoringSemantics(value) {
      if (dart.equals(value, this[_ignoringSemantics])) return;
      let oldEffectiveValue = this[_effectiveIgnoringSemantics];
      this[_ignoringSemantics] = value;
      if (!dart.equals(oldEffectiveValue, this[_effectiveIgnoringSemantics])) this.markNeedsSemanticsUpdate();
    }
    get [_effectiveIgnoringSemantics]() {
      let t1;
      t1 = this.ignoringSemantics;
      return t1 == null ? this.ignoring : t1;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 3250, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 3250, 59, "position");
      return !dart.test(this.ignoring) && dart.test(super.hitTest(result, {position: position}));
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 3258, 54, "visitor");
      if (this.child != null && !dart.test(this[_effectiveIgnoringSemantics])) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 3264, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("ignoring", this.ignoring));
      properties.add(new (DiagnosticsPropertyOfbool()).new("ignoringSemantics", this[_effectiveIgnoringSemantics], {description: this.ignoringSemantics == null ? "implicitly " + dart.str(this[_effectiveIgnoringSemantics]) : null}));
    }
  };
  (proxy_box.RenderIgnorePointer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let ignoring = opts && 'ignoring' in opts ? opts.ignoring : true;
    if (ignoring == null) dart.nullFailed(L0, 3208, 10, "ignoring");
    let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
    this[_ignoring] = ignoring;
    this[_ignoringSemantics] = ignoringSemantics;
    proxy_box.RenderIgnorePointer.__proto__.new.call(this, child);
    if (!(this[_ignoring] != null)) dart.assertFailed(null, L0, 3213, 12, "_ignoring != null");
  }).prototype = proxy_box.RenderIgnorePointer.prototype;
  dart.addTypeTests(proxy_box.RenderIgnorePointer);
  dart.addTypeCaches(proxy_box.RenderIgnorePointer);
  dart.setGetterSignature(proxy_box.RenderIgnorePointer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool),
    [_effectiveIgnoringSemantics]: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderIgnorePointer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(proxy_box.RenderIgnorePointer, L1);
  dart.setFieldSignature(proxy_box.RenderIgnorePointer, () => ({
    __proto__: dart.getFields(proxy_box.RenderIgnorePointer.__proto__),
    [_ignoring]: dart.fieldType(core.bool),
    [_ignoringSemantics]: dart.fieldType(dart.nullable(core.bool))
  }));
  var _offstage = dart.privateName(proxy_box, "_offstage");
  proxy_box.RenderOffstage = class RenderOffstage extends proxy_box.RenderProxyBox {
    get offstage() {
      return this[_offstage];
    }
    set offstage(value) {
      if (value == null) dart.nullFailed(L0, 3298, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 3299, 12, "value != null");
      if (dart.equals(value, this[_offstage])) return;
      this[_offstage] = value;
      this.markNeedsLayoutForSizedByParentChange();
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 3307, 42, "height");
      if (dart.test(this.offstage)) return 0.0;
      return super.computeMinIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 3314, 42, "height");
      if (dart.test(this.offstage)) return 0.0;
      return super.computeMaxIntrinsicWidth(height);
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 3321, 43, "width");
      if (dart.test(this.offstage)) return 0.0;
      return super.computeMinIntrinsicHeight(width);
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 3328, 43, "width");
      if (dart.test(this.offstage)) return 0.0;
      return super.computeMaxIntrinsicHeight(width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 3335, 56, "baseline");
      if (dart.test(this.offstage)) return null;
      return super.computeDistanceToActualBaseline(baseline);
    }
    get sizedByParent() {
      return this.offstage;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 3345, 40, "constraints");
      if (dart.test(this.offstage)) {
        return constraints.smallest;
      }
      return super.computeDryLayout(constraints);
    }
    performResize() {
      if (!dart.test(this.offstage)) dart.assertFailed(null, L0, 3355, 12, "offstage");
      super.performResize();
    }
    performLayout() {
      let t1;
      if (dart.test(this.offstage)) {
        t1 = this.child;
        t1 == null ? null : t1.layout(this.constraints);
      } else {
        super.performLayout();
      }
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 3369, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 3369, 59, "position");
      return !dart.test(this.offstage) && dart.test(super.hitTest(result, {position: position}));
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 3374, 30, "context");
      if (offset == null) dart.nullFailed(L0, 3374, 46, "offset");
      if (dart.test(this.offstage)) return;
      super.paint(context, offset);
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 3381, 54, "visitor");
      if (dart.test(this.offstage)) return;
      super.visitChildrenForSemantics(visitor);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 3388, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("offstage", this.offstage));
    }
    debugDescribeChildren() {
      if (this.child == null) return JSArrayOfDiagnosticsNode().of([]);
      return JSArrayOfDiagnosticsNode().of([dart.nullCheck(this.child).toDiagnosticsNode({name: "child", style: dart.test(this.offstage) ? diagnostics.DiagnosticsTreeStyle.offstage : diagnostics.DiagnosticsTreeStyle.sparse})]);
    }
  };
  (proxy_box.RenderOffstage.new = function(opts) {
    let offstage = opts && 'offstage' in opts ? opts.offstage : true;
    if (offstage == null) dart.nullFailed(L0, 3283, 10, "offstage");
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(offstage != null)) dart.assertFailed(null, L0, 3285, 15, "offstage != null");
    this[_offstage] = offstage;
    proxy_box.RenderOffstage.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderOffstage.prototype;
  dart.addTypeTests(proxy_box.RenderOffstage);
  dart.addTypeCaches(proxy_box.RenderOffstage);
  dart.setGetterSignature(proxy_box.RenderOffstage, () => ({
    __proto__: dart.getGetters(proxy_box.RenderOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderOffstage, () => ({
    __proto__: dart.getSetters(proxy_box.RenderOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderOffstage, L1);
  dart.setFieldSignature(proxy_box.RenderOffstage, () => ({
    __proto__: dart.getFields(proxy_box.RenderOffstage.__proto__),
    [_offstage]: dart.fieldType(core.bool)
  }));
  var _absorbing = dart.privateName(proxy_box, "_absorbing");
  proxy_box.RenderAbsorbPointer = class RenderAbsorbPointer extends proxy_box.RenderProxyBox {
    get absorbing() {
      return this[_absorbing];
    }
    set absorbing(value) {
      if (value == null) dart.nullFailed(L0, 3438, 22, "value");
      if (dart.equals(this[_absorbing], value)) return;
      this[_absorbing] = value;
      if (this.ignoringSemantics == null) this.markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() {
      return this[_ignoringSemantics];
    }
    set ignoringSemantics(value) {
      if (dart.equals(value, this[_ignoringSemantics])) return;
      let oldEffectiveValue = this[_effectiveIgnoringSemantics];
      this[_ignoringSemantics] = value;
      if (!dart.equals(oldEffectiveValue, this[_effectiveIgnoringSemantics])) this.markNeedsSemanticsUpdate();
    }
    get [_effectiveIgnoringSemantics]() {
      let t1;
      t1 = this.ignoringSemantics;
      return t1 == null ? this.absorbing : t1;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 3465, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 3465, 59, "position");
      return dart.test(this.absorbing) ? this.size.contains(position) : super.hitTest(result, {position: position});
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 3472, 54, "visitor");
      if (this.child != null && !dart.test(this[_effectiveIgnoringSemantics])) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 3478, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("absorbing", this.absorbing));
      properties.add(new (DiagnosticsPropertyOfbool()).new("ignoringSemantics", this[_effectiveIgnoringSemantics], {description: this.ignoringSemantics == null ? "implicitly " + dart.str(this[_effectiveIgnoringSemantics]) : null}));
    }
  };
  (proxy_box.RenderAbsorbPointer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let absorbing = opts && 'absorbing' in opts ? opts.absorbing : true;
    if (absorbing == null) dart.nullFailed(L0, 3424, 10, "absorbing");
    let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
    if (!(absorbing != null)) dart.assertFailed(null, L0, 3426, 15, "absorbing != null");
    this[_absorbing] = absorbing;
    this[_ignoringSemantics] = ignoringSemantics;
    proxy_box.RenderAbsorbPointer.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderAbsorbPointer.prototype;
  dart.addTypeTests(proxy_box.RenderAbsorbPointer);
  dart.addTypeCaches(proxy_box.RenderAbsorbPointer);
  dart.setGetterSignature(proxy_box.RenderAbsorbPointer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderAbsorbPointer.__proto__),
    absorbing: core.bool,
    ignoringSemantics: dart.nullable(core.bool),
    [_effectiveIgnoringSemantics]: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderAbsorbPointer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderAbsorbPointer.__proto__),
    absorbing: core.bool,
    ignoringSemantics: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(proxy_box.RenderAbsorbPointer, L1);
  dart.setFieldSignature(proxy_box.RenderAbsorbPointer, () => ({
    __proto__: dart.getFields(proxy_box.RenderAbsorbPointer.__proto__),
    [_absorbing]: dart.fieldType(core.bool),
    [_ignoringSemantics]: dart.fieldType(dart.nullable(core.bool))
  }));
  var metaData$ = dart.privateName(proxy_box, "RenderMetaData.metaData");
  proxy_box.RenderMetaData = class RenderMetaData extends proxy_box.RenderProxyBoxWithHitTestBehavior {
    get metaData() {
      return this[metaData$];
    }
    set metaData(value) {
      this[metaData$] = value;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 3511, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DiagnosticsProperty.new("metaData", this.metaData));
    }
  };
  (proxy_box.RenderMetaData.new = function(opts) {
    let metaData = opts && 'metaData' in opts ? opts.metaData : null;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C0 || CT.C0;
    if (behavior == null) dart.nullFailed(L0, 3503, 21, "behavior");
    let child = opts && 'child' in opts ? opts.child : null;
    this[metaData$] = metaData;
    proxy_box.RenderMetaData.__proto__.new.call(this, {behavior: behavior, child: child});
    ;
  }).prototype = proxy_box.RenderMetaData.prototype;
  dart.addTypeTests(proxy_box.RenderMetaData);
  dart.addTypeCaches(proxy_box.RenderMetaData);
  dart.setLibraryUri(proxy_box.RenderMetaData, L1);
  dart.setFieldSignature(proxy_box.RenderMetaData, () => ({
    __proto__: dart.getFields(proxy_box.RenderMetaData.__proto__),
    metaData: dart.fieldType(dart.dynamic)
  }));
  var _validActions = dart.privateName(proxy_box, "_validActions");
  var _onTap = dart.privateName(proxy_box, "_onTap");
  var _onLongPress = dart.privateName(proxy_box, "_onLongPress");
  var _onHorizontalDragUpdate = dart.privateName(proxy_box, "_onHorizontalDragUpdate");
  var _onVerticalDragUpdate = dart.privateName(proxy_box, "_onVerticalDragUpdate");
  var _isValidAction = dart.privateName(proxy_box, "_isValidAction");
  var _performSemanticScrollRight = dart.privateName(proxy_box, "_performSemanticScrollRight");
  var _performSemanticScrollLeft = dart.privateName(proxy_box, "_performSemanticScrollLeft");
  var _performSemanticScrollUp = dart.privateName(proxy_box, "_performSemanticScrollUp");
  var _performSemanticScrollDown = dart.privateName(proxy_box, "_performSemanticScrollDown");
  var scrollFactor$ = dart.privateName(proxy_box, "RenderSemanticsGestureHandler.scrollFactor");
  proxy_box.RenderSemanticsGestureHandler = class RenderSemanticsGestureHandler extends proxy_box.RenderProxyBox {
    get scrollFactor() {
      return this[scrollFactor$];
    }
    set scrollFactor(value) {
      this[scrollFactor$] = value;
    }
    get validActions() {
      return this[_validActions];
    }
    set validActions(value) {
      if (dart.test(collections.setEquals(ui.SemanticsAction, value, this[_validActions]))) return;
      this[_validActions] = value;
      this.markNeedsSemanticsUpdate();
    }
    get onTap() {
      return this[_onTap];
    }
    set onTap(value) {
      if (dart.equals(this[_onTap], value)) return;
      let hadHandler = this[_onTap] != null;
      this[_onTap] = value;
      if (!(value != null)[$_equals](hadHandler)) this.markNeedsSemanticsUpdate();
    }
    get onLongPress() {
      return this[_onLongPress];
    }
    set onLongPress(value) {
      if (dart.equals(this[_onLongPress], value)) return;
      let hadHandler = this[_onLongPress] != null;
      this[_onLongPress] = value;
      if (!(value != null)[$_equals](hadHandler)) this.markNeedsSemanticsUpdate();
    }
    get onHorizontalDragUpdate() {
      return this[_onHorizontalDragUpdate];
    }
    set onHorizontalDragUpdate(value) {
      if (dart.equals(this[_onHorizontalDragUpdate], value)) return;
      let hadHandler = this[_onHorizontalDragUpdate] != null;
      this[_onHorizontalDragUpdate] = value;
      if (!(value != null)[$_equals](hadHandler)) this.markNeedsSemanticsUpdate();
    }
    get onVerticalDragUpdate() {
      return this[_onVerticalDragUpdate];
    }
    set onVerticalDragUpdate(value) {
      if (dart.equals(this[_onVerticalDragUpdate], value)) return;
      let hadHandler = this[_onVerticalDragUpdate] != null;
      this[_onVerticalDragUpdate] = value;
      if (!(value != null)[$_equals](hadHandler)) this.markNeedsSemanticsUpdate();
    }
    describeSemanticsConfiguration(config) {
      if (config == null) dart.nullFailed(L0, 3615, 62, "config");
      super.describeSemanticsConfiguration(config);
      if (this.onTap != null && dart.test(this[_isValidAction](ui.SemanticsAction.tap))) config.onTap = this.onTap;
      if (this.onLongPress != null && dart.test(this[_isValidAction](ui.SemanticsAction.longPress))) config.onLongPress = this.onLongPress;
      if (this.onHorizontalDragUpdate != null) {
        if (dart.test(this[_isValidAction](ui.SemanticsAction.scrollRight))) config.onScrollRight = dart.bind(this, _performSemanticScrollRight);
        if (dart.test(this[_isValidAction](ui.SemanticsAction.scrollLeft))) config.onScrollLeft = dart.bind(this, _performSemanticScrollLeft);
      }
      if (this.onVerticalDragUpdate != null) {
        if (dart.test(this[_isValidAction](ui.SemanticsAction.scrollUp))) config.onScrollUp = dart.bind(this, _performSemanticScrollUp);
        if (dart.test(this[_isValidAction](ui.SemanticsAction.scrollDown))) config.onScrollDown = dart.bind(this, _performSemanticScrollDown);
      }
    }
    [_isValidAction](action) {
      if (action == null) dart.nullFailed(L0, 3636, 39, "action");
      return this.validActions == null || dart.test(dart.nullCheck(this.validActions).contains(action));
    }
    [_performSemanticScrollLeft]() {
      if (this.onHorizontalDragUpdate != null) {
        let primaryDelta = dart.notNull(this.size.width) * -dart.notNull(this.scrollFactor);
        dart.nullCheck(this.onHorizontalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(primaryDelta, 0.0), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    [_performSemanticScrollRight]() {
      if (this.onHorizontalDragUpdate != null) {
        let primaryDelta = dart.notNull(this.size.width) * dart.notNull(this.scrollFactor);
        dart.nullCheck(this.onHorizontalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(primaryDelta, 0.0), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    [_performSemanticScrollUp]() {
      if (this.onVerticalDragUpdate != null) {
        let primaryDelta = dart.notNull(this.size.height) * -dart.notNull(this.scrollFactor);
        dart.nullCheck(this.onVerticalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(0.0, primaryDelta), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    [_performSemanticScrollDown]() {
      if (this.onVerticalDragUpdate != null) {
        let primaryDelta = dart.notNull(this.size.height) * dart.notNull(this.scrollFactor);
        dart.nullCheck(this.onVerticalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(0.0, primaryDelta), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 3681, 56, "properties");
      super.debugFillProperties(properties);
      let gestures = (() => {
        let t1 = JSArrayOfString().of([]);
        if (this.onTap != null) t1.push("tap");
        if (this.onLongPress != null) t1.push("long press");
        if (this.onHorizontalDragUpdate != null) t1.push("horizontal scroll");
        if (this.onVerticalDragUpdate != null) t1.push("vertical scroll");
        return t1;
      })();
      if (dart.test(gestures[$isEmpty])) gestures[$add]("<none>");
      properties.add(new (IterablePropertyOfString()).new("gestures", gestures));
    }
  };
  (proxy_box.RenderSemanticsGestureHandler.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onHorizontalDragUpdate = opts && 'onHorizontalDragUpdate' in opts ? opts.onHorizontalDragUpdate : null;
    let onVerticalDragUpdate = opts && 'onVerticalDragUpdate' in opts ? opts.onVerticalDragUpdate : null;
    let scrollFactor = opts && 'scrollFactor' in opts ? opts.scrollFactor : 0.8;
    if (scrollFactor == null) dart.nullFailed(L0, 3529, 10, "scrollFactor");
    this[_validActions] = null;
    this[scrollFactor$] = scrollFactor;
    if (!(scrollFactor != null)) dart.assertFailed(null, L0, 3530, 15, "scrollFactor != null");
    this[_onTap] = onTap;
    this[_onLongPress] = onLongPress;
    this[_onHorizontalDragUpdate] = onHorizontalDragUpdate;
    this[_onVerticalDragUpdate] = onVerticalDragUpdate;
    proxy_box.RenderSemanticsGestureHandler.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderSemanticsGestureHandler.prototype;
  dart.addTypeTests(proxy_box.RenderSemanticsGestureHandler);
  dart.addTypeCaches(proxy_box.RenderSemanticsGestureHandler);
  dart.setMethodSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getMethods(proxy_box.RenderSemanticsGestureHandler.__proto__),
    [_isValidAction]: dart.fnType(core.bool, [ui.SemanticsAction]),
    [_performSemanticScrollLeft]: dart.fnType(dart.void, []),
    [_performSemanticScrollRight]: dart.fnType(dart.void, []),
    [_performSemanticScrollUp]: dart.fnType(dart.void, []),
    [_performSemanticScrollDown]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getGetters(proxy_box.RenderSemanticsGestureHandler.__proto__),
    validActions: dart.nullable(core.Set$(ui.SemanticsAction)),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onHorizontalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onVerticalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))
  }));
  dart.setSetterSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getSetters(proxy_box.RenderSemanticsGestureHandler.__proto__),
    validActions: dart.nullable(core.Set$(ui.SemanticsAction)),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onHorizontalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onVerticalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))
  }));
  dart.setLibraryUri(proxy_box.RenderSemanticsGestureHandler, L1);
  dart.setFieldSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getFields(proxy_box.RenderSemanticsGestureHandler.__proto__),
    [_validActions]: dart.fieldType(dart.nullable(core.Set$(ui.SemanticsAction))),
    [_onTap]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onLongPress]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onHorizontalDragUpdate]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))),
    [_onVerticalDragUpdate]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))),
    scrollFactor: dart.fieldType(core.double)
  }));
  var _container = dart.privateName(proxy_box, "_container");
  var _explicitChildNodes = dart.privateName(proxy_box, "_explicitChildNodes");
  var _excludeSemantics = dart.privateName(proxy_box, "_excludeSemantics");
  var _enabled = dart.privateName(proxy_box, "_enabled");
  var _checked = dart.privateName(proxy_box, "_checked");
  var _toggled = dart.privateName(proxy_box, "_toggled");
  var _selected = dart.privateName(proxy_box, "_selected");
  var _button = dart.privateName(proxy_box, "_button");
  var _slider = dart.privateName(proxy_box, "_slider");
  var _link = dart.privateName(proxy_box, "_link");
  var _header = dart.privateName(proxy_box, "_header");
  var _textField = dart.privateName(proxy_box, "_textField");
  var _readOnly = dart.privateName(proxy_box, "_readOnly");
  var _focusable = dart.privateName(proxy_box, "_focusable");
  var _focused = dart.privateName(proxy_box, "_focused");
  var _inMutuallyExclusiveGroup = dart.privateName(proxy_box, "_inMutuallyExclusiveGroup");
  var _obscured = dart.privateName(proxy_box, "_obscured");
  var _multiline = dart.privateName(proxy_box, "_multiline");
  var _scopesRoute = dart.privateName(proxy_box, "_scopesRoute");
  var _namesRoute = dart.privateName(proxy_box, "_namesRoute");
  var _liveRegion = dart.privateName(proxy_box, "_liveRegion");
  var _maxValueLength = dart.privateName(proxy_box, "_maxValueLength");
  var _currentValueLength = dart.privateName(proxy_box, "_currentValueLength");
  var _hidden = dart.privateName(proxy_box, "_hidden");
  var _image = dart.privateName(proxy_box, "_image");
  var _onDismiss = dart.privateName(proxy_box, "_onDismiss");
  var _label = dart.privateName(proxy_box, "_label");
  var _value = dart.privateName(proxy_box, "_value");
  var _increasedValue = dart.privateName(proxy_box, "_increasedValue");
  var _decreasedValue = dart.privateName(proxy_box, "_decreasedValue");
  var _hint = dart.privateName(proxy_box, "_hint");
  var _hintOverrides = dart.privateName(proxy_box, "_hintOverrides");
  var _sortKey = dart.privateName(proxy_box, "_sortKey");
  var _tagForChildren = dart.privateName(proxy_box, "_tagForChildren");
  var _onScrollLeft = dart.privateName(proxy_box, "_onScrollLeft");
  var _onScrollRight = dart.privateName(proxy_box, "_onScrollRight");
  var _onScrollUp = dart.privateName(proxy_box, "_onScrollUp");
  var _onScrollDown = dart.privateName(proxy_box, "_onScrollDown");
  var _onIncrease = dart.privateName(proxy_box, "_onIncrease");
  var _onDecrease = dart.privateName(proxy_box, "_onDecrease");
  var _onCopy = dart.privateName(proxy_box, "_onCopy");
  var _onCut = dart.privateName(proxy_box, "_onCut");
  var _onPaste = dart.privateName(proxy_box, "_onPaste");
  var _onMoveCursorForwardByCharacter = dart.privateName(proxy_box, "_onMoveCursorForwardByCharacter");
  var _onMoveCursorBackwardByCharacter = dart.privateName(proxy_box, "_onMoveCursorBackwardByCharacter");
  var _onMoveCursorForwardByWord = dart.privateName(proxy_box, "_onMoveCursorForwardByWord");
  var _onMoveCursorBackwardByWord = dart.privateName(proxy_box, "_onMoveCursorBackwardByWord");
  var _onSetSelection = dart.privateName(proxy_box, "_onSetSelection");
  var _onDidGainAccessibilityFocus = dart.privateName(proxy_box, "_onDidGainAccessibilityFocus");
  var _onDidLoseAccessibilityFocus = dart.privateName(proxy_box, "_onDidLoseAccessibilityFocus");
  var _customSemanticsActions = dart.privateName(proxy_box, "_customSemanticsActions");
  var _performTap = dart.privateName(proxy_box, "_performTap");
  var _performLongPress = dart.privateName(proxy_box, "_performLongPress");
  var _performDismiss = dart.privateName(proxy_box, "_performDismiss");
  var _performScrollLeft = dart.privateName(proxy_box, "_performScrollLeft");
  var _performScrollRight = dart.privateName(proxy_box, "_performScrollRight");
  var _performScrollUp = dart.privateName(proxy_box, "_performScrollUp");
  var _performScrollDown = dart.privateName(proxy_box, "_performScrollDown");
  var _performIncrease = dart.privateName(proxy_box, "_performIncrease");
  var _performDecrease = dart.privateName(proxy_box, "_performDecrease");
  var _performCopy = dart.privateName(proxy_box, "_performCopy");
  var _performCut = dart.privateName(proxy_box, "_performCut");
  var _performPaste = dart.privateName(proxy_box, "_performPaste");
  var _performMoveCursorForwardByCharacter = dart.privateName(proxy_box, "_performMoveCursorForwardByCharacter");
  var _performMoveCursorBackwardByCharacter = dart.privateName(proxy_box, "_performMoveCursorBackwardByCharacter");
  var _performMoveCursorForwardByWord = dart.privateName(proxy_box, "_performMoveCursorForwardByWord");
  var _performMoveCursorBackwardByWord = dart.privateName(proxy_box, "_performMoveCursorBackwardByWord");
  var _performSetSelection = dart.privateName(proxy_box, "_performSetSelection");
  var _performDidGainAccessibilityFocus = dart.privateName(proxy_box, "_performDidGainAccessibilityFocus");
  var _performDidLoseAccessibilityFocus = dart.privateName(proxy_box, "_performDidLoseAccessibilityFocus");
  proxy_box.RenderSemanticsAnnotations = class RenderSemanticsAnnotations extends proxy_box.RenderProxyBox {
    get container() {
      return this[_container];
    }
    set container(value) {
      if (value == null) dart.nullFailed(L0, 3824, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 3825, 12, "value != null");
      if (dart.equals(this.container, value)) return;
      this[_container] = value;
      this.markNeedsSemanticsUpdate();
    }
    get explicitChildNodes() {
      return this[_explicitChildNodes];
    }
    set explicitChildNodes(value) {
      if (value == null) dart.nullFailed(L0, 3847, 31, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 3848, 12, "value != null");
      if (dart.equals(this[_explicitChildNodes], value)) return;
      this[_explicitChildNodes] = value;
      this.markNeedsSemanticsUpdate();
    }
    get excludeSemantics() {
      return this[_excludeSemantics];
    }
    set excludeSemantics(value) {
      if (value == null) dart.nullFailed(L0, 3863, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 3864, 12, "value != null");
      if (dart.equals(this[_excludeSemantics], value)) return;
      this[_excludeSemantics] = value;
      this.markNeedsSemanticsUpdate();
    }
    get checked() {
      return this[_checked];
    }
    set checked(value) {
      if (dart.equals(this.checked, value)) return;
      this[_checked] = value;
      this.markNeedsSemanticsUpdate();
    }
    get enabled() {
      return this[_enabled];
    }
    set enabled(value) {
      if (dart.equals(this.enabled, value)) return;
      this[_enabled] = value;
      this.markNeedsSemanticsUpdate();
    }
    get selected() {
      return this[_selected];
    }
    set selected(value) {
      if (dart.equals(this.selected, value)) return;
      this[_selected] = value;
      this.markNeedsSemanticsUpdate();
    }
    get button() {
      return this[_button];
    }
    set button(value) {
      if (dart.equals(this.button, value)) return;
      this[_button] = value;
      this.markNeedsSemanticsUpdate();
    }
    get slider() {
      return this[_slider];
    }
    set slider(value) {
      if (dart.equals(this.slider, value)) return;
      this[_slider] = value;
      this.markNeedsSemanticsUpdate();
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (dart.equals(this.link, value)) return;
      this[_link] = value;
      this.markNeedsSemanticsUpdate();
    }
    get header() {
      return this[_header];
    }
    set header(value) {
      if (dart.equals(this.header, value)) return;
      this[_header] = value;
      this.markNeedsSemanticsUpdate();
    }
    get textField() {
      return this[_textField];
    }
    set textField(value) {
      if (dart.equals(this.textField, value)) return;
      this[_textField] = value;
      this.markNeedsSemanticsUpdate();
    }
    get readOnly() {
      return this[_readOnly];
    }
    set readOnly(value) {
      if (dart.equals(this.readOnly, value)) return;
      this[_readOnly] = value;
      this.markNeedsSemanticsUpdate();
    }
    get focusable() {
      return this[_focusable];
    }
    set focusable(value) {
      if (dart.equals(this.focusable, value)) return;
      this[_focusable] = value;
      this.markNeedsSemanticsUpdate();
    }
    get focused() {
      return this[_focused];
    }
    set focused(value) {
      if (dart.equals(this.focused, value)) return;
      this[_focused] = value;
      this.markNeedsSemanticsUpdate();
    }
    get inMutuallyExclusiveGroup() {
      return this[_inMutuallyExclusiveGroup];
    }
    set inMutuallyExclusiveGroup(value) {
      if (dart.equals(this.inMutuallyExclusiveGroup, value)) return;
      this[_inMutuallyExclusiveGroup] = value;
      this.markNeedsSemanticsUpdate();
    }
    get obscured() {
      return this[_obscured];
    }
    set obscured(value) {
      if (dart.equals(this.obscured, value)) return;
      this[_obscured] = value;
      this.markNeedsSemanticsUpdate();
    }
    get multiline() {
      return this[_multiline];
    }
    set multiline(value) {
      if (dart.equals(this.multiline, value)) return;
      this[_multiline] = value;
      this.markNeedsSemanticsUpdate();
    }
    get scopesRoute() {
      return this[_scopesRoute];
    }
    set scopesRoute(value) {
      if (dart.equals(this.scopesRoute, value)) return;
      this[_scopesRoute] = value;
      this.markNeedsSemanticsUpdate();
    }
    get namesRoute() {
      return this[_namesRoute];
    }
    set namesRoute(value) {
      if (dart.equals(this[_namesRoute], value)) return;
      this[_namesRoute] = value;
      this.markNeedsSemanticsUpdate();
    }
    get hidden() {
      return this[_hidden];
    }
    set hidden(value) {
      if (dart.equals(this.hidden, value)) return;
      this[_hidden] = value;
      this.markNeedsSemanticsUpdate();
    }
    get image() {
      return this[_image];
    }
    set image(value) {
      if (dart.equals(this[_image], value)) return;
      this[_image] = value;
    }
    get liveRegion() {
      return this[_liveRegion];
    }
    set liveRegion(value) {
      if (dart.equals(this[_liveRegion], value)) return;
      this[_liveRegion] = value;
      this.markNeedsSemanticsUpdate();
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    set maxValueLength(value) {
      if (this[_maxValueLength] == value) return;
      this[_maxValueLength] = value;
      this.markNeedsSemanticsUpdate();
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    set currentValueLength(value) {
      if (this[_currentValueLength] == value) return;
      this[_currentValueLength] = value;
      this.markNeedsSemanticsUpdate();
    }
    get toggled() {
      return this[_toggled];
    }
    set toggled(value) {
      if (dart.equals(this[_toggled], value)) return;
      this[_toggled] = value;
      this.markNeedsSemanticsUpdate();
    }
    get label() {
      return this[_label];
    }
    set label(value) {
      if (this[_label] == value) return;
      this[_label] = value;
      this.markNeedsSemanticsUpdate();
    }
    get value() {
      return this[_value];
    }
    set value(value) {
      if (this[_value] == value) return;
      this[_value] = value;
      this.markNeedsSemanticsUpdate();
    }
    get increasedValue() {
      return this[_increasedValue];
    }
    set increasedValue(value) {
      if (this[_increasedValue] == value) return;
      this[_increasedValue] = value;
      this.markNeedsSemanticsUpdate();
    }
    get decreasedValue() {
      return this[_decreasedValue];
    }
    set decreasedValue(value) {
      if (this[_decreasedValue] == value) return;
      this[_decreasedValue] = value;
      this.markNeedsSemanticsUpdate();
    }
    get hint() {
      return this[_hint];
    }
    set hint(value) {
      if (this[_hint] == value) return;
      this[_hint] = value;
      this.markNeedsSemanticsUpdate();
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    set hintOverrides(value) {
      if (dart.equals(this[_hintOverrides], value)) return;
      this[_hintOverrides] = value;
      this.markNeedsSemanticsUpdate();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this.textDirection, value)) return;
      this[_textDirection] = value;
      this.markNeedsSemanticsUpdate();
    }
    get sortKey() {
      return this[_sortKey];
    }
    set sortKey(value) {
      if (dart.equals(this.sortKey, value)) return;
      this[_sortKey] = value;
      this.markNeedsSemanticsUpdate();
    }
    get tagForChildren() {
      return this[_tagForChildren];
    }
    set tagForChildren(value) {
      if (dart.equals(this[_tagForChildren], value)) return;
      this.markNeedsSemanticsUpdate();
      this[_tagForChildren] = value;
    }
    get onTap() {
      return this[_onTap];
    }
    set onTap(handler) {
      if (dart.equals(this[_onTap], handler)) return;
      let hadValue = this[_onTap] != null;
      this[_onTap] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onDismiss() {
      return this[_onDismiss];
    }
    set onDismiss(handler) {
      if (dart.equals(this[_onDismiss], handler)) return;
      let hadValue = this[_onDismiss] != null;
      this[_onDismiss] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onLongPress() {
      return this[_onLongPress];
    }
    set onLongPress(handler) {
      if (dart.equals(this[_onLongPress], handler)) return;
      let hadValue = this[_onLongPress] != null;
      this[_onLongPress] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onScrollLeft() {
      return this[_onScrollLeft];
    }
    set onScrollLeft(handler) {
      if (dart.equals(this[_onScrollLeft], handler)) return;
      let hadValue = this[_onScrollLeft] != null;
      this[_onScrollLeft] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onScrollRight() {
      return this[_onScrollRight];
    }
    set onScrollRight(handler) {
      if (dart.equals(this[_onScrollRight], handler)) return;
      let hadValue = this[_onScrollRight] != null;
      this[_onScrollRight] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onScrollUp() {
      return this[_onScrollUp];
    }
    set onScrollUp(handler) {
      if (dart.equals(this[_onScrollUp], handler)) return;
      let hadValue = this[_onScrollUp] != null;
      this[_onScrollUp] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onScrollDown() {
      return this[_onScrollDown];
    }
    set onScrollDown(handler) {
      if (dart.equals(this[_onScrollDown], handler)) return;
      let hadValue = this[_onScrollDown] != null;
      this[_onScrollDown] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onIncrease() {
      return this[_onIncrease];
    }
    set onIncrease(handler) {
      if (dart.equals(this[_onIncrease], handler)) return;
      let hadValue = this[_onIncrease] != null;
      this[_onIncrease] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onDecrease() {
      return this[_onDecrease];
    }
    set onDecrease(handler) {
      if (dart.equals(this[_onDecrease], handler)) return;
      let hadValue = this[_onDecrease] != null;
      this[_onDecrease] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onCopy() {
      return this[_onCopy];
    }
    set onCopy(handler) {
      if (dart.equals(this[_onCopy], handler)) return;
      let hadValue = this[_onCopy] != null;
      this[_onCopy] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onCut() {
      return this[_onCut];
    }
    set onCut(handler) {
      if (dart.equals(this[_onCut], handler)) return;
      let hadValue = this[_onCut] != null;
      this[_onCut] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onPaste() {
      return this[_onPaste];
    }
    set onPaste(handler) {
      if (dart.equals(this[_onPaste], handler)) return;
      let hadValue = this[_onPaste] != null;
      this[_onPaste] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorForwardByCharacter() {
      return this[_onMoveCursorForwardByCharacter];
    }
    set onMoveCursorForwardByCharacter(handler) {
      if (dart.equals(this[_onMoveCursorForwardByCharacter], handler)) return;
      let hadValue = this[_onMoveCursorForwardByCharacter] != null;
      this[_onMoveCursorForwardByCharacter] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorBackwardByCharacter() {
      return this[_onMoveCursorBackwardByCharacter];
    }
    set onMoveCursorBackwardByCharacter(handler) {
      if (dart.equals(this[_onMoveCursorBackwardByCharacter], handler)) return;
      let hadValue = this[_onMoveCursorBackwardByCharacter] != null;
      this[_onMoveCursorBackwardByCharacter] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorForwardByWord() {
      return this[_onMoveCursorForwardByWord];
    }
    set onMoveCursorForwardByWord(handler) {
      if (dart.equals(this[_onMoveCursorForwardByWord], handler)) return;
      let hadValue = this[_onMoveCursorForwardByWord] != null;
      this[_onMoveCursorForwardByWord] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorBackwardByWord() {
      return this[_onMoveCursorBackwardByWord];
    }
    set onMoveCursorBackwardByWord(handler) {
      if (dart.equals(this[_onMoveCursorBackwardByWord], handler)) return;
      let hadValue = this[_onMoveCursorBackwardByWord] != null;
      this[_onMoveCursorBackwardByWord] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onSetSelection() {
      return this[_onSetSelection];
    }
    set onSetSelection(handler) {
      if (dart.equals(this[_onSetSelection], handler)) return;
      let hadValue = this[_onSetSelection] != null;
      this[_onSetSelection] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onDidGainAccessibilityFocus() {
      return this[_onDidGainAccessibilityFocus];
    }
    set onDidGainAccessibilityFocus(handler) {
      if (dart.equals(this[_onDidGainAccessibilityFocus], handler)) return;
      let hadValue = this[_onDidGainAccessibilityFocus] != null;
      this[_onDidGainAccessibilityFocus] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get onDidLoseAccessibilityFocus() {
      return this[_onDidLoseAccessibilityFocus];
    }
    set onDidLoseAccessibilityFocus(handler) {
      if (dart.equals(this[_onDidLoseAccessibilityFocus], handler)) return;
      let hadValue = this[_onDidLoseAccessibilityFocus] != null;
      this[_onDidLoseAccessibilityFocus] = handler;
      if (!(handler != null)[$_equals](hadValue)) this.markNeedsSemanticsUpdate();
    }
    get customSemanticsActions() {
      return this[_customSemanticsActions];
    }
    set customSemanticsActions(value) {
      if (dart.equals(this[_customSemanticsActions], value)) return;
      this[_customSemanticsActions] = value;
      this.markNeedsSemanticsUpdate();
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 4620, 54, "visitor");
      if (dart.test(this.excludeSemantics)) return;
      super.visitChildrenForSemantics(visitor);
    }
    describeSemanticsConfiguration(config) {
      if (config == null) dart.nullFailed(L0, 4627, 62, "config");
      super.describeSemanticsConfiguration(config);
      config.isSemanticBoundary = this.container;
      config.explicitChildNodes = this.explicitChildNodes;
      if (!(dart.equals(this.scopesRoute, true) && dart.equals(this.explicitChildNodes, true) || !dart.equals(this.scopesRoute, true))) dart.assertFailed("explicitChildNodes must be set to true if scopes route is true", L0, 4631, 12, "(scopesRoute == true && explicitChildNodes == true) || scopesRoute != true");
      if (!!(dart.equals(this.toggled, true) && dart.equals(this.checked, true))) dart.assertFailed("A semantics node cannot be toggled and checked at the same time", L0, 4633, 12, "!(toggled == true && checked == true)");
      if (this.enabled != null) config.isEnabled = this.enabled;
      if (this.checked != null) config.isChecked = this.checked;
      if (this.toggled != null) config.isToggled = this.toggled;
      if (this.selected != null) config.isSelected = dart.nullCheck(this.selected);
      if (this.button != null) config.isButton = dart.nullCheck(this.button);
      if (this.link != null) config.isLink = dart.nullCheck(this.link);
      if (this.slider != null) config.isSlider = dart.nullCheck(this.slider);
      if (this.header != null) config.isHeader = dart.nullCheck(this.header);
      if (this.textField != null) config.isTextField = dart.nullCheck(this.textField);
      if (this.readOnly != null) config.isReadOnly = dart.nullCheck(this.readOnly);
      if (this.focusable != null) config.isFocusable = dart.nullCheck(this.focusable);
      if (this.focused != null) config.isFocused = dart.nullCheck(this.focused);
      if (this.inMutuallyExclusiveGroup != null) config.isInMutuallyExclusiveGroup = dart.nullCheck(this.inMutuallyExclusiveGroup);
      if (this.obscured != null) config.isObscured = dart.nullCheck(this.obscured);
      if (this.multiline != null) config.isMultiline = dart.nullCheck(this.multiline);
      if (this.hidden != null) config.isHidden = dart.nullCheck(this.hidden);
      if (this.image != null) config.isImage = dart.nullCheck(this.image);
      if (this.label != null) config.label = dart.nullCheck(this.label);
      if (this.value != null) config.value = dart.nullCheck(this.value);
      if (this.increasedValue != null) config.increasedValue = dart.nullCheck(this.increasedValue);
      if (this.decreasedValue != null) config.decreasedValue = dart.nullCheck(this.decreasedValue);
      if (this.hint != null) config.hint = dart.nullCheck(this.hint);
      if (this.hintOverrides != null && dart.test(dart.nullCheck(this.hintOverrides).isNotEmpty)) config.hintOverrides = this.hintOverrides;
      if (this.scopesRoute != null) config.scopesRoute = dart.nullCheck(this.scopesRoute);
      if (this.namesRoute != null) config.namesRoute = dart.nullCheck(this.namesRoute);
      if (this.liveRegion != null) config.liveRegion = dart.nullCheck(this.liveRegion);
      if (this.maxValueLength != null) {
        config.maxValueLength = this.maxValueLength;
      }
      if (this.currentValueLength != null) {
        config.currentValueLength = this.currentValueLength;
      }
      if (this.textDirection != null) config.textDirection = this.textDirection;
      if (this.sortKey != null) config.sortKey = this.sortKey;
      if (this.tagForChildren != null) config.addTagForChildren(dart.nullCheck(this.tagForChildren));
      if (this.onTap != null) config.onTap = dart.bind(this, _performTap);
      if (this.onLongPress != null) config.onLongPress = dart.bind(this, _performLongPress);
      if (this.onDismiss != null) config.onDismiss = dart.bind(this, _performDismiss);
      if (this.onScrollLeft != null) config.onScrollLeft = dart.bind(this, _performScrollLeft);
      if (this.onScrollRight != null) config.onScrollRight = dart.bind(this, _performScrollRight);
      if (this.onScrollUp != null) config.onScrollUp = dart.bind(this, _performScrollUp);
      if (this.onScrollDown != null) config.onScrollDown = dart.bind(this, _performScrollDown);
      if (this.onIncrease != null) config.onIncrease = dart.bind(this, _performIncrease);
      if (this.onDecrease != null) config.onDecrease = dart.bind(this, _performDecrease);
      if (this.onCopy != null) config.onCopy = dart.bind(this, _performCopy);
      if (this.onCut != null) config.onCut = dart.bind(this, _performCut);
      if (this.onPaste != null) config.onPaste = dart.bind(this, _performPaste);
      if (this.onMoveCursorForwardByCharacter != null) config.onMoveCursorForwardByCharacter = dart.bind(this, _performMoveCursorForwardByCharacter);
      if (this.onMoveCursorBackwardByCharacter != null) config.onMoveCursorBackwardByCharacter = dart.bind(this, _performMoveCursorBackwardByCharacter);
      if (this.onMoveCursorForwardByWord != null) config.onMoveCursorForwardByWord = dart.bind(this, _performMoveCursorForwardByWord);
      if (this.onMoveCursorBackwardByWord != null) config.onMoveCursorBackwardByWord = dart.bind(this, _performMoveCursorBackwardByWord);
      if (this.onSetSelection != null) config.onSetSelection = dart.bind(this, _performSetSelection);
      if (this.onDidGainAccessibilityFocus != null) config.onDidGainAccessibilityFocus = dart.bind(this, _performDidGainAccessibilityFocus);
      if (this.onDidLoseAccessibilityFocus != null) config.onDidLoseAccessibilityFocus = dart.bind(this, _performDidLoseAccessibilityFocus);
      if (this.customSemanticsActions != null) config.customSemanticsActions = dart.nullCheck(this[_customSemanticsActions]);
    }
    [_performTap]() {
      if (this.onTap != null) dart.nullCheck(this.onTap)();
    }
    [_performLongPress]() {
      if (this.onLongPress != null) dart.nullCheck(this.onLongPress)();
    }
    [_performDismiss]() {
      if (this.onDismiss != null) dart.nullCheck(this.onDismiss)();
    }
    [_performScrollLeft]() {
      if (this.onScrollLeft != null) dart.nullCheck(this.onScrollLeft)();
    }
    [_performScrollRight]() {
      if (this.onScrollRight != null) dart.nullCheck(this.onScrollRight)();
    }
    [_performScrollUp]() {
      if (this.onScrollUp != null) dart.nullCheck(this.onScrollUp)();
    }
    [_performScrollDown]() {
      if (this.onScrollDown != null) dart.nullCheck(this.onScrollDown)();
    }
    [_performIncrease]() {
      if (this.onIncrease != null) dart.nullCheck(this.onIncrease)();
    }
    [_performDecrease]() {
      if (this.onDecrease != null) dart.nullCheck(this.onDecrease)();
    }
    [_performCopy]() {
      if (this.onCopy != null) dart.nullCheck(this.onCopy)();
    }
    [_performCut]() {
      if (this.onCut != null) dart.nullCheck(this.onCut)();
    }
    [_performPaste]() {
      if (this.onPaste != null) dart.nullCheck(this.onPaste)();
    }
    [_performMoveCursorForwardByCharacter](extendSelection) {
      if (extendSelection == null) dart.nullFailed(L0, 4805, 50, "extendSelection");
      if (this.onMoveCursorForwardByCharacter != null) dart.nullCheck(this.onMoveCursorForwardByCharacter)(extendSelection);
    }
    [_performMoveCursorBackwardByCharacter](extendSelection) {
      if (extendSelection == null) dart.nullFailed(L0, 4810, 51, "extendSelection");
      if (this.onMoveCursorBackwardByCharacter != null) dart.nullCheck(this.onMoveCursorBackwardByCharacter)(extendSelection);
    }
    [_performMoveCursorForwardByWord](extendSelection) {
      if (extendSelection == null) dart.nullFailed(L0, 4815, 45, "extendSelection");
      if (this.onMoveCursorForwardByWord != null) dart.nullCheck(this.onMoveCursorForwardByWord)(extendSelection);
    }
    [_performMoveCursorBackwardByWord](extendSelection) {
      if (extendSelection == null) dart.nullFailed(L0, 4820, 46, "extendSelection");
      if (this.onMoveCursorBackwardByWord != null) dart.nullCheck(this.onMoveCursorBackwardByWord)(extendSelection);
    }
    [_performSetSelection](selection) {
      if (selection == null) dart.nullFailed(L0, 4825, 43, "selection");
      if (this.onSetSelection != null) dart.nullCheck(this.onSetSelection)(selection);
    }
    [_performDidGainAccessibilityFocus]() {
      if (this.onDidGainAccessibilityFocus != null) dart.nullCheck(this.onDidGainAccessibilityFocus)();
    }
    [_performDidLoseAccessibilityFocus]() {
      if (this.onDidLoseAccessibilityFocus != null) dart.nullCheck(this.onDidLoseAccessibilityFocus)();
    }
  };
  (proxy_box.RenderSemanticsAnnotations.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let container = opts && 'container' in opts ? opts.container : false;
    if (container == null) dart.nullFailed(L0, 3704, 10, "container");
    let explicitChildNodes = opts && 'explicitChildNodes' in opts ? opts.explicitChildNodes : false;
    if (explicitChildNodes == null) dart.nullFailed(L0, 3705, 10, "explicitChildNodes");
    let excludeSemantics = opts && 'excludeSemantics' in opts ? opts.excludeSemantics : false;
    if (excludeSemantics == null) dart.nullFailed(L0, 3706, 10, "excludeSemantics");
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let toggled = opts && 'toggled' in opts ? opts.toggled : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let slider = opts && 'slider' in opts ? opts.slider : null;
    let link = opts && 'link' in opts ? opts.link : null;
    let header = opts && 'header' in opts ? opts.header : null;
    let textField = opts && 'textField' in opts ? opts.textField : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
    let focusable = opts && 'focusable' in opts ? opts.focusable : null;
    let focused = opts && 'focused' in opts ? opts.focused : null;
    let inMutuallyExclusiveGroup = opts && 'inMutuallyExclusiveGroup' in opts ? opts.inMutuallyExclusiveGroup : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : null;
    let multiline = opts && 'multiline' in opts ? opts.multiline : null;
    let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : null;
    let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let liveRegion = opts && 'liveRegion' in opts ? opts.liveRegion : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let tagForChildren = opts && 'tagForChildren' in opts ? opts.tagForChildren : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onDismiss = opts && 'onDismiss' in opts ? opts.onDismiss : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onScrollLeft = opts && 'onScrollLeft' in opts ? opts.onScrollLeft : null;
    let onScrollRight = opts && 'onScrollRight' in opts ? opts.onScrollRight : null;
    let onScrollUp = opts && 'onScrollUp' in opts ? opts.onScrollUp : null;
    let onScrollDown = opts && 'onScrollDown' in opts ? opts.onScrollDown : null;
    let onIncrease = opts && 'onIncrease' in opts ? opts.onIncrease : null;
    let onDecrease = opts && 'onDecrease' in opts ? opts.onDecrease : null;
    let onCopy = opts && 'onCopy' in opts ? opts.onCopy : null;
    let onCut = opts && 'onCut' in opts ? opts.onCut : null;
    let onPaste = opts && 'onPaste' in opts ? opts.onPaste : null;
    let onMoveCursorForwardByCharacter = opts && 'onMoveCursorForwardByCharacter' in opts ? opts.onMoveCursorForwardByCharacter : null;
    let onMoveCursorBackwardByCharacter = opts && 'onMoveCursorBackwardByCharacter' in opts ? opts.onMoveCursorBackwardByCharacter : null;
    let onMoveCursorForwardByWord = opts && 'onMoveCursorForwardByWord' in opts ? opts.onMoveCursorForwardByWord : null;
    let onMoveCursorBackwardByWord = opts && 'onMoveCursorBackwardByWord' in opts ? opts.onMoveCursorBackwardByWord : null;
    let onSetSelection = opts && 'onSetSelection' in opts ? opts.onSetSelection : null;
    let onDidGainAccessibilityFocus = opts && 'onDidGainAccessibilityFocus' in opts ? opts.onDidGainAccessibilityFocus : null;
    let onDidLoseAccessibilityFocus = opts && 'onDidLoseAccessibilityFocus' in opts ? opts.onDidLoseAccessibilityFocus : null;
    let customSemanticsActions = opts && 'customSemanticsActions' in opts ? opts.customSemanticsActions : null;
    if (!(container != null)) dart.assertFailed(null, L0, 3758, 15, "container != null");
    this[_container] = container;
    this[_explicitChildNodes] = explicitChildNodes;
    this[_excludeSemantics] = excludeSemantics;
    this[_enabled] = enabled;
    this[_checked] = checked;
    this[_toggled] = toggled;
    this[_selected] = selected;
    this[_button] = button;
    this[_slider] = slider;
    this[_link] = link;
    this[_header] = header;
    this[_textField] = textField;
    this[_readOnly] = readOnly;
    this[_focusable] = focusable;
    this[_focused] = focused;
    this[_inMutuallyExclusiveGroup] = inMutuallyExclusiveGroup;
    this[_obscured] = obscured;
    this[_multiline] = multiline;
    this[_scopesRoute] = scopesRoute;
    this[_namesRoute] = namesRoute;
    this[_liveRegion] = liveRegion;
    this[_maxValueLength] = maxValueLength;
    this[_currentValueLength] = currentValueLength;
    this[_hidden] = hidden;
    this[_image] = image;
    this[_onDismiss] = onDismiss;
    this[_label] = label;
    this[_value] = value;
    this[_increasedValue] = increasedValue;
    this[_decreasedValue] = decreasedValue;
    this[_hint] = hint;
    this[_hintOverrides] = hintOverrides;
    this[_textDirection] = textDirection;
    this[_sortKey] = sortKey;
    this[_tagForChildren] = tagForChildren;
    this[_onTap] = onTap;
    this[_onLongPress] = onLongPress;
    this[_onScrollLeft] = onScrollLeft;
    this[_onScrollRight] = onScrollRight;
    this[_onScrollUp] = onScrollUp;
    this[_onScrollDown] = onScrollDown;
    this[_onIncrease] = onIncrease;
    this[_onDecrease] = onDecrease;
    this[_onCopy] = onCopy;
    this[_onCut] = onCut;
    this[_onPaste] = onPaste;
    this[_onMoveCursorForwardByCharacter] = onMoveCursorForwardByCharacter;
    this[_onMoveCursorBackwardByCharacter] = onMoveCursorBackwardByCharacter;
    this[_onMoveCursorForwardByWord] = onMoveCursorForwardByWord;
    this[_onMoveCursorBackwardByWord] = onMoveCursorBackwardByWord;
    this[_onSetSelection] = onSetSelection;
    this[_onDidGainAccessibilityFocus] = onDidGainAccessibilityFocus;
    this[_onDidLoseAccessibilityFocus] = onDidLoseAccessibilityFocus;
    this[_customSemanticsActions] = customSemanticsActions;
    proxy_box.RenderSemanticsAnnotations.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderSemanticsAnnotations.prototype;
  dart.addTypeTests(proxy_box.RenderSemanticsAnnotations);
  dart.addTypeCaches(proxy_box.RenderSemanticsAnnotations);
  dart.setMethodSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getMethods(proxy_box.RenderSemanticsAnnotations.__proto__),
    [_performTap]: dart.fnType(dart.void, []),
    [_performLongPress]: dart.fnType(dart.void, []),
    [_performDismiss]: dart.fnType(dart.void, []),
    [_performScrollLeft]: dart.fnType(dart.void, []),
    [_performScrollRight]: dart.fnType(dart.void, []),
    [_performScrollUp]: dart.fnType(dart.void, []),
    [_performScrollDown]: dart.fnType(dart.void, []),
    [_performIncrease]: dart.fnType(dart.void, []),
    [_performDecrease]: dart.fnType(dart.void, []),
    [_performCopy]: dart.fnType(dart.void, []),
    [_performCut]: dart.fnType(dart.void, []),
    [_performPaste]: dart.fnType(dart.void, []),
    [_performMoveCursorForwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_performMoveCursorBackwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_performMoveCursorForwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_performMoveCursorBackwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_performSetSelection]: dart.fnType(dart.void, [text_editing.TextSelection]),
    [_performDidGainAccessibilityFocus]: dart.fnType(dart.void, []),
    [_performDidLoseAccessibilityFocus]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getGetters(proxy_box.RenderSemanticsAnnotations.__proto__),
    container: core.bool,
    explicitChildNodes: core.bool,
    excludeSemantics: core.bool,
    checked: dart.nullable(core.bool),
    enabled: dart.nullable(core.bool),
    selected: dart.nullable(core.bool),
    button: dart.nullable(core.bool),
    slider: dart.nullable(core.bool),
    link: dart.nullable(core.bool),
    header: dart.nullable(core.bool),
    textField: dart.nullable(core.bool),
    readOnly: dart.nullable(core.bool),
    focusable: dart.nullable(core.bool),
    focused: dart.nullable(core.bool),
    inMutuallyExclusiveGroup: dart.nullable(core.bool),
    obscured: dart.nullable(core.bool),
    multiline: dart.nullable(core.bool),
    scopesRoute: dart.nullable(core.bool),
    namesRoute: dart.nullable(core.bool),
    hidden: dart.nullable(core.bool),
    image: dart.nullable(core.bool),
    liveRegion: dart.nullable(core.bool),
    maxValueLength: dart.nullable(core.int),
    currentValueLength: dart.nullable(core.int),
    toggled: dart.nullable(core.bool),
    label: dart.nullable(core.String),
    value: dart.nullable(core.String),
    increasedValue: dart.nullable(core.String),
    decreasedValue: dart.nullable(core.String),
    hint: dart.nullable(core.String),
    hintOverrides: dart.nullable(semantics.SemanticsHintOverrides),
    textDirection: dart.nullable(ui.TextDirection),
    sortKey: dart.nullable(semantics.SemanticsSortKey),
    tagForChildren: dart.nullable(semantics.SemanticsTag),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onDismiss: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onScrollLeft: dart.nullable(dart.fnType(dart.void, [])),
    onScrollRight: dart.nullable(dart.fnType(dart.void, [])),
    onScrollUp: dart.nullable(dart.fnType(dart.void, [])),
    onScrollDown: dart.nullable(dart.fnType(dart.void, [])),
    onIncrease: dart.nullable(dart.fnType(dart.void, [])),
    onDecrease: dart.nullable(dart.fnType(dart.void, [])),
    onCopy: dart.nullable(dart.fnType(dart.void, [])),
    onCut: dart.nullable(dart.fnType(dart.void, [])),
    onPaste: dart.nullable(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection])),
    onDidGainAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    customSemanticsActions: dart.nullable(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])))
  }));
  dart.setSetterSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getSetters(proxy_box.RenderSemanticsAnnotations.__proto__),
    container: core.bool,
    explicitChildNodes: core.bool,
    excludeSemantics: core.bool,
    checked: dart.nullable(core.bool),
    enabled: dart.nullable(core.bool),
    selected: dart.nullable(core.bool),
    button: dart.nullable(core.bool),
    slider: dart.nullable(core.bool),
    link: dart.nullable(core.bool),
    header: dart.nullable(core.bool),
    textField: dart.nullable(core.bool),
    readOnly: dart.nullable(core.bool),
    focusable: dart.nullable(core.bool),
    focused: dart.nullable(core.bool),
    inMutuallyExclusiveGroup: dart.nullable(core.bool),
    obscured: dart.nullable(core.bool),
    multiline: dart.nullable(core.bool),
    scopesRoute: dart.nullable(core.bool),
    namesRoute: dart.nullable(core.bool),
    hidden: dart.nullable(core.bool),
    image: dart.nullable(core.bool),
    liveRegion: dart.nullable(core.bool),
    maxValueLength: dart.nullable(core.int),
    currentValueLength: dart.nullable(core.int),
    toggled: dart.nullable(core.bool),
    label: dart.nullable(core.String),
    value: dart.nullable(core.String),
    increasedValue: dart.nullable(core.String),
    decreasedValue: dart.nullable(core.String),
    hint: dart.nullable(core.String),
    hintOverrides: dart.nullable(semantics.SemanticsHintOverrides),
    textDirection: dart.nullable(ui.TextDirection),
    sortKey: dart.nullable(semantics.SemanticsSortKey),
    tagForChildren: dart.nullable(semantics.SemanticsTag),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onDismiss: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onScrollLeft: dart.nullable(dart.fnType(dart.void, [])),
    onScrollRight: dart.nullable(dart.fnType(dart.void, [])),
    onScrollUp: dart.nullable(dart.fnType(dart.void, [])),
    onScrollDown: dart.nullable(dart.fnType(dart.void, [])),
    onIncrease: dart.nullable(dart.fnType(dart.void, [])),
    onDecrease: dart.nullable(dart.fnType(dart.void, [])),
    onCopy: dart.nullable(dart.fnType(dart.void, [])),
    onCut: dart.nullable(dart.fnType(dart.void, [])),
    onPaste: dart.nullable(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection])),
    onDidGainAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    customSemanticsActions: dart.nullable(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])))
  }));
  dart.setLibraryUri(proxy_box.RenderSemanticsAnnotations, L1);
  dart.setFieldSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getFields(proxy_box.RenderSemanticsAnnotations.__proto__),
    [_container]: dart.fieldType(core.bool),
    [_explicitChildNodes]: dart.fieldType(core.bool),
    [_excludeSemantics]: dart.fieldType(core.bool),
    [_checked]: dart.fieldType(dart.nullable(core.bool)),
    [_enabled]: dart.fieldType(dart.nullable(core.bool)),
    [_selected]: dart.fieldType(dart.nullable(core.bool)),
    [_button]: dart.fieldType(dart.nullable(core.bool)),
    [_slider]: dart.fieldType(dart.nullable(core.bool)),
    [_link]: dart.fieldType(dart.nullable(core.bool)),
    [_header]: dart.fieldType(dart.nullable(core.bool)),
    [_textField]: dart.fieldType(dart.nullable(core.bool)),
    [_readOnly]: dart.fieldType(dart.nullable(core.bool)),
    [_focusable]: dart.fieldType(dart.nullable(core.bool)),
    [_focused]: dart.fieldType(dart.nullable(core.bool)),
    [_inMutuallyExclusiveGroup]: dart.fieldType(dart.nullable(core.bool)),
    [_obscured]: dart.fieldType(dart.nullable(core.bool)),
    [_multiline]: dart.fieldType(dart.nullable(core.bool)),
    [_scopesRoute]: dart.fieldType(dart.nullable(core.bool)),
    [_namesRoute]: dart.fieldType(dart.nullable(core.bool)),
    [_hidden]: dart.fieldType(dart.nullable(core.bool)),
    [_image]: dart.fieldType(dart.nullable(core.bool)),
    [_liveRegion]: dart.fieldType(dart.nullable(core.bool)),
    [_maxValueLength]: dart.fieldType(dart.nullable(core.int)),
    [_currentValueLength]: dart.fieldType(dart.nullable(core.int)),
    [_toggled]: dart.fieldType(dart.nullable(core.bool)),
    [_label]: dart.fieldType(dart.nullable(core.String)),
    [_value]: dart.fieldType(dart.nullable(core.String)),
    [_increasedValue]: dart.fieldType(dart.nullable(core.String)),
    [_decreasedValue]: dart.fieldType(dart.nullable(core.String)),
    [_hint]: dart.fieldType(dart.nullable(core.String)),
    [_hintOverrides]: dart.fieldType(dart.nullable(semantics.SemanticsHintOverrides)),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_sortKey]: dart.fieldType(dart.nullable(semantics.SemanticsSortKey)),
    [_tagForChildren]: dart.fieldType(dart.nullable(semantics.SemanticsTag)),
    [_onTap]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDismiss]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onLongPress]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollLeft]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollRight]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollUp]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollDown]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onIncrease]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDecrease]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onCopy]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onCut]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onPaste]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onMoveCursorForwardByCharacter]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorBackwardByCharacter]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorForwardByWord]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorBackwardByWord]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onSetSelection]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection]))),
    [_onDidGainAccessibilityFocus]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDidLoseAccessibilityFocus]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_customSemanticsActions]: dart.fieldType(dart.nullable(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))))
  }));
  var _blocking = dart.privateName(proxy_box, "_blocking");
  proxy_box.RenderBlockSemantics = class RenderBlockSemantics extends proxy_box.RenderProxyBox {
    get blocking() {
      return this[_blocking];
    }
    set blocking(value) {
      if (value == null) dart.nullFailed(L0, 4859, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 4860, 12, "value != null");
      if (dart.equals(value, this[_blocking])) return;
      this[_blocking] = value;
      this.markNeedsSemanticsUpdate();
    }
    describeSemanticsConfiguration(config) {
      if (config == null) dart.nullFailed(L0, 4868, 62, "config");
      super.describeSemanticsConfiguration(config);
      config.isBlockingSemanticsOfPreviouslyPaintedNodes = this.blocking;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 4874, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("blocking", this.blocking));
    }
  };
  (proxy_box.RenderBlockSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let blocking = opts && 'blocking' in opts ? opts.blocking : true;
    if (blocking == null) dart.nullFailed(L0, 4851, 10, "blocking");
    this[_blocking] = blocking;
    proxy_box.RenderBlockSemantics.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderBlockSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderBlockSemantics);
  dart.addTypeCaches(proxy_box.RenderBlockSemantics);
  dart.setGetterSignature(proxy_box.RenderBlockSemantics, () => ({
    __proto__: dart.getGetters(proxy_box.RenderBlockSemantics.__proto__),
    blocking: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderBlockSemantics, () => ({
    __proto__: dart.getSetters(proxy_box.RenderBlockSemantics.__proto__),
    blocking: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderBlockSemantics, L1);
  dart.setFieldSignature(proxy_box.RenderBlockSemantics, () => ({
    __proto__: dart.getFields(proxy_box.RenderBlockSemantics.__proto__),
    [_blocking]: dart.fieldType(core.bool)
  }));
  proxy_box.RenderMergeSemantics = class RenderMergeSemantics extends proxy_box.RenderProxyBox {
    describeSemanticsConfiguration(config) {
      let t2;
      if (config == null) dart.nullFailed(L0, 4892, 62, "config");
      super.describeSemanticsConfiguration(config);
      t2 = config;
      (() => {
        t2.isSemanticBoundary = true;
        t2.isMergingSemanticsOfDescendants = true;
        return t2;
      })();
    }
  };
  (proxy_box.RenderMergeSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    proxy_box.RenderMergeSemantics.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderMergeSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderMergeSemantics);
  dart.addTypeCaches(proxy_box.RenderMergeSemantics);
  dart.setLibraryUri(proxy_box.RenderMergeSemantics, L1);
  var _excluding = dart.privateName(proxy_box, "_excluding");
  proxy_box.RenderExcludeSemantics = class RenderExcludeSemantics extends proxy_box.RenderProxyBox {
    get excluding() {
      return this[_excluding];
    }
    set excluding(value) {
      if (value == null) dart.nullFailed(L0, 4920, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 4921, 12, "value != null");
      if (dart.equals(value, this[_excluding])) return;
      this[_excluding] = value;
      this.markNeedsSemanticsUpdate();
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 4929, 54, "visitor");
      if (dart.test(this.excluding)) return;
      super.visitChildrenForSemantics(visitor);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 4936, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("excluding", this.excluding));
    }
  };
  (proxy_box.RenderExcludeSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let excluding = opts && 'excluding' in opts ? opts.excluding : true;
    if (excluding == null) dart.nullFailed(L0, 4911, 10, "excluding");
    this[_excluding] = excluding;
    proxy_box.RenderExcludeSemantics.__proto__.new.call(this, child);
    if (!(this[_excluding] != null)) dart.assertFailed(null, L0, 4914, 12, "_excluding != null");
  }).prototype = proxy_box.RenderExcludeSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderExcludeSemantics);
  dart.addTypeCaches(proxy_box.RenderExcludeSemantics);
  dart.setGetterSignature(proxy_box.RenderExcludeSemantics, () => ({
    __proto__: dart.getGetters(proxy_box.RenderExcludeSemantics.__proto__),
    excluding: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderExcludeSemantics, () => ({
    __proto__: dart.getSetters(proxy_box.RenderExcludeSemantics.__proto__),
    excluding: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderExcludeSemantics, L1);
  dart.setFieldSignature(proxy_box.RenderExcludeSemantics, () => ({
    __proto__: dart.getFields(proxy_box.RenderExcludeSemantics.__proto__),
    [_excluding]: dart.fieldType(core.bool)
  }));
  var _index = dart.privateName(proxy_box, "_index");
  proxy_box.RenderIndexedSemantics = class RenderIndexedSemantics extends proxy_box.RenderProxyBox {
    get index() {
      return this[_index];
    }
    set index(value) {
      if (value == null) dart.nullFailed(L0, 4964, 17, "value");
      if (value == this.index) return;
      this[_index] = value;
      this.markNeedsSemanticsUpdate();
    }
    describeSemanticsConfiguration(config) {
      if (config == null) dart.nullFailed(L0, 4972, 62, "config");
      super.describeSemanticsConfiguration(config);
      config.isSemanticBoundary = true;
      config.indexInParent = this.index;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 4979, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfint()).new("index", this.index));
    }
  };
  (proxy_box.RenderIndexedSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let index = opts && 'index' in opts ? opts.index : null;
    if (index == null) dart.nullFailed(L0, 4956, 18, "index");
    if (!(index != null)) dart.assertFailed(null, L0, 4957, 15, "index != null");
    this[_index] = index;
    proxy_box.RenderIndexedSemantics.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderIndexedSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderIndexedSemantics);
  dart.addTypeCaches(proxy_box.RenderIndexedSemantics);
  dart.setGetterSignature(proxy_box.RenderIndexedSemantics, () => ({
    __proto__: dart.getGetters(proxy_box.RenderIndexedSemantics.__proto__),
    index: core.int
  }));
  dart.setSetterSignature(proxy_box.RenderIndexedSemantics, () => ({
    __proto__: dart.getSetters(proxy_box.RenderIndexedSemantics.__proto__),
    index: core.int
  }));
  dart.setLibraryUri(proxy_box.RenderIndexedSemantics, L1);
  dart.setFieldSignature(proxy_box.RenderIndexedSemantics, () => ({
    __proto__: dart.getFields(proxy_box.RenderIndexedSemantics.__proto__),
    [_index]: dart.fieldType(core.int)
  }));
  var _previousLayoutSize = dart.privateName(proxy_box, "_previousLayoutSize");
  proxy_box.RenderLeaderLayer = class RenderLeaderLayer extends proxy_box.RenderProxyBox {
    get link() {
      return this[_link];
    }
    set link(value) {
      if (value == null) dart.nullFailed(L0, 5009, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 5010, 12, "value != null");
      if (dart.equals(this[_link], value)) return;
      this[_link].leaderSize = null;
      this[_link] = value;
      if (this[_previousLayoutSize] != null) {
        this[_link].leaderSize = this[_previousLayoutSize];
      }
      this.markNeedsPaint();
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    performLayout() {
      super.performLayout();
      this[_previousLayoutSize] = this.size;
      this.link.leaderSize = this.size;
    }
    paint(context, offset) {
      let t2;
      if (context == null) dart.nullFailed(L0, 5037, 30, "context");
      if (offset == null) dart.nullFailed(L0, 5037, 46, "offset");
      if (this.layer == null) {
        this.layer = new layer.LeaderLayer.new({link: this.link, offset: offset});
      } else {
        let leaderLayer = layer.LeaderLayer.as(dart.nullCheck(this.layer));
        t2 = leaderLayer;
        (() => {
          t2.link = this.link;
          t2.offset = offset;
          return t2;
        })();
      }
      context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), ui.Offset.zero);
      if (!(this.layer != null)) dart.assertFailed(null, L0, 5047, 12, "layer != null");
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 5051, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLayerLink()).new("link", this.link));
    }
  };
  (proxy_box.RenderLeaderLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    if (link == null) dart.nullFailed(L0, 4996, 24, "link");
    let child = opts && 'child' in opts ? opts.child : null;
    this[_previousLayoutSize] = null;
    if (!(link != null)) dart.assertFailed(null, L0, 4998, 15, "link != null");
    this[_link] = link;
    proxy_box.RenderLeaderLayer.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderLeaderLayer.prototype;
  dart.addTypeTests(proxy_box.RenderLeaderLayer);
  dart.addTypeCaches(proxy_box.RenderLeaderLayer);
  dart.setGetterSignature(proxy_box.RenderLeaderLayer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderLeaderLayer.__proto__),
    link: layer.LayerLink
  }));
  dart.setSetterSignature(proxy_box.RenderLeaderLayer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderLeaderLayer.__proto__),
    link: layer.LayerLink
  }));
  dart.setLibraryUri(proxy_box.RenderLeaderLayer, L1);
  dart.setFieldSignature(proxy_box.RenderLeaderLayer, () => ({
    __proto__: dart.getFields(proxy_box.RenderLeaderLayer.__proto__),
    [_link]: dart.fieldType(layer.LayerLink),
    [_previousLayoutSize]: dart.fieldType(dart.nullable(ui.Size))
  }));
  var C31;
  var _showWhenUnlinked = dart.privateName(proxy_box, "_showWhenUnlinked");
  var _offset = dart.privateName(proxy_box, "_offset");
  var _leaderAnchor = dart.privateName(proxy_box, "_leaderAnchor");
  var _followerAnchor = dart.privateName(proxy_box, "_followerAnchor");
  var Rect_bottom = dart.privateName(ui, "Rect.bottom");
  var Rect_right = dart.privateName(ui, "Rect.right");
  var Rect_top = dart.privateName(ui, "Rect.top");
  var Rect_left = dart.privateName(ui, "Rect.left");
  var C32;
  proxy_box.RenderFollowerLayer = class RenderFollowerLayer extends proxy_box.RenderProxyBox {
    get link() {
      return this[_link];
    }
    set link(value) {
      if (value == null) dart.nullFailed(L0, 5095, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 5096, 12, "value != null");
      if (dart.equals(this[_link], value)) return;
      this[_link] = value;
      this.markNeedsPaint();
    }
    get showWhenUnlinked() {
      return this[_showWhenUnlinked];
    }
    set showWhenUnlinked(value) {
      if (value == null) dart.nullFailed(L0, 5114, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 5115, 12, "value != null");
      if (dart.equals(this[_showWhenUnlinked], value)) return;
      this[_showWhenUnlinked] = value;
      this.markNeedsPaint();
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (value == null) dart.nullFailed(L0, 5126, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 5127, 12, "value != null");
      if (dart.equals(this[_offset], value)) return;
      this[_offset] = value;
      this.markNeedsPaint();
    }
    get leaderAnchor() {
      return this[_leaderAnchor];
    }
    set leaderAnchor(value) {
      if (value == null) dart.nullFailed(L0, 5150, 30, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 5151, 12, "value != null");
      if (dart.equals(this[_leaderAnchor], value)) return;
      this[_leaderAnchor] = value;
      this.markNeedsPaint();
    }
    get followerAnchor() {
      return this[_followerAnchor];
    }
    set followerAnchor(value) {
      if (value == null) dart.nullFailed(L0, 5166, 32, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 5167, 12, "value != null");
      if (dart.equals(this[_followerAnchor], value)) return;
      this[_followerAnchor] = value;
      this.markNeedsPaint();
    }
    detach() {
      this.layer = null;
      super.detach();
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    get layer() {
      return FollowerLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    getCurrentTransform() {
      let t2, t2$;
      t2$ = (t2 = this.layer, t2 == null ? null : t2.getLastTransform());
      return t2$ == null ? vector_math_64.Matrix4.identity() : t2$;
    }
    hitTest(result, opts) {
      if (result == null) dart.nullFailed(L0, 5198, 33, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 5198, 59, "position");
      if (this.link.leader == null && !dart.test(this.showWhenUnlinked)) return false;
      return this.hitTestChildren(result, {position: position});
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 5210, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 5210, 67, "position");
      return result.addWithPaintTransform({transform: this.getCurrentTransform(), position: position, hitTest: dart.fn((result, position) => {
          if (result == null) dart.nullFailed(L0, 5214, 34, "result");
          return super.hitTestChildren(result, {position: dart.nullCheck(position)});
        }, BoxHitTestResultAndOffsetNTobool())});
    }
    paint(context, offset) {
      let t2;
      if (context == null) dart.nullFailed(L0, 5221, 30, "context");
      if (offset == null) dart.nullFailed(L0, 5221, 46, "offset");
      let leaderSize = this.link.leaderSize;
      if (!(this.link.leaderSize != null || this.link.leader == null || dart.equals(this.leaderAnchor, alignment.Alignment.topLeft))) dart.assertFailed(dart.str(this.link) + ": layer is linked to " + dart.str(this.link.leader) + " but a valid leaderSize is not set. " + "leaderSize is required when leaderAnchor is not Alignment.topLeft" + "(current value is " + dart.str(this.leaderAnchor) + ").", L0, 5224, 7, "link.leaderSize != null || (link.leader == null || leaderAnchor == Alignment.topLeft)");
      let effectiveLinkedOffset = leaderSize == null ? this.offset : this.leaderAnchor.alongSize(leaderSize)['-'](this.followerAnchor.alongSize(this.size))['+'](this.offset);
      if (!(this.showWhenUnlinked != null)) dart.assertFailed(null, L0, 5232, 12, "showWhenUnlinked != null");
      if (this.layer == null) {
        this.layer = new layer.FollowerLayer.new({link: this.link, showWhenUnlinked: this.showWhenUnlinked, linkedOffset: effectiveLinkedOffset, unlinkedOffset: offset});
      } else {
        t2 = this.layer;
        t2 == null ? null : (() => {
          t2.link = this.link;
          t2.showWhenUnlinked = this.showWhenUnlinked;
          t2.linkedOffset = effectiveLinkedOffset;
          t2.unlinkedOffset = offset;
          return t2;
        })();
      }
      context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), ui.Offset.zero, {childPaintBounds: C32 || CT.C32});
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 5262, 38, "child");
      if (transform == null) dart.nullFailed(L0, 5262, 53, "transform");
      transform.multiply(this.getCurrentTransform());
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 5267, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLayerLink()).new("link", this.link));
      properties.add(new (DiagnosticsPropertyOfbool()).new("showWhenUnlinked", this.showWhenUnlinked));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("offset", this.offset));
      properties.add(new matrix_utils.TransformProperty.new("current transform matrix", this.getCurrentTransform()));
    }
  };
  (proxy_box.RenderFollowerLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    if (link == null) dart.nullFailed(L0, 5075, 24, "link");
    let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
    if (showWhenUnlinked == null) dart.nullFailed(L0, 5076, 10, "showWhenUnlinked");
    let offset = opts && 'offset' in opts ? opts.offset : C9 || CT.C9;
    if (offset == null) dart.nullFailed(L0, 5077, 12, "offset");
    let leaderAnchor = opts && 'leaderAnchor' in opts ? opts.leaderAnchor : C31 || CT.C31;
    if (leaderAnchor == null) dart.nullFailed(L0, 5078, 15, "leaderAnchor");
    let followerAnchor = opts && 'followerAnchor' in opts ? opts.followerAnchor : C31 || CT.C31;
    if (followerAnchor == null) dart.nullFailed(L0, 5079, 15, "followerAnchor");
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(link != null)) dart.assertFailed(null, L0, 5081, 15, "link != null");
    if (!(showWhenUnlinked != null)) dart.assertFailed(null, L0, 5082, 15, "showWhenUnlinked != null");
    if (!(offset != null)) dart.assertFailed(null, L0, 5083, 15, "offset != null");
    this[_link] = link;
    this[_showWhenUnlinked] = showWhenUnlinked;
    this[_offset] = offset;
    this[_leaderAnchor] = leaderAnchor;
    this[_followerAnchor] = followerAnchor;
    proxy_box.RenderFollowerLayer.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderFollowerLayer.prototype;
  dart.addTypeTests(proxy_box.RenderFollowerLayer);
  dart.addTypeCaches(proxy_box.RenderFollowerLayer);
  dart.setMethodSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getMethods(proxy_box.RenderFollowerLayer.__proto__),
    getCurrentTransform: dart.fnType(vector_math_64.Matrix4, [])
  }));
  dart.setGetterSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderFollowerLayer.__proto__),
    link: layer.LayerLink,
    showWhenUnlinked: core.bool,
    offset: ui.Offset,
    leaderAnchor: alignment.Alignment,
    followerAnchor: alignment.Alignment,
    layer: dart.nullable(layer.FollowerLayer)
  }));
  dart.setSetterSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderFollowerLayer.__proto__),
    link: layer.LayerLink,
    showWhenUnlinked: core.bool,
    offset: ui.Offset,
    leaderAnchor: alignment.Alignment,
    followerAnchor: alignment.Alignment
  }));
  dart.setLibraryUri(proxy_box.RenderFollowerLayer, L1);
  dart.setFieldSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getFields(proxy_box.RenderFollowerLayer.__proto__),
    [_link]: dart.fieldType(layer.LayerLink),
    [_showWhenUnlinked]: dart.fieldType(core.bool),
    [_offset]: dart.fieldType(ui.Offset),
    [_leaderAnchor]: dart.fieldType(alignment.Alignment),
    [_followerAnchor]: dart.fieldType(alignment.Alignment)
  }));
  var _sized = dart.privateName(proxy_box, "_sized");
  const _is_RenderAnnotatedRegion_default = Symbol('_is_RenderAnnotatedRegion_default');
  var alwaysNeedsCompositing = dart.privateName(proxy_box, "RenderAnnotatedRegion.alwaysNeedsCompositing");
  proxy_box.RenderAnnotatedRegion$ = dart.generic(T => {
    var AnnotatedRegionLayerOfT = () => (AnnotatedRegionLayerOfT = dart.constFn(layer.AnnotatedRegionLayer$(T)))();
    class RenderAnnotatedRegion extends proxy_box.RenderProxyBox {
      get alwaysNeedsCompositing() {
        return this[alwaysNeedsCompositing];
      }
      set alwaysNeedsCompositing(value) {
        super.alwaysNeedsCompositing = value;
      }
      get value() {
        return this[_value];
      }
      set value(newValue) {
        T.as(newValue);
        if (newValue == null) dart.nullFailed(L0, 5304, 16, "newValue");
        if (dart.equals(this[_value], newValue)) return;
        this[_value] = newValue;
        this.markNeedsPaint();
      }
      get sized() {
        return this[_sized];
      }
      set sized(value) {
        if (value == null) dart.nullFailed(L0, 5314, 18, "value");
        if (dart.equals(this[_sized], value)) return;
        this[_sized] = value;
        this.markNeedsPaint();
      }
      paint(context, offset) {
        if (context == null) dart.nullFailed(L0, 5325, 30, "context");
        if (offset == null) dart.nullFailed(L0, 5325, 46, "offset");
        let layer = new (AnnotatedRegionLayerOfT()).new(this.value, {size: dart.test(this.sized) ? this.size : null, offset: dart.test(this.sized) ? offset : null});
        context.pushLayer(layer, dart.bind(this, 'paint', super.paint), offset);
      }
    }
    (RenderAnnotatedRegion.new = function(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      if (value == null) dart.nullFailed(L0, 5292, 16, "value");
      let sized = opts && 'sized' in opts ? opts.sized : null;
      if (sized == null) dart.nullFailed(L0, 5293, 19, "sized");
      let child = opts && 'child' in opts ? opts.child : null;
      this[alwaysNeedsCompositing] = true;
      if (!(value != null)) dart.assertFailed(null, L0, 5295, 15, "value != null");
      if (!(sized != null)) dart.assertFailed(null, L0, 5296, 15, "sized != null");
      this[_value] = value;
      this[_sized] = sized;
      RenderAnnotatedRegion.__proto__.new.call(this, child);
      ;
    }).prototype = RenderAnnotatedRegion.prototype;
    dart.addTypeTests(RenderAnnotatedRegion);
    RenderAnnotatedRegion.prototype[_is_RenderAnnotatedRegion_default] = true;
    dart.addTypeCaches(RenderAnnotatedRegion);
    dart.setGetterSignature(RenderAnnotatedRegion, () => ({
      __proto__: dart.getGetters(RenderAnnotatedRegion.__proto__),
      value: T,
      sized: core.bool
    }));
    dart.setSetterSignature(RenderAnnotatedRegion, () => ({
      __proto__: dart.getSetters(RenderAnnotatedRegion.__proto__),
      value: dart.nullable(core.Object),
      sized: core.bool
    }));
    dart.setLibraryUri(RenderAnnotatedRegion, L1);
    dart.setFieldSignature(RenderAnnotatedRegion, () => ({
      __proto__: dart.getFields(RenderAnnotatedRegion.__proto__),
      [_value]: dart.fieldType(T),
      [_sized]: dart.fieldType(core.bool),
      alwaysNeedsCompositing: dart.finalFieldType(core.bool)
    }));
    return RenderAnnotatedRegion;
  });
  proxy_box.RenderAnnotatedRegion = proxy_box.RenderAnnotatedRegion$();
  dart.addTypeTests(proxy_box.RenderAnnotatedRegion, _is_RenderAnnotatedRegion_default);
  dart.trackLibraries("packages/flutter/src/rendering/proxy_box.dart", {
    "package:flutter/src/rendering/proxy_box.dart": proxy_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proxy_box.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/proxy_box.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__proxy_box: proxy_box
  };
}));

//# sourceMappingURL=proxy_box.dart.lib.js.map
