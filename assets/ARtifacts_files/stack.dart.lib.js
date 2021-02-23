define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/layout_helper.dart'], (function load__packages__flutter__src__rendering__stack_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__layout_helper$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  var stack = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var StackFitL = () => (StackFitL = dart.constFn(dart.legacy(stack.StackFit)))();
  var OverflowL = () => (OverflowL = dart.constFn(dart.legacy(stack.Overflow)))();
  var RenderBoxTodouble = () => (RenderBoxTodouble = dart.constFn(dart.fnType(core.double, [box.RenderBox])))();
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var doubleTodynamic = () => (doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))();
  var RenderBoxAndBoxConstraintsToSize = () => (RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))();
  var DiagnosticsPropertyOfAlignmentGeometry = () => (DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var EnumPropertyOfStackFit = () => (EnumPropertyOfStackFit = dart.constFn(diagnostics.EnumProperty$(stack.StackFit)))();
  var EnumPropertyOfClip = () => (EnumPropertyOfClip = dart.constFn(diagnostics.EnumProperty$(ui.Clip)))();
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/stack.dart";
  var L1 = "package:flutter/src/rendering/stack.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: stack.RelativeRect.prototype,
        [bottom$]: 0,
        [right$]: 0,
        [top$]: 0,
        [left$]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: stack.StackFit.prototype,
        [_name$]: "StackFit.loose",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: stack.StackFit.prototype,
        [_name$]: "StackFit.expand",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: stack.StackFit.prototype,
        [_name$]: "StackFit.passthrough",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], StackFitL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: stack.Overflow.prototype,
        [_name$]: "Overflow.visible",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: stack.Overflow.prototype,
        [_name$]: "Overflow.clip",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.constList([C5 || CT.C5, C6 || CT.C6], OverflowL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [AlignmentDirectional_y]: -1,
        [AlignmentDirectional_start]: -1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.hardEdge",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C11() {
      return C11 = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, RenderBoxAndBoxConstraintsToSize());
    },
    get C12() {
      return C12 = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, RenderBoxAndBoxConstraintsToSize());
    }
  }, false);
  var left$ = dart.privateName(stack, "RelativeRect.left");
  var top$ = dart.privateName(stack, "RelativeRect.top");
  var right$ = dart.privateName(stack, "RelativeRect.right");
  var bottom$ = dart.privateName(stack, "RelativeRect.bottom");
  var C0;
  stack.RelativeRect = class RelativeRect extends core.Object {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    static fromSize(rect, container) {
      if (rect == null) dart.nullFailed(L0, 34, 38, "rect");
      if (container == null) dart.nullFailed(L0, 34, 49, "container");
      return new stack.RelativeRect.fromLTRB(rect.left, rect.top, dart.notNull(container.width) - dart.notNull(rect.right), dart.notNull(container.height) - dart.notNull(rect.bottom));
    }
    static fromRect(rect, container) {
      if (rect == null) dart.nullFailed(L0, 50, 38, "rect");
      if (container == null) dart.nullFailed(L0, 50, 49, "container");
      return new stack.RelativeRect.fromLTRB(dart.notNull(rect.left) - dart.notNull(container.left), dart.notNull(rect.top) - dart.notNull(container.top), dart.notNull(container.right) - dart.notNull(rect.right), dart.notNull(container.bottom) - dart.notNull(rect.bottom));
    }
    get hasInsets() {
      return dart.notNull(this.left) > 0.0 || dart.notNull(this.top) > 0.0 || dart.notNull(this.right) > 0.0 || dart.notNull(this.bottom) > 0.0;
    }
    shift(offset) {
      if (offset == null) dart.nullFailed(L0, 89, 29, "offset");
      return new stack.RelativeRect.fromLTRB(dart.notNull(this.left) + dart.notNull(offset.dx), dart.notNull(this.top) + dart.notNull(offset.dy), dart.notNull(this.right) - dart.notNull(offset.dx), dart.notNull(this.bottom) - dart.notNull(offset.dy));
    }
    inflate(delta) {
      if (delta == null) dart.nullFailed(L0, 94, 31, "delta");
      return new stack.RelativeRect.fromLTRB(dart.notNull(this.left) - dart.notNull(delta), dart.notNull(this.top) - dart.notNull(delta), dart.notNull(this.right) - dart.notNull(delta), dart.notNull(this.bottom) - dart.notNull(delta));
    }
    deflate(delta) {
      if (delta == null) dart.nullFailed(L0, 99, 31, "delta");
      return this.inflate(-dart.notNull(delta));
    }
    intersect(other) {
      if (other == null) dart.nullFailed(L0, 104, 39, "other");
      return new stack.RelativeRect.fromLTRB(math.max(core.double, this.left, other.left), math.max(core.double, this.top, other.top), math.max(core.double, this.right, other.right), math.max(core.double, this.bottom, other.bottom));
    }
    toRect(container) {
      if (container == null) dart.nullFailed(L0, 119, 20, "container");
      return new ui.Rect.fromLTRB(this.left, this.top, dart.notNull(container.width) - dart.notNull(this.right), dart.notNull(container.height) - dart.notNull(this.bottom));
    }
    toSize(container) {
      if (container == null) dart.nullFailed(L0, 128, 20, "container");
      return new ui.Size.new(dart.notNull(container.width) - dart.notNull(this.left) - dart.notNull(this.right), dart.notNull(container.height) - dart.notNull(this.top) - dart.notNull(this.bottom));
    }
    static lerp(a, b, t) {
      if (t == null) dart.nullFailed(L0, 137, 70, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 138, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new stack.RelativeRect.fromLTRB(dart.notNull(dart.nullCheck(b).left) * dart.notNull(t), dart.notNull(b.top) * dart.notNull(t), dart.notNull(b.right) * dart.notNull(t), dart.notNull(b.bottom) * dart.notNull(t));
      if (b == null) {
        let k = 1.0 - dart.notNull(t);
        return new stack.RelativeRect.fromLTRB(dart.notNull(dart.nullCheck(b).left) * k, dart.notNull(b.top) * k, dart.notNull(b.right) * k, dart.notNull(b.bottom) * k);
      }
      return new stack.RelativeRect.fromLTRB(dart.nullCheck(ui.lerpDouble(a.left, b.left, t)), dart.nullCheck(ui.lerpDouble(a.top, b.top, t)), dart.nullCheck(ui.lerpDouble(a.right, b.right, t)), dart.nullCheck(ui.lerpDouble(a.bottom, b.bottom, t)));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return stack.RelativeRect.is(other) && other.left == this.left && other.top == this.top && other.right == this.right && other.bottom == this.bottom;
    }
    get hashCode() {
      return ui.hashValues(this.left, this.top, this.right, this.bottom);
    }
    toString() {
      return "RelativeRect.fromLTRB(" + this.left[$toStringAsFixed](1) + ", " + this.top[$toStringAsFixed](1) + ", " + this.right[$toStringAsFixed](1) + ", " + this.bottom[$toStringAsFixed](1) + ")";
    }
  };
  (stack.RelativeRect.fromLTRB = function(left, top, right, bottom) {
    if (left == null) dart.nullFailed(L0, 28, 36, "left");
    if (top == null) dart.nullFailed(L0, 28, 47, "top");
    if (right == null) dart.nullFailed(L0, 28, 57, "right");
    if (bottom == null) dart.nullFailed(L0, 28, 69, "bottom");
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    if (!(left != null && top != null && right != null && bottom != null)) dart.assertFailed(null, L0, 29, 14, "left != null && top != null && right != null && bottom != null");
    ;
  }).prototype = stack.RelativeRect.prototype;
  dart.addTypeTests(stack.RelativeRect);
  dart.addTypeCaches(stack.RelativeRect);
  dart.setMethodSignature(stack.RelativeRect, () => ({
    __proto__: dart.getMethods(stack.RelativeRect.__proto__),
    shift: dart.fnType(stack.RelativeRect, [ui.Offset]),
    inflate: dart.fnType(stack.RelativeRect, [core.double]),
    deflate: dart.fnType(stack.RelativeRect, [core.double]),
    intersect: dart.fnType(stack.RelativeRect, [stack.RelativeRect]),
    toRect: dart.fnType(ui.Rect, [ui.Rect]),
    toSize: dart.fnType(ui.Size, [ui.Size])
  }));
  dart.setGetterSignature(stack.RelativeRect, () => ({
    __proto__: dart.getGetters(stack.RelativeRect.__proto__),
    hasInsets: core.bool
  }));
  dart.setLibraryUri(stack.RelativeRect, L1);
  dart.setFieldSignature(stack.RelativeRect, () => ({
    __proto__: dart.getFields(stack.RelativeRect.__proto__),
    left: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    right: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(stack.RelativeRect, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stack.RelativeRect, ['hashCode']);
  dart.defineLazy(stack.RelativeRect, {
    /*stack.RelativeRect.fill*/get fill() {
      return C0 || CT.C0;
    }
  }, false);
  var top = dart.privateName(stack, "StackParentData.top");
  var right = dart.privateName(stack, "StackParentData.right");
  var bottom = dart.privateName(stack, "StackParentData.bottom");
  var left = dart.privateName(stack, "StackParentData.left");
  var width = dart.privateName(stack, "StackParentData.width");
  var height = dart.privateName(stack, "StackParentData.height");
  stack.StackParentData = class StackParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get top() {
      return this[top];
    }
    set top(value) {
      this[top] = value;
    }
    get right() {
      return this[right];
    }
    set right(value) {
      this[right] = value;
    }
    get bottom() {
      return this[bottom];
    }
    set bottom(value) {
      this[bottom] = value;
    }
    get left() {
      return this[left];
    }
    set left(value) {
      this[left] = value;
    }
    get width() {
      return this[width];
    }
    set width(value) {
      this[width] = value;
    }
    get height() {
      return this[height];
    }
    set height(value) {
      this[height] = value;
    }
    get rect() {
      return new stack.RelativeRect.fromLTRB(dart.nullCheck(this.left), dart.nullCheck(this.top), dart.nullCheck(this.right), dart.nullCheck(this.bottom));
    }
    set rect(value) {
      if (value == null) dart.nullFailed(L0, 199, 25, "value");
      this.top = value.top;
      this.right = value.right;
      this.bottom = value.bottom;
      this.left = value.left;
    }
    get isPositioned() {
      return this.top != null || this.right != null || this.bottom != null || this.left != null || this.width != null || this.height != null;
    }
    toString() {
      let values = (() => {
        let t0 = JSArrayOfString().of([]);
        if (this.top != null) t0.push("top=" + dart.str(debug.debugFormatDouble(this.top)));
        if (this.right != null) t0.push("right=" + dart.str(debug.debugFormatDouble(this.right)));
        if (this.bottom != null) t0.push("bottom=" + dart.str(debug.debugFormatDouble(this.bottom)));
        if (this.left != null) t0.push("left=" + dart.str(debug.debugFormatDouble(this.left)));
        if (this.width != null) t0.push("width=" + dart.str(debug.debugFormatDouble(this.width)));
        if (this.height != null) t0.push("height=" + dart.str(debug.debugFormatDouble(this.height)));
        return t0;
      })();
      if (dart.test(values[$isEmpty])) values[$add]("not positioned");
      values[$add](super.toString());
      return values[$join]("; ");
    }
  };
  (stack.StackParentData.new = function() {
    this[top] = null;
    this[right] = null;
    this[bottom] = null;
    this[left] = null;
    this[width] = null;
    this[height] = null;
    stack.StackParentData.__proto__.new.call(this);
    ;
  }).prototype = stack.StackParentData.prototype;
  dart.addTypeTests(stack.StackParentData);
  dart.addTypeCaches(stack.StackParentData);
  dart.setGetterSignature(stack.StackParentData, () => ({
    __proto__: dart.getGetters(stack.StackParentData.__proto__),
    rect: stack.RelativeRect,
    isPositioned: core.bool
  }));
  dart.setSetterSignature(stack.StackParentData, () => ({
    __proto__: dart.getSetters(stack.StackParentData.__proto__),
    rect: stack.RelativeRect
  }));
  dart.setLibraryUri(stack.StackParentData, L1);
  dart.setFieldSignature(stack.StackParentData, () => ({
    __proto__: dart.getFields(stack.StackParentData.__proto__),
    top: dart.fieldType(dart.nullable(core.double)),
    right: dart.fieldType(dart.nullable(core.double)),
    bottom: dart.fieldType(dart.nullable(core.double)),
    left: dart.fieldType(dart.nullable(core.double)),
    width: dart.fieldType(dart.nullable(core.double)),
    height: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(stack.StackParentData, ['toString']);
  var _name$ = dart.privateName(stack, "_name");
  var C1;
  var C2;
  var C3;
  var C4;
  stack.StackFit = class StackFit extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (stack.StackFit.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 241, 6, "index");
    if (_name == null) dart.nullFailed(L0, 241, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = stack.StackFit.prototype;
  dart.addTypeTests(stack.StackFit);
  dart.addTypeCaches(stack.StackFit);
  dart.setLibraryUri(stack.StackFit, L1);
  dart.setFieldSignature(stack.StackFit, () => ({
    __proto__: dart.getFields(stack.StackFit.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(stack.StackFit, ['toString']);
  stack.StackFit.loose = C1 || CT.C1;
  stack.StackFit.expand = C2 || CT.C2;
  stack.StackFit.passthrough = C3 || CT.C3;
  stack.StackFit.values = C4 || CT.C4;
  var C5;
  var C6;
  var C7;
  stack.Overflow = class Overflow extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (stack.Overflow.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 281, 6, "index");
    if (_name == null) dart.nullFailed(L0, 281, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = stack.Overflow.prototype;
  dart.addTypeTests(stack.Overflow);
  dart.addTypeCaches(stack.Overflow);
  dart.setLibraryUri(stack.Overflow, L1);
  dart.setFieldSignature(stack.Overflow, () => ({
    __proto__: dart.getFields(stack.Overflow.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(stack.Overflow, ['toString']);
  stack.Overflow.visible = C5 || CT.C5;
  stack.Overflow.clip = C6 || CT.C6;
  stack.Overflow.values = C7 || CT.C7;
  var AlignmentDirectional_y = dart.privateName(alignment, "AlignmentDirectional.y");
  var AlignmentDirectional_start = dart.privateName(alignment, "AlignmentDirectional.start");
  var C8;
  var _name = dart.privateName(ui, "_name");
  var C9;
  var _hasVisualOverflow = dart.privateName(stack, "_hasVisualOverflow");
  var _resolvedAlignment = dart.privateName(stack, "_resolvedAlignment");
  var _clipBehavior = dart.privateName(stack, "_clipBehavior");
  var _clipRectLayer = dart.privateName(stack, "_clipRectLayer");
  var _alignment = dart.privateName(stack, "_alignment");
  var _textDirection = dart.privateName(stack, "_textDirection");
  var _fit = dart.privateName(stack, "_fit");
  var _resolve = dart.privateName(stack, "_resolve");
  var _markNeedResolution = dart.privateName(stack, "_markNeedResolution");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var C10;
  var C11;
  var _computeSize = dart.privateName(stack, "_computeSize");
  var C12;
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, stack.StackParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, stack.StackParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, stack.StackParentData));
  stack.RenderStack = class RenderStack extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    setupParentData(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 353, 34, "child");
      if (!stack.StackParentData.is(child.parentData)) child.parentData = new stack.StackParentData.new();
    }
    [_resolve]() {
      if (this[_resolvedAlignment] != null) return;
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this.markNeedsLayout();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (value == null) dart.nullFailed(L0, 388, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 389, 12, "value != null");
      if (dart.equals(this[_alignment], value)) return;
      this[_alignment] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (value == null) dart.nullFailed(L0, 416, 20, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 417, 12, "value != null");
      if (!dart.equals(this[_fit], value)) {
        this[_fit] = value;
        this.markNeedsLayout();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 429, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 430, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    static getIntrinsicDimension(firstChild, mainChildSizeGetter) {
      if (mainChildSizeGetter == null) dart.nullFailed(L0, 439, 69, "mainChildSizeGetter");
      let extent = 0.0;
      let child = firstChild;
      while (child != null) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        if (!dart.test(childParentData.isPositioned)) extent = math.max(core.double, extent, mainChildSizeGetter(child));
        if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, L0, 446, 14, "child.parentData == childParentData");
        child = childParentData.nextSibling;
      }
      return extent;
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 453, 42, "height");
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => {
        if (child == null) dart.nullFailed(L0, 454, 57, "child");
        return child.getMinIntrinsicWidth(height);
      }, RenderBoxTodouble()));
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 458, 42, "height");
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => {
        if (child == null) dart.nullFailed(L0, 459, 57, "child");
        return child.getMaxIntrinsicWidth(height);
      }, RenderBoxTodouble()));
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 463, 43, "width");
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => {
        if (child == null) dart.nullFailed(L0, 464, 57, "child");
        return child.getMinIntrinsicHeight(width);
      }, RenderBoxTodouble()));
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 468, 43, "width");
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => {
        if (child == null) dart.nullFailed(L0, 469, 57, "child");
        return child.getMaxIntrinsicHeight(width);
      }, RenderBoxTodouble()));
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 473, 56, "baseline");
      return this.defaultComputeDistanceToHighestActualBaseline(baseline);
    }
    static layoutPositionedChild(child, childParentData, size, alignment) {
      if (child == null) dart.nullFailed(L0, 480, 47, "child");
      if (childParentData == null) dart.nullFailed(L0, 480, 70, "childParentData");
      if (size == null) dart.nullFailed(L0, 480, 92, "size");
      if (alignment == null) dart.nullFailed(L0, 480, 108, "alignment");
      if (!dart.test(childParentData.isPositioned)) dart.assertFailed(null, L0, 481, 12, "childParentData.isPositioned");
      if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, L0, 482, 12, "child.parentData == childParentData");
      let hasVisualOverflow = false;
      let childConstraints = C10 || CT.C10;
      if (childParentData.left != null && childParentData.right != null)
        childConstraints = childConstraints.tighten({width: dart.notNull(size.width) - dart.nullCheck(childParentData.right) - dart.nullCheck(childParentData.left)});
      else if (childParentData.width != null) childConstraints = childConstraints.tighten({width: childParentData.width});
      if (childParentData.top != null && childParentData.bottom != null)
        childConstraints = childConstraints.tighten({height: dart.notNull(size.height) - dart.nullCheck(childParentData.bottom) - dart.nullCheck(childParentData.top)});
      else if (childParentData.height != null) childConstraints = childConstraints.tighten({height: childParentData.height});
      child.layout(childConstraints, {parentUsesSize: true});
      let x = null;
      let x$35isSet = false;
      function x$35get() {
        return x$35isSet ? x : dart.throw(new _internal.LateError.localNI("x"));
      }
      dart.fn(x$35get, VoidTodouble());
      function x$35set(t4) {
        if (t4 == null) dart.nullFailed(L0, 499, 23, "null");
        if (x$35isSet)
          dart.throw(new _internal.LateError.localAI("x"));
        else {
          x$35isSet = true;
          return x = t4;
        }
      }
      dart.fn(x$35set, doubleTodynamic());
      if (childParentData.left != null) {
        x$35set(dart.nullCheck(childParentData.left));
      } else if (childParentData.right != null) {
        x$35set(dart.notNull(size.width) - dart.nullCheck(childParentData.right) - dart.notNull(child.size.width));
      } else {
        x$35set(alignment.alongOffset(ui.Offset.as(size['-'](child.size))).dx);
      }
      if (dart.notNull(x$35get()) < 0.0 || dart.notNull(x$35get()) + dart.notNull(child.size.width) > dart.notNull(size.width)) hasVisualOverflow = true;
      let y = null;
      let y$35isSet = false;
      function y$35get() {
        return y$35isSet ? y : dart.throw(new _internal.LateError.localNI("y"));
      }
      dart.fn(y$35get, VoidTodouble());
      function y$35set(t9) {
        if (t9 == null) dart.nullFailed(L0, 511, 23, "null");
        if (y$35isSet)
          dart.throw(new _internal.LateError.localAI("y"));
        else {
          y$35isSet = true;
          return y = t9;
        }
      }
      dart.fn(y$35set, doubleTodynamic());
      if (childParentData.top != null) {
        y$35set(dart.nullCheck(childParentData.top));
      } else if (childParentData.bottom != null) {
        y$35set(dart.notNull(size.height) - dart.nullCheck(childParentData.bottom) - dart.notNull(child.size.height));
      } else {
        y$35set(alignment.alongOffset(ui.Offset.as(size['-'](child.size))).dy);
      }
      if (dart.notNull(y$35get()) < 0.0 || dart.notNull(y$35get()) + dart.notNull(child.size.height) > dart.notNull(size.height)) hasVisualOverflow = true;
      childParentData.offset = new ui.Offset.new(x$35get(), y$35get());
      return hasVisualOverflow;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 529, 40, "constraints");
      return this[_computeSize]({constraints: constraints, layoutChild: C11 || CT.C11});
    }
    [_computeSize](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (constraints == null) dart.nullFailed(L0, 536, 46, "constraints");
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (layoutChild == null) dart.nullFailed(L0, 536, 82, "layoutChild");
      this[_resolve]();
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, L0, 538, 12, "_resolvedAlignment != null");
      let hasNonPositionedChildren = false;
      if (this.childCount === 0) {
        if (!dart.test(constraints.biggest.isFinite)) dart.assertFailed(null, L0, 541, 14, "constraints.biggest.isFinite");
        return constraints.biggest;
      }
      let width = constraints.minWidth;
      let height = constraints.minHeight;
      let nonPositionedConstraints = null;
      if (!(this.fit != null)) dart.assertFailed(null, L0, 549, 12, "fit != null");
      switch (this.fit) {
        case C1 || CT.C1:
        {
          nonPositionedConstraints = constraints.loosen();
          break;
        }
        case C2 || CT.C2:
        {
          nonPositionedConstraints = new box.BoxConstraints.tight(constraints.biggest);
          break;
        }
        case C3 || CT.C3:
        {
          nonPositionedConstraints = constraints;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      if (!(nonPositionedConstraints != null)) dart.assertFailed(null, L0, 561, 12, "nonPositionedConstraints != null");
      let child = this.firstChild;
      while (child != null) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        if (!dart.test(childParentData.isPositioned)) {
          hasNonPositionedChildren = true;
          let childSize = layoutChild(child, nonPositionedConstraints);
          width = math.max(core.double, width, childSize.width);
          height = math.max(core.double, height, childSize.height);
        }
        child = childParentData.nextSibling;
      }
      let size = null;
      if (hasNonPositionedChildren) {
        size = new ui.Size.new(width, height);
        if (!(size.width == constraints.constrainWidth(width))) dart.assertFailed(null, L0, 582, 14, "size.width == constraints.constrainWidth(width)");
        if (!(size.height == constraints.constrainHeight(height))) dart.assertFailed(null, L0, 583, 14, "size.height == constraints.constrainHeight(height)");
      } else {
        size = constraints.biggest;
      }
      if (!dart.test(size.isFinite)) dart.assertFailed(null, L0, 588, 12, "size.isFinite");
      return size;
    }
    performLayout() {
      let constraints = this.constraints;
      this[_hasVisualOverflow] = false;
      this.size = this[_computeSize]({constraints: constraints, layoutChild: C12 || CT.C12});
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, L0, 602, 12, "_resolvedAlignment != null");
      let child = this.firstChild;
      while (child != null) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        if (!dart.test(childParentData.isPositioned)) {
          childParentData.offset = dart.nullCheck(this[_resolvedAlignment]).alongOffset(ui.Offset.as(this.size['-'](child.size)));
        } else {
          this[_hasVisualOverflow] = dart.test(stack.RenderStack.layoutPositionedChild(child, childParentData, this.size, dart.nullCheck(this[_resolvedAlignment]))) || dart.test(this[_hasVisualOverflow]);
        }
        if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, L0, 613, 14, "child.parentData == childParentData");
        child = childParentData.nextSibling;
      }
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 619, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 619, 67, "position");
      return this.defaultHitTestChildren(result, {position: position});
    }
    paintStack(context, offset) {
      if (context == null) dart.nullFailed(L0, 628, 35, "context");
      if (offset == null) dart.nullFailed(L0, 628, 51, "offset");
      this.defaultPaint(context, offset);
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 633, 30, "context");
      if (offset == null) dart.nullFailed(L0, 633, 46, "offset");
      if (!dart.equals(this.clipBehavior, ui.Clip.none) && dart.test(this[_hasVisualOverflow])) {
        this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'paintStack'), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
      } else {
        this[_clipRectLayer] = null;
        this.paintStack(context, offset);
      }
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 646, 51, "child");
      return dart.test(this[_hasVisualOverflow]) ? ui.Offset.zero['&'](this.size) : null;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 649, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection));
      properties.add(new (EnumPropertyOfStackFit()).new("fit", this.fit));
      properties.add(new (EnumPropertyOfClip()).new("clipBehavior", this.clipBehavior, {defaultValue: ui.Clip.hardEdge}));
    }
  };
  (stack.RenderStack.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C8 || CT.C8;
    if (alignment == null) dart.nullFailed(L0, 336, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let fit = opts && 'fit' in opts ? opts.fit : C1 || CT.C1;
    if (fit == null) dart.nullFailed(L0, 338, 14, "fit");
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C9 || CT.C9;
    if (clipBehavior == null) dart.nullFailed(L0, 339, 10, "clipBehavior");
    this[_hasVisualOverflow] = false;
    this[_resolvedAlignment] = null;
    this[_clipBehavior] = ui.Clip.hardEdge;
    this[_clipRectLayer] = null;
    if (!(alignment != null)) dart.assertFailed(null, L0, 340, 15, "alignment != null");
    if (!(fit != null)) dart.assertFailed(null, L0, 341, 15, "fit != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 342, 15, "clipBehavior != null");
    this[_alignment] = alignment;
    this[_textDirection] = textDirection;
    this[_fit] = fit;
    this[_clipBehavior] = clipBehavior;
    stack.RenderStack.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = stack.RenderStack.prototype;
  dart.addTypeTests(stack.RenderStack);
  dart.addTypeCaches(stack.RenderStack);
  dart.setMethodSignature(stack.RenderStack, () => ({
    __proto__: dart.getMethods(stack.RenderStack.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])}),
    paintStack: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(stack.RenderStack, () => ({
    __proto__: dart.getGetters(stack.RenderStack.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    fit: stack.StackFit,
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(stack.RenderStack, () => ({
    __proto__: dart.getSetters(stack.RenderStack.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    fit: stack.StackFit,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(stack.RenderStack, L1);
  dart.setFieldSignature(stack.RenderStack, () => ({
    __proto__: dart.getFields(stack.RenderStack.__proto__),
    [_hasVisualOverflow]: dart.fieldType(core.bool),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_fit]: dart.fieldType(stack.StackFit),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
  }));
  var _index = dart.privateName(stack, "_index");
  var _childAtIndex = dart.privateName(stack, "_childAtIndex");
  stack.RenderIndexedStack = class RenderIndexedStack extends stack.RenderStack {
    visitChildrenForSemantics(visitor) {
      if (visitor == null) dart.nullFailed(L0, 680, 54, "visitor");
      if (this.index != null && this.firstChild != null) visitor(this[_childAtIndex]());
    }
    get index() {
      return this[_index];
    }
    set index(value) {
      if (this[_index] != value) {
        this[_index] = value;
        this.markNeedsLayout();
      }
    }
    [_childAtIndex]() {
      if (!(this.index != null)) dart.assertFailed(null, L0, 696, 12, "index != null");
      let child = this.firstChild;
      let i = 0;
      while (child != null && i < dart.nullCheck(this.index)) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        child = childParentData.nextSibling;
        i = i + 1;
      }
      if (!(i === this.index)) dart.assertFailed(null, L0, 704, 12, "i == index");
      if (!(child != null)) dart.assertFailed(null, L0, 705, 12, "child != null");
      return dart.nullCheck(child);
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 710, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 710, 67, "position");
      if (this.firstChild == null || this.index == null) return false;
      if (!(position != null)) dart.assertFailed(null, L0, 713, 12, "position != null");
      let child = this[_childAtIndex]();
      let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
      return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (result == null) dart.nullFailed(L0, 719, 34, "result");
          if (!dart.equals(transformed, position['-'](childParentData.offset))) dart.assertFailed(null, L0, 720, 16, "transformed == position - childParentData.offset");
          return child.hitTest(result, {position: dart.nullCheck(transformed)});
        }, BoxHitTestResultAndOffsetNTobool())});
    }
    paintStack(context, offset) {
      if (context == null) dart.nullFailed(L0, 727, 35, "context");
      if (offset == null) dart.nullFailed(L0, 727, 51, "offset");
      if (this.firstChild == null || this.index == null) return;
      let child = this[_childAtIndex]();
      let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
      context.paintChild(child, childParentData.offset['+'](offset));
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 736, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("index", this.index));
    }
  };
  (stack.RenderIndexedStack.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C8 || CT.C8;
    if (alignment == null) dart.nullFailed(L0, 669, 23, "alignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let index = opts && 'index' in opts ? opts.index : 0;
    this[_index] = index;
    stack.RenderIndexedStack.__proto__.new.call(this, {children: children, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = stack.RenderIndexedStack.prototype;
  dart.addTypeTests(stack.RenderIndexedStack);
  dart.addTypeCaches(stack.RenderIndexedStack);
  dart.setMethodSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getMethods(stack.RenderIndexedStack.__proto__),
    [_childAtIndex]: dart.fnType(box.RenderBox, [])
  }));
  dart.setGetterSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getGetters(stack.RenderIndexedStack.__proto__),
    index: dart.nullable(core.int)
  }));
  dart.setSetterSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getSetters(stack.RenderIndexedStack.__proto__),
    index: dart.nullable(core.int)
  }));
  dart.setLibraryUri(stack.RenderIndexedStack, L1);
  dart.setFieldSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getFields(stack.RenderIndexedStack.__proto__),
    [_index]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/stack.dart", {
    "package:flutter/src/rendering/stack.dart": stack
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stack.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/stack.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__stack: stack
  };
}));

//# sourceMappingURL=stack.dart.lib.js.map
