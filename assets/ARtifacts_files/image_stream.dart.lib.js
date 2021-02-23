define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/scheduler/binding.dart'], (function load__packages__flutter__src__painting__image_stream_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__scheduler__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  var image_stream = Object.create(dart.library);
  var $length = dartx.length;
  var $runtimeType = dartx.runtimeType;
  var $forEach = dartx.forEach;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $removeAt = dartx.removeAt;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $toList = dartx.toList;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $map = dartx.map;
  var $whereType = dartx.whereType;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(false);
  var JSArrayOfImageStreamListener = () => (JSArrayOfImageStreamListener = dart.constFn(_interceptors.JSArray$(image_stream.ImageStreamListener)))();
  var ObjectFlagPropertyOfImageStreamCompleter = () => (ObjectFlagPropertyOfImageStreamCompleter = dart.constFn(diagnostics.ObjectFlagProperty$(image_stream.ImageStreamCompleter)))();
  var ListOfImageStreamListener = () => (ListOfImageStreamListener = dart.constFn(core.List$(image_stream.ImageStreamListener)))();
  var ObjectFlagPropertyOfListOfImageStreamListener = () => (ObjectFlagPropertyOfListOfImageStreamListener = dart.constFn(diagnostics.ObjectFlagProperty$(ListOfImageStreamListener())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfVoidTovoid = () => (JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(VoidTovoid())))();
  var StackTraceN = () => (StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))();
  var ObjectAndStackTraceNTovoid = () => (ObjectAndStackTraceNTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, StackTraceN()])))();
  var ObjectAndStackTraceNToNvoid = () => (ObjectAndStackTraceNToNvoid = dart.constFn(dart.nullable(ObjectAndStackTraceNTovoid())))();
  var ImageStreamListenerToFn = () => (ImageStreamListenerToFn = dart.constFn(dart.fnType(ObjectAndStackTraceNToNvoid(), [image_stream.ImageStreamListener])))();
  var ImageChunkEventTovoid = () => (ImageChunkEventTovoid = dart.constFn(dart.fnType(dart.void, [image_stream.ImageChunkEvent])))();
  var ImageChunkEventToNvoid = () => (ImageChunkEventToNvoid = dart.constFn(dart.nullable(ImageChunkEventTovoid())))();
  var ImageStreamListenerToFn$ = () => (ImageStreamListenerToFn$ = dart.constFn(dart.fnType(ImageChunkEventToNvoid(), [image_stream.ImageStreamListener])))();
  var DiagnosticsPropertyOfImageInfo = () => (DiagnosticsPropertyOfImageInfo = dart.constFn(diagnostics.DiagnosticsProperty$(image_stream.ImageInfo)))();
  var ObjectAndStackTraceToNull = () => (ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))();
  const CT = Object.create(null);
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/painting/image_stream.dart";
  var L1 = "package:flutter/src/painting/image_stream.dart";
  var image$ = dart.privateName(image_stream, "ImageInfo.image");
  var scale$ = dart.privateName(image_stream, "ImageInfo.scale");
  var debugLabel$ = dart.privateName(image_stream, "ImageInfo.debugLabel");
  image_stream.ImageInfo = class ImageInfo extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    clone() {
      return new image_stream.ImageInfo.new({image: this.image.clone(), scale: this.scale, debugLabel: this.debugLabel});
    }
    isCloneOf(other) {
      if (other == null) dart.nullFailed(L0, 88, 28, "other");
      return dart.test(other.image.isCloneOf(this.image)) && this.scale == this.scale && other.debugLabel == this.debugLabel;
    }
    dispose() {
      let t0, t0$;
      if (!(dart.notNull((t0$ = (t0 = this.image.debugGetOpenHandleStackTraces(), t0 == null ? null : t0[$length]), t0$ == null ? 1 : t0$)) > 0)) dart.assertFailed(null, L0, 120, 12, "(image.debugGetOpenHandleStackTraces()?.length ?? 1) > 0");
      this.image.dispose();
    }
    toString() {
      return (this.debugLabel != null ? dart.str(this.debugLabel) + " " : "") + dart.str(this.image) + " @ " + dart.str(debug.debugFormatDouble(this.scale)) + "x";
    }
    get hashCode() {
      return ui.hashValues(this.image, this.scale, this.debugLabel);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_stream.ImageInfo.is(other) && dart.equals(other.image, this.image) && other.scale == this.scale && other.debugLabel == this.debugLabel;
    }
  };
  (image_stream.ImageInfo.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    if (image == null) dart.nullFailed(L0, 27, 35, "image");
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    if (scale == null) dart.nullFailed(L0, 27, 47, "scale");
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    this[image$] = image;
    this[scale$] = scale;
    this[debugLabel$] = debugLabel;
    if (!(image != null)) dart.assertFailed(null, L0, 28, 14, "image != null");
    if (!(scale != null)) dart.assertFailed(null, L0, 29, 14, "scale != null");
    ;
  }).prototype = image_stream.ImageInfo.prototype;
  dart.addTypeTests(image_stream.ImageInfo);
  dart.addTypeCaches(image_stream.ImageInfo);
  dart.setMethodSignature(image_stream.ImageInfo, () => ({
    __proto__: dart.getMethods(image_stream.ImageInfo.__proto__),
    clone: dart.fnType(image_stream.ImageInfo, []),
    isCloneOf: dart.fnType(core.bool, [image_stream.ImageInfo]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(image_stream.ImageInfo, L1);
  dart.setFieldSignature(image_stream.ImageInfo, () => ({
    __proto__: dart.getFields(image_stream.ImageInfo.__proto__),
    image: dart.finalFieldType(ui.Image),
    scale: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(image_stream.ImageInfo, ['toString', '_equals']);
  dart.defineExtensionAccessors(image_stream.ImageInfo, ['hashCode']);
  var onImage$ = dart.privateName(image_stream, "ImageStreamListener.onImage");
  var onChunk$ = dart.privateName(image_stream, "ImageStreamListener.onChunk");
  var onError$ = dart.privateName(image_stream, "ImageStreamListener.onError");
  image_stream.ImageStreamListener = class ImageStreamListener extends core.Object {
    get onImage() {
      return this[onImage$];
    }
    set onImage(value) {
      super.onImage = value;
    }
    get onChunk() {
      return this[onChunk$];
    }
    set onChunk(value) {
      super.onChunk = value;
    }
    get onError() {
      return this[onError$];
    }
    set onError(value) {
      super.onError = value;
    }
    get hashCode() {
      return ui.hashValues(this.onImage, this.onChunk, this.onError);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_stream.ImageStreamListener.is(other) && dart.equals(other.onImage, this.onImage) && dart.equals(other.onChunk, this.onChunk) && dart.equals(other.onError, this.onError);
    }
  };
  (image_stream.ImageStreamListener.new = function(onImage, opts) {
    if (onImage == null) dart.nullFailed(L0, 157, 10, "onImage");
    let onChunk = opts && 'onChunk' in opts ? opts.onChunk : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    this[onImage$] = onImage;
    this[onChunk$] = onChunk;
    this[onError$] = onError;
    if (!(onImage != null)) dart.assertFailed(null, L0, 160, 15, "onImage != null");
    ;
  }).prototype = image_stream.ImageStreamListener.prototype;
  dart.addTypeTests(image_stream.ImageStreamListener);
  dart.addTypeCaches(image_stream.ImageStreamListener);
  dart.setLibraryUri(image_stream.ImageStreamListener, L1);
  dart.setFieldSignature(image_stream.ImageStreamListener, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamListener.__proto__),
    onImage: dart.finalFieldType(dart.fnType(dart.void, [image_stream.ImageInfo, core.bool])),
    onChunk: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [image_stream.ImageChunkEvent]))),
    onError: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)])))
  }));
  dart.defineExtensionMethods(image_stream.ImageStreamListener, ['_equals']);
  dart.defineExtensionAccessors(image_stream.ImageStreamListener, ['hashCode']);
  var cumulativeBytesLoaded$ = dart.privateName(image_stream, "ImageChunkEvent.cumulativeBytesLoaded");
  var expectedTotalBytes$ = dart.privateName(image_stream, "ImageChunkEvent.expectedTotalBytes");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  image_stream.ImageChunkEvent = class ImageChunkEvent extends Object_Diagnosticable$36 {
    get cumulativeBytesLoaded() {
      return this[cumulativeBytesLoaded$];
    }
    set cumulativeBytesLoaded(value) {
      super.cumulativeBytesLoaded = value;
    }
    get expectedTotalBytes() {
      return this[expectedTotalBytes$];
    }
    set expectedTotalBytes(value) {
      super.expectedTotalBytes = value;
    }
    debugFillProperties(properties) {
      if (properties == null) dart.nullFailed(L0, 273, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("cumulativeBytesLoaded", this.cumulativeBytesLoaded));
      properties.add(new diagnostics.IntProperty.new("expectedTotalBytes", this.expectedTotalBytes));
    }
  };
  (image_stream.ImageChunkEvent.new = function(opts) {
    let cumulativeBytesLoaded = opts && 'cumulativeBytesLoaded' in opts ? opts.cumulativeBytesLoaded : null;
    if (cumulativeBytesLoaded == null) dart.nullFailed(L0, 251, 19, "cumulativeBytesLoaded");
    let expectedTotalBytes = opts && 'expectedTotalBytes' in opts ? opts.expectedTotalBytes : null;
    this[cumulativeBytesLoaded$] = cumulativeBytesLoaded;
    this[expectedTotalBytes$] = expectedTotalBytes;
    if (!(dart.notNull(cumulativeBytesLoaded) >= 0)) dart.assertFailed(null, L0, 253, 15, "cumulativeBytesLoaded >= 0");
    if (!(expectedTotalBytes == null || dart.notNull(expectedTotalBytes) >= 0)) dart.assertFailed(null, L0, 254, 15, "expectedTotalBytes == null || expectedTotalBytes >= 0");
    ;
  }).prototype = image_stream.ImageChunkEvent.prototype;
  dart.addTypeTests(image_stream.ImageChunkEvent);
  dart.addTypeCaches(image_stream.ImageChunkEvent);
  dart.setLibraryUri(image_stream.ImageChunkEvent, L1);
  dart.setFieldSignature(image_stream.ImageChunkEvent, () => ({
    __proto__: dart.getFields(image_stream.ImageChunkEvent.__proto__),
    cumulativeBytesLoaded: dart.finalFieldType(core.int),
    expectedTotalBytes: dart.finalFieldType(dart.nullable(core.int))
  }));
  var _completer$ = dart.privateName(image_stream, "_completer");
  var _listeners = dart.privateName(image_stream, "_listeners");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  image_stream.ImageStream = class ImageStream extends Object_Diagnosticable$36$ {
    get completer() {
      return this[_completer$];
    }
    setCompleter(value) {
      if (value == null) dart.nullFailed(L0, 323, 42, "value");
      if (!(this[_completer$] == null)) dart.assertFailed(null, L0, 324, 12, "_completer == null");
      this[_completer$] = value;
      if (this[_listeners] != null) {
        let initialListeners = dart.nullCheck(this[_listeners]);
        this[_listeners] = null;
        initialListeners[$forEach](dart.bind(dart.nullCheck(this[_completer$]), 'addListener'));
      }
    }
    addListener(listener) {
      if (listener == null) dart.nullFailed(L0, 354, 40, "listener");
      if (this[_completer$] != null) return dart.nullCheck(this[_completer$]).addListener(listener);
      this[_listeners] == null ? this[_listeners] = JSArrayOfImageStreamListener().of([]) : null;
      dart.nullCheck(this[_listeners])[$add](listener);
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L0, 365, 43, "listener");
      if (this[_completer$] != null) return dart.nullCheck(this[_completer$]).removeListener(listener);
      if (!(this[_listeners] != null)) dart.assertFailed(null, L0, 368, 12, "_listeners != null");
      for (let i = 0; i < dart.notNull(dart.nullCheck(this[_listeners])[$length]); i = i + 1) {
        if (dart.equals(dart.nullCheck(this[_listeners])[$_get](i), listener)) {
          dart.nullCheck(this[_listeners])[$removeAt](i);
          break;
        }
      }
    }
    get key() {
      let t0;
      t0 = this[_completer$];
      return t0 == null ? this : t0;
    }
    debugFillProperties(properties) {
      let t0, t0$, t0$0, t0$1;
      if (properties == null) dart.nullFailed(L0, 391, 56, "properties");
      super.debugFillProperties(properties);
      properties.add(new (ObjectFlagPropertyOfImageStreamCompleter()).new("completer", this[_completer$], {ifPresent: (t0 = this[_completer$], t0 == null ? null : t0.toStringShort()), ifNull: "unresolved"}));
      properties.add(new (ObjectFlagPropertyOfListOfImageStreamListener()).new("listeners", this[_listeners], {ifPresent: dart.str((t0$ = this[_listeners], t0$ == null ? null : t0$[$length])) + " listener" + ((t0$0 = this[_listeners], t0$0 == null ? null : t0$0[$length]) === 1 ? "" : "s"), ifNull: "no listeners", level: this[_completer$] != null ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      t0$1 = this[_completer$];
      t0$1 == null ? null : t0$1.debugFillProperties(properties);
    }
  };
  (image_stream.ImageStream.new = function() {
    this[_completer$] = null;
    this[_listeners] = null;
    ;
  }).prototype = image_stream.ImageStream.prototype;
  dart.addTypeTests(image_stream.ImageStream);
  dart.addTypeCaches(image_stream.ImageStream);
  dart.setMethodSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getMethods(image_stream.ImageStream.__proto__),
    setCompleter: dart.fnType(dart.void, [image_stream.ImageStreamCompleter]),
    addListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    removeListener: dart.fnType(dart.void, [image_stream.ImageStreamListener])
  }));
  dart.setGetterSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getGetters(image_stream.ImageStream.__proto__),
    completer: dart.nullable(image_stream.ImageStreamCompleter),
    key: core.Object
  }));
  dart.setLibraryUri(image_stream.ImageStream, L1);
  dart.setFieldSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getFields(image_stream.ImageStream.__proto__),
    [_completer$]: dart.fieldType(dart.nullable(image_stream.ImageStreamCompleter)),
    [_listeners]: dart.fieldType(dart.nullable(core.List$(image_stream.ImageStreamListener)))
  }));
  var _keepAliveHandles = dart.privateName(image_stream, "_keepAliveHandles");
  var _disposed = dart.privateName(image_stream, "_disposed");
  var _maybeDispose = dart.privateName(image_stream, "_maybeDispose");
  image_stream.ImageStreamCompleterHandle = class ImageStreamCompleterHandle extends core.Object {
    dispose() {
      let t0;
      if (!(this[_completer$] != null)) dart.assertFailed(null, L0, 431, 12, "_completer != null");
      if (!(dart.notNull(dart.nullCheck(this[_completer$])[_keepAliveHandles]) > 0)) dart.assertFailed(null, L0, 432, 12, "_completer!._keepAliveHandles > 0");
      if (!!dart.test(dart.nullCheck(this[_completer$])[_disposed])) dart.assertFailed(null, L0, 433, 12, "!_completer!._disposed");
      t0 = dart.nullCheck(this[_completer$]);
      t0[_keepAliveHandles] = dart.notNull(t0[_keepAliveHandles]) - 1;
      dart.nullCheck(this[_completer$])[_maybeDispose]();
      this[_completer$] = null;
    }
  };
  (image_stream.ImageStreamCompleterHandle.__ = function(_completer) {
    let t0;
    if (_completer == null) dart.nullFailed(L0, 420, 58, "_completer");
    this[_completer$] = _completer;
    t0 = dart.nullCheck(this[_completer$]);
    t0[_keepAliveHandles] = dart.notNull(t0[_keepAliveHandles]) + 1;
  }).prototype = image_stream.ImageStreamCompleterHandle.prototype;
  dart.addTypeTests(image_stream.ImageStreamCompleterHandle);
  dart.addTypeCaches(image_stream.ImageStreamCompleterHandle);
  dart.setMethodSignature(image_stream.ImageStreamCompleterHandle, () => ({
    __proto__: dart.getMethods(image_stream.ImageStreamCompleterHandle.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(image_stream.ImageStreamCompleterHandle, L1);
  dart.setFieldSignature(image_stream.ImageStreamCompleterHandle, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamCompleterHandle.__proto__),
    [_completer$]: dart.fieldType(dart.nullable(image_stream.ImageStreamCompleter))
  }));
  var _currentImage = dart.privateName(image_stream, "_currentImage");
  var _currentError = dart.privateName(image_stream, "_currentError");
  var _hadAtLeastOneListener = dart.privateName(image_stream, "_hadAtLeastOneListener");
  var _onLastListenerRemovedCallbacks = dart.privateName(image_stream, "_onLastListenerRemovedCallbacks");
  var _checkDisposed = dart.privateName(image_stream, "_checkDisposed");
  var debugLabel = dart.privateName(image_stream, "ImageStreamCompleter.debugLabel");
  const Object_Diagnosticable$36$0 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$0.new = function() {
  }).prototype = Object_Diagnosticable$36$0.prototype;
  dart.applyMixin(Object_Diagnosticable$36$0, diagnostics.Diagnosticable);
  image_stream.ImageStreamCompleter = class ImageStreamCompleter extends Object_Diagnosticable$36$0 {
    get debugLabel() {
      return this[debugLabel];
    }
    set debugLabel(value) {
      this[debugLabel] = value;
    }
    get hasListeners() {
      return this[_listeners][$isNotEmpty];
    }
    addListener(listener) {
      let t2, t1, t0;
      if (listener == null) dart.nullFailed(L0, 487, 40, "listener");
      this[_checkDisposed]();
      this[_hadAtLeastOneListener] = true;
      this[_listeners][$add](listener);
      if (this[_currentImage] != null) {
        try {
          t0 = listener;
          t1 = dart.nullCheck(this[_currentImage]).clone();
          t2 = true;
          t0.onImage(t1, t2);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            this.reportError({context: new assertions.ErrorDescription.new("by a synchronously-called image listener"), exception: exception, stack: stack});
          } else
            throw e;
        }
      }
      if (this[_currentError] != null && listener.onError != null) {
        try {
          dart.nullCheck(listener.onError)(dart.nullCheck(this[_currentError]).exception, dart.nullCheck(this[_currentError]).stack);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, library: "image resource service", context: new assertions.ErrorDescription.new("by a synchronously-called image error listener"), stack: stack}));
          } else
            throw e$;
        }
      }
    }
    keepAlive() {
      this[_checkDisposed]();
      return new image_stream.ImageStreamCompleterHandle.__(this);
    }
    removeListener(listener) {
      if (listener == null) dart.nullFailed(L0, 539, 43, "listener");
      this[_checkDisposed]();
      for (let i = 0; i < dart.notNull(this[_listeners][$length]); i = i + 1) {
        if (dart.equals(this[_listeners][$_get](i), listener)) {
          this[_listeners][$removeAt](i);
          break;
        }
      }
      if (dart.test(this[_listeners][$isEmpty])) {
        let callbacks = this[_onLastListenerRemovedCallbacks][$toList]();
        for (let callback of callbacks) {
          callback();
        }
        this[_onLastListenerRemovedCallbacks][$clear]();
        this[_maybeDispose]();
      }
    }
    [_maybeDispose]() {
      let t2;
      if (!dart.test(this[_hadAtLeastOneListener]) || dart.test(this[_disposed]) || dart.test(this[_listeners][$isNotEmpty]) || this[_keepAliveHandles] !== 0) {
        return;
      }
      t2 = this[_currentImage];
      t2 == null ? null : t2.dispose();
      this[_currentImage] = null;
      this[_disposed] = true;
    }
    [_checkDisposed]() {
      if (dart.test(this[_disposed])) {
        dart.throw(new core.StateError.new("Stream has been disposed.\n" + "An ImageStream is considered disposed once at least one listener has " + "been added and subsequently all listeners have been removed and no " + "handles are outstanding from the keepAlive method.\n" + "To resolve this error, maintain at least one listener on the stream, " + "or create an ImageStreamCompleterHandle from the keepAlive " + "method, or create a new stream for the image."));
      }
    }
    addOnLastListenerRemovedCallback(callback) {
      if (callback == null) dart.nullFailed(L0, 588, 54, "callback");
      if (!(callback != null)) dart.assertFailed(null, L0, 589, 12, "callback != null");
      this[_checkDisposed]();
      this[_onLastListenerRemovedCallbacks][$add](callback);
    }
    removeOnLastListenerRemovedCallback(callback) {
      if (callback == null) dart.nullFailed(L0, 596, 57, "callback");
      if (!(callback != null)) dart.assertFailed(null, L0, 597, 12, "callback != null");
      this[_checkDisposed]();
      this[_onLastListenerRemovedCallbacks][$remove](callback);
    }
    setImage(image) {
      let t2, t4, t3, t2$;
      if (image == null) dart.nullFailed(L0, 604, 27, "image");
      this[_checkDisposed]();
      t2 = this[_currentImage];
      t2 == null ? null : t2.dispose();
      this[_currentImage] = image;
      if (dart.test(this[_listeners][$isEmpty])) return;
      let localListeners = ListOfImageStreamListener().from(this[_listeners]);
      for (let listener of localListeners) {
        try {
          t2$ = listener;
          t3 = image.clone();
          t4 = false;
          t2$.onImage(t3, t4);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            this.reportError({context: new assertions.ErrorDescription.new("by an image listener"), exception: exception, stack: stack});
          } else
            throw e;
        }
      }
    }
    reportError(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      if (exception == null) dart.nullFailed(L0, 658, 21, "exception");
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      if (silent == null) dart.nullFailed(L0, 661, 10, "silent");
      this[_currentError] = new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "image resource service", context: context, informationCollector: informationCollector, silent: silent});
      let localErrorListeners = this[_listeners][$map](ObjectAndStackTraceNToNvoid(), dart.fn(listener => {
        if (listener == null) dart.nullFailed(L0, 674, 56, "listener");
        return listener.onError;
      }, ImageStreamListenerToFn()))[$whereType](ObjectAndStackTraceNTovoid())[$toList]();
      if (dart.test(localErrorListeners[$isEmpty])) {
        assertions.FlutterError.reportError(dart.nullCheck(this[_currentError]));
      } else {
        for (let errorListener of localErrorListeners) {
          try {
            errorListener(exception, stack);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({context: new assertions.ErrorDescription.new("when reporting an error to an image listener"), library: "image resource service", exception: exception, stack: stack}));
            } else
              throw e;
          }
        }
      }
    }
    reportImageChunkEvent(event) {
      if (event == null) dart.nullFailed(L0, 702, 46, "event");
      this[_checkDisposed]();
      if (dart.test(this.hasListeners)) {
        let localListeners = this[_listeners][$map](ImageChunkEventToNvoid(), dart.fn(listener => {
          if (listener == null) dart.nullFailed(L0, 707, 58, "listener");
          return listener.onChunk;
        }, ImageStreamListenerToFn$()))[$whereType](ImageChunkEventTovoid())[$toList]();
        for (let listener of localListeners) {
          listener(event);
        }
      }
    }
    debugFillProperties(description) {
      if (description == null) dart.nullFailed(L0, 719, 56, "description");
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfImageInfo()).new("current", this[_currentImage], {ifNull: "unresolved", showName: false}));
      description.add(new (ObjectFlagPropertyOfListOfImageStreamListener()).new("listeners", this[_listeners], {ifPresent: dart.str(this[_listeners][$length]) + " listener" + (this[_listeners][$length] === 1 ? "" : "s")}));
      description.add(new diagnostics.FlagProperty.new("disposed", {value: this[_disposed], ifTrue: "<disposed>"}));
    }
  };
  (image_stream.ImageStreamCompleter.new = function() {
    this[_listeners] = JSArrayOfImageStreamListener().of([]);
    this[_currentImage] = null;
    this[_currentError] = null;
    this[debugLabel] = null;
    this[_hadAtLeastOneListener] = false;
    this[_keepAliveHandles] = 0;
    this[_disposed] = false;
    this[_onLastListenerRemovedCallbacks] = JSArrayOfVoidTovoid().of([]);
    ;
  }).prototype = image_stream.ImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.ImageStreamCompleter);
  dart.addTypeCaches(image_stream.ImageStreamCompleter);
  dart.setMethodSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getMethods(image_stream.ImageStreamCompleter.__proto__),
    addListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    keepAlive: dart.fnType(image_stream.ImageStreamCompleterHandle, []),
    removeListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    [_maybeDispose]: dart.fnType(dart.void, []),
    [_checkDisposed]: dart.fnType(dart.void, []),
    addOnLastListenerRemovedCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeOnLastListenerRemovedCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    setImage: dart.fnType(dart.void, [image_stream.ImageInfo]),
    reportError: dart.fnType(dart.void, [], {context: dart.nullable(diagnostics.DiagnosticsNode), informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), silent: core.bool, stack: dart.nullable(core.StackTrace)}, {exception: core.Object}),
    reportImageChunkEvent: dart.fnType(dart.void, [image_stream.ImageChunkEvent])
  }));
  dart.setGetterSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getGetters(image_stream.ImageStreamCompleter.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(image_stream.ImageStreamCompleter, L1);
  dart.setFieldSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamCompleter.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(image_stream.ImageStreamListener)),
    [_currentImage]: dart.fieldType(dart.nullable(image_stream.ImageInfo)),
    [_currentError]: dart.fieldType(dart.nullable(assertions.FlutterErrorDetails)),
    debugLabel: dart.fieldType(dart.nullable(core.String)),
    [_hadAtLeastOneListener]: dart.fieldType(core.bool),
    [_keepAliveHandles]: dart.fieldType(core.int),
    [_disposed]: dart.fieldType(core.bool),
    [_onLastListenerRemovedCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [])))
  }));
  image_stream.OneFrameImageStreamCompleter = class OneFrameImageStreamCompleter extends image_stream.ImageStreamCompleter {};
  (image_stream.OneFrameImageStreamCompleter.new = function(image, opts) {
    if (image == null) dart.nullFailed(L0, 748, 50, "image");
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    if (!(image != null)) dart.assertFailed(null, L0, 749, 16, "image != null");
    image_stream.OneFrameImageStreamCompleter.__proto__.new.call(this);
    image.then(dart.void, dart.bind(this, 'setImage'), {onError: dart.fn((error, stack) => {
        if (error == null) dart.nullFailed(L0, 750, 49, "error");
        if (stack == null) dart.nullFailed(L0, 750, 67, "stack");
        this.reportError({context: new assertions.ErrorDescription.new("resolving a single-frame image stream"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, ObjectAndStackTraceToNull())});
  }).prototype = image_stream.OneFrameImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.OneFrameImageStreamCompleter);
  dart.addTypeCaches(image_stream.OneFrameImageStreamCompleter);
  dart.setLibraryUri(image_stream.OneFrameImageStreamCompleter, L1);
  var _codec = dart.privateName(image_stream, "_codec");
  var _nextFrame = dart.privateName(image_stream, "_nextFrame");
  var __MultiFrameImageStreamCompleter__shownTimestamp = dart.privateName(image_stream, "_#MultiFrameImageStreamCompleter#_shownTimestamp");
  var __MultiFrameImageStreamCompleter__shownTimestamp_isSet = dart.privateName(image_stream, "_#MultiFrameImageStreamCompleter#_shownTimestamp#isSet");
  var _frameDuration = dart.privateName(image_stream, "_frameDuration");
  var _framesEmitted = dart.privateName(image_stream, "_framesEmitted");
  var _timer = dart.privateName(image_stream, "_timer");
  var _frameCallbackScheduled = dart.privateName(image_stream, "_frameCallbackScheduled");
  var _informationCollector = dart.privateName(image_stream, "_informationCollector");
  var _scale = dart.privateName(image_stream, "_scale");
  var _handleCodecReady = dart.privateName(image_stream, "_handleCodecReady");
  var _shownTimestamp = dart.privateName(image_stream, "_shownTimestamp");
  var _decodeNextFrameAndSchedule = dart.privateName(image_stream, "_decodeNextFrameAndSchedule");
  var _isFirstFrame = dart.privateName(image_stream, "_isFirstFrame");
  var _hasFrameDurationPassed = dart.privateName(image_stream, "_hasFrameDurationPassed");
  var _emitFrame = dart.privateName(image_stream, "_emitFrame");
  var _scheduleAppFrame = dart.privateName(image_stream, "_scheduleAppFrame");
  var _handleAppFrame = dart.privateName(image_stream, "_handleAppFrame");
  image_stream.MultiFrameImageStreamCompleter = class MultiFrameImageStreamCompleter extends image_stream.ImageStreamCompleter {
    get [_shownTimestamp]() {
      let t4;
      return dart.test(this[__MultiFrameImageStreamCompleter__shownTimestamp_isSet]) ? (t4 = this[__MultiFrameImageStreamCompleter__shownTimestamp], t4) : dart.throw(new _internal.LateError.fieldNI("_shownTimestamp"));
    }
    set [_shownTimestamp](t4) {
      if (t4 == null) dart.nullFailed(L0, 851, 17, "null");
      this[__MultiFrameImageStreamCompleter__shownTimestamp_isSet] = true;
      this[__MultiFrameImageStreamCompleter__shownTimestamp] = t4;
    }
    [_handleCodecReady](codec) {
      if (codec == null) dart.nullFailed(L0, 861, 35, "codec");
      this[_codec] = codec;
      if (!(this[_codec] != null)) dart.assertFailed(null, L0, 863, 12, "_codec != null");
      if (dart.test(this.hasListeners)) {
        this[_decodeNextFrameAndSchedule]();
      }
    }
    [_handleAppFrame](timestamp) {
      if (timestamp == null) dart.nullFailed(L0, 870, 33, "timestamp");
      this[_frameCallbackScheduled] = false;
      if (!dart.test(this.hasListeners)) return;
      if (!(this[_nextFrame] != null)) dart.assertFailed(null, L0, 874, 12, "_nextFrame != null");
      if (dart.test(this[_isFirstFrame]()) || dart.test(this[_hasFrameDurationPassed](timestamp))) {
        this[_emitFrame](new image_stream.ImageInfo.new({image: dart.nullCheck(this[_nextFrame]).image.clone(), scale: this[_scale], debugLabel: this.debugLabel}));
        this[_shownTimestamp] = timestamp;
        this[_frameDuration] = dart.nullCheck(this[_nextFrame]).duration;
        dart.nullCheck(this[_nextFrame]).image.dispose();
        this[_nextFrame] = null;
        let completedCycles = (dart.notNull(this[_framesEmitted]) / dart.notNull(dart.nullCheck(this[_codec]).frameCount))[$truncate]();
        if (dart.nullCheck(this[_codec]).repetitionCount === -1 || completedCycles <= dart.notNull(dart.nullCheck(this[_codec]).repetitionCount)) {
          this[_decodeNextFrameAndSchedule]();
        }
        return;
      }
      let delay = dart.nullCheck(this[_frameDuration])['-'](timestamp['-'](this[_shownTimestamp]));
      this[_timer] = async.Timer.new(delay['*'](binding.timeDilation), dart.fn(() => {
        this[_scheduleAppFrame]();
      }, VoidTovoid()));
    }
    [_isFirstFrame]() {
      return this[_frameDuration] == null;
    }
    [_hasFrameDurationPassed](timestamp) {
      if (timestamp == null) dart.nullFailed(L0, 901, 41, "timestamp");
      return timestamp['-'](this[_shownTimestamp])['>='](dart.nullCheck(this[_frameDuration]));
    }
    [_decodeNextFrameAndSchedule]() {
      return async.async(dart.void, (function* _decodeNextFrameAndSchedule() {
        let t5;
        t5 = this[_nextFrame];
        t5 == null ? null : t5.image.dispose();
        this[_nextFrame] = null;
        try {
          this[_nextFrame] = (yield dart.nullCheck(this[_codec]).getNextFrame());
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            this.reportError({context: new assertions.ErrorDescription.new("resolving an image frame"), exception: exception, stack: stack, informationCollector: this[_informationCollector], silent: true});
            return;
          } else
            throw e;
        }
        if (dart.nullCheck(this[_codec]).frameCount === 1) {
          if (!dart.test(this.hasListeners)) {
            return;
          }
          this[_emitFrame](new image_stream.ImageInfo.new({image: dart.nullCheck(this[_nextFrame]).image.clone(), scale: this[_scale], debugLabel: this.debugLabel}));
          dart.nullCheck(this[_nextFrame]).image.dispose();
          this[_nextFrame] = null;
          return;
        }
        this[_scheduleAppFrame]();
      }).bind(this));
    }
    [_scheduleAppFrame]() {
      if (dart.test(this[_frameCallbackScheduled])) {
        return;
      }
      this[_frameCallbackScheduled] = true;
      dart.nullCheck(binding.SchedulerBinding.instance).scheduleFrameCallback(dart.bind(this, _handleAppFrame));
    }
    [_emitFrame](imageInfo) {
      if (imageInfo == null) dart.nullFailed(L0, 951, 29, "imageInfo");
      this.setImage(imageInfo);
      this[_framesEmitted] = dart.notNull(this[_framesEmitted]) + 1;
    }
    addListener(listener) {
      if (listener == null) dart.nullFailed(L0, 957, 40, "listener");
      if (!dart.test(this.hasListeners) && this[_codec] != null) this[_decodeNextFrameAndSchedule]();
      super.addListener(listener);
    }
    removeListener(listener) {
      let t6;
      if (listener == null) dart.nullFailed(L0, 964, 43, "listener");
      super.removeListener(listener);
      if (!dart.test(this.hasListeners)) {
        t6 = this[_timer];
        t6 == null ? null : t6.cancel();
        this[_timer] = null;
      }
    }
  };
  (image_stream.MultiFrameImageStreamCompleter.new = function(opts) {
    let codec = opts && 'codec' in opts ? opts.codec : null;
    if (codec == null) dart.nullFailed(L0, 813, 31, "codec");
    let scale = opts && 'scale' in opts ? opts.scale : null;
    if (scale == null) dart.nullFailed(L0, 814, 21, "scale");
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let chunkEvents = opts && 'chunkEvents' in opts ? opts.chunkEvents : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    this[_codec] = null;
    this[_nextFrame] = null;
    this[__MultiFrameImageStreamCompleter__shownTimestamp] = null;
    this[__MultiFrameImageStreamCompleter__shownTimestamp_isSet] = false;
    this[_frameDuration] = null;
    this[_framesEmitted] = 0;
    this[_timer] = null;
    this[_frameCallbackScheduled] = false;
    if (!(codec != null)) dart.assertFailed(null, L0, 818, 15, "codec != null");
    this[_informationCollector] = informationCollector;
    this[_scale] = scale;
    image_stream.MultiFrameImageStreamCompleter.__proto__.new.call(this);
    this.debugLabel = debugLabel;
    codec.then(dart.void, dart.bind(this, _handleCodecReady), {onError: dart.fn((error, stack) => {
        if (error == null) dart.nullFailed(L0, 822, 58, "error");
        if (stack == null) dart.nullFailed(L0, 822, 76, "stack");
        this.reportError({context: new assertions.ErrorDescription.new("resolving an image codec"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, ObjectAndStackTraceToNull())});
    if (chunkEvents != null) {
      chunkEvents.listen(dart.bind(this, 'reportImageChunkEvent'), {onError: dart.fn((error, stack) => {
          if (error == null) dart.nullFailed(L0, 833, 26, "error");
          if (stack == null) dart.nullFailed(L0, 833, 44, "stack");
          this.reportError({context: new assertions.ErrorDescription.new("loading an image"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
        }, ObjectAndStackTraceToNull())});
    }
  }).prototype = image_stream.MultiFrameImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.MultiFrameImageStreamCompleter);
  dart.addTypeCaches(image_stream.MultiFrameImageStreamCompleter);
  dart.setMethodSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getMethods(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_handleCodecReady]: dart.fnType(dart.void, [ui.Codec]),
    [_handleAppFrame]: dart.fnType(dart.void, [core.Duration]),
    [_isFirstFrame]: dart.fnType(core.bool, []),
    [_hasFrameDurationPassed]: dart.fnType(core.bool, [core.Duration]),
    [_decodeNextFrameAndSchedule]: dart.fnType(async.Future$(dart.void), []),
    [_scheduleAppFrame]: dart.fnType(dart.void, []),
    [_emitFrame]: dart.fnType(dart.void, [image_stream.ImageInfo])
  }));
  dart.setGetterSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getGetters(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_shownTimestamp]: core.Duration
  }));
  dart.setSetterSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getSetters(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_shownTimestamp]: core.Duration
  }));
  dart.setLibraryUri(image_stream.MultiFrameImageStreamCompleter, L1);
  dart.setFieldSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getFields(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_codec]: dart.fieldType(dart.nullable(ui.Codec)),
    [_scale]: dart.finalFieldType(core.double),
    [_informationCollector]: dart.finalFieldType(dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), []))),
    [_nextFrame]: dart.fieldType(dart.nullable(ui.FrameInfo)),
    [__MultiFrameImageStreamCompleter__shownTimestamp]: dart.fieldType(dart.nullable(core.Duration)),
    [__MultiFrameImageStreamCompleter__shownTimestamp_isSet]: dart.fieldType(core.bool),
    [_frameDuration]: dart.fieldType(dart.nullable(core.Duration)),
    [_framesEmitted]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(dart.nullable(async.Timer)),
    [_frameCallbackScheduled]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/painting/image_stream.dart", {
    "package:flutter/src/painting/image_stream.dart": image_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_stream.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/image_stream.dart.lib.js"}');
  // Exports:
  return {
    src__painting__image_stream: image_stream
  };
}));

//# sourceMappingURL=image_stream.dart.lib.js.map
