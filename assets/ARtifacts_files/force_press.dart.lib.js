define(['dart_sdk', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/foundation/print.dart'], (function load__packages__flutter__src__gestures__force_press_dart(dart_sdk, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__foundation__print$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  var force_press = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isNaN = dartx.isNaN;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  var _ForceStateL = () => (_ForceStateL = dart.constFn(dart.legacy(force_press._ForceState)))();
  var doubleAnddoubleAnddoubleTodouble = () => (doubleAnddoubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.double])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/gestures/force_press.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/force_press.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$]: "_ForceState.ready",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$]: "_ForceState.possible",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$]: "_ForceState.accepted",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$]: "_ForceState.started",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$]: "_ForceState.peaked",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], _ForceStateL());
    },
    get C6() {
      return C6 = dart.fn(force_press.ForcePressGestureRecognizer._inverseLerp, doubleAnddoubleAnddoubleTodouble());
    }
  }, false);
  var _name$ = dart.privateName(force_press, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  force_press._ForceState = class _ForceState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (force_press._ForceState.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 13, 6, "index");
    if (_name == null) dart.nullFailed(L0, 13, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = force_press._ForceState.prototype;
  dart.addTypeTests(force_press._ForceState);
  dart.addTypeCaches(force_press._ForceState);
  dart.setLibraryUri(force_press._ForceState, L1);
  dart.setFieldSignature(force_press._ForceState, () => ({
    __proto__: dart.getFields(force_press._ForceState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(force_press._ForceState, ['toString']);
  force_press._ForceState.ready = C0 || CT.C0;
  force_press._ForceState.possible = C1 || CT.C1;
  force_press._ForceState.accepted = C2 || CT.C2;
  force_press._ForceState.started = C3 || CT.C3;
  force_press._ForceState.peaked = C4 || CT.C4;
  force_press._ForceState.values = C5 || CT.C5;
  var globalPosition$ = dart.privateName(force_press, "ForcePressDetails.globalPosition");
  var localPosition$ = dart.privateName(force_press, "ForcePressDetails.localPosition");
  var pressure$ = dart.privateName(force_press, "ForcePressDetails.pressure");
  force_press.ForcePressDetails = class ForcePressDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
  };
  (force_press.ForcePressDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    if (globalPosition == null) dart.nullFailed(L0, 51, 19, "globalPosition");
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    if (pressure == null) dart.nullFailed(L0, 53, 19, "pressure");
    this[globalPosition$] = globalPosition;
    this[pressure$] = pressure;
    if (!(globalPosition != null)) dart.assertFailed(null, L0, 54, 15, "globalPosition != null");
    if (!(pressure != null)) dart.assertFailed(null, L0, 55, 15, "pressure != null");
    this[localPosition$] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = force_press.ForcePressDetails.prototype;
  dart.addTypeTests(force_press.ForcePressDetails);
  dart.addTypeCaches(force_press.ForcePressDetails);
  dart.setLibraryUri(force_press.ForcePressDetails, L1);
  dart.setFieldSignature(force_press.ForcePressDetails, () => ({
    __proto__: dart.getFields(force_press.ForcePressDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    pressure: dart.finalFieldType(core.double)
  }));
  var C6;
  var __ForcePressGestureRecognizer__lastPosition = dart.privateName(force_press, "_#ForcePressGestureRecognizer#_lastPosition");
  var __ForcePressGestureRecognizer__lastPosition_isSet = dart.privateName(force_press, "_#ForcePressGestureRecognizer#_lastPosition#isSet");
  var __ForcePressGestureRecognizer__lastPressure = dart.privateName(force_press, "_#ForcePressGestureRecognizer#_lastPressure");
  var __ForcePressGestureRecognizer__lastPressure_isSet = dart.privateName(force_press, "_#ForcePressGestureRecognizer#_lastPressure#isSet");
  var _state = dart.privateName(force_press, "_state");
  var _lastPosition = dart.privateName(force_press, "_lastPosition");
  var _lastPressure = dart.privateName(force_press, "_lastPressure");
  var onStart = dart.privateName(force_press, "ForcePressGestureRecognizer.onStart");
  var onUpdate = dart.privateName(force_press, "ForcePressGestureRecognizer.onUpdate");
  var onPeak = dart.privateName(force_press, "ForcePressGestureRecognizer.onPeak");
  var onEnd = dart.privateName(force_press, "ForcePressGestureRecognizer.onEnd");
  var startPressure$ = dart.privateName(force_press, "ForcePressGestureRecognizer.startPressure");
  var peakPressure$ = dart.privateName(force_press, "ForcePressGestureRecognizer.peakPressure");
  var interpolation$ = dart.privateName(force_press, "ForcePressGestureRecognizer.interpolation");
  force_press.ForcePressGestureRecognizer = class ForcePressGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onPeak() {
      return this[onPeak];
    }
    set onPeak(value) {
      this[onPeak] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get startPressure() {
      return this[startPressure$];
    }
    set startPressure(value) {
      super.startPressure = value;
    }
    get peakPressure() {
      return this[peakPressure$];
    }
    set peakPressure(value) {
      super.peakPressure = value;
    }
    get interpolation() {
      return this[interpolation$];
    }
    set interpolation(value) {
      super.interpolation = value;
    }
    get [_lastPosition]() {
      let t0;
      return dart.test(this[__ForcePressGestureRecognizer__lastPosition_isSet]) ? (t0 = this[__ForcePressGestureRecognizer__lastPosition], t0) : dart.throw(new _internal.LateError.fieldNI("_lastPosition"));
    }
    set [_lastPosition](t0) {
      if (t0 == null) dart.nullFailed(L0, 209, 19, "null");
      this[__ForcePressGestureRecognizer__lastPosition_isSet] = true;
      this[__ForcePressGestureRecognizer__lastPosition] = t0;
    }
    get [_lastPressure]() {
      let t1;
      return dart.test(this[__ForcePressGestureRecognizer__lastPressure_isSet]) ? (t1 = this[__ForcePressGestureRecognizer__lastPressure], t1) : dart.throw(new _internal.LateError.fieldNI("_lastPressure"));
    }
    set [_lastPressure](t1) {
      if (t1 == null) dart.nullFailed(L0, 210, 15, "null");
      this[__ForcePressGestureRecognizer__lastPressure_isSet] = true;
      this[__ForcePressGestureRecognizer__lastPressure] = t1;
    }
    addAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 214, 39, "event");
      if (!events.PointerUpEvent.is(event) && dart.notNull(event.pressureMax) <= 1.0) {
        this.resolve(arena.GestureDisposition.rejected);
      } else {
        this.startTrackingPointer(event.pointer, event.transform);
        if (dart.equals(this[_state], force_press._ForceState.ready)) {
          this[_state] = force_press._ForceState.possible;
          this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
        }
      }
    }
    handleEvent(event) {
      let t4, t3, t2;
      if (event == null) dart.nullFailed(L0, 230, 33, "event");
      if (!!dart.equals(this[_state], force_press._ForceState.ready)) dart.assertFailed(null, L0, 231, 12, "_state != _ForceState.ready");
      if (events.PointerMoveEvent.is(event) || events.PointerDownEvent.is(event)) {
        if (dart.notNull(event.pressure) > dart.notNull(event.pressureMax) || dart.notNull(event.pressure) < dart.notNull(event.pressureMin)) {
          print.debugPrint("The reported device pressure " + dart.toString(event.pressure) + " is outside of the device pressure range where: " + dart.toString(event.pressureMin) + " <= pressure <= " + dart.toString(event.pressureMax));
        }
        let pressure = (t2 = event.pressureMin, t3 = event.pressureMax, t4 = event.pressure, this.interpolation(t2, t3, t4));
        if (!(dart.notNull(pressure) >= 0.0 && dart.notNull(pressure) <= 1.0 || pressure[$isNaN])) dart.assertFailed(null, L0, 244, 9, "(pressure >= 0.0 && pressure <= 1.0) || // Interpolated pressure must be between 1.0 and 0.0...\n        pressure.isNaN");
        this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
        this[_lastPressure] = pressure;
        if (dart.equals(this[_state], force_press._ForceState.possible)) {
          if (dart.notNull(pressure) > dart.notNull(this.startPressure)) {
            this[_state] = force_press._ForceState.started;
            this.resolve(arena.GestureDisposition.accepted);
          } else if (dart.notNull(event.delta.distanceSquared) > dart.notNull(events.computeHitSlop(event.kind))) {
            this.resolve(arena.GestureDisposition.rejected);
          }
        }
        if (dart.notNull(pressure) > dart.notNull(this.startPressure) && dart.equals(this[_state], force_press._ForceState.accepted)) {
          this[_state] = force_press._ForceState.started;
          if (this.onStart != null) {
            this.invokeCallback(dart.void, "onStart", dart.fn(() => dart.nullCheck(this.onStart)(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), VoidTovoid()));
          }
        }
        if (this.onPeak != null && dart.notNull(pressure) > dart.notNull(this.peakPressure) && dart.equals(this[_state], force_press._ForceState.started)) {
          this[_state] = force_press._ForceState.peaked;
          if (this.onPeak != null) {
            this.invokeCallback(dart.void, "onPeak", dart.fn(() => dart.nullCheck(this.onPeak)(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), VoidTovoid()));
          }
        }
        if (this.onUpdate != null && !pressure[$isNaN] && (dart.equals(this[_state], force_press._ForceState.started) || dart.equals(this[_state], force_press._ForceState.peaked))) {
          if (this.onUpdate != null) {
            this.invokeCallback(dart.void, "onUpdate", dart.fn(() => dart.nullCheck(this.onUpdate)(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), VoidTovoid()));
          }
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 297, 26, "pointer");
      if (dart.equals(this[_state], force_press._ForceState.possible)) this[_state] = force_press._ForceState.accepted;
      if (this.onStart != null && dart.equals(this[_state], force_press._ForceState.started)) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => dart.nullCheck(this.onStart)(new force_press.ForcePressDetails.new({pressure: this[_lastPressure], globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), VoidTovoid()));
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (pointer == null) dart.nullFailed(L0, 311, 39, "pointer");
      let wasAccepted = dart.equals(this[_state], force_press._ForceState.started) || dart.equals(this[_state], force_press._ForceState.peaked);
      if (dart.equals(this[_state], force_press._ForceState.possible)) {
        this.resolve(arena.GestureDisposition.rejected);
        return;
      }
      if (wasAccepted && this.onEnd != null) {
        if (this.onEnd != null) {
          this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new force_press.ForcePressDetails.new({pressure: 0.0, globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), VoidTovoid()));
        }
      }
      this[_state] = force_press._ForceState.ready;
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 330, 26, "pointer");
      this.stopTrackingPointer(pointer);
      this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min, max, t) {
      if (min == null) dart.nullFailed(L0, 335, 37, "min");
      if (max == null) dart.nullFailed(L0, 335, 49, "max");
      if (t == null) dart.nullFailed(L0, 335, 61, "t");
      if (!(dart.notNull(min) <= dart.notNull(max))) dart.assertFailed(null, L0, 336, 12, "min <= max");
      let value = (dart.notNull(t) - dart.notNull(min)) / (dart.notNull(max) - dart.notNull(min));
      if (!value[$isNaN]) value = value[$clamp](0.0, 1.0);
      return value;
    }
    get debugDescription() {
      return "force press";
    }
  };
  (force_press.ForcePressGestureRecognizer.new = function(opts) {
    let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
    if (startPressure == null) dart.nullFailed(L0, 125, 10, "startPressure");
    let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
    if (peakPressure == null) dart.nullFailed(L0, 126, 10, "peakPressure");
    let interpolation = opts && 'interpolation' in opts ? opts.interpolation : C6 || CT.C6;
    if (interpolation == null) dart.nullFailed(L0, 127, 10, "interpolation");
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onPeak] = null;
    this[onEnd] = null;
    this[__ForcePressGestureRecognizer__lastPosition] = null;
    this[__ForcePressGestureRecognizer__lastPosition_isSet] = false;
    this[__ForcePressGestureRecognizer__lastPressure] = null;
    this[__ForcePressGestureRecognizer__lastPressure_isSet] = false;
    this[_state] = force_press._ForceState.ready;
    this[startPressure$] = startPressure;
    this[peakPressure$] = peakPressure;
    this[interpolation$] = interpolation;
    if (!(startPressure != null)) dart.assertFailed(null, L0, 130, 15, "startPressure != null");
    if (!(peakPressure != null)) dart.assertFailed(null, L0, 131, 15, "peakPressure != null");
    if (!(interpolation != null)) dart.assertFailed(null, L0, 132, 15, "interpolation != null");
    if (!(dart.notNull(peakPressure) > dart.notNull(startPressure))) dart.assertFailed(null, L0, 133, 15, "peakPressure > startPressure");
    force_press.ForcePressGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = force_press.ForcePressGestureRecognizer.prototype;
  dart.addTypeTests(force_press.ForcePressGestureRecognizer);
  dart.addTypeCaches(force_press.ForcePressGestureRecognizer);
  dart.setMethodSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getMethods(force_press.ForcePressGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getGetters(force_press.ForcePressGestureRecognizer.__proto__),
    [_lastPosition]: recognizer.OffsetPair,
    [_lastPressure]: core.double,
    debugDescription: core.String
  }));
  dart.setSetterSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getSetters(force_press.ForcePressGestureRecognizer.__proto__),
    [_lastPosition]: recognizer.OffsetPair,
    [_lastPressure]: core.double
  }));
  dart.setLibraryUri(force_press.ForcePressGestureRecognizer, L1);
  dart.setFieldSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getFields(force_press.ForcePressGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    onUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    onPeak: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    onEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [force_press.ForcePressDetails]))),
    startPressure: dart.finalFieldType(core.double),
    peakPressure: dart.finalFieldType(core.double),
    interpolation: dart.finalFieldType(dart.fnType(core.double, [core.double, core.double, core.double])),
    [__ForcePressGestureRecognizer__lastPosition]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [__ForcePressGestureRecognizer__lastPosition_isSet]: dart.fieldType(core.bool),
    [__ForcePressGestureRecognizer__lastPressure]: dart.fieldType(dart.nullable(core.double)),
    [__ForcePressGestureRecognizer__lastPressure_isSet]: dart.fieldType(core.bool),
    [_state]: dart.fieldType(force_press._ForceState)
  }));
  dart.trackLibraries("packages/flutter/src/gestures/force_press.dart", {
    "package:flutter/src/gestures/force_press.dart": force_press
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["force_press.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/force_press.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__force_press: force_press
  };
}));

//# sourceMappingURL=force_press.dart.lib.js.map
