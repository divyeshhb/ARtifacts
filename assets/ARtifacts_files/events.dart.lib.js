define(['dart_sdk', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__events_dart(dart_sdk, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var events = Object.create(dart.library);
  var $leftShift = dartx['<<'];
  dart._checkModuleNullSafetyMode(false);
  var DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))();
  var DiagnosticsPropertyOfDuration = () => (DiagnosticsPropertyOfDuration = dart.constFn(diagnostics.DiagnosticsProperty$(core.Duration)))();
  var EnumPropertyOfPointerDeviceKind = () => (EnumPropertyOfPointerDeviceKind = dart.constFn(diagnostics.EnumProperty$(ui.PointerDeviceKind)))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var PointerAddedEventN = () => (PointerAddedEventN = dart.constFn(dart.nullable(events.PointerAddedEvent)))();
  var PointerRemovedEventN = () => (PointerRemovedEventN = dart.constFn(dart.nullable(events.PointerRemovedEvent)))();
  var PointerHoverEventN = () => (PointerHoverEventN = dart.constFn(dart.nullable(events.PointerHoverEvent)))();
  var PointerEnterEventN = () => (PointerEnterEventN = dart.constFn(dart.nullable(events.PointerEnterEvent)))();
  var PointerExitEventN = () => (PointerExitEventN = dart.constFn(dart.nullable(events.PointerExitEvent)))();
  var PointerDownEventN = () => (PointerDownEventN = dart.constFn(dart.nullable(events.PointerDownEvent)))();
  var PointerMoveEventN = () => (PointerMoveEventN = dart.constFn(dart.nullable(events.PointerMoveEvent)))();
  var PointerUpEventN = () => (PointerUpEventN = dart.constFn(dart.nullable(events.PointerUpEvent)))();
  var PointerScrollEventN = () => (PointerScrollEventN = dart.constFn(dart.nullable(events.PointerScrollEvent)))();
  var PointerCancelEventN = () => (PointerCancelEventN = dart.constFn(dart.nullable(events.PointerCancelEvent)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/events.dart";
  var L1 = "package:flutter/src/gestures/events.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.mouse",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.stylus",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.invertedStylus",
        index: 3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.unknown",
        index: 4
      });
    }
  }, false);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var _name = dart.privateName(ui, "_name");
  var C1;
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C2;
  var embedderId$ = dart.privateName(events, "PointerEvent.embedderId");
  var timeStamp$ = dart.privateName(events, "PointerEvent.timeStamp");
  var pointer$ = dart.privateName(events, "PointerEvent.pointer");
  var kind$ = dart.privateName(events, "PointerEvent.kind");
  var device$ = dart.privateName(events, "PointerEvent.device");
  var position$ = dart.privateName(events, "PointerEvent.position");
  var delta$ = dart.privateName(events, "PointerEvent.delta");
  var buttons$ = dart.privateName(events, "PointerEvent.buttons");
  var down$ = dart.privateName(events, "PointerEvent.down");
  var obscured$ = dart.privateName(events, "PointerEvent.obscured");
  var pressure$ = dart.privateName(events, "PointerEvent.pressure");
  var pressureMin$ = dart.privateName(events, "PointerEvent.pressureMin");
  var pressureMax$ = dart.privateName(events, "PointerEvent.pressureMax");
  var distance$ = dart.privateName(events, "PointerEvent.distance");
  var distanceMax$ = dart.privateName(events, "PointerEvent.distanceMax");
  var size$ = dart.privateName(events, "PointerEvent.size");
  var radiusMajor$ = dart.privateName(events, "PointerEvent.radiusMajor");
  var radiusMinor$ = dart.privateName(events, "PointerEvent.radiusMinor");
  var radiusMin$ = dart.privateName(events, "PointerEvent.radiusMin");
  var radiusMax$ = dart.privateName(events, "PointerEvent.radiusMax");
  var orientation$ = dart.privateName(events, "PointerEvent.orientation");
  var tilt$ = dart.privateName(events, "PointerEvent.tilt");
  var platformData$ = dart.privateName(events, "PointerEvent.platformData");
  var synthesized$ = dart.privateName(events, "PointerEvent.synthesized");
  var transform$ = dart.privateName(events, "PointerEvent.transform");
  var original$ = dart.privateName(events, "PointerEvent.original");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  events.PointerEvent = class PointerEvent extends Object_Diagnosticable$36 {
    get embedderId() {
      return this[embedderId$];
    }
    set embedderId(value) {
      super.embedderId = value;
    }
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get pointer() {
      return this[pointer$];
    }
    set pointer(value) {
      super.pointer = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get down() {
      return this[down$];
    }
    set down(value) {
      super.down = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get pressureMin() {
      return this[pressureMin$];
    }
    set pressureMin(value) {
      super.pressureMin = value;
    }
    get pressureMax() {
      return this[pressureMax$];
    }
    set pressureMax(value) {
      super.pressureMax = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get distanceMax() {
      return this[distanceMax$];
    }
    set distanceMax(value) {
      super.distanceMax = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get radiusMajor() {
      return this[radiusMajor$];
    }
    set radiusMajor(value) {
      super.radiusMajor = value;
    }
    get radiusMinor() {
      return this[radiusMinor$];
    }
    set radiusMinor(value) {
      super.radiusMinor = value;
    }
    get radiusMin() {
      return this[radiusMin$];
    }
    set radiusMin(value) {
      super.radiusMin = value;
    }
    get radiusMax() {
      return this[radiusMax$];
    }
    set radiusMax(value) {
      super.radiusMax = value;
    }
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get tilt() {
      return this[tilt$];
    }
    set tilt(value) {
      super.tilt = value;
    }
    get platformData() {
      return this[platformData$];
    }
    set platformData(value) {
      super.platformData = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    get localPosition() {
      return this.position;
    }
    get localDelta() {
      return this.delta;
    }
    get distanceMin() {
      return 0.0;
    }
    static transformPosition(transform, position) {
      if (position == null) dart.nullFailed(L0, 561, 62, "position");
      if (transform == null) {
        return position;
      }
      let position3 = vector_math_64.Vector3.new(position.dx, position.dy, 0.0);
      let transformed3 = transform.perspectiveTransform(position3);
      return new ui.Offset.new(transformed3.x, transformed3.y);
    }
    static transformDeltaViaPositions(opts) {
      let untransformedEndPosition = opts && 'untransformedEndPosition' in opts ? opts.untransformedEndPosition : null;
      if (untransformedEndPosition == null) dart.nullFailed(L0, 578, 21, "untransformedEndPosition");
      let transformedEndPosition = opts && 'transformedEndPosition' in opts ? opts.transformedEndPosition : null;
      let untransformedDelta = opts && 'untransformedDelta' in opts ? opts.untransformedDelta : null;
      if (untransformedDelta == null) dart.nullFailed(L0, 580, 21, "untransformedDelta");
      let transform = opts && 'transform' in opts ? opts.transform : null;
      if (transform == null) {
        return untransformedDelta;
      }
      transformedEndPosition == null ? transformedEndPosition = events.PointerEvent.transformPosition(transform, untransformedEndPosition) : null;
      let transformedStartPosition = events.PointerEvent.transformPosition(transform, untransformedEndPosition['-'](untransformedDelta));
      return transformedEndPosition['-'](transformedStartPosition);
    }
    static removePerspectiveTransform(transform) {
      let t0;
      if (transform == null) dart.nullFailed(L0, 604, 53, "transform");
      let vector = vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0);
      t0 = transform.clone();
      return (() => {
        t0.setColumn(2, vector);
        t0.setRow(2, vector);
        return t0;
      })();
    }
  };
  (events.PointerEvent.new = function(opts) {
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 241, 10, "embedderId");
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 242, 10, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 243, 10, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 244, 10, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 245, 10, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 246, 10, "position");
    let delta = opts && 'delta' in opts ? opts.delta : C2 || CT.C2;
    if (delta == null) dart.nullFailed(L0, 247, 10, "delta");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    if (buttons == null) dart.nullFailed(L0, 248, 10, "buttons");
    let down = opts && 'down' in opts ? opts.down : false;
    if (down == null) dart.nullFailed(L0, 249, 10, "down");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 250, 10, "obscured");
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    if (pressure == null) dart.nullFailed(L0, 251, 10, "pressure");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 252, 10, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 253, 10, "pressureMax");
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    if (distance == null) dart.nullFailed(L0, 254, 10, "distance");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 255, 10, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 256, 10, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 257, 10, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 258, 10, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 259, 10, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 260, 10, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 261, 10, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 262, 10, "tilt");
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    if (platformData == null) dart.nullFailed(L0, 263, 10, "platformData");
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    if (synthesized == null) dart.nullFailed(L0, 264, 10, "synthesized");
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    this[embedderId$] = embedderId;
    this[timeStamp$] = timeStamp;
    this[pointer$] = pointer;
    this[kind$] = kind;
    this[device$] = device;
    this[position$] = position;
    this[delta$] = delta;
    this[buttons$] = buttons;
    this[down$] = down;
    this[obscured$] = obscured;
    this[pressure$] = pressure;
    this[pressureMin$] = pressureMin;
    this[pressureMax$] = pressureMax;
    this[distance$] = distance;
    this[distanceMax$] = distanceMax;
    this[size$] = size;
    this[radiusMajor$] = radiusMajor;
    this[radiusMinor$] = radiusMinor;
    this[radiusMin$] = radiusMin;
    this[radiusMax$] = radiusMax;
    this[orientation$] = orientation;
    this[tilt$] = tilt;
    this[platformData$] = platformData;
    this[synthesized$] = synthesized;
    this[transform$] = transform;
    this[original$] = original;
    ;
  }).prototype = events.PointerEvent.prototype;
  dart.addTypeTests(events.PointerEvent);
  dart.addTypeCaches(events.PointerEvent);
  dart.setGetterSignature(events.PointerEvent, () => ({
    __proto__: dart.getGetters(events.PointerEvent.__proto__),
    localPosition: ui.Offset,
    localDelta: ui.Offset,
    distanceMin: core.double
  }));
  dart.setLibraryUri(events.PointerEvent, L1);
  dart.setFieldSignature(events.PointerEvent, () => ({
    __proto__: dart.getFields(events.PointerEvent.__proto__),
    embedderId: dart.finalFieldType(core.int),
    timeStamp: dart.finalFieldType(core.Duration),
    pointer: dart.finalFieldType(core.int),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    device: dart.finalFieldType(core.int),
    position: dart.finalFieldType(ui.Offset),
    delta: dart.finalFieldType(ui.Offset),
    buttons: dart.finalFieldType(core.int),
    down: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    pressure: dart.finalFieldType(core.double),
    pressureMin: dart.finalFieldType(core.double),
    pressureMax: dart.finalFieldType(core.double),
    distance: dart.finalFieldType(core.double),
    distanceMax: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    radiusMajor: dart.finalFieldType(core.double),
    radiusMinor: dart.finalFieldType(core.double),
    radiusMin: dart.finalFieldType(core.double),
    radiusMax: dart.finalFieldType(core.double),
    orientation: dart.finalFieldType(core.double),
    tilt: dart.finalFieldType(core.double),
    platformData: dart.finalFieldType(core.int),
    synthesized: dart.finalFieldType(core.bool),
    transform: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    original: dart.finalFieldType(dart.nullable(events.PointerEvent))
  }));
  events._PointerEventDescription = class _PointerEventDescription extends events.PointerEvent {};
  events._PointerEventDescription[dart.mixinOn] = PointerEvent => class _PointerEventDescription extends PointerEvent {
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 617, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("position", this.position));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("localPosition", this.localPosition, {defaultValue: this.position, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("delta", this.delta, {defaultValue: ui.Offset.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("localDelta", this.localDelta, {defaultValue: this.delta, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp, {defaultValue: core.Duration.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("pointer", this.pointer, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (EnumPropertyOfPointerDeviceKind()).new("kind", this.kind, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("device", this.device, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("buttons", this.buttons, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("down", this.down, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressure", this.pressure, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMin", this.pressureMin, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMax", this.pressureMax, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distance", this.distance, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMin", this.distanceMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMax", this.distanceMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMajor", this.radiusMajor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMinor", this.radiusMinor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMin", this.radiusMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMax", this.radiusMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("orientation", this.orientation, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("tilt", this.tilt, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("platformData", this.platformData, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("obscured", {value: this.obscured, ifTrue: "obscured", level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized", level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("embedderId", this.embedderId, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
    }
    toStringFull() {
      return this.toString({minLevel: diagnostics.DiagnosticLevel.fine});
    }
  };
  dart.addTypeTests(events._PointerEventDescription);
  dart.addTypeCaches(events._PointerEventDescription);
  events._PointerEventDescription[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._PointerEventDescription, () => ({
    __proto__: dart.getMethods(events._PointerEventDescription.__proto__),
    toStringFull: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(events._PointerEventDescription, L1);
  events._AbstractPointerEvent = class _AbstractPointerEvent extends core.Object {};
  (events._AbstractPointerEvent.new = function() {
    ;
  }).prototype = events._AbstractPointerEvent.prototype;
  dart.addTypeTests(events._AbstractPointerEvent);
  dart.addTypeCaches(events._AbstractPointerEvent);
  events._AbstractPointerEvent[dart.implements] = () => [events.PointerEvent];
  dart.setLibraryUri(events._AbstractPointerEvent, L1);
  var ___TransformedPointerEvent_localPosition = dart.privateName(events, "_#_TransformedPointerEvent#localPosition");
  var ___TransformedPointerEvent_localPosition_isSet = dart.privateName(events, "_#_TransformedPointerEvent#localPosition#isSet");
  var ___TransformedPointerEvent_localDelta = dart.privateName(events, "_#_TransformedPointerEvent#localDelta");
  var ___TransformedPointerEvent_localDelta_isSet = dart.privateName(events, "_#_TransformedPointerEvent#localDelta#isSet");
  const _AbstractPointerEvent_Diagnosticable$36 = class _AbstractPointerEvent_Diagnosticable extends events._AbstractPointerEvent {};
  (_AbstractPointerEvent_Diagnosticable$36.new = function() {
  }).prototype = _AbstractPointerEvent_Diagnosticable$36.prototype;
  dart.applyMixin(_AbstractPointerEvent_Diagnosticable$36, diagnostics.Diagnosticable);
  const _AbstractPointerEvent__PointerEventDescription$36 = class _AbstractPointerEvent__PointerEventDescription extends _AbstractPointerEvent_Diagnosticable$36 {};
  (_AbstractPointerEvent__PointerEventDescription$36.new = function() {
  }).prototype = _AbstractPointerEvent__PointerEventDescription$36.prototype;
  dart.applyMixin(_AbstractPointerEvent__PointerEventDescription$36, events._PointerEventDescription);
  events._TransformedPointerEvent = class _TransformedPointerEvent extends _AbstractPointerEvent__PointerEventDescription$36 {
    get embedderId() {
      return this.original.embedderId;
    }
    get timeStamp() {
      return this.original.timeStamp;
    }
    get pointer() {
      return this.original.pointer;
    }
    get kind() {
      return this.original.kind;
    }
    get device() {
      return this.original.device;
    }
    get position() {
      return this.original.position;
    }
    get delta() {
      return this.original.delta;
    }
    get buttons() {
      return this.original.buttons;
    }
    get down() {
      return this.original.down;
    }
    get obscured() {
      return this.original.obscured;
    }
    get pressure() {
      return this.original.pressure;
    }
    get pressureMin() {
      return this.original.pressureMin;
    }
    get pressureMax() {
      return this.original.pressureMax;
    }
    get distance() {
      return this.original.distance;
    }
    get distanceMin() {
      return 0.0;
    }
    get distanceMax() {
      return this.original.distanceMax;
    }
    get size() {
      return this.original.size;
    }
    get radiusMajor() {
      return this.original.radiusMajor;
    }
    get radiusMinor() {
      return this.original.radiusMinor;
    }
    get radiusMin() {
      return this.original.radiusMin;
    }
    get radiusMax() {
      return this.original.radiusMax;
    }
    get orientation() {
      return this.original.orientation;
    }
    get tilt() {
      return this.original.tilt;
    }
    get platformData() {
      return this.original.platformData;
    }
    get synthesized() {
      return this.original.synthesized;
    }
    get localPosition() {
      let t1;
      if (!dart.test(this[___TransformedPointerEvent_localPosition_isSet])) {
        let t0 = events.PointerEvent.transformPosition(this.transform, this.position);
        if (dart.test(this[___TransformedPointerEvent_localPosition_isSet])) dart.throw(new _internal.LateError.fieldADI("localPosition"));
        this[___TransformedPointerEvent_localPosition] = t0;
        this[___TransformedPointerEvent_localPosition_isSet] = true;
      }
      t1 = this[___TransformedPointerEvent_localPosition];
      return t1;
    }
    get localDelta() {
      let t2;
      if (!dart.test(this[___TransformedPointerEvent_localDelta_isSet])) {
        let t1 = events.PointerEvent.transformDeltaViaPositions({transform: this.transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: this.localPosition});
        if (dart.test(this[___TransformedPointerEvent_localDelta_isSet])) dart.throw(new _internal.LateError.fieldADI("localDelta"));
        this[___TransformedPointerEvent_localDelta] = t1;
        this[___TransformedPointerEvent_localDelta_isSet] = true;
      }
      t2 = this[___TransformedPointerEvent_localDelta];
      return t2;
    }
  };
  (events._TransformedPointerEvent.new = function() {
    this[___TransformedPointerEvent_localPosition] = null;
    this[___TransformedPointerEvent_localPosition_isSet] = false;
    this[___TransformedPointerEvent_localDelta] = null;
    this[___TransformedPointerEvent_localDelta_isSet] = false;
    ;
  }).prototype = events._TransformedPointerEvent.prototype;
  dart.addTypeTests(events._TransformedPointerEvent);
  dart.addTypeCaches(events._TransformedPointerEvent);
  dart.setGetterSignature(events._TransformedPointerEvent, () => ({
    __proto__: dart.getGetters(events._TransformedPointerEvent.__proto__),
    embedderId: core.int,
    timeStamp: core.Duration,
    pointer: core.int,
    kind: ui.PointerDeviceKind,
    device: core.int,
    position: ui.Offset,
    delta: ui.Offset,
    buttons: core.int,
    down: core.bool,
    obscured: core.bool,
    pressure: core.double,
    pressureMin: core.double,
    pressureMax: core.double,
    distance: core.double,
    distanceMin: core.double,
    distanceMax: core.double,
    size: core.double,
    radiusMajor: core.double,
    radiusMinor: core.double,
    radiusMin: core.double,
    radiusMax: core.double,
    orientation: core.double,
    tilt: core.double,
    platformData: core.int,
    synthesized: core.bool,
    localPosition: ui.Offset,
    localDelta: ui.Offset
  }));
  dart.setLibraryUri(events._TransformedPointerEvent, L1);
  dart.setFieldSignature(events._TransformedPointerEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerEvent.__proto__),
    [___TransformedPointerEvent_localPosition]: dart.fieldType(dart.nullable(ui.Offset)),
    [___TransformedPointerEvent_localPosition_isSet]: dart.fieldType(core.bool),
    [___TransformedPointerEvent_localDelta]: dart.fieldType(dart.nullable(ui.Offset)),
    [___TransformedPointerEvent_localDelta_isSet]: dart.fieldType(core.bool)
  }));
  events._CopyPointerAddedEvent = class _CopyPointerAddedEvent extends events.PointerEvent {};
  events._CopyPointerAddedEvent[dart.mixinOn] = PointerEvent => class _CopyPointerAddedEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerAddedEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), kind: (t2$ = kind, t2$ == null ? this.kind : t2$), device: (t2$0 = device, t2$0 == null ? this.device : t2$0), position: (t2$1 = position, t2$1 == null ? this.position : t2$1), obscured: (t2$2 = obscured, t2$2 == null ? this.obscured : t2$2), pressureMin: (t2$3 = pressureMin, t2$3 == null ? this.pressureMin : t2$3), pressureMax: (t2$4 = pressureMax, t2$4 == null ? this.pressureMax : t2$4), distance: (t2$5 = distance, t2$5 == null ? this.distance : t2$5), distanceMax: (t2$6 = distanceMax, t2$6 == null ? this.distanceMax : t2$6), radiusMin: (t2$7 = radiusMin, t2$7 == null ? this.radiusMin : t2$7), radiusMax: (t2$8 = radiusMax, t2$8 == null ? this.radiusMax : t2$8), orientation: (t2$9 = orientation, t2$9 == null ? this.orientation : t2$9), tilt: (t2$10 = tilt, t2$10 == null ? this.tilt : t2$10), embedderId: (t2$11 = embedderId, t2$11 == null ? this.embedderId : t2$11)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerAddedEvent);
  dart.addTypeCaches(events._CopyPointerAddedEvent);
  events._CopyPointerAddedEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerAddedEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerAddedEvent.__proto__),
    copyWith: dart.fnType(events.PointerAddedEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerAddedEvent, L1);
  const PointerEvent__PointerEventDescription$36 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36.new = function(opts) {
    PointerEvent__PointerEventDescription$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36, events._PointerEventDescription);
  const PointerEvent__CopyPointerAddedEvent$36 = class PointerEvent__CopyPointerAddedEvent extends PointerEvent__PointerEventDescription$36 {};
  (PointerEvent__CopyPointerAddedEvent$36.new = function(opts) {
    PointerEvent__CopyPointerAddedEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerAddedEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerAddedEvent$36, events._CopyPointerAddedEvent);
  events.PointerAddedEvent = class PointerAddedEvent extends PointerEvent__CopyPointerAddedEvent$36 {
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerAddedEvent.new((t2 = PointerAddedEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerAddedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 810, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 811, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 812, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 813, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 814, 12, "position");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 815, 10, "obscured");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 816, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 817, 12, "pressureMax");
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    if (distance == null) dart.nullFailed(L0, 818, 12, "distance");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 819, 12, "distanceMax");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 820, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 821, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 822, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 823, 12, "tilt");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 824, 9, "embedderId");
    events.PointerAddedEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, embedderId: embedderId});
    ;
  }).prototype = events.PointerAddedEvent.prototype;
  dart.addTypeTests(events.PointerAddedEvent);
  dart.addTypeCaches(events.PointerAddedEvent);
  dart.setMethodSignature(events.PointerAddedEvent, () => ({
    __proto__: dart.getMethods(events.PointerAddedEvent.__proto__),
    transformed: dart.fnType(events.PointerAddedEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerAddedEvent, L1);
  var original$0 = dart.privateName(events, "_TransformedPointerAddedEvent.original");
  var transform$0 = dart.privateName(events, "_TransformedPointerAddedEvent.transform");
  const _TransformedPointerEvent__CopyPointerAddedEvent$36 = class _TransformedPointerEvent__CopyPointerAddedEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerAddedEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerAddedEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerAddedEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerAddedEvent$36, events._CopyPointerAddedEvent);
  events._TransformedPointerAddedEvent = class _TransformedPointerAddedEvent extends _TransformedPointerEvent__CopyPointerAddedEvent$36 {
    get original() {
      return this[original$0];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$0];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerAddedEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 854, 38, "original");
    if (transform == null) dart.nullFailed(L0, 854, 53, "transform");
    this[original$0] = original;
    this[transform$0] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 855, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 855, 40, "transform != null");
    events._TransformedPointerAddedEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerAddedEvent.prototype;
  dart.addTypeTests(events._TransformedPointerAddedEvent);
  dart.addTypeCaches(events._TransformedPointerAddedEvent);
  events._TransformedPointerAddedEvent[dart.implements] = () => [events.PointerAddedEvent];
  dart.setMethodSignature(events._TransformedPointerAddedEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerAddedEvent.__proto__),
    transformed: dart.fnType(events.PointerAddedEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerAddedEvent, L1);
  dart.setFieldSignature(events._TransformedPointerAddedEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerAddedEvent.__proto__),
    original: dart.finalFieldType(events.PointerAddedEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerRemovedEvent = class _CopyPointerRemovedEvent extends events.PointerEvent {};
  events._CopyPointerRemovedEvent[dart.mixinOn] = PointerEvent => class _CopyPointerRemovedEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerRemovedEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), kind: (t2$ = kind, t2$ == null ? this.kind : t2$), device: (t2$0 = device, t2$0 == null ? this.device : t2$0), position: (t2$1 = position, t2$1 == null ? this.position : t2$1), obscured: (t2$2 = obscured, t2$2 == null ? this.obscured : t2$2), pressureMin: (t2$3 = pressureMin, t2$3 == null ? this.pressureMin : t2$3), pressureMax: (t2$4 = pressureMax, t2$4 == null ? this.pressureMax : t2$4), distanceMax: (t2$5 = distanceMax, t2$5 == null ? this.distanceMax : t2$5), radiusMin: (t2$6 = radiusMin, t2$6 == null ? this.radiusMin : t2$6), radiusMax: (t2$7 = radiusMax, t2$7 == null ? this.radiusMax : t2$7), embedderId: (t2$8 = embedderId, t2$8 == null ? this.embedderId : t2$8)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerRemovedEvent);
  dart.addTypeCaches(events._CopyPointerRemovedEvent);
  events._CopyPointerRemovedEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerRemovedEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerRemovedEvent.__proto__),
    copyWith: dart.fnType(events.PointerRemovedEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerRemovedEvent, L1);
  const PointerEvent__PointerEventDescription$36$ = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$.new = function(opts) {
    PointerEvent__PointerEventDescription$36$.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$, events._PointerEventDescription);
  const PointerEvent__CopyPointerRemovedEvent$36 = class PointerEvent__CopyPointerRemovedEvent extends PointerEvent__PointerEventDescription$36$ {};
  (PointerEvent__CopyPointerRemovedEvent$36.new = function(opts) {
    PointerEvent__CopyPointerRemovedEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerRemovedEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerRemovedEvent$36, events._CopyPointerRemovedEvent);
  events.PointerRemovedEvent = class PointerRemovedEvent extends PointerEvent__CopyPointerRemovedEvent$36 {
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerRemovedEvent.new((t2 = PointerRemovedEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerRemovedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 918, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 919, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 920, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 921, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 922, 12, "position");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 923, 10, "obscured");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 924, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 925, 12, "pressureMax");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 926, 12, "distanceMax");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 927, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 928, 12, "radiusMax");
    let original = opts && 'original' in opts ? opts.original : null;
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 930, 9, "embedderId");
    events.PointerRemovedEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, original: original, embedderId: embedderId});
    ;
  }).prototype = events.PointerRemovedEvent.prototype;
  dart.addTypeTests(events.PointerRemovedEvent);
  dart.addTypeCaches(events.PointerRemovedEvent);
  dart.setMethodSignature(events.PointerRemovedEvent, () => ({
    __proto__: dart.getMethods(events.PointerRemovedEvent.__proto__),
    transformed: dart.fnType(events.PointerRemovedEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerRemovedEvent, L1);
  var original$1 = dart.privateName(events, "_TransformedPointerRemovedEvent.original");
  var transform$1 = dart.privateName(events, "_TransformedPointerRemovedEvent.transform");
  const _TransformedPointerEvent__CopyPointerRemovedEvent$36 = class _TransformedPointerEvent__CopyPointerRemovedEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerRemovedEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerRemovedEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerRemovedEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerRemovedEvent$36, events._CopyPointerRemovedEvent);
  events._TransformedPointerRemovedEvent = class _TransformedPointerRemovedEvent extends _TransformedPointerEvent__CopyPointerRemovedEvent$36 {
    get original() {
      return this[original$1];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$1];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerRemovedEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 958, 40, "original");
    if (transform == null) dart.nullFailed(L0, 958, 55, "transform");
    this[original$1] = original;
    this[transform$1] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 959, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 959, 40, "transform != null");
    events._TransformedPointerRemovedEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerRemovedEvent.prototype;
  dart.addTypeTests(events._TransformedPointerRemovedEvent);
  dart.addTypeCaches(events._TransformedPointerRemovedEvent);
  events._TransformedPointerRemovedEvent[dart.implements] = () => [events.PointerRemovedEvent];
  dart.setMethodSignature(events._TransformedPointerRemovedEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerRemovedEvent.__proto__),
    transformed: dart.fnType(events.PointerRemovedEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerRemovedEvent, L1);
  dart.setFieldSignature(events._TransformedPointerRemovedEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerRemovedEvent.__proto__),
    original: dart.finalFieldType(events.PointerRemovedEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerHoverEvent = class _CopyPointerHoverEvent extends events.PointerEvent {};
  events._CopyPointerHoverEvent[dart.mixinOn] = PointerEvent => class _CopyPointerHoverEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerHoverEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), kind: (t2$ = kind, t2$ == null ? this.kind : t2$), device: (t2$0 = device, t2$0 == null ? this.device : t2$0), position: (t2$1 = position, t2$1 == null ? this.position : t2$1), delta: (t2$2 = delta, t2$2 == null ? this.delta : t2$2), buttons: (t2$3 = buttons, t2$3 == null ? this.buttons : t2$3), obscured: (t2$4 = obscured, t2$4 == null ? this.obscured : t2$4), pressureMin: (t2$5 = pressureMin, t2$5 == null ? this.pressureMin : t2$5), pressureMax: (t2$6 = pressureMax, t2$6 == null ? this.pressureMax : t2$6), distance: (t2$7 = distance, t2$7 == null ? this.distance : t2$7), distanceMax: (t2$8 = distanceMax, t2$8 == null ? this.distanceMax : t2$8), size: (t2$9 = size, t2$9 == null ? this.size : t2$9), radiusMajor: (t2$10 = radiusMajor, t2$10 == null ? this.radiusMajor : t2$10), radiusMinor: (t2$11 = radiusMinor, t2$11 == null ? this.radiusMinor : t2$11), radiusMin: (t2$12 = radiusMin, t2$12 == null ? this.radiusMin : t2$12), radiusMax: (t2$13 = radiusMax, t2$13 == null ? this.radiusMax : t2$13), orientation: (t2$14 = orientation, t2$14 == null ? this.orientation : t2$14), tilt: (t2$15 = tilt, t2$15 == null ? this.tilt : t2$15), synthesized: (t2$16 = synthesized, t2$16 == null ? this.synthesized : t2$16), embedderId: (t2$17 = embedderId, t2$17 == null ? this.embedderId : t2$17)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerHoverEvent);
  dart.addTypeCaches(events._CopyPointerHoverEvent);
  events._CopyPointerHoverEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerHoverEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerHoverEvent.__proto__),
    copyWith: dart.fnType(events.PointerHoverEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerHoverEvent, L1);
  const PointerEvent__PointerEventDescription$36$0 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$0.new = function(opts) {
    PointerEvent__PointerEventDescription$36$0.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$0.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$0, events._PointerEventDescription);
  const PointerEvent__CopyPointerHoverEvent$36 = class PointerEvent__CopyPointerHoverEvent extends PointerEvent__PointerEventDescription$36$0 {};
  (PointerEvent__CopyPointerHoverEvent$36.new = function(opts) {
    PointerEvent__CopyPointerHoverEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerHoverEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerHoverEvent$36, events._CopyPointerHoverEvent);
  events.PointerHoverEvent = class PointerHoverEvent extends PointerEvent__CopyPointerHoverEvent$36 {
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerHoverEvent.new((t2 = PointerHoverEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerHoverEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1039, 14, "timeStamp");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 1040, 23, "kind");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 1041, 9, "pointer");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1042, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1043, 12, "position");
    let delta = opts && 'delta' in opts ? opts.delta : C2 || CT.C2;
    if (delta == null) dart.nullFailed(L0, 1044, 12, "delta");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    if (buttons == null) dart.nullFailed(L0, 1045, 9, "buttons");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 1046, 10, "obscured");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 1047, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 1048, 12, "pressureMax");
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    if (distance == null) dart.nullFailed(L0, 1049, 12, "distance");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 1050, 12, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 1051, 12, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 1052, 12, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 1053, 12, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 1054, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 1055, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 1056, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 1057, 12, "tilt");
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    if (synthesized == null) dart.nullFailed(L0, 1058, 10, "synthesized");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1059, 9, "embedderId");
    events.PointerHoverEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, embedderId: embedderId});
    ;
  }).prototype = events.PointerHoverEvent.prototype;
  dart.addTypeTests(events.PointerHoverEvent);
  dart.addTypeCaches(events.PointerHoverEvent);
  dart.setMethodSignature(events.PointerHoverEvent, () => ({
    __proto__: dart.getMethods(events.PointerHoverEvent.__proto__),
    transformed: dart.fnType(events.PointerHoverEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerHoverEvent, L1);
  var original$2 = dart.privateName(events, "_TransformedPointerHoverEvent.original");
  var transform$2 = dart.privateName(events, "_TransformedPointerHoverEvent.transform");
  const _TransformedPointerEvent__CopyPointerHoverEvent$36 = class _TransformedPointerEvent__CopyPointerHoverEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerHoverEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerHoverEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerHoverEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerHoverEvent$36, events._CopyPointerHoverEvent);
  events._TransformedPointerHoverEvent = class _TransformedPointerHoverEvent extends _TransformedPointerEvent__CopyPointerHoverEvent$36 {
    get original() {
      return this[original$2];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$2];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerHoverEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 1096, 38, "original");
    if (transform == null) dart.nullFailed(L0, 1096, 53, "transform");
    this[original$2] = original;
    this[transform$2] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 1097, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 1097, 40, "transform != null");
    events._TransformedPointerHoverEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerHoverEvent.prototype;
  dart.addTypeTests(events._TransformedPointerHoverEvent);
  dart.addTypeCaches(events._TransformedPointerHoverEvent);
  events._TransformedPointerHoverEvent[dart.implements] = () => [events.PointerHoverEvent];
  dart.setMethodSignature(events._TransformedPointerHoverEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerHoverEvent.__proto__),
    transformed: dart.fnType(events.PointerHoverEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerHoverEvent, L1);
  dart.setFieldSignature(events._TransformedPointerHoverEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerHoverEvent.__proto__),
    original: dart.finalFieldType(events.PointerHoverEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerEnterEvent = class _CopyPointerEnterEvent extends events.PointerEvent {};
  events._CopyPointerEnterEvent[dart.mixinOn] = PointerEvent => class _CopyPointerEnterEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerEnterEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), kind: (t2$ = kind, t2$ == null ? this.kind : t2$), device: (t2$0 = device, t2$0 == null ? this.device : t2$0), position: (t2$1 = position, t2$1 == null ? this.position : t2$1), delta: (t2$2 = delta, t2$2 == null ? this.delta : t2$2), buttons: (t2$3 = buttons, t2$3 == null ? this.buttons : t2$3), obscured: (t2$4 = obscured, t2$4 == null ? this.obscured : t2$4), pressureMin: (t2$5 = pressureMin, t2$5 == null ? this.pressureMin : t2$5), pressureMax: (t2$6 = pressureMax, t2$6 == null ? this.pressureMax : t2$6), distance: (t2$7 = distance, t2$7 == null ? this.distance : t2$7), distanceMax: (t2$8 = distanceMax, t2$8 == null ? this.distanceMax : t2$8), size: (t2$9 = size, t2$9 == null ? this.size : t2$9), radiusMajor: (t2$10 = radiusMajor, t2$10 == null ? this.radiusMajor : t2$10), radiusMinor: (t2$11 = radiusMinor, t2$11 == null ? this.radiusMinor : t2$11), radiusMin: (t2$12 = radiusMin, t2$12 == null ? this.radiusMin : t2$12), radiusMax: (t2$13 = radiusMax, t2$13 == null ? this.radiusMax : t2$13), orientation: (t2$14 = orientation, t2$14 == null ? this.orientation : t2$14), tilt: (t2$15 = tilt, t2$15 == null ? this.tilt : t2$15), synthesized: (t2$16 = synthesized, t2$16 == null ? this.synthesized : t2$16), embedderId: (t2$17 = embedderId, t2$17 == null ? this.embedderId : t2$17)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerEnterEvent);
  dart.addTypeCaches(events._CopyPointerEnterEvent);
  events._CopyPointerEnterEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerEnterEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerEnterEvent.__proto__),
    copyWith: dart.fnType(events.PointerEnterEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerEnterEvent, L1);
  const PointerEvent__PointerEventDescription$36$1 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$1.new = function(opts) {
    PointerEvent__PointerEventDescription$36$1.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$1.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$1, events._PointerEventDescription);
  const PointerEvent__CopyPointerEnterEvent$36 = class PointerEvent__CopyPointerEnterEvent extends PointerEvent__PointerEventDescription$36$1 {};
  (PointerEvent__CopyPointerEnterEvent$36.new = function(opts) {
    PointerEvent__CopyPointerEnterEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerEnterEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerEnterEvent$36, events._CopyPointerEnterEvent);
  events.PointerEnterEvent = class PointerEnterEvent extends PointerEvent__CopyPointerEnterEvent$36 {
    static fromHoverEvent(event) {
      if (event == null) dart.nullFailed(L0, 1232, 62, "event");
      return events.PointerEnterEvent.fromMouseEvent(event);
    }
    static fromMouseEvent(event) {
      if (event == null) dart.nullFailed(L0, 1237, 57, "event");
      return new events.PointerEnterEvent.new({timeStamp: event.timeStamp, pointer: event.pointer, kind: event.kind, device: event.device, position: event.position, delta: event.delta, buttons: event.buttons, obscured: event.obscured, pressureMin: event.pressureMin, pressureMax: event.pressureMax, distance: event.distance, distanceMax: event.distanceMax, size: event.size, radiusMajor: event.radiusMajor, radiusMinor: event.radiusMinor, radiusMin: event.radiusMin, radiusMax: event.radiusMax, orientation: event.orientation, tilt: event.tilt, down: event.down, synthesized: event.synthesized}).transformed(event.transform);
    }
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerEnterEvent.new((t2 = PointerEnterEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerEnterEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1177, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 1178, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 1179, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1180, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1181, 12, "position");
    let delta = opts && 'delta' in opts ? opts.delta : C2 || CT.C2;
    if (delta == null) dart.nullFailed(L0, 1182, 12, "delta");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    if (buttons == null) dart.nullFailed(L0, 1183, 9, "buttons");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 1184, 10, "obscured");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 1185, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 1186, 12, "pressureMax");
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    if (distance == null) dart.nullFailed(L0, 1187, 12, "distance");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 1188, 12, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 1189, 12, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 1190, 12, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 1191, 12, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 1192, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 1193, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 1194, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 1195, 12, "tilt");
    let down = opts && 'down' in opts ? opts.down : false;
    if (down == null) dart.nullFailed(L0, 1196, 10, "down");
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    if (synthesized == null) dart.nullFailed(L0, 1197, 10, "synthesized");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1198, 9, "embedderId");
    events.PointerEnterEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: down, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, embedderId: embedderId});
    ;
  }).prototype = events.PointerEnterEvent.prototype;
  dart.addTypeTests(events.PointerEnterEvent);
  dart.addTypeCaches(events.PointerEnterEvent);
  dart.setMethodSignature(events.PointerEnterEvent, () => ({
    __proto__: dart.getMethods(events.PointerEnterEvent.__proto__),
    transformed: dart.fnType(events.PointerEnterEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerEnterEvent, L1);
  var original$3 = dart.privateName(events, "_TransformedPointerEnterEvent.original");
  var transform$3 = dart.privateName(events, "_TransformedPointerEnterEvent.transform");
  const _TransformedPointerEvent__CopyPointerEnterEvent$36 = class _TransformedPointerEvent__CopyPointerEnterEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerEnterEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerEnterEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerEnterEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerEnterEvent$36, events._CopyPointerEnterEvent);
  events._TransformedPointerEnterEvent = class _TransformedPointerEnterEvent extends _TransformedPointerEvent__CopyPointerEnterEvent$36 {
    get original() {
      return this[original$3];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$3];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerEnterEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 1271, 38, "original");
    if (transform == null) dart.nullFailed(L0, 1271, 53, "transform");
    this[original$3] = original;
    this[transform$3] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 1272, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 1272, 40, "transform != null");
    events._TransformedPointerEnterEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerEnterEvent.prototype;
  dart.addTypeTests(events._TransformedPointerEnterEvent);
  dart.addTypeCaches(events._TransformedPointerEnterEvent);
  events._TransformedPointerEnterEvent[dart.implements] = () => [events.PointerEnterEvent];
  dart.setMethodSignature(events._TransformedPointerEnterEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerEnterEvent.__proto__),
    transformed: dart.fnType(events.PointerEnterEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerEnterEvent, L1);
  dart.setFieldSignature(events._TransformedPointerEnterEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerEnterEvent.__proto__),
    original: dart.finalFieldType(events.PointerEnterEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerExitEvent = class _CopyPointerExitEvent extends events.PointerEvent {};
  events._CopyPointerExitEvent[dart.mixinOn] = PointerEvent => class _CopyPointerExitEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerExitEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), kind: (t2$ = kind, t2$ == null ? this.kind : t2$), device: (t2$0 = device, t2$0 == null ? this.device : t2$0), position: (t2$1 = position, t2$1 == null ? this.position : t2$1), delta: (t2$2 = delta, t2$2 == null ? this.delta : t2$2), buttons: (t2$3 = buttons, t2$3 == null ? this.buttons : t2$3), obscured: (t2$4 = obscured, t2$4 == null ? this.obscured : t2$4), pressureMin: (t2$5 = pressureMin, t2$5 == null ? this.pressureMin : t2$5), pressureMax: (t2$6 = pressureMax, t2$6 == null ? this.pressureMax : t2$6), distance: (t2$7 = distance, t2$7 == null ? this.distance : t2$7), distanceMax: (t2$8 = distanceMax, t2$8 == null ? this.distanceMax : t2$8), size: (t2$9 = size, t2$9 == null ? this.size : t2$9), radiusMajor: (t2$10 = radiusMajor, t2$10 == null ? this.radiusMajor : t2$10), radiusMinor: (t2$11 = radiusMinor, t2$11 == null ? this.radiusMinor : t2$11), radiusMin: (t2$12 = radiusMin, t2$12 == null ? this.radiusMin : t2$12), radiusMax: (t2$13 = radiusMax, t2$13 == null ? this.radiusMax : t2$13), orientation: (t2$14 = orientation, t2$14 == null ? this.orientation : t2$14), tilt: (t2$15 = tilt, t2$15 == null ? this.tilt : t2$15), synthesized: (t2$16 = synthesized, t2$16 == null ? this.synthesized : t2$16), embedderId: (t2$17 = embedderId, t2$17 == null ? this.embedderId : t2$17)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerExitEvent);
  dart.addTypeCaches(events._CopyPointerExitEvent);
  events._CopyPointerExitEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerExitEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerExitEvent.__proto__),
    copyWith: dart.fnType(events.PointerExitEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerExitEvent, L1);
  const PointerEvent__PointerEventDescription$36$2 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$2.new = function(opts) {
    PointerEvent__PointerEventDescription$36$2.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$2.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$2, events._PointerEventDescription);
  const PointerEvent__CopyPointerExitEvent$36 = class PointerEvent__CopyPointerExitEvent extends PointerEvent__PointerEventDescription$36$2 {};
  (PointerEvent__CopyPointerExitEvent$36.new = function(opts) {
    PointerEvent__CopyPointerExitEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerExitEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerExitEvent$36, events._CopyPointerExitEvent);
  events.PointerExitEvent = class PointerExitEvent extends PointerEvent__CopyPointerExitEvent$36 {
    static fromHoverEvent(event) {
      if (event == null) dart.nullFailed(L0, 1407, 61, "event");
      return events.PointerExitEvent.fromMouseEvent(event);
    }
    static fromMouseEvent(event) {
      if (event == null) dart.nullFailed(L0, 1412, 56, "event");
      return new events.PointerExitEvent.new({timeStamp: event.timeStamp, pointer: event.pointer, kind: event.kind, device: event.device, position: event.position, delta: event.delta, buttons: event.buttons, obscured: event.obscured, pressureMin: event.pressureMin, pressureMax: event.pressureMax, distance: event.distance, distanceMax: event.distanceMax, size: event.size, radiusMajor: event.radiusMajor, radiusMinor: event.radiusMinor, radiusMin: event.radiusMin, radiusMax: event.radiusMax, orientation: event.orientation, tilt: event.tilt, down: event.down, synthesized: event.synthesized}).transformed(event.transform);
    }
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerExitEvent.new((t2 = PointerExitEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerExitEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1352, 14, "timeStamp");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 1353, 23, "kind");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 1354, 9, "pointer");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1355, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1356, 12, "position");
    let delta = opts && 'delta' in opts ? opts.delta : C2 || CT.C2;
    if (delta == null) dart.nullFailed(L0, 1357, 12, "delta");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    if (buttons == null) dart.nullFailed(L0, 1358, 9, "buttons");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 1359, 10, "obscured");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 1360, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 1361, 12, "pressureMax");
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    if (distance == null) dart.nullFailed(L0, 1362, 12, "distance");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 1363, 12, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 1364, 12, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 1365, 12, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 1366, 12, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 1367, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 1368, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 1369, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 1370, 12, "tilt");
    let down = opts && 'down' in opts ? opts.down : false;
    if (down == null) dart.nullFailed(L0, 1371, 10, "down");
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    if (synthesized == null) dart.nullFailed(L0, 1372, 10, "synthesized");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1373, 9, "embedderId");
    events.PointerExitEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: down, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, embedderId: embedderId});
    ;
  }).prototype = events.PointerExitEvent.prototype;
  dart.addTypeTests(events.PointerExitEvent);
  dart.addTypeCaches(events.PointerExitEvent);
  dart.setMethodSignature(events.PointerExitEvent, () => ({
    __proto__: dart.getMethods(events.PointerExitEvent.__proto__),
    transformed: dart.fnType(events.PointerExitEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerExitEvent, L1);
  var original$4 = dart.privateName(events, "_TransformedPointerExitEvent.original");
  var transform$4 = dart.privateName(events, "_TransformedPointerExitEvent.transform");
  const _TransformedPointerEvent__CopyPointerExitEvent$36 = class _TransformedPointerEvent__CopyPointerExitEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerExitEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerExitEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerExitEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerExitEvent$36, events._CopyPointerExitEvent);
  events._TransformedPointerExitEvent = class _TransformedPointerExitEvent extends _TransformedPointerEvent__CopyPointerExitEvent$36 {
    get original() {
      return this[original$4];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$4];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerExitEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 1447, 37, "original");
    if (transform == null) dart.nullFailed(L0, 1447, 52, "transform");
    this[original$4] = original;
    this[transform$4] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 1448, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 1448, 40, "transform != null");
    events._TransformedPointerExitEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerExitEvent.prototype;
  dart.addTypeTests(events._TransformedPointerExitEvent);
  dart.addTypeCaches(events._TransformedPointerExitEvent);
  events._TransformedPointerExitEvent[dart.implements] = () => [events.PointerExitEvent];
  dart.setMethodSignature(events._TransformedPointerExitEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerExitEvent.__proto__),
    transformed: dart.fnType(events.PointerExitEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerExitEvent, L1);
  dart.setFieldSignature(events._TransformedPointerExitEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerExitEvent.__proto__),
    original: dart.finalFieldType(events.PointerExitEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerDownEvent = class _CopyPointerDownEvent extends events.PointerEvent {};
  events._CopyPointerDownEvent[dart.mixinOn] = PointerEvent => class _CopyPointerDownEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerDownEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), pointer: (t2$ = pointer, t2$ == null ? this.pointer : t2$), kind: (t2$0 = kind, t2$0 == null ? this.kind : t2$0), device: (t2$1 = device, t2$1 == null ? this.device : t2$1), position: (t2$2 = position, t2$2 == null ? this.position : t2$2), buttons: (t2$3 = buttons, t2$3 == null ? this.buttons : t2$3), obscured: (t2$4 = obscured, t2$4 == null ? this.obscured : t2$4), pressure: (t2$5 = pressure, t2$5 == null ? this.pressure : t2$5), pressureMin: (t2$6 = pressureMin, t2$6 == null ? this.pressureMin : t2$6), pressureMax: (t2$7 = pressureMax, t2$7 == null ? this.pressureMax : t2$7), distanceMax: (t2$8 = distanceMax, t2$8 == null ? this.distanceMax : t2$8), size: (t2$9 = size, t2$9 == null ? this.size : t2$9), radiusMajor: (t2$10 = radiusMajor, t2$10 == null ? this.radiusMajor : t2$10), radiusMinor: (t2$11 = radiusMinor, t2$11 == null ? this.radiusMinor : t2$11), radiusMin: (t2$12 = radiusMin, t2$12 == null ? this.radiusMin : t2$12), radiusMax: (t2$13 = radiusMax, t2$13 == null ? this.radiusMax : t2$13), orientation: (t2$14 = orientation, t2$14 == null ? this.orientation : t2$14), tilt: (t2$15 = tilt, t2$15 == null ? this.tilt : t2$15), embedderId: (t2$16 = embedderId, t2$16 == null ? this.embedderId : t2$16)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerDownEvent);
  dart.addTypeCaches(events._CopyPointerDownEvent);
  events._CopyPointerDownEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerDownEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerDownEvent.__proto__),
    copyWith: dart.fnType(events.PointerDownEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerDownEvent, L1);
  const PointerEvent__PointerEventDescription$36$3 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$3.new = function(opts) {
    PointerEvent__PointerEventDescription$36$3.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$3.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$3, events._PointerEventDescription);
  const PointerEvent__CopyPointerDownEvent$36 = class PointerEvent__CopyPointerDownEvent extends PointerEvent__PointerEventDescription$36$3 {};
  (PointerEvent__CopyPointerDownEvent$36.new = function(opts) {
    PointerEvent__CopyPointerDownEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerDownEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerDownEvent$36, events._CopyPointerDownEvent);
  events.PointerDownEvent = class PointerDownEvent extends PointerEvent__CopyPointerDownEvent$36 {
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerDownEvent.new((t2 = PointerDownEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerDownEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1521, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 1522, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 1523, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1524, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1525, 12, "position");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    if (buttons == null) dart.nullFailed(L0, 1526, 9, "buttons");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 1527, 10, "obscured");
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    if (pressure == null) dart.nullFailed(L0, 1528, 12, "pressure");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 1529, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 1530, 12, "pressureMax");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 1531, 12, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 1532, 12, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 1533, 12, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 1534, 12, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 1535, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 1536, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 1537, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 1538, 12, "tilt");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1539, 9, "embedderId");
    events.PointerDownEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, embedderId: embedderId});
    ;
  }).prototype = events.PointerDownEvent.prototype;
  dart.addTypeTests(events.PointerDownEvent);
  dart.addTypeCaches(events.PointerDownEvent);
  dart.setMethodSignature(events.PointerDownEvent, () => ({
    __proto__: dart.getMethods(events.PointerDownEvent.__proto__),
    transformed: dart.fnType(events.PointerDownEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerDownEvent, L1);
  var original$5 = dart.privateName(events, "_TransformedPointerDownEvent.original");
  var transform$5 = dart.privateName(events, "_TransformedPointerDownEvent.transform");
  const _TransformedPointerEvent__CopyPointerDownEvent$36 = class _TransformedPointerEvent__CopyPointerDownEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerDownEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerDownEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerDownEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerDownEvent$36, events._CopyPointerDownEvent);
  events._TransformedPointerDownEvent = class _TransformedPointerDownEvent extends _TransformedPointerEvent__CopyPointerDownEvent$36 {
    get original() {
      return this[original$5];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$5];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerDownEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 1574, 37, "original");
    if (transform == null) dart.nullFailed(L0, 1574, 52, "transform");
    this[original$5] = original;
    this[transform$5] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 1575, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 1575, 40, "transform != null");
    events._TransformedPointerDownEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerDownEvent.prototype;
  dart.addTypeTests(events._TransformedPointerDownEvent);
  dart.addTypeCaches(events._TransformedPointerDownEvent);
  events._TransformedPointerDownEvent[dart.implements] = () => [events.PointerDownEvent];
  dart.setMethodSignature(events._TransformedPointerDownEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerDownEvent.__proto__),
    transformed: dart.fnType(events.PointerDownEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerDownEvent, L1);
  dart.setFieldSignature(events._TransformedPointerDownEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerDownEvent.__proto__),
    original: dart.finalFieldType(events.PointerDownEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerMoveEvent = class _CopyPointerMoveEvent extends events.PointerEvent {};
  events._CopyPointerMoveEvent[dart.mixinOn] = PointerEvent => class _CopyPointerMoveEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17, t2$18;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerMoveEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), pointer: (t2$ = pointer, t2$ == null ? this.pointer : t2$), kind: (t2$0 = kind, t2$0 == null ? this.kind : t2$0), device: (t2$1 = device, t2$1 == null ? this.device : t2$1), position: (t2$2 = position, t2$2 == null ? this.position : t2$2), delta: (t2$3 = delta, t2$3 == null ? this.delta : t2$3), buttons: (t2$4 = buttons, t2$4 == null ? this.buttons : t2$4), obscured: (t2$5 = obscured, t2$5 == null ? this.obscured : t2$5), pressure: (t2$6 = pressure, t2$6 == null ? this.pressure : t2$6), pressureMin: (t2$7 = pressureMin, t2$7 == null ? this.pressureMin : t2$7), pressureMax: (t2$8 = pressureMax, t2$8 == null ? this.pressureMax : t2$8), distanceMax: (t2$9 = distanceMax, t2$9 == null ? this.distanceMax : t2$9), size: (t2$10 = size, t2$10 == null ? this.size : t2$10), radiusMajor: (t2$11 = radiusMajor, t2$11 == null ? this.radiusMajor : t2$11), radiusMinor: (t2$12 = radiusMinor, t2$12 == null ? this.radiusMinor : t2$12), radiusMin: (t2$13 = radiusMin, t2$13 == null ? this.radiusMin : t2$13), radiusMax: (t2$14 = radiusMax, t2$14 == null ? this.radiusMax : t2$14), orientation: (t2$15 = orientation, t2$15 == null ? this.orientation : t2$15), tilt: (t2$16 = tilt, t2$16 == null ? this.tilt : t2$16), synthesized: (t2$17 = synthesized, t2$17 == null ? this.synthesized : t2$17), embedderId: (t2$18 = embedderId, t2$18 == null ? this.embedderId : t2$18)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerMoveEvent);
  dart.addTypeCaches(events._CopyPointerMoveEvent);
  events._CopyPointerMoveEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerMoveEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerMoveEvent.__proto__),
    copyWith: dart.fnType(events.PointerMoveEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerMoveEvent, L1);
  const PointerEvent__PointerEventDescription$36$4 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$4.new = function(opts) {
    PointerEvent__PointerEventDescription$36$4.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$4.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$4, events._PointerEventDescription);
  const PointerEvent__CopyPointerMoveEvent$36 = class PointerEvent__CopyPointerMoveEvent extends PointerEvent__PointerEventDescription$36$4 {};
  (PointerEvent__CopyPointerMoveEvent$36.new = function(opts) {
    PointerEvent__CopyPointerMoveEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerMoveEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerMoveEvent$36, events._CopyPointerMoveEvent);
  events.PointerMoveEvent = class PointerMoveEvent extends PointerEvent__CopyPointerMoveEvent$36 {
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerMoveEvent.new((t2 = PointerMoveEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerMoveEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1653, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 1654, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 1655, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1656, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1657, 12, "position");
    let delta = opts && 'delta' in opts ? opts.delta : C2 || CT.C2;
    if (delta == null) dart.nullFailed(L0, 1658, 12, "delta");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    if (buttons == null) dart.nullFailed(L0, 1659, 9, "buttons");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 1660, 10, "obscured");
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    if (pressure == null) dart.nullFailed(L0, 1661, 12, "pressure");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 1662, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 1663, 12, "pressureMax");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 1664, 12, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 1665, 12, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 1666, 12, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 1667, 12, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 1668, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 1669, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 1670, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 1671, 12, "tilt");
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    if (platformData == null) dart.nullFailed(L0, 1672, 9, "platformData");
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    if (synthesized == null) dart.nullFailed(L0, 1673, 10, "synthesized");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1674, 9, "embedderId");
    events.PointerMoveEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, platformData: platformData, synthesized: synthesized, embedderId: embedderId});
    ;
  }).prototype = events.PointerMoveEvent.prototype;
  dart.addTypeTests(events.PointerMoveEvent);
  dart.addTypeCaches(events.PointerMoveEvent);
  dart.setMethodSignature(events.PointerMoveEvent, () => ({
    __proto__: dart.getMethods(events.PointerMoveEvent.__proto__),
    transformed: dart.fnType(events.PointerMoveEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerMoveEvent, L1);
  var original$6 = dart.privateName(events, "_TransformedPointerMoveEvent.original");
  var transform$6 = dart.privateName(events, "_TransformedPointerMoveEvent.transform");
  const _TransformedPointerEvent__CopyPointerMoveEvent$36 = class _TransformedPointerEvent__CopyPointerMoveEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerMoveEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerMoveEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerMoveEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerMoveEvent$36, events._CopyPointerMoveEvent);
  events._TransformedPointerMoveEvent = class _TransformedPointerMoveEvent extends _TransformedPointerEvent__CopyPointerMoveEvent$36 {
    get original() {
      return this[original$6];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$6];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerMoveEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 1713, 37, "original");
    if (transform == null) dart.nullFailed(L0, 1713, 52, "transform");
    this[original$6] = original;
    this[transform$6] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 1714, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 1714, 40, "transform != null");
    events._TransformedPointerMoveEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerMoveEvent.prototype;
  dart.addTypeTests(events._TransformedPointerMoveEvent);
  dart.addTypeCaches(events._TransformedPointerMoveEvent);
  events._TransformedPointerMoveEvent[dart.implements] = () => [events.PointerMoveEvent];
  dart.setMethodSignature(events._TransformedPointerMoveEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerMoveEvent.__proto__),
    transformed: dart.fnType(events.PointerMoveEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerMoveEvent, L1);
  dart.setFieldSignature(events._TransformedPointerMoveEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerMoveEvent.__proto__),
    original: dart.finalFieldType(events.PointerMoveEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerUpEvent = class _CopyPointerUpEvent extends events.PointerEvent {};
  events._CopyPointerUpEvent[dart.mixinOn] = PointerEvent => class _CopyPointerUpEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerUpEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), pointer: (t2$ = pointer, t2$ == null ? this.pointer : t2$), kind: (t2$0 = kind, t2$0 == null ? this.kind : t2$0), device: (t2$1 = device, t2$1 == null ? this.device : t2$1), position: (t2$2 = position, t2$2 == null ? this.position : t2$2), buttons: (t2$3 = buttons, t2$3 == null ? this.buttons : t2$3), obscured: (t2$4 = obscured, t2$4 == null ? this.obscured : t2$4), pressure: (t2$5 = pressure, t2$5 == null ? this.pressure : t2$5), pressureMin: (t2$6 = pressureMin, t2$6 == null ? this.pressureMin : t2$6), pressureMax: (t2$7 = pressureMax, t2$7 == null ? this.pressureMax : t2$7), distance: (t2$8 = distance, t2$8 == null ? this.distance : t2$8), distanceMax: (t2$9 = distanceMax, t2$9 == null ? this.distanceMax : t2$9), size: (t2$10 = size, t2$10 == null ? this.size : t2$10), radiusMajor: (t2$11 = radiusMajor, t2$11 == null ? this.radiusMajor : t2$11), radiusMinor: (t2$12 = radiusMinor, t2$12 == null ? this.radiusMinor : t2$12), radiusMin: (t2$13 = radiusMin, t2$13 == null ? this.radiusMin : t2$13), radiusMax: (t2$14 = radiusMax, t2$14 == null ? this.radiusMax : t2$14), orientation: (t2$15 = orientation, t2$15 == null ? this.orientation : t2$15), tilt: (t2$16 = tilt, t2$16 == null ? this.tilt : t2$16), embedderId: (t2$17 = embedderId, t2$17 == null ? this.embedderId : t2$17)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerUpEvent);
  dart.addTypeCaches(events._CopyPointerUpEvent);
  events._CopyPointerUpEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerUpEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerUpEvent.__proto__),
    copyWith: dart.fnType(events.PointerUpEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), localPosition: dart.nullable(ui.Offset), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerUpEvent, L1);
  const PointerEvent__PointerEventDescription$36$5 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$5.new = function(opts) {
    PointerEvent__PointerEventDescription$36$5.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$5.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$5, events._PointerEventDescription);
  const PointerEvent__CopyPointerUpEvent$36 = class PointerEvent__CopyPointerUpEvent extends PointerEvent__PointerEventDescription$36$5 {};
  (PointerEvent__CopyPointerUpEvent$36.new = function(opts) {
    PointerEvent__CopyPointerUpEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerUpEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerUpEvent$36, events._CopyPointerUpEvent);
  events.PointerUpEvent = class PointerUpEvent extends PointerEvent__CopyPointerUpEvent$36 {
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerUpEvent.new((t2 = PointerUpEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerUpEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1789, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 1790, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 1791, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1792, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1793, 12, "position");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    if (buttons == null) dart.nullFailed(L0, 1794, 9, "buttons");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 1795, 10, "obscured");
    let pressure = opts && 'pressure' in opts ? opts.pressure : 0;
    if (pressure == null) dart.nullFailed(L0, 1798, 12, "pressure");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 1799, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 1800, 12, "pressureMax");
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    if (distance == null) dart.nullFailed(L0, 1801, 12, "distance");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 1802, 12, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 1803, 12, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 1804, 12, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 1805, 12, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 1806, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 1807, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 1808, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 1809, 12, "tilt");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1810, 9, "embedderId");
    events.PointerUpEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, embedderId: embedderId});
    ;
  }).prototype = events.PointerUpEvent.prototype;
  dart.addTypeTests(events.PointerUpEvent);
  dart.addTypeCaches(events.PointerUpEvent);
  dart.setMethodSignature(events.PointerUpEvent, () => ({
    __proto__: dart.getMethods(events.PointerUpEvent.__proto__),
    transformed: dart.fnType(events.PointerUpEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerUpEvent, L1);
  var original$7 = dart.privateName(events, "_TransformedPointerUpEvent.original");
  var transform$7 = dart.privateName(events, "_TransformedPointerUpEvent.transform");
  const _TransformedPointerEvent__CopyPointerUpEvent$36 = class _TransformedPointerEvent__CopyPointerUpEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerUpEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerUpEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerUpEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerUpEvent$36, events._CopyPointerUpEvent);
  events._TransformedPointerUpEvent = class _TransformedPointerUpEvent extends _TransformedPointerEvent__CopyPointerUpEvent$36 {
    get original() {
      return this[original$7];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$7];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerUpEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 1845, 35, "original");
    if (transform == null) dart.nullFailed(L0, 1845, 50, "transform");
    this[original$7] = original;
    this[transform$7] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 1846, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 1846, 40, "transform != null");
    events._TransformedPointerUpEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerUpEvent.prototype;
  dart.addTypeTests(events._TransformedPointerUpEvent);
  dart.addTypeCaches(events._TransformedPointerUpEvent);
  events._TransformedPointerUpEvent[dart.implements] = () => [events.PointerUpEvent];
  dart.setMethodSignature(events._TransformedPointerUpEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerUpEvent.__proto__),
    transformed: dart.fnType(events.PointerUpEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerUpEvent, L1);
  dart.setFieldSignature(events._TransformedPointerUpEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerUpEvent.__proto__),
    original: dart.finalFieldType(events.PointerUpEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  var C3;
  events.PointerSignalEvent = class PointerSignalEvent extends events.PointerEvent {};
  (events.PointerSignalEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1872, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 1873, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C3 || CT.C3;
    if (kind == null) dart.nullFailed(L0, 1874, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1875, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1876, 12, "position");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1877, 9, "embedderId");
    events.PointerSignalEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, embedderId: embedderId});
    ;
  }).prototype = events.PointerSignalEvent.prototype;
  dart.addTypeTests(events.PointerSignalEvent);
  dart.addTypeCaches(events.PointerSignalEvent);
  dart.setLibraryUri(events.PointerSignalEvent, L1);
  events._CopyPointerScrollEvent = class _CopyPointerScrollEvent extends events.PointerEvent {};
  events._CopyPointerScrollEvent[dart.mixinOn] = PointerEvent => class _CopyPointerScrollEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerScrollEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), kind: (t2$ = kind, t2$ == null ? this.kind : t2$), device: (t2$0 = device, t2$0 == null ? this.device : t2$0), position: (t2$1 = position, t2$1 == null ? this.position : t2$1), scrollDelta: this.scrollDelta, embedderId: (t2$2 = embedderId, t2$2 == null ? this.embedderId : t2$2)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerScrollEvent);
  dart.addTypeCaches(events._CopyPointerScrollEvent);
  events._CopyPointerScrollEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerScrollEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerScrollEvent.__proto__),
    copyWith: dart.fnType(events.PointerScrollEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerScrollEvent, L1);
  var scrollDelta$ = dart.privateName(events, "PointerScrollEvent.scrollDelta");
  const PointerSignalEvent__PointerEventDescription$36 = class PointerSignalEvent__PointerEventDescription extends events.PointerSignalEvent {};
  (PointerSignalEvent__PointerEventDescription$36.new = function(opts) {
    PointerSignalEvent__PointerEventDescription$36.__proto__.new.call(this, opts);
  }).prototype = PointerSignalEvent__PointerEventDescription$36.prototype;
  dart.applyMixin(PointerSignalEvent__PointerEventDescription$36, events._PointerEventDescription);
  const PointerSignalEvent__CopyPointerScrollEvent$36 = class PointerSignalEvent__CopyPointerScrollEvent extends PointerSignalEvent__PointerEventDescription$36 {};
  (PointerSignalEvent__CopyPointerScrollEvent$36.new = function(opts) {
    PointerSignalEvent__CopyPointerScrollEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerSignalEvent__CopyPointerScrollEvent$36.prototype;
  dart.applyMixin(PointerSignalEvent__CopyPointerScrollEvent$36, events._CopyPointerScrollEvent);
  events.PointerScrollEvent = class PointerScrollEvent extends PointerSignalEvent__CopyPointerScrollEvent$36 {
    get scrollDelta() {
      return this[scrollDelta$];
    }
    set scrollDelta(value) {
      super.scrollDelta = value;
    }
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerScrollEvent.new((t2 = PointerScrollEventN().as(this.original), t2 == null ? this : t2), transform);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1973, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("scrollDelta", this.scrollDelta));
    }
  };
  (events.PointerScrollEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 1942, 14, "timeStamp");
    let kind = opts && 'kind' in opts ? opts.kind : C3 || CT.C3;
    if (kind == null) dart.nullFailed(L0, 1943, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 1944, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 1945, 12, "position");
    let scrollDelta = opts && 'scrollDelta' in opts ? opts.scrollDelta : C2 || CT.C2;
    if (scrollDelta == null) dart.nullFailed(L0, 1946, 10, "scrollDelta");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 1947, 9, "embedderId");
    this[scrollDelta$] = scrollDelta;
    if (!(timeStamp != null)) dart.assertFailed(null, L0, 1948, 15, "timeStamp != null");
    if (!(kind != null)) dart.assertFailed(null, L0, 1949, 15, "kind != null");
    if (!(device != null)) dart.assertFailed(null, L0, 1950, 15, "device != null");
    if (!(position != null)) dart.assertFailed(null, L0, 1951, 15, "position != null");
    if (!(scrollDelta != null)) dart.assertFailed(null, L0, 1952, 15, "scrollDelta != null");
    events.PointerScrollEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, embedderId: embedderId});
    ;
  }).prototype = events.PointerScrollEvent.prototype;
  dart.addTypeTests(events.PointerScrollEvent);
  dart.addTypeCaches(events.PointerScrollEvent);
  dart.setMethodSignature(events.PointerScrollEvent, () => ({
    __proto__: dart.getMethods(events.PointerScrollEvent.__proto__),
    transformed: dart.fnType(events.PointerScrollEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerScrollEvent, L1);
  dart.setFieldSignature(events.PointerScrollEvent, () => ({
    __proto__: dart.getFields(events.PointerScrollEvent.__proto__),
    scrollDelta: dart.finalFieldType(ui.Offset)
  }));
  var original$8 = dart.privateName(events, "_TransformedPointerScrollEvent.original");
  var transform$8 = dart.privateName(events, "_TransformedPointerScrollEvent.transform");
  const _TransformedPointerEvent__CopyPointerScrollEvent$36 = class _TransformedPointerEvent__CopyPointerScrollEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerScrollEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerScrollEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerScrollEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerScrollEvent$36, events._CopyPointerScrollEvent);
  events._TransformedPointerScrollEvent = class _TransformedPointerScrollEvent extends _TransformedPointerEvent__CopyPointerScrollEvent$36 {
    get original() {
      return this[original$8];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$8];
    }
    set transform(value) {
      super.transform = value;
    }
    get scrollDelta() {
      return this.original.scrollDelta;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1996, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("scrollDelta", this.scrollDelta));
    }
  };
  (events._TransformedPointerScrollEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 1980, 39, "original");
    if (transform == null) dart.nullFailed(L0, 1980, 54, "transform");
    this[original$8] = original;
    this[transform$8] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 1981, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 1981, 40, "transform != null");
    events._TransformedPointerScrollEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerScrollEvent.prototype;
  dart.addTypeTests(events._TransformedPointerScrollEvent);
  dart.addTypeCaches(events._TransformedPointerScrollEvent);
  events._TransformedPointerScrollEvent[dart.implements] = () => [events.PointerScrollEvent];
  dart.setMethodSignature(events._TransformedPointerScrollEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerScrollEvent.__proto__),
    transformed: dart.fnType(events.PointerScrollEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setGetterSignature(events._TransformedPointerScrollEvent, () => ({
    __proto__: dart.getGetters(events._TransformedPointerScrollEvent.__proto__),
    scrollDelta: ui.Offset
  }));
  dart.setLibraryUri(events._TransformedPointerScrollEvent, L1);
  dart.setFieldSignature(events._TransformedPointerScrollEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerScrollEvent.__proto__),
    original: dart.finalFieldType(events.PointerScrollEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  events._CopyPointerCancelEvent = class _CopyPointerCancelEvent extends events.PointerEvent {};
  events._CopyPointerCancelEvent[dart.mixinOn] = PointerEvent => class _CopyPointerCancelEvent extends PointerEvent {
    copyWith(opts) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let pointer = opts && 'pointer' in opts ? opts.pointer : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let device = opts && 'device' in opts ? opts.device : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let pressure = opts && 'pressure' in opts ? opts.pressure : null;
      let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : null;
      let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : null;
      let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : null;
      let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : null;
      let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : null;
      let orientation = opts && 'orientation' in opts ? opts.orientation : null;
      let tilt = opts && 'tilt' in opts ? opts.tilt : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : null;
      let embedderId = opts && 'embedderId' in opts ? opts.embedderId : null;
      return new events.PointerCancelEvent.new({timeStamp: (t2 = timeStamp, t2 == null ? this.timeStamp : t2), pointer: (t2$ = pointer, t2$ == null ? this.pointer : t2$), kind: (t2$0 = kind, t2$0 == null ? this.kind : t2$0), device: (t2$1 = device, t2$1 == null ? this.device : t2$1), position: (t2$2 = position, t2$2 == null ? this.position : t2$2), buttons: (t2$3 = buttons, t2$3 == null ? this.buttons : t2$3), obscured: (t2$4 = obscured, t2$4 == null ? this.obscured : t2$4), pressureMin: (t2$5 = pressureMin, t2$5 == null ? this.pressureMin : t2$5), pressureMax: (t2$6 = pressureMax, t2$6 == null ? this.pressureMax : t2$6), distance: (t2$7 = distance, t2$7 == null ? this.distance : t2$7), distanceMax: (t2$8 = distanceMax, t2$8 == null ? this.distanceMax : t2$8), size: (t2$9 = size, t2$9 == null ? this.size : t2$9), radiusMajor: (t2$10 = radiusMajor, t2$10 == null ? this.radiusMajor : t2$10), radiusMinor: (t2$11 = radiusMinor, t2$11 == null ? this.radiusMinor : t2$11), radiusMin: (t2$12 = radiusMin, t2$12 == null ? this.radiusMin : t2$12), radiusMax: (t2$13 = radiusMax, t2$13 == null ? this.radiusMax : t2$13), orientation: (t2$14 = orientation, t2$14 == null ? this.orientation : t2$14), tilt: (t2$15 = tilt, t2$15 == null ? this.tilt : t2$15), embedderId: (t2$16 = embedderId, t2$16 == null ? this.embedderId : t2$16)}).transformed(this.transform);
    }
  };
  dart.addTypeTests(events._CopyPointerCancelEvent);
  dart.addTypeCaches(events._CopyPointerCancelEvent);
  events._CopyPointerCancelEvent[dart.implements] = () => [events.PointerEvent];
  dart.setMethodSignature(events._CopyPointerCancelEvent, () => ({
    __proto__: dart.getMethods(events._CopyPointerCancelEvent.__proto__),
    copyWith: dart.fnType(events.PointerCancelEvent, [], {buttons: dart.nullable(core.int), delta: dart.nullable(ui.Offset), device: dart.nullable(core.int), distance: dart.nullable(core.double), distanceMax: dart.nullable(core.double), embedderId: dart.nullable(core.int), kind: dart.nullable(ui.PointerDeviceKind), obscured: dart.nullable(core.bool), orientation: dart.nullable(core.double), pointer: dart.nullable(core.int), position: dart.nullable(ui.Offset), pressure: dart.nullable(core.double), pressureMax: dart.nullable(core.double), pressureMin: dart.nullable(core.double), radiusMajor: dart.nullable(core.double), radiusMax: dart.nullable(core.double), radiusMin: dart.nullable(core.double), radiusMinor: dart.nullable(core.double), size: dart.nullable(core.double), synthesized: dart.nullable(core.bool), tilt: dart.nullable(core.double), timeStamp: dart.nullable(core.Duration)}, {})
  }));
  dart.setLibraryUri(events._CopyPointerCancelEvent, L1);
  const PointerEvent__PointerEventDescription$36$6 = class PointerEvent__PointerEventDescription extends events.PointerEvent {};
  (PointerEvent__PointerEventDescription$36$6.new = function(opts) {
    PointerEvent__PointerEventDescription$36$6.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__PointerEventDescription$36$6.prototype;
  dart.applyMixin(PointerEvent__PointerEventDescription$36$6, events._PointerEventDescription);
  const PointerEvent__CopyPointerCancelEvent$36 = class PointerEvent__CopyPointerCancelEvent extends PointerEvent__PointerEventDescription$36$6 {};
  (PointerEvent__CopyPointerCancelEvent$36.new = function(opts) {
    PointerEvent__CopyPointerCancelEvent$36.__proto__.new.call(this, opts);
  }).prototype = PointerEvent__CopyPointerCancelEvent$36.prototype;
  dart.applyMixin(PointerEvent__CopyPointerCancelEvent$36, events._CopyPointerCancelEvent);
  events.PointerCancelEvent = class PointerCancelEvent extends PointerEvent__CopyPointerCancelEvent$36 {
    transformed(transform) {
      let t2;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events._TransformedPointerCancelEvent.new((t2 = PointerCancelEventN().as(this.original), t2 == null ? this : t2), transform);
    }
  };
  (events.PointerCancelEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C0 || CT.C0;
    if (timeStamp == null) dart.nullFailed(L0, 2063, 14, "timeStamp");
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    if (pointer == null) dart.nullFailed(L0, 2064, 9, "pointer");
    let kind = opts && 'kind' in opts ? opts.kind : C1 || CT.C1;
    if (kind == null) dart.nullFailed(L0, 2065, 23, "kind");
    let device = opts && 'device' in opts ? opts.device : 0;
    if (device == null) dart.nullFailed(L0, 2066, 9, "device");
    let position = opts && 'position' in opts ? opts.position : C2 || CT.C2;
    if (position == null) dart.nullFailed(L0, 2067, 12, "position");
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    if (buttons == null) dart.nullFailed(L0, 2068, 9, "buttons");
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    if (obscured == null) dart.nullFailed(L0, 2069, 10, "obscured");
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    if (pressureMin == null) dart.nullFailed(L0, 2070, 12, "pressureMin");
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    if (pressureMax == null) dart.nullFailed(L0, 2071, 12, "pressureMax");
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    if (distance == null) dart.nullFailed(L0, 2072, 12, "distance");
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    if (distanceMax == null) dart.nullFailed(L0, 2073, 12, "distanceMax");
    let size = opts && 'size' in opts ? opts.size : 0;
    if (size == null) dart.nullFailed(L0, 2074, 12, "size");
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    if (radiusMajor == null) dart.nullFailed(L0, 2075, 12, "radiusMajor");
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    if (radiusMinor == null) dart.nullFailed(L0, 2076, 12, "radiusMinor");
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    if (radiusMin == null) dart.nullFailed(L0, 2077, 12, "radiusMin");
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    if (radiusMax == null) dart.nullFailed(L0, 2078, 12, "radiusMax");
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    if (orientation == null) dart.nullFailed(L0, 2079, 12, "orientation");
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    if (tilt == null) dart.nullFailed(L0, 2080, 12, "tilt");
    let embedderId = opts && 'embedderId' in opts ? opts.embedderId : 0;
    if (embedderId == null) dart.nullFailed(L0, 2081, 9, "embedderId");
    events.PointerCancelEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, embedderId: embedderId});
    ;
  }).prototype = events.PointerCancelEvent.prototype;
  dart.addTypeTests(events.PointerCancelEvent);
  dart.addTypeCaches(events.PointerCancelEvent);
  dart.setMethodSignature(events.PointerCancelEvent, () => ({
    __proto__: dart.getMethods(events.PointerCancelEvent.__proto__),
    transformed: dart.fnType(events.PointerCancelEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events.PointerCancelEvent, L1);
  var original$9 = dart.privateName(events, "_TransformedPointerCancelEvent.original");
  var transform$9 = dart.privateName(events, "_TransformedPointerCancelEvent.transform");
  const _TransformedPointerEvent__CopyPointerCancelEvent$36 = class _TransformedPointerEvent__CopyPointerCancelEvent extends events._TransformedPointerEvent {};
  (_TransformedPointerEvent__CopyPointerCancelEvent$36.new = function() {
    _TransformedPointerEvent__CopyPointerCancelEvent$36.__proto__.new.call(this);
  }).prototype = _TransformedPointerEvent__CopyPointerCancelEvent$36.prototype;
  dart.applyMixin(_TransformedPointerEvent__CopyPointerCancelEvent$36, events._CopyPointerCancelEvent);
  events._TransformedPointerCancelEvent = class _TransformedPointerCancelEvent extends _TransformedPointerEvent__CopyPointerCancelEvent$36 {
    get original() {
      return this[original$9];
    }
    set original(value) {
      super.original = value;
    }
    get transform() {
      return this[transform$9];
    }
    set transform(value) {
      super.transform = value;
    }
    transformed(transform) {
      return this.original.transformed(transform);
    }
  };
  (events._TransformedPointerCancelEvent.new = function(original, transform) {
    if (original == null) dart.nullFailed(L0, 2155, 39, "original");
    if (transform == null) dart.nullFailed(L0, 2155, 54, "transform");
    this[original$9] = original;
    this[transform$9] = transform;
    if (!(original != null)) dart.assertFailed(null, L0, 2156, 14, "original != null");
    if (!(transform != null)) dart.assertFailed(null, L0, 2156, 40, "transform != null");
    events._TransformedPointerCancelEvent.__proto__.new.call(this);
    ;
  }).prototype = events._TransformedPointerCancelEvent.prototype;
  dart.addTypeTests(events._TransformedPointerCancelEvent);
  dart.addTypeCaches(events._TransformedPointerCancelEvent);
  events._TransformedPointerCancelEvent[dart.implements] = () => [events.PointerCancelEvent];
  dart.setMethodSignature(events._TransformedPointerCancelEvent, () => ({
    __proto__: dart.getMethods(events._TransformedPointerCancelEvent.__proto__),
    transformed: dart.fnType(events.PointerCancelEvent, [dart.nullable(vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(events._TransformedPointerCancelEvent, L1);
  dart.setFieldSignature(events._TransformedPointerCancelEvent, () => ({
    __proto__: dart.getFields(events._TransformedPointerCancelEvent.__proto__),
    original: dart.finalFieldType(events.PointerCancelEvent),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  var C4;
  var C5;
  var C6;
  events.nthMouseButton = function nthMouseButton(number) {
    if (number == null) dart.nullFailed(L0, 160, 24, "number");
    return ((1)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.nthStylusButton = function nthStylusButton(number) {
    if (number == null) dart.nullFailed(L0, 169, 25, "number");
    return ((2)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.smallestButton = function smallestButton(buttons) {
    if (buttons == null) dart.nullFailed(L0, 189, 24, "buttons");
    return (dart.notNull(buttons) & -dart.notNull(buttons)) >>> 0;
  };
  events.isSingleButton = function isSingleButton(buttons) {
    if (buttons == null) dart.nullFailed(L0, 210, 25, "buttons");
    return buttons !== 0 && events.smallestButton(buttons) == buttons;
  };
  events.computeHitSlop = function computeHitSlop(kind) {
    if (kind == null) dart.nullFailed(L0, 2116, 41, "kind");
    switch (kind) {
      case C3 || CT.C3:
      {
        return 1;
      }
      case C4 || CT.C4:
      case C5 || CT.C5:
      case C6 || CT.C6:
      case C1 || CT.C1:
      {
        return 18;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  events.computePanSlop = function computePanSlop(kind) {
    if (kind == null) dart.nullFailed(L0, 2129, 41, "kind");
    switch (kind) {
      case C3 || CT.C3:
      {
        return 2;
      }
      case C4 || CT.C4:
      case C5 || CT.C5:
      case C6 || CT.C6:
      case C1 || CT.C1:
      {
        return 36;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  events.computeScaleSlop = function computeScaleSlop(kind) {
    if (kind == null) dart.nullFailed(L0, 2142, 43, "kind");
    switch (kind) {
      case C3 || CT.C3:
      {
        return 1;
      }
      case C4 || CT.C4:
      case C5 || CT.C5:
      case C6 || CT.C6:
      case C1 || CT.C1:
      {
        return 18;
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  dart.defineLazy(events, {
    /*events.kPrimaryButton*/get kPrimaryButton() {
      return 1;
    },
    /*events.kSecondaryButton*/get kSecondaryButton() {
      return 2;
    },
    /*events.kPrimaryMouseButton*/get kPrimaryMouseButton() {
      return 1;
    },
    /*events.kSecondaryMouseButton*/get kSecondaryMouseButton() {
      return 2;
    },
    /*events.kStylusContact*/get kStylusContact() {
      return 1;
    },
    /*events.kPrimaryStylusButton*/get kPrimaryStylusButton() {
      return 2;
    },
    /*events.kTertiaryButton*/get kTertiaryButton() {
      return 4;
    },
    /*events.kMiddleMouseButton*/get kMiddleMouseButton() {
      return 4;
    },
    /*events.kSecondaryStylusButton*/get kSecondaryStylusButton() {
      return 4;
    },
    /*events.kBackMouseButton*/get kBackMouseButton() {
      return 8;
    },
    /*events.kForwardMouseButton*/get kForwardMouseButton() {
      return 16;
    },
    /*events.kTouchContact*/get kTouchContact() {
      return 1;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/events.dart", {
    "package:flutter/src/gestures/events.dart": events
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["events.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/events.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__events: events
  };
}));

//# sourceMappingURL=events.dart.lib.js.map
