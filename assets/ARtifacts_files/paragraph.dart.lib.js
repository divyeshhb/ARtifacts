define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/multitap.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/strut_style.dart'], (function load__packages__flutter__src__rendering__paragraph_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__basic_types$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__multitap$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__strut_style$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const placeholder_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__placeholder_span;
  const inline_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__inline_span;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const multitap = packages__flutter__src__gestures__multitap$46dart.src__gestures__multitap;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const strut_style = packages__flutter__src__painting__strut_style$46dart.src__painting__strut_style;
  var paragraph = Object.create(dart.library);
  var $join = dartx.join;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $abs = dartx.abs;
  var $any = dartx.any;
  var $isNotEmpty = dartx.isNotEmpty;
  var $elementAt = dartx.elementAt;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $skip = dartx.skip;
  var $floorToDouble = dartx.floorToDouble;
  var $ceilToDouble = dartx.ceilToDouble;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var TextOverflowL = () => (TextOverflowL = dart.constFn(dart.legacy(paragraph.TextOverflow)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var JSArrayOfPlaceholderSpan = () => (JSArrayOfPlaceholderSpan = dart.constFn(_interceptors.JSArray$(placeholder_span.PlaceholderSpan)))();
  var InlineSpanTobool = () => (InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))();
  var ListOfPlaceholderDimensions = () => (ListOfPlaceholderDimensions = dart.constFn(core.List$(text_painter.PlaceholderDimensions)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var OffsetN = () => (OffsetN = dart.constFn(dart.nullable(ui.Offset)))();
  var BoxHitTestResultAndOffsetNTobool = () => (BoxHitTestResultAndOffsetNTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, OffsetN()])))();
  var JSArrayOfPlaceholderDimensions = () => (JSArrayOfPlaceholderDimensions = dart.constFn(_interceptors.JSArray$(text_painter.PlaceholderDimensions)))();
  var JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  var PaintingContextAndOffsetTovoid = () => (PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))();
  var JSArrayOfInlineSpanSemanticsInformation = () => (JSArrayOfInlineSpanSemanticsInformation = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpanSemanticsInformation)))();
  var InlineSpanSemanticsInformationTobool = () => (InlineSpanSemanticsInformationTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpanSemanticsInformation])))();
  var JSArrayOfSemanticsNode = () => (JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))();
  var ListQueueOfSemanticsNode = () => (ListQueueOfSemanticsNode = dart.constFn(collection.ListQueue$(semantics.SemanticsNode)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var EnumPropertyOfTextAlign = () => (EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var EnumPropertyOfTextOverflow = () => (EnumPropertyOfTextOverflow = dart.constFn(diagnostics.EnumProperty$(paragraph.TextOverflow)))();
  var DiagnosticsPropertyOfLocale = () => (DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/paragraph.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/paragraph.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: paragraph.TextOverflow.prototype,
        [_name$]: "TextOverflow.clip",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: paragraph.TextOverflow.prototype,
        [_name$]: "TextOverflow.fade",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: paragraph.TextOverflow.prototype,
        [_name$]: "TextOverflow.ellipsis",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: paragraph.TextOverflow.prototype,
        [_name$]: "TextOverflow.visible",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], TextOverflowL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.start",
        index: 4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_name$0]: "TextWidthBasis.parent",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.identical",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.metadata",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.paint",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.layout",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.baseline",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.aboveBaseline",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.belowBaseline",
        index: 2
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.top",
        index: 3
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.middle",
        index: 5
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.bottom",
        index: 4
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 16777215
      });
    }
  }, false);
  var _name$ = dart.privateName(paragraph, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  paragraph.TextOverflow = class TextOverflow extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (paragraph.TextOverflow.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 25, 6, "index");
    if (_name == null) dart.nullFailed(L0, 25, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = paragraph.TextOverflow.prototype;
  dart.addTypeTests(paragraph.TextOverflow);
  dart.addTypeCaches(paragraph.TextOverflow);
  dart.setLibraryUri(paragraph.TextOverflow, L1);
  dart.setFieldSignature(paragraph.TextOverflow, () => ({
    __proto__: dart.getFields(paragraph.TextOverflow.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(paragraph.TextOverflow, ['toString']);
  paragraph.TextOverflow.clip = C0 || CT.C0;
  paragraph.TextOverflow.fade = C1 || CT.C1;
  paragraph.TextOverflow.ellipsis = C2 || CT.C2;
  paragraph.TextOverflow.visible = C3 || CT.C3;
  paragraph.TextOverflow.values = C4 || CT.C4;
  var scale = dart.privateName(paragraph, "TextParentData.scale");
  paragraph.TextParentData = class TextParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get scale() {
      return this[scale];
    }
    set scale(value) {
      this[scale] = value;
    }
    toString() {
      let values = (() => {
        let t0 = JSArrayOfString().of(["offset=" + dart.str(this.offset)]);
        if (this.scale != null) t0.push("scale=" + dart.str(this.scale));
        t0.push(super.toString());
        return t0;
      })();
      return values[$join]("; ");
    }
  };
  (paragraph.TextParentData.new = function() {
    this[scale] = null;
    paragraph.TextParentData.__proto__.new.call(this);
    ;
  }).prototype = paragraph.TextParentData.prototype;
  dart.addTypeTests(paragraph.TextParentData);
  dart.addTypeCaches(paragraph.TextParentData);
  dart.setLibraryUri(paragraph.TextParentData, L1);
  dart.setFieldSignature(paragraph.TextParentData, () => ({
    __proto__: dart.getFields(paragraph.TextParentData.__proto__),
    scale: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(paragraph.TextParentData, ['toString']);
  var index$ = dart.privateName(paragraph, "PlaceholderSpanIndexSemanticsTag.index");
  paragraph.PlaceholderSpanIndexSemanticsTag = class PlaceholderSpanIndexSemanticsTag extends semantics.SemanticsTag {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    _equals(other) {
      if (other == null) return false;
      return paragraph.PlaceholderSpanIndexSemanticsTag.is(other) && other.index == this.index;
    }
    get hashCode() {
      return ui.hashValues(dart.wrapType(paragraph.PlaceholderSpanIndexSemanticsTag), this.index);
    }
  };
  (paragraph.PlaceholderSpanIndexSemanticsTag.new = function(index) {
    if (index == null) dart.nullFailed(L0, 68, 47, "index");
    this[index$] = index;
    paragraph.PlaceholderSpanIndexSemanticsTag.__proto__.new.call(this, "PlaceholderSpanIndexSemanticsTag(" + dart.str(index) + ")");
    ;
  }).prototype = paragraph.PlaceholderSpanIndexSemanticsTag.prototype;
  dart.addTypeTests(paragraph.PlaceholderSpanIndexSemanticsTag);
  dart.addTypeCaches(paragraph.PlaceholderSpanIndexSemanticsTag);
  dart.setLibraryUri(paragraph.PlaceholderSpanIndexSemanticsTag, L1);
  dart.setFieldSignature(paragraph.PlaceholderSpanIndexSemanticsTag, () => ({
    __proto__: dart.getFields(paragraph.PlaceholderSpanIndexSemanticsTag.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(paragraph.PlaceholderSpanIndexSemanticsTag, ['_equals']);
  dart.defineExtensionAccessors(paragraph.PlaceholderSpanIndexSemanticsTag, ['hashCode']);
  var _name = dart.privateName(ui, "_name");
  var C5;
  var _name$0 = dart.privateName(text_painter, "_name");
  var C6;
  var __RenderParagraph__placeholderSpans = dart.privateName(paragraph, "_#RenderParagraph#_placeholderSpans");
  var __RenderParagraph__placeholderSpans_isSet = dart.privateName(paragraph, "_#RenderParagraph#_placeholderSpans#isSet");
  var _needsClipping = dart.privateName(paragraph, "_needsClipping");
  var _overflowShader = dart.privateName(paragraph, "_overflowShader");
  var _placeholderDimensions = dart.privateName(paragraph, "_placeholderDimensions");
  var _semanticsInfo = dart.privateName(paragraph, "_semanticsInfo");
  var _cachedChildNodes = dart.privateName(paragraph, "_cachedChildNodes");
  var _softWrap = dart.privateName(paragraph, "_softWrap");
  var _overflow = dart.privateName(paragraph, "_overflow");
  var _textPainter = dart.privateName(paragraph, "_textPainter");
  var _extractPlaceholderSpans = dart.privateName(paragraph, "_extractPlaceholderSpans");
  var _name$1 = dart.privateName(basic_types, "_name");
  var C7;
  var C8;
  var C9;
  var C10;
  var _placeholderSpans = dart.privateName(paragraph, "_placeholderSpans");
  var _canComputeIntrinsics = dart.privateName(paragraph, "_canComputeIntrinsics");
  var _computeChildrenWidthWithMinIntrinsics = dart.privateName(paragraph, "_computeChildrenWidthWithMinIntrinsics");
  var _layoutText = dart.privateName(paragraph, "_layoutText");
  var _computeChildrenWidthWithMaxIntrinsics = dart.privateName(paragraph, "_computeChildrenWidthWithMaxIntrinsics");
  var _computeChildrenHeightWithMinIntrinsics = dart.privateName(paragraph, "_computeChildrenHeightWithMinIntrinsics");
  var _computeIntrinsicHeight = dart.privateName(paragraph, "_computeIntrinsicHeight");
  var _layoutTextWithConstraints = dart.privateName(paragraph, "_layoutTextWithConstraints");
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var _layoutChildren = dart.privateName(paragraph, "_layoutChildren");
  var _setParentData = dart.privateName(paragraph, "_setParentData");
  var _canComputeDryLayout = dart.privateName(paragraph, "_canComputeDryLayout");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C17;
  var C18;
  var C19;
  var Color_value = dart.privateName(ui, "Color.value");
  var C20;
  var C21;
  var _combineSemanticsInfo = dart.privateName(paragraph, "_combineSemanticsInfo");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, paragraph.TextParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, paragraph.TextParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, paragraph.TextParentData));
  const RenderBox_RelayoutWhenSystemFontsChangeMixin$36 = class RenderBox_RelayoutWhenSystemFontsChangeMixin extends RenderBox_RenderBoxContainerDefaultsMixin$36 {};
  (RenderBox_RelayoutWhenSystemFontsChangeMixin$36.new = function() {
    RenderBox_RelayoutWhenSystemFontsChangeMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RelayoutWhenSystemFontsChangeMixin$36.prototype;
  dart.applyMixin(RenderBox_RelayoutWhenSystemFontsChangeMixin$36, object.RelayoutWhenSystemFontsChangeMixin);
  paragraph.RenderParagraph = class RenderParagraph extends RenderBox_RelayoutWhenSystemFontsChangeMixin$36 {
    setupParentData(child) {
      box.RenderBox.as(child);
      if (child == null) dart.nullFailed(L0, 135, 34, "child");
      if (!paragraph.TextParentData.is(child.parentData)) child.parentData = new paragraph.TextParentData.new();
    }
    get text() {
      return dart.nullCheck(this[_textPainter].text);
    }
    set text(value) {
      if (value == null) dart.nullFailed(L0, 144, 23, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 145, 12, "value != null");
      switch (dart.nullCheck(this[_textPainter].text).compareTo(value)) {
        case C7 || CT.C7:
        case C8 || CT.C8:
        {
          return;
        }
        case C9 || CT.C9:
        {
          this[_textPainter].text = value;
          this[_extractPlaceholderSpans](value);
          this.markNeedsPaint();
          this.markNeedsSemanticsUpdate();
          break;
        }
        case C10 || CT.C10:
        {
          this[_textPainter].text = value;
          this[_overflowShader] = null;
          this[_extractPlaceholderSpans](value);
          this.markNeedsLayout();
          break;
        }
        default:
        {
          dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
        }
      }
    }
    get [_placeholderSpans]() {
      let t1;
      return dart.test(this[__RenderParagraph__placeholderSpans_isSet]) ? (t1 = this[__RenderParagraph__placeholderSpans], t1) : dart.throw(new _internal.LateError.fieldNI("_placeholderSpans"));
    }
    set [_placeholderSpans](t1) {
      if (t1 == null) dart.nullFailed(L0, 165, 30, "null");
      this[__RenderParagraph__placeholderSpans_isSet] = true;
      this[__RenderParagraph__placeholderSpans] = t1;
    }
    [_extractPlaceholderSpans](span) {
      if (span == null) dart.nullFailed(L0, 166, 44, "span");
      this[_placeholderSpans] = JSArrayOfPlaceholderSpan().of([]);
      span.visitChildren(dart.fn(span => {
        if (span == null) dart.nullFailed(L0, 168, 36, "span");
        if (placeholder_span.PlaceholderSpan.is(span)) {
          this[_placeholderSpans][$add](span);
        }
        return true;
      }, InlineSpanTobool()));
    }
    get textAlign() {
      return this[_textPainter].textAlign;
    }
    set textAlign(value) {
      if (value == null) dart.nullFailed(L0, 178, 27, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 179, 12, "value != null");
      if (dart.equals(this[_textPainter].textAlign, value)) return;
      this[_textPainter].textAlign = value;
      this.markNeedsPaint();
    }
    get textDirection() {
      return dart.nullCheck(this[_textPainter].textDirection);
    }
    set textDirection(value) {
      if (value == null) dart.nullFailed(L0, 200, 35, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 201, 12, "value != null");
      if (dart.equals(this[_textPainter].textDirection, value)) return;
      this[_textPainter].textDirection = value;
      this.markNeedsLayout();
    }
    get softWrap() {
      return this[_softWrap];
    }
    set softWrap(value) {
      if (value == null) dart.nullFailed(L0, 217, 21, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 218, 12, "value != null");
      if (dart.equals(this[_softWrap], value)) return;
      this[_softWrap] = value;
      this.markNeedsLayout();
    }
    get overflow() {
      return this[_overflow];
    }
    set overflow(value) {
      if (value == null) dart.nullFailed(L0, 228, 29, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 229, 12, "value != null");
      if (dart.equals(this[_overflow], value)) return;
      this[_overflow] = value;
      this[_textPainter].ellipsis = dart.equals(value, paragraph.TextOverflow.ellipsis) ? "…" : null;
      this.markNeedsLayout();
    }
    get textScaleFactor() {
      return this[_textPainter].textScaleFactor;
    }
    set textScaleFactor(value) {
      if (value == null) dart.nullFailed(L0, 242, 30, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 243, 12, "value != null");
      if (this[_textPainter].textScaleFactor == value) return;
      this[_textPainter].textScaleFactor = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get maxLines() {
      return this[_textPainter].maxLines;
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, L0, 258, 12, "value == null || value > 0");
      if (this[_textPainter].maxLines == value) return;
      this[_textPainter].maxLines = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get locale() {
      return this[_textPainter].locale;
    }
    set locale(value) {
      if (dart.equals(this[_textPainter].locale, value)) return;
      this[_textPainter].locale = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get strutStyle() {
      return this[_textPainter].strutStyle;
    }
    set strutStyle(value) {
      if (dart.equals(this[_textPainter].strutStyle, value)) return;
      this[_textPainter].strutStyle = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get textWidthBasis() {
      return this[_textPainter].textWidthBasis;
    }
    set textWidthBasis(value) {
      if (value == null) dart.nullFailed(L0, 297, 37, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 298, 12, "value != null");
      if (dart.equals(this[_textPainter].textWidthBasis, value)) return;
      this[_textPainter].textWidthBasis = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get textHeightBehavior() {
      return this[_textPainter].textHeightBehavior;
    }
    set textHeightBehavior(value) {
      if (dart.equals(this[_textPainter].textHeightBehavior, value)) return;
      this[_textPainter].textHeightBehavior = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 317, 42, "height");
      if (!dart.test(this[_canComputeIntrinsics]())) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMinIntrinsics](height);
      this[_layoutText]();
      return this[_textPainter].minIntrinsicWidth;
    }
    computeMaxIntrinsicWidth(height) {
      if (height == null) dart.nullFailed(L0, 327, 42, "height");
      if (!dart.test(this[_canComputeIntrinsics]())) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMaxIntrinsics](height);
      this[_layoutText]();
      return this[_textPainter].maxIntrinsicWidth;
    }
    [_computeIntrinsicHeight](width) {
      if (width == null) dart.nullFailed(L0, 336, 41, "width");
      if (!dart.test(this[_canComputeIntrinsics]())) {
        return 0.0;
      }
      this[_computeChildrenHeightWithMinIntrinsics](width);
      this[_layoutText]({minWidth: width, maxWidth: width});
      return this[_textPainter].height;
    }
    computeMinIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 346, 43, "width");
      return this[_computeIntrinsicHeight](width);
    }
    computeMaxIntrinsicHeight(width) {
      if (width == null) dart.nullFailed(L0, 351, 43, "width");
      return this[_computeIntrinsicHeight](width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (baseline == null) dart.nullFailed(L0, 356, 55, "baseline");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 357, 12, "!debugNeedsLayout");
      if (!(this.constraints != null)) dart.assertFailed(null, L0, 358, 12, "constraints != null");
      if (!dart.test(this.constraints.debugAssertIsValid())) dart.assertFailed(null, L0, 359, 12, "constraints.debugAssertIsValid()");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].computeDistanceToActualBaseline(ui.TextBaseline.alphabetic);
    }
    [_canComputeIntrinsics]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C11 || CT.C11:
          case C12 || CT.C12:
          case C13 || CT.C13:
          {
            {
              if (!dart.test(object.RenderObject.debugCheckingIntrinsics)) dart.assertFailed("Intrinsics are not available for PlaceholderAlignment.baseline, " + "PlaceholderAlignment.aboveBaseline, or PlaceholderAlignment.belowBaseline,", L0, 379, 18, "RenderObject.debugCheckingIntrinsics");
              return false;
            }
          }
          case C14 || CT.C14:
          case C15 || CT.C15:
          case C16 || CT.C16:
          {
            {
              continue;
            }
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      return true;
    }
    [_computeChildrenWidthWithMaxIntrinsics](height) {
      if (height == null) dart.nullFailed(L0, 394, 54, "height");
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty, {growable: false});
      let childIndex = 0;
      while (child != null) {
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(child.getMaxIntrinsicWidth(1 / 0), 0.0), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenWidthWithMinIntrinsics](height) {
      if (height == null) dart.nullFailed(L0, 412, 54, "height");
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty, {growable: false});
      let childIndex = 0;
      while (child != null) {
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(child.getMinIntrinsicWidth(1 / 0), 0.0), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenHeightWithMinIntrinsics](width) {
      if (width == null) dart.nullFailed(L0, 430, 55, "width");
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty, {growable: false});
      let childIndex = 0;
      width = dart.notNull(width) / dart.notNull(this.textScaleFactor);
      while (child != null) {
        let size = child.getDryLayout(new box.BoxConstraints.new({maxWidth: width}));
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: size, alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    hitTestSelf(position) {
      if (position == null) dart.nullFailed(L0, 451, 27, "position");
      return true;
    }
    hitTestChildren(result, opts) {
      let t2;
      if (result == null) dart.nullFailed(L0, 454, 41, "result");
      let position = opts && 'position' in opts ? opts.position : null;
      if (position == null) dart.nullFailed(L0, 454, 67, "position");
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.notNull(dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length])) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        let transform = (t2 = vector_math_64.Matrix4.translationValues(textParentData.offset.dx, textParentData.offset.dy, 0.0), (() => {
          t2.scale(textParentData.scale, textParentData.scale, textParentData.scale);
          return t2;
        })());
        let isHit = result.addWithPaintTransform({transform: transform, position: position, hitTest: dart.fn((result, transformed) => {
            if (result == null) dart.nullFailed(L0, 471, 36, "result");
            if (!dart.test(dart.fn(() => {
              let manualPosition = position['-'](textParentData.offset)['/'](dart.nullCheck(textParentData.scale));
              return (dart.notNull(dart.nullCheck(transformed).dx) - dart.notNull(manualPosition.dx))[$abs]() < 1e-10 && (dart.notNull(transformed.dy) - dart.notNull(manualPosition.dy))[$abs]() < 1e-10;
            }, VoidTobool())())) dart.assertFailed(null, L0, 472, 18, "() {\n            final Offset manualPosition = (position - textParentData.offset) / textParentData.scale!;\n            return (transformed!.dx - manualPosition.dx).abs() < precisionErrorTolerance\n              && (transformed.dy - manualPosition.dy).abs() < precisionErrorTolerance;\n          }()");
            return dart.nullCheck(child).hitTest(result, {position: dart.nullCheck(transformed)});
          }, BoxHitTestResultAndOffsetNTobool())});
        if (dart.test(isHit)) {
          return true;
        }
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      return false;
    }
    handleEvent(event, entry) {
      let t2;
      if (event == null) dart.nullFailed(L0, 490, 33, "event");
      box.BoxHitTestEntry.as(entry);
      if (entry == null) dart.nullFailed(L0, 490, 56, "entry");
      if (!dart.test(this.debugHandleEvent(event, entry))) dart.assertFailed(null, L0, 491, 12, "debugHandleEvent(event, entry)");
      if (!events.PointerDownEvent.is(event)) return;
      this[_layoutTextWithConstraints](this.constraints);
      let offset = entry.localPosition;
      let position = this[_textPainter].getPositionForOffset(offset);
      let span = dart.nullCheck(this[_textPainter].text).getSpanForPosition(position);
      if (span == null) {
        return;
      }
      if (text_span.TextSpan.is(span)) {
        t2 = span.recognizer;
        t2 == null ? null : t2.addPointer(event);
      }
    }
    get debugHasOverflowShader() {
      return this[_overflowShader] != null;
    }
    [_layoutText](opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      if (minWidth == null) dart.nullFailed(L0, 516, 29, "minWidth");
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      if (maxWidth == null) dart.nullFailed(L0, 516, 52, "maxWidth");
      let widthMatters = dart.test(this.softWrap) || dart.equals(this.overflow, paragraph.TextOverflow.ellipsis);
      this[_textPainter].layout({minWidth: minWidth, maxWidth: widthMatters ? maxWidth : 1 / 0});
    }
    systemFontsDidChange() {
      super.systemFontsDidChange();
      this[_textPainter].markNeedsLayout();
    }
    [_layoutTextWithConstraints](constraints) {
      if (constraints == null) dart.nullFailed(L0, 539, 50, "constraints");
      this[_textPainter].setPlaceholderDimensions(this[_placeholderDimensions]);
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
    }
    [_layoutChildren](constraints, opts) {
      if (constraints == null) dart.nullFailed(L0, 548, 62, "constraints");
      let dry = opts && 'dry' in opts ? opts.dry : false;
      if (dry == null) dart.nullFailed(L0, 548, 81, "dry");
      if (this.childCount === 0) {
        return JSArrayOfPlaceholderDimensions().of([]);
      }
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty, {growable: false});
      let childIndex = 0;
      let boxConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
      boxConstraints = boxConstraints['/'](this.textScaleFactor);
      while (child != null) {
        let baselineOffset = null;
        let childSize = null;
        if (!dart.test(dry)) {
          child.layout(boxConstraints, {parentUsesSize: true});
          childSize = child.size;
          switch (this[_placeholderSpans][$_get](childIndex).alignment) {
            case C11 || CT.C11:
            {
              {
                baselineOffset = child.getDistanceToBaseline(dart.nullCheck(this[_placeholderSpans][$_get](childIndex).baseline));
                break;
              }
            }
            default:
            {
              {
                baselineOffset = null;
                break;
              }
            }
          }
        } else {
          if (!!dart.equals(this[_placeholderSpans][$_get](childIndex).alignment, ui.PlaceholderAlignment.baseline)) dart.assertFailed(null, L0, 584, 16, "_placeholderSpans[childIndex].alignment != ui.PlaceholderAlignment.baseline");
          childSize = child.getDryLayout(boxConstraints);
        }
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: childSize, alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline, baselineOffset: baselineOffset}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      return placeholderDimensions;
    }
    [_setParentData]() {
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.notNull(dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length])) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        textParentData.offset = new ui.Offset.new(dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$_get](childIndex).left, dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$_get](childIndex).top);
        textParentData.scale = dart.nullCheck(this[_textPainter].inlinePlaceholderScales)[$_get](childIndex);
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
    }
    [_canComputeDryLayout]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C11 || CT.C11:
          case C12 || CT.C12:
          case C13 || CT.C13:
          {
            {
              return false;
            }
          }
          case C14 || CT.C14:
          case C15 || CT.C15:
          case C16 || CT.C16:
          {
            {
              continue;
            }
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
      return true;
    }
    computeDryLayout(constraints) {
      if (constraints == null) dart.nullFailed(L0, 638, 40, "constraints");
      if (!dart.test(this[_canComputeDryLayout]())) {
        if (!dart.test(this.debugCannotComputeDryLayout({reason: "Dry layout not available for alignments that require baseline."}))) dart.assertFailed(null, L0, 640, 14, "debugCannotComputeDryLayout(\n        reason: 'Dry layout not available for alignments that require baseline.',\n      )");
        return C17 || CT.C17;
      }
      this[_textPainter].setPlaceholderDimensions(this[_layoutChildren](constraints, {dry: true}));
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
      return constraints.constrain(this[_textPainter].size);
    }
    performLayout() {
      let t2;
      let constraints = this.constraints;
      this[_placeholderDimensions] = this[_layoutChildren](constraints);
      this[_layoutTextWithConstraints](constraints);
      this[_setParentData]();
      let textSize = this[_textPainter].size;
      let textDidExceedMaxLines = this[_textPainter].didExceedMaxLines;
      this.size = constraints.constrain(textSize);
      let didOverflowHeight = dart.notNull(this.size.height) < dart.notNull(textSize.height) || dart.test(textDidExceedMaxLines);
      let didOverflowWidth = dart.notNull(this.size.width) < dart.notNull(textSize.width);
      let hasVisualOverflow = didOverflowWidth || didOverflowHeight;
      if (hasVisualOverflow) {
        switch (this[_overflow]) {
          case C3 || CT.C3:
          {
            this[_needsClipping] = false;
            this[_overflowShader] = null;
            break;
          }
          case C0 || CT.C0:
          case C2 || CT.C2:
          {
            this[_needsClipping] = true;
            this[_overflowShader] = null;
            break;
          }
          case C1 || CT.C1:
          {
            if (!(this.textDirection != null)) dart.assertFailed(null, L0, 686, 18, "textDirection != null");
            this[_needsClipping] = true;
            let fadeSizePainter = (t2 = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({style: dart.nullCheck(this[_textPainter].text).style, text: "…"}), textDirection: this.textDirection, textScaleFactor: this.textScaleFactor, locale: this.locale}), (() => {
              t2.layout();
              return t2;
            })());
            if (didOverflowWidth) {
              let fadeEnd = null;
              let fadeStart = null;
              switch (this.textDirection) {
                case C18 || CT.C18:
                {
                  fadeEnd = 0.0;
                  fadeStart = fadeSizePainter.width;
                  break;
                }
                case C19 || CT.C19:
                {
                  fadeEnd = this.size.width;
                  fadeStart = dart.notNull(fadeEnd) - dart.notNull(fadeSizePainter.width);
                  break;
                }
                default:
                {
                  dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
                }
              }
              this[_overflowShader] = ui.Gradient.linear(new ui.Offset.new(fadeStart, 0.0), new ui.Offset.new(fadeEnd, 0.0), JSArrayOfColor().of([C20 || CT.C20, C21 || CT.C21]));
            } else {
              let fadeEnd = this.size.height;
              let fadeStart = dart.notNull(fadeEnd) - dart.notNull(fadeSizePainter.height) / 2.0;
              this[_overflowShader] = ui.Gradient.linear(new ui.Offset.new(0.0, fadeStart), new ui.Offset.new(0.0, fadeEnd), JSArrayOfColor().of([C20 || CT.C20, C21 || CT.C21]));
            }
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      } else {
        this[_needsClipping] = false;
        this[_overflowShader] = null;
      }
    }
    paint(context, offset) {
      let t2;
      if (context == null) dart.nullFailed(L0, 729, 30, "context");
      if (offset == null) dart.nullFailed(L0, 729, 46, "offset");
      this[_layoutTextWithConstraints](this.constraints);
      if (!dart.test(dart.fn(() => {
        let t2;
        if (dart.test(debug.debugRepaintTextRainbowEnabled)) {
          let paint = (t2 = ui.Paint.new(), (() => {
            t2.color = debug.debugCurrentRepaintColor.toColor();
            return t2;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, L0, 742, 12, "() {\n      if (debugRepaintTextRainbowEnabled) {\n        final Paint paint = Paint()\n          ..color = debugCurrentRepaintColor.toColor();\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
      if (dart.test(this[_needsClipping])) {
        let bounds = offset['&'](this.size);
        if (this[_overflowShader] != null) {
          context.canvas.saveLayer(bounds, ui.Paint.new());
        } else {
          context.canvas.save();
        }
        context.canvas.clipRect(bounds);
      }
      this[_textPainter].paint(context.canvas, offset);
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.notNull(dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length])) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        let scale = dart.nullCheck(textParentData.scale);
        context.pushTransform(this.needsCompositing, offset['+'](textParentData.offset), vector_math_64.Matrix4.diagonal3Values(scale, scale, scale), dart.fn((context, offset) => {
          if (context == null) dart.nullFailed(L0, 778, 26, "context");
          if (offset == null) dart.nullFailed(L0, 778, 42, "offset");
          context.paintChild(dart.nullCheck(child), offset);
        }, PaintingContextAndOffsetTovoid()));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      if (dart.test(this[_needsClipping])) {
        if (this[_overflowShader] != null) {
          context.canvas.translate(offset.dx, offset.dy);
          let paint = (t2 = ui.Paint.new(), (() => {
            t2.blendMode = ui.BlendMode.modulate;
            t2.shader = this[_overflowShader];
            return t2;
          })());
          context.canvas.drawRect(ui.Offset.zero['&'](this.size), paint);
        }
        context.canvas.restore();
      }
    }
    getOffsetForCaret(position, caretPrototype) {
      if (position == null) dart.nullFailed(L0, 803, 41, "position");
      if (caretPrototype == null) dart.nullFailed(L0, 803, 56, "caretPrototype");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 804, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getOffsetForCaret(position, caretPrototype);
    }
    getFullHeightForCaret(position) {
      if (position == null) dart.nullFailed(L0, 812, 46, "position");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 813, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getFullHeightForCaret(position, ui.Rect.zero);
    }
    getBoxesForSelection(selection) {
      if (selection == null) dart.nullFailed(L0, 825, 55, "selection");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 826, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getBoxesForSelection(selection);
    }
    getPositionForOffset(offset) {
      if (offset == null) dart.nullFailed(L0, 834, 44, "offset");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 835, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (position == null) dart.nullFailed(L0, 849, 42, "position");
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 850, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getWordBoundary(position);
    }
    get textSize() {
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, L0, 865, 12, "!debugNeedsLayout");
      return this[_textPainter].size;
    }
    [_combineSemanticsInfo]() {
      let t2;
      if (!(this[_semanticsInfo] != null)) dart.assertFailed(null, L0, 876, 12, "_semanticsInfo != null");
      let combined = JSArrayOfInlineSpanSemanticsInformation().of([]);
      let workingText = "";
      let workingLabel = null;
      for (let info of dart.nullCheck(this[_semanticsInfo])) {
        if (dart.test(info.requiresOwnNode)) {
          combined[$add](new inline_span.InlineSpanSemanticsInformation.new(workingText, {semanticsLabel: (t2 = workingLabel, t2 == null ? workingText : t2)}));
          workingText = "";
          workingLabel = null;
          combined[$add](info);
        } else {
          workingText = workingText + dart.notNull(info.text);
          workingLabel == null ? workingLabel = "" : null;
          if (info.semanticsLabel != null) {
            workingLabel = dart.notNull(workingLabel) + dart.nullCheck(info.semanticsLabel);
          } else {
            workingLabel = dart.notNull(workingLabel) + dart.notNull(info.text);
          }
        }
      }
      combined[$add](new inline_span.InlineSpanSemanticsInformation.new(workingText, {semanticsLabel: workingLabel}));
      return combined;
    }
    describeSemanticsConfiguration(config) {
      let t2;
      if (config == null) dart.nullFailed(L0, 909, 62, "config");
      super.describeSemanticsConfiguration(config);
      this[_semanticsInfo] = this.text.getSemanticsInformation();
      if (dart.test(dart.nullCheck(this[_semanticsInfo])[$any](dart.fn(info => {
        if (info == null) dart.nullFailed(L0, 913, 61, "info");
        return info.recognizer != null;
      }, InlineSpanSemanticsInformationTobool())))) {
        config.explicitChildNodes = true;
        config.isSemanticBoundary = true;
      } else {
        let buffer = new core.StringBuffer.new();
        for (let info of dart.nullCheck(this[_semanticsInfo])) {
          buffer.write((t2 = info.semanticsLabel, t2 == null ? info.text : t2));
        }
        config.label = buffer.toString();
        config.textDirection = this.textDirection;
      }
    }
    assembleSemanticsNode(node, config, children) {
      let t3, t3$, t2, t2$, t2$0;
      if (node == null) dart.nullFailed(L0, 933, 44, "node");
      if (config == null) dart.nullFailed(L0, 933, 73, "config");
      if (children == null) dart.nullFailed(L0, 933, 105, "children");
      if (!(this[_semanticsInfo] != null && dart.test(dart.nullCheck(this[_semanticsInfo])[$isNotEmpty]))) dart.assertFailed(null, L0, 934, 12, "_semanticsInfo != null && _semanticsInfo!.isNotEmpty");
      let newChildren = JSArrayOfSemanticsNode().of([]);
      let currentDirection = this.textDirection;
      let currentRect = null;
      let ordinal = 0.0;
      let start = 0;
      let placeholderIndex = 0;
      let childIndex = 0;
      let child = this.firstChild;
      let newChildCache = new (ListQueueOfSemanticsNode()).new();
      for (let info of this[_combineSemanticsInfo]()) {
        let selection = new text_editing.TextSelection.new({baseOffset: start, extentOffset: start + info.text.length});
        start = start + info.text.length;
        if (dart.test(info.isPlaceholder)) {
          while (dart.notNull(children[$length]) > childIndex && dart.test(children[$elementAt](childIndex).isTagged(new paragraph.PlaceholderSpanIndexSemanticsTag.new(placeholderIndex)))) {
            let childNode = children[$elementAt](childIndex);
            let parentData = paragraph.TextParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
            childNode.rect = new ui.Rect.fromLTWH(childNode.rect.left, childNode.rect.top, dart.notNull(childNode.rect.width) * dart.nullCheck(parentData.scale), dart.notNull(childNode.rect.height) * dart.nullCheck(parentData.scale));
            newChildren[$add](childNode);
            childIndex = childIndex + 1;
          }
          child = this.childAfter(dart.nullCheck(child));
          placeholderIndex = placeholderIndex + 1;
        } else {
          let initialDirection = currentDirection;
          let rects = this.getBoxesForSelection(selection);
          if (dart.test(rects[$isEmpty])) {
            continue;
          }
          let rect = rects[$first].toRect();
          currentDirection = rects[$first].direction;
          for (let textBox of rects[$skip](1)) {
            rect = rect.expandToInclude(textBox.toRect());
            currentDirection = textBox.direction;
          }
          rect = new ui.Rect.fromLTWH(math.max(core.double, 0.0, rect.left), math.max(core.double, 0.0, rect.top), math.min(core.double, rect.width, this.constraints.maxWidth), math.min(core.double, rect.height, this.constraints.maxHeight));
          currentRect = new ui.Rect.fromLTRB(rect.left[$floorToDouble]() - 4.0, rect.top[$floorToDouble]() - 4.0, rect.right[$ceilToDouble]() + 4.0, rect.bottom[$ceilToDouble]() + 4.0);
          let configuration = (t2 = new semantics.SemanticsConfiguration.new(), (() => {
            t2.sortKey = new semantics.OrdinalSortKey.new((t3 = ordinal, ordinal = t3 + 1, t3));
            t2.textDirection = initialDirection;
            t2.label = (t3$ = info.semanticsLabel, t3$ == null ? info.text : t3$);
            return t2;
          })());
          let recognizer = info.recognizer;
          if (recognizer != null) {
            if (tap.TapGestureRecognizer.is(recognizer)) {
              if (recognizer.onTap != null) {
                configuration.onTap = recognizer.onTap;
                configuration.isLink = true;
              }
            } else if (multitap.DoubleTapGestureRecognizer.is(recognizer)) {
              if (recognizer.onDoubleTap != null) {
                configuration.onTap = recognizer.onDoubleTap;
                configuration.isLink = true;
              }
            } else if (long_press.LongPressGestureRecognizer.is(recognizer)) {
              if (recognizer.onLongPress != null) {
                configuration.onLongPress = recognizer.onLongPress;
              }
            } else {
              if (!false) dart.assertFailed(dart.str(dart.runtimeType(recognizer)) + " is not supported.", L0, 1018, 20, "false");
            }
          }
          let newChild = dart.equals((t2$ = this[_cachedChildNodes], t2$ == null ? null : t2$[$isNotEmpty]), true) ? dart.nullCheck(this[_cachedChildNodes]).removeFirst() : new semantics.SemanticsNode.new();
          t2$0 = newChild;
          (() => {
            t2$0.updateWith({config: configuration});
            t2$0.rect = currentRect;
            return t2$0;
          })();
          newChildCache.addLast(newChild);
          newChildren[$add](newChild);
        }
      }
      if (!(childIndex === children[$length])) dart.assertFailed(null, L0, 1032, 12, "childIndex == children.length");
      if (!(child == null)) dart.assertFailed(null, L0, 1033, 12, "child == null");
      this[_cachedChildNodes] = newChildCache;
      node.updateWith({config: config, childrenInInversePaintOrder: newChildren});
    }
    clearSemantics() {
      super.clearSemantics();
      this[_cachedChildNodes] = null;
    }
    debugDescribeChildren() {
      return JSArrayOfDiagnosticsNode().of([this.text.toDiagnosticsNode({name: "text", style: diagnostics.DiagnosticsTreeStyle.transition})]);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 1056, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfTextAlign()).new("textAlign", this.textAlign));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection));
      properties.add(new diagnostics.FlagProperty.new("softWrap", {value: this.softWrap, ifTrue: "wrapping at box width", ifFalse: "no wrapping except at line break characters", showName: true}));
      properties.add(new (EnumPropertyOfTextOverflow()).new("overflow", this.overflow));
      properties.add(new diagnostics.DoubleProperty.new("textScaleFactor", this.textScaleFactor, {defaultValue: 1.0}));
      properties.add(new (DiagnosticsPropertyOfLocale()).new("locale", this.locale, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {ifNull: "unlimited"}));
    }
  };
  (paragraph.RenderParagraph.new = function(text, opts) {
    if (text == null) dart.nullFailed(L0, 95, 30, "text");
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C5 || CT.C5;
    if (textAlign == null) dart.nullFailed(L0, 96, 15, "textAlign");
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    if (textDirection == null) dart.nullFailed(L0, 97, 28, "textDirection");
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
    if (softWrap == null) dart.nullFailed(L0, 98, 10, "softWrap");
    let overflow = opts && 'overflow' in opts ? opts.overflow : C0 || CT.C0;
    if (overflow == null) dart.nullFailed(L0, 99, 18, "overflow");
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    if (textScaleFactor == null) dart.nullFailed(L0, 100, 12, "textScaleFactor");
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C6 || CT.C6;
    if (textWidthBasis == null) dart.nullFailed(L0, 104, 20, "textWidthBasis");
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[__RenderParagraph__placeholderSpans] = null;
    this[__RenderParagraph__placeholderSpans_isSet] = false;
    this[_needsClipping] = false;
    this[_overflowShader] = null;
    this[_placeholderDimensions] = null;
    this[_semanticsInfo] = null;
    this[_cachedChildNodes] = null;
    if (!(text != null)) dart.assertFailed(null, L0, 107, 15, "text != null");
    if (!dart.test(text.debugAssertIsValid())) dart.assertFailed(null, L0, 108, 15, "text.debugAssertIsValid()");
    if (!(textAlign != null)) dart.assertFailed(null, L0, 109, 15, "textAlign != null");
    if (!(textDirection != null)) dart.assertFailed(null, L0, 110, 15, "textDirection != null");
    if (!(softWrap != null)) dart.assertFailed(null, L0, 111, 15, "softWrap != null");
    if (!(overflow != null)) dart.assertFailed(null, L0, 112, 15, "overflow != null");
    if (!(textScaleFactor != null)) dart.assertFailed(null, L0, 113, 15, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, L0, 114, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis != null)) dart.assertFailed(null, L0, 115, 15, "textWidthBasis != null");
    this[_softWrap] = softWrap;
    this[_overflow] = overflow;
    this[_textPainter] = new text_painter.TextPainter.new({text: text, textAlign: textAlign, textDirection: textDirection, textScaleFactor: textScaleFactor, maxLines: maxLines, ellipsis: dart.equals(overflow, paragraph.TextOverflow.ellipsis) ? "…" : null, locale: locale, strutStyle: strutStyle, textWidthBasis: textWidthBasis, textHeightBehavior: textHeightBehavior});
    paragraph.RenderParagraph.__proto__.new.call(this);
    this.addAll(children);
    this[_extractPlaceholderSpans](text);
  }).prototype = paragraph.RenderParagraph.prototype;
  dart.addTypeTests(paragraph.RenderParagraph);
  dart.addTypeCaches(paragraph.RenderParagraph);
  dart.setMethodSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getMethods(paragraph.RenderParagraph.__proto__),
    [_extractPlaceholderSpans]: dart.fnType(dart.void, [inline_span.InlineSpan]),
    [_computeIntrinsicHeight]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    [_canComputeIntrinsics]: dart.fnType(core.bool, []),
    [_computeChildrenWidthWithMaxIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenWidthWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenHeightWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_layoutText]: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    [_layoutTextWithConstraints]: dart.fnType(dart.void, [box.BoxConstraints]),
    [_layoutChildren]: dart.fnType(core.List$(text_painter.PlaceholderDimensions), [box.BoxConstraints], {dry: core.bool}, {}),
    [_setParentData]: dart.fnType(dart.void, []),
    [_canComputeDryLayout]: dart.fnType(core.bool, []),
    getOffsetForCaret: dart.fnType(ui.Offset, [ui.TextPosition, ui.Rect]),
    getFullHeightForCaret: dart.fnType(dart.nullable(core.double), [ui.TextPosition]),
    getBoxesForSelection: dart.fnType(core.List$(ui.TextBox), [text_editing.TextSelection]),
    getPositionForOffset: dart.fnType(ui.TextPosition, [ui.Offset]),
    getWordBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    [_combineSemanticsInfo]: dart.fnType(core.List$(inline_span.InlineSpanSemanticsInformation), [])
  }));
  dart.setGetterSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getGetters(paragraph.RenderParagraph.__proto__),
    text: inline_span.InlineSpan,
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    softWrap: core.bool,
    overflow: paragraph.TextOverflow,
    textScaleFactor: core.double,
    maxLines: dart.nullable(core.int),
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    debugHasOverflowShader: core.bool,
    textSize: ui.Size
  }));
  dart.setSetterSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getSetters(paragraph.RenderParagraph.__proto__),
    text: inline_span.InlineSpan,
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    softWrap: core.bool,
    overflow: paragraph.TextOverflow,
    textScaleFactor: core.double,
    maxLines: dart.nullable(core.int),
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior)
  }));
  dart.setLibraryUri(paragraph.RenderParagraph, L1);
  dart.setFieldSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getFields(paragraph.RenderParagraph.__proto__),
    [_textPainter]: dart.finalFieldType(text_painter.TextPainter),
    [__RenderParagraph__placeholderSpans]: dart.fieldType(dart.nullable(core.List$(placeholder_span.PlaceholderSpan))),
    [__RenderParagraph__placeholderSpans_isSet]: dart.fieldType(core.bool),
    [_softWrap]: dart.fieldType(core.bool),
    [_overflow]: dart.fieldType(paragraph.TextOverflow),
    [_needsClipping]: dart.fieldType(core.bool),
    [_overflowShader]: dart.fieldType(dart.nullable(ui.Shader)),
    [_placeholderDimensions]: dart.fieldType(dart.nullable(core.List$(text_painter.PlaceholderDimensions))),
    [_semanticsInfo]: dart.fieldType(dart.nullable(core.List$(inline_span.InlineSpanSemanticsInformation))),
    [_cachedChildNodes]: dart.fieldType(dart.nullable(collection.Queue$(semantics.SemanticsNode)))
  }));
  dart.defineLazy(paragraph, {
    /*paragraph._kEllipsis*/get _kEllipsis() {
      return "…";
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/paragraph.dart", {
    "package:flutter/src/rendering/paragraph.dart": paragraph
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["paragraph.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/paragraph.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__paragraph: paragraph
  };
}));

//# sourceMappingURL=paragraph.dart.lib.js.map
