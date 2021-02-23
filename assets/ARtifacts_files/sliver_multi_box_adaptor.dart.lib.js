define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__rendering__sliver_multi_box_adaptor_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var sliver_multi_box_adaptor = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $containsValue = dartx.containsValue;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $values = dartx.values;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $isNotEmpty = dartx.isNotEmpty;
  var $keys = dartx.keys;
  var $sort = dartx.sort;
  dart._checkModuleNullSafetyMode(false);
  var IdentityMapOfint$RenderBox = () => (IdentityMapOfint$RenderBox = dart.constFn(_js_helper.IdentityMap$(core.int, box.RenderBox)))();
  var JSArrayOfRenderBox = () => (JSArrayOfRenderBox = dart.constFn(_interceptors.JSArray$(box.RenderBox)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var RenderBoxN = () => (RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))();
  var SliverConstraintsTovoid = () => (SliverConstraintsTovoid = dart.constFn(dart.fnType(dart.void, [sliver.SliverConstraints])))();
  var RenderBoxTobool = () => (RenderBoxTobool = dart.constFn(dart.fnType(core.bool, [box.RenderBox])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  const CT = Object.create(null);
  var L0 = "package:flutter/src/rendering/sliver_multi_box_adaptor.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver_multi_box_adaptor.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    }
  }, false);
  sliver_multi_box_adaptor.RenderSliverBoxChildManager = class RenderSliverBoxChildManager extends core.Object {
    didStartLayout() {
    }
    didFinishLayout() {
    }
    debugAssertChildListLocked() {
      return true;
    }
  };
  (sliver_multi_box_adaptor.RenderSliverBoxChildManager.new = function() {
    ;
  }).prototype = sliver_multi_box_adaptor.RenderSliverBoxChildManager.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.RenderSliverBoxChildManager);
  dart.addTypeCaches(sliver_multi_box_adaptor.RenderSliverBoxChildManager);
  dart.setMethodSignature(sliver_multi_box_adaptor.RenderSliverBoxChildManager, () => ({
    __proto__: dart.getMethods(sliver_multi_box_adaptor.RenderSliverBoxChildManager.__proto__),
    didStartLayout: dart.fnType(dart.void, []),
    didFinishLayout: dart.fnType(dart.void, []),
    debugAssertChildListLocked: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.RenderSliverBoxChildManager, L0);
  var keepAlive = dart.privateName(sliver_multi_box_adaptor, "KeepAliveParentDataMixin.keepAlive");
  sliver_multi_box_adaptor.KeepAliveParentDataMixin = class KeepAliveParentDataMixin extends core.Object {};
  sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.mixinOn] = Object => class KeepAliveParentDataMixin extends Object {
    get keepAlive() {
      return this[keepAlive];
    }
    set keepAlive(value) {
      this[keepAlive] = value;
    }
  };
  (sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.mixinNew] = function() {
    this[keepAlive] = false;
  }).prototype = sliver_multi_box_adaptor.KeepAliveParentDataMixin.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.KeepAliveParentDataMixin);
  dart.addTypeCaches(sliver_multi_box_adaptor.KeepAliveParentDataMixin);
  sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.implements] = () => [object.ParentData, core.Object];
  dart.setLibraryUri(sliver_multi_box_adaptor.KeepAliveParentDataMixin, L0);
  dart.setFieldSignature(sliver_multi_box_adaptor.KeepAliveParentDataMixin, () => ({
    __proto__: dart.getFields(sliver_multi_box_adaptor.KeepAliveParentDataMixin.__proto__),
    keepAlive: dart.fieldType(core.bool)
  }));
  sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin = class RenderSliverWithKeepAliveMixin extends core.Object {};
  sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin[dart.mixinOn] = Object => class RenderSliverWithKeepAliveMixin extends Object {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L1, 139, 37, "child");
      if (!sliver_multi_box_adaptor.KeepAliveParentDataMixin.is(child.parentData)) dart.assertFailed(null, L1, 140, 12, "child.parentData is KeepAliveParentDataMixin");
    }
  };
  (sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin[dart.mixinNew] = function() {
  }).prototype = sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin);
  dart.addTypeCaches(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin);
  sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin[dart.implements] = () => [sliver.RenderSliver, core.Object];
  dart.setMethodSignature(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin, () => ({
    __proto__: dart.getMethods(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin.__proto__),
    setupParentData: dart.fnType(dart.void, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin, L0);
  var _keptAlive = dart.privateName(sliver_multi_box_adaptor, "_keptAlive");
  var index = dart.privateName(sliver_multi_box_adaptor, "SliverMultiBoxAdaptorParentData.index");
  const SliverLogicalParentData_ContainerParentDataMixin$36 = class SliverLogicalParentData_ContainerParentDataMixin extends sliver.SliverLogicalParentData {};
  (SliverLogicalParentData_ContainerParentDataMixin$36.new = function() {
    object.ContainerParentDataMixin$(box.RenderBox)[dart.mixinNew].call(this);
    SliverLogicalParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverLogicalParentData_ContainerParentDataMixin$36.prototype;
  dart.applyMixin(SliverLogicalParentData_ContainerParentDataMixin$36, object.ContainerParentDataMixin$(box.RenderBox));
  const SliverLogicalParentData_KeepAliveParentDataMixin$36 = class SliverLogicalParentData_KeepAliveParentDataMixin extends SliverLogicalParentData_ContainerParentDataMixin$36 {};
  (SliverLogicalParentData_KeepAliveParentDataMixin$36.new = function() {
    sliver_multi_box_adaptor.KeepAliveParentDataMixin[dart.mixinNew].call(this);
    SliverLogicalParentData_KeepAliveParentDataMixin$36.__proto__.new.call(this);
  }).prototype = SliverLogicalParentData_KeepAliveParentDataMixin$36.prototype;
  dart.applyMixin(SliverLogicalParentData_KeepAliveParentDataMixin$36, sliver_multi_box_adaptor.KeepAliveParentDataMixin);
  sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData = class SliverMultiBoxAdaptorParentData extends SliverLogicalParentData_KeepAliveParentDataMixin$36 {
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get keptAlive() {
      return this[_keptAlive];
    }
    toString() {
      return "index=" + dart.str(this.index) + "; " + (dart.equals(this.keepAlive, true) ? "keepAlive; " : "") + dart.str(super.toString());
    }
  };
  (sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.new = function() {
    this[index] = null;
    this[_keptAlive] = false;
    sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData);
  dart.addTypeCaches(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData);
  dart.setGetterSignature(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, () => ({
    __proto__: dart.getGetters(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.__proto__),
    keptAlive: core.bool
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, L0);
  dart.setFieldSignature(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, () => ({
    __proto__: dart.getFields(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.__proto__),
    index: dart.fieldType(dart.nullable(core.int)),
    [_keptAlive]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData, ['toString']);
  var _keepAliveBucket = dart.privateName(sliver_multi_box_adaptor, "_keepAliveBucket");
  var __RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives = dart.privateName(sliver_multi_box_adaptor, "_#RenderSliverMultiBoxAdaptor#_debugDanglingKeepAlives");
  var __RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives_isSet = dart.privateName(sliver_multi_box_adaptor, "_#RenderSliverMultiBoxAdaptor#_debugDanglingKeepAlives#isSet");
  var _debugChildIntegrityEnabled = dart.privateName(sliver_multi_box_adaptor, "_debugChildIntegrityEnabled");
  var _childManager = dart.privateName(sliver_multi_box_adaptor, "_childManager");
  var _debugDanglingKeepAlives = dart.privateName(sliver_multi_box_adaptor, "_debugDanglingKeepAlives");
  var _debugVerifyChildOrder = dart.privateName(sliver_multi_box_adaptor, "_debugVerifyChildOrder");
  var _debugAssertChildListLocked = dart.privateName(sliver_multi_box_adaptor, "_debugAssertChildListLocked");
  var _createOrObtainChild = dart.privateName(sliver_multi_box_adaptor, "_createOrObtainChild");
  var _destroyOrCacheChild = dart.privateName(sliver_multi_box_adaptor, "_destroyOrCacheChild");
  var _name = dart.privateName(basic_types, "_name");
  var C0;
  var C1;
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  const RenderSliver_ContainerRenderObjectMixin$36 = class RenderSliver_ContainerRenderObjectMixin extends sliver.RenderSliver {};
  (RenderSliver_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData)[dart.mixinNew].call(this);
    RenderSliver_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderSliver_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData));
  const RenderSliver_RenderSliverHelpers$36 = class RenderSliver_RenderSliverHelpers extends RenderSliver_ContainerRenderObjectMixin$36 {};
  (RenderSliver_RenderSliverHelpers$36.new = function() {
    RenderSliver_RenderSliverHelpers$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverHelpers$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverHelpers$36, sliver.RenderSliverHelpers);
  const RenderSliver_RenderSliverWithKeepAliveMixin$36 = class RenderSliver_RenderSliverWithKeepAliveMixin extends RenderSliver_RenderSliverHelpers$36 {};
  (RenderSliver_RenderSliverWithKeepAliveMixin$36.new = function() {
    RenderSliver_RenderSliverWithKeepAliveMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderSliverWithKeepAliveMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderSliverWithKeepAliveMixin$36, sliver_multi_box_adaptor.RenderSliverWithKeepAliveMixin);
  sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor = class RenderSliverMultiBoxAdaptor extends RenderSliver_RenderSliverWithKeepAliveMixin$36 {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L1, 200, 37, "child");
      if (!sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.is(child.parentData)) child.parentData = new sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.new();
    }
    get childManager() {
      return this[_childManager];
    }
    get [_debugDanglingKeepAlives]() {
      let t0;
      return dart.test(this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives_isSet]) ? (t0 = this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives], t0) : dart.throw(new _internal.LateError.fieldNI("_debugDanglingKeepAlives"));
    }
    set [_debugDanglingKeepAlives](t0) {
      if (t0 == null) dart.nullFailed(L1, 218, 24, "null");
      this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives_isSet] = true;
      this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives] = t0;
    }
    get debugChildIntegrityEnabled() {
      return this[_debugChildIntegrityEnabled];
    }
    set debugChildIntegrityEnabled(enabled) {
      if (enabled == null) dart.nullFailed(L1, 230, 39, "enabled");
      if (!(enabled != null)) dart.assertFailed(null, L1, 231, 12, "enabled != null");
      if (!dart.test(dart.fn(() => {
        this[_debugChildIntegrityEnabled] = enabled;
        return dart.test(this[_debugVerifyChildOrder]()) && (!dart.test(this[_debugChildIntegrityEnabled]) || dart.test(this[_debugDanglingKeepAlives][$isEmpty]));
      }, VoidTobool())())) dart.assertFailed(null, L1, 232, 12, "() {\n      _debugChildIntegrityEnabled = enabled;\n      return _debugVerifyChildOrder() &&\n        (!_debugChildIntegrityEnabled || _debugDanglingKeepAlives.isEmpty);\n    }()");
    }
    adoptChild(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L1, 240, 32, "child");
      super.adoptChild(child);
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!dart.test(childParentData[_keptAlive])) this.childManager.didAdoptChild(box.RenderBox.as(child));
    }
    [_debugAssertChildListLocked]() {
      return this.childManager.debugAssertChildListLocked();
    }
    [_debugVerifyChildOrder]() {
      if (dart.test(this[_debugChildIntegrityEnabled])) {
        let child = this.firstChild;
        let index = null;
        while (child != null) {
          index = this.indexOf(child);
          child = this.childAfter(child);
          if (!(child == null || dart.notNull(this.indexOf(child)) > dart.notNull(index))) dart.assertFailed(null, L1, 259, 16, "child == null || indexOf(child) > index");
        }
      }
      return true;
    }
    insert(child, opts) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L1, 266, 25, "child");
      let after = opts && 'after' in opts ? opts.after : null;
      RenderBoxN().as(after);
      if (!!dart.test(this[_keepAliveBucket][$containsValue](child))) dart.assertFailed(null, L1, 267, 12, "!_keepAliveBucket.containsValue(child)");
      super.insert(child, {after: after});
      if (!(this.firstChild != null)) dart.assertFailed(null, L1, 269, 12, "firstChild != null");
      if (!dart.test(this[_debugVerifyChildOrder]())) dart.assertFailed(null, L1, 270, 12, "_debugVerifyChildOrder()");
    }
    move(child, opts) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L1, 274, 23, "child");
      let after = opts && 'after' in opts ? opts.after : null;
      RenderBoxN().as(after);
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!dart.test(childParentData.keptAlive)) {
        super.move(child, {after: after});
        this.childManager.didAdoptChild(child);
        this.markNeedsLayout();
      } else {
        if (dart.equals(this[_keepAliveBucket][$_get](childParentData.index), child)) {
          this[_keepAliveBucket][$remove](childParentData.index);
        }
        if (!dart.test(dart.fn(() => {
          this[_debugDanglingKeepAlives][$remove](child);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L1, 297, 14, "() {\n        _debugDanglingKeepAlives.remove(child);\n        return true;\n      }()");
        this.childManager.didAdoptChild(child);
        if (!dart.test(dart.fn(() => {
          if (dart.test(this[_keepAliveBucket][$containsKey](childParentData.index))) this[_debugDanglingKeepAlives][$add](dart.nullCheck(this[_keepAliveBucket][$_get](childParentData.index)));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, L1, 306, 14, "() {\n        if (_keepAliveBucket.containsKey(childParentData.index))\n          _debugDanglingKeepAlives.add(_keepAliveBucket[childParentData.index]!);\n        return true;\n      }()");
        this[_keepAliveBucket][$_set](dart.nullCheck(childParentData.index), child);
      }
    }
    remove(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L1, 316, 25, "child");
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!dart.test(childParentData[_keptAlive])) {
        super.remove(child);
        return;
      }
      if (!dart.equals(this[_keepAliveBucket][$_get](childParentData.index), child)) dart.assertFailed(null, L1, 322, 12, "_keepAliveBucket[childParentData.index] == child");
      if (!dart.test(dart.fn(() => {
        this[_debugDanglingKeepAlives][$remove](child);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 323, 12, "() {\n      _debugDanglingKeepAlives.remove(child);\n      return true;\n    }()");
      this[_keepAliveBucket][$remove](childParentData.index);
      this.dropChild(child);
    }
    removeAll() {
      super.removeAll();
      this[_keepAliveBucket][$values][$forEach](dart.bind(this, 'dropChild'));
      this[_keepAliveBucket][$clear]();
    }
    [_createOrObtainChild](index, opts) {
      if (index == null) dart.nullFailed(L1, 338, 33, "index");
      let after = opts && 'after' in opts ? opts.after : null;
      this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
        if (constraints == null) dart.nullFailed(L1, 339, 64, "constraints");
        if (!dart.equals(constraints, this.constraints)) dart.assertFailed(null, L1, 340, 14, "constraints == this.constraints");
        if (dart.test(this[_keepAliveBucket][$containsKey](index))) {
          let child = dart.nullCheck(this[_keepAliveBucket][$remove](index));
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
          if (!dart.test(childParentData[_keptAlive])) dart.assertFailed(null, L1, 344, 16, "childParentData._keptAlive");
          this.dropChild(child);
          child.parentData = childParentData;
          this.insert(child, {after: after});
          childParentData[_keptAlive] = false;
        } else {
          this[_childManager].createChild(index, {after: after});
        }
      }, SliverConstraintsTovoid()));
    }
    [_destroyOrCacheChild](child) {
      if (child == null) dart.nullFailed(L1, 355, 39, "child");
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (dart.test(childParentData.keepAlive)) {
        if (!!dart.test(childParentData[_keptAlive])) dart.assertFailed(null, L1, 358, 14, "!childParentData._keptAlive");
        this.remove(child);
        this[_keepAliveBucket][$_set](dart.nullCheck(childParentData.index), child);
        child.parentData = childParentData;
        super.adoptChild(child);
        childParentData[_keptAlive] = true;
      } else {
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, L1, 365, 14, "child.parent == this");
        this[_childManager].removeChild(child);
        if (!(child.parent == null)) dart.assertFailed(null, L1, 367, 14, "child.parent == null");
      }
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L1, 372, 29, "owner");
      super.attach(owner);
      for (let child of this[_keepAliveBucket][$values])
        child.attach(owner);
    }
    detach() {
      super.detach();
      for (let child of this[_keepAliveBucket][$values])
        child.detach();
    }
    redepthChildren() {
      super.redepthChildren();
      this[_keepAliveBucket][$values][$forEach](dart.bind(this, 'redepthChild'));
    }
    visitChildren(visitor) {
      if (visitor == null) dart.nullFailed(L1, 392, 42, "visitor");
      super.visitChildren(visitor);
      this[_keepAliveBucket][$values][$forEach](visitor);
    }
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L1, 398, 54, "visitor");
      super.visitChildren(visitor);
    }
    addInitialChild(opts) {
      let index = opts && 'index' in opts ? opts.index : 0;
      if (index == null) dart.nullFailed(L1, 420, 30, "index");
      let layoutOffset = opts && 'layoutOffset' in opts ? opts.layoutOffset : 0;
      if (layoutOffset == null) dart.nullFailed(L1, 420, 48, "layoutOffset");
      if (!dart.test(this[_debugAssertChildListLocked]())) dart.assertFailed(null, L1, 421, 12, "_debugAssertChildListLocked()");
      if (!(this.firstChild == null)) dart.assertFailed(null, L1, 422, 12, "firstChild == null");
      this[_createOrObtainChild](index, {after: null});
      if (this.firstChild != null) {
        if (!dart.equals(this.firstChild, this.lastChild)) dart.assertFailed(null, L1, 425, 14, "firstChild == lastChild");
        if (!(this.indexOf(dart.nullCheck(this.firstChild)) == index)) dart.assertFailed(null, L1, 426, 14, "indexOf(firstChild!) == index");
        let firstChildParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
        firstChildParentData.layoutOffset = layoutOffset;
        return true;
      }
      this.childManager.setDidUnderflow(true);
      return false;
    }
    insertAndLayoutLeadingChild(childConstraints, opts) {
      if (childConstraints == null) dart.nullFailed(L1, 450, 20, "childConstraints");
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (parentUsesSize == null) dart.nullFailed(L1, 451, 10, "parentUsesSize");
      if (!dart.test(this[_debugAssertChildListLocked]())) dart.assertFailed(null, L1, 453, 12, "_debugAssertChildListLocked()");
      let index = dart.notNull(this.indexOf(dart.nullCheck(this.firstChild))) - 1;
      this[_createOrObtainChild](index, {after: null});
      if (this.indexOf(dart.nullCheck(this.firstChild)) === index) {
        dart.nullCheck(this.firstChild).layout(childConstraints, {parentUsesSize: parentUsesSize});
        return this.firstChild;
      }
      this.childManager.setDidUnderflow(true);
      return null;
    }
    insertAndLayoutChild(childConstraints, opts) {
      if (childConstraints == null) dart.nullFailed(L1, 478, 20, "childConstraints");
      let after = opts && 'after' in opts ? opts.after : null;
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (parentUsesSize == null) dart.nullFailed(L1, 480, 10, "parentUsesSize");
      if (!dart.test(this[_debugAssertChildListLocked]())) dart.assertFailed(null, L1, 482, 12, "_debugAssertChildListLocked()");
      if (!(after != null)) dart.assertFailed(null, L1, 483, 12, "after != null");
      let index = dart.notNull(this.indexOf(dart.nullCheck(after))) + 1;
      this[_createOrObtainChild](index, {after: after});
      let child = this.childAfter(after);
      if (child != null && this.indexOf(child) === index) {
        child.layout(childConstraints, {parentUsesSize: parentUsesSize});
        return child;
      }
      this.childManager.setDidUnderflow(true);
      return null;
    }
    collectGarbage(leadingGarbage, trailingGarbage) {
      if (leadingGarbage == null) dart.nullFailed(L1, 505, 27, "leadingGarbage");
      if (trailingGarbage == null) dart.nullFailed(L1, 505, 47, "trailingGarbage");
      if (!dart.test(this[_debugAssertChildListLocked]())) dart.assertFailed(null, L1, 506, 12, "_debugAssertChildListLocked()");
      if (!(dart.notNull(this.childCount) >= dart.notNull(leadingGarbage) + dart.notNull(trailingGarbage))) dart.assertFailed(null, L1, 507, 12, "childCount >= leadingGarbage + trailingGarbage");
      this.invokeLayoutCallback(sliver.SliverConstraints, dart.fn(constraints => {
        if (constraints == null) dart.nullFailed(L1, 508, 64, "constraints");
        while (dart.notNull(leadingGarbage) > 0) {
          this[_destroyOrCacheChild](dart.nullCheck(this.firstChild));
          leadingGarbage = dart.notNull(leadingGarbage) - 1;
        }
        while (dart.notNull(trailingGarbage) > 0) {
          this[_destroyOrCacheChild](dart.nullCheck(this.lastChild));
          trailingGarbage = dart.notNull(trailingGarbage) - 1;
        }
        this[_keepAliveBucket][$values][$where](dart.fn(child => {
          if (child == null) dart.nullFailed(L1, 520, 48, "child");
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
          return !dart.test(childParentData.keepAlive);
        }, RenderBoxTobool()))[$toList]()[$forEach](dart.bind(this[_childManager], 'removeChild'));
        if (!dart.test(this[_keepAliveBucket][$values][$where](dart.fn(child => {
          if (child == null) dart.nullFailed(L1, 524, 55, "child");
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
          return !dart.test(childParentData.keepAlive);
        }, RenderBoxTobool()))[$isEmpty])) dart.assertFailed(null, L1, 524, 14, "_keepAliveBucket.values.where((RenderBox child) {\n        final SliverMultiBoxAdaptorParentData childParentData = child.parentData! as SliverMultiBoxAdaptorParentData;\n        return !childParentData.keepAlive;\n      }).isEmpty");
      }, SliverConstraintsTovoid()));
    }
    indexOf(child) {
      if (child == null) dart.nullFailed(L1, 533, 25, "child");
      if (!(child != null)) dart.assertFailed(null, L1, 534, 12, "child != null");
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      if (!(childParentData.index != null)) dart.assertFailed(null, L1, 536, 12, "childParentData.index != null");
      return dart.nullCheck(childParentData.index);
    }
    paintExtentOf(child) {
      if (child == null) dart.nullFailed(L1, 543, 34, "child");
      if (!(child != null)) dart.assertFailed(null, L1, 544, 12, "child != null");
      if (!dart.test(child.hasSize)) dart.assertFailed(null, L1, 545, 12, "child.hasSize");
      switch (this.constraints.axis) {
        case C0 || CT.C0:
        {
          return child.size.width;
        }
        case C1 || CT.C1:
        {
          return child.size.height;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L1, 555, 44, "result");
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      if (mainAxisPosition == null) dart.nullFailed(L1, 555, 70, "mainAxisPosition");
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (crossAxisPosition == null) dart.nullFailed(L1, 555, 104, "crossAxisPosition");
      let child = this.lastChild;
      let boxResult = new box.BoxHitTestResult.wrap(result);
      while (child != null) {
        if (dart.test(this.hitTestBoxChild(boxResult, child, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition}))) return true;
        child = this.childBefore(child);
      }
      return false;
    }
    childMainAxisPosition(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L1, 567, 42, "child");
      return dart.nullCheck(this.childScrollOffset(child)) - dart.notNull(this.constraints.scrollOffset);
    }
    childScrollOffset(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L1, 572, 42, "child");
      if (!(child != null)) dart.assertFailed(null, L1, 573, 12, "child != null");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, L1, 574, 12, "child.parent == this");
      let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
      return childParentData.layoutOffset;
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L1, 580, 38, "child");
      if (transform == null) dart.nullFailed(L1, 580, 53, "transform");
      if (dart.test(this[_keepAliveBucket][$containsKey](this.indexOf(child)))) {
        transform.setZero();
      } else {
        this.applyPaintTransformForBoxChild(child, transform);
      }
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L1, 593, 30, "context");
      if (offset == null) dart.nullFailed(L1, 593, 46, "offset");
      if (this.firstChild == null) return;
      let mainAxisUnit = null;
      let crossAxisUnit = null;
      let originOffset = null;
      let addExtent = null;
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C4 || CT.C4:
        {
          mainAxisUnit = C2 || CT.C2;
          crossAxisUnit = C3 || CT.C3;
          originOffset = offset['+'](new ui.Offset.new(0.0, dart.nullCheck(this.geometry).paintExtent));
          addExtent = true;
          break;
        }
        case C6 || CT.C6:
        {
          mainAxisUnit = C3 || CT.C3;
          crossAxisUnit = C5 || CT.C5;
          originOffset = offset;
          addExtent = false;
          break;
        }
        case C7 || CT.C7:
        {
          mainAxisUnit = C5 || CT.C5;
          crossAxisUnit = C3 || CT.C3;
          originOffset = offset;
          addExtent = false;
          break;
        }
        case C9 || CT.C9:
        {
          mainAxisUnit = C8 || CT.C8;
          crossAxisUnit = C5 || CT.C5;
          originOffset = offset['+'](new ui.Offset.new(dart.nullCheck(this.geometry).paintExtent, 0.0));
          addExtent = true;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(mainAxisUnit != null)) dart.assertFailed(null, L1, 626, 12, "mainAxisUnit != null");
      if (!(addExtent != null)) dart.assertFailed(null, L1, 627, 12, "addExtent != null");
      let child = this.firstChild;
      while (child != null) {
        let mainAxisDelta = this.childMainAxisPosition(child);
        let crossAxisDelta = this.childCrossAxisPosition(child);
        let childOffset = new ui.Offset.new(dart.notNull(originOffset.dx) + dart.notNull(mainAxisUnit.dx) * dart.notNull(mainAxisDelta) + dart.notNull(crossAxisUnit.dx) * dart.notNull(crossAxisDelta), dart.notNull(originOffset.dy) + dart.notNull(mainAxisUnit.dy) * dart.notNull(mainAxisDelta) + dart.notNull(crossAxisUnit.dy) * dart.notNull(crossAxisDelta));
        if (dart.test(addExtent)) childOffset = childOffset['+'](mainAxisUnit['*'](this.paintExtentOf(child)));
        if (dart.notNull(mainAxisDelta) < dart.notNull(this.constraints.remainingPaintExtent) && dart.notNull(mainAxisDelta) + dart.notNull(this.paintExtentOf(child)) > 0) context.paintChild(child, childOffset);
        child = this.childAfter(child);
      }
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L1, 649, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(diagnostics.DiagnosticsNode.message(this.firstChild != null ? "currently live children: " + dart.str(this.indexOf(dart.nullCheck(this.firstChild))) + " to " + dart.str(this.indexOf(dart.nullCheck(this.lastChild))) : "no children current live"));
    }
    debugAssertChildListIsNonEmptyAndContiguous() {
      if (!dart.test(dart.fn(() => {
        if (!(this.firstChild != null)) dart.assertFailed(null, L1, 660, 14, "firstChild != null");
        let index = this.indexOf(dart.nullCheck(this.firstChild));
        let child = this.childAfter(dart.nullCheck(this.firstChild));
        while (child != null) {
          index = dart.notNull(index) + 1;
          if (!(this.indexOf(child) == index)) dart.assertFailed(null, L1, 665, 16, "indexOf(child) == index");
          child = this.childAfter(child);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L1, 659, 12, "() {\n      assert(firstChild != null);\n      int index = indexOf(firstChild!);\n      RenderBox? child = childAfter(firstChild!);\n      while (child != null) {\n        index += 1;\n        assert(indexOf(child) == index);\n        child = childAfter(child);\n      }\n      return true;\n    }()");
      return true;
    }
    debugDescribeChildren() {
      let t1;
      let children = JSArrayOfDiagnosticsNode().of([]);
      if (this.firstChild != null) {
        let child = this.firstChild;
        while (true) {
          let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
          children[$add](child.toDiagnosticsNode({name: "child with index " + dart.str(childParentData.index)}));
          if (dart.equals(child, this.lastChild)) break;
          child = childParentData.nextSibling;
        }
      }
      if (dart.test(this[_keepAliveBucket][$isNotEmpty])) {
        let indices = (t1 = this[_keepAliveBucket][$keys][$toList](), (() => {
          t1[$sort]();
          return t1;
        })());
        for (let index of indices) {
          children[$add](dart.nullCheck(this[_keepAliveBucket][$_get](index)).toDiagnosticsNode({name: "child with index " + dart.str(index) + " (kept alive but not laid out)", style: diagnostics.DiagnosticsTreeStyle.offstage}));
        }
      }
      return children;
    }
  };
  (sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    if (childManager == null) dart.nullFailed(L1, 190, 42, "childManager");
    this[_keepAliveBucket] = new (IdentityMapOfint$RenderBox()).new();
    this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives] = null;
    this[__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives_isSet] = false;
    this[_debugChildIntegrityEnabled] = true;
    if (!(childManager != null)) dart.assertFailed(null, L1, 191, 15, "childManager != null");
    this[_childManager] = childManager;
    sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__.new.call(this);
    if (!dart.test(dart.fn(() => {
      this[_debugDanglingKeepAlives] = JSArrayOfRenderBox().of([]);
      return true;
    }, VoidTobool())())) dart.assertFailed(null, L1, 193, 12, "() {\n      _debugDanglingKeepAlives = <RenderBox>[];\n      return true;\n    }()");
  }).prototype = sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.prototype;
  dart.addTypeTests(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor);
  dart.addTypeCaches(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor);
  dart.setMethodSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getMethods(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    [_debugAssertChildListLocked]: dart.fnType(core.bool, []),
    [_debugVerifyChildOrder]: dart.fnType(core.bool, []),
    [_createOrObtainChild]: dart.fnType(dart.void, [core.int], {}, {after: dart.nullable(box.RenderBox)}),
    [_destroyOrCacheChild]: dart.fnType(dart.void, [box.RenderBox]),
    addInitialChild: dart.fnType(core.bool, [], {index: core.int, layoutOffset: core.double}, {}),
    insertAndLayoutLeadingChild: dart.fnType(dart.nullable(box.RenderBox), [box.BoxConstraints], {parentUsesSize: core.bool}, {}),
    insertAndLayoutChild: dart.fnType(dart.nullable(box.RenderBox), [box.BoxConstraints], {parentUsesSize: core.bool}, {after: dart.nullable(box.RenderBox)}),
    collectGarbage: dart.fnType(dart.void, [core.int, core.int]),
    indexOf: dart.fnType(core.int, [box.RenderBox]),
    paintExtentOf: dart.fnType(core.double, [box.RenderBox]),
    debugAssertChildListIsNonEmptyAndContiguous: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getGetters(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    childManager: sliver_multi_box_adaptor.RenderSliverBoxChildManager,
    [_debugDanglingKeepAlives]: core.List$(box.RenderBox),
    debugChildIntegrityEnabled: core.bool
  }));
  dart.setSetterSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getSetters(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    [_debugDanglingKeepAlives]: core.List$(box.RenderBox),
    debugChildIntegrityEnabled: core.bool
  }));
  dart.setLibraryUri(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, L0);
  dart.setFieldSignature(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, () => ({
    __proto__: dart.getFields(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor.__proto__),
    [_childManager]: dart.finalFieldType(sliver_multi_box_adaptor.RenderSliverBoxChildManager),
    [_keepAliveBucket]: dart.finalFieldType(core.Map$(core.int, box.RenderBox)),
    [__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives]: dart.fieldType(dart.nullable(core.List$(box.RenderBox))),
    [__RenderSliverMultiBoxAdaptor__debugDanglingKeepAlives_isSet]: dart.fieldType(core.bool),
    [_debugChildIntegrityEnabled]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver_multi_box_adaptor.dart", {
    "package:flutter/src/rendering/sliver_multi_box_adaptor.dart": sliver_multi_box_adaptor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_multi_box_adaptor.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_multi_box_adaptor.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_multi_box_adaptor: sliver_multi_box_adaptor
  };
}));

//# sourceMappingURL=sliver_multi_box_adaptor.dart.lib.js.map
