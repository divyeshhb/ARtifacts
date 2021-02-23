define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/debug_overflow_indicator.dart'], (function load__packages__flutter__src__rendering__flex_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__debug_overflow_indicator$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const debug_overflow_indicator = packages__flutter__src__rendering__debug_overflow_indicator$46dart.src__rendering__debug_overflow_indicator;
  var flex$ = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(false);
  var FlexFitL = () => (FlexFitL = dart.constFn(dart.legacy(flex$.FlexFit)))();
  var MainAxisSizeL = () => (MainAxisSizeL = dart.constFn(dart.legacy(flex$.MainAxisSize)))();
  var MainAxisAlignmentL = () => (MainAxisAlignmentL = dart.constFn(dart.legacy(flex$.MainAxisAlignment)))();
  var CrossAxisAlignmentL = () => (CrossAxisAlignmentL = dart.constFn(dart.legacy(flex$.CrossAxisAlignment)))();
  var VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  var doubleTodynamic = () => (doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))();
  var RenderBoxAnddoubleTodouble = () => (RenderBoxAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [box.RenderBox, core.double])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var RenderBoxAndBoxConstraintsToSize = () => (RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var EnumPropertyOfAxis = () => (EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))();
  var EnumPropertyOfMainAxisAlignment = () => (EnumPropertyOfMainAxisAlignment = dart.constFn(diagnostics.EnumProperty$(flex$.MainAxisAlignment)))();
  var EnumPropertyOfMainAxisSize = () => (EnumPropertyOfMainAxisSize = dart.constFn(diagnostics.EnumProperty$(flex$.MainAxisSize)))();
  var EnumPropertyOfCrossAxisAlignment = () => (EnumPropertyOfCrossAxisAlignment = dart.constFn(diagnostics.EnumProperty$(flex$.CrossAxisAlignment)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var EnumPropertyOfVerticalDirection = () => (EnumPropertyOfVerticalDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.VerticalDirection)))();
  var EnumPropertyOfTextBaseline = () => (EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/flex.dart";
  var L1 = "package:flutter/src/rendering/flex.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: flex$.FlexFit.prototype,
        [_name$]: "FlexFit.tight",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: flex$.FlexFit.prototype,
        [_name$]: "FlexFit.loose",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], FlexFitL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: flex$.MainAxisSize.prototype,
        [_name$]: "MainAxisSize.min",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: flex$.MainAxisSize.prototype,
        [_name$]: "MainAxisSize.max",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.constList([C3 || CT.C3, C4 || CT.C4], MainAxisSizeL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_name$]: "MainAxisAlignment.start",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_name$]: "MainAxisAlignment.end",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_name$]: "MainAxisAlignment.center",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_name$]: "MainAxisAlignment.spaceBetween",
        index: 3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_name$]: "MainAxisAlignment.spaceAround",
        index: 4
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_name$]: "MainAxisAlignment.spaceEvenly",
        index: 5
      });
    },
    get C12() {
      return C12 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], MainAxisAlignmentL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_name$]: "CrossAxisAlignment.start",
        index: 0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_name$]: "CrossAxisAlignment.end",
        index: 1
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_name$]: "CrossAxisAlignment.center",
        index: 2
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_name$]: "CrossAxisAlignment.stretch",
        index: 3
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_name$]: "CrossAxisAlignment.baseline",
        index: 4
      });
    },
    get C18() {
      return C18 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], CrossAxisAlignmentL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name]: "VerticalDirection.down",
        index: 1
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name$0]: "Clip.none",
        index: 0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.vertical",
        index: 1
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C24() {
      return C24 = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, RenderBoxAndBoxConstraintsToSize());
    },
    get C25() {
      return C25 = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, RenderBoxAndBoxConstraintsToSize());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.ltr",
        index: 1
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.rtl",
        index: 0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name]: "VerticalDirection.up",
        index: 0
      });
    }
  }, false);
  var _name$ = dart.privateName(flex$, "_name");
  var C0;
  var C1;
  var C2;
  flex$.FlexFit = class FlexFit extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (flex$.FlexFit.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 23, 6, "index");
    if (_name == null) dart.nullFailed(L0, 23, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = flex$.FlexFit.prototype;
  dart.addTypeTests(flex$.FlexFit);
  dart.addTypeCaches(flex$.FlexFit);
  dart.setLibraryUri(flex$.FlexFit, L1);
  dart.setFieldSignature(flex$.FlexFit, () => ({
    __proto__: dart.getFields(flex$.FlexFit.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(flex$.FlexFit, ['toString']);
  flex$.FlexFit.tight = C0 || CT.C0;
  flex$.FlexFit.loose = C1 || CT.C1;
  flex$.FlexFit.values = C2 || CT.C2;
  var flex = dart.privateName(flex$, "FlexParentData.flex");
  var fit = dart.privateName(flex$, "FlexParentData.fit");
  flex$.FlexParentData = class FlexParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get flex() {
      return this[flex];
    }
    set flex(value) {
      this[flex] = value;
    }
    get fit() {
      return this[fit];
    }
    set fit(value) {
      this[fit] = value;
    }
    toString() {
      return dart.str(super.toString()) + "; flex=" + dart.str(this.flex) + "; fit=" + dart.str(this.fit);
    }
  };
  (flex$.FlexParentData.new = function() {
    this[flex] = null;
    this[fit] = null;
    flex$.FlexParentData.__proto__.new.call(this);
    ;
  }).prototype = flex$.FlexParentData.prototype;
  dart.addTypeTests(flex$.FlexParentData);
  dart.addTypeCaches(flex$.FlexParentData);
  dart.setLibraryUri(flex$.FlexParentData, L1);
  dart.setFieldSignature(flex$.FlexParentData, () => ({
    __proto__: dart.getFields(flex$.FlexParentData.__proto__),
    flex: dart.fieldType(dart.nullable(core.int)),
    fit: dart.fieldType(dart.nullable(flex$.FlexFit))
  }));
  dart.defineExtensionMethods(flex$.FlexParentData, ['toString']);
  var C3;
  var C4;
  var C5;
  flex$.MainAxisSize = class MainAxisSize extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (flex$.MainAxisSize.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 73, 6, "index");
    if (_name == null) dart.nullFailed(L0, 73, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = flex$.MainAxisSize.prototype;
  dart.addTypeTests(flex$.MainAxisSize);
  dart.addTypeCaches(flex$.MainAxisSize);
  dart.setLibraryUri(flex$.MainAxisSize, L1);
  dart.setFieldSignature(flex$.MainAxisSize, () => ({
    __proto__: dart.getFields(flex$.MainAxisSize.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(flex$.MainAxisSize, ['toString']);
  flex$.MainAxisSize.min = C3 || CT.C3;
  flex$.MainAxisSize.max = C4 || CT.C4;
  flex$.MainAxisSize.values = C5 || CT.C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  flex$.MainAxisAlignment = class MainAxisAlignment extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (flex$.MainAxisAlignment.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 106, 6, "index");
    if (_name == null) dart.nullFailed(L0, 106, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = flex$.MainAxisAlignment.prototype;
  dart.addTypeTests(flex$.MainAxisAlignment);
  dart.addTypeCaches(flex$.MainAxisAlignment);
  dart.setLibraryUri(flex$.MainAxisAlignment, L1);
  dart.setFieldSignature(flex$.MainAxisAlignment, () => ({
    __proto__: dart.getFields(flex$.MainAxisAlignment.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(flex$.MainAxisAlignment, ['toString']);
  flex$.MainAxisAlignment.start = C6 || CT.C6;
  flex$.MainAxisAlignment.end = C7 || CT.C7;
  flex$.MainAxisAlignment.center = C8 || CT.C8;
  flex$.MainAxisAlignment.spaceBetween = C9 || CT.C9;
  flex$.MainAxisAlignment.spaceAround = C10 || CT.C10;
  flex$.MainAxisAlignment.spaceEvenly = C11 || CT.C11;
  flex$.MainAxisAlignment.values = C12 || CT.C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  flex$.CrossAxisAlignment = class CrossAxisAlignment extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (flex$.CrossAxisAlignment.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 146, 6, "index");
    if (_name == null) dart.nullFailed(L0, 146, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = flex$.CrossAxisAlignment.prototype;
  dart.addTypeTests(flex$.CrossAxisAlignment);
  dart.addTypeCaches(flex$.CrossAxisAlignment);
  dart.setLibraryUri(flex$.CrossAxisAlignment, L1);
  dart.setFieldSignature(flex$.CrossAxisAlignment, () => ({
    __proto__: dart.getFields(flex$.CrossAxisAlignment.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(flex$.CrossAxisAlignment, ['toString']);
  flex$.CrossAxisAlignment.start = C13 || CT.C13;
  flex$.CrossAxisAlignment.end = C14 || CT.C14;
  flex$.CrossAxisAlignment.center = C15 || CT.C15;
  flex$.CrossAxisAlignment.stretch = C16 || CT.C16;
  flex$.CrossAxisAlignment.baseline = C17 || CT.C17;
  flex$.CrossAxisAlignment.values = C18 || CT.C18;
  var _name = dart.privateName(basic_types, "_name");
  var C19;
  var C20;
  var _name$0 = dart.privateName(ui, "_name");
  var C21;
  var _overflow = dart.privateName(flex$, "_overflow");
  var _clipBehavior = dart.privateName(flex$, "_clipBehavior");
  var _clipRectLayer = dart.privateName(flex$, "_clipRectLayer");
  var _direction = dart.privateName(flex$, "_direction");
  var _mainAxisAlignment = dart.privateName(flex$, "_mainAxisAlignment");
  var _mainAxisSize = dart.privateName(flex$, "_mainAxisSize");
  var _crossAxisAlignment = dart.privateName(flex$, "_crossAxisAlignment");
  var _textDirection = dart.privateName(flex$, "_textDirection");
  var _verticalDirection = dart.privateName(flex$, "_verticalDirection");
  var _textBaseline = dart.privateName(flex$, "_textBaseline");
  var C22;
  var _debugHasNecessaryDirections = dart.privateName(flex$, "_debugHasNecessaryDirections");
  var _hasOverflow = dart.privateName(flex$, "_hasOverflow");
  var _canComputeIntrinsics = dart.privateName(flex$, "_canComputeIntrinsics");
  var _getFlex = dart.privateName(flex$, "_getFlex");
  var _getIntrinsicSize = dart.privateName(flex$, "_getIntrinsicSize");
  var _getFit = dart.privateName(flex$, "_getFit");
  var _getCrossSize = dart.privateName(flex$, "_getCrossSize");
  var _getMainSize = dart.privateName(flex$, "_getMainSize");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C23;
  var _debugCheckConstraints = dart.privateName(flex$, "_debugCheckConstraints");
  var C24;
  var _computeSizes = dart.privateName(flex$, "_computeSizes");
  var C25;
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, flex$.FlexParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, flex$.FlexParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, flex$.FlexParentData));
  const RenderBox_DebugOverflowIndicatorMixin$36 = class RenderBox_DebugOverflowIndicatorMixin extends RenderBox_RenderBoxContainerDefaultsMixin$36 {};
  (RenderBox_DebugOverflowIndicatorMixin$36.new = function() {
    debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinNew].call(this);
    RenderBox_DebugOverflowIndicatorMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_DebugOverflowIndicatorMixin$36.prototype;
  dart.applyMixin(RenderBox_DebugOverflowIndicatorMixin$36, debug_overflow_indicator.DebugOverflowIndicatorMixin);
  flex$.RenderFlex = class RenderFlex extends RenderBox_DebugOverflowIndicatorMixin$36 {
    get direction() {
      return this[_direction];
    }
    set direction(value) {
      if (value == null) dart.nullFailed(L0, 311, 22, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 312, 12, "value != null");
      if (!dart.equals(this[_direction], value)) {
        this[_direction] = value;
        this.markNeedsLayout();
      }
    }
    get mainAxisAlignment() {
      return this[_mainAxisAlignment];
    }
    set mainAxisAlignment(value) {
      if (value == null) dart.nullFailed(L0, 330, 43, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 331, 12, "value != null");
      if (!dart.equals(this[_mainAxisAlignment], value)) {
        this[_mainAxisAlignment] = value;
        this.markNeedsLayout();
      }
    }
    get mainAxisSize() {
      return this[_mainAxisSize];
    }
    set mainAxisSize(value) {
      if (value == null) dart.nullFailed(L0, 350, 33, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 351, 12, "value != null");
      if (!dart.equals(this[_mainAxisSize], value)) {
        this[_mainAxisSize] = value;
        this.markNeedsLayout();
      }
    }
    get crossAxisAlignment() {
      return this[_crossAxisAlignment];
    }
    set crossAxisAlignment(value) {
      if (value == null) dart.nullFailed(L0, 369, 45, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 370, 12, "value != null");
      if (!dart.equals(this[_crossAxisAlignment], value)) {
        this[_crossAxisAlignment] = value;
        this.markNeedsLayout();
      }
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (!dart.equals(this[_textDirection], value)) {
        this[_textDirection] = value;
        this.markNeedsLayout();
      }
    }
    get verticalDirection() {
      return this[_verticalDirection];
    }
    set verticalDirection(value) {
      if (value == null) dart.nullFailed(L0, 426, 43, "value");
      if (!dart.equals(this[_verticalDirection], value)) {
        this[_verticalDirection] = value;
        this.markNeedsLayout();
      }
    }
    get textBaseline() {
      return this[_textBaseline];
    }
    set textBaseline(value) {
      if (!(!dart.equals(this[_crossAxisAlignment], flex$.CrossAxisAlignment.baseline) || value != null)) dart.assertFailed(null, L0, 439, 12, "_crossAxisAlignment != CrossAxisAlignment.baseline || value != null");
      if (!dart.equals(this[_textBaseline], value)) {
        this[_textBaseline] = value;
        this.markNeedsLayout();
      }
    }
    get [_debugHasNecessaryDirections]() {
      if (!(this.direction != null)) dart.assertFailed(null, L0, 447, 12, "direction != null");
      if (!(this.crossAxisAlignment != null)) dart.assertFailed(null, L0, 448, 12, "crossAxisAlignment != null");
      if (this.firstChild != null && !dart.equals(this.lastChild, this.firstChild)) {
        switch (this.direction) {
          case C19 || CT.C19:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with multiple children has a null textDirection, so the layout order is undefined.", L0, 453, 18, "textDirection != null");
            break;
          }
          case C22 || CT.C22:
          {
            if (!(this.verticalDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with multiple children has a null verticalDirection, so the layout order is undefined.", L0, 456, 18, "verticalDirection != null");
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      if (dart.equals(this.mainAxisAlignment, flex$.MainAxisAlignment.start) || dart.equals(this.mainAxisAlignment, flex$.MainAxisAlignment.end)) {
        switch (this.direction) {
          case C19 || CT.C19:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with " + dart.str(this.mainAxisAlignment) + " has a null textDirection, so the alignment cannot be resolved.", L0, 464, 18, "textDirection != null");
            break;
          }
          case C22 || CT.C22:
          {
            if (!(this.verticalDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with " + dart.str(this.mainAxisAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", L0, 467, 18, "verticalDirection != null");
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      if (dart.equals(this.crossAxisAlignment, flex$.CrossAxisAlignment.start) || dart.equals(this.crossAxisAlignment, flex$.CrossAxisAlignment.end)) {
        switch (this.direction) {
          case C19 || CT.C19:
          {
            if (!(this.verticalDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with " + dart.str(this.crossAxisAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", L0, 475, 18, "verticalDirection != null");
            break;
          }
          case C22 || CT.C22:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with " + dart.str(this.crossAxisAlignment) + " has a null textDirection, so the alignment cannot be resolved.", L0, 478, 18, "textDirection != null");
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      return true;
    }
    get [_hasOverflow]() {
      return dart.nullCheck(this[_overflow]) > 1e-10;
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (value == null) dart.nullFailed(L0, 496, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 497, 12, "value != null");
      if (!dart.equals(value, this[_clipBehavior])) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 506, 34, "child");
      if (!flex$.FlexParentData.is(child.parentData)) child.parentData = new flex$.FlexParentData.new();
    }
    get [_canComputeIntrinsics]() {
      return !dart.equals(this.crossAxisAlignment, flex$.CrossAxisAlignment.baseline);
    }
    [_getIntrinsicSize](opts) {
      let sizingDirection = opts && 'sizingDirection' in opts ? opts.sizingDirection : null;
      if (sizingDirection == null) dart.nullFailed(L0, 514, 19, "sizingDirection");
      let extent = opts && 'extent' in opts ? opts.extent : null;
      if (extent == null) dart.nullFailed(L0, 515, 21, "extent");
      let childSize = opts && 'childSize' in opts ? opts.childSize : null;
      if (childSize == null) dart.nullFailed(L0, 516, 35, "childSize");
      if (!dart.test(this[_canComputeIntrinsics])) {
        if (!dart.test(object.RenderObject.debugCheckingIntrinsics)) dart.assertFailed("Intrinsics are not available for CrossAxisAlignment.baseline.", L0, 523, 9, "RenderObject.debugCheckingIntrinsics");
        return 0.0;
      }
      if (dart.equals(this[_direction], sizingDirection)) {
        let totalFlex = 0.0;
        let inflexibleSpace = 0.0;
        let maxFlexFractionSoFar = 0.0;
        let child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          totalFlex = totalFlex + dart.notNull(flex);
          if (dart.notNull(flex) > 0) {
            let flexFraction = dart.notNull(childSize(child, extent)) / dart.notNull(this[_getFlex](child));
            maxFlexFractionSoFar = math.max(core.double, maxFlexFractionSoFar, flexFraction);
          } else {
            inflexibleSpace = inflexibleSpace + dart.notNull(childSize(child, extent));
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
        return maxFlexFractionSoFar * totalFlex + inflexibleSpace;
      } else {
        let availableMainSpace = extent;
        let totalFlex = 0;
        let inflexibleSpace = 0.0;
        let maxCrossSize = 0.0;
        let child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          totalFlex = totalFlex + dart.notNull(flex);
          let mainSize = null;
          let mainSize$35isSet = false;
          function mainSize$35get() {
            return mainSize$35isSet ? mainSize : dart.throw(new _internal.LateError.localNI("mainSize"));
          }
          dart.fn(mainSize$35get, VoidTodouble());
          function mainSize$35set(t3) {
            if (t3 == null) dart.nullFailed(L0, 564, 27, "null");
            if (mainSize$35isSet)
              dart.throw(new _internal.LateError.localAI("mainSize"));
            else {
              mainSize$35isSet = true;
              return mainSize = t3;
            }
          }
          dart.fn(mainSize$35set, doubleTodynamic());
          let crossSize = null;
          let crossSize$35isSet = false;
          function crossSize$35get() {
            return crossSize$35isSet ? crossSize : dart.throw(new _internal.LateError.localNI("crossSize"));
          }
          dart.fn(crossSize$35get, VoidTodouble());
          function crossSize$35set(t8) {
            if (t8 == null) dart.nullFailed(L0, 565, 27, "null");
            if (crossSize$35isSet)
              dart.throw(new _internal.LateError.localAI("crossSize"));
            else {
              crossSize$35isSet = true;
              return crossSize = t8;
            }
          }
          dart.fn(crossSize$35set, doubleTodynamic());
          if (flex === 0) {
            switch (this[_direction]) {
              case C19 || CT.C19:
              {
                mainSize$35set(child.getMaxIntrinsicWidth(1 / 0));
                crossSize$35set(childSize(child, mainSize$35get()));
                break;
              }
              case C22 || CT.C22:
              {
                mainSize$35set(child.getMaxIntrinsicHeight(1 / 0));
                crossSize$35set(childSize(child, mainSize$35get()));
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
            inflexibleSpace = inflexibleSpace + dart.notNull(mainSize$35get());
            maxCrossSize = math.max(core.double, maxCrossSize, crossSize$35get());
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
        let spacePerFlex = math.max(core.double, 0.0, (dart.notNull(availableMainSpace) - inflexibleSpace) / totalFlex);
        child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          if (dart.notNull(flex) > 0) maxCrossSize = math.max(core.double, maxCrossSize, childSize(child, spacePerFlex * dart.notNull(flex)));
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
        return maxCrossSize;
      }
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 604, 42, "height");
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.horizontal, extent: height, childSize: dart.fn((child, extent) => {
          if (child == null) dart.nullFailed(L0, 608, 29, "child");
          if (extent == null) dart.nullFailed(L0, 608, 43, "extent");
          return child.getMinIntrinsicWidth(extent);
        }, RenderBoxAnddoubleTodouble())});
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 613, 42, "height");
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.horizontal, extent: height, childSize: dart.fn((child, extent) => {
          if (child == null) dart.nullFailed(L0, 617, 29, "child");
          if (extent == null) dart.nullFailed(L0, 617, 43, "extent");
          return child.getMaxIntrinsicWidth(extent);
        }, RenderBoxAnddoubleTodouble())});
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 622, 43, "width");
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.vertical, extent: width, childSize: dart.fn((child, extent) => {
          if (child == null) dart.nullFailed(L0, 626, 29, "child");
          if (extent == null) dart.nullFailed(L0, 626, 43, "extent");
          return child.getMinIntrinsicHeight(extent);
        }, RenderBoxAnddoubleTodouble())});
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 631, 43, "width");
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.vertical, extent: width, childSize: dart.fn((child, extent) => {
          if (child == null) dart.nullFailed(L0, 635, 29, "child");
          if (extent == null) dart.nullFailed(L0, 635, 43, "extent");
          return child.getMaxIntrinsicHeight(extent);
        }, RenderBoxAnddoubleTodouble())});
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 640, 56, "baseline");
      if (dart.equals(this[_direction], basic_types.Axis.horizontal)) return this.defaultComputeDistanceToHighestActualBaseline(baseline);
      return this.defaultComputeDistanceToFirstActualBaseline(baseline);
    }
    [_getFlex](child) {
      let t10;
      if (child == null) dart.nullFailed(L0, 646, 26, "child");
      let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
      t10 = childParentData.flex;
      return t10 == null ? 0 : t10;
    }
    [_getFit](child) {
      let t10;
      if (child == null) dart.nullFailed(L0, 651, 29, "child");
      let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
      t10 = childParentData.fit;
      return t10 == null ? flex$.FlexFit.tight : t10;
    }
    [_getCrossSize](size) {
      if (size == null) dart.nullFailed(L0, 656, 29, "size");
      switch (this[_direction]) {
        case C19 || CT.C19:
        {
          return size.height;
        }
        case C22 || CT.C22:
        {
          return size.width;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_getMainSize](size) {
      if (size == null) dart.nullFailed(L0, 665, 28, "size");
      switch (this[_direction]) {
        case C19 || CT.C19:
        {
          return size.width;
        }
        case C22 || CT.C22:
        {
          return size.height;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 675, 40, "constraints");
      if (!dart.test(this[_canComputeIntrinsics])) {
        if (!dart.test(this.debugCannotComputeDryLayout({reason: "Dry layout cannot be computed for CrossAxisAlignment.baseline, which requires a full layout."}))) dart.assertFailed(null, L0, 677, 14, "debugCannotComputeDryLayout(\n        reason: 'Dry layout cannot be computed for CrossAxisAlignment.baseline, which requires a full layout.'\n      )");
        return C23 || CT.C23;
      }
      let constraintsError = null;
      if (!dart.test(dart.fn(() => {
        constraintsError = this[_debugCheckConstraints]({constraints: constraints, reportParentConstraints: false});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 683, 12, "() {\n      constraintsError = _debugCheckConstraints(\n        constraints: constraints,\n        reportParentConstraints: false,\n      );\n      return true;\n    }()");
      if (constraintsError != null) {
        if (!dart.test(this.debugCannotComputeDryLayout({error: constraintsError}))) dart.assertFailed(null, L0, 691, 14, "debugCannotComputeDryLayout(error: constraintsError)");
        return C23 || CT.C23;
      }
      let sizes = this[_computeSizes]({layoutChild: C24 || CT.C24, constraints: constraints});
      switch (this[_direction]) {
        case C19 || CT.C19:
        {
          return constraints.constrain(new ui.Size.new(sizes.mainSize, sizes.crossSize));
        }
        case C22 || CT.C22:
        {
          return constraints.constrain(new ui.Size.new(sizes.crossSize, sizes.mainSize));
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    [_debugCheckConstraints](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (constraints == null) dart.nullFailed(L0, 708, 65, "constraints");
      let reportParentConstraints = opts && 'reportParentConstraints' in opts ? opts.reportParentConstraints : null;
      if (reportParentConstraints == null) dart.nullFailed(L0, 708, 92, "reportParentConstraints");
      let result = null;
      if (!dart.test(dart.fn(() => {
        let maxMainSize = dart.equals(this[_direction], basic_types.Axis.horizontal) ? constraints.maxWidth : constraints.maxHeight;
        let canFlex = dart.notNull(maxMainSize) < 1 / 0;
        let child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          if (dart.notNull(flex) > 0) {
            let identity = dart.equals(this[_direction], basic_types.Axis.horizontal) ? "row" : "column";
            let axis = dart.equals(this[_direction], basic_types.Axis.horizontal) ? "horizontal" : "vertical";
            let dimension = dart.equals(this[_direction], basic_types.Axis.horizontal) ? "width" : "height";
            let error = null;
            let message = null;
            let addendum = JSArrayOfDiagnosticsNode().of([]);
            if (!canFlex && (dart.equals(this.mainAxisSize, flex$.MainAxisSize.max) || dart.equals(this[_getFit](child), flex$.FlexFit.tight))) {
              error = new assertions.ErrorSummary.new("RenderFlex children have non-zero flex but incoming " + dimension + " constraints are unbounded.");
              message = new assertions.ErrorDescription.new("When a " + identity + " is in a parent that does not provide a finite " + dimension + " constraint, for example " + "if it is in a " + axis + " scrollable, it will try to shrink-wrap its children along the " + axis + " " + "axis. Setting a flex on a child (e.g. using Expanded) indicates that the child is to " + "expand to fill the remaining space in the " + axis + " direction.");
              if (dart.test(reportParentConstraints)) {
                let node = this;
                switch (this[_direction]) {
                  case C19 || CT.C19:
                  {
                    while (!dart.test(dart.nullCheck(node).constraints.hasBoundedWidth) && box.RenderBox.is(node.parent))
                      node = box.RenderBox.as(dart.nullCheck(node.parent));
                    if (!dart.test(node.constraints.hasBoundedWidth)) node = null;
                    break;
                  }
                  case C22 || CT.C22:
                  {
                    while (!dart.test(dart.nullCheck(node).constraints.hasBoundedHeight) && box.RenderBox.is(node.parent))
                      node = box.RenderBox.as(dart.nullCheck(node.parent));
                    if (!dart.test(node.constraints.hasBoundedHeight)) node = null;
                    break;
                  }
                  default:
                  {
                    dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
                  }
                }
                if (node != null) {
                  addendum[$add](node.describeForError("The nearest ancestor providing an unbounded width constraint is"));
                }
              }
              addendum[$add](new assertions.ErrorHint.new("See also: https://flutter.dev/layout/"));
            } else {
              return true;
            }
            result = new assertions.FlutterError.fromParts((() => {
              let t10 = JSArrayOfDiagnosticsNode().of([error, message, new assertions.ErrorDescription.new("These two directives are mutually exclusive. If a parent is to shrink-wrap its child, the child " + "cannot simultaneously expand to fit its parent."), new assertions.ErrorHint.new("Consider setting mainAxisSize to MainAxisSize.min and using FlexFit.loose fits for the flexible " + "children (using Flexible rather than Expanded). This will allow the flexible children " + "to size themselves to less than the infinite remaining space they would otherwise be " + "forced to take, and then will cause the RenderFlex to shrink-wrap the children " + "rather than expanding to fit the maximum constraints provided by the parent."), new assertions.ErrorDescription.new("If this message did not help you determine the problem, consider using debugDumpRenderTree():\n" + "  https://flutter.dev/debugging/#rendering-layer\n" + "  http://api.flutter.dev/flutter/rendering/debugDumpRenderTree.html"), this.describeForError("The affected RenderFlex is", {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new diagnostics.DiagnosticsProperty.new("The creator information is set to", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]);
              t10[$addAll](addendum);
              t10.push(new assertions.ErrorDescription.new("If none of the above helps enough to fix this problem, please don't hesitate to file a bug:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
              return t10;
            })());
            return true;
          }
          child = this.childAfter(child);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 710, 12, "() {\n      final double maxMainSize = _direction == Axis.horizontal ? constraints.maxWidth : constraints.maxHeight;\n      final bool canFlex = maxMainSize < double.infinity;\n      RenderBox? child = firstChild;\n      while (child != null) {\n        final int flex = _getFlex(child);\n        if (flex > 0) {\n          final String identity = _direction == Axis.horizontal ? 'row' : 'column';\n          final String axis = _direction == Axis.horizontal ? 'horizontal' : 'vertical';\n          final String dimension = _direction == Axis.horizontal ? 'width' : 'height';\n          DiagnosticsNode error, message;\n          final List<DiagnosticsNode> addendum = <DiagnosticsNode>[];\n          if (!canFlex && (mainAxisSize == MainAxisSize.max || _getFit(child) == FlexFit.tight)) {\n            error = ErrorSummary('RenderFlex children have non-zero flex but incoming $dimension constraints are unbounded.');\n            message = ErrorDescription(\n              'When a $identity is in a parent that does not provide a finite $dimension constraint, for example '\n              'if it is in a $axis scrollable, it will try to shrink-wrap its children along the $axis '\n              'axis. Setting a flex on a child (e.g. using Expanded) indicates that the child is to '\n              'expand to fill the remaining space in the $axis direction.'\n            );\n            if (reportParentConstraints) { // Constraints of parents are unavailable in dry layout.\n              RenderBox? node = this;\n              switch (_direction) {\n                case Axis.horizontal:\n                  while (!node!.constraints.hasBoundedWidth && node.parent is RenderBox)\n                    node = node.parent! as RenderBox;\n                  if (!node.constraints.hasBoundedWidth)\n                    node = null;\n                  break;\n                case Axis.vertical:\n                  while (!node!.constraints.hasBoundedHeight && node.parent is RenderBox)\n                    node = node.parent! as RenderBox;\n                  if (!node.constraints.hasBoundedHeight)\n                    node = null;\n                  break;\n              }\n              if (node != null) {\n                addendum.add(node.describeForError('The nearest ancestor providing an unbounded width constraint is'));\n              }\n            }\n            addendum.add(ErrorHint('See also: https://flutter.dev/layout/'));\n          } else {\n            return true;\n          }\n          result = FlutterError.fromParts(<DiagnosticsNode>[\n            error,\n            message,\n            ErrorDescription(\n              'These two directives are mutually exclusive. If a parent is to shrink-wrap its child, the child '\n              'cannot simultaneously expand to fit its parent.'\n            ),\n            ErrorHint(\n              'Consider setting mainAxisSize to MainAxisSize.min and using FlexFit.loose fits for the flexible '\n              'children (using Flexible rather than Expanded). This will allow the flexible children '\n              'to size themselves to less than the infinite remaining space they would otherwise be '\n              'forced to take, and then will cause the RenderFlex to shrink-wrap the children '\n              'rather than expanding to fit the maximum constraints provided by the parent.'\n            ),\n            ErrorDescription(\n              'If this message did not help you determine the problem, consider using debugDumpRenderTree():\\n'\n              '  https://flutter.dev/debugging/#rendering-layer\\n'\n              '  http://api.flutter.dev/flutter/rendering/debugDumpRenderTree.html'\n            ),\n            describeForError('The affected RenderFlex is', style: DiagnosticsTreeStyle.errorProperty),\n            DiagnosticsProperty<dynamic>('The creator information is set to', debugCreator, style: DiagnosticsTreeStyle.errorProperty),\n            ...addendum,\n            ErrorDescription(\n              \"If none of the above helps enough to fix this problem, please don't hesitate to file a bug:\\n\"\n              '  https://github.com/flutter/flutter/issues/new?template=2_bug.md'\n            ),\n          ]);\n          return true;\n        }\n        child = childAfter(child);\n      }\n      return true;\n    }()");
      return result;
    }
    [_computeSizes](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (constraints == null) dart.nullFailed(L0, 790, 55, "constraints");
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (layoutChild == null) dart.nullFailed(L0, 790, 91, "layoutChild");
      if (!dart.test(this[_debugHasNecessaryDirections])) dart.assertFailed(null, L0, 791, 12, "_debugHasNecessaryDirections");
      if (!(constraints != null)) dart.assertFailed(null, L0, 792, 12, "constraints != null");
      let totalFlex = 0;
      let maxMainSize = dart.equals(this[_direction], basic_types.Axis.horizontal) ? constraints.maxWidth : constraints.maxHeight;
      let canFlex = dart.notNull(maxMainSize) < 1 / 0;
      let crossSize = 0.0;
      let allocatedSize = 0.0;
      let child = this.firstChild;
      let lastFlexChild = null;
      while (child != null) {
        let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
        let flex = this[_getFlex](child);
        if (dart.notNull(flex) > 0) {
          totalFlex = totalFlex + dart.notNull(flex);
          lastFlexChild = child;
        } else {
          let innerConstraints = null;
          if (dart.equals(this.crossAxisAlignment, flex$.CrossAxisAlignment.stretch)) {
            switch (this[_direction]) {
              case C19 || CT.C19:
              {
                innerConstraints = new box.BoxConstraints.tightFor({height: constraints.maxHeight});
                break;
              }
              case C22 || CT.C22:
              {
                innerConstraints = new box.BoxConstraints.tightFor({width: constraints.maxWidth});
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          } else {
            switch (this[_direction]) {
              case C19 || CT.C19:
              {
                innerConstraints = new box.BoxConstraints.new({maxHeight: constraints.maxHeight});
                break;
              }
              case C22 || CT.C22:
              {
                innerConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
          }
          let childSize = layoutChild(child, innerConstraints);
          allocatedSize = allocatedSize + dart.notNull(this[_getMainSize](childSize));
          crossSize = math.max(core.double, crossSize, this[_getCrossSize](childSize));
        }
        if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, L0, 834, 14, "child.parentData == childParentData");
        child = childParentData.nextSibling;
      }
      let freeSpace = math.max(core.double, 0.0, dart.notNull(canFlex ? maxMainSize : 0.0) - allocatedSize);
      let allocatedFlexSpace = 0.0;
      if (totalFlex > 0) {
        let spacePerFlex = canFlex ? freeSpace / totalFlex : 0 / 0;
        child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          if (dart.notNull(flex) > 0) {
            let maxChildExtent = canFlex ? dart.equals(child, lastFlexChild) ? freeSpace - allocatedFlexSpace : spacePerFlex * dart.notNull(flex) : 1 / 0;
            let minChildExtent = null;
            let minChildExtent$35isSet = false;
            function minChildExtent$35get() {
              return minChildExtent$35isSet ? minChildExtent : dart.throw(new _internal.LateError.localNI("minChildExtent"));
            }
            dart.fn(minChildExtent$35get, VoidTodouble());
            function minChildExtent$35set(t14) {
              if (t14 == null) dart.nullFailed(L0, 848, 29, "null");
              if (minChildExtent$35isSet)
                dart.throw(new _internal.LateError.localAI("minChildExtent"));
              else {
                minChildExtent$35isSet = true;
                return minChildExtent = t14;
              }
            }
            dart.fn(minChildExtent$35set, doubleTodynamic());
            switch (this[_getFit](child)) {
              case C0 || CT.C0:
              {
                if (!(maxChildExtent < 1 / 0)) dart.assertFailed(null, L0, 851, 22, "maxChildExtent < double.infinity");
                minChildExtent$35set(maxChildExtent);
                break;
              }
              case C1 || CT.C1:
              {
                minChildExtent$35set(0.0);
                break;
              }
              default:
              {
                dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
              }
            }
            if (!(minChildExtent$35get() != null)) dart.assertFailed(null, L0, 858, 18, "minChildExtent != null");
            let innerConstraints = null;
            if (dart.equals(this.crossAxisAlignment, flex$.CrossAxisAlignment.stretch)) {
              switch (this[_direction]) {
                case C19 || CT.C19:
                {
                  innerConstraints = new box.BoxConstraints.new({minWidth: minChildExtent$35get(), maxWidth: maxChildExtent, minHeight: constraints.maxHeight, maxHeight: constraints.maxHeight});
                  break;
                }
                case C22 || CT.C22:
                {
                  innerConstraints = new box.BoxConstraints.new({minWidth: constraints.maxWidth, maxWidth: constraints.maxWidth, minHeight: minChildExtent$35get(), maxHeight: maxChildExtent});
                  break;
                }
                default:
                {
                  dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
                }
              }
            } else {
              switch (this[_direction]) {
                case C19 || CT.C19:
                {
                  innerConstraints = new box.BoxConstraints.new({minWidth: minChildExtent$35get(), maxWidth: maxChildExtent, maxHeight: constraints.maxHeight});
                  break;
                }
                case C22 || CT.C22:
                {
                  innerConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth, minHeight: minChildExtent$35get(), maxHeight: maxChildExtent});
                  break;
                }
                default:
                {
                  dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
                }
              }
            }
            let childSize = layoutChild(child, innerConstraints);
            let childMainSize = this[_getMainSize](childSize);
            if (!(dart.notNull(childMainSize) <= maxChildExtent)) dart.assertFailed(null, L0, 899, 18, "childMainSize <= maxChildExtent");
            allocatedSize = allocatedSize + dart.notNull(childMainSize);
            allocatedFlexSpace = allocatedFlexSpace + maxChildExtent;
            crossSize = math.max(core.double, crossSize, this[_getCrossSize](childSize));
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      let idealSize = canFlex && dart.equals(this.mainAxisSize, flex$.MainAxisSize.max) ? maxMainSize : allocatedSize;
      return new flex$._LayoutSizes.new({mainSize: idealSize, crossSize: crossSize, allocatedSize: allocatedSize});
    }
    performLayout() {
      let t26;
      if (!dart.test(this[_debugHasNecessaryDirections])) dart.assertFailed(null, L0, 919, 12, "_debugHasNecessaryDirections");
      let constraints = this.constraints;
      if (!dart.test(dart.fn(() => {
        let constraintsError = this[_debugCheckConstraints]({constraints: constraints, reportParentConstraints: true});
        if (constraintsError != null) {
          dart.throw(constraintsError);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 921, 12, "() {\n      final FlutterError? constraintsError = _debugCheckConstraints(\n        constraints: constraints,\n        reportParentConstraints: true,\n      );\n      if (constraintsError != null) {\n        throw constraintsError;\n      }\n      return true;\n    }()");
      let sizes = this[_computeSizes]({layoutChild: C25 || CT.C25, constraints: constraints});
      let allocatedSize = sizes.allocatedSize;
      let actualSize = sizes.mainSize;
      let crossSize = sizes.crossSize;
      let maxBaselineDistance = 0.0;
      if (dart.equals(this.crossAxisAlignment, flex$.CrossAxisAlignment.baseline)) {
        let child = this.firstChild;
        let maxSizeAboveBaseline = 0.0;
        let maxSizeBelowBaseline = 0.0;
        while (child != null) {
          if (!dart.test(dart.fn(() => {
            if (this.textBaseline == null) dart.throw(assertions.FlutterError.new("To use FlexAlignItems.baseline, you must also specify which baseline to use using the \"baseline\" argument."));
            return true;
          }, VoidTobool())())) dart.assertFailed(null, L0, 946, 16, "() {\n          if (textBaseline == null)\n            throw FlutterError('To use FlexAlignItems.baseline, you must also specify which baseline to use using the \"baseline\" argument.');\n          return true;\n        }()");
          let distance = child.getDistanceToBaseline(dart.nullCheck(this.textBaseline), {onlyReal: true});
          if (distance != null) {
            maxBaselineDistance = math.max(core.double, maxBaselineDistance, distance);
            maxSizeAboveBaseline = math.max(core.double, distance, maxSizeAboveBaseline);
            maxSizeBelowBaseline = math.max(core.double, dart.notNull(child.size.height) - dart.notNull(distance), maxSizeBelowBaseline);
            crossSize = math.max(core.double, maxSizeAboveBaseline + maxSizeBelowBaseline, crossSize);
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      switch (this[_direction]) {
        case C19 || CT.C19:
        {
          this.size = constraints.constrain(new ui.Size.new(actualSize, crossSize));
          actualSize = this.size.width;
          crossSize = this.size.height;
          break;
        }
        case C22 || CT.C22:
        {
          this.size = constraints.constrain(new ui.Size.new(crossSize, actualSize));
          actualSize = this.size.height;
          crossSize = this.size.width;
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let actualSizeDelta = dart.notNull(actualSize) - dart.notNull(allocatedSize);
      this[_overflow] = math.max(core.double, 0.0, -actualSizeDelta);
      let remainingSpace = math.max(core.double, 0.0, actualSizeDelta);
      let leadingSpace = null;
      let leadingSpace$35isSet = false;
      function leadingSpace$35get() {
        return leadingSpace$35isSet ? leadingSpace : dart.throw(new _internal.LateError.localNI("leadingSpace"));
      }
      dart.fn(leadingSpace$35get, VoidTodouble());
      function leadingSpace$35set(t19) {
        if (t19 == null) dart.nullFailed(L0, 985, 23, "null");
        if (leadingSpace$35isSet)
          dart.throw(new _internal.LateError.localAI("leadingSpace"));
        else {
          leadingSpace$35isSet = true;
          return leadingSpace = t19;
        }
      }
      dart.fn(leadingSpace$35set, doubleTodynamic());
      let betweenSpace = null;
      let betweenSpace$35isSet = false;
      function betweenSpace$35get() {
        return betweenSpace$35isSet ? betweenSpace : dart.throw(new _internal.LateError.localNI("betweenSpace"));
      }
      dart.fn(betweenSpace$35get, VoidTodouble());
      function betweenSpace$35set(t24) {
        if (t24 == null) dart.nullFailed(L0, 986, 23, "null");
        if (betweenSpace$35isSet)
          dart.throw(new _internal.LateError.localAI("betweenSpace"));
        else {
          betweenSpace$35isSet = true;
          return betweenSpace = t24;
        }
      }
      dart.fn(betweenSpace$35set, doubleTodynamic());
      let flipMainAxis = !dart.test((t26 = flex$._startIsTopLeft(this.direction, this.textDirection, this.verticalDirection), t26 == null ? true : t26));
      switch (this[_mainAxisAlignment]) {
        case C6 || CT.C6:
        {
          leadingSpace$35set(0.0);
          betweenSpace$35set(0.0);
          break;
        }
        case C7 || CT.C7:
        {
          leadingSpace$35set(remainingSpace);
          betweenSpace$35set(0.0);
          break;
        }
        case C8 || CT.C8:
        {
          leadingSpace$35set(remainingSpace / 2.0);
          betweenSpace$35set(0.0);
          break;
        }
        case C9 || CT.C9:
        {
          leadingSpace$35set(0.0);
          betweenSpace$35set(dart.notNull(this.childCount) > 1 ? remainingSpace / (dart.notNull(this.childCount) - 1) : 0.0);
          break;
        }
        case C10 || CT.C10:
        {
          betweenSpace$35set(dart.notNull(this.childCount) > 0 ? remainingSpace / dart.notNull(this.childCount) : 0.0);
          leadingSpace$35set(dart.notNull(betweenSpace$35get()) / 2.0);
          break;
        }
        case C11 || CT.C11:
        {
          betweenSpace$35set(dart.notNull(this.childCount) > 0 ? remainingSpace / (dart.notNull(this.childCount) + 1) : 0.0);
          leadingSpace$35set(betweenSpace$35get());
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
      let childMainPosition = flipMainAxis ? dart.notNull(actualSize) - dart.notNull(leadingSpace$35get()) : leadingSpace$35get();
      let child = this.firstChild;
      while (child != null) {
        let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
        let childCrossPosition = null;
        switch (this[_crossAxisAlignment]) {
          case C13 || CT.C13:
          case C14 || CT.C14:
          {
            childCrossPosition = dart.equals(flex$._startIsTopLeft(basic_types.flipAxis(this.direction), this.textDirection, this.verticalDirection), dart.equals(this[_crossAxisAlignment], flex$.CrossAxisAlignment.start)) ? 0.0 : dart.notNull(crossSize) - dart.notNull(this[_getCrossSize](child.size));
            break;
          }
          case C15 || CT.C15:
          {
            childCrossPosition = dart.notNull(crossSize) / 2.0 - dart.notNull(this[_getCrossSize](child.size)) / 2.0;
            break;
          }
          case C16 || CT.C16:
          {
            childCrossPosition = 0.0;
            break;
          }
          case C17 || CT.C17:
          {
            if (dart.equals(this[_direction], basic_types.Axis.horizontal)) {
              if (!(this.textBaseline != null)) dart.assertFailed(null, L0, 1041, 20, "textBaseline != null");
              let distance = child.getDistanceToBaseline(dart.nullCheck(this.textBaseline), {onlyReal: true});
              if (distance != null)
                childCrossPosition = maxBaselineDistance - dart.notNull(distance);
              else
                childCrossPosition = 0.0;
            } else {
              childCrossPosition = 0.0;
            }
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        if (flipMainAxis) childMainPosition = dart.notNull(childMainPosition) - dart.notNull(this[_getMainSize](child.size));
        switch (this[_direction]) {
          case C19 || CT.C19:
          {
            childParentData.offset = new ui.Offset.new(childMainPosition, childCrossPosition);
            break;
          }
          case C22 || CT.C22:
          {
            childParentData.offset = new ui.Offset.new(childCrossPosition, childMainPosition);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        if (flipMainAxis) {
          childMainPosition = dart.notNull(childMainPosition) - dart.notNull(betweenSpace$35get());
        } else {
          childMainPosition = dart.notNull(childMainPosition) + (dart.notNull(this[_getMainSize](child.size)) + dart.notNull(betweenSpace$35get()));
        }
        child = childParentData.nextSibling;
      }
    }
    hitTestChildren(result, opts) {
      if (result == null) dart.nullFailed(L0, 1072, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 1072, 67, "position");
      return this.defaultHitTestChildren(result, {position: position});
    }
    paint(context, offset) {
      if (context == null) dart.nullFailed(L0, 1077, 30, "context");
      if (offset == null) dart.nullFailed(L0, 1077, 46, "offset");
      if (!dart.test(this[_hasOverflow])) {
        this.defaultPaint(context, offset);
        return;
      }
      if (dart.test(this.size.isEmpty)) return;
      if (dart.equals(this.clipBehavior, ui.Clip.none)) {
        this[_clipRectLayer] = null;
        this.defaultPaint(context, offset);
      } else {
        this[_clipRectLayer] = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'defaultPaint'), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer]});
      }
      if (!dart.test(dart.fn(() => {
        let debugOverflowHints = JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("The overflowing " + dart.str(this[$runtimeType]) + " has an orientation of " + dart.str(this[_direction]) + "."), new assertions.ErrorDescription.new("The edge of the " + dart.str(this[$runtimeType]) + " that is overflowing has been marked " + "in the rendering with a yellow and black striped pattern. This is " + "usually caused by the contents being too big for the " + dart.str(this[$runtimeType]) + "."), new assertions.ErrorHint.new("Consider applying a flex factor (e.g. using an Expanded widget) to " + "force the children of the " + dart.str(this[$runtimeType]) + " to fit within the available " + "space instead of being sized to their natural size."), new assertions.ErrorHint.new("This is considered an error condition because it indicates that there " + "is content that cannot be seen. If the content is legitimately bigger " + "than the available space, consider clipping it with a ClipRect widget " + "before putting it in the flex, or using a scrollable container rather " + "than a Flex, like a ListView.")]);
        let overflowChildRect = null;
        switch (this[_direction]) {
          case C19 || CT.C19:
          {
            overflowChildRect = new ui.Rect.fromLTWH(0.0, 0.0, dart.notNull(this.size.width) + dart.nullCheck(this[_overflow]), 0.0);
            break;
          }
          case C22 || CT.C22:
          {
            overflowChildRect = new ui.Rect.fromLTWH(0.0, 0.0, 0.0, dart.notNull(this.size.height) + dart.nullCheck(this[_overflow]));
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
        this.paintOverflowIndicator(context, offset, ui.Offset.zero['&'](this.size), overflowChildRect, {overflowHints: debugOverflowHints});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 1096, 12, "() {\n      // Only set this if it's null to save work. It gets reset to null if the\n      // _direction changes.\n      final List<DiagnosticsNode> debugOverflowHints = <DiagnosticsNode>[\n        ErrorDescription(\n          'The overflowing $runtimeType has an orientation of $_direction.'\n        ),\n        ErrorDescription(\n          'The edge of the $runtimeType that is overflowing has been marked '\n          'in the rendering with a yellow and black striped pattern. This is '\n          'usually caused by the contents being too big for the $runtimeType.'\n        ),\n        ErrorHint(\n          'Consider applying a flex factor (e.g. using an Expanded widget) to '\n          'force the children of the $runtimeType to fit within the available '\n          'space instead of being sized to their natural size.'\n        ),\n        ErrorHint(\n          'This is considered an error condition because it indicates that there '\n          'is content that cannot be seen. If the content is legitimately bigger '\n          'than the available space, consider clipping it with a ClipRect widget '\n          'before putting it in the flex, or using a scrollable container rather '\n          'than a Flex, like a ListView.'\n        ),\n      ];\n\n      // Simulate a child rect that overflows by the right amount. This child\n      // rect is never used for drawing, just for determining the overflow\n      // location and amount.\n      final Rect overflowChildRect;\n      switch (_direction) {\n        case Axis.horizontal:\n          overflowChildRect = Rect.fromLTWH(0.0, 0.0, size.width + _overflow!, 0.0);\n          break;\n        case Axis.vertical:\n          overflowChildRect = Rect.fromLTWH(0.0, 0.0, 0.0, size.height + _overflow!);\n          break;\n      }\n      paintOverflowIndicator(context, offset, Offset.zero & size, overflowChildRect, overflowHints: debugOverflowHints);\n      return true;\n    }()");
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      if (child == null) dart.nullFailed(L0, 1142, 51, "child");
      return dart.test(this[_hasOverflow]) ? ui.Offset.zero['&'](this.size) : null;
    }
    toStringShort() {
      let header = super.toStringShort();
      if (this[_overflow] != null && dart.test(this[_hasOverflow])) header = dart.notNull(header) + " OVERFLOWING";
      return header;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1153, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfAxis()).new("direction", this.direction));
      properties.add(new (EnumPropertyOfMainAxisAlignment()).new("mainAxisAlignment", this.mainAxisAlignment));
      properties.add(new (EnumPropertyOfMainAxisSize()).new("mainAxisSize", this.mainAxisSize));
      properties.add(new (EnumPropertyOfCrossAxisAlignment()).new("crossAxisAlignment", this.crossAxisAlignment));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (EnumPropertyOfVerticalDirection()).new("verticalDirection", this.verticalDirection, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextBaseline()).new("textBaseline", this.textBaseline, {defaultValue: null}));
    }
  };
  (flex$.RenderFlex.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let direction = opts && 'direction' in opts ? opts.direction : C19 || CT.C19;
    if (direction == null) dart.nullFailed(L0, 284, 10, "direction");
    let mainAxisSize = opts && 'mainAxisSize' in opts ? opts.mainAxisSize : C4 || CT.C4;
    if (mainAxisSize == null) dart.nullFailed(L0, 285, 18, "mainAxisSize");
    let mainAxisAlignment = opts && 'mainAxisAlignment' in opts ? opts.mainAxisAlignment : C6 || CT.C6;
    if (mainAxisAlignment == null) dart.nullFailed(L0, 286, 23, "mainAxisAlignment");
    let crossAxisAlignment = opts && 'crossAxisAlignment' in opts ? opts.crossAxisAlignment : C15 || CT.C15;
    if (crossAxisAlignment == null) dart.nullFailed(L0, 287, 24, "crossAxisAlignment");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let verticalDirection = opts && 'verticalDirection' in opts ? opts.verticalDirection : C20 || CT.C20;
    if (verticalDirection == null) dart.nullFailed(L0, 289, 23, "verticalDirection");
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C21 || CT.C21;
    if (clipBehavior == null) dart.nullFailed(L0, 291, 10, "clipBehavior");
    this[_overflow] = null;
    this[_clipBehavior] = ui.Clip.none;
    this[_clipRectLayer] = null;
    if (!(direction != null)) dart.assertFailed(null, L0, 292, 15, "direction != null");
    if (!(mainAxisAlignment != null)) dart.assertFailed(null, L0, 293, 15, "mainAxisAlignment != null");
    if (!(mainAxisSize != null)) dart.assertFailed(null, L0, 294, 15, "mainAxisSize != null");
    if (!(crossAxisAlignment != null)) dart.assertFailed(null, L0, 295, 15, "crossAxisAlignment != null");
    if (!(clipBehavior != null)) dart.assertFailed(null, L0, 296, 15, "clipBehavior != null");
    this[_direction] = direction;
    this[_mainAxisAlignment] = mainAxisAlignment;
    this[_mainAxisSize] = mainAxisSize;
    this[_crossAxisAlignment] = crossAxisAlignment;
    this[_textDirection] = textDirection;
    this[_verticalDirection] = verticalDirection;
    this[_textBaseline] = textBaseline;
    this[_clipBehavior] = clipBehavior;
    flex$.RenderFlex.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = flex$.RenderFlex.prototype;
  dart.addTypeTests(flex$.RenderFlex);
  dart.addTypeCaches(flex$.RenderFlex);
  dart.setMethodSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getMethods(flex$.RenderFlex.__proto__),
    [_getIntrinsicSize]: dart.fnType(core.double, [], {}, {childSize: dart.fnType(core.double, [box.RenderBox, core.double]), extent: core.double, sizingDirection: basic_types.Axis}),
    [_getFlex]: dart.fnType(core.int, [box.RenderBox]),
    [_getFit]: dart.fnType(flex$.FlexFit, [box.RenderBox]),
    [_getCrossSize]: dart.fnType(core.double, [ui.Size]),
    [_getMainSize]: dart.fnType(core.double, [ui.Size]),
    [_debugCheckConstraints]: dart.fnType(dart.nullable(assertions.FlutterError), [], {}, {constraints: box.BoxConstraints, reportParentConstraints: core.bool}),
    [_computeSizes]: dart.fnType(flex$._LayoutSizes, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setGetterSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getGetters(flex$.RenderFlex.__proto__),
    direction: basic_types.Axis,
    mainAxisAlignment: flex$.MainAxisAlignment,
    mainAxisSize: flex$.MainAxisSize,
    crossAxisAlignment: flex$.CrossAxisAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    textBaseline: dart.nullable(ui.TextBaseline),
    [_debugHasNecessaryDirections]: core.bool,
    [_hasOverflow]: core.bool,
    clipBehavior: ui.Clip,
    [_canComputeIntrinsics]: core.bool
  }));
  dart.setSetterSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getSetters(flex$.RenderFlex.__proto__),
    direction: basic_types.Axis,
    mainAxisAlignment: flex$.MainAxisAlignment,
    mainAxisSize: flex$.MainAxisSize,
    crossAxisAlignment: flex$.CrossAxisAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    textBaseline: dart.nullable(ui.TextBaseline),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(flex$.RenderFlex, L1);
  dart.setFieldSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getFields(flex$.RenderFlex.__proto__),
    [_direction]: dart.fieldType(basic_types.Axis),
    [_mainAxisAlignment]: dart.fieldType(flex$.MainAxisAlignment),
    [_mainAxisSize]: dart.fieldType(flex$.MainAxisSize),
    [_crossAxisAlignment]: dart.fieldType(flex$.CrossAxisAlignment),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_verticalDirection]: dart.fieldType(basic_types.VerticalDirection),
    [_textBaseline]: dart.fieldType(dart.nullable(ui.TextBaseline)),
    [_overflow]: dart.fieldType(dart.nullable(core.double)),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.fieldType(dart.nullable(layer.ClipRectLayer))
  }));
  var mainSize$ = dart.privateName(flex$, "_LayoutSizes.mainSize");
  var crossSize$ = dart.privateName(flex$, "_LayoutSizes.crossSize");
  var allocatedSize$ = dart.privateName(flex$, "_LayoutSizes.allocatedSize");
  flex$._LayoutSizes = class _LayoutSizes extends core.Object {
    get mainSize() {
      return this[mainSize$];
    }
    set mainSize(value) {
      super.mainSize = value;
    }
    get crossSize() {
      return this[crossSize$];
    }
    set crossSize(value) {
      super.crossSize = value;
    }
    get allocatedSize() {
      return this[allocatedSize$];
    }
    set allocatedSize(value) {
      super.allocatedSize = value;
    }
  };
  (flex$._LayoutSizes.new = function(opts) {
    let mainSize = opts && 'mainSize' in opts ? opts.mainSize : null;
    if (mainSize == null) dart.nullFailed(L0, 1167, 19, "mainSize");
    let crossSize = opts && 'crossSize' in opts ? opts.crossSize : null;
    if (crossSize == null) dart.nullFailed(L0, 1168, 19, "crossSize");
    let allocatedSize = opts && 'allocatedSize' in opts ? opts.allocatedSize : null;
    if (allocatedSize == null) dart.nullFailed(L0, 1169, 19, "allocatedSize");
    this[mainSize$] = mainSize;
    this[crossSize$] = crossSize;
    this[allocatedSize$] = allocatedSize;
    ;
  }).prototype = flex$._LayoutSizes.prototype;
  dart.addTypeTests(flex$._LayoutSizes);
  dart.addTypeCaches(flex$._LayoutSizes);
  dart.setLibraryUri(flex$._LayoutSizes, L1);
  dart.setFieldSignature(flex$._LayoutSizes, () => ({
    __proto__: dart.getFields(flex$._LayoutSizes.__proto__),
    mainSize: dart.finalFieldType(core.double),
    crossSize: dart.finalFieldType(core.double),
    allocatedSize: dart.finalFieldType(core.double)
  }));
  var C26;
  var C27;
  var C28;
  flex$._startIsTopLeft = function _startIsTopLeft(direction, textDirection, verticalDirection) {
    if (direction == null) dart.nullFailed(L0, 201, 28, "direction");
    if (!(direction != null)) dart.assertFailed(null, L0, 202, 10, "direction != null");
    switch (direction) {
      case C19 || CT.C19:
      {
        switch (textDirection) {
          case C26 || CT.C26:
          {
            return true;
          }
          case C27 || CT.C27:
          {
            return false;
          }
          case null:
          {
            return null;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      case C22 || CT.C22:
      {
        switch (verticalDirection) {
          case C20 || CT.C20:
          {
            return true;
          }
          case C28 || CT.C28:
          {
            return false;
          }
          case null:
          {
            return null;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      default:
      {
        dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
      }
    }
  };
  dart.trackLibraries("packages/flutter/src/rendering/flex.dart", {
    "package:flutter/src/rendering/flex.dart": flex$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiCA;;;QAXK;;;;;EAWL;;;;;;;;;;;;;;;;IAUO;;;;;;IASI;;;;;;;AAGY,YAA2C,UAAlC,oBAAW,qBAAQ,aAAI,oBAAO;IAAI;;;IAZ3D;IASI;;;EAIX;;;;;;;;;;;;;;;;IAyCA;;;QAzBK;;;;;EAyBL;;;;;;;;;;;;;;;;;;;;;;;IAwCA;;;QAhCK;;;;;EAgCL;;;;;;;;;;;;;;;;;;;;;;;;;;IA6DA;;;QArDK;;;;;EAqDL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8GwB;IAAU;;UAEb;AACjB,YAAO,AAAM,KAAD,IAAI;AAChB,uBAAI,kBAAc,KAAK;AACH,QAAlB,mBAAa,KAAK;AACD,QAAjB;;IAEJ;;AAW2C;IAAkB;;UAErB;AACtC,YAAO,AAAM,KAAD,IAAI;AAChB,uBAAI,0BAAsB,KAAK;AACH,QAA1B,2BAAqB,KAAK;AACT,QAAjB;;IAEJ;;AAYiC;IAAa;;UAEhB;AAC5B,YAAO,AAAM,KAAD,IAAI;AAChB,uBAAI,qBAAiB,KAAK;AACH,QAArB,sBAAgB,KAAK;AACJ,QAAjB;;IAEJ;;AAW6C;IAAmB;;UAEtB;AACxC,YAAO,AAAM,KAAD,IAAI;AAChB,uBAAI,2BAAuB,KAAK;AACH,QAA3B,4BAAsB,KAAK;AACV,QAAjB;;IAEJ;;AAsBoC;IAAc;sBAEjB;AAC/B,uBAAI,sBAAkB,KAAK;AACH,QAAtB,uBAAiB,KAAK;AACL,QAAjB;;IAEJ;;AAoB2C;IAAkB;;UAErB;AACtC,uBAAI,0BAAsB,KAAK;AACH,QAA1B,2BAAqB,KAAK;AACT,QAAjB;;IAEJ;;AAKkC;IAAa;qBAEhB;AAC7B,YAA0D,aAAnD,2BAA0C,sCAAY,KAAK,IAAI;AACtE,uBAAI,qBAAiB,KAAK;AACH,QAArB,sBAAgB,KAAK;AACJ,QAAjB;;IAEJ;;AAGE,YAAO,AAAU,kBAAG;AACpB,YAAO,AAAmB,2BAAG;AAC7B,UAAI,mBAAc,qBAAQ,gBAAa;AAErC,gBAAQ;;;AAEJ,kBAAO,AAAc,sBAAG,yBAAM,AAA4G,yBAA/F,sBAAW;AACtD;;;;AAEA,kBAAO,AAAkB,0BAAG,yBAAM,AAA8G,uBAAnG,sBAAW;AACxD;;;;AANJ;;;;AASF,UAAsB,YAAlB,wBAAuC,kCACrB,YAAlB,wBAAuC;AACzC,gBAAQ;;;AAEJ,kBAAO,AAAc,sBAAG,yBAAM,AAAgH,yBAAnG,sBAAW,oBAAO,0BAAiB;AAC9E;;;;AAEA,kBAAO,AAAkB,0BAAG,yBAAM,AAAkH,uBAAvG,sBAAW,oBAAO,0BAAiB;AAChF;;;;AANJ;;;;AASF,UAAuB,YAAnB,yBAAyC,mCACtB,YAAnB,yBAAyC;AAC3C,gBAAQ;;;AAEJ,kBAAO,AAAkB,0BAAG,yBAAM,AAAqH,yBAAxG,sBAAW,oBAAO,2BAAkB;AACnF;;;;AAEA,kBAAO,AAAc,sBAAG,yBAAM,AAA+G,uBAApG,sBAAW,oBAAO,2BAAkB;AAC7E;;;;AANJ;;;;AASF,YAAO;IACT;;AAMyB,YAAS,AAAE,gBAAX;IAAoC;;AAKpC;IAAa;;UAEhB;AACpB,YAAO,AAAM,KAAD,IAAI;AAChB,uBAAI,KAAK,EAAI;AACU,QAArB,sBAAgB,KAAK;AACL,QAAhB;AAC0B,QAA1B;;IAEJ;;uBAG+B;;AAC7B,WAAqB,wBAAjB,AAAM,KAAD,cACP,AAAM,AAA6B,KAA9B,cAAc;IACvB;;AAEkC,YAAmB,cAAnB,yBAAyC;IAAQ;;UAGnE;;UACE;;UACc;;AAE9B,qBAAK;AAIH,uBACe,gEACb;AAEF,cAAO;;AAET,UAAe,YAAX,kBAAc,eAAe;AAIxB,wBAAY;AACZ,8BAAkB;AAClB,mCAAuB;AACnB,oBAAQ;AACnB,eAAO,KAAK,IAAI;AACJ,qBAAO,eAAS,KAAK;AACd,UAAjB,YAAA,AAAU,SAAD,gBAAI,IAAI;AACjB,cAAS,aAAL,IAAI,IAAG;AACI,+BAAwC,aAAzB,AAAS,SAAA,CAAC,KAAK,EAAE,MAAM,kBAAI,eAAS,KAAK;AACF,YAAnE,uBAAuB,sBAAS,oBAAoB,EAAE,YAAY;;AAEvB,YAA3C,kBAAA,AAAgB,eAAD,gBAAI,AAAS,SAAA,CAAC,KAAK,EAAE,MAAM;;AAEvB,gCAAoC,wBAAF,eAAhB,AAAM,KAAD;AACT,UAAnC,QAAQ,AAAgB,eAAD;;AAEzB,cAAO,AAAqB,AAAY,qBAAb,GAAG,SAAS,GAAG,eAAe;;AAQ5C,iCAAqB,MAAM;AACpC,wBAAY;AACT,8BAAkB;AAClB,2BAAe;AACX,oBAAQ;AACnB,eAAO,KAAK,IAAI;AACJ,qBAAO,eAAS,KAAK;AACd,UAAjB,YAAA,AAAU,SAAD,gBAAI,IAAI;AACC;;;;;;;;;;;;;;;;AACA;;;;;;;;;;;;;;;;AAClB,cAAI,AAAK,IAAD,KAAI;AACV,oBAAQ;;;AAEkD,gBAAtD,eAAW,AAAM,KAAD;AACsB,gBAAtC,gBAAY,AAAS,SAAA,CAAC,KAAK,EAAE;AAC7B;;;;AAEuD,gBAAvD,eAAW,AAAM,KAAD;AACsB,gBAAtC,gBAAY,AAAS,SAAA,CAAC,KAAK,EAAE;AAC7B;;;;AARJ;;;AAU2B,YAA3B,kBAAA,AAAgB,eAAD,gBAAI;AAC6B,YAAhD,eAAe,sBAAS,YAAY,EAAE;;AAEnB,gCAAoC,wBAAF,eAAhB,AAAM,KAAD;AACT,UAAnC,QAAQ,AAAgB,eAAD;;AAKZ,2BAAe,sBAAS,KACM,CAAnB,aAAnB,kBAAkB,IAAG,eAAe,IAAI,SAAS;AAGpC,QAAlB,QAAQ;AACR,eAAO,KAAK,IAAI;AACJ,qBAAO,eAAS,KAAK;AAC/B,cAAS,aAAL,IAAI,IAAG,GACT,AAA4E,eAA7D,sBAAS,YAAY,EAAE,AAAS,SAAA,CAAC,KAAK,EAAE,AAAa,YAAD,gBAAG,IAAI;AACvD,gCAAoC,wBAAF,eAAhB,AAAM,KAAD;AACT,UAAnC,QAAQ,AAAgB,eAAD;;AAGzB,cAAO,aAAY;;IAEvB;;UAGuC;AACrC,YAAO,2CACiB,qCACd,MAAM,aACH,SAAW,OAAc;cAAd;cAAc;AAAW,gBAAA,AAAM,MAAD,sBAAsB,MAAM;;IAEpF;;UAGuC;AACrC,YAAO,2CACiB,qCACd,MAAM,aACH,SAAW,OAAc;cAAd;cAAc;AAAW,gBAAA,AAAM,MAAD,sBAAsB,MAAM;;IAEpF;;UAGwC;AACtC,YAAO,2CACiB,mCACd,KAAK,aACF,SAAW,OAAc;cAAd;cAAc;AAAW,gBAAA,AAAM,MAAD,uBAAuB,MAAM;;IAErF;;UAGwC;AACtC,YAAO,2CACiB,mCACd,KAAK,aACF,SAAW,OAAc;cAAd;cAAc;AAAW,gBAAA,AAAM,MAAD,uBAAuB,MAAM;;IAErF;;UAGqD;AACnD,UAAe,YAAX,kBAAmB,8BACrB,MAAO,oDAA8C,QAAQ;AAC/D,YAAO,kDAA4C,QAAQ;IAC7D;eAEuB;;;AACA,4BAAoC,wBAAF,eAAhB,AAAM,KAAD;AAC5C,YAAO,AAAgB,eAAD;oBAAC,OAAQ;IACjC;cAE0B;;;AACH,4BAAoC,wBAAF,eAAhB,AAAM,KAAD;AAC5C,YAAO,AAAgB,eAAD;oBAAC,OAAe;IACxC;;UAE0B;AACxB,cAAQ;;;AAEJ,gBAAO,AAAK,KAAD;;;;AAEX,gBAAO,AAAK,KAAD;;;;AAJf;;;IAMF;;UAEyB;AACvB,cAAQ;;;AAEJ,gBAAO,AAAK,KAAD;;;;AAEX,gBAAO,AAAK,KAAD;;;;AAJf;;;IAMF;;UAGqC;AACnC,qBAAK;AACH,uBAAO,0CACG;AAEV;;AAEY;AACd,qBAAO,AAMN;AAFE,QAHD,mBAAmB,2CACJ,WAAW,2BACC;AAE3B,cAAO;;AAET,UAAI,gBAAgB,IAAI;AACtB,uBAAO,yCAAmC,gBAAgB;AAC1D;;AAGiB,kBAAQ,8DAEZ,WAAW;AAG1B,cAAQ;;;AAEJ,gBAAO,AAAY,YAAD,WAAW,gBAAK,AAAM,KAAD,WAAW,AAAM,KAAD;;;;AAEvD,gBAAO,AAAY,YAAD,WAAW,gBAAK,AAAM,KAAD,YAAY,AAAM,KAAD;;;;AAJ5D;;;IAMF;;UAE8D;;UAA2B;;AACzE;AACd,qBAAO,AA4EN;AA3Ec,0BAAyB,YAAX,kBAAmB,+BAAa,AAAY,WAAD,YAAY,AAAY,WAAD;AAClF,sBAAsB,aAAZ,WAAW;AACrB,oBAAQ;AACnB,eAAO,KAAK,IAAI;AACJ,qBAAO,eAAS,KAAK;AAC/B,cAAS,aAAL,IAAI,IAAG;AACI,2BAAsB,YAAX,kBAAmB,+BAAa,QAAQ;AACnD,uBAAkB,YAAX,kBAAmB,+BAAa,eAAe;AACtD,4BAAuB,YAAX,kBAAmB,+BAAa,UAAU;AACnD;AAAO;AACK,2BAA4B;AACxD,iBAAK,OAAO,KAAkB,YAAb,mBAA6B,2BAAsB,YAAf,cAAQ,KAAK,GAAa;AACoC,cAAjH,QAAQ,gCAAa,AAA2F,yDAArC,SAAS;AAMnF,cALD,UAAU,oCAAgB,AACxB,YAAS,QAAQ,uDAAgD,SAAS,iCAC1E,mBAAgB,IAAI,uEAAgE,IAAI,SACxF,0FACA,+CAA4C,IAAI;AAElD,4BAAI,uBAAuB;AACd,2BAAO;AAClB,wBAAQ;;;AAEJ,sCAAY,AAAE,AAAY,eAAlB,IAAI,kCAA6C,iBAAZ,AAAK,IAAD;AACf,sBAAhC,OAAoB,iBAAF,eAAX,AAAK,IAAD;AACb,mCAAK,AAAK,AAAY,IAAb,+BACP,AAAW,OAAJ;AACT;;;;AAEA,sCAAY,AAAE,AAAY,eAAlB,IAAI,mCAA8C,iBAAZ,AAAK,IAAD;AAChB,sBAAhC,OAAoB,iBAAF,eAAX,AAAK,IAAD;AACb,mCAAK,AAAK,AAAY,IAAb,gCACP,AAAW,OAAJ;AACT;;;;AAZJ;;;AAcA,oBAAI,IAAI,IAAI;AAC4F,kBAAtG,AAAS,QAAD,OAAK,AAAK,IAAD,kBAAkB;;;AAGyB,cAAhE,AAAS,QAAD,OAAK,6BAAU;;AAEvB,oBAAO;;AA4BP,YA1BF,SAAsB,sCAA2B;uDAC/C,KAAK,EACL,OAAO,EACP,oCAAgB,AACd,qGACA,oDAEF,6BAAS,AACP,qGACA,2FACA,0FACA,oFACA,iFAEF,oCAAgB,AACd,oGACA,uDACA,wEAEF,sBAAiB,sCAA0D,kDAC3E,wCAA6B,qCAAqC,2BAA0C;AACzG,mCAAQ;AACX,2DAAgB,AACd,kGACA;;;AAGJ,kBAAO;;AAEgB,UAAzB,QAAQ,gBAAW,KAAK;;AAE1B,cAAO;;AAET,YAAO,OAAM;IACf;;UAEoD;;UAAoC;;AACtF,qBAAO;AACP,YAAO,AAAY,WAAD,IAAI;AAGlB,sBAAY;AACH,wBAAyB,YAAX,kBAAmB,+BAAa,AAAY,WAAD,YAAY,AAAY,WAAD;AAClF,oBAAsB,aAAZ,WAAW;AAEzB,sBAAY;AACZ,0BAAgB;AACZ,kBAAQ;AACR;AACX,aAAO,KAAK,IAAI;AACO,8BAAoC,wBAAF,eAAhB,AAAM,KAAD;AAClC,mBAAO,eAAS,KAAK;AAC/B,YAAS,aAAL,IAAI,IAAG;AACQ,UAAjB,YAAA,AAAU,SAAD,gBAAI,IAAI;AACI,UAArB,gBAAgB,KAAK;;AAEA;AACrB,cAAuB,YAAnB,yBAAyC;AAC3C,oBAAQ;;;AAEqE,gBAAzE,mBAAkC,yCAAiB,AAAY,WAAD;AAC9D;;;;AAEuE,gBAAvE,mBAAkC,wCAAgB,AAAY,WAAD;AAC7D;;;;AANJ;;;;AASA,oBAAQ;;;AAE+D,gBAAnE,mBAAmB,uCAA0B,AAAY,WAAD;AACxD;;;;AAEiE,gBAAjE,mBAAmB,sCAAyB,AAAY,WAAD;AACvD;;;;AANJ;;;;AASS,0BAAY,AAAW,WAAA,CAAC,KAAK,EAAE,gBAAgB;AAClB,UAAxC,gBAAA,AAAc,aAAD,gBAAI,mBAAa,SAAS;AACkB,UAAzD,YAAY,sBAAS,SAAS,EAAE,oBAAc,SAAS;;AAEzD,aAAwB,YAAjB,AAAM,KAAD,aAAe,eAAe;AACP,QAAnC,QAAQ,AAAgB,eAAD;;AAIZ,sBAAY,sBAAS,KAAmC,aAA7B,OAAO,GAAG,WAAW,GAAG,OAAO,aAAa;AAC7E,+BAAqB;AAC5B,UAAI,AAAU,SAAD,GAAG;AACD,2BAAe,OAAO,GAAI,AAAU,SAAD,GAAG,SAAS;AAC1C,QAAlB,QAAQ;AACR,eAAO,KAAK,IAAI;AACJ,qBAAO,eAAS,KAAK;AAC/B,cAAS,aAAL,IAAI,IAAG;AACI,iCAAiB,OAAO,GAAU,YAAN,KAAK,EAAI,aAAa,IAAI,AAAU,SAAD,GAAG,kBAAkB,GAAI,AAAa,YAAD,gBAAG,IAAI;AACtG;;;;;;;;;;;;;;;;AAClB,oBAAQ,cAAQ,KAAK;;;AAEjB,sBAAO,AAAe,cAAD;AACU,gBAA/B,qBAAiB,cAAc;AAC/B;;;;AAEoB,gBAApB,qBAAiB;AACjB;;;;AAPJ;;;AASA,kBAAO,AAAe,0BAAG;AACJ;AACrB,gBAAuB,YAAnB,yBAAyC;AAC3C,sBAAQ;;;AAOH,kBALD,mBAAmB,sCACP,kCACA,cAAc,aACb,AAAY,WAAD,uBACX,AAAY,WAAD;AAExB;;;;AAOC,kBALD,mBAAmB,sCACP,AAAY,WAAD,qBACX,AAAY,WAAD,sBACV,mCACA,cAAc;AAE3B;;;;AAhBJ;;;;AAmBA,sBAAQ;;;AAMH,kBAJD,mBAAmB,sCACP,kCACA,cAAc,aACb,AAAY,WAAD;AAExB;;;;AAMC,kBAJD,mBAAmB,sCACP,AAAY,WAAD,sBACV,mCACA,cAAc;AAE3B;;;;AAdJ;;;;AAiBS,4BAAY,AAAW,WAAA,CAAC,KAAK,EAAE,gBAAgB;AAC7C,gCAAgB,mBAAa,SAAS;AACnD,kBAAqB,aAAd,aAAa,KAAI,cAAc;AACR,YAA9B,gBAAA,AAAc,aAAD,gBAAI,aAAa;AACM,YAApC,qBAAA,AAAmB,kBAAD,GAAI,cAAc;AACqB,YAAzD,YAAY,sBAAS,SAAS,EAAE,oBAAc,SAAS;;AAEpC,gCAAoC,wBAAF,eAAhB,AAAM,KAAD;AACT,UAAnC,QAAQ,AAAgB,eAAD;;;AAId,sBAAY,AAAQ,OAAD,IAAiB,YAAb,mBAA6B,0BAAM,WAAW,GAAG,aAAa;AAClG,YAAO,uCACK,SAAS,aACR,SAAS,iBACL,aAAa;IAEhC;;;AAIE,qBAAO;AACc,wBAAmB;AACxC,qBAAO,AASN;AARqB,+BAAmB,2CACxB,WAAW,2BACC;AAE3B,YAAI,gBAAgB,IAAI;AACA,UAAtB,WAAM,gBAAgB;;AAExB,cAAO;;AAGU,kBAAQ,8DAEZ,WAAW;AAGb,0BAAgB,AAAM,KAAD;AAC3B,uBAAa,AAAM,KAAD;AAClB,sBAAY,AAAM,KAAD;AACjB,gCAAsB;AAC7B,UAAuB,YAAnB,yBAAyC;AAChC,oBAAQ;AACZ,mCAAuB;AACvB,mCAAuB;AAC9B,eAAO,KAAK,IAAI;AACd,yBAAO,AAIN;AAHC,gBAAI,AAAa,qBAAG,MAClB,AAAgI,WAA1H,4BAAa;AACrB,kBAAO;;AAEK,yBAAW,AAAM,KAAD,uBAAmC,eAAZ,+BAAyB;AAC9E,cAAI,QAAQ,IAAI;AAC+C,YAA7D,sBAAsB,sBAAS,mBAAmB,EAAE,QAAQ;AAI3D,YAHD,uBAAuB,sBACrB,QAAQ,EACR,oBAAoB;AAKrB,YAHD,uBAAuB,sBACH,aAAlB,AAAM,AAAK,KAAN,6BAAe,QAAQ,GAC5B,oBAAoB;AAEsD,YAA5E,YAAY,sBAAS,AAAqB,oBAAD,GAAG,oBAAoB,EAAE,SAAS;;AAExD,gCAAoC,wBAAF,eAAhB,AAAM,KAAD;AACT,UAAnC,QAAQ,AAAgB,eAAD;;;AAK3B,cAAQ;;;AAEqD,UAAzD,YAAO,AAAY,WAAD,WAAW,gBAAK,UAAU,EAAE,SAAS;AAChC,UAAvB,aAAa,AAAK;AACK,UAAvB,YAAY,AAAK;AACjB;;;;AAEyD,UAAzD,YAAO,AAAY,WAAD,WAAW,gBAAK,SAAS,EAAE,UAAU;AAC/B,UAAxB,aAAa,AAAK;AACI,UAAtB,YAAY,AAAK;AACjB;;;;AAVJ;;;AAYa,4BAA6B,aAAX,UAAU,iBAAG,aAAa;AACd,MAA3C,kBAAY,sBAAS,KAAK,CAAC,eAAe;AAC7B,2BAAiB,sBAAS,KAAK,eAAe;AACzC;;;;;;;;;;;;;;;;AACA;;;;;;;;;;;;;;;;AAKP,yBAAe,YAA+D,MAA7D,sBAAgB,gBAAW,oBAAe,gCAA1C,OAAgE;AAC5F,cAAQ;;;AAEc,UAAlB,mBAAe;AACG,UAAlB,mBAAe;AACf;;;;AAE6B,UAA7B,mBAAe,cAAc;AACX,UAAlB,mBAAe;AACf;;;;AAEmC,UAAnC,mBAAe,AAAe,cAAD,GAAG;AACd,UAAlB,mBAAe;AACf;;;;AAEkB,UAAlB,mBAAe;AACwD,UAAvE,mBAA0B,aAAX,mBAAa,IAAI,AAAe,cAAD,IAAe,aAAX,mBAAa,KAAK;AACpE;;;;AAEiE,UAAjE,mBAA0B,aAAX,mBAAa,IAAI,AAAe,cAAD,gBAAG,mBAAa;AAC7B,UAAjC,mBAA4B,aAAb,wBAAe;AAC9B;;;;AAEuE,UAAvE,mBAA0B,aAAX,mBAAa,IAAI,AAAe,cAAD,IAAe,aAAX,mBAAa,KAAK;AACzC,UAA3B,mBAAe;AACf;;;;AAxBJ;;;AA4BO,8BAAoB,YAAY,GAAc,aAAX,UAAU,iBAAG,wBAAe;AAC3D,kBAAQ;AACnB,aAAO,KAAK,IAAI;AACO,8BAAoC,wBAAF,eAAhB,AAAM,KAAD;AAC/B;AACb,gBAAQ;;;;AAMsD,YAH1D,qBACqB,YADA,sBAAgB,qBAAS,iBAAY,oBAAe,yBAC5B,YAApB,2BAA0C,mCAC9C,MACU,aAAV,SAAS,iBAAG,oBAAc,AAAM,KAAD;AACpD;;;;AAEsE,YAAtE,qBAA+B,AAAM,aAAhB,SAAS,IAAG,MAAgC,aAA1B,oBAAc,AAAM,KAAD,UAAS;AACnE;;;;AAEwB,YAAxB,qBAAqB;AACrB;;;;AAEA,gBAAe,YAAX,kBAAmB;AACrB,oBAAO,AAAa,qBAAG;AACT,6BAAW,AAAM,KAAD,uBAAmC,eAAZ,+BAAyB;AAC9E,kBAAI,QAAQ,IAAI;AACqC,gBAAnD,qBAAqB,AAAoB,mBAAD,gBAAG,QAAQ;;AAE3B,gBAAxB,qBAAqB;;AAEC,cAAxB,qBAAqB;;AAEvB;;;;AAzBJ;;;AA2BA,YAAI,YAAY,EACd,AAA6C,oBAA3B,aAAlB,iBAAiB,iBAAI,mBAAa,AAAM,KAAD;AACzC,gBAAQ;;;AAEkE,YAAtE,AAAgB,eAAD,UAAU,kBAAO,iBAAiB,EAAE,kBAAkB;AACrE;;;;AAEsE,YAAtE,AAAgB,eAAD,UAAU,kBAAO,kBAAkB,EAAE,iBAAiB;AACrE;;;;AANJ;;;AAQA,YAAI,YAAY;AACmB,UAAjC,oBAAkB,aAAlB,iBAAiB,iBAAI;;AAEuC,UAA5D,oBAAkB,aAAlB,iBAAiB,KAA6B,aAAzB,mBAAa,AAAM,KAAD,uBAAS;;AAEf,QAAnC,QAAQ,AAAgB,eAAD;;IAE3B;;UAGsC;UAA0B;;AAC9D,YAAO,6BAAuB,MAAM,aAAY,QAAQ;IAC1D;UAG2B,SAAgB;UAAhB;UAAgB;AACzC,qBAAK;AAC0B,QAA7B,kBAAa,OAAO,EAAE,MAAM;AAC5B;;AAIF,oBAAI,AAAK,oBACP;AAEF,UAAiB,YAAb,mBAAqB;AACF,QAArB,uBAAiB;AACY,QAA7B,kBAAa,OAAO,EAAE,MAAM;;AAI6B,QADzD,uBAAiB,AAAQ,OAAD,cAAc,uBAAkB,MAAM,EAAS,AAAK,oBAAE,sBAAM,sCAClE,6BAAwB;;AAG5C,qBAAO,AAwCN;AArC6B,iCAAsC,+BAChE,oCACE,AACF,8BADoB,sBAAW,qCAAwB,oBAAU,MAEjE,oCAAgB,AACd,8BAAkB,sBAAW,0CAC7B,uEACA,mEAAuD,sBAAW,MAEpE,6BAAS,AACP,wEACA,wCAA4B,sBAAW,kCACvC,wDAEF,6BAAS,AACP,2EACA,2EACA,2EACA,2EACA;AAOO;AACX,gBAAQ;;;AAEqE,YAAzE,oBAAyB,qBAAS,KAAK,KAAgB,aAAX,AAAK,mBAAiB,eAAT,kBAAY;AACrE;;;;AAE0E,YAA1E,oBAAyB,qBAAS,KAAK,KAAK,KAAiB,aAAZ,AAAK,oBAAkB,eAAT;AAC/D;;;;AANJ;;;AAQiH,QAAjH,4BAAuB,OAAO,EAAE,MAAM,EAAS,AAAK,oBAAE,YAAM,iBAAiB,kBAAiB,kBAAkB;AAChH,cAAO;;IAEX;;6BAKgD;;AAAU,6CAAsB,AAAK,oBAAE,aAAO;IAAI;;AAIzF,mBAAe;AACtB,UAAI,mBAAa,kBAAQ,qBACvB,AAAwB,SAAjB,aAAP,MAAM,IAAI;AACZ,YAAO,OAAM;IACf;;UAGqD;AACd,MAA/B,0BAAoB,UAAU;AACsB,MAA1D,AAAW,UAAD,KAAK,+BAAmB,aAAa;AACwC,MAAvF,AAAW,UAAD,KAAK,4CAAgC,qBAAqB;AACI,MAAxE,AAAW,UAAD,KAAK,uCAA2B,gBAAgB;AACgC,MAA1F,AAAW,UAAD,KAAK,6CAAiC,sBAAsB;AACyB,MAA/F,AAAW,UAAD,KAAK,wCAA4B,iBAAiB,mCAA6B;AACkB,MAA3G,AAAW,UAAD,KAAK,4CAAgC,qBAAqB,uCAAiC;AACT,MAA5F,AAAW,UAAD,KAAK,uCAA2B,gBAAgB,kCAA4B;IACxF;;;QA/2BmB;QACZ;;QACQ;;QACK;;QACC;;QACJ;QACG;;QACJ;QACT;;IAmMC;IASH,sBAAqB;IAooBX;UA/0BH,AAAU,SAAD,IAAI;UACb,AAAkB,iBAAD,IAAI;UACrB,AAAa,YAAD,IAAI;UAChB,AAAmB,kBAAD,IAAI;UACtB,AAAa,YAAD,IAAI;IACZ,mBAAE,SAAS;IACH,2BAAE,iBAAiB;IACxB,sBAAE,YAAY;IACR,4BAAE,kBAAkB;IACzB,uBAAE,aAAa;IACX,2BAAE,iBAAiB;IACxB,sBAAE,YAAY;IACd,sBAAE,YAAY;AAtBjC;AAuBkB,IAAhB,YAAO,QAAQ;EACjB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAk2Ba;;;;;;IACA;;;;;;IACA;;;;;;;;QAPG;;QACA;;QACA;;IAFA;IACA;IACA;;EACd;;;;;;;;;;;;;mDAz8BuB,WAA0B,eAAkC;QAA5D;AACzB,UAAO,AAAU,SAAD,IAAI;AAEpB,YAAQ,SAAS;;;AAEb,gBAAQ,aAAa;;;AAEjB,kBAAO;;;;AAEP,kBAAO;;;;AAEP,kBAAO;;;;AANX;;;;;;AASA,gBAAQ,iBAAiB;;;AAErB,kBAAO;;;;AAEP,kBAAO;;;;AAEP,kBAAO;;;;AANX;;;;;;AAXJ;;;EAoBF","file":"../../../../../../../../../../packages/flutter/src/rendering/flex.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__flex: flex$
  };
}));

//# sourceMappingURL=flex.dart.lib.js.map
