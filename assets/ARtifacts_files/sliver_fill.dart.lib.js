define(['dart_sdk', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/rendering/sliver_fill.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver_padding.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__sliver_fill_dart(dart_sdk, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__rendering__sliver_fill$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver_padding$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const sliver = packages__flutter__src__widgets__widget_span$46dart.src__widgets__sliver;
  const sliver_fill = packages__flutter__src__rendering__sliver_fill$46dart.src__rendering__sliver_fill;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver_padding = packages__flutter__src__rendering__sliver_padding$46dart.src__rendering__sliver_padding;
  const sliver$ = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var sliver_fill$ = Object.create(dart.library);
  var $clamp = dartx.clamp;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var DiagnosticsPropertyOfWidget = () => (DiagnosticsPropertyOfWidget = dart.constFn(diagnostics.DiagnosticsProperty$(framework.Widget)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart";
  var L1 = "package:flutter/src/widgets/sliver_fill.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 66,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 64,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 49,
        [_Location_line]: 438,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], _LocationL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 438,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 52,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 440,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 46,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], _LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 441,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_fill.dart"
      });
    }
  }, false);
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C1;
  var C0;
  var C6;
  var C7;
  var C5;
  var C4;
  var viewportFraction$ = dart.privateName(sliver_fill$, "SliverFillViewport.viewportFraction");
  var padEnds$ = dart.privateName(sliver_fill$, "SliverFillViewport.padEnds");
  var delegate$ = dart.privateName(sliver_fill$, "SliverFillViewport.delegate");
  sliver_fill$.SliverFillViewport = class SliverFillViewport extends framework.StatelessWidget {
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get padEnds() {
      return this[padEnds$];
    }
    set padEnds(value) {
      super.padEnds = value;
    }
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 63, 29, "context");
      return new sliver_fill$._SliverFractionalPadding.new({viewportFraction: dart.test(this.padEnds) ? (1 - dart.notNull(this.viewportFraction))[$clamp](0, 1) / 2 : 0.0, sliver: new sliver_fill$._SliverFillViewportRenderObjectWidget.new({viewportFraction: this.viewportFraction, delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (sliver_fill$.SliverFillViewport.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L0, 31, 19, "delegate");
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    if (viewportFraction == null) dart.nullFailed(L0, 32, 10, "viewportFraction");
    let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
    if (padEnds == null) dart.nullFailed(L0, 33, 10, "padEnds");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$] = delegate;
    this[viewportFraction$] = viewportFraction;
    this[padEnds$] = padEnds;
    if (!(viewportFraction != null)) dart.assertFailed(null, L0, 34, 15, "viewportFraction != null");
    if (!(dart.notNull(viewportFraction) > 0.0)) dart.assertFailed(null, L0, 35, 15, "viewportFraction > 0.0");
    if (!(padEnds != null)) dart.assertFailed(null, L0, 36, 15, "padEnds != null");
    sliver_fill$.SliverFillViewport.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$.SliverFillViewport.prototype;
  dart.addTypeTests(sliver_fill$.SliverFillViewport);
  dart.addTypeCaches(sliver_fill$.SliverFillViewport);
  dart.setMethodSignature(sliver_fill$.SliverFillViewport, () => ({
    __proto__: dart.getMethods(sliver_fill$.SliverFillViewport.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$.SliverFillViewport, L1);
  dart.setFieldSignature(sliver_fill$.SliverFillViewport, () => ({
    __proto__: dart.getFields(sliver_fill$.SliverFillViewport.__proto__),
    viewportFraction: dart.finalFieldType(core.double),
    padEnds: dart.finalFieldType(core.bool),
    delegate: dart.finalFieldType(sliver.SliverChildDelegate)
  }));
  var viewportFraction$0 = dart.privateName(sliver_fill$, "_SliverFillViewportRenderObjectWidget.viewportFraction");
  sliver_fill$._SliverFillViewportRenderObjectWidget = class _SliverFillViewportRenderObjectWidget extends sliver.SliverMultiBoxAdaptorWidget {
    get viewportFraction() {
      return this[viewportFraction$0];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 86, 60, "context");
      let element = sliver.SliverMultiBoxAdaptorElement.as(context);
      return new sliver_fill.RenderSliverFillViewport.new({childManager: element, viewportFraction: this.viewportFraction});
    }
    updateRenderObject(context, renderObject) {
      if (context == null) dart.nullFailed(L0, 92, 40, "context");
      sliver_fill.RenderSliverFillViewport.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 92, 74, "renderObject");
      renderObject.viewportFraction = this.viewportFraction;
    }
  };
  (sliver_fill$._SliverFillViewportRenderObjectWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L0, 77, 34, "delegate");
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    if (viewportFraction == null) dart.nullFailed(L0, 78, 10, "viewportFraction");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewportFraction$0] = viewportFraction;
    if (!(viewportFraction != null)) dart.assertFailed(null, L0, 79, 15, "viewportFraction != null");
    if (!(dart.notNull(viewportFraction) > 0.0)) dart.assertFailed(null, L0, 80, 14, "viewportFraction > 0.0");
    sliver_fill$._SliverFillViewportRenderObjectWidget.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillViewportRenderObjectWidget.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillViewportRenderObjectWidget);
  dart.addTypeCaches(sliver_fill$._SliverFillViewportRenderObjectWidget);
  dart.setMethodSignature(sliver_fill$._SliverFillViewportRenderObjectWidget, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillViewportRenderObjectWidget.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillViewport, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillViewportRenderObjectWidget, L1);
  dart.setFieldSignature(sliver_fill$._SliverFillViewportRenderObjectWidget, () => ({
    __proto__: dart.getFields(sliver_fill$._SliverFillViewportRenderObjectWidget.__proto__),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var viewportFraction$1 = dart.privateName(sliver_fill$, "_SliverFractionalPadding.viewportFraction");
  sliver_fill$._SliverFractionalPadding = class _SliverFractionalPadding extends framework.SingleChildRenderObjectWidget {
    get viewportFraction() {
      return this[viewportFraction$1];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 109, 48, "context");
      return new sliver_fill$._RenderSliverFractionalPadding.new({viewportFraction: this.viewportFraction});
    }
    updateRenderObject(context, renderObject) {
      if (context == null) dart.nullFailed(L0, 112, 40, "context");
      sliver_fill$._RenderSliverFractionalPadding.as(renderObject);
      if (renderObject == null) dart.nullFailed(L0, 112, 80, "renderObject");
      renderObject.viewportFraction = this.viewportFraction;
    }
  };
  (sliver_fill$._SliverFractionalPadding.new = function(opts) {
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0;
    if (viewportFraction == null) dart.nullFailed(L0, 99, 10, "viewportFraction");
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[viewportFraction$1] = viewportFraction;
    if (!(viewportFraction != null)) dart.assertFailed(null, L0, 101, 15, "viewportFraction != null");
    if (!(dart.notNull(viewportFraction) >= 0)) dart.assertFailed(null, L0, 102, 14, "viewportFraction >= 0");
    if (!(dart.notNull(viewportFraction) <= 0.5)) dart.assertFailed(null, L0, 103, 14, "viewportFraction <= 0.5");
    sliver_fill$._SliverFractionalPadding.__proto__.new.call(this, {child: sliver, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFractionalPadding.prototype;
  dart.addTypeTests(sliver_fill$._SliverFractionalPadding);
  dart.addTypeCaches(sliver_fill$._SliverFractionalPadding);
  dart.setMethodSignature(sliver_fill$._SliverFractionalPadding, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFractionalPadding.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFractionalPadding, L1);
  dart.setFieldSignature(sliver_fill$._SliverFractionalPadding, () => ({
    __proto__: dart.getFields(sliver_fill$._SliverFractionalPadding.__proto__),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var _lastResolvedConstraints = dart.privateName(sliver_fill$, "_lastResolvedConstraints");
  var _resolvedPadding = dart.privateName(sliver_fill$, "_resolvedPadding");
  var _viewportFraction = dart.privateName(sliver_fill$, "_viewportFraction");
  var _markNeedsResolution = dart.privateName(sliver_fill$, "_markNeedsResolution");
  var _name = dart.privateName(basic_types, "_name");
  var C8;
  var C9;
  var _resolve = dart.privateName(sliver_fill$, "_resolve");
  sliver_fill$._RenderSliverFractionalPadding = class _RenderSliverFractionalPadding extends sliver_padding.RenderSliverEdgeInsetsPadding {
    get viewportFraction() {
      return this[_viewportFraction];
    }
    set viewportFraction(newValue) {
      if (newValue == null) dart.nullFailed(L0, 129, 31, "newValue");
      if (!(newValue != null)) dart.assertFailed(null, L0, 130, 12, "newValue != null");
      if (this[_viewportFraction] == newValue) return;
      this[_viewportFraction] = newValue;
      this[_markNeedsResolution]();
    }
    get resolvedPadding() {
      return this[_resolvedPadding];
    }
    [_markNeedsResolution]() {
      this[_resolvedPadding] = null;
      this.markNeedsLayout();
    }
    [_resolve]() {
      if (this[_resolvedPadding] != null && dart.equals(this[_lastResolvedConstraints], this.constraints)) return;
      if (!(this.constraints.axis != null)) dart.assertFailed(null, L0, 150, 12, "constraints.axis != null");
      let paddingValue = dart.notNull(this.constraints.viewportMainAxisExtent) * dart.notNull(this.viewportFraction);
      this[_lastResolvedConstraints] = this.constraints;
      switch (this.constraints.axis) {
        case C8 || CT.C8:
        {
          this[_resolvedPadding] = new edge_insets.EdgeInsets.symmetric({horizontal: paddingValue});
          break;
        }
        case C9 || CT.C9:
        {
          this[_resolvedPadding] = new edge_insets.EdgeInsets.symmetric({vertical: paddingValue});
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      return;
    }
    performLayout() {
      this[_resolve]();
      super.performLayout();
    }
  };
  (sliver_fill$._RenderSliverFractionalPadding.new = function(opts) {
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0;
    if (viewportFraction == null) dart.nullFailed(L0, 119, 12, "viewportFraction");
    this[_lastResolvedConstraints] = null;
    this[_resolvedPadding] = null;
    if (!(viewportFraction != null)) dart.assertFailed(null, L0, 120, 15, "viewportFraction != null");
    if (!(dart.notNull(viewportFraction) <= 0.5)) dart.assertFailed(null, L0, 121, 14, "viewportFraction <= 0.5");
    if (!(dart.notNull(viewportFraction) >= 0)) dart.assertFailed(null, L0, 122, 14, "viewportFraction >= 0");
    this[_viewportFraction] = viewportFraction;
    sliver_fill$._RenderSliverFractionalPadding.__proto__.new.call(this);
    ;
  }).prototype = sliver_fill$._RenderSliverFractionalPadding.prototype;
  dart.addTypeTests(sliver_fill$._RenderSliverFractionalPadding);
  dart.addTypeCaches(sliver_fill$._RenderSliverFractionalPadding);
  dart.setMethodSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getMethods(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    [_markNeedsResolution]: dart.fnType(dart.void, []),
    [_resolve]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getGetters(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    viewportFraction: core.double,
    resolvedPadding: dart.nullable(edge_insets.EdgeInsets)
  }));
  dart.setSetterSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getSetters(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    viewportFraction: core.double
  }));
  dart.setLibraryUri(sliver_fill$._RenderSliverFractionalPadding, L1);
  dart.setFieldSignature(sliver_fill$._RenderSliverFractionalPadding, () => ({
    __proto__: dart.getFields(sliver_fill$._RenderSliverFractionalPadding.__proto__),
    [_lastResolvedConstraints]: dart.fieldType(dart.nullable(sliver$.SliverConstraints)),
    [_viewportFraction]: dart.fieldType(core.double),
    [_resolvedPadding]: dart.fieldType(dart.nullable(edge_insets.EdgeInsets))
  }));
  var C12;
  var C11;
  var C10;
  var C15;
  var C14;
  var C13;
  var C18;
  var C17;
  var C16;
  var child$ = dart.privateName(sliver_fill$, "SliverFillRemaining.child");
  var hasScrollBody$ = dart.privateName(sliver_fill$, "SliverFillRemaining.hasScrollBody");
  var fillOverscroll$ = dart.privateName(sliver_fill$, "SliverFillRemaining.fillOverscroll");
  sliver_fill$.SliverFillRemaining = class SliverFillRemaining extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get hasScrollBody() {
      return this[hasScrollBody$];
    }
    set hasScrollBody(value) {
      super.hasScrollBody = value;
    }
    get fillOverscroll() {
      return this[fillOverscroll$];
    }
    set fillOverscroll(value) {
      super.fillOverscroll = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L0, 436, 29, "context");
      if (dart.test(this.hasScrollBody)) return new sliver_fill$._SliverFillRemainingWithScrollable.new({child: this.child, $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
      if (!dart.test(this.fillOverscroll)) return new sliver_fill$._SliverFillRemainingWithoutScrollable.new({child: this.child, $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
      return new sliver_fill$._SliverFillRemainingAndOverscroll.new({child: this.child, $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 445, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfWidget()).new("child", this.child));
      let flags = (() => {
        let t0 = JSArrayOfString().of([]);
        if (dart.test(this.hasScrollBody)) t0.push("scrollable");
        if (dart.test(this.fillOverscroll)) t0.push("fillOverscroll");
        return t0;
      })();
      if (dart.test(flags[$isEmpty])) flags[$add]("nonscrollable");
      properties.add(new (IterablePropertyOfString()).new("mode", flags));
    }
  };
  (sliver_fill$.SliverFillRemaining.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let hasScrollBody = opts && 'hasScrollBody' in opts ? opts.hasScrollBody : true;
    if (hasScrollBody == null) dart.nullFailed(L0, 402, 10, "hasScrollBody");
    let fillOverscroll = opts && 'fillOverscroll' in opts ? opts.fillOverscroll : false;
    if (fillOverscroll == null) dart.nullFailed(L0, 403, 10, "fillOverscroll");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[hasScrollBody$] = hasScrollBody;
    this[fillOverscroll$] = fillOverscroll;
    if (!(hasScrollBody != null)) dart.assertFailed(null, L0, 404, 15, "hasScrollBody != null");
    if (!(fillOverscroll != null)) dart.assertFailed(null, L0, 405, 15, "fillOverscroll != null");
    sliver_fill$.SliverFillRemaining.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$.SliverFillRemaining.prototype;
  dart.addTypeTests(sliver_fill$.SliverFillRemaining);
  dart.addTypeCaches(sliver_fill$.SliverFillRemaining);
  dart.setMethodSignature(sliver_fill$.SliverFillRemaining, () => ({
    __proto__: dart.getMethods(sliver_fill$.SliverFillRemaining.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$.SliverFillRemaining, L1);
  dart.setFieldSignature(sliver_fill$.SliverFillRemaining, () => ({
    __proto__: dart.getFields(sliver_fill$.SliverFillRemaining.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    hasScrollBody: dart.finalFieldType(core.bool),
    fillOverscroll: dart.finalFieldType(core.bool)
  }));
  sliver_fill$._SliverFillRemainingWithScrollable = class _SliverFillRemainingWithScrollable extends framework.SingleChildRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 470, 75, "context");
      return new sliver_fill.RenderSliverFillRemainingWithScrollable.new();
    }
  };
  (sliver_fill$._SliverFillRemainingWithScrollable.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_fill$._SliverFillRemainingWithScrollable.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillRemainingWithScrollable.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillRemainingWithScrollable);
  dart.addTypeCaches(sliver_fill$._SliverFillRemainingWithScrollable);
  dart.setMethodSignature(sliver_fill$._SliverFillRemainingWithScrollable, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillRemainingWithScrollable.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillRemainingWithScrollable, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillRemainingWithScrollable, L1);
  sliver_fill$._SliverFillRemainingWithoutScrollable = class _SliverFillRemainingWithoutScrollable extends framework.SingleChildRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 480, 61, "context");
      return new sliver_fill.RenderSliverFillRemaining.new();
    }
  };
  (sliver_fill$._SliverFillRemainingWithoutScrollable.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_fill$._SliverFillRemainingWithoutScrollable.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillRemainingWithoutScrollable.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillRemainingWithoutScrollable);
  dart.addTypeCaches(sliver_fill$._SliverFillRemainingWithoutScrollable);
  dart.setMethodSignature(sliver_fill$._SliverFillRemainingWithoutScrollable, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillRemainingWithoutScrollable.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillRemaining, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillRemainingWithoutScrollable, L1);
  sliver_fill$._SliverFillRemainingAndOverscroll = class _SliverFillRemainingAndOverscroll extends framework.SingleChildRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L0, 490, 74, "context");
      return new sliver_fill.RenderSliverFillRemainingAndOverscroll.new();
    }
  };
  (sliver_fill$._SliverFillRemainingAndOverscroll.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_fill$._SliverFillRemainingAndOverscroll.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_fill$._SliverFillRemainingAndOverscroll.prototype;
  dart.addTypeTests(sliver_fill$._SliverFillRemainingAndOverscroll);
  dart.addTypeCaches(sliver_fill$._SliverFillRemainingAndOverscroll);
  dart.setMethodSignature(sliver_fill$._SliverFillRemainingAndOverscroll, () => ({
    __proto__: dart.getMethods(sliver_fill$._SliverFillRemainingAndOverscroll.__proto__),
    createRenderObject: dart.fnType(sliver_fill.RenderSliverFillRemainingAndOverscroll, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_fill$._SliverFillRemainingAndOverscroll, L1);
  dart.trackLibraries("packages/flutter/src/widgets/sliver_fill.dart", {
    "package:flutter/src/widgets/sliver_fill.dart": sliver_fill$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_fill.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/sliver_fill.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__sliver_fill: sliver_fill$
  };
}));

//# sourceMappingURL=sliver_fill.dart.lib.js.map
