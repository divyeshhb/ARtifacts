define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/cupertino/activity_indicator.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__material__progress_indicator_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__cupertino__activity_indicator$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const transitions = packages__flutter__src__widgets__widget_span$46dart.src__widgets__transitions;
  const ticker_provider = packages__flutter__src__widgets__widget_span$46dart.src__widgets__ticker_provider;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const activity_indicator = packages__flutter__src__cupertino__activity_indicator$46dart.src__cupertino__activity_indicator;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var progress_indicator = Object.create(dart.library);
  var $round = dartx.round;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  var _ActivityIndicatorTypeL = () => (_ActivityIndicatorTypeL = dart.constFn(dart.legacy(progress_indicator._ActivityIndicatorType)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var doubleAnddoubleTovoid = () => (doubleAnddoubleTovoid = dart.constFn(dart.fnType(dart.void, [core.double, core.double])))();
  var WidgetN = () => (WidgetN = dart.constFn(dart.nullable(framework.Widget)))();
  var BuildContextAndWidgetNToWidget = () => (BuildContextAndWidgetNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, WidgetN()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart";
  var L1 = "package:flutter/src/material/progress_indicator.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_name$]: "_ActivityIndicatorType.material",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_name$]: "_ActivityIndicatorType.adaptive",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], _ActivityIndicatorTypeL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 7,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 129,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.8,
        [Cubic_b]: 0,
        [Cubic_a]: 0.2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C11 || CT.C11,
        [Interval_end]: 0.4166666666666667,
        [Interval_begin]: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C13 || CT.C13,
        [Interval_end]: 0.6016666666666667,
        [Interval_begin]: 0.185
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.65,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C15 || CT.C15,
        [Interval_end]: 0.8705555555555555,
        [Interval_begin]: 0.5555555555555556
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.45,
        [Cubic_b]: 0,
        [Cubic_a]: 0.1
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C17 || CT.C17,
        [Interval_end]: 1,
        [Interval_begin]: 0.7038888888888889
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1800000
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 11,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], _LocationL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 368,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], _LocationL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 363,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 388,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2961926000.0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 39,
        [_Location_line]: 644,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], _LocationL());
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 644,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 36,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 36
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 11,
        [_Location_line]: 656,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], _LocationL());
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 655,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 651,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 655,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], _LocationL());
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 650,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 673,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 674,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], _LocationL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 672,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.macOS",
        index: 4
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.android",
        index: 0
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.linux",
        index: 3
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.windows",
        index: 5
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C53 || CT.C53,
        [Interval_end]: 0.5,
        [Interval_begin]: 0
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: curves.SawTooth.prototype,
        [SawTooth_count]: 2222
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C53 || CT.C53,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: curves.SawTooth.prototype,
        [SawTooth_count]: 1333
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 12
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 15,
        [_Location_line]: 843,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], _LocationL());
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 842,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 841,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 842,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], _LocationL());
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 840,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 11,
        [_Location_line]: 837,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 838,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 839,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 840,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], _LocationL());
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 836,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 833,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 834,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 835,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 836,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], _LocationL());
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 832,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/progress_indicator.dart"
      });
    }
  }, false);
  var _name$ = dart.privateName(progress_indicator, "_name");
  var C0;
  var C1;
  var C2;
  progress_indicator._ActivityIndicatorType = class _ActivityIndicatorType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (progress_indicator._ActivityIndicatorType.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 18, 6, "index");
    if (_name == null) dart.nullFailed(L0, 18, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = progress_indicator._ActivityIndicatorType.prototype;
  dart.addTypeTests(progress_indicator._ActivityIndicatorType);
  dart.addTypeCaches(progress_indicator._ActivityIndicatorType);
  dart.setLibraryUri(progress_indicator._ActivityIndicatorType, L1);
  dart.setFieldSignature(progress_indicator._ActivityIndicatorType, () => ({
    __proto__: dart.getFields(progress_indicator._ActivityIndicatorType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(progress_indicator._ActivityIndicatorType, ['toString']);
  progress_indicator._ActivityIndicatorType.material = C0 || CT.C0;
  progress_indicator._ActivityIndicatorType.adaptive = C1 || CT.C1;
  progress_indicator._ActivityIndicatorType.values = C2 || CT.C2;
  var _getBackgroundColor = dart.privateName(progress_indicator, "_getBackgroundColor");
  var _getValueColor = dart.privateName(progress_indicator, "_getValueColor");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C5;
  var C6;
  var C7;
  var C4;
  var C3;
  var _buildSemanticsWrapper = dart.privateName(progress_indicator, "_buildSemanticsWrapper");
  var value$ = dart.privateName(progress_indicator, "ProgressIndicator.value");
  var backgroundColor$ = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  var valueColor$ = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  var semanticsLabel$ = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  var semanticsValue$ = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  progress_indicator.ProgressIndicator = class ProgressIndicator extends framework.StatefulWidget {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get valueColor() {
      return this[valueColor$];
    }
    set valueColor(value) {
      super.valueColor = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    get semanticsValue() {
      return this[semanticsValue$];
    }
    set semanticsValue(value) {
      super.semanticsValue = value;
    }
    [_getBackgroundColor](context) {
      let t0;
      if (context == null) dart.nullFailed(L0, 112, 42, "context");
      t0 = this.backgroundColor;
      return t0 == null ? theme$.Theme.of(context).backgroundColor : t0;
    }
    [_getValueColor](context) {
      let t0, t0$;
      if (context == null) dart.nullFailed(L0, 113, 37, "context");
      t0$ = (t0 = this.valueColor, t0 == null ? null : t0.value);
      return t0$ == null ? theme$.Theme.of(context).accentColor : t0$;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 116, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.PercentProperty.new("value", this.value, {showName: false, ifNull: "<indeterminate>"}));
    }
    [_buildSemanticsWrapper](opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      if (context == null) dart.nullFailed(L0, 122, 27, "context");
      let child = opts && 'child' in opts ? opts.child : null;
      if (child == null) dart.nullFailed(L0, 123, 21, "child");
      let expandedSemanticsValue = this.semanticsValue;
      if (this.value != null) {
        expandedSemanticsValue == null ? expandedSemanticsValue = dart.str((dart.nullCheck(this.value) * 100)[$round]()) + "%" : null;
      }
      return new basic.Semantics.new({label: this.semanticsLabel, value: expandedSemanticsValue, child: child, $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (progress_indicator.ProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[value$] = value;
    this[backgroundColor$] = backgroundColor;
    this[valueColor$] = valueColor;
    this[semanticsLabel$] = semanticsLabel;
    this[semanticsValue$] = semanticsValue;
    progress_indicator.ProgressIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.ProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.ProgressIndicator);
  dart.addTypeCaches(progress_indicator.ProgressIndicator);
  dart.setMethodSignature(progress_indicator.ProgressIndicator, () => ({
    __proto__: dart.getMethods(progress_indicator.ProgressIndicator.__proto__),
    [_getBackgroundColor]: dart.fnType(ui.Color, [framework.BuildContext]),
    [_getValueColor]: dart.fnType(ui.Color, [framework.BuildContext]),
    [_buildSemanticsWrapper]: dart.fnType(framework.Widget, [], {}, {child: framework.Widget, context: framework.BuildContext})
  }));
  dart.setLibraryUri(progress_indicator.ProgressIndicator, L1);
  dart.setFieldSignature(progress_indicator.ProgressIndicator, () => ({
    __proto__: dart.getFields(progress_indicator.ProgressIndicator.__proto__),
    value: dart.finalFieldType(dart.nullable(core.double)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    valueColor: dart.finalFieldType(dart.nullable(animation.Animation$(dart.nullable(ui.Color)))),
    semanticsLabel: dart.finalFieldType(dart.nullable(core.String)),
    semanticsValue: dart.finalFieldType(dart.nullable(core.String))
  }));
  var _name = dart.privateName(ui, "_name");
  var C8;
  var C9;
  var backgroundColor$0 = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.backgroundColor");
  var valueColor$0 = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.valueColor");
  var value$0 = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.value");
  var animationValue$ = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.animationValue");
  var textDirection$ = dart.privateName(progress_indicator, "_LinearProgressIndicatorPainter.textDirection");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C11;
  var Interval_curve = dart.privateName(curves, "Interval.curve");
  var Interval_end = dart.privateName(curves, "Interval.end");
  var Interval_begin = dart.privateName(curves, "Interval.begin");
  var C10;
  var C13;
  var C12;
  var C15;
  var C14;
  var C17;
  var C16;
  progress_indicator._LinearProgressIndicatorPainter = class _LinearProgressIndicatorPainter extends custom_paint.CustomPainter {
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get valueColor() {
      return this[valueColor$0];
    }
    set valueColor(value) {
      super.valueColor = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get animationValue() {
      return this[animationValue$];
    }
    set animationValue(value) {
      super.animationValue = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    paint(canvas, size) {
      let t0;
      if (canvas == null) dart.nullFailed(L0, 176, 21, "canvas");
      if (size == null) dart.nullFailed(L0, 176, 34, "size");
      let paint = (t0 = ui.Paint.new(), (() => {
        t0.color = this.backgroundColor;
        t0.style = ui.PaintingStyle.fill;
        return t0;
      })());
      canvas.drawRect(ui.Offset.zero['&'](size), paint);
      paint.color = this.valueColor;
      const drawBar = (x, width) => {
        if (x == null) dart.nullFailed(L0, 184, 25, "x");
        if (width == null) dart.nullFailed(L0, 184, 35, "width");
        if (dart.notNull(width) <= 0.0) return;
        let left = null;
        switch (this.textDirection) {
          case C8 || CT.C8:
          {
            left = dart.notNull(size.width) - dart.notNull(width) - dart.notNull(x);
            break;
          }
          case C9 || CT.C9:
          {
            left = x;
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        canvas.drawRect(new ui.Offset.new(left, 0.0)['&'](new ui.Size.new(width, size.height)), paint);
      };
      dart.fn(drawBar, doubleAnddoubleTovoid());
      if (this.value != null) {
        drawBar(0.0, dart.nullCheck(this.value)[$clamp](0.0, 1.0) * dart.notNull(size.width));
      } else {
        let x1 = dart.notNull(size.width) * dart.notNull(progress_indicator._LinearProgressIndicatorPainter.line1Tail.transform(this.animationValue));
        let width1 = dart.notNull(size.width) * dart.notNull(progress_indicator._LinearProgressIndicatorPainter.line1Head.transform(this.animationValue)) - x1;
        let x2 = dart.notNull(size.width) * dart.notNull(progress_indicator._LinearProgressIndicatorPainter.line2Tail.transform(this.animationValue));
        let width2 = dart.notNull(size.width) * dart.notNull(progress_indicator._LinearProgressIndicatorPainter.line2Head.transform(this.animationValue)) - x2;
        drawBar(x1, width1);
        drawBar(x2, width2);
      }
    }
    shouldRepaint(oldPainter) {
      progress_indicator._LinearProgressIndicatorPainter.as(oldPainter);
      if (oldPainter == null) dart.nullFailed(L0, 215, 54, "oldPainter");
      return !dart.equals(oldPainter.backgroundColor, this.backgroundColor) || !dart.equals(oldPainter.valueColor, this.valueColor) || oldPainter.value != this.value || oldPainter.animationValue != this.animationValue || !dart.equals(oldPainter.textDirection, this.textDirection);
    }
  };
  (progress_indicator._LinearProgressIndicatorPainter.new = function(opts) {
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    if (backgroundColor == null) dart.nullFailed(L0, 139, 19, "backgroundColor");
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    if (valueColor == null) dart.nullFailed(L0, 140, 19, "valueColor");
    let value = opts && 'value' in opts ? opts.value : null;
    let animationValue = opts && 'animationValue' in opts ? opts.animationValue : null;
    if (animationValue == null) dart.nullFailed(L0, 142, 19, "animationValue");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (textDirection == null) dart.nullFailed(L0, 143, 19, "textDirection");
    this[backgroundColor$0] = backgroundColor;
    this[valueColor$0] = valueColor;
    this[value$0] = value;
    this[animationValue$] = animationValue;
    this[textDirection$] = textDirection;
    if (!(textDirection != null)) dart.assertFailed(null, L0, 144, 15, "textDirection != null");
    progress_indicator._LinearProgressIndicatorPainter.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._LinearProgressIndicatorPainter.prototype;
  dart.addTypeTests(progress_indicator._LinearProgressIndicatorPainter);
  dart.addTypeCaches(progress_indicator._LinearProgressIndicatorPainter);
  dart.setMethodSignature(progress_indicator._LinearProgressIndicatorPainter, () => ({
    __proto__: dart.getMethods(progress_indicator._LinearProgressIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(progress_indicator._LinearProgressIndicatorPainter, L1);
  dart.setFieldSignature(progress_indicator._LinearProgressIndicatorPainter, () => ({
    __proto__: dart.getFields(progress_indicator._LinearProgressIndicatorPainter.__proto__),
    backgroundColor: dart.finalFieldType(ui.Color),
    valueColor: dart.finalFieldType(ui.Color),
    value: dart.finalFieldType(dart.nullable(core.double)),
    animationValue: dart.finalFieldType(core.double),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  dart.defineLazy(progress_indicator._LinearProgressIndicatorPainter, {
    /*progress_indicator._LinearProgressIndicatorPainter.line1Head*/get line1Head() {
      return C10 || CT.C10;
    },
    /*progress_indicator._LinearProgressIndicatorPainter.line1Tail*/get line1Tail() {
      return C12 || CT.C12;
    },
    /*progress_indicator._LinearProgressIndicatorPainter.line2Head*/get line2Head() {
      return C14 || CT.C14;
    },
    /*progress_indicator._LinearProgressIndicatorPainter.line2Tail*/get line2Tail() {
      return C16 || CT.C16;
    }
  }, false);
  var minHeight$ = dart.privateName(progress_indicator, "LinearProgressIndicator.minHeight");
  progress_indicator.LinearProgressIndicator = class LinearProgressIndicator extends progress_indicator.ProgressIndicator {
    get minHeight() {
      return this[minHeight$];
    }
    set minHeight(value) {
      super.minHeight = value;
    }
    createState() {
      return new progress_indicator._LinearProgressIndicatorState.new();
    }
  };
  (progress_indicator.LinearProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[minHeight$] = minHeight;
    if (!(minHeight == null || dart.notNull(minHeight) > 0)) dart.assertFailed(null, L0, 312, 15, "minHeight == null || minHeight > 0");
    progress_indicator.LinearProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, valueColor: valueColor, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.LinearProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.LinearProgressIndicator);
  dart.addTypeCaches(progress_indicator.LinearProgressIndicator);
  dart.setMethodSignature(progress_indicator.LinearProgressIndicator, () => ({
    __proto__: dart.getMethods(progress_indicator.LinearProgressIndicator.__proto__),
    createState: dart.fnType(progress_indicator._LinearProgressIndicatorState, [])
  }));
  dart.setLibraryUri(progress_indicator.LinearProgressIndicator, L1);
  dart.setFieldSignature(progress_indicator.LinearProgressIndicator, () => ({
    __proto__: dart.getFields(progress_indicator.LinearProgressIndicator.__proto__),
    minHeight: dart.finalFieldType(dart.nullable(core.double))
  }));
  var ___LinearProgressIndicatorState__controller = dart.privateName(progress_indicator, "_#_LinearProgressIndicatorState#_controller");
  var ___LinearProgressIndicatorState__controller_isSet = dart.privateName(progress_indicator, "_#_LinearProgressIndicatorState#_controller#isSet");
  var _controller = dart.privateName(progress_indicator, "_controller");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C18;
  var C21;
  var C20;
  var C19;
  var C24;
  var C25;
  var C23;
  var C22;
  var _buildIndicator = dart.privateName(progress_indicator, "_buildIndicator");
  var C28;
  var C29;
  var C27;
  var C26;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(progress_indicator.LinearProgressIndicator) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.LinearProgressIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.LinearProgressIndicator));
  progress_indicator._LinearProgressIndicatorState = class _LinearProgressIndicatorState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t0;
      return dart.test(this[___LinearProgressIndicatorState__controller_isSet]) ? (t0 = this[___LinearProgressIndicatorState__controller], t0) : dart.throw(new _internal.LateError.fieldNI("_controller"));
    }
    set [_controller](t0) {
      if (t0 == null) dart.nullFailed(L0, 332, 28, "null");
      this[___LinearProgressIndicatorState__controller_isSet] = true;
      this[___LinearProgressIndicatorState__controller] = t0;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C18 || CT.C18, vsync: this});
      if (this.widget.value == null) this[_controller].repeat();
    }
    didUpdateWidget(oldWidget) {
      progress_indicator.LinearProgressIndicator.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 346, 48, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (this.widget.value == null && !dart.test(this[_controller].isAnimating))
        this[_controller].repeat();
      else if (this.widget.value != null && dart.test(this[_controller].isAnimating)) this[_controller].stop();
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_buildIndicator](context, animationValue, textDirection) {
      let t1;
      if (context == null) dart.nullFailed(L0, 360, 39, "context");
      if (animationValue == null) dart.nullFailed(L0, 360, 55, "animationValue");
      if (textDirection == null) dart.nullFailed(L0, 360, 85, "textDirection");
      return this.widget[_buildSemanticsWrapper]({context: context, child: new container.Container.new({constraints: new box.BoxConstraints.new({minWidth: 1 / 0, minHeight: (t1 = this.widget.minHeight, t1 == null ? 4.0 : t1)}), child: new basic.CustomPaint.new({painter: new progress_indicator._LinearProgressIndicatorPainter.new({backgroundColor: this.widget[_getBackgroundColor](context), valueColor: this.widget[_getValueColor](context), value: this.widget.value, animationValue: animationValue, textDirection: textDirection}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22})});
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 382, 29, "context");
      let textDirection = basic.Directionality.of(context);
      if (this.widget.value != null) return this[_buildIndicator](context, this[_controller].value, textDirection);
      return new transitions.AnimatedBuilder.new({animation: this[_controller].view, builder: dart.fn((context, child) => {
          if (context == null) dart.nullFailed(L0, 390, 30, "context");
          return this[_buildIndicator](context, this[_controller].value, textDirection);
        }, BuildContextAndWidgetNToWidget()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
    }
  };
  (progress_indicator._LinearProgressIndicatorState.new = function() {
    this[___LinearProgressIndicatorState__controller] = null;
    this[___LinearProgressIndicatorState__controller_isSet] = false;
    progress_indicator._LinearProgressIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._LinearProgressIndicatorState.prototype;
  dart.addTypeTests(progress_indicator._LinearProgressIndicatorState);
  dart.addTypeCaches(progress_indicator._LinearProgressIndicatorState);
  dart.setMethodSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getMethods(progress_indicator._LinearProgressIndicatorState.__proto__),
    [_buildIndicator]: dart.fnType(framework.Widget, [framework.BuildContext, core.double, ui.TextDirection]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getGetters(progress_indicator._LinearProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getSetters(progress_indicator._LinearProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(progress_indicator._LinearProgressIndicatorState, L1);
  dart.setFieldSignature(progress_indicator._LinearProgressIndicatorState, () => ({
    __proto__: dart.getFields(progress_indicator._LinearProgressIndicatorState.__proto__),
    [___LinearProgressIndicatorState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___LinearProgressIndicatorState__controller_isSet]: dart.fieldType(core.bool)
  }));
  progress_indicator._CircularProgressIndicatorPainter = class _CircularProgressIndicatorPainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let t1, t1$;
      if (canvas == null) dart.nullFailed(L0, 432, 21, "canvas");
      if (size == null) dart.nullFailed(L0, 432, 34, "size");
      let paint = (t1 = ui.Paint.new(), (() => {
        t1.color = this.valueColor;
        t1.strokeWidth = this.strokeWidth;
        t1.style = ui.PaintingStyle.stroke;
        return t1;
      })());
      if (this.backgroundColor != null) {
        let backgroundPaint = (t1$ = ui.Paint.new(), (() => {
          t1$.color = dart.nullCheck(this.backgroundColor);
          t1$.strokeWidth = this.strokeWidth;
          t1$.style = ui.PaintingStyle.stroke;
          return t1$;
        })());
        canvas.drawArc(ui.Offset.zero['&'](size), 0.0, 6.282185307179586, false, backgroundPaint);
      }
      if (this.value == null) paint.strokeCap = ui.StrokeCap.square;
      canvas.drawArc(ui.Offset.zero['&'](size), this.arcStart, this.arcSweep, false, paint);
    }
    shouldRepaint(oldPainter) {
      progress_indicator._CircularProgressIndicatorPainter.as(oldPainter);
      if (oldPainter == null) dart.nullFailed(L0, 452, 56, "oldPainter");
      return !dart.equals(oldPainter.backgroundColor, this.backgroundColor) || !dart.equals(oldPainter.valueColor, this.valueColor) || oldPainter.value != this.value || oldPainter.headValue != this.headValue || oldPainter.tailValue != this.tailValue || oldPainter.offsetValue != this.offsetValue || oldPainter.rotationValue != this.rotationValue || oldPainter.strokeWidth != this.strokeWidth;
    }
  };
  (progress_indicator._CircularProgressIndicatorPainter.new = function(opts) {
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    if (valueColor == null) dart.nullFailed(L0, 400, 19, "valueColor");
    let value = opts && 'value' in opts ? opts.value : null;
    let headValue = opts && 'headValue' in opts ? opts.headValue : null;
    if (headValue == null) dart.nullFailed(L0, 402, 19, "headValue");
    let tailValue = opts && 'tailValue' in opts ? opts.tailValue : null;
    if (tailValue == null) dart.nullFailed(L0, 403, 19, "tailValue");
    let offsetValue = opts && 'offsetValue' in opts ? opts.offsetValue : null;
    if (offsetValue == null) dart.nullFailed(L0, 404, 19, "offsetValue");
    let rotationValue = opts && 'rotationValue' in opts ? opts.rotationValue : null;
    if (rotationValue == null) dart.nullFailed(L0, 405, 19, "rotationValue");
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    if (strokeWidth == null) dart.nullFailed(L0, 406, 19, "strokeWidth");
    this.backgroundColor = backgroundColor;
    this.valueColor = valueColor;
    this.value = value;
    this.headValue = headValue;
    this.tailValue = tailValue;
    this.offsetValue = offsetValue;
    this.rotationValue = rotationValue;
    this.strokeWidth = strokeWidth;
    this.arcStart = value != null ? -1.5707963267948966 : -1.5707963267948966 + dart.notNull(tailValue) * 3 / 2 * 3.141592653589793 + dart.notNull(rotationValue) * 3.141592653589793 * 2.0 + dart.notNull(offsetValue) * 0.5 * 3.141592653589793;
    this.arcSweep = value != null ? value[$clamp](0.0, 1.0) * 6.282185307179586 : math.max(core.double, dart.notNull(headValue) * 3 / 2 * 3.141592653589793 - dart.notNull(tailValue) * 3 / 2 * 3.141592653589793, 0.001);
    progress_indicator._CircularProgressIndicatorPainter.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._CircularProgressIndicatorPainter.prototype;
  dart.addTypeTests(progress_indicator._CircularProgressIndicatorPainter);
  dart.addTypeCaches(progress_indicator._CircularProgressIndicatorPainter);
  dart.setMethodSignature(progress_indicator._CircularProgressIndicatorPainter, () => ({
    __proto__: dart.getMethods(progress_indicator._CircularProgressIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(progress_indicator._CircularProgressIndicatorPainter, L1);
  dart.setFieldSignature(progress_indicator._CircularProgressIndicatorPainter, () => ({
    __proto__: dart.getFields(progress_indicator._CircularProgressIndicatorPainter.__proto__),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    valueColor: dart.finalFieldType(ui.Color),
    value: dart.finalFieldType(dart.nullable(core.double)),
    headValue: dart.finalFieldType(core.double),
    tailValue: dart.finalFieldType(core.double),
    offsetValue: dart.finalFieldType(core.double),
    rotationValue: dart.finalFieldType(core.double),
    strokeWidth: dart.finalFieldType(core.double),
    arcStart: dart.finalFieldType(core.double),
    arcSweep: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(progress_indicator._CircularProgressIndicatorPainter, {
    /*progress_indicator._CircularProgressIndicatorPainter._twoPi*/get _twoPi() {
      return 6.283185307179586;
    },
    /*progress_indicator._CircularProgressIndicatorPainter._epsilon*/get _epsilon() {
      return 0.001;
    },
    /*progress_indicator._CircularProgressIndicatorPainter._sweep*/get _sweep() {
      return 6.282185307179586;
    },
    /*progress_indicator._CircularProgressIndicatorPainter._startAngle*/get _startAngle() {
      return -1.5707963267948966;
    }
  }, false);
  var _indicatorType = dart.privateName(progress_indicator, "_indicatorType");
  var _indicatorType$ = dart.privateName(progress_indicator, "CircularProgressIndicator._indicatorType");
  var strokeWidth$ = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  progress_indicator.CircularProgressIndicator = class CircularProgressIndicator extends progress_indicator.ProgressIndicator {
    get [_indicatorType]() {
      return this[_indicatorType$];
    }
    set [_indicatorType](value) {
      super[_indicatorType] = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    createState() {
      return new progress_indicator._CircularProgressIndicatorState.new();
    }
  };
  (progress_indicator.CircularProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 4;
    if (strokeWidth == null) dart.nullFailed(L0, 547, 10, "strokeWidth");
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[strokeWidth$] = strokeWidth;
    this[_indicatorType$] = progress_indicator._ActivityIndicatorType.material;
    progress_indicator.CircularProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, valueColor: valueColor, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.CircularProgressIndicator.prototype;
  (progress_indicator.CircularProgressIndicator.adaptive = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 4;
    if (strokeWidth == null) dart.nullFailed(L0, 573, 10, "strokeWidth");
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[strokeWidth$] = strokeWidth;
    this[_indicatorType$] = progress_indicator._ActivityIndicatorType.adaptive;
    progress_indicator.CircularProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, valueColor: valueColor, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.CircularProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.CircularProgressIndicator);
  dart.addTypeCaches(progress_indicator.CircularProgressIndicator);
  dart.setMethodSignature(progress_indicator.CircularProgressIndicator, () => ({
    __proto__: dart.getMethods(progress_indicator.CircularProgressIndicator.__proto__),
    createState: dart.fnType(progress_indicator._CircularProgressIndicatorState, [])
  }));
  dart.setLibraryUri(progress_indicator.CircularProgressIndicator, L1);
  dart.setFieldSignature(progress_indicator.CircularProgressIndicator, () => ({
    __proto__: dart.getFields(progress_indicator.CircularProgressIndicator.__proto__),
    [_indicatorType]: dart.finalFieldType(progress_indicator._ActivityIndicatorType),
    strokeWidth: dart.finalFieldType(core.double)
  }));
  var ___CircularProgressIndicatorState__controller = dart.privateName(progress_indicator, "_#_CircularProgressIndicatorState#_controller");
  var ___CircularProgressIndicatorState__controller_isSet = dart.privateName(progress_indicator, "_#_CircularProgressIndicatorState#_controller#isSet");
  var C30;
  var C33;
  var C32;
  var C31;
  var _buildCupertinoIndicator = dart.privateName(progress_indicator, "_buildCupertinoIndicator");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var C34;
  var C37;
  var C36;
  var C35;
  var C40;
  var C41;
  var C39;
  var C38;
  var _buildMaterialIndicator = dart.privateName(progress_indicator, "_buildMaterialIndicator");
  var C44;
  var C45;
  var C43;
  var C42;
  var _buildAnimation = dart.privateName(progress_indicator, "_buildAnimation");
  var _name$0 = dart.privateName(platform, "_name");
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C53;
  var C52;
  var SawTooth_count = dart.privateName(curves, "SawTooth.count");
  var C54;
  var C55;
  var C56;
  const State_SingleTickerProviderStateMixin$36$ = class State_SingleTickerProviderStateMixin extends framework.State$(progress_indicator.CircularProgressIndicator) {};
  (State_SingleTickerProviderStateMixin$36$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.CircularProgressIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$, ticker_provider.SingleTickerProviderStateMixin$(progress_indicator.CircularProgressIndicator));
  progress_indicator._CircularProgressIndicatorState = class _CircularProgressIndicatorState extends State_SingleTickerProviderStateMixin$36$ {
    get [_controller]() {
      let t1;
      return dart.test(this[___CircularProgressIndicatorState__controller_isSet]) ? (t1 = this[___CircularProgressIndicatorState__controller], t1) : dart.throw(new _internal.LateError.fieldNI("_controller"));
    }
    set [_controller](t1) {
      if (t1 == null) dart.nullFailed(L0, 615, 28, "null");
      this[___CircularProgressIndicatorState__controller_isSet] = true;
      this[___CircularProgressIndicatorState__controller] = t1;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: C30 || CT.C30, vsync: this});
      if (this.widget.value == null) this[_controller].repeat();
    }
    didUpdateWidget(oldWidget) {
      progress_indicator.CircularProgressIndicator.as(oldWidget);
      if (oldWidget == null) dart.nullFailed(L0, 629, 50, "oldWidget");
      super.didUpdateWidget(oldWidget);
      if (this.widget.value == null && !dart.test(this[_controller].isAnimating))
        this[_controller].repeat();
      else if (this.widget.value != null && dart.test(this[_controller].isAnimating)) this[_controller].stop();
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_buildCupertinoIndicator](context) {
      if (context == null) dart.nullFailed(L0, 643, 48, "context");
      return new activity_indicator.CupertinoActivityIndicator.new({key: this.widget.key, $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
    [_buildMaterialIndicator](context, headValue, tailValue, offsetValue, rotationValue) {
      if (context == null) dart.nullFailed(L0, 647, 47, "context");
      if (headValue == null) dart.nullFailed(L0, 647, 63, "headValue");
      if (tailValue == null) dart.nullFailed(L0, 647, 81, "tailValue");
      if (offsetValue == null) dart.nullFailed(L0, 647, 99, "offsetValue");
      if (rotationValue == null) dart.nullFailed(L0, 647, 119, "rotationValue");
      return this.widget[_buildSemanticsWrapper]({context: context, child: new container.Container.new({constraints: C34 || CT.C34, child: new basic.CustomPaint.new({painter: new progress_indicator._CircularProgressIndicatorPainter.new({backgroundColor: this.widget.backgroundColor, valueColor: this.widget[_getValueColor](context), value: this.widget.value, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: this.widget.strokeWidth}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})});
    }
    [_buildAnimation]() {
      return new transitions.AnimatedBuilder.new({animation: this[_controller], builder: dart.fn((context, child) => {
          if (context == null) dart.nullFailed(L0, 674, 30, "context");
          return this[_buildMaterialIndicator](context, progress_indicator._CircularProgressIndicatorState._strokeHeadTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._strokeTailTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._offsetTween.evaluate(this[_controller]), progress_indicator._CircularProgressIndicatorState._rotationTween.evaluate(this[_controller]));
        }, BuildContextAndWidgetNToWidget()), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 687, 29, "context");
      switch (this.widget[_indicatorType]) {
        case C0 || CT.C0:
        {
          if (this.widget.value != null) return this[_buildMaterialIndicator](context, 0.0, 0.0, 0.0, 0.0);
          return this[_buildAnimation]();
        }
        case C1 || CT.C1:
        {
          let theme = theme$.Theme.of(context);
          if (!(theme.platform != null)) dart.assertFailed(null, L0, 695, 16, "theme.platform != null");
          switch (theme.platform) {
            case C46 || CT.C46:
            case C47 || CT.C47:
            {
              return this[_buildCupertinoIndicator](context);
            }
            case C48 || CT.C48:
            case C49 || CT.C49:
            case C50 || CT.C50:
            case C51 || CT.C51:
            {
              if (this.widget.value != null) return this[_buildMaterialIndicator](context, 0.0, 0.0, 0.0, 0.0);
              return this[_buildAnimation]();
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
  };
  (progress_indicator._CircularProgressIndicatorState.new = function() {
    this[___CircularProgressIndicatorState__controller] = null;
    this[___CircularProgressIndicatorState__controller_isSet] = false;
    progress_indicator._CircularProgressIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._CircularProgressIndicatorState.prototype;
  dart.addTypeTests(progress_indicator._CircularProgressIndicatorState);
  dart.addTypeCaches(progress_indicator._CircularProgressIndicatorState);
  dart.setMethodSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getMethods(progress_indicator._CircularProgressIndicatorState.__proto__),
    [_buildCupertinoIndicator]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildMaterialIndicator]: dart.fnType(framework.Widget, [framework.BuildContext, core.double, core.double, core.double, core.double]),
    [_buildAnimation]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getGetters(progress_indicator._CircularProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getSetters(progress_indicator._CircularProgressIndicatorState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(progress_indicator._CircularProgressIndicatorState, L1);
  dart.setFieldSignature(progress_indicator._CircularProgressIndicatorState, () => ({
    __proto__: dart.getFields(progress_indicator._CircularProgressIndicatorState.__proto__),
    [___CircularProgressIndicatorState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___CircularProgressIndicatorState__controller_isSet]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(progress_indicator._CircularProgressIndicatorState, {
    /*progress_indicator._CircularProgressIndicatorState._pathCount*/get _pathCount() {
      return 2222;
    },
    /*progress_indicator._CircularProgressIndicatorState._rotationCount*/get _rotationCount() {
      return 1333;
    },
    /*progress_indicator._CircularProgressIndicatorState._strokeHeadTween*/get _strokeHeadTween() {
      return new tween.CurveTween.new({curve: C52 || CT.C52}).chain(new tween.CurveTween.new({curve: C54 || CT.C54}));
    },
    /*progress_indicator._CircularProgressIndicatorState._strokeTailTween*/get _strokeTailTween() {
      return new tween.CurveTween.new({curve: C55 || CT.C55}).chain(new tween.CurveTween.new({curve: C54 || CT.C54}));
    },
    /*progress_indicator._CircularProgressIndicatorState._offsetTween*/get _offsetTween() {
      return new tween.CurveTween.new({curve: C54 || CT.C54});
    },
    /*progress_indicator._CircularProgressIndicatorState._rotationTween*/get _rotationTween() {
      return new tween.CurveTween.new({curve: C56 || CT.C56});
    }
  }, false);
  progress_indicator._RefreshProgressIndicatorPainter = class _RefreshProgressIndicatorPainter extends progress_indicator._CircularProgressIndicatorPainter {
    paintArrowhead(canvas, size) {
      let t2, t2$;
      if (canvas == null) dart.nullFailed(L0, 734, 30, "canvas");
      if (size == null) dart.nullFailed(L0, 734, 43, "size");
      let arcEnd = dart.notNull(this.arcStart) + dart.notNull(this.arcSweep);
      let ux = math.cos(arcEnd);
      let uy = math.sin(arcEnd);
      if (!(size.width == size.height)) dart.assertFailed(null, L0, 741, 12, "size.width == size.height");
      let radius = dart.notNull(size.width) / 2.0;
      let arrowheadPointX = radius + ux * radius + -uy * dart.notNull(this.strokeWidth) * 2.0 * dart.notNull(this.arrowheadScale);
      let arrowheadPointY = radius + uy * radius + ux * dart.notNull(this.strokeWidth) * 2.0 * dart.notNull(this.arrowheadScale);
      let arrowheadRadius = dart.notNull(this.strokeWidth) * 1.5 * dart.notNull(this.arrowheadScale);
      let innerRadius = radius - arrowheadRadius;
      let outerRadius = radius + arrowheadRadius;
      let path = (t2 = ui.Path.new(), (() => {
        t2.moveTo(radius + ux * innerRadius, radius + uy * innerRadius);
        t2.lineTo(radius + ux * outerRadius, radius + uy * outerRadius);
        t2.lineTo(arrowheadPointX, arrowheadPointY);
        t2.close();
        return t2;
      })());
      let paint = (t2$ = ui.Paint.new(), (() => {
        t2$.color = this.valueColor;
        t2$.strokeWidth = this.strokeWidth;
        t2$.style = ui.PaintingStyle.fill;
        return t2$;
      })());
      canvas.drawPath(path, paint);
    }
    paint(canvas, size) {
      if (canvas == null) dart.nullFailed(L0, 762, 21, "canvas");
      if (size == null) dart.nullFailed(L0, 762, 34, "size");
      super.paint(canvas, size);
      if (dart.notNull(this.arrowheadScale) > 0.0) this.paintArrowhead(canvas, size);
    }
  };
  (progress_indicator._RefreshProgressIndicatorPainter.new = function(opts) {
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    if (valueColor == null) dart.nullFailed(L0, 714, 20, "valueColor");
    let value = opts && 'value' in opts ? opts.value : null;
    let headValue = opts && 'headValue' in opts ? opts.headValue : null;
    if (headValue == null) dart.nullFailed(L0, 716, 21, "headValue");
    let tailValue = opts && 'tailValue' in opts ? opts.tailValue : null;
    if (tailValue == null) dart.nullFailed(L0, 717, 21, "tailValue");
    let offsetValue = opts && 'offsetValue' in opts ? opts.offsetValue : null;
    if (offsetValue == null) dart.nullFailed(L0, 718, 21, "offsetValue");
    let rotationValue = opts && 'rotationValue' in opts ? opts.rotationValue : null;
    if (rotationValue == null) dart.nullFailed(L0, 719, 21, "rotationValue");
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    if (strokeWidth == null) dart.nullFailed(L0, 720, 21, "strokeWidth");
    let arrowheadScale = opts && 'arrowheadScale' in opts ? opts.arrowheadScale : null;
    if (arrowheadScale == null) dart.nullFailed(L0, 721, 19, "arrowheadScale");
    this.arrowheadScale = arrowheadScale;
    progress_indicator._RefreshProgressIndicatorPainter.__proto__.new.call(this, {valueColor: valueColor, value: value, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: strokeWidth});
    ;
  }).prototype = progress_indicator._RefreshProgressIndicatorPainter.prototype;
  dart.addTypeTests(progress_indicator._RefreshProgressIndicatorPainter);
  dart.addTypeCaches(progress_indicator._RefreshProgressIndicatorPainter);
  dart.setMethodSignature(progress_indicator._RefreshProgressIndicatorPainter, () => ({
    __proto__: dart.getMethods(progress_indicator._RefreshProgressIndicatorPainter.__proto__),
    paintArrowhead: dart.fnType(dart.void, [ui.Canvas, ui.Size])
  }));
  dart.setLibraryUri(progress_indicator._RefreshProgressIndicatorPainter, L1);
  dart.setFieldSignature(progress_indicator._RefreshProgressIndicatorPainter, () => ({
    __proto__: dart.getFields(progress_indicator._RefreshProgressIndicatorPainter.__proto__),
    arrowheadScale: dart.finalFieldType(core.double)
  }));
  progress_indicator.RefreshProgressIndicator = class RefreshProgressIndicator extends progress_indicator.CircularProgressIndicator {
    createState() {
      return new progress_indicator._RefreshProgressIndicatorState.new();
    }
  };
  (progress_indicator.RefreshProgressIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let valueColor = opts && 'valueColor' in opts ? opts.valueColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : 2;
    if (strokeWidth == null) dart.nullFailed(L0, 794, 12, "strokeWidth");
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let semanticsValue = opts && 'semanticsValue' in opts ? opts.semanticsValue : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    progress_indicator.RefreshProgressIndicator.__proto__.new.call(this, {key: key, value: value, backgroundColor: backgroundColor, valueColor: valueColor, strokeWidth: strokeWidth, semanticsLabel: semanticsLabel, semanticsValue: semanticsValue, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator.RefreshProgressIndicator.prototype;
  dart.addTypeTests(progress_indicator.RefreshProgressIndicator);
  dart.addTypeCaches(progress_indicator.RefreshProgressIndicator);
  dart.setMethodSignature(progress_indicator.RefreshProgressIndicator, () => ({
    __proto__: dart.getMethods(progress_indicator.RefreshProgressIndicator.__proto__),
    createState: dart.fnType(progress_indicator._RefreshProgressIndicatorState, [])
  }));
  dart.setLibraryUri(progress_indicator.RefreshProgressIndicator, L1);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C57;
  var C58;
  var C61;
  var C60;
  var C59;
  var C64;
  var C65;
  var C63;
  var C62;
  var C68;
  var C69;
  var C70;
  var C71;
  var C67;
  var C66;
  var C74;
  var C75;
  var C76;
  var C77;
  var C73;
  var C72;
  progress_indicator._RefreshProgressIndicatorState = class _RefreshProgressIndicatorState extends progress_indicator._CircularProgressIndicatorState {
    build(context) {
      if (context == null) dart.nullFailed(L0, 819, 29, "context");
      if (this.widget.value != null)
        this[_controller].value = dart.nullCheck(this.widget.value) * (1333 / 2 / 2961926);
      else if (!dart.test(this[_controller].isAnimating)) this[_controller].repeat();
      return this[_buildAnimation]();
    }
    [_buildMaterialIndicator](context, headValue, tailValue, offsetValue, rotationValue) {
      let t2;
      if (context == null) dart.nullFailed(L0, 828, 47, "context");
      if (headValue == null) dart.nullFailed(L0, 828, 63, "headValue");
      if (tailValue == null) dart.nullFailed(L0, 828, 81, "tailValue");
      if (offsetValue == null) dart.nullFailed(L0, 828, 99, "offsetValue");
      if (rotationValue == null) dart.nullFailed(L0, 828, 119, "rotationValue");
      let arrowheadScale = this.widget.value == null ? 0.0 : (dart.nullCheck(this.widget.value) * 2.0)[$clamp](0.0, 1.0);
      return this.widget[_buildSemanticsWrapper]({context: context, child: new container.Container.new({width: 40, height: 40, margin: C57 || CT.C57, child: new material.Material.new({type: material.MaterialType.circle, color: (t2 = this.widget.backgroundColor, t2 == null ? theme$.Theme.of(context).canvasColor : t2), elevation: 2.0, child: new basic.Padding.new({padding: C58 || CT.C58, child: new basic.CustomPaint.new({painter: new progress_indicator._RefreshProgressIndicatorPainter.new({valueColor: this.widget[_getValueColor](context), value: null, headValue: headValue, tailValue: tailValue, offsetValue: offsetValue, rotationValue: rotationValue, strokeWidth: this.widget.strokeWidth, arrowheadScale: arrowheadScale}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72})});
    }
  };
  (progress_indicator._RefreshProgressIndicatorState.new = function() {
    progress_indicator._RefreshProgressIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator._RefreshProgressIndicatorState.prototype;
  dart.addTypeTests(progress_indicator._RefreshProgressIndicatorState);
  dart.addTypeCaches(progress_indicator._RefreshProgressIndicatorState);
  dart.setLibraryUri(progress_indicator._RefreshProgressIndicatorState, L1);
  dart.defineLazy(progress_indicator._RefreshProgressIndicatorState, {
    /*progress_indicator._RefreshProgressIndicatorState._indicatorSize*/get _indicatorSize() {
      return 40;
    }
  }, false);
  dart.defineLazy(progress_indicator, {
    /*progress_indicator._kMinCircularProgressIndicatorSize*/get _kMinCircularProgressIndicatorSize() {
      return 36;
    },
    /*progress_indicator._kIndeterminateLinearDuration*/get _kIndeterminateLinearDuration() {
      return 1800;
    },
    /*progress_indicator._kIndeterminateCircularDuration*/get _kIndeterminateCircularDuration() {
      return 2961926;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/progress_indicator.dart", {
    "package:flutter/src/material/progress_indicator.dart": progress_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["progress_indicator.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/progress_indicator.dart.lib.js"}');
  // Exports:
  return {
    src__material__progress_indicator: progress_indicator
  };
}));

//# sourceMappingURL=progress_indicator.dart.lib.js.map
