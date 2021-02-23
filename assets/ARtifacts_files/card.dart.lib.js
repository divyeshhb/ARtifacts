define(['dart_sdk', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/widgets/widget_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart'], (function load__packages__flutter__src__material__card_dart(dart_sdk, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__widgets__widget_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const card_theme = packages__flutter__src__material__icon_button$46dart.src__material__card_theme;
  const material = packages__flutter__src__material__icon_button$46dart.src__material__material;
  const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
  const container = packages__flutter__src__widgets__widget_span$46dart.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  var card = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/material/card.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/card.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C3 || CT.C3,
        [BorderSide_width]: 0,
        [BorderSide_color]: C4 || CT.C4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C6 || CT.C6,
        [BorderRadius_bottomLeft]: C6 || CT.C6,
        [BorderRadius_topRight]: C6 || CT.C6,
        [BorderRadius_topLeft]: C6 || CT.C6
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [OutlinedBorder_side]: C2 || CT.C2,
        [RoundedRectangleBorder_borderRadius]: C5 || CT.C5
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 13,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], _LocationL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 212,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 11,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shadowColor",
        [_Location_column]: 11,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 11,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderOnForeground",
        [_Location_column]: 11,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 11,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], _LocationL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 202,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 200,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/card.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 7,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], _LocationL());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 198,
        [_Location_file]: "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/material/card.dart"
      });
    }
  }, false);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C0;
  var _name = dart.privateName(borders, "_name");
  var C3;
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C4;
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var C2;
  var OutlinedBorder_side = dart.privateName(borders, "OutlinedBorder.side");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C6;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C5;
  var RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  var C1;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C9;
  var C10;
  var C8;
  var C7;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C12;
  var C11;
  var C23;
  var C24;
  var C22;
  var C21;
  var C27;
  var C28;
  var C26;
  var C25;
  var color$ = dart.privateName(card, "Card.color");
  var shadowColor$ = dart.privateName(card, "Card.shadowColor");
  var elevation$ = dart.privateName(card, "Card.elevation");
  var shape$ = dart.privateName(card, "Card.shape");
  var borderOnForeground$ = dart.privateName(card, "Card.borderOnForeground");
  var clipBehavior$ = dart.privateName(card, "Card.clipBehavior");
  var margin$ = dart.privateName(card, "Card.margin");
  var semanticContainer$ = dart.privateName(card, "Card.semanticContainer");
  var child$ = dart.privateName(card, "Card.child");
  card.Card = class Card extends framework.StatelessWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get shadowColor() {
      return this[shadowColor$];
    }
    set shadowColor(value) {
      super.shadowColor = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get borderOnForeground() {
      return this[borderOnForeground$];
    }
    set borderOnForeground(value) {
      super.borderOnForeground = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get semanticContainer() {
      return this[semanticContainer$];
    }
    set semanticContainer(value) {
      super.semanticContainer = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      if (context == null) dart.nullFailed(L0, 194, 29, "context");
      let theme = theme$.Theme.of(context);
      let cardTheme = card_theme.CardTheme.of(context);
      return new basic.Semantics.new({container: this.semanticContainer, child: new container.Container.new({margin: (t0$ = (t0 = this.margin, t0 == null ? cardTheme.margin : t0), t0$ == null ? C0 || CT.C0 : t0$), child: new material.Material.new({type: material.MaterialType.card, shadowColor: (t0$1 = (t0$0 = this.shadowColor, t0$0 == null ? cardTheme.shadowColor : t0$0), t0$1 == null ? theme.shadowColor : t0$1), color: (t0$3 = (t0$2 = this.color, t0$2 == null ? cardTheme.color : t0$2), t0$3 == null ? theme.cardColor : t0$3), elevation: (t0$5 = (t0$4 = this.elevation, t0$4 == null ? cardTheme.elevation : t0$4), t0$5 == null ? 1 : t0$5), shape: (t0$7 = (t0$6 = this.shape, t0$6 == null ? cardTheme.shape : t0$6), t0$7 == null ? C1 || CT.C1 : t0$7), borderOnForeground: this.borderOnForeground, clipBehavior: (t0$9 = (t0$8 = this.clipBehavior, t0$8 == null ? cardTheme.clipBehavior : t0$8), t0$9 == null ? ui.Clip.none : t0$9), child: new basic.Semantics.new({explicitChildNodes: !dart.test(this.semanticContainer), child: this.child, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25});
    }
  };
  (card.Card.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let borderOnForeground = opts && 'borderOnForeground' in opts ? opts.borderOnForeground : true;
    if (borderOnForeground == null) dart.nullFailed(L0, 110, 10, "borderOnForeground");
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let semanticContainer = opts && 'semanticContainer' in opts ? opts.semanticContainer : true;
    if (semanticContainer == null) dart.nullFailed(L0, 114, 10, "semanticContainer");
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[shadowColor$] = shadowColor;
    this[elevation$] = elevation;
    this[shape$] = shape;
    this[borderOnForeground$] = borderOnForeground;
    this[margin$] = margin;
    this[clipBehavior$] = clipBehavior;
    this[child$] = child;
    this[semanticContainer$] = semanticContainer;
    if (!(elevation == null || dart.notNull(elevation) >= 0.0)) dart.assertFailed(null, L0, 115, 15, "elevation == null || elevation >= 0.0");
    if (!(borderOnForeground != null)) dart.assertFailed(null, L0, 116, 15, "borderOnForeground != null");
    card.Card.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = card.Card.prototype;
  dart.addTypeTests(card.Card);
  dart.addTypeCaches(card.Card);
  dart.setMethodSignature(card.Card, () => ({
    __proto__: dart.getMethods(card.Card.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(card.Card, L1);
  dart.setFieldSignature(card.Card, () => ({
    __proto__: dart.getFields(card.Card.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    shadowColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    borderOnForeground: dart.finalFieldType(core.bool),
    clipBehavior: dart.finalFieldType(dart.nullable(ui.Clip)),
    margin: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    semanticContainer: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  dart.defineLazy(card.Card, {
    /*card.Card._defaultElevation*/get _defaultElevation() {
      return 1;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/card.dart", {
    "package:flutter/src/material/card.dart": card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4He;;;;;;IAOA;;;;;;IASC;;;;;;IASK;;;;;;IAMR;;;;;;IAMC;;;;;;IASc;;;;;;IAaf;;;;;;IAKG;;;;;;UAKY;;;AACR,kBAAc,gBAAG,OAAO;AACxB,sBAAsB,wBAAG,OAAO;AAEhD,YAAO,qCACM,+BACJ,sCAC8B,OAApB,wBAAP,OAAU,AAAU,SAAD,sBAAZ,kCACR,iCACc,0CAC+B,QAAzB,iCAAZ,OAAe,AAAU,SAAD,8BAAZ,OAA4B,AAAM,KAAD,8BAC1B,QAAnB,2BAAN,OAAS,AAAU,SAAD,wBAAZ,OAAsB,AAAM,KAAD,gCACI,QAAvB,+BAAV,OAAa,AAAU,SAAD,4BAAZ,0BACW,QAAnB,2BAAN,OAAS,AAAU,SAAD,wBAAZ,gDAGO,wCACiC,QAA1B,kCAAb,OAAgB,AAAU,SAAD,+BAAZ,OAAkC,6BACtD,6CACe,WAAC,gCACd;IAKjB;;;QAlHO;QACA;QACA;QACA;QACA;QACA;;QACA;QACA;QACA;QACA;;;IARA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAU,AAAQ,SAAT,IAAI,QAAkB,aAAV,SAAS,KAAI;UAClC,AAAmB,kBAAD,IAAI;AAC7B,6CAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;MA0EA,2BAAiB","file":"../../../../../../../../../../packages/flutter/src/material/card.dart.lib.js"}');
  // Exports:
  return {
    src__material__card: card
  };
}));

//# sourceMappingURL=card.dart.lib.js.map
