define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__material__input_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var input_border = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/input_border.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/input_border.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C1 || CT.C1,
        [BorderSide_width]: 0,
        [BorderSide_color]: C2 || CT.C2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: input_border._NoInputBorder.prototype,
        [borderSide$]: C0 || CT.C0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C5 || CT.C5,
        [BorderSide_width]: 1,
        [BorderSide_color]: C2 || CT.C2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C7 || CT.C7,
        [BorderRadius_bottomLeft]: C7 || CT.C7,
        [BorderRadius_topRight]: C8 || CT.C8,
        [BorderRadius_topLeft]: C8 || CT.C8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C8 || CT.C8,
        [BorderRadius_bottomLeft]: C8 || CT.C8,
        [BorderRadius_topRight]: C8 || CT.C8,
        [BorderRadius_topLeft]: C8 || CT.C8
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$]: "TextDirection.rtl",
        index: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$]: "TextDirection.ltr",
        index: 1
      });
    }
  }, false);
  var _name = dart.privateName(borders, "_name");
  var C1;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C2;
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C0;
  var borderSide$ = dart.privateName(input_border, "InputBorder.borderSide");
  var C3;
  input_border.InputBorder = class InputBorder extends borders.ShapeBorder {
    get borderSide() {
      return this[borderSide$];
    }
    set borderSide(value) {
      super.borderSide = value;
    }
  };
  (input_border.InputBorder.new = function(opts) {
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : C0 || CT.C0;
    if (borderSide == null) dart.nullFailed(L0, 38, 10, "borderSide");
    this[borderSide$] = borderSide;
    if (!(borderSide != null)) dart.assertFailed(null, L0, 39, 15, "borderSide != null");
    input_border.InputBorder.__proto__.new.call(this);
    ;
  }).prototype = input_border.InputBorder.prototype;
  dart.addTypeTests(input_border.InputBorder);
  dart.addTypeCaches(input_border.InputBorder);
  dart.setLibraryUri(input_border.InputBorder, L1);
  dart.setFieldSignature(input_border.InputBorder, () => ({
    __proto__: dart.getFields(input_border.InputBorder.__proto__),
    borderSide: dart.finalFieldType(borders.BorderSide)
  }));
  dart.defineLazy(input_border.InputBorder, {
    /*input_border.InputBorder.none*/get none() {
      return C3 || CT.C3;
    }
  }, false);
  input_border._NoInputBorder = class _NoInputBorder extends input_border.InputBorder {
    copyWith(opts) {
      let borderSide = opts && 'borderSide' in opts ? opts.borderSide : null;
      return C3 || CT.C3;
    }
    get isOutline() {
      return false;
    }
    get dimensions() {
      return edge_insets.EdgeInsets.zero;
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 98, 31, "t");
      return C3 || CT.C3;
    }
    getInnerPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 101, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(rect);
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 106, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(rect);
        return t0;
      })();
    }
    paint(canvas, rect, opts) {
      if (canvas == null) dart.nullFailed(L0, 112, 12, "canvas");
      if (rect == null) dart.nullFailed(L0, 113, 10, "rect");
      let gapStart = opts && 'gapStart' in opts ? opts.gapStart : null;
      let gapExtent = opts && 'gapExtent' in opts ? opts.gapExtent : 0;
      if (gapExtent == null) dart.nullFailed(L0, 115, 12, "gapExtent");
      let gapPercentage = opts && 'gapPercentage' in opts ? opts.gapPercentage : 0;
      if (gapPercentage == null) dart.nullFailed(L0, 116, 12, "gapPercentage");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    }
  };
  (input_border._NoInputBorder.new = function() {
    input_border._NoInputBorder.__proto__.new.call(this, {borderSide: borders.BorderSide.none});
    ;
  }).prototype = input_border._NoInputBorder.prototype;
  dart.addTypeTests(input_border._NoInputBorder);
  dart.addTypeCaches(input_border._NoInputBorder);
  dart.setMethodSignature(input_border._NoInputBorder, () => ({
    __proto__: dart.getMethods(input_border._NoInputBorder.__proto__),
    copyWith: dart.fnType(input_border._NoInputBorder, [], {borderSide: dart.nullable(borders.BorderSide)}, {}),
    scale: dart.fnType(input_border._NoInputBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {gapExtent: core.double, gapPercentage: core.double, gapStart: dart.nullable(core.double), textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(input_border._NoInputBorder, () => ({
    __proto__: dart.getGetters(input_border._NoInputBorder.__proto__),
    isOutline: core.bool,
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(input_border._NoInputBorder, L1);
  var C5;
  var C4;
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C7;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var C8;
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C6;
  var borderRadius$ = dart.privateName(input_border, "UnderlineInputBorder.borderRadius");
  input_border.UnderlineInputBorder = class UnderlineInputBorder extends input_border.InputBorder {
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get isOutline() {
      return false;
    }
    copyWith(opts) {
      let t0, t0$;
      let borderSide = opts && 'borderSide' in opts ? opts.borderSide : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      return new input_border.UnderlineInputBorder.new({borderSide: (t0 = borderSide, t0 == null ? this.borderSide : t0), borderRadius: (t0$ = borderRadius, t0$ == null ? this.borderRadius : t0$)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.only({bottom: this.borderSide.width});
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 182, 37, "t");
      return new input_border.UnderlineInputBorder.new({borderSide: this.borderSide.scale(t)});
    }
    getInnerPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 187, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(new ui.Rect.fromLTWH(rect.left, rect.top, rect.width, math.max(core.double, 0.0, dart.notNull(rect.height) - dart.notNull(this.borderSide.width))));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 193, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
        return t0;
      })();
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 198, 48, "t");
      if (input_border.UnderlineInputBorder.is(a)) {
        return new input_border.UnderlineInputBorder.new({borderSide: borders.BorderSide.lerp(a.borderSide, this.borderSide, t), borderRadius: dart.nullCheck(border_radius.BorderRadius.lerp(a.borderRadius, this.borderRadius, t))});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 209, 46, "t");
      if (input_border.UnderlineInputBorder.is(b)) {
        return new input_border.UnderlineInputBorder.new({borderSide: borders.BorderSide.lerp(this.borderSide, b.borderSide, t), borderRadius: dart.nullCheck(border_radius.BorderRadius.lerp(this.borderRadius, b.borderRadius, t))});
      }
      return super.lerpTo(b, t);
    }
    paint(canvas, rect, opts) {
      if (canvas == null) dart.nullFailed(L0, 225, 12, "canvas");
      if (rect == null) dart.nullFailed(L0, 226, 10, "rect");
      let gapStart = opts && 'gapStart' in opts ? opts.gapStart : null;
      let gapExtent = opts && 'gapExtent' in opts ? opts.gapExtent : 0;
      if (gapExtent == null) dart.nullFailed(L0, 228, 12, "gapExtent");
      let gapPercentage = opts && 'gapPercentage' in opts ? opts.gapPercentage : 0;
      if (gapPercentage == null) dart.nullFailed(L0, 229, 12, "gapPercentage");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!dart.equals(this.borderRadius.bottomLeft, ui.Radius.zero) || !dart.equals(this.borderRadius.bottomRight, ui.Radius.zero)) canvas.clipPath(this.getOuterPath(rect, {textDirection: textDirection}));
      canvas.drawLine(rect.bottomLeft, rect.bottomRight, this.borderSide.toPaint());
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return input_border.InputBorder.is(other) && dart.equals(other.borderSide, this.borderSide);
    }
    get hashCode() {
      return dart.hashCode(this.borderSide);
    }
  };
  (input_border.UnderlineInputBorder.new = function(opts) {
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : C4 || CT.C4;
    if (borderSide == null) dart.nullFailed(L0, 146, 16, "borderSide");
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C6 || CT.C6;
    if (borderRadius == null) dart.nullFailed(L0, 147, 10, "borderRadius");
    this[borderRadius$] = borderRadius;
    if (!(borderRadius != null)) dart.assertFailed(null, L0, 151, 15, "borderRadius != null");
    input_border.UnderlineInputBorder.__proto__.new.call(this, {borderSide: borderSide});
    ;
  }).prototype = input_border.UnderlineInputBorder.prototype;
  dart.addTypeTests(input_border.UnderlineInputBorder);
  dart.addTypeCaches(input_border.UnderlineInputBorder);
  dart.setMethodSignature(input_border.UnderlineInputBorder, () => ({
    __proto__: dart.getMethods(input_border.UnderlineInputBorder.__proto__),
    copyWith: dart.fnType(input_border.UnderlineInputBorder, [], {borderRadius: dart.nullable(border_radius.BorderRadius), borderSide: dart.nullable(borders.BorderSide)}, {}),
    scale: dart.fnType(input_border.UnderlineInputBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {gapExtent: core.double, gapPercentage: core.double, gapStart: dart.nullable(core.double), textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(input_border.UnderlineInputBorder, () => ({
    __proto__: dart.getGetters(input_border.UnderlineInputBorder.__proto__),
    isOutline: core.bool,
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(input_border.UnderlineInputBorder, L1);
  dart.setFieldSignature(input_border.UnderlineInputBorder, () => ({
    __proto__: dart.getFields(input_border.UnderlineInputBorder.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius)
  }));
  dart.defineExtensionMethods(input_border.UnderlineInputBorder, ['_equals']);
  dart.defineExtensionAccessors(input_border.UnderlineInputBorder, ['hashCode']);
  var C9;
  var _gapBorderPath = dart.privateName(input_border, "_gapBorderPath");
  var _name$ = dart.privateName(ui, "_name");
  var C10;
  var C11;
  var gapPadding$ = dart.privateName(input_border, "OutlineInputBorder.gapPadding");
  var borderRadius$0 = dart.privateName(input_border, "OutlineInputBorder.borderRadius");
  input_border.OutlineInputBorder = class OutlineInputBorder extends input_border.InputBorder {
    get gapPadding() {
      return this[gapPadding$];
    }
    set gapPadding(value) {
      super.gapPadding = value;
    }
    get borderRadius() {
      return this[borderRadius$0];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    static _cornersAreCircular(borderRadius) {
      if (borderRadius == null) dart.nullFailed(L0, 300, 48, "borderRadius");
      return borderRadius.topLeft.x == borderRadius.topLeft.y && borderRadius.bottomLeft.x == borderRadius.bottomLeft.y && borderRadius.topRight.x == borderRadius.topRight.y && borderRadius.bottomRight.x == borderRadius.bottomRight.y;
    }
    get isOutline() {
      return true;
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let borderSide = opts && 'borderSide' in opts ? opts.borderSide : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let gapPadding = opts && 'gapPadding' in opts ? opts.gapPadding : null;
      return new input_border.OutlineInputBorder.new({borderSide: (t0 = borderSide, t0 == null ? this.borderSide : t0), borderRadius: (t0$ = borderRadius, t0$ == null ? this.borderRadius : t0$), gapPadding: (t0$0 = gapPadding, t0$0 == null ? this.gapPadding : t0$0)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.borderSide.width);
    }
    scale(t) {
      if (t == null) dart.nullFailed(L0, 341, 35, "t");
      return new input_border.OutlineInputBorder.new({borderSide: this.borderSide.scale(t), borderRadius: this.borderRadius['*'](t), gapPadding: dart.notNull(this.gapPadding) * dart.notNull(t)});
    }
    lerpFrom(a, t) {
      if (t == null) dart.nullFailed(L0, 350, 48, "t");
      if (input_border.OutlineInputBorder.is(a)) {
        let outline = a;
        return new input_border.OutlineInputBorder.new({borderRadius: dart.nullCheck(border_radius.BorderRadius.lerp(outline.borderRadius, this.borderRadius, t)), borderSide: borders.BorderSide.lerp(outline.borderSide, this.borderSide, t), gapPadding: outline.gapPadding});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (t == null) dart.nullFailed(L0, 363, 46, "t");
      if (input_border.OutlineInputBorder.is(b)) {
        let outline = b;
        return new input_border.OutlineInputBorder.new({borderRadius: dart.nullCheck(border_radius.BorderRadius.lerp(this.borderRadius, outline.borderRadius, t)), borderSide: borders.BorderSide.lerp(this.borderSide, outline.borderSide, t), gapPadding: outline.gapPadding});
      }
      return super.lerpTo(b, t);
    }
    getInnerPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 376, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.borderSide.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      if (rect == null) dart.nullFailed(L0, 382, 26, "rect");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
        return t0;
      })();
    }
    [_gapBorderPath](canvas, center, start, extent) {
      let t0, t0$, t0$0;
      if (canvas == null) dart.nullFailed(L0, 387, 30, "canvas");
      if (center == null) dart.nullFailed(L0, 387, 44, "center");
      if (start == null) dart.nullFailed(L0, 387, 59, "start");
      if (extent == null) dart.nullFailed(L0, 387, 73, "extent");
      let scaledRRect = center.scaleRadii();
      let tlCorner = new ui.Rect.fromLTWH(scaledRRect.left, scaledRRect.top, dart.notNull(scaledRRect.tlRadiusX) * 2.0, dart.notNull(scaledRRect.tlRadiusY) * 2.0);
      let trCorner = new ui.Rect.fromLTWH(dart.notNull(scaledRRect.right) - dart.notNull(scaledRRect.trRadiusX) * 2.0, scaledRRect.top, dart.notNull(scaledRRect.trRadiusX) * 2.0, dart.notNull(scaledRRect.trRadiusY) * 2.0);
      let brCorner = new ui.Rect.fromLTWH(dart.notNull(scaledRRect.right) - dart.notNull(scaledRRect.brRadiusX) * 2.0, dart.notNull(scaledRRect.bottom) - dart.notNull(scaledRRect.brRadiusY) * 2.0, dart.notNull(scaledRRect.brRadiusX) * 2.0, dart.notNull(scaledRRect.brRadiusY) * 2.0);
      let blCorner = new ui.Rect.fromLTWH(scaledRRect.left, dart.notNull(scaledRRect.bottom) - dart.notNull(scaledRRect.blRadiusY) * 2.0, dart.notNull(scaledRRect.blRadiusX) * 2.0, dart.notNull(scaledRRect.blRadiusX) * 2.0);
      let tlCornerArcSweep = dart.notNull(start) < dart.notNull(scaledRRect.tlRadiusX) ? math.asin((dart.notNull(start) / dart.notNull(scaledRRect.tlRadiusX))[$clamp](-1.0, 1.0)) : 3.141592653589793 / 2.0;
      let path = (t0 = ui.Path.new(), (() => {
        t0.addArc(tlCorner, 3.141592653589793, tlCornerArcSweep);
        t0.moveTo(dart.notNull(scaledRRect.left) + dart.notNull(scaledRRect.tlRadiusX), scaledRRect.top);
        return t0;
      })());
      if (dart.notNull(start) > dart.notNull(scaledRRect.tlRadiusX)) path.lineTo(dart.notNull(scaledRRect.left) + dart.notNull(start), scaledRRect.top);
      if (dart.notNull(start) + dart.notNull(extent) < dart.notNull(scaledRRect.width) - dart.notNull(scaledRRect.trRadiusX)) {
        t0$ = path;
        (() => {
          t0$.relativeMoveTo(extent, 0.0);
          t0$.lineTo(dart.notNull(scaledRRect.right) - dart.notNull(scaledRRect.trRadiusX), scaledRRect.top);
          t0$.addArc(trCorner, 4.71238898038469, 1.5707963267948966);
          return t0$;
        })();
      } else if (dart.notNull(start) + dart.notNull(extent) < dart.notNull(scaledRRect.width)) {
        let dx = dart.notNull(scaledRRect.width) - (dart.notNull(start) + dart.notNull(extent));
        let sweep = math.acos(dx / dart.notNull(scaledRRect.trRadiusX));
        path.addArc(trCorner, 4.71238898038469 + sweep, 1.5707963267948966 - sweep);
      }
      t0$0 = path;
      return (() => {
        t0$0.moveTo(scaledRRect.right, dart.notNull(scaledRRect.top) + dart.notNull(scaledRRect.trRadiusY));
        t0$0.lineTo(scaledRRect.right, dart.notNull(scaledRRect.bottom) - dart.notNull(scaledRRect.brRadiusY));
        t0$0.addArc(brCorner, 0.0, 1.5707963267948966);
        t0$0.lineTo(dart.notNull(scaledRRect.left) + dart.notNull(scaledRRect.blRadiusX), scaledRRect.bottom);
        t0$0.addArc(blCorner, 3.141592653589793 / 2.0, 1.5707963267948966);
        t0$0.lineTo(scaledRRect.left, dart.notNull(scaledRRect.top) + dart.notNull(scaledRRect.tlRadiusY));
        return t0$0;
      })();
    }
    paint(canvas, rect, opts) {
      if (canvas == null) dart.nullFailed(L0, 462, 12, "canvas");
      if (rect == null) dart.nullFailed(L0, 463, 10, "rect");
      let gapStart = opts && 'gapStart' in opts ? opts.gapStart : null;
      let gapExtent = opts && 'gapExtent' in opts ? opts.gapExtent : 0;
      if (gapExtent == null) dart.nullFailed(L0, 465, 12, "gapExtent");
      let gapPercentage = opts && 'gapPercentage' in opts ? opts.gapPercentage : 0;
      if (gapPercentage == null) dart.nullFailed(L0, 466, 12, "gapPercentage");
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(gapExtent != null)) dart.assertFailed(null, L0, 469, 12, "gapExtent != null");
      if (!(dart.notNull(gapPercentage) >= 0.0 && dart.notNull(gapPercentage) <= 1.0)) dart.assertFailed(null, L0, 470, 12, "gapPercentage >= 0.0 && gapPercentage <= 1.0");
      if (!dart.test(input_border.OutlineInputBorder._cornersAreCircular(this.borderRadius))) dart.assertFailed(null, L0, 471, 12, "_cornersAreCircular(borderRadius)");
      let paint = this.borderSide.toPaint();
      let outer = this.borderRadius.toRRect(rect);
      let center = outer.deflate(dart.notNull(this.borderSide.width) / 2.0);
      if (gapStart == null || dart.notNull(gapExtent) <= 0.0 || gapPercentage === 0.0) {
        canvas.drawRRect(center, paint);
      } else {
        let extent = dart.nullCheck(ui.lerpDouble(0.0, dart.notNull(gapExtent) + dart.notNull(this.gapPadding) * 2.0, gapPercentage));
        switch (dart.nullCheck(textDirection)) {
          case C10 || CT.C10:
          {
            let path = this[_gapBorderPath](canvas, center, math.max(core.double, 0.0, dart.notNull(gapStart) + dart.notNull(this.gapPadding) - extent), extent);
            canvas.drawPath(path, paint);
            break;
          }
          case C11 || CT.C11:
          {
            let path = this[_gapBorderPath](canvas, center, math.max(core.double, 0.0, dart.notNull(gapStart) - dart.notNull(this.gapPadding)), extent);
            canvas.drawPath(path, paint);
            break;
          }
          default:
          {
            dart.throw(new _internal.ReachabilityError.new("`null` encountered as case in a switch expression with a non-nullable enum type."));
          }
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return input_border.OutlineInputBorder.is(other) && dart.equals(other.borderSide, this.borderSide) && dart.equals(other.borderRadius, this.borderRadius) && other.gapPadding == this.gapPadding;
    }
    get hashCode() {
      return ui.hashValues(this.borderSide, this.borderRadius, this.gapPadding);
    }
  };
  (input_border.OutlineInputBorder.new = function(opts) {
    let borderSide = opts && 'borderSide' in opts ? opts.borderSide : C4 || CT.C4;
    if (borderSide == null) dart.nullFailed(L0, 287, 16, "borderSide");
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C9 || CT.C9;
    if (borderRadius == null) dart.nullFailed(L0, 288, 10, "borderRadius");
    let gapPadding = opts && 'gapPadding' in opts ? opts.gapPadding : 4;
    if (gapPadding == null) dart.nullFailed(L0, 289, 10, "gapPadding");
    this[borderRadius$0] = borderRadius;
    this[gapPadding$] = gapPadding;
    if (!(borderRadius != null)) dart.assertFailed(null, L0, 290, 15, "borderRadius != null");
    if (!(gapPadding != null && dart.notNull(gapPadding) >= 0.0)) dart.assertFailed(null, L0, 291, 15, "gapPadding != null && gapPadding >= 0.0");
    input_border.OutlineInputBorder.__proto__.new.call(this, {borderSide: borderSide});
    ;
  }).prototype = input_border.OutlineInputBorder.prototype;
  dart.addTypeTests(input_border.OutlineInputBorder);
  dart.addTypeCaches(input_border.OutlineInputBorder);
  dart.setMethodSignature(input_border.OutlineInputBorder, () => ({
    __proto__: dart.getMethods(input_border.OutlineInputBorder.__proto__),
    copyWith: dart.fnType(input_border.OutlineInputBorder, [], {borderRadius: dart.nullable(border_radius.BorderRadius), borderSide: dart.nullable(borders.BorderSide), gapPadding: dart.nullable(core.double)}, {}),
    scale: dart.fnType(input_border.OutlineInputBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    [_gapBorderPath]: dart.fnType(ui.Path, [ui.Canvas, ui.RRect, core.double, core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {gapExtent: core.double, gapPercentage: core.double, gapStart: dart.nullable(core.double), textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(input_border.OutlineInputBorder, () => ({
    __proto__: dart.getGetters(input_border.OutlineInputBorder.__proto__),
    isOutline: core.bool,
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(input_border.OutlineInputBorder, L1);
  dart.setFieldSignature(input_border.OutlineInputBorder, () => ({
    __proto__: dart.getFields(input_border.OutlineInputBorder.__proto__),
    gapPadding: dart.finalFieldType(core.double),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius)
  }));
  dart.defineExtensionMethods(input_border.OutlineInputBorder, ['_equals']);
  dart.defineExtensionAccessors(input_border.OutlineInputBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/material/input_border.dart", {
    "package:flutter/src/material/input_border.dart": input_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input_border.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/input_border.dart.lib.js"}');
  // Exports:
  return {
    src__material__input_border: input_border
  };
}));

//# sourceMappingURL=input_border.dart.lib.js.map
