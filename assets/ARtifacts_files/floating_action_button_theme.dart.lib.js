define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__material__floating_action_button_theme_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var floating_action_button_theme = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var DiagnosticsPropertyOfShapeBorder = () => (DiagnosticsPropertyOfShapeBorder = dart.constFn(diagnostics.DiagnosticsProperty$(borders.ShapeBorder)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/floating_action_button_theme.dart";
  var L1 = "package:flutter/src/material/floating_action_button_theme.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: floating_action_button_theme.FloatingActionButtonThemeData.prototype,
        [FloatingActionButtonThemeData_shape]: null,
        [FloatingActionButtonThemeData_highlightElevation]: null,
        [FloatingActionButtonThemeData_disabledElevation]: null,
        [FloatingActionButtonThemeData_hoverElevation]: null,
        [FloatingActionButtonThemeData_focusElevation]: null,
        [FloatingActionButtonThemeData_elevation]: null,
        [FloatingActionButtonThemeData_splashColor]: null,
        [FloatingActionButtonThemeData_hoverColor]: null,
        [FloatingActionButtonThemeData_focusColor]: null,
        [FloatingActionButtonThemeData_backgroundColor]: null,
        [FloatingActionButtonThemeData_foregroundColor]: null
      });
    }
  }, false);
  var FloatingActionButtonThemeData_shape = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.shape");
  var FloatingActionButtonThemeData_highlightElevation = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.highlightElevation");
  var FloatingActionButtonThemeData_disabledElevation = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.disabledElevation");
  var FloatingActionButtonThemeData_hoverElevation = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.hoverElevation");
  var FloatingActionButtonThemeData_focusElevation = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.focusElevation");
  var FloatingActionButtonThemeData_elevation = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.elevation");
  var FloatingActionButtonThemeData_splashColor = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.splashColor");
  var FloatingActionButtonThemeData_hoverColor = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.hoverColor");
  var FloatingActionButtonThemeData_focusColor = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.focusColor");
  var FloatingActionButtonThemeData_backgroundColor = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.backgroundColor");
  var FloatingActionButtonThemeData_foregroundColor = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.foregroundColor");
  var C0;
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  floating_action_button_theme.FloatingActionButtonThemeData = class FloatingActionButtonThemeData extends Object_Diagnosticable$36 {
    get foregroundColor() {
      return this[foregroundColor$];
    }
    set foregroundColor(value) {
      super.foregroundColor = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get focusColor() {
      return this[focusColor$];
    }
    set focusColor(value) {
      super.focusColor = value;
    }
    get hoverColor() {
      return this[hoverColor$];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get splashColor() {
      return this[splashColor$];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get focusElevation() {
      return this[focusElevation$];
    }
    set focusElevation(value) {
      super.focusElevation = value;
    }
    get hoverElevation() {
      return this[hoverElevation$];
    }
    set hoverElevation(value) {
      super.hoverElevation = value;
    }
    get disabledElevation() {
      return this[disabledElevation$];
    }
    set disabledElevation(value) {
      super.disabledElevation = value;
    }
    get highlightElevation() {
      return this[highlightElevation$];
    }
    set highlightElevation(value) {
      super.highlightElevation = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8;
      let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
      let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
      let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : null;
      let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : null;
      let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : null;
      let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      return new floating_action_button_theme.FloatingActionButtonThemeData.new({foregroundColor: (t0 = foregroundColor, t0 == null ? this.foregroundColor : t0), backgroundColor: (t0$ = backgroundColor, t0$ == null ? this.backgroundColor : t0$), focusColor: (t0$0 = focusColor, t0$0 == null ? this.focusColor : t0$0), hoverColor: (t0$1 = hoverColor, t0$1 == null ? this.hoverColor : t0$1), splashColor: (t0$2 = splashColor, t0$2 == null ? this.splashColor : t0$2), elevation: (t0$3 = elevation, t0$3 == null ? this.elevation : t0$3), focusElevation: (t0$4 = focusElevation, t0$4 == null ? this.focusElevation : t0$4), hoverElevation: (t0$5 = hoverElevation, t0$5 == null ? this.hoverElevation : t0$5), disabledElevation: (t0$6 = disabledElevation, t0$6 == null ? this.disabledElevation : t0$6), highlightElevation: (t0$7 = highlightElevation, t0$7 == null ? this.highlightElevation : t0$7), shape: (t0$8 = shape, t0$8 == null ? this.shape : t0$8)});
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19;
      if (t == null) dart.nullFailed(L0, 127, 121, "t");
      if (!(t != null)) dart.assertFailed(null, L0, 128, 12, "t != null");
      if (a == null && b == null) return null;
      return new floating_action_button_theme.FloatingActionButtonThemeData.new({foregroundColor: ui.Color.lerp((t0 = a, t0 == null ? null : t0.foregroundColor), (t0$ = b, t0$ == null ? null : t0$.foregroundColor), t), backgroundColor: ui.Color.lerp((t0$0 = a, t0$0 == null ? null : t0$0.backgroundColor), (t0$1 = b, t0$1 == null ? null : t0$1.backgroundColor), t), focusColor: ui.Color.lerp((t0$2 = a, t0$2 == null ? null : t0$2.focusColor), (t0$3 = b, t0$3 == null ? null : t0$3.focusColor), t), hoverColor: ui.Color.lerp((t0$4 = a, t0$4 == null ? null : t0$4.hoverColor), (t0$5 = b, t0$5 == null ? null : t0$5.hoverColor), t), splashColor: ui.Color.lerp((t0$6 = a, t0$6 == null ? null : t0$6.splashColor), (t0$7 = b, t0$7 == null ? null : t0$7.splashColor), t), elevation: ui.lerpDouble((t0$8 = a, t0$8 == null ? null : t0$8.elevation), (t0$9 = b, t0$9 == null ? null : t0$9.elevation), t), focusElevation: ui.lerpDouble((t0$10 = a, t0$10 == null ? null : t0$10.focusElevation), (t0$11 = b, t0$11 == null ? null : t0$11.focusElevation), t), hoverElevation: ui.lerpDouble((t0$12 = a, t0$12 == null ? null : t0$12.hoverElevation), (t0$13 = b, t0$13 == null ? null : t0$13.hoverElevation), t), disabledElevation: ui.lerpDouble((t0$14 = a, t0$14 == null ? null : t0$14.disabledElevation), (t0$15 = b, t0$15 == null ? null : t0$15.disabledElevation), t), highlightElevation: ui.lerpDouble((t0$16 = a, t0$16 == null ? null : t0$16.highlightElevation), (t0$17 = b, t0$17 == null ? null : t0$17.highlightElevation), t), shape: borders.ShapeBorder.lerp((t0$18 = a, t0$18 == null ? null : t0$18.shape), (t0$19 = b, t0$19 == null ? null : t0$19.shape), t)});
    }
    get hashCode() {
      return ui.hashValues(this.foregroundColor, this.backgroundColor, this.focusColor, this.hoverColor, this.splashColor, this.elevation, this.focusElevation, this.hoverElevation, this.disabledElevation, this.highlightElevation, this.shape);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return floating_action_button_theme.FloatingActionButtonThemeData.is(other) && dart.equals(other.foregroundColor, this.foregroundColor) && dart.equals(other.backgroundColor, this.backgroundColor) && dart.equals(other.focusColor, this.focusColor) && dart.equals(other.hoverColor, this.hoverColor) && dart.equals(other.splashColor, this.splashColor) && other.elevation == this.elevation && other.focusElevation == this.focusElevation && other.hoverElevation == this.hoverElevation && other.disabledElevation == this.disabledElevation && other.highlightElevation == this.highlightElevation && dart.equals(other.shape, this.shape);
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 184, 56, "properties");
      super.debugFillProperties(properties);
      let defaultData = C0 || CT.C0;
      properties.add(new colors.ColorProperty.new("foregroundColor", this.foregroundColor, {defaultValue: defaultData.foregroundColor}));
      properties.add(new colors.ColorProperty.new("backgroundColor", this.backgroundColor, {defaultValue: defaultData.backgroundColor}));
      properties.add(new colors.ColorProperty.new("focusColor", this.focusColor, {defaultValue: defaultData.focusColor}));
      properties.add(new colors.ColorProperty.new("hoverColor", this.hoverColor, {defaultValue: defaultData.hoverColor}));
      properties.add(new colors.ColorProperty.new("splashColor", this.splashColor, {defaultValue: defaultData.splashColor}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: defaultData.elevation}));
      properties.add(new diagnostics.DoubleProperty.new("focusElevation", this.focusElevation, {defaultValue: defaultData.focusElevation}));
      properties.add(new diagnostics.DoubleProperty.new("hoverElevation", this.hoverElevation, {defaultValue: defaultData.hoverElevation}));
      properties.add(new diagnostics.DoubleProperty.new("disabledElevation", this.disabledElevation, {defaultValue: defaultData.disabledElevation}));
      properties.add(new diagnostics.DoubleProperty.new("highlightElevation", this.highlightElevation, {defaultValue: defaultData.highlightElevation}));
      properties.add(new (DiagnosticsPropertyOfShapeBorder()).new("shape", this.shape, {defaultValue: defaultData.shape}));
    }
  };
  (floating_action_button_theme.FloatingActionButtonThemeData.new = function(opts) {
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : null;
    let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : null;
    let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : null;
    let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    this[foregroundColor$] = foregroundColor;
    this[backgroundColor$] = backgroundColor;
    this[focusColor$] = focusColor;
    this[hoverColor$] = hoverColor;
    this[splashColor$] = splashColor;
    this[elevation$] = elevation;
    this[focusElevation$] = focusElevation;
    this[hoverElevation$] = hoverElevation;
    this[disabledElevation$] = disabledElevation;
    this[highlightElevation$] = highlightElevation;
    this[shape$] = shape;
    ;
  }).prototype = floating_action_button_theme.FloatingActionButtonThemeData.prototype;
  dart.addTypeTests(floating_action_button_theme.FloatingActionButtonThemeData);
  dart.addTypeCaches(floating_action_button_theme.FloatingActionButtonThemeData);
  const foregroundColor$ = FloatingActionButtonThemeData_foregroundColor;
  const backgroundColor$ = FloatingActionButtonThemeData_backgroundColor;
  const focusColor$ = FloatingActionButtonThemeData_focusColor;
  const hoverColor$ = FloatingActionButtonThemeData_hoverColor;
  const splashColor$ = FloatingActionButtonThemeData_splashColor;
  const elevation$ = FloatingActionButtonThemeData_elevation;
  const focusElevation$ = FloatingActionButtonThemeData_focusElevation;
  const hoverElevation$ = FloatingActionButtonThemeData_hoverElevation;
  const disabledElevation$ = FloatingActionButtonThemeData_disabledElevation;
  const highlightElevation$ = FloatingActionButtonThemeData_highlightElevation;
  const shape$ = FloatingActionButtonThemeData_shape;
  dart.setMethodSignature(floating_action_button_theme.FloatingActionButtonThemeData, () => ({
    __proto__: dart.getMethods(floating_action_button_theme.FloatingActionButtonThemeData.__proto__),
    copyWith: dart.fnType(floating_action_button_theme.FloatingActionButtonThemeData, [], {backgroundColor: dart.nullable(ui.Color), disabledElevation: dart.nullable(core.double), elevation: dart.nullable(core.double), focusColor: dart.nullable(ui.Color), focusElevation: dart.nullable(core.double), foregroundColor: dart.nullable(ui.Color), highlightElevation: dart.nullable(core.double), hoverColor: dart.nullable(ui.Color), hoverElevation: dart.nullable(core.double), shape: dart.nullable(borders.ShapeBorder), splashColor: dart.nullable(ui.Color)}, {})
  }));
  dart.setLibraryUri(floating_action_button_theme.FloatingActionButtonThemeData, L1);
  dart.setFieldSignature(floating_action_button_theme.FloatingActionButtonThemeData, () => ({
    __proto__: dart.getFields(floating_action_button_theme.FloatingActionButtonThemeData.__proto__),
    foregroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    focusColor: dart.finalFieldType(dart.nullable(ui.Color)),
    hoverColor: dart.finalFieldType(dart.nullable(ui.Color)),
    splashColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    focusElevation: dart.finalFieldType(dart.nullable(core.double)),
    hoverElevation: dart.finalFieldType(dart.nullable(core.double)),
    disabledElevation: dart.finalFieldType(dart.nullable(core.double)),
    highlightElevation: dart.finalFieldType(dart.nullable(core.double)),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder))
  }));
  dart.defineExtensionMethods(floating_action_button_theme.FloatingActionButtonThemeData, ['_equals']);
  dart.defineExtensionAccessors(floating_action_button_theme.FloatingActionButtonThemeData, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/material/floating_action_button_theme.dart", {
    "package:flutter/src/material/floating_action_button_theme.dart": floating_action_button_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["floating_action_button_theme.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/floating_action_button_theme.dart.lib.js"}');
  // Exports:
  return {
    src__material__floating_action_button_theme: floating_action_button_theme
  };
}));

//# sourceMappingURL=floating_action_button_theme.dart.lib.js.map
