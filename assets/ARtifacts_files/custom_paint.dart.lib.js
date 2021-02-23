define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/foundation/key.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/proxy_box.dart'], (function load__packages__flutter__src__rendering__custom_paint_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__foundation__key$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__proxy_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  var custom_paint = Object.create(dart.library);
  var $toString = dartx.toString;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $addAll = dartx.addAll;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $insert = dartx.insert;
  var $remove = dartx.remove;
  var $cast = dartx.cast;
  dart._checkModuleNullSafetyMode(false);
  var VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  var intTodynamic = () => (intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var CustomPainterSemanticsL = () => (CustomPainterSemanticsL = dart.constFn(dart.legacy(custom_paint.CustomPainterSemantics)))();
  var JSArrayOfSemanticsNode = () => (JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))();
  var SemanticsNodeL = () => (SemanticsNodeL = dart.constFn(dart.legacy(semantics.SemanticsNode)))();
  var LinkedMapOfKey$int = () => (LinkedMapOfKey$int = dart.constFn(_js_helper.LinkedMap$(key.Key, core.int)))();
  var SemanticsNodeN = () => (SemanticsNodeN = dart.constFn(dart.nullable(semantics.SemanticsNode)))();
  var ListOfSemanticsNodeN = () => (ListOfSemanticsNodeN = dart.constFn(core.List$(SemanticsNodeN())))();
  var MapOfKey$SemanticsNode = () => (MapOfKey$SemanticsNode = dart.constFn(core.Map$(key.Key, semantics.SemanticsNode)))();
  var VoidToMapOfKey$SemanticsNode = () => (VoidToMapOfKey$SemanticsNode = dart.constFn(dart.fnType(MapOfKey$SemanticsNode(), [])))();
  var MapOfKey$SemanticsNodeTodynamic = () => (MapOfKey$SemanticsNodeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [MapOfKey$SemanticsNode()])))();
  var LinkedMapOfKey$SemanticsNode = () => (LinkedMapOfKey$SemanticsNode = dart.constFn(_js_helper.LinkedMap$(key.Key, semantics.SemanticsNode)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/custom_paint.dart";
  var L1 = "package:flutter/src/rendering/custom_paint.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C1() {
      return C1 = dart.constList([], CustomPainterSemanticsL());
    },
    get C2() {
      return C2 = dart.constList([], SemanticsNodeL());
    }
  }, false);
  var _repaint = dart.privateName(custom_paint, "_repaint");
  var _repaint$ = dart.privateName(custom_paint, "CustomPainter._repaint");
  custom_paint.CustomPainter = class CustomPainter extends change_notifier.Listenable {
    get [_repaint]() {
      return this[_repaint$];
    }
    set [_repaint](value) {
      super[_repaint] = value;
    }
    addListener(listener) {
      let t0;
      if (listener == null) dart.nullFailed(L0, 145, 33, "listener");
      t0 = this[_repaint];
      return t0 == null ? null : t0.addListener(listener);
    }
    removeListener(listener) {
      let t0;
      if (listener == null) dart.nullFailed(L0, 154, 36, "listener");
      t0 = this[_repaint];
      return t0 == null ? null : t0.removeListener(listener);
    }
    get semanticsBuilder() {
      return null;
    }
    shouldRebuildSemantics(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      if (oldDelegate == null) dart.nullFailed(L0, 226, 55, "oldDelegate");
      return this.shouldRepaint(oldDelegate);
    }
    hitTest(position) {
      if (position == null) dart.nullFailed(L0, 268, 24, "position");
      return null;
    }
    toString() {
      let t0, t0$;
      return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str((t0$ = (t0 = this[_repaint], t0 == null ? null : dart.toString(t0)), t0$ == null ? "" : t0$)) + ")";
    }
  };
  (custom_paint.CustomPainter.new = function(opts) {
    let repaint = opts && 'repaint' in opts ? opts.repaint : null;
    this[_repaint$] = repaint;
    custom_paint.CustomPainter.__proto__.new.call(this);
    ;
  }).prototype = custom_paint.CustomPainter.prototype;
  dart.addTypeTests(custom_paint.CustomPainter);
  dart.addTypeCaches(custom_paint.CustomPainter);
  dart.setMethodSignature(custom_paint.CustomPainter, () => ({
    __proto__: dart.getMethods(custom_paint.CustomPainter.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    shouldRebuildSemantics: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    hitTest: dart.fnType(dart.nullable(core.bool), [ui.Offset])
  }));
  dart.setGetterSignature(custom_paint.CustomPainter, () => ({
    __proto__: dart.getGetters(custom_paint.CustomPainter.__proto__),
    semanticsBuilder: dart.nullable(dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size]))
  }));
  dart.setLibraryUri(custom_paint.CustomPainter, L1);
  dart.setFieldSignature(custom_paint.CustomPainter, () => ({
    __proto__: dart.getFields(custom_paint.CustomPainter.__proto__),
    [_repaint]: dart.finalFieldType(dart.nullable(change_notifier.Listenable))
  }));
  dart.defineExtensionMethods(custom_paint.CustomPainter, ['toString']);
  var key$ = dart.privateName(custom_paint, "CustomPainterSemantics.key");
  var rect$ = dart.privateName(custom_paint, "CustomPainterSemantics.rect");
  var transform$ = dart.privateName(custom_paint, "CustomPainterSemantics.transform");
  var properties$ = dart.privateName(custom_paint, "CustomPainterSemantics.properties");
  var tags$ = dart.privateName(custom_paint, "CustomPainterSemantics.tags");
  custom_paint.CustomPainterSemantics = class CustomPainterSemantics extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get properties() {
      return this[properties$];
    }
    set properties(value) {
      super.properties = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
  };
  (custom_paint.CustomPainterSemantics.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    if (rect == null) dart.nullFailed(L0, 296, 19, "rect");
    let properties = opts && 'properties' in opts ? opts.properties : null;
    if (properties == null) dart.nullFailed(L0, 297, 19, "properties");
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    this[key$] = key;
    this[rect$] = rect;
    this[properties$] = properties;
    this[transform$] = transform;
    this[tags$] = tags;
    if (!(rect != null)) dart.assertFailed(null, L0, 300, 15, "rect != null");
    if (!(properties != null)) dart.assertFailed(null, L0, 301, 15, "properties != null");
    ;
  }).prototype = custom_paint.CustomPainterSemantics.prototype;
  dart.addTypeTests(custom_paint.CustomPainterSemantics);
  dart.addTypeCaches(custom_paint.CustomPainterSemantics);
  dart.setLibraryUri(custom_paint.CustomPainterSemantics, L1);
  dart.setFieldSignature(custom_paint.CustomPainterSemantics, () => ({
    __proto__: dart.getFields(custom_paint.CustomPainterSemantics.__proto__),
    key: dart.finalFieldType(dart.nullable(key.Key)),
    rect: dart.finalFieldType(ui.Rect),
    transform: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    properties: dart.finalFieldType(semantics.SemanticsProperties),
    tags: dart.finalFieldType(dart.nullable(core.Set$(semantics.SemanticsTag)))
  }));
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  var _backgroundSemanticsBuilder = dart.privateName(custom_paint, "_backgroundSemanticsBuilder");
  var _foregroundSemanticsBuilder = dart.privateName(custom_paint, "_foregroundSemanticsBuilder");
  var _backgroundSemanticsNodes = dart.privateName(custom_paint, "_backgroundSemanticsNodes");
  var _foregroundSemanticsNodes = dart.privateName(custom_paint, "_foregroundSemanticsNodes");
  var _painter = dart.privateName(custom_paint, "_painter");
  var _foregroundPainter = dart.privateName(custom_paint, "_foregroundPainter");
  var _preferredSize = dart.privateName(custom_paint, "_preferredSize");
  var _didUpdatePainter = dart.privateName(custom_paint, "_didUpdatePainter");
  var _paintWithPainter = dart.privateName(custom_paint, "_paintWithPainter");
  var _setRasterCacheHints = dart.privateName(custom_paint, "_setRasterCacheHints");
  var C1;
  var C2;
  var isComplex$ = dart.privateName(custom_paint, "RenderCustomPaint.isComplex");
  var willChange$ = dart.privateName(custom_paint, "RenderCustomPaint.willChange");
  custom_paint.RenderCustomPaint = class RenderCustomPaint extends proxy_box.RenderProxyBox {
    get isComplex() {
      return this[isComplex$];
    }
    set isComplex(value) {
      this[isComplex$] = value;
    }
    get willChange() {
      return this[willChange$];
    }
    set willChange(value) {
      this[willChange$] = value;
    }
    get painter() {
      return this[_painter];
    }
    set painter(value) {
      if (dart.equals(this[_painter], value)) return;
      let oldPainter = this[_painter];
      this[_painter] = value;
      this[_didUpdatePainter](this[_painter], oldPainter);
    }
    get foregroundPainter() {
      return this[_foregroundPainter];
    }
    set foregroundPainter(value) {
      if (dart.equals(this[_foregroundPainter], value)) return;
      let oldPainter = this[_foregroundPainter];
      this[_foregroundPainter] = value;
      this[_didUpdatePainter](this[_foregroundPainter], oldPainter);
    }
    [_didUpdatePainter](newPainter, oldPainter) {
      let t0, t0$;
      if (newPainter == null) {
        if (!(oldPainter != null)) dart.assertFailed(null, L0, 436, 14, "oldPainter != null");
        this.markNeedsPaint();
      } else if (oldPainter == null || !dart.equals(dart.runtimeType(newPainter), dart.runtimeType(oldPainter)) || dart.test(newPainter.shouldRepaint(oldPainter))) {
        this.markNeedsPaint();
      }
      if (dart.test(this.attached)) {
        t0 = oldPainter;
        t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
        t0$ = newPainter;
        t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsPaint'));
      }
      if (newPainter == null) {
        if (!(oldPainter != null)) dart.assertFailed(null, L0, 450, 14, "oldPainter != null");
        if (dart.test(this.attached)) this.markNeedsSemanticsUpdate();
      } else if (oldPainter == null || !dart.equals(dart.runtimeType(newPainter), dart.runtimeType(oldPainter)) || dart.test(newPainter.shouldRebuildSemantics(oldPainter))) {
        this.markNeedsSemanticsUpdate();
      }
    }
    get preferredSize() {
      return this[_preferredSize];
    }
    set preferredSize(value) {
      if (value == null) dart.nullFailed(L0, 469, 26, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 470, 12, "value != null");
      if (dart.equals(this.preferredSize, value)) return;
      this[_preferredSize] = value;
      this.markNeedsLayout();
    }
    attach(owner) {
      let t0, t0$;
      object.PipelineOwner.as(owner);
      if (owner == null) dart.nullFailed(L0, 491, 29, "owner");
      super.attach(owner);
      t0 = this[_painter];
      t0 == null ? null : t0.addListener(dart.bind(this, 'markNeedsPaint'));
      t0$ = this[_foregroundPainter];
      t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      let t0, t0$;
      t0 = this[_painter];
      t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
      t0$ = this[_foregroundPainter];
      t0$ == null ? null : t0$.removeListener(dart.bind(this, 'markNeedsPaint'));
      super.detach();
    }
    hitTestChildren(result, opts) {
      let t0;
      if (result == null) dart.nullFailed(L0, 505, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 505, 67, "position");
      if (this[_foregroundPainter] != null && dart.test((t0 = dart.nullCheck(this[_foregroundPainter]).hitTest(position), t0 == null ? false : t0))) return true;
      return super.hitTestChildren(result, {position: position});
    }
    hitTestSelf(position) {
      let t0;
      if (position == null) dart.nullFailed(L0, 512, 27, "position");
      return this[_painter] != null && dart.test((t0 = dart.nullCheck(this[_painter]).hitTest(position), t0 == null ? true : t0));
    }
    performLayout() {
      super.performLayout();
      this.markNeedsSemanticsUpdate();
    }
    computeSizeForNoChild(constraints) {
      if (constraints == null) dart.nullFailed(L0, 523, 45, "constraints");
      return constraints.constrain(this.preferredSize);
    }
    [_paintWithPainter](canvas, offset, painter) {
      if (canvas == null) dart.nullFailed(L0, 527, 33, "canvas");
      if (offset == null) dart.nullFailed(L0, 527, 48, "offset");
      if (painter == null) dart.nullFailed(L0, 527, 70, "painter");
      let debugPreviousCanvasSaveCount = null;
      let debugPreviousCanvasSaveCount$35isSet = false;
      function debugPreviousCanvasSaveCount$35get() {
        return debugPreviousCanvasSaveCount$35isSet ? debugPreviousCanvasSaveCount : dart.throw(new _internal.LateError.localNI("debugPreviousCanvasSaveCount"));
      }
      dart.fn(debugPreviousCanvasSaveCount$35get, VoidToint());
      function debugPreviousCanvasSaveCount$35set(t3) {
        if (t3 == null) dart.nullFailed(L0, 528, 14, "null");
        debugPreviousCanvasSaveCount$35isSet = true;
        return debugPreviousCanvasSaveCount = t3;
      }
      dart.fn(debugPreviousCanvasSaveCount$35set, intTodynamic());
      canvas.save();
      if (!dart.test(dart.fn(() => {
        debugPreviousCanvasSaveCount$35set(canvas.getSaveCount());
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 530, 12, "() {\n      debugPreviousCanvasSaveCount = canvas.getSaveCount();\n      return true;\n    }()");
      if (!dart.equals(offset, ui.Offset.zero)) canvas.translate(offset.dx, offset.dy);
      painter.paint(canvas, this.size);
      if (!dart.test(dart.fn(() => {
        let debugNewCanvasSaveCount = canvas.getSaveCount();
        if (dart.notNull(debugNewCanvasSaveCount) > dart.notNull(debugPreviousCanvasSaveCount$35get())) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + dart.str(painter) + " custom painter called canvas.save() or canvas.saveLayer() at least " + dart.str(dart.notNull(debugNewCanvasSaveCount) - dart.notNull(debugPreviousCanvasSaveCount$35get())) + " more " + "time" + (dart.notNull(debugNewCanvasSaveCount) - dart.notNull(debugPreviousCanvasSaveCount$35get()) === 1 ? "" : "s") + " " + "than it called canvas.restore()."), new assertions.ErrorDescription.new("This leaves the canvas in an inconsistent state and will probably result in a broken display."), new assertions.ErrorHint.new("You must pair each call to save()/saveLayer() with a later matching call to restore().")])));
        }
        if (dart.notNull(debugNewCanvasSaveCount) < dart.notNull(debugPreviousCanvasSaveCount$35get())) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + dart.str(painter) + " custom painter called canvas.restore() " + dart.str(dart.notNull(debugPreviousCanvasSaveCount$35get()) - dart.notNull(debugNewCanvasSaveCount)) + " more " + "time" + (dart.notNull(debugPreviousCanvasSaveCount$35get()) - dart.notNull(debugNewCanvasSaveCount) === 1 ? "" : "s") + " " + "than it called canvas.save() or canvas.saveLayer()."), new assertions.ErrorDescription.new("This leaves the canvas in an inconsistent state and will result in a broken display."), new assertions.ErrorHint.new("You should only call restore() if you first called save() or saveLayer().")])));
        }
        return debugNewCanvasSaveCount == debugPreviousCanvasSaveCount$35get();
      }, VoidTobool())())) dart.assertFailed(null, L0, 537, 12, "() {\n      // This isn't perfect. For example, we can't catch the case of\n      // someone first restoring, then setting a transform or whatnot,\n      // then saving.\n      // If this becomes a real problem, we could add logic to the\n      // Canvas class to lock the canvas at a particular save count\n      // such that restore() fails if it would take the lock count\n      // below that number.\n      final int debugNewCanvasSaveCount = canvas.getSaveCount();\n      if (debugNewCanvasSaveCount > debugPreviousCanvasSaveCount) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'The $painter custom painter called canvas.save() or canvas.saveLayer() at least '\n            '${debugNewCanvasSaveCount - debugPreviousCanvasSaveCount} more '\n            'time${debugNewCanvasSaveCount - debugPreviousCanvasSaveCount == 1 ? '' : 's' } '\n            'than it called canvas.restore().'\n          ),\n          ErrorDescription('This leaves the canvas in an inconsistent state and will probably result in a broken display.'),\n          ErrorHint('You must pair each call to save()/saveLayer() with a later matching call to restore().')\n        ]);\n      }\n      if (debugNewCanvasSaveCount < debugPreviousCanvasSaveCount) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The $painter custom painter called canvas.restore() '\n            '${debugPreviousCanvasSaveCount - debugNewCanvasSaveCount} more '\n            'time${debugPreviousCanvasSaveCount - debugNewCanvasSaveCount == 1 ? '' : 's' } '\n            'than it called canvas.save() or canvas.saveLayer().'\n          ),\n          ErrorDescription('This leaves the canvas in an inconsistent state and will result in a broken display.'),\n          ErrorHint('You should only call restore() if you first called save() or saveLayer().')\n        ]);\n      }\n      return debugNewCanvasSaveCount == debugPreviousCanvasSaveCount;\n    }()");
      canvas.restore();
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 575, 30, "context");
      if (offset == null) dart.nullFailed(L0, 575, 46, "offset");
      if (this[_painter] != null) {
        this[_paintWithPainter](context.canvas, offset, dart.nullCheck(this[_painter]));
        this[_setRasterCacheHints](context);
      }
      super.paint(context, offset);
      if (this[_foregroundPainter] != null) {
        this[_paintWithPainter](context.canvas, offset, dart.nullCheck(this[_foregroundPainter]));
        this[_setRasterCacheHints](context);
      }
    }
    [_setRasterCacheHints](context) {
      if (context == null) dart.nullFailed(L0, 587, 45, "context");
      if (dart.test(this.isComplex)) context.setIsComplexHint();
      if (dart.test(this.willChange)) context.setWillChangeHint();
    }
    describeSemanticsConfiguration(config) {
      let t5, t5$;
      if (config == null) dart.nullFailed(L0, 601, 62, "config");
      super.describeSemanticsConfiguration(config);
      this[_backgroundSemanticsBuilder] = (t5 = this.painter, t5 == null ? null : t5.semanticsBuilder);
      this[_foregroundSemanticsBuilder] = (t5$ = this.foregroundPainter, t5$ == null ? null : t5$.semanticsBuilder);
      config.isSemanticBoundary = this[_backgroundSemanticsBuilder] != null || this[_foregroundSemanticsBuilder] != null;
    }
    assembleSemanticsNode(node, config, children) {
      if (node == null) dart.nullFailed(L0, 616, 19, "node");
      if (config == null) dart.nullFailed(L0, 617, 28, "config");
      if (children == null) dart.nullFailed(L0, 618, 29, "children");
      if (!dart.test(dart.fn(() => {
        if (this.child == null && dart.test(children[$isNotEmpty])) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not have a child widget but received a non-empty list of child SemanticsNode:\n" + dart.str(children[$join]("\n")))])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 620, 12, "() {\n      if (child == null && children.isNotEmpty) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            '$runtimeType does not have a child widget but received a non-empty list of child SemanticsNode:\\n'\n            '${children.join('\\n')}'\n          )\n        ]);\n      }\n      return true;\n    }()");
      let backgroundSemantics = this[_backgroundSemanticsBuilder] != null ? dart.nullCheck(this[_backgroundSemanticsBuilder])(this.size) : C1 || CT.C1;
      this[_backgroundSemanticsNodes] = custom_paint.RenderCustomPaint._updateSemanticsChildren(this[_backgroundSemanticsNodes], backgroundSemantics);
      let foregroundSemantics = this[_foregroundSemanticsBuilder] != null ? dart.nullCheck(this[_foregroundSemanticsBuilder])(this.size) : C1 || CT.C1;
      this[_foregroundSemanticsNodes] = custom_paint.RenderCustomPaint._updateSemanticsChildren(this[_foregroundSemanticsNodes], foregroundSemantics);
      let hasBackgroundSemantics = this[_backgroundSemanticsNodes] != null && dart.test(dart.nullCheck(this[_backgroundSemanticsNodes])[$isNotEmpty]);
      let hasForegroundSemantics = this[_foregroundSemanticsNodes] != null && dart.test(dart.nullCheck(this[_foregroundSemanticsNodes])[$isNotEmpty]);
      let finalChildren = (() => {
        let t5 = JSArrayOfSemanticsNode().of([]);
        if (hasBackgroundSemantics) t5[$addAll](dart.nullCheck(this[_backgroundSemanticsNodes]));
        t5[$addAll](children);
        if (hasForegroundSemantics) t5[$addAll](dart.nullCheck(this[_foregroundSemanticsNodes]));
        return t5;
      })();
      super.assembleSemanticsNode(node, config, finalChildren);
    }
    clearSemantics() {
      super.clearSemantics();
      this[_backgroundSemanticsNodes] = null;
      this[_foregroundSemanticsNodes] = null;
    }
    static _updateSemanticsChildren(oldSemantics, newChildSemantics) {
      let t6, t6$;
      oldSemantics = (t6 = oldSemantics, t6 == null ? C2 || CT.C2 : t6);
      newChildSemantics = (t6$ = newChildSemantics, t6$ == null ? C1 || CT.C1 : t6$);
      if (!dart.test(dart.fn(() => {
        let keys = new (LinkedMapOfKey$int()).new();
        let information = JSArrayOfDiagnosticsNode().of([]);
        for (let i = 0; i < dart.notNull(dart.nullCheck(newChildSemantics)[$length]); i = i + 1) {
          let child = newChildSemantics[$_get](i);
          if (child.key != null) {
            if (dart.test(keys[$containsKey](child.key))) {
              information[$add](new assertions.ErrorDescription.new("- duplicate key " + dart.str(child.key) + " found at position " + dart.str(i)));
            }
            keys[$_set](dart.nullCheck(child.key), i);
          }
        }
        if (dart.test(information[$isNotEmpty])) {
          information[$insert](0, new assertions.ErrorSummary.new("Failed to update the list of CustomPainterSemantics:"));
          dart.throw(new assertions.FlutterError.fromParts(information));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 688, 12, "() {\n      final Map<Key, int> keys = HashMap<Key, int>();\n      final List<DiagnosticsNode> information = <DiagnosticsNode>[];\n      for (int i = 0; i < newChildSemantics!.length; i += 1) {\n        final CustomPainterSemantics child = newChildSemantics[i];\n        if (child.key != null) {\n          if (keys.containsKey(child.key)) {\n            information.add(ErrorDescription('- duplicate key ${child.key} found at position $i'));\n          }\n          keys[child.key!] = i;\n        }\n      }\n\n      if (information.isNotEmpty) {\n        information.insert(0, ErrorSummary('Failed to update the list of CustomPainterSemantics:'));\n        throw FlutterError.fromParts(information);\n      }\n\n      return true;\n    }()");
      let newChildrenTop = 0;
      let oldChildrenTop = 0;
      let newChildrenBottom = dart.notNull(newChildSemantics[$length]) - 1;
      let oldChildrenBottom = dart.notNull(oldSemantics[$length]) - 1;
      let newChildren = ListOfSemanticsNodeN().filled(newChildSemantics[$length], null, {growable: false});
      while (oldChildrenTop <= oldChildrenBottom && newChildrenTop <= newChildrenBottom) {
        let oldChild = oldSemantics[$_get](oldChildrenTop);
        let newSemantics = newChildSemantics[$_get](newChildrenTop);
        if (!dart.test(custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics))) break;
        let newChild = custom_paint.RenderCustomPaint._updateSemanticsChild(oldChild, newSemantics);
        newChildren[$_set](newChildrenTop, newChild);
        newChildrenTop = newChildrenTop + 1;
        oldChildrenTop = oldChildrenTop + 1;
      }
      while (oldChildrenTop <= oldChildrenBottom && newChildrenTop <= newChildrenBottom) {
        let oldChild = oldSemantics[$_get](oldChildrenBottom);
        let newChild = newChildSemantics[$_get](newChildrenBottom);
        if (!dart.test(custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newChild))) break;
        oldChildrenBottom = oldChildrenBottom - 1;
        newChildrenBottom = newChildrenBottom - 1;
      }
      let haveOldChildren = oldChildrenTop <= oldChildrenBottom;
      let oldKeyedChildren = null;
      let oldKeyedChildren$35isSet = false;
      function oldKeyedChildren$35get() {
        return oldKeyedChildren$35isSet ? oldKeyedChildren : dart.throw(new _internal.LateError.localNI("oldKeyedChildren"));
      }
      dart.fn(oldKeyedChildren$35get, VoidToMapOfKey$SemanticsNode());
      function oldKeyedChildren$35set(t9) {
        if (t9 == null) dart.nullFailed(L0, 740, 40, "null");
        if (oldKeyedChildren$35isSet)
          dart.throw(new _internal.LateError.localAI("oldKeyedChildren"));
        else {
          oldKeyedChildren$35isSet = true;
          return oldKeyedChildren = t9;
        }
      }
      dart.fn(oldKeyedChildren$35set, MapOfKey$SemanticsNodeTodynamic());
      if (haveOldChildren) {
        oldKeyedChildren$35set(new (LinkedMapOfKey$SemanticsNode()).new());
        while (oldChildrenTop <= oldChildrenBottom) {
          let oldChild = oldSemantics[$_get](oldChildrenTop);
          if (oldChild.key != null) oldKeyedChildren$35get()[$_set](dart.nullCheck(oldChild.key), oldChild);
          oldChildrenTop = oldChildrenTop + 1;
        }
      }
      while (newChildrenTop <= newChildrenBottom) {
        let oldChild = null;
        let newSemantics = newChildSemantics[$_get](newChildrenTop);
        if (haveOldChildren) {
          let key = newSemantics.key;
          if (key != null) {
            oldChild = oldKeyedChildren$35get()[$_get](key);
            if (oldChild != null) {
              if (dart.test(custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics))) {
                oldKeyedChildren$35get()[$remove](key);
              } else {
                oldChild = null;
              }
            }
          }
        }
        if (!(oldChild == null || dart.test(custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics)))) dart.assertFailed(null, L0, 771, 14, "oldChild == null || _canUpdateSemanticsChild(oldChild, newSemantics)");
        let newChild = custom_paint.RenderCustomPaint._updateSemanticsChild(oldChild, newSemantics);
        if (!(dart.equals(oldChild, newChild) || oldChild == null)) dart.assertFailed(null, L0, 773, 14, "oldChild == newChild || oldChild == null");
        newChildren[$_set](newChildrenTop, newChild);
        newChildrenTop = newChildrenTop + 1;
      }
      if (!(oldChildrenTop === oldChildrenBottom + 1)) dart.assertFailed(null, L0, 779, 12, "oldChildrenTop == oldChildrenBottom + 1");
      if (!(newChildrenTop === newChildrenBottom + 1)) dart.assertFailed(null, L0, 780, 12, "newChildrenTop == newChildrenBottom + 1");
      if (!(dart.notNull(newChildSemantics[$length]) - newChildrenTop === dart.notNull(oldSemantics[$length]) - oldChildrenTop)) dart.assertFailed(null, L0, 781, 12, "newChildSemantics.length - newChildrenTop == oldSemantics.length - oldChildrenTop");
      newChildrenBottom = dart.notNull(newChildSemantics[$length]) - 1;
      oldChildrenBottom = dart.notNull(oldSemantics[$length]) - 1;
      while (oldChildrenTop <= oldChildrenBottom && newChildrenTop <= newChildrenBottom) {
        let oldChild = oldSemantics[$_get](oldChildrenTop);
        let newSemantics = newChildSemantics[$_get](newChildrenTop);
        if (!dart.test(custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics))) dart.assertFailed(null, L0, 789, 14, "_canUpdateSemanticsChild(oldChild, newSemantics)");
        let newChild = custom_paint.RenderCustomPaint._updateSemanticsChild(oldChild, newSemantics);
        if (!dart.equals(oldChild, newChild)) dart.assertFailed(null, L0, 791, 14, "oldChild == newChild");
        newChildren[$_set](newChildrenTop, newChild);
        newChildrenTop = newChildrenTop + 1;
        oldChildrenTop = oldChildrenTop + 1;
      }
      if (!dart.test(dart.fn(() => {
        for (let node of newChildren) {
          if (!(node != null)) dart.assertFailed(null, L0, 799, 16, "node != null");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 797, 12, "() {\n      for (final SemanticsNode? node in newChildren) {\n        assert(node != null);\n      }\n      return true;\n    }()");
      return newChildren[$cast](semantics.SemanticsNode);
    }
    static _canUpdateSemanticsChild(oldChild, newSemantics) {
      if (oldChild == null) dart.nullFailed(L0, 811, 54, "oldChild");
      if (newSemantics == null) dart.nullFailed(L0, 811, 87, "newSemantics");
      return dart.equals(oldChild.key, newSemantics.key);
    }
    static _updateSemanticsChild(oldChild, newSemantics) {
      let t11, t11$;
      if (newSemantics == null) dart.nullFailed(L0, 819, 94, "newSemantics");
      if (!(oldChild == null || dart.test(custom_paint.RenderCustomPaint._canUpdateSemanticsChild(oldChild, newSemantics)))) dart.assertFailed(null, L0, 820, 12, "oldChild == null || _canUpdateSemanticsChild(oldChild, newSemantics)");
      let newChild = (t11 = oldChild, t11 == null ? new semantics.SemanticsNode.new({key: newSemantics.key}) : t11);
      let properties = newSemantics.properties;
      let config = new semantics.SemanticsConfiguration.new();
      if (properties.sortKey != null) {
        config.sortKey = properties.sortKey;
      }
      if (properties.checked != null) {
        config.isChecked = properties.checked;
      }
      if (properties.selected != null) {
        config.isSelected = dart.nullCheck(properties.selected);
      }
      if (properties.button != null) {
        config.isButton = dart.nullCheck(properties.button);
      }
      if (properties.link != null) {
        config.isLink = dart.nullCheck(properties.link);
      }
      if (properties.textField != null) {
        config.isTextField = dart.nullCheck(properties.textField);
      }
      if (properties.slider != null) {
        config.isSlider = dart.nullCheck(properties.slider);
      }
      if (properties.readOnly != null) {
        config.isReadOnly = dart.nullCheck(properties.readOnly);
      }
      if (properties.focusable != null) {
        config.isFocusable = dart.nullCheck(properties.focusable);
      }
      if (properties.focused != null) {
        config.isFocused = dart.nullCheck(properties.focused);
      }
      if (properties.enabled != null) {
        config.isEnabled = properties.enabled;
      }
      if (properties.inMutuallyExclusiveGroup != null) {
        config.isInMutuallyExclusiveGroup = dart.nullCheck(properties.inMutuallyExclusiveGroup);
      }
      if (properties.obscured != null) {
        config.isObscured = dart.nullCheck(properties.obscured);
      }
      if (properties.multiline != null) {
        config.isMultiline = dart.nullCheck(properties.multiline);
      }
      if (properties.hidden != null) {
        config.isHidden = dart.nullCheck(properties.hidden);
      }
      if (properties.header != null) {
        config.isHeader = dart.nullCheck(properties.header);
      }
      if (properties.scopesRoute != null) {
        config.scopesRoute = dart.nullCheck(properties.scopesRoute);
      }
      if (properties.namesRoute != null) {
        config.namesRoute = dart.nullCheck(properties.namesRoute);
      }
      if (properties.liveRegion != null) {
        config.liveRegion = dart.nullCheck(properties.liveRegion);
      }
      if (properties.maxValueLength != null) {
        config.maxValueLength = properties.maxValueLength;
      }
      if (properties.currentValueLength != null) {
        config.currentValueLength = properties.currentValueLength;
      }
      if (properties.toggled != null) {
        config.isToggled = properties.toggled;
      }
      if (properties.image != null) {
        config.isImage = dart.nullCheck(properties.image);
      }
      if (properties.label != null) {
        config.label = dart.nullCheck(properties.label);
      }
      if (properties.value != null) {
        config.value = dart.nullCheck(properties.value);
      }
      if (properties.increasedValue != null) {
        config.increasedValue = dart.nullCheck(properties.increasedValue);
      }
      if (properties.decreasedValue != null) {
        config.decreasedValue = dart.nullCheck(properties.decreasedValue);
      }
      if (properties.hint != null) {
        config.hint = dart.nullCheck(properties.hint);
      }
      if (properties.textDirection != null) {
        config.textDirection = properties.textDirection;
      }
      if (properties.onTap != null) {
        config.onTap = properties.onTap;
      }
      if (properties.onLongPress != null) {
        config.onLongPress = properties.onLongPress;
      }
      if (properties.onScrollLeft != null) {
        config.onScrollLeft = properties.onScrollLeft;
      }
      if (properties.onScrollRight != null) {
        config.onScrollRight = properties.onScrollRight;
      }
      if (properties.onScrollUp != null) {
        config.onScrollUp = properties.onScrollUp;
      }
      if (properties.onScrollDown != null) {
        config.onScrollDown = properties.onScrollDown;
      }
      if (properties.onIncrease != null) {
        config.onIncrease = properties.onIncrease;
      }
      if (properties.onDecrease != null) {
        config.onDecrease = properties.onDecrease;
      }
      if (properties.onCopy != null) {
        config.onCopy = properties.onCopy;
      }
      if (properties.onCut != null) {
        config.onCut = properties.onCut;
      }
      if (properties.onPaste != null) {
        config.onPaste = properties.onPaste;
      }
      if (properties.onMoveCursorForwardByCharacter != null) {
        config.onMoveCursorForwardByCharacter = properties.onMoveCursorForwardByCharacter;
      }
      if (properties.onMoveCursorBackwardByCharacter != null) {
        config.onMoveCursorBackwardByCharacter = properties.onMoveCursorBackwardByCharacter;
      }
      if (properties.onMoveCursorForwardByWord != null) {
        config.onMoveCursorForwardByWord = properties.onMoveCursorForwardByWord;
      }
      if (properties.onMoveCursorBackwardByWord != null) {
        config.onMoveCursorBackwardByWord = properties.onMoveCursorBackwardByWord;
      }
      if (properties.onSetSelection != null) {
        config.onSetSelection = properties.onSetSelection;
      }
      if (properties.onDidGainAccessibilityFocus != null) {
        config.onDidGainAccessibilityFocus = properties.onDidGainAccessibilityFocus;
      }
      if (properties.onDidLoseAccessibilityFocus != null) {
        config.onDidLoseAccessibilityFocus = properties.onDidLoseAccessibilityFocus;
      }
      if (properties.onDismiss != null) {
        config.onDismiss = properties.onDismiss;
      }
      newChild.updateWith({config: config, childrenInInversePaintOrder: C2 || CT.C2});
      t11$ = newChild;
      (() => {
        t11$.rect = newSemantics.rect;
        t11$.transform = newSemantics.transform;
        t11$.tags = newSemantics.tags;
        return t11$;
      })();
      return newChild;
    }
  };
  (custom_paint.RenderCustomPaint.new = function(opts) {
    let painter = opts && 'painter' in opts ? opts.painter : null;
    let foregroundPainter = opts && 'foregroundPainter' in opts ? opts.foregroundPainter : null;
    let preferredSize = opts && 'preferredSize' in opts ? opts.preferredSize : C0 || CT.C0;
    if (preferredSize == null) dart.nullFailed(L0, 373, 10, "preferredSize");
    let isComplex = opts && 'isComplex' in opts ? opts.isComplex : false;
    if (isComplex == null) dart.nullFailed(L0, 374, 10, "isComplex");
    let willChange = opts && 'willChange' in opts ? opts.willChange : false;
    if (willChange == null) dart.nullFailed(L0, 375, 10, "willChange");
    let child = opts && 'child' in opts ? opts.child : null;
    this[_backgroundSemanticsBuilder] = null;
    this[_foregroundSemanticsBuilder] = null;
    this[_backgroundSemanticsNodes] = null;
    this[_foregroundSemanticsNodes] = null;
    this[isComplex$] = isComplex;
    this[willChange$] = willChange;
    if (!(preferredSize != null)) dart.assertFailed(null, L0, 377, 15, "preferredSize != null");
    this[_painter] = painter;
    this[_foregroundPainter] = foregroundPainter;
    this[_preferredSize] = preferredSize;
    custom_paint.RenderCustomPaint.__proto__.new.call(this, child);
    ;
  }).prototype = custom_paint.RenderCustomPaint.prototype;
  dart.addTypeTests(custom_paint.RenderCustomPaint);
  dart.addTypeCaches(custom_paint.RenderCustomPaint);
  dart.setMethodSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getMethods(custom_paint.RenderCustomPaint.__proto__),
    [_didUpdatePainter]: dart.fnType(dart.void, [dart.nullable(custom_paint.CustomPainter), dart.nullable(custom_paint.CustomPainter)]),
    [_paintWithPainter]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, custom_paint.CustomPainter]),
    [_setRasterCacheHints]: dart.fnType(dart.void, [object.PaintingContext])
  }));
  dart.setGetterSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getGetters(custom_paint.RenderCustomPaint.__proto__),
    painter: dart.nullable(custom_paint.CustomPainter),
    foregroundPainter: dart.nullable(custom_paint.CustomPainter),
    preferredSize: ui.Size
  }));
  dart.setSetterSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getSetters(custom_paint.RenderCustomPaint.__proto__),
    painter: dart.nullable(custom_paint.CustomPainter),
    foregroundPainter: dart.nullable(custom_paint.CustomPainter),
    preferredSize: ui.Size
  }));
  dart.setLibraryUri(custom_paint.RenderCustomPaint, L1);
  dart.setFieldSignature(custom_paint.RenderCustomPaint, () => ({
    __proto__: dart.getFields(custom_paint.RenderCustomPaint.__proto__),
    [_painter]: dart.fieldType(dart.nullable(custom_paint.CustomPainter)),
    [_foregroundPainter]: dart.fieldType(dart.nullable(custom_paint.CustomPainter)),
    [_preferredSize]: dart.fieldType(ui.Size),
    isComplex: dart.fieldType(core.bool),
    willChange: dart.fieldType(core.bool),
    [_backgroundSemanticsBuilder]: dart.fieldType(dart.nullable(dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size]))),
    [_foregroundSemanticsBuilder]: dart.fieldType(dart.nullable(dart.fnType(core.List$(custom_paint.CustomPainterSemantics), [ui.Size]))),
    [_backgroundSemanticsNodes]: dart.fieldType(dart.nullable(core.List$(semantics.SemanticsNode))),
    [_foregroundSemanticsNodes]: dart.fieldType(dart.nullable(core.List$(semantics.SemanticsNode)))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/custom_paint.dart", {
    "package:flutter/src/rendering/custom_paint.dart": custom_paint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_paint.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/custom_paint.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__custom_paint: custom_paint
  };
}));

//# sourceMappingURL=custom_paint.dart.lib.js.map
