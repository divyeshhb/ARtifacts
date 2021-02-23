define(['dart_sdk', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/gestures/events.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/constants.dart', 'packages/flutter/src/gestures/recognizer.dart'], (function load__packages__flutter__src__gestures__multitap_dart(dart_sdk, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__gestures__events$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__constants$46dart, packages__flutter__src__gestures__recognizer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const constants = packages__flutter__src__gestures__constants$46dart.src__gestures__constants;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  var multitap = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $toList = dartx.toList;
  var $forEach = dartx.forEach;
  var $containsKey = dartx.containsKey;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfint$_TapTracker = () => (IdentityMapOfint$_TapTracker = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapTracker)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var IdentityMapOfint$_TapGesture = () => (IdentityMapOfint$_TapGesture = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapGesture)))();
  var ListOf_TapGesture = () => (ListOf_TapGesture = dart.constFn(core.List$(multitap._TapGesture)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/gestures/multitap.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/gestures/multitap.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    }
  }, false);
  var _timeout = dart.privateName(multitap, "_timeout");
  var _onTimeout = dart.privateName(multitap, "_onTimeout");
  multitap._CountdownZoned = class _CountdownZoned extends core.Object {
    get timeout() {
      return this[_timeout];
    }
    [_onTimeout]() {
      this[_timeout] = true;
    }
  };
  (multitap._CountdownZoned.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    if (duration == null) dart.nullFailed(L0, 43, 39, "duration");
    this[_timeout] = false;
    if (!(duration != null)) dart.assertFailed(null, L0, 44, 17, "duration != null");
    async.Timer.new(duration, dart.bind(this, _onTimeout));
  }).prototype = multitap._CountdownZoned.prototype;
  dart.addTypeTests(multitap._CountdownZoned);
  dart.addTypeCaches(multitap._CountdownZoned);
  dart.setMethodSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getMethods(multitap._CountdownZoned.__proto__),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getGetters(multitap._CountdownZoned.__proto__),
    timeout: core.bool
  }));
  dart.setLibraryUri(multitap._CountdownZoned, L1);
  dart.setFieldSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getFields(multitap._CountdownZoned.__proto__),
    [_timeout]: dart.fieldType(core.bool)
  }));
  var _isTrackingPointer = dart.privateName(multitap, "_isTrackingPointer");
  var _initialGlobalPosition = dart.privateName(multitap, "_initialGlobalPosition");
  var _doubleTapMinTimeCountdown = dart.privateName(multitap, "_doubleTapMinTimeCountdown");
  multitap._TapTracker = class _TapTracker extends core.Object {
    startTrackingPointer(route, transform) {
      if (route == null) dart.nullFailed(L0, 80, 42, "route");
      if (!dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = true;
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.addRoute(this.pointer, route, transform);
      }
    }
    stopTrackingPointer(route) {
      if (route == null) dart.nullFailed(L0, 87, 41, "route");
      if (dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = false;
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.removeRoute(this.pointer, route);
      }
    }
    isWithinGlobalTolerance(event, tolerance) {
      if (event == null) dart.nullFailed(L0, 94, 45, "event");
      if (tolerance == null) dart.nullFailed(L0, 94, 59, "tolerance");
      let offset = event.position['-'](this[_initialGlobalPosition]);
      return dart.notNull(offset.distance) <= dart.notNull(tolerance);
    }
    hasElapsedMinTime() {
      return this[_doubleTapMinTimeCountdown].timeout;
    }
    hasSameButton(event) {
      if (event == null) dart.nullFailed(L0, 103, 39, "event");
      return event.buttons == this.initialButtons;
    }
  };
  (multitap._TapTracker.new = function(opts) {
    let event = opts && 'event' in opts ? opts.event : null;
    if (event == null) dart.nullFailed(L0, 61, 31, "event");
    let entry = opts && 'entry' in opts ? opts.entry : null;
    if (entry == null) dart.nullFailed(L0, 62, 19, "entry");
    let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
    if (doubleTapMinTime == null) dart.nullFailed(L0, 63, 23, "doubleTapMinTime");
    this[_isTrackingPointer] = false;
    this.entry = entry;
    if (!(doubleTapMinTime != null)) dart.assertFailed(null, L0, 64, 15, "doubleTapMinTime != null");
    if (!(event != null)) dart.assertFailed(null, L0, 65, 15, "event != null");
    if (!(event.buttons != null)) dart.assertFailed(null, L0, 66, 15, "event.buttons != null");
    this.pointer = event.pointer;
    this[_initialGlobalPosition] = event.position;
    this.initialButtons = event.buttons;
    this[_doubleTapMinTimeCountdown] = new multitap._CountdownZoned.new({duration: doubleTapMinTime});
    ;
  }).prototype = multitap._TapTracker.prototype;
  dart.addTypeTests(multitap._TapTracker);
  dart.addTypeCaches(multitap._TapTracker);
  dart.setMethodSignature(multitap._TapTracker, () => ({
    __proto__: dart.getMethods(multitap._TapTracker.__proto__),
    startTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)]),
    stopTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    isWithinGlobalTolerance: dart.fnType(core.bool, [events.PointerEvent, core.double]),
    hasElapsedMinTime: dart.fnType(core.bool, []),
    hasSameButton: dart.fnType(core.bool, [events.PointerDownEvent])
  }));
  dart.setLibraryUri(multitap._TapTracker, L1);
  dart.setFieldSignature(multitap._TapTracker, () => ({
    __proto__: dart.getFields(multitap._TapTracker.__proto__),
    pointer: dart.finalFieldType(core.int),
    entry: dart.finalFieldType(arena.GestureArenaEntry),
    [_initialGlobalPosition]: dart.finalFieldType(ui.Offset),
    initialButtons: dart.finalFieldType(core.int),
    [_doubleTapMinTimeCountdown]: dart.finalFieldType(multitap._CountdownZoned),
    [_isTrackingPointer]: dart.fieldType(core.bool)
  }));
  var _doubleTapTimer = dart.privateName(multitap, "_doubleTapTimer");
  var _firstTap = dart.privateName(multitap, "_firstTap");
  var _trackers = dart.privateName(multitap, "_trackers");
  var _reset = dart.privateName(multitap, "_reset");
  var _trackTap = dart.privateName(multitap, "_trackTap");
  var _stopDoubleTapTimer = dart.privateName(multitap, "_stopDoubleTapTimer");
  var _handleEvent = dart.privateName(multitap, "_handleEvent");
  var _registerFirstTap = dart.privateName(multitap, "_registerFirstTap");
  var _registerSecondTap = dart.privateName(multitap, "_registerSecondTap");
  var _reject = dart.privateName(multitap, "_reject");
  var _freezeTracker = dart.privateName(multitap, "_freezeTracker");
  var _checkCancel = dart.privateName(multitap, "_checkCancel");
  var _clearTrackers = dart.privateName(multitap, "_clearTrackers");
  var _startDoubleTapTimer = dart.privateName(multitap, "_startDoubleTapTimer");
  var _checkUp = dart.privateName(multitap, "_checkUp");
  var onDoubleTapDown = dart.privateName(multitap, "DoubleTapGestureRecognizer.onDoubleTapDown");
  var onDoubleTap = dart.privateName(multitap, "DoubleTapGestureRecognizer.onDoubleTap");
  var onDoubleTapCancel = dart.privateName(multitap, "DoubleTapGestureRecognizer.onDoubleTapCancel");
  multitap.DoubleTapGestureRecognizer = class DoubleTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onDoubleTapDown() {
      return this[onDoubleTapDown];
    }
    set onDoubleTapDown(value) {
      this[onDoubleTapDown] = value;
    }
    get onDoubleTap() {
      return this[onDoubleTap];
    }
    set onDoubleTap(value) {
      this[onDoubleTap] = value;
    }
    get onDoubleTapCancel() {
      return this[onDoubleTapCancel];
    }
    set onDoubleTapCancel(value) {
      this[onDoubleTapCancel] = value;
    }
    isPointerAllowed(event) {
      if (event == null) dart.nullFailed(L0, 194, 42, "event");
      if (this[_firstTap] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDoubleTapDown == null && this.onDoubleTap == null && this.onDoubleTapCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return super.isPointerAllowed(event);
    }
    addAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 211, 43, "event");
      if (this[_firstTap] != null) {
        if (!dart.test(dart.nullCheck(this[_firstTap]).isWithinGlobalTolerance(event, 100))) {
          return;
        } else if (!dart.test(dart.nullCheck(this[_firstTap]).hasElapsedMinTime()) || !dart.test(dart.nullCheck(this[_firstTap]).hasSameButton(event))) {
          this[_reset]();
          return this[_trackTap](event);
        } else if (this.onDoubleTapDown != null) {
          let details = new tap.TapDownDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: this.getKindForPointer(event.pointer)});
          this.invokeCallback(dart.void, "onDoubleTapDown", dart.fn(() => dart.nullCheck(this.onDoubleTapDown)(details), VoidTovoid()));
        }
      }
      this[_trackTap](event);
    }
    [_trackTap](event) {
      if (event == null) dart.nullFailed(L0, 233, 35, "event");
      this[_stopDoubleTapTimer]();
      let tracker = new multitap._TapTracker.new({event: event, entry: dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(event.pointer, this), doubleTapMinTime: constants.kDoubleTapMinTime});
      this[_trackers][$_set](event.pointer, tracker);
      tracker.startTrackingPointer(dart.bind(this, _handleEvent), event.transform);
    }
    [_handleEvent](event) {
      if (event == null) dart.nullFailed(L0, 244, 34, "event");
      let tracker = dart.nullCheck(this[_trackers][$_get](event.pointer));
      if (events.PointerUpEvent.is(event)) {
        if (this[_firstTap] == null)
          this[_registerFirstTap](tracker);
        else
          this[_registerSecondTap](tracker);
      } else if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(tracker.isWithinGlobalTolerance(event, 18))) this[_reject](tracker);
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reject](tracker);
      }
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 260, 26, "pointer");
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 263, 26, "pointer");
      let tracker = this[_trackers][$_get](pointer);
      if (tracker == null && this[_firstTap] != null && dart.nullCheck(this[_firstTap]).pointer == pointer) tracker = this[_firstTap];
      if (tracker != null) this[_reject](tracker);
    }
    [_reject](tracker) {
      if (tracker == null) dart.nullFailed(L0, 275, 28, "tracker");
      this[_trackers][$remove](tracker.pointer);
      tracker.entry.resolve(arena.GestureDisposition.rejected);
      this[_freezeTracker](tracker);
      if (this[_firstTap] != null) {
        if (dart.equals(tracker, this[_firstTap])) {
          this[_reset]();
        } else {
          this[_checkCancel]();
          if (dart.test(this[_trackers][$isEmpty])) this[_reset]();
        }
      }
    }
    dispose() {
      this[_reset]();
      super.dispose();
    }
    [_reset]() {
      this[_stopDoubleTapTimer]();
      if (this[_firstTap] != null) {
        if (dart.test(this[_trackers][$isNotEmpty])) this[_checkCancel]();
        let tracker = dart.nullCheck(this[_firstTap]);
        this[_firstTap] = null;
        this[_reject](tracker);
        dart.nullCheck(binding.GestureBinding.instance).gestureArena.release(tracker.pointer);
      }
      this[_clearTrackers]();
    }
    [_registerFirstTap](tracker) {
      if (tracker == null) dart.nullFailed(L0, 311, 38, "tracker");
      this[_startDoubleTapTimer]();
      dart.nullCheck(binding.GestureBinding.instance).gestureArena.hold(tracker.pointer);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_clearTrackers]();
      this[_firstTap] = tracker;
    }
    [_registerSecondTap](tracker) {
      if (tracker == null) dart.nullFailed(L0, 322, 39, "tracker");
      dart.nullCheck(this[_firstTap]).entry.resolve(arena.GestureDisposition.accepted);
      tracker.entry.resolve(arena.GestureDisposition.accepted);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_checkUp](tracker.initialButtons);
      this[_reset]();
    }
    [_clearTrackers]() {
      this[_trackers][$values][$toList]()[$forEach](dart.bind(this, _reject));
      if (!dart.test(this[_trackers][$isEmpty])) dart.assertFailed(null, L0, 333, 12, "_trackers.isEmpty");
    }
    [_freezeTracker](tracker) {
      if (tracker == null) dart.nullFailed(L0, 336, 35, "tracker");
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent));
    }
    [_startDoubleTapTimer]() {
      this[_doubleTapTimer] == null ? this[_doubleTapTimer] = async.Timer.new(constants.kDoubleTapTimeout, dart.bind(this, _reset)) : null;
    }
    [_stopDoubleTapTimer]() {
      if (this[_doubleTapTimer] != null) {
        dart.nullCheck(this[_doubleTapTimer]).cancel();
        this[_doubleTapTimer] = null;
      }
    }
    [_checkUp](buttons) {
      if (buttons == null) dart.nullFailed(L0, 351, 21, "buttons");
      if (!(buttons === 1)) dart.assertFailed(null, L0, 352, 12, "buttons == kPrimaryButton");
      if (this.onDoubleTap != null) this.invokeCallback(dart.void, "onDoubleTap", dart.nullCheck(this.onDoubleTap));
    }
    [_checkCancel]() {
      if (this.onDoubleTapCancel != null) this.invokeCallback(dart.void, "onDoubleTapCancel", dart.nullCheck(this.onDoubleTapCancel));
    }
    get debugDescription() {
      return "double tap";
    }
  };
  (multitap.DoubleTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onDoubleTapDown] = null;
    this[onDoubleTap] = null;
    this[onDoubleTapCancel] = null;
    this[_doubleTapTimer] = null;
    this[_firstTap] = null;
    this[_trackers] = new (IdentityMapOfint$_TapTracker()).new();
    multitap.DoubleTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.DoubleTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.DoubleTapGestureRecognizer);
  dart.addTypeCaches(multitap.DoubleTapGestureRecognizer);
  dart.setMethodSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.DoubleTapGestureRecognizer.__proto__),
    [_trackTap]: dart.fnType(dart.void, [events.PointerDownEvent]),
    [_handleEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_reject]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_reset]: dart.fnType(dart.void, []),
    [_registerFirstTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_registerSecondTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_clearTrackers]: dart.fnType(dart.void, []),
    [_freezeTracker]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_startDoubleTapTimer]: dart.fnType(dart.void, []),
    [_stopDoubleTapTimer]: dart.fnType(dart.void, []),
    [_checkUp]: dart.fnType(dart.void, [core.int]),
    [_checkCancel]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.DoubleTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.DoubleTapGestureRecognizer, L1);
  dart.setFieldSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.DoubleTapGestureRecognizer.__proto__),
    onDoubleTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapDownDetails]))),
    onDoubleTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onDoubleTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_doubleTapTimer]: dart.fieldType(dart.nullable(async.Timer)),
    [_firstTap]: dart.fieldType(dart.nullable(multitap._TapTracker)),
    [_trackers]: dart.finalFieldType(core.Map$(core.int, multitap._TapTracker))
  }));
  var _wonArena = dart.privateName(multitap, "_wonArena");
  var _timer = dart.privateName(multitap, "_timer");
  var _finalPosition = dart.privateName(multitap, "_finalPosition");
  var _lastPosition = dart.privateName(multitap, "_lastPosition");
  var _dispatchLongTap = dart.privateName(multitap, "_dispatchLongTap");
  var _check = dart.privateName(multitap, "_check");
  var _dispatchCancel = dart.privateName(multitap, "_dispatchCancel");
  var _dispatchTap = dart.privateName(multitap, "_dispatchTap");
  multitap._TapGesture = class _TapGesture extends multitap._TapTracker {
    handleEvent(event) {
      if (event == null) dart.nullFailed(L0, 398, 33, "event");
      if (!(event.pointer == this.pointer)) dart.assertFailed(null, L0, 399, 12, "event.pointer == pointer");
      if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(this.isWithinGlobalTolerance(event, events.computeHitSlop(event.kind))))
          this.cancel();
        else
          this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
      } else if (events.PointerCancelEvent.is(event)) {
        this.cancel();
      } else if (events.PointerUpEvent.is(event)) {
        this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
        this[_finalPosition] = recognizer.OffsetPair.fromEventPosition(event);
        this[_check]();
      }
    }
    stopTrackingPointer(route) {
      let t0;
      if (route == null) dart.nullFailed(L0, 415, 41, "route");
      t0 = this[_timer];
      t0 == null ? null : t0.cancel();
      this[_timer] = null;
      super.stopTrackingPointer(route);
    }
    accept() {
      this[_wonArena] = true;
      this[_check]();
    }
    reject() {
      this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
      this.gestureRecognizer[_dispatchCancel](this.pointer);
    }
    cancel() {
      if (dart.test(this[_wonArena]))
        this.reject();
      else
        this.entry.resolve(arena.GestureDisposition.rejected);
    }
    [_check]() {
      if (dart.test(this[_wonArena]) && this[_finalPosition] != null) this.gestureRecognizer[_dispatchTap](this.pointer, dart.nullCheck(this[_finalPosition]));
    }
  };
  (multitap._TapGesture.new = function(opts) {
    let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
    if (gestureRecognizer == null) dart.nullFailed(L0, 372, 19, "gestureRecognizer");
    let event = opts && 'event' in opts ? opts.event : null;
    if (event == null) dart.nullFailed(L0, 373, 27, "event");
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
    if (longTapDelay == null) dart.nullFailed(L0, 374, 23, "longTapDelay");
    this[_wonArena] = false;
    this[_timer] = null;
    this[_finalPosition] = null;
    this.gestureRecognizer = gestureRecognizer;
    this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
    multitap._TapGesture.__proto__.new.call(this, {event: events.PointerDownEvent.as(event), entry: dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(event.pointer, gestureRecognizer), doubleTapMinTime: constants.kDoubleTapMinTime});
    this.startTrackingPointer(dart.bind(this, 'handleEvent'), event.transform);
    if (dart.test(longTapDelay['>'](core.Duration.zero))) {
      this[_timer] = async.Timer.new(longTapDelay, dart.fn(() => {
        this[_timer] = null;
        this.gestureRecognizer[_dispatchLongTap](event.pointer, this[_lastPosition]);
      }, VoidTovoid()));
    }
  }).prototype = multitap._TapGesture.prototype;
  dart.addTypeTests(multitap._TapGesture);
  dart.addTypeCaches(multitap._TapGesture);
  dart.setMethodSignature(multitap._TapGesture, () => ({
    __proto__: dart.getMethods(multitap._TapGesture.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    accept: dart.fnType(dart.void, []),
    reject: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_check]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(multitap._TapGesture, L1);
  dart.setFieldSignature(multitap._TapGesture, () => ({
    __proto__: dart.getFields(multitap._TapGesture.__proto__),
    gestureRecognizer: dart.finalFieldType(multitap.MultiTapGestureRecognizer),
    [_wonArena]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(dart.nullable(async.Timer)),
    [_lastPosition]: dart.fieldType(recognizer.OffsetPair),
    [_finalPosition]: dart.fieldType(dart.nullable(recognizer.OffsetPair))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var _gestureMap = dart.privateName(multitap, "_gestureMap");
  var onTapDown = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapDown");
  var onTapUp = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapUp");
  var onTap = dart.privateName(multitap, "MultiTapGestureRecognizer.onTap");
  var onTapCancel = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapCancel");
  var longTapDelay$ = dart.privateName(multitap, "MultiTapGestureRecognizer.longTapDelay");
  var onLongTapDown = dart.privateName(multitap, "MultiTapGestureRecognizer.onLongTapDown");
  multitap.MultiTapGestureRecognizer = class MultiTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onTapDown() {
      return this[onTapDown];
    }
    set onTapDown(value) {
      this[onTapDown] = value;
    }
    get onTapUp() {
      return this[onTapUp];
    }
    set onTapUp(value) {
      this[onTapUp] = value;
    }
    get onTap() {
      return this[onTap];
    }
    set onTap(value) {
      this[onTap] = value;
    }
    get onTapCancel() {
      return this[onTapCancel];
    }
    set onTapCancel(value) {
      this[onTapCancel] = value;
    }
    get longTapDelay() {
      return this[longTapDelay$];
    }
    set longTapDelay(value) {
      this[longTapDelay$] = value;
    }
    get onLongTapDown() {
      return this[onLongTapDown];
    }
    set onLongTapDown(value) {
      this[onLongTapDown] = value;
    }
    addAllowedPointer(event) {
      if (event == null) dart.nullFailed(L0, 491, 39, "event");
      if (!!dart.test(this[_gestureMap][$containsKey](event.pointer))) dart.assertFailed(null, L0, 492, 12, "!_gestureMap.containsKey(event.pointer)");
      this[_gestureMap][$_set](event.pointer, new multitap._TapGesture.new({gestureRecognizer: this, event: event, longTapDelay: this.longTapDelay}));
      if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => {
        dart.nullCheck(this.onTapDown)(event.pointer, new tap.TapDownDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: event.kind}));
      }, VoidTovoid()));
    }
    acceptGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 509, 26, "pointer");
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, L0, 510, 12, "_gestureMap.containsKey(pointer)");
      dart.nullCheck(this[_gestureMap][$_get](pointer)).accept();
    }
    rejectGesture(pointer) {
      if (pointer == null) dart.nullFailed(L0, 515, 26, "pointer");
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, L0, 516, 12, "_gestureMap.containsKey(pointer)");
      dart.nullCheck(this[_gestureMap][$_get](pointer)).reject();
      if (!!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, L0, 518, 12, "!_gestureMap.containsKey(pointer)");
    }
    [_dispatchCancel](pointer) {
      if (pointer == null) dart.nullFailed(L0, 521, 28, "pointer");
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, L0, 522, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapCancel != null) this.invokeCallback(dart.void, "onTapCancel", dart.fn(() => dart.nullCheck(this.onTapCancel)(pointer), VoidTovoid()));
    }
    [_dispatchTap](pointer, position) {
      if (pointer == null) dart.nullFailed(L0, 528, 25, "pointer");
      if (position == null) dart.nullFailed(L0, 528, 45, "position");
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, L0, 529, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => {
        dart.nullCheck(this.onTapUp)(pointer, new tap.TapUpDetails.new({kind: this.getKindForPointer(pointer), localPosition: position.local, globalPosition: position.global}));
      }, VoidTovoid()));
      if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.fn(() => dart.nullCheck(this.onTap)(pointer), VoidTovoid()));
    }
    [_dispatchLongTap](pointer, lastPosition) {
      if (pointer == null) dart.nullFailed(L0, 543, 29, "pointer");
      if (lastPosition == null) dart.nullFailed(L0, 543, 49, "lastPosition");
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, L0, 544, 12, "_gestureMap.containsKey(pointer)");
      if (this.onLongTapDown != null) this.invokeCallback(dart.void, "onLongTapDown", dart.fn(() => {
        dart.nullCheck(this.onLongTapDown)(pointer, new tap.TapDownDetails.new({globalPosition: lastPosition.global, localPosition: lastPosition.local, kind: this.getKindForPointer(pointer)}));
      }, VoidTovoid()));
    }
    dispose() {
      let localGestures = ListOf_TapGesture().from(this[_gestureMap][$values]);
      for (let gesture of localGestures)
        gesture.cancel();
      if (!dart.test(this[_gestureMap][$isEmpty])) dart.assertFailed(null, L0, 564, 12, "_gestureMap.isEmpty");
      super.dispose();
    }
    get debugDescription() {
      return "multitap";
    }
  };
  (multitap.MultiTapGestureRecognizer.new = function(opts) {
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : C0 || CT.C0;
    if (longTapDelay == null) dart.nullFailed(L0, 461, 10, "longTapDelay");
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onLongTapDown] = null;
    this[_gestureMap] = new (IdentityMapOfint$_TapGesture()).new();
    this[longTapDelay$] = longTapDelay;
    multitap.MultiTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.MultiTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.MultiTapGestureRecognizer);
  dart.addTypeCaches(multitap.MultiTapGestureRecognizer);
  dart.setMethodSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.MultiTapGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_dispatchCancel]: dart.fnType(dart.void, [core.int]),
    [_dispatchTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair]),
    [_dispatchLongTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair])
  }));
  dart.setGetterSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.MultiTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.MultiTapGestureRecognizer, L1);
  dart.setFieldSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.MultiTapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int, tap.TapDownDetails]))),
    onTapUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int, tap.TapUpDetails]))),
    onTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    onTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    longTapDelay: dart.fieldType(core.Duration),
    onLongTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int, tap.TapDownDetails]))),
    [_gestureMap]: dart.finalFieldType(core.Map$(core.int, multitap._TapGesture))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/multitap.dart", {
    "package:flutter/src/gestures/multitap.dart": multitap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["multitap.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/multitap.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__multitap: multitap
  };
}));

//# sourceMappingURL=multitap.dart.lib.js.map
