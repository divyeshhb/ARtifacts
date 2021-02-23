define(['dart_sdk', 'packages/flutter/src/physics/tolerance.dart', 'packages/flutter/src/physics/friction_simulation.dart', 'packages/flutter/src/physics/spring_simulation.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/physics/simulation.dart'], (function load__packages__flutter__src__widgets__scroll_simulation_dart(dart_sdk, packages__flutter__src__physics__tolerance$46dart, packages__flutter__src__physics__friction_simulation$46dart, packages__flutter__src__physics__spring_simulation$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__physics__simulation$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  const friction_simulation = packages__flutter__src__physics__friction_simulation$46dart.src__physics__friction_simulation;
  const spring_simulation = packages__flutter__src__physics__spring_simulation$46dart.src__physics__spring_simulation;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const simulation = packages__flutter__src__physics__simulation$46dart.src__physics__simulation;
  var scroll_simulation = Object.create(dart.library);
  var $isFinite = dartx.isFinite;
  var $abs = dartx.abs;
  var $clamp = dartx.clamp;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/scroll_simulation.dart";
  var L1 = "package:flutter/src/widgets/scroll_simulation.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 0.001,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.001
      });
    }
  }, false);
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  var C0;
  var __BouncingScrollSimulation__frictionSimulation = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_frictionSimulation");
  var __BouncingScrollSimulation__frictionSimulation_isSet = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_frictionSimulation#isSet");
  var __BouncingScrollSimulation__springSimulation = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_springSimulation");
  var __BouncingScrollSimulation__springSimulation_isSet = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_springSimulation#isSet");
  var __BouncingScrollSimulation__springTime = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_springTime");
  var __BouncingScrollSimulation__springTime_isSet = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_springTime#isSet");
  var _timeOffset = dart.privateName(scroll_simulation, "_timeOffset");
  var _springSimulation = dart.privateName(scroll_simulation, "_springSimulation");
  var _underscrollSimulation = dart.privateName(scroll_simulation, "_underscrollSimulation");
  var _springTime = dart.privateName(scroll_simulation, "_springTime");
  var _overscrollSimulation = dart.privateName(scroll_simulation, "_overscrollSimulation");
  var _frictionSimulation = dart.privateName(scroll_simulation, "_frictionSimulation");
  var _simulation = dart.privateName(scroll_simulation, "_simulation");
  var leadingExtent$ = dart.privateName(scroll_simulation, "BouncingScrollSimulation.leadingExtent");
  var trailingExtent$ = dart.privateName(scroll_simulation, "BouncingScrollSimulation.trailingExtent");
  var spring$ = dart.privateName(scroll_simulation, "BouncingScrollSimulation.spring");
  scroll_simulation.BouncingScrollSimulation = class BouncingScrollSimulation extends simulation.Simulation {
    get leadingExtent() {
      return this[leadingExtent$];
    }
    set leadingExtent(value) {
      super.leadingExtent = value;
    }
    get trailingExtent() {
      return this[trailingExtent$];
    }
    set trailingExtent(value) {
      super.trailingExtent = value;
    }
    get spring() {
      return this[spring$];
    }
    set spring(value) {
      super.spring = value;
    }
    get [_frictionSimulation]() {
      let t0;
      return dart.test(this[__BouncingScrollSimulation__frictionSimulation_isSet]) ? (t0 = this[__BouncingScrollSimulation__frictionSimulation], t0) : dart.throw(new _internal.LateError.fieldNI("_frictionSimulation"));
    }
    set [_frictionSimulation](t0) {
      if (t0 == null) dart.nullFailed(L0, 92, 27, "null");
      this[__BouncingScrollSimulation__frictionSimulation_isSet] = true;
      this[__BouncingScrollSimulation__frictionSimulation] = t0;
    }
    get [_springSimulation]() {
      let t1;
      return dart.test(this[__BouncingScrollSimulation__springSimulation_isSet]) ? (t1 = this[__BouncingScrollSimulation__springSimulation], t1) : dart.throw(new _internal.LateError.fieldNI("_springSimulation"));
    }
    set [_springSimulation](t1) {
      if (t1 == null) dart.nullFailed(L0, 93, 19, "null");
      this[__BouncingScrollSimulation__springSimulation_isSet] = true;
      this[__BouncingScrollSimulation__springSimulation] = t1;
    }
    get [_springTime]() {
      let t2;
      return dart.test(this[__BouncingScrollSimulation__springTime_isSet]) ? (t2 = this[__BouncingScrollSimulation__springTime], t2) : dart.throw(new _internal.LateError.fieldNI("_springTime"));
    }
    set [_springTime](t2) {
      if (t2 == null) dart.nullFailed(L0, 94, 15, "null");
      this[__BouncingScrollSimulation__springTime_isSet] = true;
      this[__BouncingScrollSimulation__springTime] = t2;
    }
    [_underscrollSimulation](x, dx) {
      if (x == null) dart.nullFailed(L0, 97, 44, "x");
      if (dx == null) dart.nullFailed(L0, 97, 54, "dx");
      return new spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.leadingExtent, dx);
    }
    [_overscrollSimulation](x, dx) {
      if (x == null) dart.nullFailed(L0, 101, 43, "x");
      if (dx == null) dart.nullFailed(L0, 101, 53, "dx");
      return new spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.trailingExtent, dx);
    }
    [_simulation](time) {
      let t3;
      if (time == null) dart.nullFailed(L0, 105, 33, "time");
      let simulation = null;
      if (dart.notNull(time) > dart.notNull(this[_springTime])) {
        this[_timeOffset] = this[_springTime][$isFinite] ? this[_springTime] : 0.0;
        simulation = this[_springSimulation];
      } else {
        this[_timeOffset] = 0.0;
        simulation = this[_frictionSimulation];
      }
      t3 = simulation;
      return (() => {
        t3.tolerance = this.tolerance;
        return t3;
      })();
    }
    x(time) {
      if (time == null) dart.nullFailed(L0, 118, 19, "time");
      return this[_simulation](time).x(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    dx(time) {
      if (time == null) dart.nullFailed(L0, 121, 20, "time");
      return this[_simulation](time).dx(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    isDone(time) {
      if (time == null) dart.nullFailed(L0, 124, 22, "time");
      return this[_simulation](time).isDone(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "BouncingScrollSimulation")) + "(leadingExtent: " + dart.str(this.leadingExtent) + ", trailingExtent: " + dart.str(this.trailingExtent) + ")";
    }
  };
  (scroll_simulation.BouncingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    if (position == null) dart.nullFailed(L0, 32, 21, "position");
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    if (velocity == null) dart.nullFailed(L0, 33, 21, "velocity");
    let leadingExtent = opts && 'leadingExtent' in opts ? opts.leadingExtent : null;
    if (leadingExtent == null) dart.nullFailed(L0, 34, 19, "leadingExtent");
    let trailingExtent = opts && 'trailingExtent' in opts ? opts.trailingExtent : null;
    if (trailingExtent == null) dart.nullFailed(L0, 35, 19, "trailingExtent");
    let spring = opts && 'spring' in opts ? opts.spring : null;
    if (spring == null) dart.nullFailed(L0, 36, 19, "spring");
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C0 || CT.C0;
    if (tolerance == null) dart.nullFailed(L0, 37, 15, "tolerance");
    this[__BouncingScrollSimulation__frictionSimulation] = null;
    this[__BouncingScrollSimulation__frictionSimulation_isSet] = false;
    this[__BouncingScrollSimulation__springSimulation] = null;
    this[__BouncingScrollSimulation__springSimulation_isSet] = false;
    this[__BouncingScrollSimulation__springTime] = null;
    this[__BouncingScrollSimulation__springTime_isSet] = false;
    this[_timeOffset] = 0.0;
    this[leadingExtent$] = leadingExtent;
    this[trailingExtent$] = trailingExtent;
    this[spring$] = spring;
    if (!(position != null)) dart.assertFailed(null, L0, 38, 15, "position != null");
    if (!(velocity != null)) dart.assertFailed(null, L0, 39, 15, "velocity != null");
    if (!(leadingExtent != null)) dart.assertFailed(null, L0, 40, 15, "leadingExtent != null");
    if (!(trailingExtent != null)) dart.assertFailed(null, L0, 41, 15, "trailingExtent != null");
    if (!(dart.notNull(leadingExtent) <= dart.notNull(trailingExtent))) dart.assertFailed(null, L0, 42, 15, "leadingExtent <= trailingExtent");
    if (!(spring != null)) dart.assertFailed(null, L0, 43, 15, "spring != null");
    scroll_simulation.BouncingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    if (dart.notNull(position) < dart.notNull(this.leadingExtent)) {
      this[_springSimulation] = this[_underscrollSimulation](position, velocity);
      this[_springTime] = -1 / 0;
    } else if (dart.notNull(position) > dart.notNull(this.trailingExtent)) {
      this[_springSimulation] = this[_overscrollSimulation](position, velocity);
      this[_springTime] = -1 / 0;
    } else {
      this[_frictionSimulation] = new friction_simulation.FrictionSimulation.new(0.135, position, velocity);
      let finalX = this[_frictionSimulation].finalX;
      if (dart.notNull(velocity) > 0.0 && dart.notNull(finalX) > dart.notNull(this.trailingExtent)) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.trailingExtent);
        this[_springSimulation] = this[_overscrollSimulation](this.trailingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), 5000));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, L0, 62, 16, "_springTime.isFinite");
      } else if (dart.notNull(velocity) < 0.0 && dart.notNull(finalX) < dart.notNull(this.leadingExtent)) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.leadingExtent);
        this[_springSimulation] = this[_underscrollSimulation](this.leadingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), 5000));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, L0, 69, 16, "_springTime.isFinite");
      } else {
        this[_springTime] = 1 / 0;
      }
    }
    if (!(this[_springTime] != null)) dart.assertFailed(null, L0, 74, 12, "_springTime != null");
  }).prototype = scroll_simulation.BouncingScrollSimulation.prototype;
  dart.addTypeTests(scroll_simulation.BouncingScrollSimulation);
  dart.addTypeCaches(scroll_simulation.BouncingScrollSimulation);
  dart.setMethodSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getMethods(scroll_simulation.BouncingScrollSimulation.__proto__),
    [_underscrollSimulation]: dart.fnType(simulation.Simulation, [core.double, core.double]),
    [_overscrollSimulation]: dart.fnType(simulation.Simulation, [core.double, core.double]),
    [_simulation]: dart.fnType(simulation.Simulation, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getGetters(scroll_simulation.BouncingScrollSimulation.__proto__),
    [_frictionSimulation]: friction_simulation.FrictionSimulation,
    [_springSimulation]: simulation.Simulation,
    [_springTime]: core.double
  }));
  dart.setSetterSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getSetters(scroll_simulation.BouncingScrollSimulation.__proto__),
    [_frictionSimulation]: friction_simulation.FrictionSimulation,
    [_springSimulation]: simulation.Simulation,
    [_springTime]: core.double
  }));
  dart.setLibraryUri(scroll_simulation.BouncingScrollSimulation, L1);
  dart.setFieldSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getFields(scroll_simulation.BouncingScrollSimulation.__proto__),
    leadingExtent: dart.finalFieldType(core.double),
    trailingExtent: dart.finalFieldType(core.double),
    spring: dart.finalFieldType(spring_simulation.SpringDescription),
    [__BouncingScrollSimulation__frictionSimulation]: dart.fieldType(dart.nullable(friction_simulation.FrictionSimulation)),
    [__BouncingScrollSimulation__frictionSimulation_isSet]: dart.fieldType(core.bool),
    [__BouncingScrollSimulation__springSimulation]: dart.fieldType(dart.nullable(simulation.Simulation)),
    [__BouncingScrollSimulation__springSimulation_isSet]: dart.fieldType(core.bool),
    [__BouncingScrollSimulation__springTime]: dart.fieldType(dart.nullable(core.double)),
    [__BouncingScrollSimulation__springTime_isSet]: dart.fieldType(core.bool),
    [_timeOffset]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(scroll_simulation.BouncingScrollSimulation, ['toString']);
  dart.defineLazy(scroll_simulation.BouncingScrollSimulation, {
    /*scroll_simulation.BouncingScrollSimulation.maxSpringTransferVelocity*/get maxSpringTransferVelocity() {
      return 5000;
    }
  }, false);
  var __ClampingScrollSimulation__duration = dart.privateName(scroll_simulation, "_#ClampingScrollSimulation#_duration");
  var __ClampingScrollSimulation__duration_isSet = dart.privateName(scroll_simulation, "_#ClampingScrollSimulation#_duration#isSet");
  var __ClampingScrollSimulation__distance = dart.privateName(scroll_simulation, "_#ClampingScrollSimulation#_distance");
  var __ClampingScrollSimulation__distance_isSet = dart.privateName(scroll_simulation, "_#ClampingScrollSimulation#_distance#isSet");
  var _duration = dart.privateName(scroll_simulation, "_duration");
  var _flingDuration = dart.privateName(scroll_simulation, "_flingDuration");
  var _distance = dart.privateName(scroll_simulation, "_distance");
  var position$ = dart.privateName(scroll_simulation, "ClampingScrollSimulation.position");
  var velocity$ = dart.privateName(scroll_simulation, "ClampingScrollSimulation.velocity");
  var friction$ = dart.privateName(scroll_simulation, "ClampingScrollSimulation.friction");
  scroll_simulation.ClampingScrollSimulation = class ClampingScrollSimulation extends simulation.Simulation {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get friction() {
      return this[friction$];
    }
    set friction(value) {
      super.friction = value;
    }
    get [_duration]() {
      let t3;
      return dart.test(this[__ClampingScrollSimulation__duration_isSet]) ? (t3 = this[__ClampingScrollSimulation__duration], t3) : dart.throw(new _internal.LateError.fieldNI("_duration"));
    }
    set [_duration](t3) {
      if (t3 == null) dart.nullFailed(L0, 168, 15, "null");
      this[__ClampingScrollSimulation__duration_isSet] = true;
      this[__ClampingScrollSimulation__duration] = t3;
    }
    get [_distance]() {
      let t4;
      return dart.test(this[__ClampingScrollSimulation__distance_isSet]) ? (t4 = this[__ClampingScrollSimulation__distance], t4) : dart.throw(new _internal.LateError.fieldNI("_distance"));
    }
    set [_distance](t4) {
      if (t4 == null) dart.nullFailed(L0, 169, 15, "null");
      this[__ClampingScrollSimulation__distance_isSet] = true;
      this[__ClampingScrollSimulation__distance] = t4;
    }
    static _decelerationForFriction(friction) {
      if (friction == null) dart.nullFailed(L0, 175, 49, "friction");
      return dart.notNull(friction) * 61774.04968;
    }
    [_flingDuration](velocity) {
      if (velocity == null) dart.nullFailed(L0, 180, 32, "velocity");
      let scaledFriction = dart.notNull(this.friction) * dart.notNull(scroll_simulation.ClampingScrollSimulation._decelerationForFriction(0.84));
      let deceleration = math.log(0.35 * velocity[$abs]() / scaledFriction);
      return math.exp(deceleration / (dart.notNull(scroll_simulation.ClampingScrollSimulation._kDecelerationRate) - 1.0));
    }
    static _flingDistancePenetration(t) {
      if (t == null) dart.nullFailed(L0, 206, 50, "t");
      return 1.2 * dart.notNull(t) * dart.notNull(t) * dart.notNull(t) - 3.27 * dart.notNull(t) * dart.notNull(t) + 3.065 * dart.notNull(t);
    }
    static _flingVelocityPenetration(t) {
      if (t == null) dart.nullFailed(L0, 211, 50, "t");
      return 3.6 * dart.notNull(t) * dart.notNull(t) - 6.54 * dart.notNull(t) + 3.065;
    }
    x(time) {
      if (time == null) dart.nullFailed(L0, 216, 19, "time");
      let t = (dart.notNull(time) / dart.notNull(this[_duration]))[$clamp](0.0, 1.0);
      return dart.notNull(this.position) + dart.notNull(this[_distance]) * dart.notNull(scroll_simulation.ClampingScrollSimulation._flingDistancePenetration(t)) * this.velocity[$sign];
    }
    dx(time) {
      if (time == null) dart.nullFailed(L0, 222, 20, "time");
      let t = (dart.notNull(time) / dart.notNull(this[_duration]))[$clamp](0.0, 1.0);
      return dart.notNull(this[_distance]) * dart.notNull(scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(t)) * this.velocity[$sign] / dart.notNull(this[_duration]);
    }
    isDone(time) {
      if (time == null) dart.nullFailed(L0, 228, 22, "time");
      return dart.notNull(time) >= dart.notNull(this[_duration]);
    }
  };
  (scroll_simulation.ClampingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    if (position == null) dart.nullFailed(L0, 146, 19, "position");
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    if (velocity == null) dart.nullFailed(L0, 147, 19, "velocity");
    let friction = opts && 'friction' in opts ? opts.friction : 0.015;
    if (friction == null) dart.nullFailed(L0, 148, 10, "friction");
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C0 || CT.C0;
    if (tolerance == null) dart.nullFailed(L0, 149, 15, "tolerance");
    this[__ClampingScrollSimulation__duration] = null;
    this[__ClampingScrollSimulation__duration_isSet] = false;
    this[__ClampingScrollSimulation__distance] = null;
    this[__ClampingScrollSimulation__distance_isSet] = false;
    this[position$] = position;
    this[velocity$] = velocity;
    this[friction$] = friction;
    if (!(scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(0.0) === 3.065)) dart.assertFailed(null, L0, 150, 15, "_flingVelocityPenetration(0.0) == _initialVelocityPenetration");
    scroll_simulation.ClampingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    this[_duration] = this[_flingDuration](this.velocity);
    this[_distance] = (dart.notNull(this.velocity) * dart.notNull(this[_duration]) / 3.065)[$abs]();
  }).prototype = scroll_simulation.ClampingScrollSimulation.prototype;
  dart.addTypeTests(scroll_simulation.ClampingScrollSimulation);
  dart.addTypeCaches(scroll_simulation.ClampingScrollSimulation);
  dart.setMethodSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getMethods(scroll_simulation.ClampingScrollSimulation.__proto__),
    [_flingDuration]: dart.fnType(core.double, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getGetters(scroll_simulation.ClampingScrollSimulation.__proto__),
    [_duration]: core.double,
    [_distance]: core.double
  }));
  dart.setSetterSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getSetters(scroll_simulation.ClampingScrollSimulation.__proto__),
    [_duration]: core.double,
    [_distance]: core.double
  }));
  dart.setLibraryUri(scroll_simulation.ClampingScrollSimulation, L1);
  dart.setFieldSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getFields(scroll_simulation.ClampingScrollSimulation.__proto__),
    position: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double),
    friction: dart.finalFieldType(core.double),
    [__ClampingScrollSimulation__duration]: dart.fieldType(dart.nullable(core.double)),
    [__ClampingScrollSimulation__duration_isSet]: dart.fieldType(core.bool),
    [__ClampingScrollSimulation__distance]: dart.fieldType(dart.nullable(core.double)),
    [__ClampingScrollSimulation__distance_isSet]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(scroll_simulation.ClampingScrollSimulation, {
    /*scroll_simulation.ClampingScrollSimulation._kDecelerationRate*/get _kDecelerationRate() {
      return math.log(0.78) / math.log(0.9);
    },
    /*scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration*/get _initialVelocityPenetration() {
      return 3.065;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/widgets/scroll_simulation.dart", {
    "package:flutter/src/widgets/scroll_simulation.dart": scroll_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_simulation.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/scroll_simulation.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__scroll_simulation: scroll_simulation
  };
}));

//# sourceMappingURL=scroll_simulation.dart.lib.js.map
