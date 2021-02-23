define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/widgets/layout_builder.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/widgets/scroll_simulation.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__widgets__draggable_scrollable_sheet_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__widgets__layout_builder$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__widgets__scroll_simulation$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const scroll_controller = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_controller;
  const notification_listener = packages__flutter__src__widgets__widget_span$46dart.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_notification;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const scroll_physics = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_physics;
  const scroll_context = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_context;
  const scroll_position = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_position;
  const scroll_position_with_single_context = packages__flutter__src__widgets__widget_span$46dart.src__widgets__scroll_position_with_single_context;
  const inherited_notifier = packages__flutter__src__widgets__widget_span$46dart.src__widgets__inherited_notifier;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const layout_builder = packages__flutter__src__widgets__layout_builder$46dart.src__widgets__layout_builder;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const scroll_simulation = packages__flutter__src__widgets__scroll_simulation$46dart.src__widgets__scroll_simulation;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var draggable_scrollable_sheet = Object.create(dart.library);
  var $add = dartx.add;
  var $clamp = dartx.clamp;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(false);
  var ValueNotifierOfdouble = () => (ValueNotifierOfdouble = dart.constFn(change_notifier.ValueNotifier$(core.double)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart";
  var L1 = "package:flutter/src/widgets/draggable_scrollable_sheet.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 11,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 336,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 334,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 48,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], _LocationL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 339,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 331,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 36,
        [_Location_line]: 555,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "notifier",
        [_Location_column]: 50,
        [_Location_line]: 555,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], _LocationL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 555,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    }
  }, false);
  var initialChildSize$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.initialChildSize");
  var minChildSize$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.minChildSize");
  var maxChildSize$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.maxChildSize");
  var expand$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.expand");
  var builder$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.builder");
  draggable_scrollable_sheet.DraggableScrollableSheet = class DraggableScrollableSheet extends framework.StatefulWidget {
    get initialChildSize() {
      return this[initialChildSize$];
    }
    set initialChildSize(value) {
      super.initialChildSize = value;
    }
    get minChildSize() {
      return this[minChildSize$];
    }
    set minChildSize(value) {
      super.minChildSize = value;
    }
    get maxChildSize() {
      return this[maxChildSize$];
    }
    set maxChildSize(value) {
      super.maxChildSize = value;
    }
    get expand() {
      return this[expand$];
    }
    set expand(value) {
      super.expand = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    createState() {
      return new draggable_scrollable_sheet._DraggableScrollableSheetState.new();
    }
  };
  (draggable_scrollable_sheet.DraggableScrollableSheet.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialChildSize = opts && 'initialChildSize' in opts ? opts.initialChildSize : 0.5;
    if (initialChildSize == null) dart.nullFailed(L0, 103, 10, "initialChildSize");
    let minChildSize = opts && 'minChildSize' in opts ? opts.minChildSize : 0.25;
    if (minChildSize == null) dart.nullFailed(L0, 104, 10, "minChildSize");
    let maxChildSize = opts && 'maxChildSize' in opts ? opts.maxChildSize : 1;
    if (maxChildSize == null) dart.nullFailed(L0, 105, 10, "maxChildSize");
    let expand = opts && 'expand' in opts ? opts.expand : true;
    if (expand == null) dart.nullFailed(L0, 106, 10, "expand");
    let builder = opts && 'builder' in opts ? opts.builder : null;
    if (builder == null) dart.nullFailed(L0, 107, 19, "builder");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialChildSize$] = initialChildSize;
    this[minChildSize$] = minChildSize;
    this[maxChildSize$] = maxChildSize;
    this[expand$] = expand;
    this[builder$] = builder;
    if (!(initialChildSize != null)) dart.assertFailed(null, L0, 108, 16, "initialChildSize != null");
    if (!(minChildSize != null)) dart.assertFailed(null, L0, 109, 16, "minChildSize != null");
    if (!(maxChildSize != null)) dart.assertFailed(null, L0, 110, 16, "maxChildSize != null");
    if (!(dart.notNull(minChildSize) >= 0.0)) dart.assertFailed(null, L0, 111, 16, "minChildSize >= 0.0");
    if (!(dart.notNull(maxChildSize) <= 1.0)) dart.assertFailed(null, L0, 112, 16, "maxChildSize <= 1.0");
    if (!(dart.notNull(minChildSize) <= dart.notNull(initialChildSize))) dart.assertFailed(null, L0, 113, 16, "minChildSize <= initialChildSize");
    if (!(dart.notNull(initialChildSize) <= dart.notNull(maxChildSize))) dart.assertFailed(null, L0, 114, 16, "initialChildSize <= maxChildSize");
    if (!(expand != null)) dart.assertFailed(null, L0, 115, 16, "expand != null");
    if (!(builder != null)) dart.assertFailed(null, L0, 116, 16, "builder != null");
    draggable_scrollable_sheet.DraggableScrollableSheet.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollable_sheet.DraggableScrollableSheet.prototype;
  dart.addTypeTests(draggable_scrollable_sheet.DraggableScrollableSheet);
  dart.addTypeCaches(draggable_scrollable_sheet.DraggableScrollableSheet);
  dart.setMethodSignature(draggable_scrollable_sheet.DraggableScrollableSheet, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet.DraggableScrollableSheet.__proto__),
    createState: dart.fnType(draggable_scrollable_sheet._DraggableScrollableSheetState, [])
  }));
  dart.setLibraryUri(draggable_scrollable_sheet.DraggableScrollableSheet, L1);
  dart.setFieldSignature(draggable_scrollable_sheet.DraggableScrollableSheet, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet.DraggableScrollableSheet.__proto__),
    initialChildSize: dart.finalFieldType(core.double),
    minChildSize: dart.finalFieldType(core.double),
    maxChildSize: dart.finalFieldType(core.double),
    expand: dart.finalFieldType(core.bool),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, scroll_controller.ScrollController]))
  }));
  var extent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.extent");
  var minExtent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.minExtent");
  var maxExtent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.maxExtent");
  var initialExtent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.initialExtent");
  var context$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.context");
  const Notification_ViewportNotificationMixin$36 = class Notification_ViewportNotificationMixin extends notification_listener.Notification {};
  (Notification_ViewportNotificationMixin$36.new = function() {
    scroll_notification.ViewportNotificationMixin[dart.mixinNew].call(this);
    Notification_ViewportNotificationMixin$36.__proto__.new.call(this);
  }).prototype = Notification_ViewportNotificationMixin$36.prototype;
  dart.applyMixin(Notification_ViewportNotificationMixin$36, scroll_notification.ViewportNotificationMixin);
  draggable_scrollable_sheet.DraggableScrollableNotification = class DraggableScrollableNotification extends Notification_ViewportNotificationMixin$36 {
    get extent() {
      return this[extent$];
    }
    set extent(value) {
      super.extent = value;
    }
    get minExtent() {
      return this[minExtent$];
    }
    set minExtent(value) {
      super.minExtent = value;
    }
    get maxExtent() {
      return this[maxExtent$];
    }
    set maxExtent(value) {
      super.maxExtent = value;
    }
    get initialExtent() {
      return this[initialExtent$];
    }
    set initialExtent(value) {
      super.initialExtent = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    debugFillDescription(description) {
      if (description == null) dart.nullFailed(L0, 220, 42, "description");
      super.debugFillDescription(description);
      description[$add]("minExtent: " + dart.str(this.minExtent) + ", extent: " + dart.str(this.extent) + ", maxExtent: " + dart.str(this.maxExtent) + ", initialExtent: " + dart.str(this.initialExtent));
    }
  };
  (draggable_scrollable_sheet.DraggableScrollableNotification.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : null;
    if (extent == null) dart.nullFailed(L0, 183, 19, "extent");
    let minExtent = opts && 'minExtent' in opts ? opts.minExtent : null;
    if (minExtent == null) dart.nullFailed(L0, 184, 19, "minExtent");
    let maxExtent = opts && 'maxExtent' in opts ? opts.maxExtent : null;
    if (maxExtent == null) dart.nullFailed(L0, 185, 19, "maxExtent");
    let initialExtent = opts && 'initialExtent' in opts ? opts.initialExtent : null;
    if (initialExtent == null) dart.nullFailed(L0, 186, 19, "initialExtent");
    let context = opts && 'context' in opts ? opts.context : null;
    if (context == null) dart.nullFailed(L0, 187, 19, "context");
    this[extent$] = extent;
    this[minExtent$] = minExtent;
    this[maxExtent$] = maxExtent;
    this[initialExtent$] = initialExtent;
    this[context$] = context;
    if (!(extent != null)) dart.assertFailed(null, L0, 188, 15, "extent != null");
    if (!(initialExtent != null)) dart.assertFailed(null, L0, 189, 15, "initialExtent != null");
    if (!(minExtent != null)) dart.assertFailed(null, L0, 190, 15, "minExtent != null");
    if (!(maxExtent != null)) dart.assertFailed(null, L0, 191, 15, "maxExtent != null");
    if (!(0.0 <= dart.notNull(minExtent))) dart.assertFailed(null, L0, 192, 15, "0.0 <= minExtent");
    if (!(dart.notNull(maxExtent) <= 1.0)) dart.assertFailed(null, L0, 193, 15, "maxExtent <= 1.0");
    if (!(dart.notNull(minExtent) <= dart.notNull(extent))) dart.assertFailed(null, L0, 194, 15, "minExtent <= extent");
    if (!(dart.notNull(minExtent) <= dart.notNull(initialExtent))) dart.assertFailed(null, L0, 195, 15, "minExtent <= initialExtent");
    if (!(dart.notNull(extent) <= dart.notNull(maxExtent))) dart.assertFailed(null, L0, 196, 15, "extent <= maxExtent");
    if (!(dart.notNull(initialExtent) <= dart.notNull(maxExtent))) dart.assertFailed(null, L0, 197, 15, "initialExtent <= maxExtent");
    if (!(context != null)) dart.assertFailed(null, L0, 198, 15, "context != null");
    draggable_scrollable_sheet.DraggableScrollableNotification.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollable_sheet.DraggableScrollableNotification.prototype;
  dart.addTypeTests(draggable_scrollable_sheet.DraggableScrollableNotification);
  dart.addTypeCaches(draggable_scrollable_sheet.DraggableScrollableNotification);
  dart.setLibraryUri(draggable_scrollable_sheet.DraggableScrollableNotification, L1);
  dart.setFieldSignature(draggable_scrollable_sheet.DraggableScrollableNotification, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet.DraggableScrollableNotification.__proto__),
    extent: dart.finalFieldType(core.double),
    minExtent: dart.finalFieldType(core.double),
    maxExtent: dart.finalFieldType(core.double),
    initialExtent: dart.finalFieldType(core.double),
    context: dart.finalFieldType(framework.BuildContext)
  }));
  var _currentExtent = dart.privateName(draggable_scrollable_sheet, "_currentExtent");
  draggable_scrollable_sheet._DraggableSheetExtent = class _DraggableSheetExtent extends core.Object {
    get isAtMin() {
      return dart.notNull(this.minExtent) >= dart.notNull(this[_currentExtent].value);
    }
    get isAtMax() {
      return dart.notNull(this.maxExtent) <= dart.notNull(this[_currentExtent].value);
    }
    set currentExtent(value) {
      if (value == null) dart.nullFailed(L0, 262, 28, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 263, 12, "value != null");
      this[_currentExtent].value = value[$clamp](this.minExtent, this.maxExtent);
    }
    get currentExtent() {
      return this[_currentExtent].value;
    }
    get additionalMinExtent() {
      return dart.test(this.isAtMin) ? 0.0 : 1.0;
    }
    get additionalMaxExtent() {
      return dart.test(this.isAtMax) ? 0.0 : 1.0;
    }
    addPixelDelta(delta, context) {
      if (delta == null) dart.nullFailed(L0, 273, 29, "delta");
      if (context == null) dart.nullFailed(L0, 273, 49, "context");
      if (this.availablePixels === 0) {
        return;
      }
      this.currentExtent = dart.notNull(this.currentExtent) + dart.notNull(delta) / dart.notNull(this.availablePixels) * dart.notNull(this.maxExtent);
      new draggable_scrollable_sheet.DraggableScrollableNotification.new({minExtent: this.minExtent, maxExtent: this.maxExtent, extent: this.currentExtent, initialExtent: this.initialExtent, context: context}).dispatch(context);
    }
  };
  (draggable_scrollable_sheet._DraggableSheetExtent.new = function(opts) {
    let t0;
    let minExtent = opts && 'minExtent' in opts ? opts.minExtent : null;
    if (minExtent == null) dart.nullFailed(L0, 239, 19, "minExtent");
    let maxExtent = opts && 'maxExtent' in opts ? opts.maxExtent : null;
    if (maxExtent == null) dart.nullFailed(L0, 240, 19, "maxExtent");
    let initialExtent = opts && 'initialExtent' in opts ? opts.initialExtent : null;
    if (initialExtent == null) dart.nullFailed(L0, 241, 19, "initialExtent");
    let listener = opts && 'listener' in opts ? opts.listener : null;
    if (listener == null) dart.nullFailed(L0, 242, 27, "listener");
    this.minExtent = minExtent;
    this.maxExtent = maxExtent;
    this.initialExtent = initialExtent;
    if (!(minExtent != null)) dart.assertFailed(null, L0, 243, 15, "minExtent != null");
    if (!(maxExtent != null)) dart.assertFailed(null, L0, 244, 15, "maxExtent != null");
    if (!(initialExtent != null)) dart.assertFailed(null, L0, 245, 15, "initialExtent != null");
    if (!(dart.notNull(minExtent) >= 0)) dart.assertFailed(null, L0, 246, 15, "minExtent >= 0");
    if (!(dart.notNull(maxExtent) <= 1)) dart.assertFailed(null, L0, 247, 15, "maxExtent <= 1");
    if (!(dart.notNull(minExtent) <= dart.notNull(initialExtent))) dart.assertFailed(null, L0, 248, 15, "minExtent <= initialExtent");
    if (!(dart.notNull(initialExtent) <= dart.notNull(maxExtent))) dart.assertFailed(null, L0, 249, 15, "initialExtent <= maxExtent");
    this[_currentExtent] = (t0 = new (ValueNotifierOfdouble()).new(initialExtent), (() => {
      t0.addListener(listener);
      return t0;
    })());
    this.availablePixels = 1 / 0;
    ;
  }).prototype = draggable_scrollable_sheet._DraggableSheetExtent.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableSheetExtent);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableSheetExtent);
  dart.setMethodSignature(draggable_scrollable_sheet._DraggableSheetExtent, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._DraggableSheetExtent.__proto__),
    addPixelDelta: dart.fnType(dart.void, [core.double, framework.BuildContext])
  }));
  dart.setGetterSignature(draggable_scrollable_sheet._DraggableSheetExtent, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._DraggableSheetExtent.__proto__),
    isAtMin: core.bool,
    isAtMax: core.bool,
    currentExtent: core.double,
    additionalMinExtent: core.double,
    additionalMaxExtent: core.double
  }));
  dart.setSetterSignature(draggable_scrollable_sheet._DraggableSheetExtent, () => ({
    __proto__: dart.getSetters(draggable_scrollable_sheet._DraggableSheetExtent.__proto__),
    currentExtent: core.double
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableSheetExtent, L1);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableSheetExtent, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableSheetExtent.__proto__),
    minExtent: dart.finalFieldType(core.double),
    maxExtent: dart.finalFieldType(core.double),
    initialExtent: dart.finalFieldType(core.double),
    [_currentExtent]: dart.finalFieldType(change_notifier.ValueNotifier$(core.double)),
    availablePixels: dart.fieldType(core.double)
  }));
  var ___DraggableScrollableSheetState__scrollController = dart.privateName(draggable_scrollable_sheet, "_#_DraggableScrollableSheetState#_scrollController");
  var ___DraggableScrollableSheetState__scrollController_isSet = dart.privateName(draggable_scrollable_sheet, "_#_DraggableScrollableSheetState#_scrollController#isSet");
  var ___DraggableScrollableSheetState__extent = dart.privateName(draggable_scrollable_sheet, "_#_DraggableScrollableSheetState#_extent");
  var ___DraggableScrollableSheetState__extent_isSet = dart.privateName(draggable_scrollable_sheet, "_#_DraggableScrollableSheetState#_extent#isSet");
  var _scrollController = dart.privateName(draggable_scrollable_sheet, "_scrollController");
  var _extent = dart.privateName(draggable_scrollable_sheet, "_extent");
  var _setExtent = dart.privateName(draggable_scrollable_sheet, "_setExtent");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C5;
  var C2;
  var C1;
  var C8;
  var C7;
  var C6;
  var C11;
  var C10;
  var C9;
  draggable_scrollable_sheet._DraggableScrollableSheetState = class _DraggableScrollableSheetState extends framework.State$(draggable_scrollable_sheet.DraggableScrollableSheet) {
    get [_scrollController]() {
      let t0;
      return dart.test(this[___DraggableScrollableSheetState__scrollController_isSet]) ? (t0 = this[___DraggableScrollableSheetState__scrollController], t0) : dart.throw(new _internal.LateError.fieldNI("_scrollController"));
    }
    set [_scrollController](t0) {
      if (t0 == null) dart.nullFailed(L0, 289, 50, "null");
      this[___DraggableScrollableSheetState__scrollController_isSet] = true;
      this[___DraggableScrollableSheetState__scrollController] = t0;
    }
    get [_extent]() {
      let t1;
      return dart.test(this[___DraggableScrollableSheetState__extent_isSet]) ? (t1 = this[___DraggableScrollableSheetState__extent], t1) : dart.throw(new _internal.LateError.fieldNI("_extent"));
    }
    set [_extent](t1) {
      if (t1 == null) dart.nullFailed(L0, 290, 30, "null");
      this[___DraggableScrollableSheetState__extent_isSet] = true;
      this[___DraggableScrollableSheetState__extent] = t1;
    }
    initState() {
      super.initState();
      this[_extent] = new draggable_scrollable_sheet._DraggableSheetExtent.new({minExtent: this.widget.minChildSize, maxExtent: this.widget.maxChildSize, initialExtent: this.widget.initialChildSize, listener: dart.bind(this, _setExtent)});
      this[_scrollController] = new draggable_scrollable_sheet._DraggableScrollableSheetScrollController.new({extent: this[_extent]});
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      if (dart.test(draggable_scrollable_sheet._InheritedResetNotifier.shouldReset(this.context))) {
        if (this[_scrollController].offset !== 0.0) {
          this[_scrollController].animateTo(0.0, {duration: C0 || CT.C0, curve: curves.Curves.linear});
        }
        this[_extent][_currentExtent].value = this[_extent].initialExtent;
      }
    }
    [_setExtent]() {
      this.setState(dart.fn(() => {
      }, VoidTovoid()));
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 330, 29, "context");
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t4, t3, t2;
          if (context == null) dart.nullFailed(L0, 332, 30, "context");
          if (constraints == null) dart.nullFailed(L0, 332, 54, "constraints");
          this[_extent].availablePixels = dart.notNull(this.widget.maxChildSize) * dart.notNull(constraints.biggest.height);
          let sheet = new basic.FractionallySizedBox.new({heightFactor: this[_extent].currentExtent, child: (t2 = this.widget, t3 = context, t4 = this[_scrollController], t2.builder(t3, t4)), alignment: alignment.Alignment.bottomCenter, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
          return dart.test(this.widget.expand) ? new basic.SizedBox.expand({child: sheet, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}) : sheet;
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
    dispose() {
      this[_scrollController].dispose();
      super.dispose();
    }
  };
  (draggable_scrollable_sheet._DraggableScrollableSheetState.new = function() {
    this[___DraggableScrollableSheetState__scrollController] = null;
    this[___DraggableScrollableSheetState__scrollController_isSet] = false;
    this[___DraggableScrollableSheetState__extent] = null;
    this[___DraggableScrollableSheetState__extent_isSet] = false;
    draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollable_sheet._DraggableScrollableSheetState.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableScrollableSheetState);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableScrollableSheetState);
  dart.setMethodSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [_setExtent]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [_scrollController]: draggable_scrollable_sheet._DraggableScrollableSheetScrollController,
    [_extent]: draggable_scrollable_sheet._DraggableSheetExtent
  }));
  dart.setSetterSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getSetters(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [_scrollController]: draggable_scrollable_sheet._DraggableScrollableSheetScrollController,
    [_extent]: draggable_scrollable_sheet._DraggableSheetExtent
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableScrollableSheetState, L1);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [___DraggableScrollableSheetState__scrollController]: dart.fieldType(dart.nullable(draggable_scrollable_sheet._DraggableScrollableSheetScrollController)),
    [___DraggableScrollableSheetState__scrollController_isSet]: dart.fieldType(core.bool),
    [___DraggableScrollableSheetState__extent]: dart.fieldType(dart.nullable(draggable_scrollable_sheet._DraggableSheetExtent)),
    [___DraggableScrollableSheetState__extent_isSet]: dart.fieldType(core.bool)
  }));
  draggable_scrollable_sheet._DraggableScrollableSheetScrollController = class _DraggableScrollableSheetScrollController extends scroll_controller.ScrollController {
    createScrollPosition(physics, context, oldPosition) {
      if (physics == null) dart.nullFailed(L0, 380, 19, "physics");
      if (context == null) dart.nullFailed(L0, 381, 19, "context");
      return new draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.new({physics: physics, context: context, oldPosition: oldPosition, extent: this.extent});
    }
    debugFillDescription(description) {
      if (description == null) dart.nullFailed(L0, 393, 42, "description");
      super.debugFillDescription(description);
      description[$add]("extent: " + dart.str(this.extent));
    }
  };
  (draggable_scrollable_sheet._DraggableScrollableSheetScrollController.new = function(opts) {
    let initialScrollOffset = opts && 'initialScrollOffset' in opts ? opts.initialScrollOffset : 0;
    if (initialScrollOffset == null) dart.nullFailed(L0, 367, 12, "initialScrollOffset");
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let extent = opts && 'extent' in opts ? opts.extent : null;
    if (extent == null) dart.nullFailed(L0, 369, 19, "extent");
    this.extent = extent;
    if (!(extent != null)) dart.assertFailed(null, L0, 370, 15, "extent != null");
    draggable_scrollable_sheet._DraggableScrollableSheetScrollController.__proto__.new.call(this, {debugLabel: debugLabel, initialScrollOffset: initialScrollOffset});
    ;
  }).prototype = draggable_scrollable_sheet._DraggableScrollableSheetScrollController.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableScrollableSheetScrollController);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableScrollableSheetScrollController);
  dart.setMethodSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollController, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._DraggableScrollableSheetScrollController.__proto__),
    createScrollPosition: dart.fnType(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, [scroll_physics.ScrollPhysics, scroll_context.ScrollContext, dart.nullable(scroll_position.ScrollPosition)])
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableScrollableSheetScrollController, L1);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollController, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableScrollableSheetScrollController.__proto__),
    extent: dart.finalFieldType(draggable_scrollable_sheet._DraggableSheetExtent)
  }));
  var _dragCancelCallback = dart.privateName(draggable_scrollable_sheet, "_dragCancelCallback");
  draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition = class _DraggableScrollableSheetScrollPosition extends scroll_position_with_single_context.ScrollPositionWithSingleContext {
    get listShouldScroll() {
      return dart.notNull(this.pixels) > 0.0;
    }
    applyContentDimensions(minScrollExtent, maxScrollExtent) {
      if (minScrollExtent == null) dart.nullFailed(L0, 436, 38, "minScrollExtent");
      if (maxScrollExtent == null) dart.nullFailed(L0, 436, 62, "maxScrollExtent");
      return super.applyContentDimensions(dart.notNull(minScrollExtent) - dart.notNull(this.extent.additionalMinExtent), dart.notNull(maxScrollExtent) + dart.notNull(this.extent.additionalMaxExtent));
    }
    applyUserOffset(delta) {
      if (delta == null) dart.nullFailed(L0, 447, 31, "delta");
      if (!dart.test(this.listShouldScroll) && (!(dart.test(this.extent.isAtMin) || dart.test(this.extent.isAtMax)) || dart.test(this.extent.isAtMin) && dart.notNull(delta) < 0 || dart.test(this.extent.isAtMax) && dart.notNull(delta) > 0)) {
        this.extent.addPixelDelta(-dart.notNull(delta), dart.nullCheck(this.context.notificationContext));
      } else {
        super.applyUserOffset(delta);
      }
    }
    goBallistic(velocity) {
      let t2, t2$;
      if (velocity == null) dart.nullFailed(L0, 459, 27, "velocity");
      if (velocity === 0.0 || dart.notNull(velocity) < 0.0 && dart.test(this.listShouldScroll) || dart.notNull(velocity) > 0.0 && dart.test(this.extent.isAtMax)) {
        super.goBallistic(velocity);
        return;
      }
      t2 = this[_dragCancelCallback];
      t2 == null ? null : t2();
      this[_dragCancelCallback] = null;
      let simulation = new scroll_simulation.ClampingScrollSimulation.new({position: this.extent.currentExtent, velocity: velocity, tolerance: this.physics.tolerance});
      let ballisticController = new animation_controller.AnimationController.unbounded({debugLabel: object.objectRuntimeType(this, "_DraggableScrollableSheetPosition"), vsync: this.context.vsync});
      let lastDelta = 0.0;
      const _tick = () => {
        let delta = dart.notNull(ballisticController.value) - dart.notNull(lastDelta);
        lastDelta = ballisticController.value;
        this.extent.addPixelDelta(delta, dart.nullCheck(this.context.notificationContext));
        if (dart.notNull(velocity) > 0 && dart.test(this.extent.isAtMax) || dart.notNull(velocity) < 0 && dart.test(this.extent.isAtMin)) {
          velocity = dart.notNull(ballisticController.velocity) + dart.notNull(this.physics.tolerance.velocity) * ballisticController.velocity[$sign];
          super.goBallistic(velocity);
          ballisticController.stop();
        } else if (dart.test(ballisticController.isCompleted)) {
          super.goBallistic(0.0);
        }
      };
      dart.fn(_tick, VoidTovoid());
      t2$ = ballisticController;
      (() => {
        t2$.addListener(_tick);
        t2$.animateWith(simulation).whenCompleteOrCancel(dart.bind(ballisticController, 'dispose'));
        return t2$;
      })();
    }
    drag(details, dragCancelCallback) {
      if (details == null) dart.nullFailed(L0, 507, 30, "details");
      if (dragCancelCallback == null) dart.nullFailed(L0, 507, 52, "dragCancelCallback");
      this[_dragCancelCallback] = dragCancelCallback;
      return super.drag(details, dragCancelCallback);
    }
  };
  (draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.new = function(opts) {
    let physics = opts && 'physics' in opts ? opts.physics : null;
    if (physics == null) dart.nullFailed(L0, 414, 28, "physics");
    let context = opts && 'context' in opts ? opts.context : null;
    if (context == null) dart.nullFailed(L0, 415, 28, "context");
    let initialPixels = opts && 'initialPixels' in opts ? opts.initialPixels : 0;
    if (initialPixels == null) dart.nullFailed(L0, 416, 12, "initialPixels");
    let keepScrollOffset = opts && 'keepScrollOffset' in opts ? opts.keepScrollOffset : true;
    if (keepScrollOffset == null) dart.nullFailed(L0, 417, 10, "keepScrollOffset");
    let oldPosition = opts && 'oldPosition' in opts ? opts.oldPosition : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let extent = opts && 'extent' in opts ? opts.extent : null;
    if (extent == null) dart.nullFailed(L0, 420, 19, "extent");
    this[_dragCancelCallback] = null;
    this.extent = extent;
    if (!(extent != null)) dart.assertFailed(null, L0, 421, 16, "extent != null");
    draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.__proto__.new.call(this, {physics: physics, context: context, initialPixels: initialPixels, keepScrollOffset: keepScrollOffset, oldPosition: oldPosition, debugLabel: debugLabel});
    ;
  }).prototype = draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition);
  dart.setGetterSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.__proto__),
    listShouldScroll: core.bool
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, L1);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.__proto__),
    [_dragCancelCallback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    extent: dart.finalFieldType(draggable_scrollable_sheet._DraggableSheetExtent)
  }));
  var _notifier = dart.privateName(draggable_scrollable_sheet, "_notifier");
  var _sendReset = dart.privateName(draggable_scrollable_sheet, "_sendReset");
  var C14;
  var C15;
  var C13;
  var C12;
  var child$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableActuator.child");
  draggable_scrollable_sheet.DraggableScrollableActuator = class DraggableScrollableActuator extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static reset(context) {
      if (context == null) dart.nullFailed(L0, 545, 34, "context");
      let notifier = context.dependOnInheritedWidgetOfExactType(draggable_scrollable_sheet._InheritedResetNotifier);
      if (notifier == null) {
        return false;
      }
      return notifier[_sendReset]();
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 554, 29, "context");
      return new draggable_scrollable_sheet._InheritedResetNotifier.new({child: this.child, notifier: this[_notifier], $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
  };
  (draggable_scrollable_sheet.DraggableScrollableActuator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 528, 19, "child");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_notifier] = new draggable_scrollable_sheet._ResetNotifier.new();
    this[child$] = child;
    draggable_scrollable_sheet.DraggableScrollableActuator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollable_sheet.DraggableScrollableActuator.prototype;
  dart.addTypeTests(draggable_scrollable_sheet.DraggableScrollableActuator);
  dart.addTypeCaches(draggable_scrollable_sheet.DraggableScrollableActuator);
  dart.setMethodSignature(draggable_scrollable_sheet.DraggableScrollableActuator, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet.DraggableScrollableActuator.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(draggable_scrollable_sheet.DraggableScrollableActuator, L1);
  dart.setFieldSignature(draggable_scrollable_sheet.DraggableScrollableActuator, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet.DraggableScrollableActuator.__proto__),
    child: dart.finalFieldType(framework.Widget),
    [_notifier]: dart.finalFieldType(draggable_scrollable_sheet._ResetNotifier)
  }));
  var _wasCalled = dart.privateName(draggable_scrollable_sheet, "_wasCalled");
  draggable_scrollable_sheet._ResetNotifier = class _ResetNotifier extends change_notifier.ChangeNotifier {
    sendReset() {
      if (!dart.test(this.hasListeners)) {
        return false;
      }
      this[_wasCalled] = true;
      this.notifyListeners();
      return true;
    }
  };
  (draggable_scrollable_sheet._ResetNotifier.new = function() {
    this[_wasCalled] = false;
    draggable_scrollable_sheet._ResetNotifier.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollable_sheet._ResetNotifier.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._ResetNotifier);
  dart.addTypeCaches(draggable_scrollable_sheet._ResetNotifier);
  dart.setMethodSignature(draggable_scrollable_sheet._ResetNotifier, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._ResetNotifier.__proto__),
    sendReset: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._ResetNotifier, L1);
  dart.setFieldSignature(draggable_scrollable_sheet._ResetNotifier, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._ResetNotifier.__proto__),
    [_wasCalled]: dart.fieldType(core.bool)
  }));
  draggable_scrollable_sheet._InheritedResetNotifier = class _InheritedResetNotifier extends inherited_notifier.InheritedNotifier$(draggable_scrollable_sheet._ResetNotifier) {
    [_sendReset]() {
      return dart.nullCheck(this.notifier).sendReset();
    }
    static shouldReset(context) {
      if (context == null) dart.nullFailed(L0, 597, 40, "context");
      let widget = context.dependOnInheritedWidgetOfExactType(draggable_scrollable_sheet._InheritedResetNotifier);
      if (widget == null) {
        return false;
      }
      if (!draggable_scrollable_sheet._InheritedResetNotifier.is(widget)) dart.assertFailed(null, L0, 602, 12, "widget is _InheritedResetNotifier");
      let inheritedNotifier = draggable_scrollable_sheet._InheritedResetNotifier.as(widget);
      let wasCalled = dart.nullCheck(inheritedNotifier.notifier)[_wasCalled];
      dart.nullCheck(inheritedNotifier.notifier)[_wasCalled] = false;
      return wasCalled;
    }
  };
  (draggable_scrollable_sheet._InheritedResetNotifier.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (child == null) dart.nullFailed(L0, 587, 21, "child");
    let notifier = opts && 'notifier' in opts ? opts.notifier : null;
    if (notifier == null) dart.nullFailed(L0, 588, 29, "notifier");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    draggable_scrollable_sheet._InheritedResetNotifier.__proto__.new.call(this, {key: key, child: child, notifier: notifier, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollable_sheet._InheritedResetNotifier.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._InheritedResetNotifier);
  dart.addTypeCaches(draggable_scrollable_sheet._InheritedResetNotifier);
  dart.setMethodSignature(draggable_scrollable_sheet._InheritedResetNotifier, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._InheritedResetNotifier.__proto__),
    [_sendReset]: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._InheritedResetNotifier, L1);
  dart.trackLibraries("packages/flutter/src/widgets/draggable_scrollable_sheet.dart", {
    "package:flutter/src/widgets/draggable_scrollable_sheet.dart": draggable_scrollable_sheet
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["draggable_scrollable_sheet.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/draggable_scrollable_sheet.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__draggable_scrollable_sheet: draggable_scrollable_sheet
  };
}));

//# sourceMappingURL=draggable_scrollable_sheet.dart.lib.js.map
