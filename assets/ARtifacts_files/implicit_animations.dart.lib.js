define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/strut_style.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/tweens.dart', 'packages/flutter/src/rendering/paragraph.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/colors.dart'], (function load__packages__flutter__src__widgets__implicit_animations_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_border$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__strut_style$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__tweens$46dart, packages__flutter__src__rendering__paragraph$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const text_style = packages__flutter__src__painting__strut_style$46dart.src__painting__text_style;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const tweens = packages__flutter__src__rendering__tweens$46dart.src__rendering__tweens;
  const paragraph = packages__flutter__src__rendering__paragraph$46dart.src__rendering__paragraph;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  var implicit_animations = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation.AnimationStatus])))();
  var TweenN = () => (TweenN = dart.constFn(dart.nullable(tween.Tween)))();
  var dynamicToTween = () => (dynamicToTween = dart.constFn(dart.fnType(tween.Tween, [dart.dynamic])))();
  var TweenNAnddynamicAndFnToTweenN = () => (TweenNAnddynamicAndFnToTweenN = dart.constFn(dart.fnType(TweenN(), [TweenN(), dart.dynamic, dynamicToTween()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DiagnosticsPropertyOfAlignmentGeometry = () => (DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))();
  var DiagnosticsPropertyOfEdgeInsetsGeometry = () => (DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))();
  var DiagnosticsPropertyOfDecoration = () => (DiagnosticsPropertyOfDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(decoration.Decoration)))();
  var DiagnosticsPropertyOfBoxConstraints = () => (DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))();
  var ObjectFlagPropertyOfMatrix4 = () => (ObjectFlagPropertyOfMatrix4 = dart.constFn(diagnostics.ObjectFlagProperty$(vector_math_64.Matrix4)))();
  var DiagnosticsPropertyOfClip = () => (DiagnosticsPropertyOfClip = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Clip)))();
  var dynamicToAlignmentGeometryTween = () => (dynamicToAlignmentGeometryTween = dart.constFn(dart.fnType(tweens.AlignmentGeometryTween, [dart.dynamic])))();
  var AlignmentGeometryTweenN = () => (AlignmentGeometryTweenN = dart.constFn(dart.nullable(tweens.AlignmentGeometryTween)))();
  var dynamicToEdgeInsetsGeometryTween = () => (dynamicToEdgeInsetsGeometryTween = dart.constFn(dart.fnType(implicit_animations.EdgeInsetsGeometryTween, [dart.dynamic])))();
  var EdgeInsetsGeometryTweenN = () => (EdgeInsetsGeometryTweenN = dart.constFn(dart.nullable(implicit_animations.EdgeInsetsGeometryTween)))();
  var dynamicToDecorationTween = () => (dynamicToDecorationTween = dart.constFn(dart.fnType(implicit_animations.DecorationTween, [dart.dynamic])))();
  var DecorationTweenN = () => (DecorationTweenN = dart.constFn(dart.nullable(implicit_animations.DecorationTween)))();
  var dynamicToBoxConstraintsTween = () => (dynamicToBoxConstraintsTween = dart.constFn(dart.fnType(implicit_animations.BoxConstraintsTween, [dart.dynamic])))();
  var BoxConstraintsTweenN = () => (BoxConstraintsTweenN = dart.constFn(dart.nullable(implicit_animations.BoxConstraintsTween)))();
  var dynamicToMatrix4Tween = () => (dynamicToMatrix4Tween = dart.constFn(dart.fnType(implicit_animations.Matrix4Tween, [dart.dynamic])))();
  var Matrix4TweenN = () => (Matrix4TweenN = dart.constFn(dart.nullable(implicit_animations.Matrix4Tween)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var DiagnosticsPropertyOfAlignmentGeometryTween = () => (DiagnosticsPropertyOfAlignmentGeometryTween = dart.constFn(diagnostics.DiagnosticsProperty$(tweens.AlignmentGeometryTween)))();
  var DiagnosticsPropertyOfEdgeInsetsGeometryTween = () => (DiagnosticsPropertyOfEdgeInsetsGeometryTween = dart.constFn(diagnostics.DiagnosticsProperty$(implicit_animations.EdgeInsetsGeometryTween)))();
  var DiagnosticsPropertyOfDecorationTween = () => (DiagnosticsPropertyOfDecorationTween = dart.constFn(diagnostics.DiagnosticsProperty$(implicit_animations.DecorationTween)))();
  var DiagnosticsPropertyOfBoxConstraintsTween = () => (DiagnosticsPropertyOfBoxConstraintsTween = dart.constFn(diagnostics.DiagnosticsProperty$(implicit_animations.BoxConstraintsTween)))();
  var ObjectFlagPropertyOfMatrix4Tween = () => (ObjectFlagPropertyOfMatrix4Tween = dart.constFn(diagnostics.ObjectFlagProperty$(implicit_animations.Matrix4Tween)))();
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  var dynamicToTweenOfdouble = () => (dynamicToTweenOfdouble = dart.constFn(dart.fnType(TweenOfdouble(), [dart.dynamic])))();
  var TweenNOfdouble = () => (TweenNOfdouble = dart.constFn(dart.nullable(TweenOfdouble())))();
  var DiagnosticsPropertyOfTweenOfdouble = () => (DiagnosticsPropertyOfTweenOfdouble = dart.constFn(diagnostics.DiagnosticsProperty$(TweenOfdouble())))();
  var ObjectFlagPropertyOfTweenOfdouble = () => (ObjectFlagPropertyOfTweenOfdouble = dart.constFn(diagnostics.ObjectFlagProperty$(TweenOfdouble())))();
  var EnumPropertyOfTextAlign = () => (EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))();
  var EnumPropertyOfTextOverflow = () => (EnumPropertyOfTextOverflow = dart.constFn(diagnostics.EnumProperty$(paragraph.TextOverflow)))();
  var EnumPropertyOfTextWidthBasis = () => (EnumPropertyOfTextWidthBasis = dart.constFn(diagnostics.EnumProperty$(text_painter.TextWidthBasis)))();
  var DiagnosticsPropertyOfTextHeightBehavior = () => (DiagnosticsPropertyOfTextHeightBehavior = dart.constFn(diagnostics.DiagnosticsProperty$(ui.TextHeightBehavior)))();
  var dynamicToTextStyleTween = () => (dynamicToTextStyleTween = dart.constFn(dart.fnType(implicit_animations.TextStyleTween, [dart.dynamic])))();
  var TextStyleTweenN = () => (TextStyleTweenN = dart.constFn(dart.nullable(implicit_animations.TextStyleTween)))();
  var EnumPropertyOfBoxShape = () => (EnumPropertyOfBoxShape = dart.constFn(diagnostics.EnumProperty$(box_border.BoxShape)))();
  var DiagnosticsPropertyOfBorderRadius = () => (DiagnosticsPropertyOfBorderRadius = dart.constFn(diagnostics.DiagnosticsProperty$(border_radius.BorderRadius)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var dynamicToBorderRadiusTween = () => (dynamicToBorderRadiusTween = dart.constFn(dart.fnType(implicit_animations.BorderRadiusTween, [dart.dynamic])))();
  var BorderRadiusTweenN = () => (BorderRadiusTweenN = dart.constFn(dart.nullable(implicit_animations.BorderRadiusTween)))();
  var dynamicToColorTween = () => (dynamicToColorTween = dart.constFn(dart.fnType(tween.ColorTween, [dart.dynamic])))();
  var ColorTweenN = () => (ColorTweenN = dart.constFn(dart.nullable(tween.ColorTween)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart";
  var L1 = "package:flutter/src/widgets/implicit_animations.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.completed",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.dismissed",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.forward",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.reverse",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$]: "Clip.none",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 780,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 781,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 783,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "foregroundDecoration",
        [_Location_column]: 7,
        [_Location_line]: 784,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 785,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 7,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transformAlignment",
        [_Location_column]: 7,
        [_Location_line]: 788,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 7,
        [_Location_line]: 789,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], _LocationL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 779,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 908,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 911,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], _LocationL());
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 907,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 1060,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 7,
        [_Location_line]: 1061,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "widthFactor",
        [_Location_column]: 7,
        [_Location_line]: 1062,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1063,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], _LocationL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1059,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1256,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 7,
        [_Location_line]: 1257,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 1258,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 7,
        [_Location_line]: 1259,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 7,
        [_Location_line]: 1260,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 1261,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 1262,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], _LocationL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1255,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 7,
        [_Location_line]: 1392,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1393,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "start",
        [_Location_column]: 7,
        [_Location_line]: 1394,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 1395,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "end",
        [_Location_column]: 7,
        [_Location_line]: 1396,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 7,
        [_Location_line]: 1397,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 1398,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 1399,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], _LocationL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 1391,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 1537,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1538,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alwaysIncludeSemantics",
        [_Location_column]: 7,
        [_Location_line]: 1539,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], _LocationL());
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1536,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 1670,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 7,
        [_Location_line]: 1671,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alwaysIncludeSemantics",
        [_Location_column]: 7,
        [_Location_line]: 1672,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], _LocationL());
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1669,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: paragraph.TextOverflow.prototype,
        [_name$0]: "TextOverflow.clip",
        index: 0
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_name$1]: "TextWidthBasis.parent",
        index: 0
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 1794,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 7,
        [_Location_line]: 1795,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 7,
        [_Location_line]: 1796,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 7,
        [_Location_line]: 1797,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 7,
        [_Location_line]: 1798,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textWidthBasis",
        [_Location_column]: 7,
        [_Location_line]: 1799,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textHeightBehavior",
        [_Location_column]: 7,
        [_Location_line]: 1800,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1801,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], _LocationL());
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1793,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C70 || CT.C70,
        [BorderRadius_bottomLeft]: C70 || CT.C70,
        [BorderRadius_topRight]: C70 || CT.C70,
        [BorderRadius_topLeft]: C70 || CT.C70
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1924,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 1925,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 7,
        [_Location_line]: 1926,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 7,
        [_Location_line]: 1927,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 1928,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 1929,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shadowColor",
        [_Location_column]: 7,
        [_Location_line]: 1930,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], _LocationL());
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 1923,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    }
  }, false);
  implicit_animations.BoxConstraintsTween = class BoxConstraintsTween extends tween.Tween$(box.BoxConstraints) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 45, 30, "t");
      return dart.nullCheck(box.BoxConstraints.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.BoxConstraintsTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.BoxConstraintsTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.BoxConstraintsTween.prototype;
  dart.addTypeTests(implicit_animations.BoxConstraintsTween);
  dart.addTypeCaches(implicit_animations.BoxConstraintsTween);
  dart.setLibraryUri(implicit_animations.BoxConstraintsTween, L1);
  implicit_animations.DecorationTween = class DecorationTween extends tween.Tween$(decoration.Decoration) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 76, 26, "t");
      return dart.nullCheck(decoration.Decoration.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.DecorationTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.DecorationTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.DecorationTween.prototype;
  dart.addTypeTests(implicit_animations.DecorationTween);
  dart.addTypeCaches(implicit_animations.DecorationTween);
  dart.setLibraryUri(implicit_animations.DecorationTween, L1);
  implicit_animations.EdgeInsetsTween = class EdgeInsetsTween extends tween.Tween$(edge_insets.EdgeInsets) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 99, 26, "t");
      return dart.nullCheck(edge_insets.EdgeInsets.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.EdgeInsetsTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.EdgeInsetsTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.EdgeInsetsTween.prototype;
  dart.addTypeTests(implicit_animations.EdgeInsetsTween);
  dart.addTypeCaches(implicit_animations.EdgeInsetsTween);
  dart.setLibraryUri(implicit_animations.EdgeInsetsTween, L1);
  implicit_animations.EdgeInsetsGeometryTween = class EdgeInsetsGeometryTween extends tween.Tween$(edge_insets.EdgeInsetsGeometry) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 121, 34, "t");
      return dart.nullCheck(edge_insets.EdgeInsetsGeometry.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.EdgeInsetsGeometryTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.EdgeInsetsGeometryTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.EdgeInsetsGeometryTween.prototype;
  dart.addTypeTests(implicit_animations.EdgeInsetsGeometryTween);
  dart.addTypeCaches(implicit_animations.EdgeInsetsGeometryTween);
  dart.setLibraryUri(implicit_animations.EdgeInsetsGeometryTween, L1);
  implicit_animations.BorderRadiusTween = class BorderRadiusTween extends tween.Tween$(border_radius.BorderRadius) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 139, 28, "t");
      return dart.nullCheck(border_radius.BorderRadius.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.BorderRadiusTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.BorderRadiusTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.BorderRadiusTween.prototype;
  dart.addTypeTests(implicit_animations.BorderRadiusTween);
  dart.addTypeCaches(implicit_animations.BorderRadiusTween);
  dart.setLibraryUri(implicit_animations.BorderRadiusTween, L1);
  implicit_animations.BorderTween = class BorderTween extends tween.Tween$(box_border.Border) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 157, 22, "t");
      return dart.nullCheck(box_border.Border.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.BorderTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.BorderTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.BorderTween.prototype;
  dart.addTypeTests(implicit_animations.BorderTween);
  dart.addTypeCaches(implicit_animations.BorderTween);
  dart.setLibraryUri(implicit_animations.BorderTween, L1);
  implicit_animations.Matrix4Tween = class Matrix4Tween extends tween.Tween$(vector_math_64.Matrix4) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 177, 23, "t");
      if (!(this.begin != null)) dart.assertFailed(null, L0, 178, 12, "begin != null");
      if (!(this.end != null)) dart.assertFailed(null, L0, 179, 12, "end != null");
      let beginTranslation = new vector_math_64.Vector3.zero();
      let endTranslation = new vector_math_64.Vector3.zero();
      let beginRotation = vector_math_64.Quaternion.identity();
      let endRotation = vector_math_64.Quaternion.identity();
      let beginScale = new vector_math_64.Vector3.zero();
      let endScale = new vector_math_64.Vector3.zero();
      dart.nullCheck(this.begin).decompose(beginTranslation, beginRotation, beginScale);
      dart.nullCheck(this.end).decompose(endTranslation, endRotation, endScale);
      let lerpTranslation = beginTranslation['*'](1.0 - dart.notNull(t))['+'](endTranslation['*'](t));
      let lerpRotation = beginRotation.scaled(1.0 - dart.notNull(t))['+'](endRotation.scaled(t)).normalized();
      let lerpScale = beginScale['*'](1.0 - dart.notNull(t))['+'](endScale['*'](t));
      return vector_math_64.Matrix4.compose(lerpTranslation, lerpRotation, lerpScale);
    }
  };
  (implicit_animations.Matrix4Tween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.Matrix4Tween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.Matrix4Tween.prototype;
  dart.addTypeTests(implicit_animations.Matrix4Tween);
  dart.addTypeCaches(implicit_animations.Matrix4Tween);
  dart.setLibraryUri(implicit_animations.Matrix4Tween, L1);
  implicit_animations.TextStyleTween = class TextStyleTween extends tween.Tween$(text_style.TextStyle) {
    lerp(t) {
      if (t == null) dart.nullFailed(L0, 216, 25, "t");
      return dart.nullCheck(text_style.TextStyle.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.TextStyleTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.TextStyleTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.TextStyleTween.prototype;
  dart.addTypeTests(implicit_animations.TextStyleTween);
  dart.addTypeCaches(implicit_animations.TextStyleTween);
  dart.setLibraryUri(implicit_animations.TextStyleTween, L1);
  var C0;
  var curve$ = dart.privateName(implicit_animations, "ImplicitlyAnimatedWidget.curve");
  var duration$ = dart.privateName(implicit_animations, "ImplicitlyAnimatedWidget.duration");
  var onEnd$ = dart.privateName(implicit_animations, "ImplicitlyAnimatedWidget.onEnd");
  implicit_animations.ImplicitlyAnimatedWidget = class ImplicitlyAnimatedWidget extends framework.StatefulWidget {
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      super.onEnd = value;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 303, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("duration", this.duration.inMilliseconds, {unit: "ms"}));
    }
  };
  (implicit_animations.ImplicitlyAnimatedWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 280, 10, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 281, 19, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[curve$] = curve;
    this[duration$] = duration;
    this[onEnd$] = onEnd;
    if (!(curve != null)) dart.assertFailed(null, L0, 283, 15, "curve != null");
    if (!(duration != null)) dart.assertFailed(null, L0, 284, 15, "duration != null");
    implicit_animations.ImplicitlyAnimatedWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.ImplicitlyAnimatedWidget.prototype;
  dart.addTypeTests(implicit_animations.ImplicitlyAnimatedWidget);
  dart.addTypeCaches(implicit_animations.ImplicitlyAnimatedWidget);
  dart.setLibraryUri(implicit_animations.ImplicitlyAnimatedWidget, L1);
  dart.setFieldSignature(implicit_animations.ImplicitlyAnimatedWidget, () => ({
    __proto__: dart.getFields(implicit_animations.ImplicitlyAnimatedWidget.__proto__),
    curve: dart.finalFieldType(curves.Curve),
    duration: dart.finalFieldType(core.Duration),
    onEnd: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  var _controller = dart.privateName(implicit_animations, "_controller");
  var _animation = dart.privateName(implicit_animations, "_animation");
  var _name = dart.privateName(animation, "_name");
  var C1;
  var C2;
  var C3;
  var C4;
  var _updateCurve = dart.privateName(implicit_animations, "_updateCurve");
  var _constructTweens = dart.privateName(implicit_animations, "_constructTweens");
  var _updateTween = dart.privateName(implicit_animations, "_updateTween");
  var _shouldAnimateTween = dart.privateName(implicit_animations, "_shouldAnimateTween");
  const _is_ImplicitlyAnimatedWidgetState_default = Symbol('_is_ImplicitlyAnimatedWidgetState_default');
  implicit_animations.ImplicitlyAnimatedWidgetState$ = dart.generic(T => {
    const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(T) {};
    (State_SingleTickerProviderStateMixin$36.new = function() {
      ticker_provider.SingleTickerProviderStateMixin$(T)[dart.mixinNew].call(this);
      State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
    }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
    dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(T));
    class ImplicitlyAnimatedWidgetState extends State_SingleTickerProviderStateMixin$36 {
      get controller() {
        return this[_controller];
      }
      get animation() {
        return this[_animation];
      }
      initState() {
        super.initState();
        this[_controller] = new animation_controller.AnimationController.new({duration: this.widget.duration, debugLabel: true ? this.widget.toStringShort() : null, vsync: this});
        dart.nullCheck(this[_controller]).addStatusListener(dart.fn(status => {
          if (status == null) dart.nullFailed(L0, 369, 53, "status");
          switch (status) {
            case C1 || CT.C1:
            {
              if (this.widget.onEnd != null) dart.nullCheck(this.widget.onEnd)();
              break;
            }
            case C2 || CT.C2:
            case C3 || CT.C3:
            case C4 || CT.C4:
            {
              break;
            }
            default:
            {
              dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
            }
          }
        }, AnimationStatusTovoid()));
        this[_updateCurve]();
        this[_constructTweens]();
        this.didUpdateTweens();
      }
      didUpdateWidget(oldWidget) {
        let t0;
        T.as(oldWidget);
        if (oldWidget == null) dart.nullFailed(L0, 386, 26, "oldWidget");
        super.didUpdateWidget(oldWidget);
        if (!dart.equals(this.widget.curve, oldWidget.curve)) this[_updateCurve]();
        dart.nullCheck(this[_controller]).duration = this.widget.duration;
        if (dart.test(this[_constructTweens]())) {
          this.forEachTween(dart.fn((tween, targetValue, constructor) => {
            if (constructor == null) dart.nullFailed(L0, 392, 91, "constructor");
            this[_updateTween](tween, targetValue);
            return tween;
          }, TweenNAnddynamicAndFnToTweenN()));
          t0 = dart.nullCheck(this[_controller]);
          (() => {
            t0.value = 0.0;
            t0.forward();
            return t0;
          })();
          this.didUpdateTweens();
        }
      }
      [_updateCurve]() {
        this[_animation] = new animations.CurvedAnimation.new({parent: dart.nullCheck(this[_controller]), curve: this.widget.curve});
      }
      dispose() {
        dart.nullCheck(this[_controller]).dispose();
        super.dispose();
      }
      [_shouldAnimateTween](tween, targetValue) {
        let t0;
        if (tween == null) dart.nullFailed(L0, 413, 43, "tween");
        return !dart.equals(targetValue, (t0 = tween.end, t0 == null ? tween.begin : t0));
      }
      [_updateTween](tween, targetValue) {
        let t0;
        if (tween == null) return;
        t0 = tween;
        (() => {
          t0.begin = tween.evaluate(dart.nullCheck(this[_animation]));
          t0.end = targetValue;
          return t0;
        })();
      }
      [_constructTweens]() {
        let shouldStartAnimation = false;
        this.forEachTween(dart.fn((tween, targetValue, constructor) => {
          if (constructor == null) dart.nullFailed(L0, 427, 89, "constructor");
          if (targetValue != null) {
            tween == null ? tween = constructor(targetValue) : null;
            if (dart.test(this[_shouldAnimateTween](tween, targetValue))) shouldStartAnimation = true;
          } else {
            tween = null;
          }
          return tween;
        }, TweenNAnddynamicAndFnToTweenN()));
        return shouldStartAnimation;
      }
      didUpdateTweens() {
      }
    }
    (ImplicitlyAnimatedWidgetState.new = function() {
      this[_controller] = null;
      this[_animation] = null;
      ImplicitlyAnimatedWidgetState.__proto__.new.call(this);
      ;
    }).prototype = ImplicitlyAnimatedWidgetState.prototype;
    dart.addTypeTests(ImplicitlyAnimatedWidgetState);
    ImplicitlyAnimatedWidgetState.prototype[_is_ImplicitlyAnimatedWidgetState_default] = true;
    dart.addTypeCaches(ImplicitlyAnimatedWidgetState);
    dart.setMethodSignature(ImplicitlyAnimatedWidgetState, () => ({
      __proto__: dart.getMethods(ImplicitlyAnimatedWidgetState.__proto__),
      [_updateCurve]: dart.fnType(dart.void, []),
      [_shouldAnimateTween]: dart.fnType(core.bool, [tween.Tween, dart.dynamic]),
      [_updateTween]: dart.fnType(dart.void, [dart.nullable(tween.Tween), dart.dynamic]),
      [_constructTweens]: dart.fnType(core.bool, []),
      didUpdateTweens: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ImplicitlyAnimatedWidgetState, () => ({
      __proto__: dart.getGetters(ImplicitlyAnimatedWidgetState.__proto__),
      controller: dart.nullable(animation_controller.AnimationController),
      animation: dart.nullable(animation.Animation$(core.double))
    }));
    dart.setLibraryUri(ImplicitlyAnimatedWidgetState, L1);
    dart.setFieldSignature(ImplicitlyAnimatedWidgetState, () => ({
      __proto__: dart.getFields(ImplicitlyAnimatedWidgetState.__proto__),
      [_controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
      [_animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
    }));
    return ImplicitlyAnimatedWidgetState;
  });
  implicit_animations.ImplicitlyAnimatedWidgetState = implicit_animations.ImplicitlyAnimatedWidgetState$();
  dart.addTypeTests(implicit_animations.ImplicitlyAnimatedWidgetState, _is_ImplicitlyAnimatedWidgetState_default);
  var _handleAnimationChanged = dart.privateName(implicit_animations, "_handleAnimationChanged");
  const _is_AnimatedWidgetBaseState_default = Symbol('_is_AnimatedWidgetBaseState_default');
  implicit_animations.AnimatedWidgetBaseState$ = dart.generic(T => {
    class AnimatedWidgetBaseState extends implicit_animations.ImplicitlyAnimatedWidgetState$(T) {
      initState() {
        super.initState();
        dart.nullCheck(this.controller).addListener(dart.bind(this, _handleAnimationChanged));
      }
      [_handleAnimationChanged]() {
        this.setState(dart.fn(() => {
        }, VoidTovoid()));
      }
    }
    (AnimatedWidgetBaseState.new = function() {
      AnimatedWidgetBaseState.__proto__.new.call(this);
      ;
    }).prototype = AnimatedWidgetBaseState.prototype;
    dart.addTypeTests(AnimatedWidgetBaseState);
    AnimatedWidgetBaseState.prototype[_is_AnimatedWidgetBaseState_default] = true;
    dart.addTypeCaches(AnimatedWidgetBaseState);
    dart.setMethodSignature(AnimatedWidgetBaseState, () => ({
      __proto__: dart.getMethods(AnimatedWidgetBaseState.__proto__),
      [_handleAnimationChanged]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(AnimatedWidgetBaseState, L1);
    return AnimatedWidgetBaseState;
  });
  implicit_animations.AnimatedWidgetBaseState = implicit_animations.AnimatedWidgetBaseState$();
  dart.addTypeTests(implicit_animations.AnimatedWidgetBaseState, _is_AnimatedWidgetBaseState_default);
  var _name$ = dart.privateName(ui, "_name");
  var C5;
  var child$ = dart.privateName(implicit_animations, "AnimatedContainer.child");
  var alignment$ = dart.privateName(implicit_animations, "AnimatedContainer.alignment");
  var padding$ = dart.privateName(implicit_animations, "AnimatedContainer.padding");
  var decoration$ = dart.privateName(implicit_animations, "AnimatedContainer.decoration");
  var foregroundDecoration$ = dart.privateName(implicit_animations, "AnimatedContainer.foregroundDecoration");
  var constraints$ = dart.privateName(implicit_animations, "AnimatedContainer.constraints");
  var margin$ = dart.privateName(implicit_animations, "AnimatedContainer.margin");
  var transform$ = dart.privateName(implicit_animations, "AnimatedContainer.transform");
  var transformAlignment$ = dart.privateName(implicit_animations, "AnimatedContainer.transformAlignment");
  var clipBehavior$ = dart.privateName(implicit_animations, "AnimatedContainer.clipBehavior");
  implicit_animations.AnimatedContainer = class AnimatedContainer extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get foregroundDecoration() {
      return this[foregroundDecoration$];
    }
    set foregroundDecoration(value) {
      super.foregroundDecoration = value;
    }
    get constraints() {
      return this[constraints$];
    }
    set constraints(value) {
      super.constraints = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get transformAlignment() {
      return this[transformAlignment$];
    }
    set transformAlignment(value) {
      super.transformAlignment = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    createState() {
      return new implicit_animations._AnimatedContainerState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 740, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {showName: false, defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfDecoration()).new("bg", this.decoration, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfDecoration()).new("fg", this.foregroundDecoration, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfBoxConstraints()).new("constraints", this.constraints, {defaultValue: null, showName: false}));
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("margin", this.margin, {defaultValue: null}));
      properties.add(new (ObjectFlagPropertyOfMatrix4()).has("transform", this.transform));
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("transformAlignment", this.transformAlignment, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (implicit_animations.AnimatedContainer.new = function(opts) {
    let t0, t0$, t0$0;
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let foregroundDecoration = opts && 'foregroundDecoration' in opts ? opts.foregroundDecoration : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let transformAlignment = opts && 'transformAlignment' in opts ? opts.transformAlignment : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 640, 10, "clipBehavior");
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 641, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 642, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alignment$] = alignment;
    this[padding$] = padding;
    this[foregroundDecoration$] = foregroundDecoration;
    this[margin$] = margin;
    this[transform$] = transform;
    this[transformAlignment$] = transformAlignment;
    this[child$] = child;
    this[clipBehavior$] = clipBehavior;
    if (!(margin == null || dart.test(margin.isNonNegative))) dart.assertFailed(null, L0, 644, 15, "margin == null || margin.isNonNegative");
    if (!(padding == null || dart.test(padding.isNonNegative))) dart.assertFailed(null, L0, 645, 15, "padding == null || padding.isNonNegative");
    if (!(decoration == null || dart.test(decoration.debugAssertIsValid()))) dart.assertFailed(null, L0, 646, 15, "decoration == null || decoration.debugAssertIsValid()");
    if (!(constraints == null || dart.test(constraints.debugAssertIsValid()))) dart.assertFailed(null, L0, 647, 15, "constraints == null || constraints.debugAssertIsValid()");
    if (!(color == null || decoration == null)) dart.assertFailed("Cannot provide both a color and a decoration\n" + "The color argument is just a shorthand for \"decoration: BoxDecoration(color: color)\".", L0, 648, 15, "color == null || decoration == null");
    this[decoration$] = (t0 = decoration, t0 == null ? color != null ? new box_decoration.BoxDecoration.new({color: color}) : null : t0);
    this[constraints$] = width != null || height != null ? (t0$0 = (t0$ = constraints, t0$ == null ? null : t0$.tighten({width: width, height: height})), t0$0 == null ? new box.BoxConstraints.tightFor({width: width, height: height}) : t0$0) : constraints;
    implicit_animations.AnimatedContainer.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedContainer.prototype;
  dart.addTypeTests(implicit_animations.AnimatedContainer);
  dart.addTypeCaches(implicit_animations.AnimatedContainer);
  dart.setMethodSignature(implicit_animations.AnimatedContainer, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedContainer.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedContainerState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedContainer, L1);
  dart.setFieldSignature(implicit_animations.AnimatedContainer, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedContainer.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    alignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry)),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    decoration: dart.finalFieldType(dart.nullable(decoration.Decoration)),
    foregroundDecoration: dart.finalFieldType(dart.nullable(decoration.Decoration)),
    constraints: dart.finalFieldType(dart.nullable(box.BoxConstraints)),
    margin: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    transform: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    transformAlignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry)),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var _alignment = dart.privateName(implicit_animations, "_alignment");
  var _padding = dart.privateName(implicit_animations, "_padding");
  var _decoration = dart.privateName(implicit_animations, "_decoration");
  var _foregroundDecoration = dart.privateName(implicit_animations, "_foregroundDecoration");
  var _constraints = dart.privateName(implicit_animations, "_constraints");
  var _margin = dart.privateName(implicit_animations, "_margin");
  var _transform = dart.privateName(implicit_animations, "_transform");
  var _transformAlignment = dart.privateName(implicit_animations, "_transformAlignment");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
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
  var C7;
  var C6;
  implicit_animations._AnimatedContainerState = class _AnimatedContainerState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedContainer) {
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 765, 43, "visitor");
      this[_alignment] = AlignmentGeometryTweenN().as(visitor(this[_alignment], this.widget.alignment, dart.fn(value => new tweens.AlignmentGeometryTween.new({begin: alignment.AlignmentGeometry.as(value)}), dynamicToAlignmentGeometryTween())));
      this[_padding] = EdgeInsetsGeometryTweenN().as(visitor(this[_padding], this.widget.padding, dart.fn(value => new implicit_animations.EdgeInsetsGeometryTween.new({begin: edge_insets.EdgeInsetsGeometry.as(value)}), dynamicToEdgeInsetsGeometryTween())));
      this[_decoration] = DecorationTweenN().as(visitor(this[_decoration], this.widget.decoration, dart.fn(value => new implicit_animations.DecorationTween.new({begin: decoration.Decoration.as(value)}), dynamicToDecorationTween())));
      this[_foregroundDecoration] = DecorationTweenN().as(visitor(this[_foregroundDecoration], this.widget.foregroundDecoration, dart.fn(value => new implicit_animations.DecorationTween.new({begin: decoration.Decoration.as(value)}), dynamicToDecorationTween())));
      this[_constraints] = BoxConstraintsTweenN().as(visitor(this[_constraints], this.widget.constraints, dart.fn(value => new implicit_animations.BoxConstraintsTween.new({begin: box.BoxConstraints.as(value)}), dynamicToBoxConstraintsTween())));
      this[_margin] = EdgeInsetsGeometryTweenN().as(visitor(this[_margin], this.widget.margin, dart.fn(value => new implicit_animations.EdgeInsetsGeometryTween.new({begin: edge_insets.EdgeInsetsGeometry.as(value)}), dynamicToEdgeInsetsGeometryTween())));
      this[_transform] = Matrix4TweenN().as(visitor(this[_transform], this.widget.transform, dart.fn(value => new implicit_animations.Matrix4Tween.new({begin: vector_math_64.Matrix4.as(value)}), dynamicToMatrix4Tween())));
      this[_transformAlignment] = AlignmentGeometryTweenN().as(visitor(this[_transformAlignment], this.widget.transformAlignment, dart.fn(value => new tweens.AlignmentGeometryTween.new({begin: alignment.AlignmentGeometry.as(value)}), dynamicToAlignmentGeometryTween())));
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      if (context == null) dart.nullFailed(L0, 777, 29, "context");
      let animation = dart.nullCheck(this.animation);
      return new container.Container.new({child: this.widget.child, alignment: (t0 = this[_alignment], t0 == null ? null : t0.evaluate(animation)), padding: (t0$ = this[_padding], t0$ == null ? null : t0$.evaluate(animation)), decoration: (t0$0 = this[_decoration], t0$0 == null ? null : t0$0.evaluate(animation)), foregroundDecoration: (t0$1 = this[_foregroundDecoration], t0$1 == null ? null : t0$1.evaluate(animation)), constraints: (t0$2 = this[_constraints], t0$2 == null ? null : t0$2.evaluate(animation)), margin: (t0$3 = this[_margin], t0$3 == null ? null : t0$3.evaluate(animation)), transform: (t0$4 = this[_transform], t0$4 == null ? null : t0$4.evaluate(animation)), transformAlignment: (t0$5 = this[_transformAlignment], t0$5 == null ? null : t0$5.evaluate(animation)), clipBehavior: this.widget.clipBehavior, $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 794, 56, "description");
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfAlignmentGeometryTween()).new("alignment", this[_alignment], {showName: false, defaultValue: null}));
      description.add(new (DiagnosticsPropertyOfEdgeInsetsGeometryTween()).new("padding", this[_padding], {defaultValue: null}));
      description.add(new (DiagnosticsPropertyOfDecorationTween()).new("bg", this[_decoration], {defaultValue: null}));
      description.add(new (DiagnosticsPropertyOfDecorationTween()).new("fg", this[_foregroundDecoration], {defaultValue: null}));
      description.add(new (DiagnosticsPropertyOfBoxConstraintsTween()).new("constraints", this[_constraints], {showName: false, defaultValue: null}));
      description.add(new (DiagnosticsPropertyOfEdgeInsetsGeometryTween()).new("margin", this[_margin], {defaultValue: null}));
      description.add(new (ObjectFlagPropertyOfMatrix4Tween()).has("transform", this[_transform]));
      description.add(new (DiagnosticsPropertyOfAlignmentGeometryTween()).new("transformAlignment", this[_transformAlignment], {defaultValue: null}));
    }
  };
  (implicit_animations._AnimatedContainerState.new = function() {
    this[_alignment] = null;
    this[_padding] = null;
    this[_decoration] = null;
    this[_foregroundDecoration] = null;
    this[_constraints] = null;
    this[_margin] = null;
    this[_transform] = null;
    this[_transformAlignment] = null;
    implicit_animations._AnimatedContainerState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedContainerState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedContainerState);
  dart.addTypeCaches(implicit_animations._AnimatedContainerState);
  dart.setMethodSignature(implicit_animations._AnimatedContainerState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedContainerState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedContainerState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedContainerState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedContainerState.__proto__),
    [_alignment]: dart.fieldType(dart.nullable(tweens.AlignmentGeometryTween)),
    [_padding]: dart.fieldType(dart.nullable(implicit_animations.EdgeInsetsGeometryTween)),
    [_decoration]: dart.fieldType(dart.nullable(implicit_animations.DecorationTween)),
    [_foregroundDecoration]: dart.fieldType(dart.nullable(implicit_animations.DecorationTween)),
    [_constraints]: dart.fieldType(dart.nullable(implicit_animations.BoxConstraintsTween)),
    [_margin]: dart.fieldType(dart.nullable(implicit_animations.EdgeInsetsGeometryTween)),
    [_transform]: dart.fieldType(dart.nullable(implicit_animations.Matrix4Tween)),
    [_transformAlignment]: dart.fieldType(dart.nullable(tweens.AlignmentGeometryTween))
  }));
  var padding$0 = dart.privateName(implicit_animations, "AnimatedPadding.padding");
  var child$0 = dart.privateName(implicit_animations, "AnimatedPadding.child");
  implicit_animations.AnimatedPadding = class AnimatedPadding extends implicit_animations.ImplicitlyAnimatedWidget {
    get padding() {
      return this[padding$0];
    }
    set padding(value) {
      super.padding = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new implicit_animations._AnimatedPaddingState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 891, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding));
    }
  };
  (implicit_animations.AnimatedPadding.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    if (padding == null) dart.nullFailed(L0, 870, 19, "padding");
    let child = opts && 'child' in opts ? opts.child : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 872, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 873, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[padding$0] = padding;
    this[child$0] = child;
    if (!(padding != null)) dart.assertFailed(null, L0, 875, 15, "padding != null");
    if (!dart.test(padding.isNonNegative)) dart.assertFailed(null, L0, 876, 15, "padding.isNonNegative");
    implicit_animations.AnimatedPadding.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPadding.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPadding);
  dart.addTypeCaches(implicit_animations.AnimatedPadding);
  dart.setMethodSignature(implicit_animations.AnimatedPadding, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPadding.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedPaddingState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPadding, L1);
  dart.setFieldSignature(implicit_animations.AnimatedPadding, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPadding.__proto__),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  var C20;
  var C21;
  var C19;
  var C18;
  implicit_animations._AnimatedPaddingState = class _AnimatedPaddingState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPadding) {
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 901, 43, "visitor");
      this[_padding] = EdgeInsetsGeometryTweenN().as(visitor(this[_padding], this.widget.padding, dart.fn(value => new implicit_animations.EdgeInsetsGeometryTween.new({begin: edge_insets.EdgeInsetsGeometry.as(value)}), dynamicToEdgeInsetsGeometryTween())));
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 906, 29, "context");
      return new basic.Padding.new({padding: dart.nullCheck(this[_padding]).evaluate(dart.nullCheck(this.animation)).clamp(edge_insets.EdgeInsets.zero, edge_insets.EdgeInsetsGeometry.infinity), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 916, 56, "description");
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfEdgeInsetsGeometryTween()).new("padding", this[_padding], {defaultValue: null}));
    }
  };
  (implicit_animations._AnimatedPaddingState.new = function() {
    this[_padding] = null;
    implicit_animations._AnimatedPaddingState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPaddingState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPaddingState);
  dart.addTypeCaches(implicit_animations._AnimatedPaddingState);
  dart.setMethodSignature(implicit_animations._AnimatedPaddingState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPaddingState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPaddingState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedPaddingState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPaddingState.__proto__),
    [_padding]: dart.fieldType(dart.nullable(implicit_animations.EdgeInsetsGeometryTween))
  }));
  var alignment$0 = dart.privateName(implicit_animations, "AnimatedAlign.alignment");
  var child$1 = dart.privateName(implicit_animations, "AnimatedAlign.child");
  var heightFactor$ = dart.privateName(implicit_animations, "AnimatedAlign.heightFactor");
  var widthFactor$ = dart.privateName(implicit_animations, "AnimatedAlign.widthFactor");
  implicit_animations.AnimatedAlign = class AnimatedAlign extends implicit_animations.ImplicitlyAnimatedWidget {
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    get heightFactor() {
      return this[heightFactor$];
    }
    set heightFactor(value) {
      super.heightFactor = value;
    }
    get widthFactor() {
      return this[widthFactor$];
    }
    set widthFactor(value) {
      super.widthFactor = value;
    }
    createState() {
      return new implicit_animations._AnimatedAlignState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1035, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
    }
  };
  (implicit_animations.AnimatedAlign.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    if (alignment == null) dart.nullFailed(L0, 986, 19, "alignment");
    let child = opts && 'child' in opts ? opts.child : null;
    let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
    let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 990, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 991, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alignment$0] = alignment;
    this[child$1] = child;
    this[heightFactor$] = heightFactor;
    this[widthFactor$] = widthFactor;
    if (!(alignment != null)) dart.assertFailed(null, L0, 993, 15, "alignment != null");
    if (!(widthFactor == null || dart.notNull(widthFactor) >= 0.0)) dart.assertFailed(null, L0, 994, 15, "widthFactor == null || widthFactor >= 0.0");
    if (!(heightFactor == null || dart.notNull(heightFactor) >= 0.0)) dart.assertFailed(null, L0, 995, 15, "heightFactor == null || heightFactor >= 0.0");
    implicit_animations.AnimatedAlign.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedAlign.prototype;
  dart.addTypeTests(implicit_animations.AnimatedAlign);
  dart.addTypeCaches(implicit_animations.AnimatedAlign);
  dart.setMethodSignature(implicit_animations.AnimatedAlign, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedAlign.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedAlignState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedAlign, L1);
  dart.setFieldSignature(implicit_animations.AnimatedAlign, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedAlign.__proto__),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    heightFactor: dart.finalFieldType(dart.nullable(core.double)),
    widthFactor: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _heightFactorTween = dart.privateName(implicit_animations, "_heightFactorTween");
  var _widthFactorTween = dart.privateName(implicit_animations, "_widthFactorTween");
  var C24;
  var C25;
  var C26;
  var C27;
  var C23;
  var C22;
  implicit_animations._AnimatedAlignState = class _AnimatedAlignState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedAlign) {
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1047, 43, "visitor");
      this[_alignment] = AlignmentGeometryTweenN().as(visitor(this[_alignment], this.widget.alignment, dart.fn(value => new tweens.AlignmentGeometryTween.new({begin: alignment.AlignmentGeometry.as(value)}), dynamicToAlignmentGeometryTween())));
      if (this.widget.heightFactor != null) {
        this[_heightFactorTween] = TweenNOfdouble().as(visitor(this[_heightFactorTween], this.widget.heightFactor, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      }
      if (this.widget.widthFactor != null) {
        this[_widthFactorTween] = TweenNOfdouble().as(visitor(this[_widthFactorTween], this.widget.widthFactor, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      }
    }
    build(context) {
      let t0, t0$;
      if (context == null) dart.nullFailed(L0, 1058, 29, "context");
      return new basic.Align.new({alignment: dart.nullCheck(dart.nullCheck(this[_alignment]).evaluate(dart.nullCheck(this.animation))), heightFactor: (t0 = this[_heightFactorTween], t0 == null ? null : t0.evaluate(dart.nullCheck(this.animation))), widthFactor: (t0$ = this[_widthFactorTween], t0$ == null ? null : t0$.evaluate(dart.nullCheck(this.animation))), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 1068, 56, "description");
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfAlignmentGeometryTween()).new("alignment", this[_alignment], {defaultValue: null}));
      description.add(new (DiagnosticsPropertyOfTweenOfdouble()).new("widthFactor", this[_widthFactorTween], {defaultValue: null}));
      description.add(new (DiagnosticsPropertyOfTweenOfdouble()).new("heightFactor", this[_heightFactorTween], {defaultValue: null}));
    }
  };
  (implicit_animations._AnimatedAlignState.new = function() {
    this[_alignment] = null;
    this[_heightFactorTween] = null;
    this[_widthFactorTween] = null;
    implicit_animations._AnimatedAlignState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedAlignState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedAlignState);
  dart.addTypeCaches(implicit_animations._AnimatedAlignState);
  dart.setMethodSignature(implicit_animations._AnimatedAlignState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedAlignState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedAlignState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedAlignState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedAlignState.__proto__),
    [_alignment]: dart.fieldType(dart.nullable(tweens.AlignmentGeometryTween)),
    [_heightFactorTween]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_widthFactorTween]: dart.fieldType(dart.nullable(tween.Tween$(core.double)))
  }));
  var child$2 = dart.privateName(implicit_animations, "AnimatedPositioned.child");
  var left$ = dart.privateName(implicit_animations, "AnimatedPositioned.left");
  var top$ = dart.privateName(implicit_animations, "AnimatedPositioned.top");
  var right$ = dart.privateName(implicit_animations, "AnimatedPositioned.right");
  var bottom$ = dart.privateName(implicit_animations, "AnimatedPositioned.bottom");
  var width$ = dart.privateName(implicit_animations, "AnimatedPositioned.width");
  var height$ = dart.privateName(implicit_animations, "AnimatedPositioned.height");
  implicit_animations.AnimatedPositioned = class AnimatedPositioned extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$2];
    }
    set child(value) {
      super.child = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    createState() {
      return new implicit_animations._AnimatedPositionedState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1224, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("left", this.left, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("top", this.top, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("right", this.right, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("bottom", this.bottom, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedPositioned.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 1159, 19, "child");
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 1166, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 1167, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$2] = child;
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[width$] = width;
    this[height$] = height;
    if (!(left == null || right == null || width == null)) dart.assertFailed(null, L0, 1169, 15, "left == null || right == null || width == null");
    if (!(top == null || bottom == null || height == null)) dart.assertFailed(null, L0, 1170, 15, "top == null || bottom == null || height == null");
    implicit_animations.AnimatedPositioned.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPositioned.prototype;
  (implicit_animations.AnimatedPositioned.fromRect = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 1178, 19, "child");
    let rect = opts && 'rect' in opts ? opts.rect : null;
    if (rect == null) dart.nullFailed(L0, 1179, 19, "rect");
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 1180, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 1181, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$2] = child;
    this[left$] = rect.left;
    this[top$] = rect.top;
    this[width$] = rect.width;
    this[height$] = rect.height;
    this[right$] = null;
    this[bottom$] = null;
    implicit_animations.AnimatedPositioned.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPositioned.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPositioned);
  dart.addTypeCaches(implicit_animations.AnimatedPositioned);
  dart.setMethodSignature(implicit_animations.AnimatedPositioned, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPositioned.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedPositionedState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPositioned, L1);
  dart.setFieldSignature(implicit_animations.AnimatedPositioned, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPositioned.__proto__),
    child: dart.finalFieldType(framework.Widget),
    left: dart.finalFieldType(dart.nullable(core.double)),
    top: dart.finalFieldType(dart.nullable(core.double)),
    right: dart.finalFieldType(dart.nullable(core.double)),
    bottom: dart.finalFieldType(dart.nullable(core.double)),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _left = dart.privateName(implicit_animations, "_left");
  var _top = dart.privateName(implicit_animations, "_top");
  var _right = dart.privateName(implicit_animations, "_right");
  var _bottom = dart.privateName(implicit_animations, "_bottom");
  var _width = dart.privateName(implicit_animations, "_width");
  var _height = dart.privateName(implicit_animations, "_height");
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C29;
  var C28;
  implicit_animations._AnimatedPositionedState = class _AnimatedPositionedState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPositioned) {
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1244, 43, "visitor");
      this[_left] = TweenNOfdouble().as(visitor(this[_left], this.widget.left, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_top] = TweenNOfdouble().as(visitor(this[_top], this.widget.top, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_right] = TweenNOfdouble().as(visitor(this[_right], this.widget.right, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_bottom] = TweenNOfdouble().as(visitor(this[_bottom], this.widget.bottom, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_width] = TweenNOfdouble().as(visitor(this[_width], this.widget.width, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_height] = TweenNOfdouble().as(visitor(this[_height], this.widget.height, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (context == null) dart.nullFailed(L0, 1254, 29, "context");
      return new basic.Positioned.new({child: this.widget.child, left: (t0 = this[_left], t0 == null ? null : t0.evaluate(dart.nullCheck(this.animation))), top: (t0$ = this[_top], t0$ == null ? null : t0$.evaluate(dart.nullCheck(this.animation))), right: (t0$0 = this[_right], t0$0 == null ? null : t0$0.evaluate(dart.nullCheck(this.animation))), bottom: (t0$1 = this[_bottom], t0$1 == null ? null : t0$1.evaluate(dart.nullCheck(this.animation))), width: (t0$2 = this[_width], t0$2 == null ? null : t0$2.evaluate(dart.nullCheck(this.animation))), height: (t0$3 = this[_height], t0$3 == null ? null : t0$3.evaluate(dart.nullCheck(this.animation))), $creationLocationd_0dea112b090073317d4: C28 || CT.C28});
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 1267, 56, "description");
      super.debugFillProperties(description);
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("left", this[_left]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("top", this[_top]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("right", this[_right]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("bottom", this[_bottom]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("width", this[_width]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("height", this[_height]));
    }
  };
  (implicit_animations._AnimatedPositionedState.new = function() {
    this[_left] = null;
    this[_top] = null;
    this[_right] = null;
    this[_bottom] = null;
    this[_width] = null;
    this[_height] = null;
    implicit_animations._AnimatedPositionedState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPositionedState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPositionedState);
  dart.addTypeCaches(implicit_animations._AnimatedPositionedState);
  dart.setMethodSignature(implicit_animations._AnimatedPositionedState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPositionedState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPositionedState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedPositionedState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPositionedState.__proto__),
    [_left]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_top]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_right]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_bottom]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_width]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_height]: dart.fieldType(dart.nullable(tween.Tween$(core.double)))
  }));
  var child$3 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.child");
  var start$ = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.start");
  var top$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.top");
  var end$ = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.end");
  var bottom$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.bottom");
  var width$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.width");
  var height$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.height");
  implicit_animations.AnimatedPositionedDirectional = class AnimatedPositionedDirectional extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$3];
    }
    set child(value) {
      super.child = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get width() {
      return this[width$0];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    createState() {
      return new implicit_animations._AnimatedPositionedDirectionalState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1359, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("start", this.start, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("top", this.top, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("end", this.end, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("bottom", this.bottom, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedPositionedDirectional.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 1312, 19, "child");
    let start = opts && 'start' in opts ? opts.start : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 1319, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 1320, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$3] = child;
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    this[width$0] = width;
    this[height$0] = height;
    if (!(start == null || end == null || width == null)) dart.assertFailed(null, L0, 1322, 15, "start == null || end == null || width == null");
    if (!(top == null || bottom == null || height == null)) dart.assertFailed(null, L0, 1323, 15, "top == null || bottom == null || height == null");
    implicit_animations.AnimatedPositionedDirectional.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPositionedDirectional.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPositionedDirectional);
  dart.addTypeCaches(implicit_animations.AnimatedPositionedDirectional);
  dart.setMethodSignature(implicit_animations.AnimatedPositionedDirectional, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPositionedDirectional.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedPositionedDirectionalState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPositionedDirectional, L1);
  dart.setFieldSignature(implicit_animations.AnimatedPositionedDirectional, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPositionedDirectional.__proto__),
    child: dart.finalFieldType(framework.Widget),
    start: dart.finalFieldType(dart.nullable(core.double)),
    top: dart.finalFieldType(dart.nullable(core.double)),
    end: dart.finalFieldType(dart.nullable(core.double)),
    bottom: dart.finalFieldType(dart.nullable(core.double)),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _start = dart.privateName(implicit_animations, "_start");
  var _end = dart.privateName(implicit_animations, "_end");
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C38;
  var C37;
  implicit_animations._AnimatedPositionedDirectionalState = class _AnimatedPositionedDirectionalState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPositionedDirectional) {
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1379, 43, "visitor");
      this[_start] = TweenNOfdouble().as(visitor(this[_start], this.widget.start, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_top] = TweenNOfdouble().as(visitor(this[_top], this.widget.top, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_end] = TweenNOfdouble().as(visitor(this[_end], this.widget.end, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_bottom] = TweenNOfdouble().as(visitor(this[_bottom], this.widget.bottom, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_width] = TweenNOfdouble().as(visitor(this[_width], this.widget.width, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_height] = TweenNOfdouble().as(visitor(this[_height], this.widget.height, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (context == null) dart.nullFailed(L0, 1389, 29, "context");
      if (!dart.test(debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, L0, 1390, 12, "debugCheckHasDirectionality(context)");
      return basic.Positioned.directional({textDirection: basic.Directionality.of(context), child: this.widget.child, start: (t0 = this[_start], t0 == null ? null : t0.evaluate(dart.nullCheck(this.animation))), top: (t0$ = this[_top], t0$ == null ? null : t0$.evaluate(dart.nullCheck(this.animation))), end: (t0$0 = this[_end], t0$0 == null ? null : t0$0.evaluate(dart.nullCheck(this.animation))), bottom: (t0$1 = this[_bottom], t0$1 == null ? null : t0$1.evaluate(dart.nullCheck(this.animation))), width: (t0$2 = this[_width], t0$2 == null ? null : t0$2.evaluate(dart.nullCheck(this.animation))), height: (t0$3 = this[_height], t0$3 == null ? null : t0$3.evaluate(dart.nullCheck(this.animation))), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 1404, 56, "description");
      super.debugFillProperties(description);
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("start", this[_start]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("top", this[_top]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("end", this[_end]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("bottom", this[_bottom]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("width", this[_width]));
      description.add(new (ObjectFlagPropertyOfTweenOfdouble()).has("height", this[_height]));
    }
  };
  (implicit_animations._AnimatedPositionedDirectionalState.new = function() {
    this[_start] = null;
    this[_top] = null;
    this[_end] = null;
    this[_bottom] = null;
    this[_width] = null;
    this[_height] = null;
    implicit_animations._AnimatedPositionedDirectionalState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPositionedDirectionalState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPositionedDirectionalState);
  dart.addTypeCaches(implicit_animations._AnimatedPositionedDirectionalState);
  dart.setMethodSignature(implicit_animations._AnimatedPositionedDirectionalState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPositionedDirectionalState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPositionedDirectionalState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedPositionedDirectionalState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPositionedDirectionalState.__proto__),
    [_start]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_top]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_end]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_bottom]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_width]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_height]: dart.fieldType(dart.nullable(tween.Tween$(core.double)))
  }));
  var child$4 = dart.privateName(implicit_animations, "AnimatedOpacity.child");
  var opacity$ = dart.privateName(implicit_animations, "AnimatedOpacity.opacity");
  var alwaysIncludeSemantics$ = dart.privateName(implicit_animations, "AnimatedOpacity.alwaysIncludeSemantics");
  implicit_animations.AnimatedOpacity = class AnimatedOpacity extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$4];
    }
    set child(value) {
      super.child = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get alwaysIncludeSemantics() {
      return this[alwaysIncludeSemantics$];
    }
    set alwaysIncludeSemantics(value) {
      super.alwaysIncludeSemantics = value;
    }
    createState() {
      return new implicit_animations._AnimatedOpacityState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1514, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
    }
  };
  (implicit_animations.AnimatedOpacity.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    if (opacity == null) dart.nullFailed(L0, 1479, 19, "opacity");
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 1480, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 1481, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    if (alwaysIncludeSemantics == null) dart.nullFailed(L0, 1483, 10, "alwaysIncludeSemantics");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$4] = child;
    this[opacity$] = opacity;
    this[alwaysIncludeSemantics$] = alwaysIncludeSemantics;
    if (!(opacity != null && dart.notNull(opacity) >= 0.0 && dart.notNull(opacity) <= 1.0)) dart.assertFailed(null, L0, 1484, 15, "opacity != null && opacity >= 0.0 && opacity <= 1.0");
    implicit_animations.AnimatedOpacity.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedOpacity.prototype;
  dart.addTypeTests(implicit_animations.AnimatedOpacity);
  dart.addTypeCaches(implicit_animations.AnimatedOpacity);
  dart.setMethodSignature(implicit_animations.AnimatedOpacity, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedOpacity.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedOpacityState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedOpacity, L1);
  dart.setFieldSignature(implicit_animations.AnimatedOpacity, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedOpacity.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    opacity: dart.finalFieldType(core.double),
    alwaysIncludeSemantics: dart.finalFieldType(core.bool)
  }));
  var _opacity = dart.privateName(implicit_animations, "_opacity");
  var ___AnimatedOpacityState__opacityAnimation = dart.privateName(implicit_animations, "_#_AnimatedOpacityState#_opacityAnimation");
  var ___AnimatedOpacityState__opacityAnimation_isSet = dart.privateName(implicit_animations, "_#_AnimatedOpacityState#_opacityAnimation#isSet");
  var _opacityAnimation = dart.privateName(implicit_animations, "_opacityAnimation");
  var C49;
  var C50;
  var C51;
  var C48;
  var C47;
  implicit_animations._AnimatedOpacityState = class _AnimatedOpacityState extends implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedOpacity) {
    get [_opacityAnimation]() {
      let t0;
      return dart.test(this[___AnimatedOpacityState__opacityAnimation_isSet]) ? (t0 = this[___AnimatedOpacityState__opacityAnimation], t0) : dart.throw(new _internal.LateError.fieldNI("_opacityAnimation"));
    }
    set [_opacityAnimation](t0) {
      if (t0 == null) dart.nullFailed(L0, 1522, 26, "null");
      this[___AnimatedOpacityState__opacityAnimation_isSet] = true;
      this[___AnimatedOpacityState__opacityAnimation] = t0;
    }
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1525, 43, "visitor");
      this[_opacity] = TweenNOfdouble().as(visitor(this[_opacity], this.widget.opacity, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
    }
    didUpdateTweens() {
      this[_opacityAnimation] = dart.nullCheck(this.animation).drive(core.double, dart.nullCheck(this[_opacity]));
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 1535, 29, "context");
      return new transitions.FadeTransition.new({opacity: this[_opacityAnimation], child: this.widget.child, alwaysIncludeSemantics: this.widget.alwaysIncludeSemantics, $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (implicit_animations._AnimatedOpacityState.new = function() {
    this[_opacity] = null;
    this[___AnimatedOpacityState__opacityAnimation] = null;
    this[___AnimatedOpacityState__opacityAnimation_isSet] = false;
    implicit_animations._AnimatedOpacityState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedOpacityState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedOpacityState);
  dart.addTypeCaches(implicit_animations._AnimatedOpacityState);
  dart.setMethodSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedOpacityState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getGetters(implicit_animations._AnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getSetters(implicit_animations._AnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(implicit_animations._AnimatedOpacityState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedOpacityState.__proto__),
    [_opacity]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [___AnimatedOpacityState__opacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___AnimatedOpacityState__opacityAnimation_isSet]: dart.fieldType(core.bool)
  }));
  var sliver$ = dart.privateName(implicit_animations, "SliverAnimatedOpacity.sliver");
  var opacity$0 = dart.privateName(implicit_animations, "SliverAnimatedOpacity.opacity");
  var alwaysIncludeSemantics$0 = dart.privateName(implicit_animations, "SliverAnimatedOpacity.alwaysIncludeSemantics");
  implicit_animations.SliverAnimatedOpacity = class SliverAnimatedOpacity extends implicit_animations.ImplicitlyAnimatedWidget {
    get sliver() {
      return this[sliver$];
    }
    set sliver(value) {
      super.sliver = value;
    }
    get opacity() {
      return this[opacity$0];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get alwaysIncludeSemantics() {
      return this[alwaysIncludeSemantics$0];
    }
    set alwaysIncludeSemantics(value) {
      super.alwaysIncludeSemantics = value;
    }
    createState() {
      return new implicit_animations._SliverAnimatedOpacityState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1647, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
    }
  };
  (implicit_animations.SliverAnimatedOpacity.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    if (opacity == null) dart.nullFailed(L0, 1614, 19, "opacity");
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 1615, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 1616, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    if (alwaysIncludeSemantics == null) dart.nullFailed(L0, 1618, 10, "alwaysIncludeSemantics");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[sliver$] = sliver;
    this[opacity$0] = opacity;
    this[alwaysIncludeSemantics$0] = alwaysIncludeSemantics;
    if (!(opacity != null && dart.notNull(opacity) >= 0.0 && dart.notNull(opacity) <= 1.0)) dart.assertFailed(null, L0, 1619, 15, "opacity != null && opacity >= 0.0 && opacity <= 1.0");
    implicit_animations.SliverAnimatedOpacity.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.SliverAnimatedOpacity.prototype;
  dart.addTypeTests(implicit_animations.SliverAnimatedOpacity);
  dart.addTypeCaches(implicit_animations.SliverAnimatedOpacity);
  dart.setMethodSignature(implicit_animations.SliverAnimatedOpacity, () => ({
    __proto__: dart.getMethods(implicit_animations.SliverAnimatedOpacity.__proto__),
    createState: dart.fnType(implicit_animations._SliverAnimatedOpacityState, [])
  }));
  dart.setLibraryUri(implicit_animations.SliverAnimatedOpacity, L1);
  dart.setFieldSignature(implicit_animations.SliverAnimatedOpacity, () => ({
    __proto__: dart.getFields(implicit_animations.SliverAnimatedOpacity.__proto__),
    sliver: dart.finalFieldType(dart.nullable(framework.Widget)),
    opacity: dart.finalFieldType(core.double),
    alwaysIncludeSemantics: dart.finalFieldType(core.bool)
  }));
  var ___SliverAnimatedOpacityState__opacityAnimation = dart.privateName(implicit_animations, "_#_SliverAnimatedOpacityState#_opacityAnimation");
  var ___SliverAnimatedOpacityState__opacityAnimation_isSet = dart.privateName(implicit_animations, "_#_SliverAnimatedOpacityState#_opacityAnimation#isSet");
  var C54;
  var C55;
  var C56;
  var C53;
  var C52;
  implicit_animations._SliverAnimatedOpacityState = class _SliverAnimatedOpacityState extends implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.SliverAnimatedOpacity) {
    get [_opacityAnimation]() {
      let t1;
      return dart.test(this[___SliverAnimatedOpacityState__opacityAnimation_isSet]) ? (t1 = this[___SliverAnimatedOpacityState__opacityAnimation], t1) : dart.throw(new _internal.LateError.fieldNI("_opacityAnimation"));
    }
    set [_opacityAnimation](t1) {
      if (t1 == null) dart.nullFailed(L0, 1655, 26, "null");
      this[___SliverAnimatedOpacityState__opacityAnimation_isSet] = true;
      this[___SliverAnimatedOpacityState__opacityAnimation] = t1;
    }
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1658, 43, "visitor");
      this[_opacity] = TweenNOfdouble().as(visitor(this[_opacity], this.widget.opacity, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
    }
    didUpdateTweens() {
      this[_opacityAnimation] = dart.nullCheck(this.animation).drive(core.double, dart.nullCheck(this[_opacity]));
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 1668, 29, "context");
      return new transitions.SliverFadeTransition.new({opacity: this[_opacityAnimation], sliver: this.widget.sliver, alwaysIncludeSemantics: this.widget.alwaysIncludeSemantics, $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
    }
  };
  (implicit_animations._SliverAnimatedOpacityState.new = function() {
    this[_opacity] = null;
    this[___SliverAnimatedOpacityState__opacityAnimation] = null;
    this[___SliverAnimatedOpacityState__opacityAnimation_isSet] = false;
    implicit_animations._SliverAnimatedOpacityState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._SliverAnimatedOpacityState.prototype;
  dart.addTypeTests(implicit_animations._SliverAnimatedOpacityState);
  dart.addTypeCaches(implicit_animations._SliverAnimatedOpacityState);
  dart.setMethodSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getMethods(implicit_animations._SliverAnimatedOpacityState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getGetters(implicit_animations._SliverAnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getSetters(implicit_animations._SliverAnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(implicit_animations._SliverAnimatedOpacityState, L1);
  dart.setFieldSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getFields(implicit_animations._SliverAnimatedOpacityState.__proto__),
    [_opacity]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [___SliverAnimatedOpacityState__opacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SliverAnimatedOpacityState__opacityAnimation_isSet]: dart.fieldType(core.bool)
  }));
  var _name$0 = dart.privateName(paragraph, "_name");
  var C57;
  var _name$1 = dart.privateName(text_painter, "_name");
  var C58;
  var child$5 = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.child");
  var style$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.style");
  var textAlign$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.textAlign");
  var softWrap$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.softWrap");
  var overflow$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.overflow");
  var maxLines$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.maxLines");
  var textWidthBasis$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.textWidthBasis");
  var textHeightBehavior$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.textHeightBehavior");
  implicit_animations.AnimatedDefaultTextStyle = class AnimatedDefaultTextStyle extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$5];
    }
    set child(value) {
      super.child = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get softWrap() {
      return this[softWrap$];
    }
    set softWrap(value) {
      super.softWrap = value;
    }
    get overflow() {
      return this[overflow$];
    }
    set overflow(value) {
      super.overflow = value;
    }
    get maxLines() {
      return this[maxLines$];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get textWidthBasis() {
      return this[textWidthBasis$];
    }
    set textWidthBasis(value) {
      super.textWidthBasis = value;
    }
    get textHeightBehavior() {
      return this[textHeightBehavior$];
    }
    set textHeightBehavior(value) {
      super.textHeightBehavior = value;
    }
    createState() {
      return new implicit_animations._AnimatedDefaultTextStyleState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1771, 56, "properties");
      super.debugFillProperties(properties);
      this.style.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfTextAlign()).new("textAlign", this.textAlign, {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("softWrap", {value: this.softWrap, ifTrue: "wrapping at box width", ifFalse: "no wrapping except at line break characters", showName: true}));
      properties.add(new (EnumPropertyOfTextOverflow()).new("overflow", this.overflow, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextWidthBasis()).new("textWidthBasis", this.textWidthBasis, {defaultValue: text_painter.TextWidthBasis.parent}));
      properties.add(new (DiagnosticsPropertyOfTextHeightBehavior()).new("textHeightBehavior", this.textHeightBehavior, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedDefaultTextStyle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 1704, 19, "child");
    let style = opts && 'style' in opts ? opts.style : null;
    if (style == null) dart.nullFailed(L0, 1705, 19, "style");
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
    if (softWrap == null) dart.nullFailed(L0, 1707, 10, "softWrap");
    let overflow = opts && 'overflow' in opts ? opts.overflow : C57 || CT.C57;
    if (overflow == null) dart.nullFailed(L0, 1708, 10, "overflow");
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C58 || CT.C58;
    if (textWidthBasis == null) dart.nullFailed(L0, 1710, 10, "textWidthBasis");
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 1712, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 1713, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$5] = child;
    this[style$] = style;
    this[textAlign$] = textAlign;
    this[softWrap$] = softWrap;
    this[overflow$] = overflow;
    this[maxLines$] = maxLines;
    this[textWidthBasis$] = textWidthBasis;
    this[textHeightBehavior$] = textHeightBehavior;
    if (!(style != null)) dart.assertFailed(null, L0, 1715, 15, "style != null");
    if (!(child != null)) dart.assertFailed(null, L0, 1716, 15, "child != null");
    if (!(softWrap != null)) dart.assertFailed(null, L0, 1717, 15, "softWrap != null");
    if (!(overflow != null)) dart.assertFailed(null, L0, 1718, 15, "overflow != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, L0, 1719, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis != null)) dart.assertFailed(null, L0, 1720, 15, "textWidthBasis != null");
    implicit_animations.AnimatedDefaultTextStyle.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedDefaultTextStyle.prototype;
  dart.addTypeTests(implicit_animations.AnimatedDefaultTextStyle);
  dart.addTypeCaches(implicit_animations.AnimatedDefaultTextStyle);
  dart.setMethodSignature(implicit_animations.AnimatedDefaultTextStyle, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedDefaultTextStyle.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedDefaultTextStyleState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedDefaultTextStyle, L1);
  dart.setFieldSignature(implicit_animations.AnimatedDefaultTextStyle, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedDefaultTextStyle.__proto__),
    child: dart.finalFieldType(framework.Widget),
    style: dart.finalFieldType(text_style.TextStyle),
    textAlign: dart.finalFieldType(dart.nullable(ui.TextAlign)),
    softWrap: dart.finalFieldType(core.bool),
    overflow: dart.finalFieldType(paragraph.TextOverflow),
    maxLines: dart.finalFieldType(dart.nullable(core.int)),
    textWidthBasis: dart.finalFieldType(text_painter.TextWidthBasis),
    textHeightBehavior: dart.finalFieldType(dart.nullable(ui.TextHeightBehavior))
  }));
  var _style = dart.privateName(implicit_animations, "_style");
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C60;
  var C59;
  implicit_animations._AnimatedDefaultTextStyleState = class _AnimatedDefaultTextStyleState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedDefaultTextStyle) {
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1787, 43, "visitor");
      this[_style] = TextStyleTweenN().as(visitor(this[_style], this.widget.style, dart.fn(value => new implicit_animations.TextStyleTween.new({begin: text_style.TextStyle.as(value)}), dynamicToTextStyleTween())));
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 1792, 29, "context");
      return new text.DefaultTextStyle.new({style: dart.nullCheck(this[_style]).evaluate(dart.nullCheck(this.animation)), textAlign: this.widget.textAlign, softWrap: this.widget.softWrap, overflow: this.widget.overflow, maxLines: this.widget.maxLines, textWidthBasis: this.widget.textWidthBasis, textHeightBehavior: this.widget.textHeightBehavior, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C59 || CT.C59});
    }
  };
  (implicit_animations._AnimatedDefaultTextStyleState.new = function() {
    this[_style] = null;
    implicit_animations._AnimatedDefaultTextStyleState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedDefaultTextStyleState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedDefaultTextStyleState);
  dart.addTypeCaches(implicit_animations._AnimatedDefaultTextStyleState);
  dart.setMethodSignature(implicit_animations._AnimatedDefaultTextStyleState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedDefaultTextStyleState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedDefaultTextStyleState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedDefaultTextStyleState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedDefaultTextStyleState.__proto__),
    [_style]: dart.fieldType(dart.nullable(implicit_animations.TextStyleTween))
  }));
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C70;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C69;
  var child$6 = dart.privateName(implicit_animations, "AnimatedPhysicalModel.child");
  var shape$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.shape");
  var clipBehavior$0 = dart.privateName(implicit_animations, "AnimatedPhysicalModel.clipBehavior");
  var borderRadius$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.borderRadius");
  var elevation$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.elevation");
  var color$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.color");
  var animateColor$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.animateColor");
  var shadowColor$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.shadowColor");
  var animateShadowColor$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.animateShadowColor");
  implicit_animations.AnimatedPhysicalModel = class AnimatedPhysicalModel extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$6];
    }
    set child(value) {
      super.child = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get animateColor() {
      return this[animateColor$];
    }
    set animateColor(value) {
      super.animateColor = value;
    }
    get shadowColor() {
      return this[shadowColor$];
    }
    set shadowColor(value) {
      super.shadowColor = value;
    }
    get animateShadowColor() {
      return this[animateShadowColor$];
    }
    set animateShadowColor(value) {
      super.animateShadowColor = value;
    }
    createState() {
      return new implicit_animations._AnimatedPhysicalModelState.new();
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1895, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfBoxShape()).new("shape", this.shape));
      properties.add(new (DiagnosticsPropertyOfBorderRadius()).new("borderRadius", this.borderRadius));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation));
      properties.add(new colors.ColorProperty.new("color", this.color));
      properties.add(new (DiagnosticsPropertyOfbool()).new("animateColor", this.animateColor));
      properties.add(new colors.ColorProperty.new("shadowColor", this.shadowColor));
      properties.add(new (DiagnosticsPropertyOfbool()).new("animateShadowColor", this.animateShadowColor));
    }
  };
  (implicit_animations.AnimatedPhysicalModel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 1832, 19, "child");
    let shape = opts && 'shape' in opts ? opts.shape : null;
    if (shape == null) dart.nullFailed(L0, 1833, 19, "shape");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C5 || CT.C5;
    if (clipBehavior == null) dart.nullFailed(L0, 1834, 10, "clipBehavior");
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C69 || CT.C69;
    if (borderRadius == null) dart.nullFailed(L0, 1835, 10, "borderRadius");
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    if (elevation == null) dart.nullFailed(L0, 1836, 19, "elevation");
    let color = opts && 'color' in opts ? opts.color : null;
    if (color == null) dart.nullFailed(L0, 1837, 19, "color");
    let animateColor = opts && 'animateColor' in opts ? opts.animateColor : true;
    if (animateColor == null) dart.nullFailed(L0, 1838, 10, "animateColor");
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    if (shadowColor == null) dart.nullFailed(L0, 1839, 19, "shadowColor");
    let animateShadowColor = opts && 'animateShadowColor' in opts ? opts.animateShadowColor : true;
    if (animateShadowColor == null) dart.nullFailed(L0, 1840, 10, "animateShadowColor");
    let curve = opts && 'curve' in opts ? opts.curve : C0 || CT.C0;
    if (curve == null) dart.nullFailed(L0, 1841, 11, "curve");
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 1842, 23, "duration");
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$6] = child;
    this[shape$] = shape;
    this[clipBehavior$0] = clipBehavior;
    this[borderRadius$] = borderRadius;
    this[elevation$] = elevation;
    this[color$] = color;
    this[animateColor$] = animateColor;
    this[shadowColor$] = shadowColor;
    this[animateShadowColor$] = animateShadowColor;
    if (!(child != null)) dart.assertFailed(null, L0, 1844, 15, "child != null");
    if (!(shape != null)) dart.assertFailed(null, L0, 1845, 15, "shape != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 1846, 15, "clipBehavior != null");
    if (!(borderRadius != null)) dart.assertFailed(null, L0, 1847, 15, "borderRadius != null");
    if (!(elevation != null && dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, L0, 1848, 15, "elevation != null && elevation >= 0.0");
    if (!(color != null)) dart.assertFailed(null, L0, 1849, 15, "color != null");
    if (!(shadowColor != null)) dart.assertFailed(null, L0, 1850, 15, "shadowColor != null");
    if (!(animateColor != null)) dart.assertFailed(null, L0, 1851, 15, "animateColor != null");
    if (!(animateShadowColor != null)) dart.assertFailed(null, L0, 1852, 15, "animateShadowColor != null");
    implicit_animations.AnimatedPhysicalModel.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPhysicalModel.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPhysicalModel);
  dart.addTypeCaches(implicit_animations.AnimatedPhysicalModel);
  dart.setMethodSignature(implicit_animations.AnimatedPhysicalModel, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPhysicalModel.__proto__),
    createState: dart.fnType(implicit_animations._AnimatedPhysicalModelState, [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPhysicalModel, L1);
  dart.setFieldSignature(implicit_animations.AnimatedPhysicalModel, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPhysicalModel.__proto__),
    child: dart.finalFieldType(framework.Widget),
    shape: dart.finalFieldType(box_border.BoxShape),
    clipBehavior: dart.finalFieldType(ui.Clip),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    elevation: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    animateColor: dart.finalFieldType(core.bool),
    shadowColor: dart.finalFieldType(ui.Color),
    animateShadowColor: dart.finalFieldType(core.bool)
  }));
  var _borderRadius = dart.privateName(implicit_animations, "_borderRadius");
  var _elevation = dart.privateName(implicit_animations, "_elevation");
  var _color = dart.privateName(implicit_animations, "_color");
  var _shadowColor = dart.privateName(implicit_animations, "_shadowColor");
  var C73;
  var C74;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C72;
  var C71;
  implicit_animations._AnimatedPhysicalModelState = class _AnimatedPhysicalModelState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPhysicalModel) {
    forEachTween(visitor) {
      if (visitor == null) dart.nullFailed(L0, 1914, 43, "visitor");
      this[_borderRadius] = BorderRadiusTweenN().as(visitor(this[_borderRadius], this.widget.borderRadius, dart.fn(value => new implicit_animations.BorderRadiusTween.new({begin: border_radius.BorderRadius.as(value)}), dynamicToBorderRadiusTween())));
      this[_elevation] = TweenNOfdouble().as(visitor(this[_elevation], this.widget.elevation, dart.fn(value => new (TweenOfdouble()).new({begin: core.double.as(value)}), dynamicToTweenOfdouble())));
      this[_color] = ColorTweenN().as(visitor(this[_color], this.widget.color, dart.fn(value => new tween.ColorTween.new({begin: ui.Color.as(value)}), dynamicToColorTween())));
      this[_shadowColor] = ColorTweenN().as(visitor(this[_shadowColor], this.widget.shadowColor, dart.fn(value => new tween.ColorTween.new({begin: ui.Color.as(value)}), dynamicToColorTween())));
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 1922, 29, "context");
      return new basic.PhysicalModel.new({child: this.widget.child, shape: this.widget.shape, clipBehavior: this.widget.clipBehavior, borderRadius: dart.nullCheck(this[_borderRadius]).evaluate(dart.nullCheck(this.animation)), elevation: dart.nullCheck(this[_elevation]).evaluate(dart.nullCheck(this.animation)), color: dart.test(this.widget.animateColor) ? dart.nullCheck(dart.nullCheck(this[_color]).evaluate(dart.nullCheck(this.animation))) : this.widget.color, shadowColor: dart.test(this.widget.animateShadowColor) ? dart.nullCheck(dart.nullCheck(this[_shadowColor]).evaluate(dart.nullCheck(this.animation))) : this.widget.shadowColor, $creationLocationd_0dea112b090073317d4: C71 || CT.C71});
    }
  };
  (implicit_animations._AnimatedPhysicalModelState.new = function() {
    this[_borderRadius] = null;
    this[_elevation] = null;
    this[_color] = null;
    this[_shadowColor] = null;
    implicit_animations._AnimatedPhysicalModelState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPhysicalModelState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPhysicalModelState);
  dart.addTypeCaches(implicit_animations._AnimatedPhysicalModelState);
  dart.setMethodSignature(implicit_animations._AnimatedPhysicalModelState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPhysicalModelState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPhysicalModelState, L1);
  dart.setFieldSignature(implicit_animations._AnimatedPhysicalModelState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPhysicalModelState.__proto__),
    [_borderRadius]: dart.fieldType(dart.nullable(implicit_animations.BorderRadiusTween)),
    [_elevation]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_color]: dart.fieldType(dart.nullable(tween.ColorTween)),
    [_shadowColor]: dart.fieldType(dart.nullable(tween.ColorTween))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/implicit_animations.dart", {
    "package:flutter/src/widgets/implicit_animations.dart": implicit_animations
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["implicit_animations.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/implicit_animations.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__implicit_animations: implicit_animations
  };
}));

//# sourceMappingURL=implicit_animations.dart.lib.js.map
