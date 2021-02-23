define(['dart_sdk', 'packages/flutter/src/services/system_channels.dart'], (function load__packages__flutter__src__services__system_chrome_dart(dart_sdk, packages__flutter__src__services__system_channels$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__system_channels$46dart.src__services__system_channels;
  var system_chrome = Object.create(dart.library);
  var $toString = dartx.toString;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(false);
  var DeviceOrientationL = () => (DeviceOrientationL = dart.constFn(dart.legacy(system_chrome.DeviceOrientation)))();
  var SystemUiOverlayL = () => (SystemUiOverlayL = dart.constFn(dart.legacy(system_chrome.SystemUiOverlay)))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/services/system_chrome.dart";
  var L1 = "package:flutter/src/services/system_chrome.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.portraitUp",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.landscapeLeft",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.portraitDown",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.landscapeRight",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], DeviceOrientationL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$]: "SystemUiOverlay.top",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$]: "SystemUiOverlay.bottom",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.constList([C5 || CT.C5, C6 || CT.C6], SystemUiOverlayL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.light",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.dark",
        index: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        [statusBarIconBrightness$]: C9 || CT.C9,
        [statusBarBrightness$]: C10 || CT.C10,
        [statusBarColor$]: null,
        [systemNavigationBarIconBrightness$]: C9 || CT.C9,
        [systemNavigationBarDividerColor$]: null,
        [systemNavigationBarColor$]: C11 || CT.C11
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        [statusBarIconBrightness$]: C10 || CT.C10,
        [statusBarBrightness$]: C9 || CT.C9,
        [statusBarColor$]: null,
        [systemNavigationBarIconBrightness$]: C9 || CT.C9,
        [systemNavigationBarDividerColor$]: null,
        [systemNavigationBarColor$]: C11 || CT.C11
      });
    }
  }, false);
  var _name$ = dart.privateName(system_chrome, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  system_chrome.DeviceOrientation = class DeviceOrientation extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (system_chrome.DeviceOrientation.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 31, 6, "index");
    if (_name == null) dart.nullFailed(L0, 31, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = system_chrome.DeviceOrientation.prototype;
  dart.addTypeTests(system_chrome.DeviceOrientation);
  dart.addTypeCaches(system_chrome.DeviceOrientation);
  dart.setLibraryUri(system_chrome.DeviceOrientation, L1);
  dart.setFieldSignature(system_chrome.DeviceOrientation, () => ({
    __proto__: dart.getFields(system_chrome.DeviceOrientation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.DeviceOrientation, ['toString']);
  system_chrome.DeviceOrientation.portraitUp = C0 || CT.C0;
  system_chrome.DeviceOrientation.landscapeLeft = C1 || CT.C1;
  system_chrome.DeviceOrientation.portraitDown = C2 || CT.C2;
  system_chrome.DeviceOrientation.landscapeRight = C3 || CT.C3;
  system_chrome.DeviceOrientation.values = C4 || CT.C4;
  var label$ = dart.privateName(system_chrome, "ApplicationSwitcherDescription.label");
  var primaryColor$ = dart.privateName(system_chrome, "ApplicationSwitcherDescription.primaryColor");
  system_chrome.ApplicationSwitcherDescription = class ApplicationSwitcherDescription extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
  };
  (system_chrome.ApplicationSwitcherDescription.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[label$] = label;
    this[primaryColor$] = primaryColor;
    ;
  }).prototype = system_chrome.ApplicationSwitcherDescription.prototype;
  dart.addTypeTests(system_chrome.ApplicationSwitcherDescription);
  dart.addTypeCaches(system_chrome.ApplicationSwitcherDescription);
  dart.setLibraryUri(system_chrome.ApplicationSwitcherDescription, L1);
  dart.setFieldSignature(system_chrome.ApplicationSwitcherDescription, () => ({
    __proto__: dart.getFields(system_chrome.ApplicationSwitcherDescription.__proto__),
    label: dart.finalFieldType(dart.nullable(core.String)),
    primaryColor: dart.finalFieldType(dart.nullable(core.int))
  }));
  var C5;
  var C6;
  var C7;
  system_chrome.SystemUiOverlay = class SystemUiOverlay extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (system_chrome.SystemUiOverlay.new = function(index, _name) {
    if (index == null) dart.nullFailed(L0, 74, 6, "index");
    if (_name == null) dart.nullFailed(L0, 74, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = system_chrome.SystemUiOverlay.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlay);
  dart.addTypeCaches(system_chrome.SystemUiOverlay);
  dart.setLibraryUri(system_chrome.SystemUiOverlay, L1);
  dart.setFieldSignature(system_chrome.SystemUiOverlay, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlay.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlay, ['toString']);
  system_chrome.SystemUiOverlay.top = C5 || CT.C5;
  system_chrome.SystemUiOverlay.bottom = C6 || CT.C6;
  system_chrome.SystemUiOverlay.values = C7 || CT.C7;
  var _toMap = dart.privateName(system_chrome, "_toMap");
  var systemNavigationBarColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarColor");
  var systemNavigationBarDividerColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarDividerColor");
  var systemNavigationBarIconBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarIconBrightness");
  var statusBarColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarColor");
  var statusBarBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarBrightness");
  var statusBarIconBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarIconBrightness");
  var _name = dart.privateName(ui, "_name");
  var C9;
  var C10;
  var Color_value = dart.privateName(ui, "Color.value");
  var C11;
  var C8;
  var C12;
  system_chrome.SystemUiOverlayStyle = class SystemUiOverlayStyle extends core.Object {
    get systemNavigationBarColor() {
      return this[systemNavigationBarColor$];
    }
    set systemNavigationBarColor(value) {
      super.systemNavigationBarColor = value;
    }
    get systemNavigationBarDividerColor() {
      return this[systemNavigationBarDividerColor$];
    }
    set systemNavigationBarDividerColor(value) {
      super.systemNavigationBarDividerColor = value;
    }
    get systemNavigationBarIconBrightness() {
      return this[systemNavigationBarIconBrightness$];
    }
    set systemNavigationBarIconBrightness(value) {
      super.systemNavigationBarIconBrightness = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    get statusBarBrightness() {
      return this[statusBarBrightness$];
    }
    set statusBarBrightness(value) {
      super.statusBarBrightness = value;
    }
    get statusBarIconBrightness() {
      return this[statusBarIconBrightness$];
    }
    set statusBarIconBrightness(value) {
      super.statusBarIconBrightness = value;
    }
    [_toMap]() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      return new (IdentityMapOfString$dynamic()).from(["systemNavigationBarColor", (t0 = this.systemNavigationBarColor, t0 == null ? null : t0.value), "systemNavigationBarDividerColor", (t0$ = this.systemNavigationBarDividerColor, t0$ == null ? null : t0$.value), "statusBarColor", (t0$0 = this.statusBarColor, t0$0 == null ? null : t0$0.value), "statusBarBrightness", (t0$1 = this.statusBarBrightness, t0$1 == null ? null : dart.toString(t0$1)), "statusBarIconBrightness", (t0$2 = this.statusBarIconBrightness, t0$2 == null ? null : dart.toString(t0$2)), "systemNavigationBarIconBrightness", (t0$3 = this.systemNavigationBarIconBrightness, t0$3 == null ? null : dart.toString(t0$3))]);
    }
    toString() {
      return dart.toString(this[_toMap]());
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      return new system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: (t0 = systemNavigationBarColor, t0 == null ? this.systemNavigationBarColor : t0), systemNavigationBarDividerColor: (t0$ = systemNavigationBarDividerColor, t0$ == null ? this.systemNavigationBarDividerColor : t0$), statusBarColor: (t0$0 = statusBarColor, t0$0 == null ? this.statusBarColor : t0$0), statusBarIconBrightness: (t0$1 = statusBarIconBrightness, t0$1 == null ? this.statusBarIconBrightness : t0$1), statusBarBrightness: (t0$2 = statusBarBrightness, t0$2 == null ? this.statusBarBrightness : t0$2), systemNavigationBarIconBrightness: (t0$3 = systemNavigationBarIconBrightness, t0$3 == null ? this.systemNavigationBarIconBrightness : t0$3)});
    }
    get hashCode() {
      return ui.hashValues(this.systemNavigationBarColor, this.systemNavigationBarDividerColor, this.statusBarColor, this.statusBarBrightness, this.statusBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return system_chrome.SystemUiOverlayStyle.is(other) && dart.equals(other.systemNavigationBarColor, this.systemNavigationBarColor) && dart.equals(other.systemNavigationBarDividerColor, this.systemNavigationBarDividerColor) && dart.equals(other.statusBarColor, this.statusBarColor) && dart.equals(other.statusBarIconBrightness, this.statusBarIconBrightness) && dart.equals(other.statusBarBrightness, this.statusBarBrightness) && dart.equals(other.systemNavigationBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
  };
  (system_chrome.SystemUiOverlayStyle.new = function(opts) {
    let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
    let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
    let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
    this[systemNavigationBarColor$] = systemNavigationBarColor;
    this[systemNavigationBarDividerColor$] = systemNavigationBarDividerColor;
    this[systemNavigationBarIconBrightness$] = systemNavigationBarIconBrightness;
    this[statusBarColor$] = statusBarColor;
    this[statusBarBrightness$] = statusBarBrightness;
    this[statusBarIconBrightness$] = statusBarIconBrightness;
    ;
  }).prototype = system_chrome.SystemUiOverlayStyle.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlayStyle);
  dart.addTypeCaches(system_chrome.SystemUiOverlayStyle);
  dart.setMethodSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getMethods(system_chrome.SystemUiOverlayStyle.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(system_chrome.SystemUiOverlayStyle, [], {statusBarBrightness: dart.nullable(ui.Brightness), statusBarColor: dart.nullable(ui.Color), statusBarIconBrightness: dart.nullable(ui.Brightness), systemNavigationBarColor: dart.nullable(ui.Color), systemNavigationBarDividerColor: dart.nullable(ui.Color), systemNavigationBarIconBrightness: dart.nullable(ui.Brightness)}, {})
  }));
  dart.setLibraryUri(system_chrome.SystemUiOverlayStyle, L1);
  dart.setFieldSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlayStyle.__proto__),
    systemNavigationBarColor: dart.finalFieldType(dart.nullable(ui.Color)),
    systemNavigationBarDividerColor: dart.finalFieldType(dart.nullable(ui.Color)),
    systemNavigationBarIconBrightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    statusBarColor: dart.finalFieldType(dart.nullable(ui.Color)),
    statusBarBrightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    statusBarIconBrightness: dart.finalFieldType(dart.nullable(ui.Brightness))
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlayStyle, ['toString', '_equals']);
  dart.defineExtensionAccessors(system_chrome.SystemUiOverlayStyle, ['hashCode']);
  dart.defineLazy(system_chrome.SystemUiOverlayStyle, {
    /*system_chrome.SystemUiOverlayStyle.light*/get light() {
      return C8 || CT.C8;
    },
    /*system_chrome.SystemUiOverlayStyle.dark*/get dark() {
      return C12 || CT.C12;
    }
  }, false);
  system_chrome.SystemChrome = class SystemChrome extends core.Object {
    static setPreferredOrientations(orientations) {
      if (orientations == null) dart.nullFailed(L0, 242, 72, "orientations");
      return async.async(dart.void, function* setPreferredOrientations() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setPreferredOrientations", system_chrome._stringify(orientations));
      });
    }
    static setApplicationSwitcherDescription(description) {
      if (description == null) dart.nullFailed(L0, 254, 88, "description");
      return async.async(dart.void, function* setApplicationSwitcherDescription() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setApplicationSwitcherDescription", new (IdentityMapOfString$dynamic()).from(["label", description.label, "primaryColor", description.primaryColor]));
      });
    }
    static setEnabledSystemUIOverlays(overlays) {
      if (overlays == null) dart.nullFailed(L0, 286, 72, "overlays");
      return async.async(dart.void, function* setEnabledSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIOverlays", system_chrome._stringify(overlays));
      });
    }
    static restoreSystemUIOverlays() {
      return async.async(dart.void, function* restoreSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.restoreSystemUIOverlays", null);
      });
    }
    static setSystemUIOverlayStyle(style) {
      if (style == null) dart.nullFailed(L0, 392, 60, "style");
      if (!(style != null)) dart.assertFailed(null, L0, 393, 12, "style != null");
      if (system_chrome.SystemChrome._pendingStyle != null) {
        system_chrome.SystemChrome._pendingStyle = style;
        return;
      }
      if (dart.equals(style, system_chrome.SystemChrome._latestStyle)) {
        return;
      }
      system_chrome.SystemChrome._pendingStyle = style;
      async.scheduleMicrotask(dart.fn(() => {
        if (!(system_chrome.SystemChrome._pendingStyle != null)) dart.assertFailed(null, L0, 406, 14, "_pendingStyle != null");
        if (!dart.equals(system_chrome.SystemChrome._pendingStyle, system_chrome.SystemChrome._latestStyle)) {
          system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIOverlayStyle", dart.nullCheck(system_chrome.SystemChrome._pendingStyle)[_toMap]());
          system_chrome.SystemChrome._latestStyle = system_chrome.SystemChrome._pendingStyle;
        }
        system_chrome.SystemChrome._pendingStyle = null;
      }, VoidTovoid()));
    }
    static get latestStyle() {
      return system_chrome.SystemChrome._latestStyle;
    }
  };
  (system_chrome.SystemChrome.__ = function() {
    ;
  }).prototype = system_chrome.SystemChrome.prototype;
  dart.addTypeTests(system_chrome.SystemChrome);
  dart.addTypeCaches(system_chrome.SystemChrome);
  dart.setLibraryUri(system_chrome.SystemChrome, L1);
  dart.defineLazy(system_chrome.SystemChrome, {
    /*system_chrome.SystemChrome._pendingStyle*/get _pendingStyle() {
      return null;
    },
    set _pendingStyle(_) {},
    /*system_chrome.SystemChrome._latestStyle*/get _latestStyle() {
      return null;
    },
    set _latestStyle(_) {}
  }, false);
  system_chrome._stringify = function _stringify(list) {
    if (list == null) dart.nullFailed(L0, 213, 39, "list");
    return (() => {
      let t0 = JSArrayOfString().of([]);
      for (let item of list)
        t0.push(dart.toString(item));
      return t0;
    })();
  };
  dart.trackLibraries("packages/flutter/src/services/system_chrome.dart", {
    "package:flutter/src/services/system_chrome.dart": system_chrome
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["system_chrome.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgDA;;;QAlBK;;;;;EAkBL;;;;;;;;;;;;;;;;;;IAagB;;;;;;IAMH;;;;;;;;QATiC;QAAY;IAAZ;IAAY;;EAAe;;;;;;;;;;;;;;;IAuBzE;;;QARK;;;;;EAQL;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBe;;;;;;IAKA;;;;;;IAOK;;;;;;IAKL;;;;;;IAKK;;;;;;IAKA;;;;;;;;AA0BhB,YAAwB,2CACtB,8EAA4B,OAA0B,WACtD,8FAAmC,OAAiC,YACpE,8DAAkB,OAAgB,aAClC,wEAAuB,OAAqB,sBAC5C,gFAA2B,OAAyB,sBACpD,oGAAqC,OAAmC;IAE5E;;AAGqB,YAAS,eAAT;IAAmB;;;UAI/B;UACA;UACA;UACK;UACA;UACA;AAEZ,YAAO,wEAC8C,KAAzB,wBAAwB,QAAxB,OAAiC,uEACM,MAAhC,+BAA+B,SAA/B,OAAwC,8DAC1C,OAAf,cAAc,UAAd,OAAuB,uDACU,OAAxB,uBAAuB,UAAvB,OAAgC,4DAChB,OAApB,mBAAmB,UAAnB,OAA4B,sEACoB,OAAlC,iCAAiC,UAAjC,OAA0C;IAEjF;;AAIE,YAAO,eACL,+BACA,sCACA,qBACA,0BACA,8BACA;IAEJ;;UAGwB;AACtB,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAMT,uCANG,KAAK,KAC0B,YAA/B,AAAM,KAAD,2BAA6B,kCACI,YAAtC,AAAM,KAAD,kCAAoC,yCACpB,YAArB,AAAM,KAAD,iBAAmB,wBACM,YAA9B,AAAM,KAAD,0BAA4B,iCACP,YAA1B,AAAM,KAAD,sBAAwB,6BACW,YAAxC,AAAM,KAAD,oCAAsC;IACpD;;;QAvHO;QACA;QACA;QACA;QACA;QACA;IALA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;MAoCgC,wCAAK;;;MAWL,uCAAI;;;;;;UAkG+B;AAAzB;AAIzC,QAHD,MAAqB,AAAS,gEAC5B,yCACA,yBAAW,YAAY;MAE3B;;;UAOqF;AAAhC;AAOlD,QAND,MAAqB,AAAS,gEAC5B,kDACiB,0CACf,SAAS,AAAY,WAAD,QACpB,gBAAgB,AAAY,WAAD;MAGjC;;;UAwBqE;AAAvB;AAI3C,QAHD,MAAqB,AAAS,gEAC5B,2CACA,yBAAW,QAAQ;MAEvB;;;AAW2C;AAIxC,QAHD,MAAqB,AAAS,gEAC5B,wCACA;MAEJ;;;UAqFyD;AACvD,YAAO,AAAM,KAAD,IAAI;AAChB,UAAI,4CAAiB;AAEE,QAArB,2CAAgB,KAAK;AACrB;;AAEF,UAAU,YAAN,KAAK,EAAI;AAGX;;AAEmB,MAArB,2CAAgB,KAAK;AAWnB,MAVF,wBAAkB;AAChB,cAAO,AAAc,4CAAG;AACxB,yBAAI,0CAAiB;AAIlB,UAHc,AAAS,gEACtB,wCACa,AAAE,eAAf;AAE0B,UAA5B,0CAAe;;AAEG,QAApB,2CAAgB;;IAEpB;;AAMgD;IAAY;;;;EAvM5C;;;;;MAmMa,wCAAa;;;;MAKb,uCAAY;;;;;;QAlNL;AAAS,UAAQ;;AACrD,eAAmB,OAAQ,KAAI;AAAO,8BAAL,IAAI;;;EACtC","file":"../../../../../../../../../../packages/flutter/src/services/system_chrome.dart.lib.js"}');
  // Exports:
  return {
    src__services__system_chrome: system_chrome
  };
}));

//# sourceMappingURL=system_chrome.dart.lib.js.map
