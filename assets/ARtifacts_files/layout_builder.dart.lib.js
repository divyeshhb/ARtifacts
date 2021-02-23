define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__layout_builder_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const debug = packages__flutter__src__widgets__widget_span$46dart.src__widgets__debug;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var layout_builder = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/widgets/layout_builder.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/layout_builder.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    }
  }, false);
  const _is_ConstrainedLayoutBuilder_default = Symbol('_is_ConstrainedLayoutBuilder_default');
  var builder$ = dart.privateName(layout_builder, "ConstrainedLayoutBuilder.builder");
  layout_builder.ConstrainedLayoutBuilder$ = dart.generic(ConstraintType => {
    var _LayoutBuilderElementOfConstraintType = () => (_LayoutBuilderElementOfConstraintType = dart.constFn(layout_builder._LayoutBuilderElement$(ConstraintType)))();
    class ConstrainedLayoutBuilder extends framework.RenderObjectWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      createElement() {
        return new (_LayoutBuilderElementOfConstraintType()).new(this);
      }
    }
    (ConstrainedLayoutBuilder.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      if (builder == null) dart.nullFailed(L0, 42, 19, "builder");
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      if (!(builder != null)) dart.assertFailed(null, L0, 43, 15, "builder != null");
      ConstrainedLayoutBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ConstrainedLayoutBuilder.prototype;
    dart.addTypeTests(ConstrainedLayoutBuilder);
    ConstrainedLayoutBuilder.prototype[_is_ConstrainedLayoutBuilder_default] = true;
    dart.addTypeCaches(ConstrainedLayoutBuilder);
    dart.setMethodSignature(ConstrainedLayoutBuilder, () => ({
      __proto__: dart.getMethods(ConstrainedLayoutBuilder.__proto__),
      createElement: dart.fnType(layout_builder._LayoutBuilderElement$(ConstraintType), [])
    }));
    dart.setLibraryUri(ConstrainedLayoutBuilder, L1);
    dart.setFieldSignature(ConstrainedLayoutBuilder, () => ({
      __proto__: dart.getFields(ConstrainedLayoutBuilder.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, ConstraintType]))
    }));
    return ConstrainedLayoutBuilder;
  });
  layout_builder.ConstrainedLayoutBuilder = layout_builder.ConstrainedLayoutBuilder$();
  dart.addTypeTests(layout_builder.ConstrainedLayoutBuilder, _is_ConstrainedLayoutBuilder_default);
  var _child = dart.privateName(layout_builder, "_child");
  var _layout = dart.privateName(layout_builder, "_layout");
  const _is__LayoutBuilderElement_default = Symbol('_is__LayoutBuilderElement_default');
  layout_builder._LayoutBuilderElement$ = dart.generic(ConstraintType => {
    var ConstrainedLayoutBuilderOfConstraintType = () => (ConstrainedLayoutBuilderOfConstraintType = dart.constFn(layout_builder.ConstrainedLayoutBuilder$(ConstraintType)))();
    var RenderConstrainedLayoutBuilderOfConstraintType$RenderObject = () => (RenderConstrainedLayoutBuilderOfConstraintType$RenderObject = dart.constFn(layout_builder.RenderConstrainedLayoutBuilder$(ConstraintType, object.RenderObject)))();
    var BuildContextAndConstraintTypeToWidget = () => (BuildContextAndConstraintTypeToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, ConstraintType])))();
    class _LayoutBuilderElement extends framework.RenderObjectElement {
      get widget() {
        return ConstrainedLayoutBuilderOfConstraintType().as(super.widget);
      }
      get renderObject() {
        return RenderConstrainedLayoutBuilderOfConstraintType$RenderObject().as(super.renderObject);
      }
      visitChildren(visitor) {
        if (visitor == null) dart.nullFailed(L0, 69, 37, "visitor");
        if (this[_child] != null) visitor(dart.nullCheck(this[_child]));
      }
      forgetChild(child) {
        if (child == null) dart.nullFailed(L0, 75, 28, "child");
        if (!dart.equals(child, this[_child])) dart.assertFailed(null, L0, 76, 12, "child == _child");
        this[_child] = null;
        super.forgetChild(child);
      }
      mount(parent, newSlot) {
        super.mount(parent, newSlot);
        this.renderObject.updateCallback(dart.bind(this, _layout));
      }
      update(newWidget) {
        ConstrainedLayoutBuilderOfConstraintType().as(newWidget);
        if (newWidget == null) dart.nullFailed(L0, 88, 56, "newWidget");
        if (!!dart.equals(this.widget, newWidget)) dart.assertFailed(null, L0, 89, 12, "widget != newWidget");
        super.update(newWidget);
        if (!dart.equals(this.widget, newWidget)) dart.assertFailed(null, L0, 91, 12, "widget == newWidget");
        this.renderObject.updateCallback(dart.bind(this, _layout));
        this.renderObject.markNeedsBuild();
      }
      performRebuild() {
        this.renderObject.markNeedsBuild();
        super.performRebuild();
      }
      unmount() {
        this.renderObject.updateCallback(null);
        super.unmount();
      }
      [_layout](constraints) {
        ConstraintType.as(constraints);
        if (constraints == null) dart.nullFailed(L0, 117, 31, "constraints");
        dart.nullCheck(this.owner).buildScope(this, dart.fn(() => {
          let t1, t0;
          let built = null;
          try {
            built = (t0 = this.widget, t1 = constraints, BuildContextAndConstraintTypeToWidget().as(t0.builder)(this, t1));
            debug.debugWidgetBuilderValue(this.widget, built);
          } catch (e$) {
            let e = dart.getThrown(e$);
            let stack = dart.stackTrace(e$);
            if (core.Object.is(e)) {
              built = framework.ErrorWidget.builder(layout_builder._debugReportException(new assertions.ErrorDescription.new("building " + dart.str(this.widget)), e, stack, {informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
                  yield new object.DiagnosticsDebugCreator.new(new framework.DebugCreator.new(this));
                }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
            } else
              throw e$;
          }
          try {
            this[_child] = this.updateChild(this[_child], built, null);
            if (!(this[_child] != null)) dart.assertFailed(null, L0, 137, 16, "_child != null");
          } catch (e$0) {
            let e = dart.getThrown(e$0);
            let stack = dart.stackTrace(e$0);
            if (core.Object.is(e)) {
              built = framework.ErrorWidget.builder(layout_builder._debugReportException(new assertions.ErrorDescription.new("building " + dart.str(this.widget)), e, stack, {informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
                  yield new object.DiagnosticsDebugCreator.new(new framework.DebugCreator.new(this));
                }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
              this[_child] = this.updateChild(null, built, this.slot);
            } else
              throw e$0;
          }
        }, VoidTovoid()));
      }
      insertRenderObjectChild(child, slot) {
        object.RenderObject.as(child);
        if (child == null) dart.nullFailed(L0, 155, 45, "child");
        let renderObject = this.renderObject;
        if (!(slot == null)) dart.assertFailed(null, L0, 157, 12, "slot == null");
        if (!dart.test(renderObject.debugValidateChild(child))) dart.assertFailed(null, L0, 158, 12, "renderObject.debugValidateChild(child)");
        renderObject.child = child;
        if (!dart.equals(renderObject, this.renderObject)) dart.assertFailed(null, L0, 160, 12, "renderObject == this.renderObject");
      }
      moveRenderObjectChild(child, oldSlot, newSlot) {
        object.RenderObject.as(child);
        if (child == null) dart.nullFailed(L0, 164, 43, "child");
        if (!false) dart.assertFailed(null, L0, 165, 12, "false");
      }
      removeRenderObjectChild(child, slot) {
        object.RenderObject.as(child);
        if (child == null) dart.nullFailed(L0, 169, 45, "child");
        let renderObject = this.renderObject;
        if (!dart.equals(renderObject.child, child)) dart.assertFailed(null, L0, 171, 12, "renderObject.child == child");
        renderObject.child = null;
        if (!dart.equals(renderObject, this.renderObject)) dart.assertFailed(null, L0, 173, 12, "renderObject == this.renderObject");
      }
    }
    (_LayoutBuilderElement.new = function(widget) {
      if (widget == null) dart.nullFailed(L0, 58, 66, "widget");
      this[_child] = null;
      _LayoutBuilderElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _LayoutBuilderElement.prototype;
    dart.addTypeTests(_LayoutBuilderElement);
    _LayoutBuilderElement.prototype[_is__LayoutBuilderElement_default] = true;
    dart.addTypeCaches(_LayoutBuilderElement);
    dart.setMethodSignature(_LayoutBuilderElement, () => ({
      __proto__: dart.getMethods(_LayoutBuilderElement.__proto__),
      [_layout]: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(_LayoutBuilderElement, () => ({
      __proto__: dart.getGetters(_LayoutBuilderElement.__proto__),
      widget: layout_builder.ConstrainedLayoutBuilder$(ConstraintType),
      renderObject: layout_builder.RenderConstrainedLayoutBuilder$(ConstraintType, object.RenderObject)
    }));
    dart.setLibraryUri(_LayoutBuilderElement, L1);
    dart.setFieldSignature(_LayoutBuilderElement, () => ({
      __proto__: dart.getFields(_LayoutBuilderElement.__proto__),
      [_child]: dart.fieldType(dart.nullable(framework.Element))
    }));
    return _LayoutBuilderElement;
  });
  layout_builder._LayoutBuilderElement = layout_builder._LayoutBuilderElement$();
  dart.addTypeTests(layout_builder._LayoutBuilderElement, _is__LayoutBuilderElement_default);
  var _callback = dart.privateName(layout_builder, "_callback");
  var _needsBuild = dart.privateName(layout_builder, "_needsBuild");
  var _previousConstraints = dart.privateName(layout_builder, "_previousConstraints");
  const _is_RenderConstrainedLayoutBuilder_default = Symbol('_is_RenderConstrainedLayoutBuilder_default');
  layout_builder.RenderConstrainedLayoutBuilder$ = dart.generic((ConstraintType, ChildType) => {
    class RenderConstrainedLayoutBuilder extends object.RenderObjectWithChildMixin$(ChildType) {}
    RenderConstrainedLayoutBuilder[dart.mixinOn] = RenderObjectWithChildMixin => class RenderConstrainedLayoutBuilder extends RenderObjectWithChildMixin {
      updateCallback(value) {
        if (dart.equals(value, this[_callback])) return;
        this[_callback] = value;
        this.markNeedsLayout();
      }
      markNeedsBuild() {
        this[_needsBuild] = true;
        this.markNeedsLayout();
      }
      rebuildIfNecessary() {
        if (!(this[_callback] != null)) dart.assertFailed(null, L0, 221, 12, "_callback != null");
        if (dart.test(this[_needsBuild]) || !dart.equals(this.constraints, this[_previousConstraints])) {
          this[_previousConstraints] = this.constraints;
          this[_needsBuild] = false;
          this.invokeLayoutCallback(ConstraintType, dart.nullCheck(this[_callback]));
        }
      }
    };
    (RenderConstrainedLayoutBuilder[dart.mixinNew] = function() {
      this[_callback] = null;
      this[_needsBuild] = true;
      this[_previousConstraints] = null;
    }).prototype = RenderConstrainedLayoutBuilder.prototype;
    dart.addTypeTests(RenderConstrainedLayoutBuilder);
    RenderConstrainedLayoutBuilder.prototype[_is_RenderConstrainedLayoutBuilder_default] = true;
    dart.addTypeCaches(RenderConstrainedLayoutBuilder);
    RenderConstrainedLayoutBuilder[dart.implements] = () => [object.RenderObjectWithChildMixin$(ChildType)];
    dart.setMethodSignature(RenderConstrainedLayoutBuilder, () => ({
      __proto__: dart.getMethods(RenderConstrainedLayoutBuilder.__proto__),
      updateCallback: dart.fnType(dart.void, [dart.nullable(dart.fnType(dart.void, [ConstraintType]))]),
      markNeedsBuild: dart.fnType(dart.void, []),
      rebuildIfNecessary: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RenderConstrainedLayoutBuilder, L1);
    dart.setFieldSignature(RenderConstrainedLayoutBuilder, () => ({
      __proto__: dart.getFields(RenderConstrainedLayoutBuilder.__proto__),
      [_callback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [ConstraintType]))),
      [_needsBuild]: dart.fieldType(core.bool),
      [_previousConstraints]: dart.fieldType(dart.nullable(object.Constraints))
    }));
    return RenderConstrainedLayoutBuilder;
  });
  layout_builder.RenderConstrainedLayoutBuilder = layout_builder.RenderConstrainedLayoutBuilder$();
  dart.addTypeTests(layout_builder.RenderConstrainedLayoutBuilder, _is_RenderConstrainedLayoutBuilder_default);
  layout_builder.LayoutBuilder = class LayoutBuilder extends layout_builder.ConstrainedLayoutBuilder$(box.BoxConstraints) {
    get builder() {
      return super.builder;
    }
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 320, 56, "context");
      return new layout_builder._RenderLayoutBuilder.new();
    }
  };
  (layout_builder.LayoutBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    if (builder == null) dart.nullFailed(L0, 312, 34, "builder");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(builder != null)) dart.assertFailed(null, L0, 313, 15, "builder != null");
    layout_builder.LayoutBuilder.__proto__.new.call(this, {key: key, builder: builder, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = layout_builder.LayoutBuilder.prototype;
  dart.addTypeTests(layout_builder.LayoutBuilder);
  dart.addTypeCaches(layout_builder.LayoutBuilder);
  dart.setMethodSignature(layout_builder.LayoutBuilder, () => ({
    __proto__: dart.getMethods(layout_builder.LayoutBuilder.__proto__),
    createRenderObject: dart.fnType(layout_builder._RenderLayoutBuilder, [framework.BuildContext])
  }));
  dart.setGetterSignature(layout_builder.LayoutBuilder, () => ({
    __proto__: dart.getGetters(layout_builder.LayoutBuilder.__proto__),
    builder: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])
  }));
  dart.setLibraryUri(layout_builder.LayoutBuilder, L1);
  var _debugThrowIfNotCheckingIntrinsics = dart.privateName(layout_builder, "_debugThrowIfNotCheckingIntrinsics");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderBox_RenderConstrainedLayoutBuilder$36 = class RenderBox_RenderConstrainedLayoutBuilder extends RenderBox_RenderObjectWithChildMixin$36 {};
  (RenderBox_RenderConstrainedLayoutBuilder$36.new = function() {
    layout_builder.RenderConstrainedLayoutBuilder$(box.BoxConstraints, box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderConstrainedLayoutBuilder$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderConstrainedLayoutBuilder$36.prototype;
  dart.applyMixin(RenderBox_RenderConstrainedLayoutBuilder$36, layout_builder.RenderConstrainedLayoutBuilder$(box.BoxConstraints, box.RenderBox));
  layout_builder._RenderLayoutBuilder = class _RenderLayoutBuilder extends RenderBox_RenderConstrainedLayoutBuilder$36 {
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 325, 42, "height");
      if (!dart.test(this[_debugThrowIfNotCheckingIntrinsics]())) dart.assertFailed(null, L0, 326, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 331, 42, "height");
      if (!dart.test(this[_debugThrowIfNotCheckingIntrinsics]())) dart.assertFailed(null, L0, 332, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 337, 43, "width");
      if (!dart.test(this[_debugThrowIfNotCheckingIntrinsics]())) dart.assertFailed(null, L0, 338, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 343, 43, "width");
      if (!dart.test(this[_debugThrowIfNotCheckingIntrinsics]())) dart.assertFailed(null, L0, 344, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 349, 40, "constraints");
      if (!dart.test(this.debugCannotComputeDryLayout({reason: "Calculating the dry layout would require running the layout callback " + "speculatively, which might mutate the live render object tree."}))) dart.assertFailed(null, L0, 350, 12, "debugCannotComputeDryLayout(reason:\n      'Calculating the dry layout would require running the layout callback '\n      'speculatively, which might mutate the live render object tree.',\n    )");
      return C0 || CT.C0;
    }
    performLayout() {
      let constraints = this.constraints;
      this.rebuildIfNecessary();
      if (this.child != null) {
        dart.nullCheck(this.child).layout(constraints, {parentUsesSize: true});
        this.size = constraints.constrain(dart.nullCheck(this.child).size);
      } else {
        this.size = constraints.biggest;
      }
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 370, 56, "baseline");
      if (this.child != null) return dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
      return super.computeDistanceToActualBaseline(baseline);
    }
    hitTestChildren(result, opts) {
      let t2, t2$;
      if (result == null) dart.nullFailed(L0, 377, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 377, 67, "position");
      t2$ = (t2 = this.child, t2 == null ? null : t2.hitTest(result, {position: position}));
      return t2$ == null ? false : t2$;
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 382, 30, "context");
      if (offset == null) dart.nullFailed(L0, 382, 46, "offset");
      if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
    }
    [_debugThrowIfNotCheckingIntrinsics]() {
      if (!dart.test(dart.fn(() => {
        if (!dart.test(object.RenderObject.debugCheckingIntrinsics)) {
          dart.throw(assertions.FlutterError.new("LayoutBuilder does not support returning intrinsic dimensions.\n" + "Calculating the intrinsic dimensions would require running the layout " + "callback speculatively, which might mutate the live render object tree."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 388, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        throw FlutterError(\n          'LayoutBuilder does not support returning intrinsic dimensions.\\n'\n          'Calculating the intrinsic dimensions would require running the layout '\n          'callback speculatively, which might mutate the live render object tree.'\n        );\n      }\n      return true;\n    }()");
      return true;
    }
  };
  (layout_builder._RenderLayoutBuilder.new = function() {
    layout_builder._RenderLayoutBuilder.__proto__.new.call(this);
    ;
  }).prototype = layout_builder._RenderLayoutBuilder.prototype;
  dart.addTypeTests(layout_builder._RenderLayoutBuilder);
  dart.addTypeCaches(layout_builder._RenderLayoutBuilder);
  dart.setMethodSignature(layout_builder._RenderLayoutBuilder, () => ({
    __proto__: dart.getMethods(layout_builder._RenderLayoutBuilder.__proto__),
    [_debugThrowIfNotCheckingIntrinsics]: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(layout_builder._RenderLayoutBuilder, L1);
  layout_builder._debugReportException = function _debugReportException(context, exception, stack, opts) {
    if (context == null) dart.nullFailed(L0, 404, 19, "context");
    if (exception == null) dart.nullFailed(L0, 405, 10, "exception");
    if (stack == null) dart.nullFailed(L0, 406, 14, "stack");
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let details = new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "widgets library", context: context, informationCollector: informationCollector});
    assertions.FlutterError.reportError(details);
    return details;
  };
  dart.trackLibraries("packages/flutter/src/widgets/layout_builder.dart", {
    "package:flutter/src/widgets/layout_builder.dart": layout_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layout_builder.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/layout_builder.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__layout_builder: layout_builder
  };
}));

//# sourceMappingURL=layout_builder.dart.lib.js.map
