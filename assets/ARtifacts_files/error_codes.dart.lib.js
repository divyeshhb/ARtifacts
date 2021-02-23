define(['dart_sdk'], (function load__packages__file__src__interface__error_codes_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var error_codes = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var _CodesL = () => (_CodesL = dart.constFn(dart.legacy(error_codes._Codes)))();
  var _CodesLTointL = () => (_CodesLTointL = dart.constFn(dart.fnType(intL(), [_CodesL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:file/src/interface/error_codes.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: error_codes._LinuxCodes.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: error_codes._MacOSCodes.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: error_codes._WindowsCodes.prototype
      });
    },
    get C0() {
      return C0 = dart.constMap(StringL(), _CodesL(), ["linux", C1 || CT.C1, "macos", C2 || CT.C2, "windows", C3 || CT.C3]);
    }
  }, false);
  error_codes.ErrorCodes = class ErrorCodes extends core.Object {
    static get E2BIG() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.e2big, _CodesLTointL()));
    }
    static get EACCES() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eacces, _CodesLTointL()));
    }
    static get EAGAIN() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eagain, _CodesLTointL()));
    }
    static get EBADF() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.ebadf, _CodesLTointL()));
    }
    static get EBUSY() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.ebusy, _CodesLTointL()));
    }
    static get ECHILD() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.echild, _CodesLTointL()));
    }
    static get EDEADLK() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.edeadlk, _CodesLTointL()));
    }
    static get EDOM() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.edom, _CodesLTointL()));
    }
    static get EEXIST() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eexist, _CodesLTointL()));
    }
    static get EFAULT() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.efault, _CodesLTointL()));
    }
    static get EFBIG() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.efbig, _CodesLTointL()));
    }
    static get EILSEQ() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eilseq, _CodesLTointL()));
    }
    static get EINTR() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eintr, _CodesLTointL()));
    }
    static get EINVAL() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.einval, _CodesLTointL()));
    }
    static get EIO() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eio, _CodesLTointL()));
    }
    static get EISDIR() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eisdir, _CodesLTointL()));
    }
    static get ELOOP() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eloop, _CodesLTointL()));
    }
    static get EMFILE() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.emfile, _CodesLTointL()));
    }
    static get EMLINK() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.emlink, _CodesLTointL()));
    }
    static get ENAMETOOLONG() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enametoolong, _CodesLTointL()));
    }
    static get ENFILE() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enfile, _CodesLTointL()));
    }
    static get ENODEV() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enodev, _CodesLTointL()));
    }
    static get ENOENT() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enoent, _CodesLTointL()));
    }
    static get ENOEXEC() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enoexec, _CodesLTointL()));
    }
    static get ENOLCK() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enolck, _CodesLTointL()));
    }
    static get ENOMEM() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enomem, _CodesLTointL()));
    }
    static get ENOSPC() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enospc, _CodesLTointL()));
    }
    static get ENOSYS() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enosys, _CodesLTointL()));
    }
    static get ENOTDIR() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enotdir, _CodesLTointL()));
    }
    static get ENOTEMPTY() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enotempty, _CodesLTointL()));
    }
    static get ENOTTY() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enotty, _CodesLTointL()));
    }
    static get ENXIO() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.enxio, _CodesLTointL()));
    }
    static get EPERM() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.eperm, _CodesLTointL()));
    }
    static get EPIPE() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.epipe, _CodesLTointL()));
    }
    static get ERANGE() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.erange, _CodesLTointL()));
    }
    static get EROFS() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.erofs, _CodesLTointL()));
    }
    static get ESPIPE() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.espipe, _CodesLTointL()));
    }
    static get ESRCH() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.esrch, _CodesLTointL()));
    }
    static get EXDEV() {
      return error_codes.ErrorCodes._platform(dart.fn(codes => codes.exdev, _CodesLTointL()));
    }
    static _platform(getCode) {
      let t0;
      let codes = (t0 = error_codes._platforms[$_get]("linux"), t0 == null ? error_codes._platforms[$_get]("linux") : t0);
      return getCode(codes);
    }
  };
  (error_codes.ErrorCodes.__ = function() {
    ;
  }).prototype = error_codes.ErrorCodes.prototype;
  dart.addTypeTests(error_codes.ErrorCodes);
  dart.addTypeCaches(error_codes.ErrorCodes);
  dart.setLibraryUri(error_codes.ErrorCodes, L0);
  error_codes._Codes = class _Codes extends core.Object {};
  (error_codes._Codes.new = function() {
    ;
  }).prototype = error_codes._Codes.prototype;
  dart.addTypeTests(error_codes._Codes);
  dart.addTypeCaches(error_codes._Codes);
  dart.setLibraryUri(error_codes._Codes, L0);
  error_codes._LinuxCodes = class _LinuxCodes extends core.Object {
    get e2big() {
      return 7;
    }
    get eacces() {
      return 13;
    }
    get eagain() {
      return 11;
    }
    get ebadf() {
      return 9;
    }
    get ebusy() {
      return 16;
    }
    get echild() {
      return 10;
    }
    get edeadlk() {
      return 35;
    }
    get edom() {
      return 33;
    }
    get eexist() {
      return 17;
    }
    get efault() {
      return 14;
    }
    get efbig() {
      return 27;
    }
    get eilseq() {
      return 84;
    }
    get eintr() {
      return 4;
    }
    get einval() {
      return 22;
    }
    get eio() {
      return 5;
    }
    get eisdir() {
      return 21;
    }
    get eloop() {
      return 40;
    }
    get emfile() {
      return 24;
    }
    get emlink() {
      return 31;
    }
    get enametoolong() {
      return 36;
    }
    get enfile() {
      return 23;
    }
    get enodev() {
      return 19;
    }
    get enoent() {
      return 2;
    }
    get enoexec() {
      return 8;
    }
    get enolck() {
      return 37;
    }
    get enomem() {
      return 12;
    }
    get enospc() {
      return 28;
    }
    get enosys() {
      return 38;
    }
    get enotdir() {
      return 20;
    }
    get enotempty() {
      return 39;
    }
    get enotty() {
      return 25;
    }
    get enxio() {
      return 6;
    }
    get eperm() {
      return 1;
    }
    get epipe() {
      return 32;
    }
    get erange() {
      return 34;
    }
    get erofs() {
      return 30;
    }
    get espipe() {
      return 29;
    }
    get esrch() {
      return 3;
    }
    get exdev() {
      return 18;
    }
  };
  (error_codes._LinuxCodes.new = function() {
    ;
  }).prototype = error_codes._LinuxCodes.prototype;
  dart.addTypeTests(error_codes._LinuxCodes);
  dart.addTypeCaches(error_codes._LinuxCodes);
  error_codes._LinuxCodes[dart.implements] = () => [error_codes._Codes];
  dart.setGetterSignature(error_codes._LinuxCodes, () => ({
    __proto__: dart.getGetters(error_codes._LinuxCodes.__proto__),
    e2big: dart.legacy(core.int),
    eacces: dart.legacy(core.int),
    eagain: dart.legacy(core.int),
    ebadf: dart.legacy(core.int),
    ebusy: dart.legacy(core.int),
    echild: dart.legacy(core.int),
    edeadlk: dart.legacy(core.int),
    edom: dart.legacy(core.int),
    eexist: dart.legacy(core.int),
    efault: dart.legacy(core.int),
    efbig: dart.legacy(core.int),
    eilseq: dart.legacy(core.int),
    eintr: dart.legacy(core.int),
    einval: dart.legacy(core.int),
    eio: dart.legacy(core.int),
    eisdir: dart.legacy(core.int),
    eloop: dart.legacy(core.int),
    emfile: dart.legacy(core.int),
    emlink: dart.legacy(core.int),
    enametoolong: dart.legacy(core.int),
    enfile: dart.legacy(core.int),
    enodev: dart.legacy(core.int),
    enoent: dart.legacy(core.int),
    enoexec: dart.legacy(core.int),
    enolck: dart.legacy(core.int),
    enomem: dart.legacy(core.int),
    enospc: dart.legacy(core.int),
    enosys: dart.legacy(core.int),
    enotdir: dart.legacy(core.int),
    enotempty: dart.legacy(core.int),
    enotty: dart.legacy(core.int),
    enxio: dart.legacy(core.int),
    eperm: dart.legacy(core.int),
    epipe: dart.legacy(core.int),
    erange: dart.legacy(core.int),
    erofs: dart.legacy(core.int),
    espipe: dart.legacy(core.int),
    esrch: dart.legacy(core.int),
    exdev: dart.legacy(core.int)
  }));
  dart.setLibraryUri(error_codes._LinuxCodes, L0);
  error_codes._MacOSCodes = class _MacOSCodes extends core.Object {
    get e2big() {
      return 7;
    }
    get eacces() {
      return 13;
    }
    get eagain() {
      return 35;
    }
    get ebadf() {
      return 9;
    }
    get ebusy() {
      return 16;
    }
    get echild() {
      return 10;
    }
    get edeadlk() {
      return 11;
    }
    get edom() {
      return 33;
    }
    get eexist() {
      return 17;
    }
    get efault() {
      return 14;
    }
    get efbig() {
      return 27;
    }
    get eilseq() {
      return 92;
    }
    get eintr() {
      return 4;
    }
    get einval() {
      return 22;
    }
    get eio() {
      return 5;
    }
    get eisdir() {
      return 21;
    }
    get eloop() {
      return 62;
    }
    get emfile() {
      return 24;
    }
    get emlink() {
      return 31;
    }
    get enametoolong() {
      return 63;
    }
    get enfile() {
      return 23;
    }
    get enodev() {
      return 19;
    }
    get enoent() {
      return 2;
    }
    get enoexec() {
      return 8;
    }
    get enolck() {
      return 77;
    }
    get enomem() {
      return 12;
    }
    get enospc() {
      return 28;
    }
    get enosys() {
      return 78;
    }
    get enotdir() {
      return 20;
    }
    get enotempty() {
      return 66;
    }
    get enotty() {
      return 25;
    }
    get enxio() {
      return 6;
    }
    get eperm() {
      return 1;
    }
    get epipe() {
      return 32;
    }
    get erange() {
      return 34;
    }
    get erofs() {
      return 30;
    }
    get espipe() {
      return 29;
    }
    get esrch() {
      return 3;
    }
    get exdev() {
      return 18;
    }
  };
  (error_codes._MacOSCodes.new = function() {
    ;
  }).prototype = error_codes._MacOSCodes.prototype;
  dart.addTypeTests(error_codes._MacOSCodes);
  dart.addTypeCaches(error_codes._MacOSCodes);
  error_codes._MacOSCodes[dart.implements] = () => [error_codes._Codes];
  dart.setGetterSignature(error_codes._MacOSCodes, () => ({
    __proto__: dart.getGetters(error_codes._MacOSCodes.__proto__),
    e2big: dart.legacy(core.int),
    eacces: dart.legacy(core.int),
    eagain: dart.legacy(core.int),
    ebadf: dart.legacy(core.int),
    ebusy: dart.legacy(core.int),
    echild: dart.legacy(core.int),
    edeadlk: dart.legacy(core.int),
    edom: dart.legacy(core.int),
    eexist: dart.legacy(core.int),
    efault: dart.legacy(core.int),
    efbig: dart.legacy(core.int),
    eilseq: dart.legacy(core.int),
    eintr: dart.legacy(core.int),
    einval: dart.legacy(core.int),
    eio: dart.legacy(core.int),
    eisdir: dart.legacy(core.int),
    eloop: dart.legacy(core.int),
    emfile: dart.legacy(core.int),
    emlink: dart.legacy(core.int),
    enametoolong: dart.legacy(core.int),
    enfile: dart.legacy(core.int),
    enodev: dart.legacy(core.int),
    enoent: dart.legacy(core.int),
    enoexec: dart.legacy(core.int),
    enolck: dart.legacy(core.int),
    enomem: dart.legacy(core.int),
    enospc: dart.legacy(core.int),
    enosys: dart.legacy(core.int),
    enotdir: dart.legacy(core.int),
    enotempty: dart.legacy(core.int),
    enotty: dart.legacy(core.int),
    enxio: dart.legacy(core.int),
    eperm: dart.legacy(core.int),
    epipe: dart.legacy(core.int),
    erange: dart.legacy(core.int),
    erofs: dart.legacy(core.int),
    espipe: dart.legacy(core.int),
    esrch: dart.legacy(core.int),
    exdev: dart.legacy(core.int)
  }));
  dart.setLibraryUri(error_codes._MacOSCodes, L0);
  error_codes._WindowsCodes = class _WindowsCodes extends core.Object {
    get e2big() {
      return 7;
    }
    get eacces() {
      return 13;
    }
    get eagain() {
      return 11;
    }
    get ebadf() {
      return 9;
    }
    get ebusy() {
      return 16;
    }
    get echild() {
      return 10;
    }
    get edeadlk() {
      return 36;
    }
    get edom() {
      return 33;
    }
    get eexist() {
      return 17;
    }
    get efault() {
      return 14;
    }
    get efbig() {
      return 27;
    }
    get eilseq() {
      return 42;
    }
    get eintr() {
      return 4;
    }
    get einval() {
      return 22;
    }
    get eio() {
      return 5;
    }
    get eisdir() {
      return 21;
    }
    get eloop() {
      return -1;
    }
    get emfile() {
      return 24;
    }
    get emlink() {
      return 31;
    }
    get enametoolong() {
      return 38;
    }
    get enfile() {
      return 23;
    }
    get enodev() {
      return 19;
    }
    get enoent() {
      return 2;
    }
    get enoexec() {
      return 8;
    }
    get enolck() {
      return 39;
    }
    get enomem() {
      return 12;
    }
    get enospc() {
      return 28;
    }
    get enosys() {
      return 40;
    }
    get enotdir() {
      return 20;
    }
    get enotempty() {
      return 41;
    }
    get enotty() {
      return 25;
    }
    get enxio() {
      return 6;
    }
    get eperm() {
      return 1;
    }
    get epipe() {
      return 32;
    }
    get erange() {
      return 34;
    }
    get erofs() {
      return 30;
    }
    get espipe() {
      return 29;
    }
    get esrch() {
      return 3;
    }
    get exdev() {
      return 18;
    }
  };
  (error_codes._WindowsCodes.new = function() {
    ;
  }).prototype = error_codes._WindowsCodes.prototype;
  dart.addTypeTests(error_codes._WindowsCodes);
  dart.addTypeCaches(error_codes._WindowsCodes);
  error_codes._WindowsCodes[dart.implements] = () => [error_codes._Codes];
  dart.setGetterSignature(error_codes._WindowsCodes, () => ({
    __proto__: dart.getGetters(error_codes._WindowsCodes.__proto__),
    e2big: dart.legacy(core.int),
    eacces: dart.legacy(core.int),
    eagain: dart.legacy(core.int),
    ebadf: dart.legacy(core.int),
    ebusy: dart.legacy(core.int),
    echild: dart.legacy(core.int),
    edeadlk: dart.legacy(core.int),
    edom: dart.legacy(core.int),
    eexist: dart.legacy(core.int),
    efault: dart.legacy(core.int),
    efbig: dart.legacy(core.int),
    eilseq: dart.legacy(core.int),
    eintr: dart.legacy(core.int),
    einval: dart.legacy(core.int),
    eio: dart.legacy(core.int),
    eisdir: dart.legacy(core.int),
    eloop: dart.legacy(core.int),
    emfile: dart.legacy(core.int),
    emlink: dart.legacy(core.int),
    enametoolong: dart.legacy(core.int),
    enfile: dart.legacy(core.int),
    enodev: dart.legacy(core.int),
    enoent: dart.legacy(core.int),
    enoexec: dart.legacy(core.int),
    enolck: dart.legacy(core.int),
    enomem: dart.legacy(core.int),
    enospc: dart.legacy(core.int),
    enosys: dart.legacy(core.int),
    enotdir: dart.legacy(core.int),
    enotempty: dart.legacy(core.int),
    enotty: dart.legacy(core.int),
    enxio: dart.legacy(core.int),
    eperm: dart.legacy(core.int),
    epipe: dart.legacy(core.int),
    erange: dart.legacy(core.int),
    erofs: dart.legacy(core.int),
    espipe: dart.legacy(core.int),
    esrch: dart.legacy(core.int),
    exdev: dart.legacy(core.int)
  }));
  dart.setLibraryUri(error_codes._WindowsCodes, L0);
  var C1;
  var C2;
  var C3;
  var C0;
  dart.defineLazy(error_codes, {
    /*error_codes._platforms*/get _platforms() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/file/src/interface/error_codes.dart", {
    "package:file/src/interface/error_codes.dart": error_codes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["error_codes.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../../packages/file/src/interface/error_codes.dart.lib.js"}');
  // Exports:
  return {
    src__interface__error_codes: error_codes
  };
}));

//# sourceMappingURL=error_codes.dart.lib.js.map
