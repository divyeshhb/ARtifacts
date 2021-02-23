define(['dart_sdk', 'packages/flutter/src/scheduler/ticker.dart', 'packages/flutter/src/rendering/sliver_persistent_header.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__widgets__sliver_persistent_header_dart(dart_sdk, packages__flutter__src__scheduler__ticker$46dart, packages__flutter__src__rendering__sliver_persistent_header$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  const sliver_persistent_header = packages__flutter__src__rendering__sliver_persistent_header$46dart.src__rendering__sliver_persistent_header;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  var sliver_persistent_header$ = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var DiagnosticsPropertyOfSliverPersistentHeaderDelegate = () => (DiagnosticsPropertyOfSliverPersistentHeaderDelegate = dart.constFn(diagnostics.DiagnosticsProperty$(sliver_persistent_header$.SliverPersistentHeaderDelegate)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  var L0 = "package:flutter/src/widgets/sliver_persistent_header.dart";
  var L1 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 52,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 161,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 44,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 163,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 46,
        [_Location_line]: 165,
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
        [_Location_column]: 14,
        [_Location_line]: 165,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 45,
        [_Location_line]: 166,
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
        [_Location_line]: 166,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    }
  }, false);
  sliver_persistent_header$.SliverPersistentHeaderDelegate = class SliverPersistentHeaderDelegate extends core.Object {
    get vsync() {
      return null;
    }
    get snapConfiguration() {
      return null;
    }
    get stretchConfiguration() {
      return null;
    }
    get showOnScreenConfiguration() {
      return null;
    }
  };
  (sliver_persistent_header$.SliverPersistentHeaderDelegate.new = function() {
    ;
  }).prototype = sliver_persistent_header$.SliverPersistentHeaderDelegate.prototype;
  dart.addTypeTests(sliver_persistent_header$.SliverPersistentHeaderDelegate);
  dart.addTypeCaches(sliver_persistent_header$.SliverPersistentHeaderDelegate);
  dart.setGetterSignature(sliver_persistent_header$.SliverPersistentHeaderDelegate, () => ({
    __proto__: dart.getGetters(sliver_persistent_header$.SliverPersistentHeaderDelegate.__proto__),
    vsync: dart.nullable(ticker.TickerProvider),
    snapConfiguration: dart.nullable(sliver_persistent_header.FloatingHeaderSnapConfiguration),
    stretchConfiguration: dart.nullable(sliver_persistent_header.OverScrollHeaderStretchConfiguration),
    showOnScreenConfiguration: dart.nullable(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration)
  }));
  dart.setLibraryUri(sliver_persistent_header$.SliverPersistentHeaderDelegate, L0);
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var C5;
  var C4;
  var C3;
  var C8;
  var C7;
  var C6;
  var C11;
  var C10;
  var C9;
  var delegate$ = dart.privateName(sliver_persistent_header$, "SliverPersistentHeader.delegate");
  var pinned$ = dart.privateName(sliver_persistent_header$, "SliverPersistentHeader.pinned");
  var floating$ = dart.privateName(sliver_persistent_header$, "SliverPersistentHeader.floating");
  sliver_persistent_header$.SliverPersistentHeader = class SliverPersistentHeader extends framework.StatelessWidget {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    get pinned() {
      return this[pinned$];
    }
    set pinned(value) {
      super.pinned = value;
    }
    get floating() {
      return this[floating$];
    }
    set floating(value) {
      super.floating = value;
    }
    build(context) {
      if (context == null) dart.nullFailed(L1, 159, 29, "context");
      if (dart.test(this.floating) && dart.test(this.pinned)) return new sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      if (dart.test(this.pinned)) return new sliver_persistent_header$._SliverPinnedPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
      if (dart.test(this.floating)) return new sliver_persistent_header$._SliverFloatingPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
      return new sliver_persistent_header$._SliverScrollingPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L1, 170, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfSliverPersistentHeaderDelegate()).new("delegate", this.delegate));
      let flags = (() => {
        let t0 = JSArrayOfString().of([]);
        if (dart.test(this.pinned)) t0.push("pinned");
        if (dart.test(this.floating)) t0.push("floating");
        return t0;
      })();
      if (dart.test(flags[$isEmpty])) flags[$add]("normal");
      properties.add(new (IterablePropertyOfString()).new("mode", flags));
    }
  };
  (sliver_persistent_header$.SliverPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L1, 122, 19, "delegate");
    let pinned = opts && 'pinned' in opts ? opts.pinned : false;
    if (pinned == null) dart.nullFailed(L1, 123, 10, "pinned");
    let floating = opts && 'floating' in opts ? opts.floating : false;
    if (floating == null) dart.nullFailed(L1, 124, 10, "floating");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$] = delegate;
    this[pinned$] = pinned;
    this[floating$] = floating;
    if (!(delegate != null)) dart.assertFailed(null, L1, 125, 15, "delegate != null");
    if (!(pinned != null)) dart.assertFailed(null, L1, 126, 15, "pinned != null");
    if (!(floating != null)) dart.assertFailed(null, L1, 127, 15, "floating != null");
    sliver_persistent_header$.SliverPersistentHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$.SliverPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$.SliverPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$.SliverPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$.SliverPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$.SliverPersistentHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$.SliverPersistentHeader, L0);
  dart.setFieldSignature(sliver_persistent_header$.SliverPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header$.SliverPersistentHeader.__proto__),
    delegate: dart.finalFieldType(sliver_persistent_header$.SliverPersistentHeaderDelegate),
    pinned: dart.finalFieldType(core.bool),
    floating: dart.finalFieldType(core.bool)
  }));
  var _element = dart.privateName(sliver_persistent_header$, "_element");
  var _build = dart.privateName(sliver_persistent_header$, "_build");
  sliver_persistent_header$._SliverPersistentHeaderElement = class _SliverPersistentHeaderElement extends framework.RenderObjectElement {
    get widget() {
      return sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.as(super.widget);
    }
    get renderObject() {
      return sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.as(super.renderObject);
    }
    mount(parent, newSlot) {
      super.mount(parent, newSlot);
      this.renderObject[_element] = this;
    }
    unmount() {
      super.unmount();
      this.renderObject[_element] = null;
    }
    update(newWidget) {
      sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.as(newWidget);
      if (newWidget == null) dart.nullFailed(L1, 210, 57, "newWidget");
      let oldWidget = this.widget;
      super.update(newWidget);
      let newDelegate = newWidget.delegate;
      let oldDelegate = oldWidget.delegate;
      if (!dart.equals(newDelegate, oldDelegate) && (!dart.equals(dart.runtimeType(newDelegate), dart.runtimeType(oldDelegate)) || dart.test(newDelegate.shouldRebuild(oldDelegate)))) this.renderObject.triggerRebuild();
    }
    performRebuild() {
      super.performRebuild();
      this.renderObject.triggerRebuild();
    }
    [_build](shrinkOffset, overlapsContent) {
      if (shrinkOffset == null) dart.nullFailed(L1, 228, 22, "shrinkOffset");
      if (overlapsContent == null) dart.nullFailed(L1, 228, 41, "overlapsContent");
      dart.nullCheck(this.owner).buildScope(this, dart.fn(() => {
        this.child = this.updateChild(this.child, this.widget.delegate.build(this, shrinkOffset, overlapsContent), null);
      }, VoidTovoid()));
    }
    forgetChild(child) {
      if (child == null) dart.nullFailed(L1, 243, 28, "child");
      if (!dart.equals(child, this.child)) dart.assertFailed(null, L1, 244, 12, "child == this.child");
      this.child = null;
      super.forgetChild(child);
    }
    insertRenderObjectChild(child, slot) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L1, 250, 52, "child");
      if (!dart.test(this.renderObject.debugValidateChild(child))) dart.assertFailed(null, L1, 251, 12, "renderObject.debugValidateChild(child)");
      this.renderObject.child = child;
    }
    moveRenderObjectChild(child, oldSlot, newSlot) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L1, 256, 53, "child");
      if (!false) dart.assertFailed(null, L1, 257, 12, "false");
    }
    removeRenderObjectChild(child, slot) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L1, 261, 55, "child");
      this.renderObject.child = null;
    }
    visitChildren(visitor) {
      if (visitor == null) dart.nullFailed(L1, 266, 37, "visitor");
      if (this.child != null) visitor(dart.nullCheck(this.child));
    }
  };
  (sliver_persistent_header$._SliverPersistentHeaderElement.new = function(widget) {
    if (widget == null) dart.nullFailed(L1, 189, 76, "widget");
    this.child = null;
    sliver_persistent_header$._SliverPersistentHeaderElement.__proto__.new.call(this, widget);
    ;
  }).prototype = sliver_persistent_header$._SliverPersistentHeaderElement.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverPersistentHeaderElement);
  dart.addTypeCaches(sliver_persistent_header$._SliverPersistentHeaderElement);
  dart.setMethodSignature(sliver_persistent_header$._SliverPersistentHeaderElement, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverPersistentHeaderElement.__proto__),
    [_build]: dart.fnType(dart.void, [core.double, core.bool])
  }));
  dart.setGetterSignature(sliver_persistent_header$._SliverPersistentHeaderElement, () => ({
    __proto__: dart.getGetters(sliver_persistent_header$._SliverPersistentHeaderElement.__proto__),
    widget: sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget,
    renderObject: sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverPersistentHeaderElement, L0);
  dart.setFieldSignature(sliver_persistent_header$._SliverPersistentHeaderElement, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._SliverPersistentHeaderElement.__proto__),
    child: dart.fieldType(dart.nullable(framework.Element))
  }));
  var delegate$0 = dart.privateName(sliver_persistent_header$, "_SliverPersistentHeaderRenderObjectWidget.delegate");
  sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget = class _SliverPersistentHeaderRenderObjectWidget extends framework.RenderObjectWidget {
    get delegate() {
      return this[delegate$0];
    }
    set delegate(value) {
      super.delegate = value;
    }
    createElement() {
      return new sliver_persistent_header$._SliverPersistentHeaderElement.new(this);
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L1, 288, 56, "description");
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfSliverPersistentHeaderDelegate()).new("delegate", this.delegate));
    }
  };
  (sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L1, 275, 19, "delegate");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$0] = delegate;
    if (!(delegate != null)) dart.assertFailed(null, L1, 276, 15, "delegate != null");
    sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget);
  dart.addTypeCaches(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget);
  dart.setMethodSignature(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.__proto__),
    createElement: dart.fnType(sliver_persistent_header$._SliverPersistentHeaderElement, [])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget, L0);
  dart.setFieldSignature(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.__proto__),
    delegate: dart.finalFieldType(sliver_persistent_header$.SliverPersistentHeaderDelegate)
  }));
  sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin = class _RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverPersistentHeader {};
  sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinOn] = RenderSliverPersistentHeader => class _RenderSliverPersistentHeaderForWidgetsMixin extends RenderSliverPersistentHeader {
    get minExtent() {
      return dart.nullCheck(this[_element]).widget.delegate.minExtent;
    }
    get maxExtent() {
      return dart.nullCheck(this[_element]).widget.delegate.maxExtent;
    }
    updateChild(shrinkOffset, overlapsContent) {
      if (shrinkOffset == null) dart.nullFailed(L1, 309, 27, "shrinkOffset");
      if (overlapsContent == null) dart.nullFailed(L1, 309, 46, "overlapsContent");
      if (!(this[_element] != null)) dart.assertFailed(null, L1, 310, 12, "_element != null");
      dart.nullCheck(this[_element])[_build](shrinkOffset, overlapsContent);
    }
    triggerRebuild() {
      this.markNeedsLayout();
    }
  };
  (sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew] = function() {
    this[_element] = null;
  }).prototype = sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.implements] = () => [sliver_persistent_header.RenderSliverPersistentHeader];
  dart.setMethodSignature(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.__proto__),
    triggerRebuild: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, () => ({
    __proto__: dart.getGetters(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.__proto__),
    minExtent: core.double,
    maxExtent: core.double
  }));
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, L0);
  dart.setFieldSignature(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.__proto__),
    [_element]: dart.fieldType(dart.nullable(sliver_persistent_header$._SliverPersistentHeaderElement))
  }));
  sliver_persistent_header$._SliverScrollingPersistentHeader = class _SliverScrollingPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L1, 330, 80, "context");
      return new sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.new({stretchConfiguration: this.delegate.stretchConfiguration});
    }
  };
  (sliver_persistent_header$._SliverScrollingPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L1, 323, 45, "delegate");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverScrollingPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverScrollingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverScrollingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverScrollingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverScrollingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverScrollingPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverScrollingPersistentHeader, L0);
  const RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverScrollingPersistentHeader {};
  (RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets = class _RenderSliverScrollingPersistentHeaderForWidgets extends RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {};
  (sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets, L0);
  sliver_persistent_header$._SliverPinnedPersistentHeader = class _SliverPinnedPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L1, 358, 80, "context");
      return new sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.new({stretchConfiguration: this.delegate.stretchConfiguration, showOnScreenConfiguration: this.delegate.showOnScreenConfiguration});
    }
  };
  (sliver_persistent_header$._SliverPinnedPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L1, 351, 45, "delegate");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverPinnedPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverPinnedPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverPinnedPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverPinnedPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverPinnedPersistentHeader, L0);
  const RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverPinnedPersistentHeader {};
  (RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets = class _RenderSliverPinnedPersistentHeaderForWidgets extends RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {};
  (sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets, L0);
  sliver_persistent_header$._SliverFloatingPersistentHeader = class _SliverFloatingPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L1, 389, 80, "context");
      return new sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.new({vsync: this.delegate.vsync, snapConfiguration: this.delegate.snapConfiguration, stretchConfiguration: this.delegate.stretchConfiguration, showOnScreenConfiguration: this.delegate.showOnScreenConfiguration});
    }
    updateRenderObject(context, renderObject) {
      if (context == null) dart.nullFailed(L1, 399, 40, "context");
      sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.as(renderObject);
      if (renderObject == null) dart.nullFailed(L1, 399, 97, "renderObject");
      renderObject.vsync = this.delegate.vsync;
      renderObject.snapConfiguration = this.delegate.snapConfiguration;
      renderObject.stretchConfiguration = this.delegate.stretchConfiguration;
      renderObject.showOnScreenConfiguration = this.delegate.showOnScreenConfiguration;
    }
  };
  (sliver_persistent_header$._SliverFloatingPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L1, 382, 45, "delegate");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverFloatingPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverFloatingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverFloatingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverFloatingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverFloatingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverFloatingPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverFloatingPersistentHeader, L0);
  const RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader {};
  (RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets = class _RenderSliverFloatingPinnedPersistentHeaderForWidgets extends RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {};
  (sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets, L0);
  sliver_persistent_header$._SliverFloatingPinnedPersistentHeader = class _SliverFloatingPinnedPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    createRenderObject(context) {
      if (context == null) dart.nullFailed(L1, 434, 80, "context");
      return new sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.new({vsync: this.delegate.vsync, snapConfiguration: this.delegate.snapConfiguration, stretchConfiguration: this.delegate.stretchConfiguration, showOnScreenConfiguration: this.delegate.showOnScreenConfiguration});
    }
    updateRenderObject(context, renderObject) {
      if (context == null) dart.nullFailed(L1, 444, 40, "context");
      sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.as(renderObject);
      if (renderObject == null) dart.nullFailed(L1, 444, 103, "renderObject");
      renderObject.vsync = this.delegate.vsync;
      renderObject.snapConfiguration = this.delegate.snapConfiguration;
      renderObject.stretchConfiguration = this.delegate.stretchConfiguration;
      renderObject.showOnScreenConfiguration = this.delegate.showOnScreenConfiguration;
    }
  };
  (sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (delegate == null) dart.nullFailed(L1, 427, 45, "delegate");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader, L0);
  const RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverFloatingPersistentHeader {};
  (RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets = class _RenderSliverFloatingPersistentHeaderForWidgets extends RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {};
  (sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets, L0);
  dart.trackLibraries("packages/flutter/src/widgets/sliver_persistent_header.dart", {
    "package:flutter/src/widgets/sliver_persistent_header.dart": sliver_persistent_header$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_persistent_header.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgE+B;IAAI;;AAWyB;IAAI;;AAWI;IAAI;;AAMM;IAAI;;;;EA9E1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4HD;;;;;;IAO1B;;;;;;IAUA;;;;;;;UAGe;AACxB,oBAAI,4BAAY,cACd,MAAO,oFAAgD;AACzD,oBAAI,cACF,MAAO,4EAAwC;AACjD,oBAAI,gBACF,MAAO,8EAA0C;AACnD,YAAO,+EAA2C;IACpD;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AAMnC,MALD,AAAW,UAAD,KACR,gEACE,YACA;AAGe,kBAAgB;;AACjC,sBAAI,cAAQ;AACZ,sBAAI,gBAAU;;;AAEhB,oBAAI,AAAM,KAAD,aACP,AAAM,AAAa,KAAd,OAAK;AAC2C,MAAvD,AAAW,UAAD,KAAK,qCAAyB,QAAQ,KAAK;IACvD;;;QAhEO;QACS;;QACT;;QACA;;;IAFS;IACT;IACA;UACK,AAAS,QAAD,IAAI;UACZ,AAAO,MAAD,IAAI;UACV,AAAS,QAAD,IAAI;AACnB,oFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;AAgEoC,YAAa,wEAAP;IAAmD;;AAGhD,YAAmB,2EAAb;IAA4D;UAG/G,QAAgB;AACN,MAAtB,YAAM,MAAM,EAAE,OAAO;AACC,MAA5B,AAAa,8BAAW;IAC1B;;AAIiB,MAAT;AACsB,MAA5B,AAAa,8BAAW;IAC1B;;6EAGsD;;AACJ,sBAAY;AACrC,MAAjB,aAAO,SAAS;AACe,wBAAc,AAAU,SAAD;AACvB,wBAAc,AAAU,SAAD;AAC5D,uBAAI,WAAW,EAAI,WAAW,mBACb,iBAAZ,WAAW,GAA4B,iBAAZ,WAAW,gBAAgB,AAAY,WAAD,eAAe,WAAW,KAC9F,AAAa,AAAgB;IACjC;;AAIwB,MAAhB;AACuB,MAA7B,AAAa;IACf;aAImB,cAAmB;UAAnB;UAAmB;AAWlC,MAVG,AAAE,eAAP,uBAAkB,MAAM;AASrB,QARD,aAAQ,iBACN,YACA,AAAO,AAAS,2BACd,MACA,YAAY,EACZ,eAAe,GAEjB;;IAGN;;UAGyB;AACvB,WAAa,YAAN,KAAK,EAAS;AACJ,MAAZ,aAAQ;AACW,MAAlB,kBAAY,KAAK;IACzB;4BAGiD,OAAe;uBAAf;;AAC/C,qBAAO,AAAa,qCAAmB,KAAK;AAClB,MAA1B,AAAa,0BAAQ,KAAK;IAC5B;0BAGkD,OAAe,SAAiB;6BAAhC;;AAChD,WAAO;IACT;4BAGoD,OAAe;6BAAf;;AACzB,MAAzB,AAAa,0BAAQ;IACvB;;UAGkC;AAChC,UAAI,cAAS,MACX,AAAO,AAAQ,OAAR,CAAM,eAAL;IACZ;;;QAhFyE;IAqChE;AArC0E,sFAAM,MAAM;;EAAC;;;;;;;;;;;;;;;;;;;IA0F3D;;;;;;;AAGa,8EAA+B;IAAK;;UAMjC;AACb,MAAhC,0BAAoB,WAAW;AAMpC,MALD,AAAY,WAAD,KACT,gEACE,YACA;IAGN;;;QAtBO;QACS;;;;UACJ,AAAS,QAAD,IAAI;AACnB,uGAAW,GAAG;;EAAC;;;;;;;;;;;;;;;AA0BI,YAAQ,AAAE,AAAO,AAAS,gBAA1B;IAAmC;;AAGnC,YAAQ,AAAE,AAAO,AAAS,gBAA1B;IAAmC;gBAGnC,cAAmB;UAAnB;UAAmB;AACzC,YAAO,AAAS,kBAAG;AAC4B,MAAvC,AAAE,eAAV,wBAAiB,YAAY,EAAE,eAAe;IAChD;;AAImB,MAAjB;IACF;;;IAjBgC;;;;;;;;;;;;;;;;;;;;;UA8B6C;AAC3E,YAAO,2GACiB,AAAS;IAEnC;;;QAZO;QACmC;;;AACrC,8FACE,GAAG,YACE,QAAQ;;EACnB;;;;;;;;;;;;;;;;QAaY;QAC2B;AACnC,gHACI,KAAK,wBACU,oBAAoB;;EAC3C;;;;;;UAa4E;AAC3E,YAAO,wGACiB,AAAS,+DACJ,AAAS;IAExC;;;QAbO;QACmC;;;AACrC,2FACE,GAAG,YACE,QAAQ;;EACnB;;;;;;;;;;;;;;;;QAcY;QAC2B;QACK;AACxC,6GACI,KAAK,wBACU,oBAAoB,6BACf,yBAAyB;;EACrD;;;;;;UAa4E;AAC3E,YAAO,2FACE,AAAS,wCACG,AAAS,uDACN,AAAS,+DACJ,AAAS;IAExC;uBAGqC,SAAyD;UAAzD;mFAAyD;;AACzD,MAAnC,AAAa,YAAD,SAAS,AAAS;AAC6B,MAA3D,AAAa,YAAD,qBAAqB,AAAS;AACuB,MAAjE,AAAa,YAAD,wBAAwB,AAAS;AAC8B,MAA3E,AAAa,YAAD,6BAA6B,AAAS;IACpD;;;QAvBO;QACmC;;;AACrC,6FACE,GAAG,YACE,QAAQ;;EACnB;;;;;;;;;;;;;;;;QAwBY;QACc;QACQ;QACK;QACK;AACxC,qHACI,KAAK,SACL,KAAK,qBACO,iBAAiB,wBACd,oBAAoB,6BACf,yBAAyB;;EACrD;;;;;;UAa4E;AAC3E,YAAO,iGACE,AAAS,wCACG,AAAS,uDACN,AAAS,+DACJ,AAAS;IAExC;uBAGqC,SAA+D;UAA/D;yFAA+D;;AAC/D,MAAnC,AAAa,YAAD,SAAS,AAAS;AAC6B,MAA3D,AAAa,YAAD,qBAAqB,AAAS;AACuB,MAAjE,AAAa,YAAD,wBAAwB,AAAS;AAC8B,MAA3E,AAAa,YAAD,6BAA6B,AAAS;IACpD;;;QAvBO;QACmC;;;AACrC,mGACE,GAAG,YACE,QAAQ;;EACnB;;;;;;;;;;;;;;;;QAwBY;QACc;QACQ;QACK;QACK;AACxC,+GACI,KAAK,SACL,KAAK,qBACO,iBAAiB,wBACd,oBAAoB,6BACf,yBAAyB;;EACrD","file":"../../../../../../../../../../packages/flutter/src/widgets/sliver_persistent_header.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__sliver_persistent_header: sliver_persistent_header$
  };
}));

//# sourceMappingURL=sliver_persistent_header.dart.lib.js.map
