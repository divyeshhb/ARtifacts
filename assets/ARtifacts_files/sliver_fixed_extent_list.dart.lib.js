define(['dart_sdk', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/rendering/sliver_multi_box_adaptor.dart'], (function load__packages__flutter__src__rendering__sliver_fixed_extent_list_dart(dart_sdk, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart.src__rendering__sliver_multi_box_adaptor;
  var sliver_fixed_extent_list = Object.create(dart.library);
  var $round = dartx.round;
  var $abs = dartx.abs;
  var $floor = dartx.floor;
  var $ceil = dartx.ceil;
  var $isFinite = dartx.isFinite;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create(null);
  var L1 = "package:flutter/src/rendering/sliver_fixed_extent_list.dart";
  var L0 = "file:///Users/divyeshbansal/Documents/android/flutter/packages/flutter/lib/src/rendering/sliver_fixed_extent_list.dart";
  var _calculateLeadingGarbage = dart.privateName(sliver_fixed_extent_list, "_calculateLeadingGarbage");
  var _calculateTrailingGarbage = dart.privateName(sliver_fixed_extent_list, "_calculateTrailingGarbage");
  sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor = class RenderSliverFixedExtentBoxAdaptor extends sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor {
    indexToLayoutOffset(itemExtent, index) {
      if (itemExtent == null) dart.nullFailed(L0, 57, 37, "itemExtent");
      if (index == null) dart.nullFailed(L0, 57, 53, "index");
      return dart.notNull(itemExtent) * dart.notNull(index);
    }
    getMinChildIndexForScrollOffset(scrollOffset, itemExtent) {
      if (scrollOffset == null) dart.nullFailed(L0, 67, 46, "scrollOffset");
      if (itemExtent == null) dart.nullFailed(L0, 67, 67, "itemExtent");
      if (dart.notNull(itemExtent) > 0.0) {
        let actual = dart.notNull(scrollOffset) / dart.notNull(itemExtent);
        let round = actual[$round]();
        if ((actual - round)[$abs]() < 1e-10) {
          return round;
        }
        return actual[$floor]();
      }
      return 0;
    }
    getMaxChildIndexForScrollOffset(scrollOffset, itemExtent) {
      if (scrollOffset == null) dart.nullFailed(L0, 87, 46, "scrollOffset");
      if (itemExtent == null) dart.nullFailed(L0, 87, 67, "itemExtent");
      if (dart.notNull(itemExtent) > 0.0) {
        let actual = dart.notNull(scrollOffset) / dart.notNull(itemExtent) - 1;
        let round = actual[$round]();
        if (dart.test(sliver_fixed_extent_list._isWithinPrecisionErrorTolerance(actual, round))) {
          return math.max(core.int, 0, round);
        }
        return math.max(core.int, 0, actual[$ceil]());
      }
      return 0;
    }
    estimateMaxScrollOffset(constraints, opts) {
      if (constraints == null) dart.nullFailed(L0, 113, 23, "constraints");
      let firstIndex = opts && 'firstIndex' in opts ? opts.firstIndex : null;
      let lastIndex = opts && 'lastIndex' in opts ? opts.lastIndex : null;
      let leadingScrollOffset = opts && 'leadingScrollOffset' in opts ? opts.leadingScrollOffset : null;
      let trailingScrollOffset = opts && 'trailingScrollOffset' in opts ? opts.trailingScrollOffset : null;
      return this.childManager.estimateMaxScrollOffset(constraints, {firstIndex: firstIndex, lastIndex: lastIndex, leadingScrollOffset: leadingScrollOffset, trailingScrollOffset: trailingScrollOffset});
    }
    computeMaxScrollOffset(constraints, itemExtent) {
      if (constraints == null) dart.nullFailed(L0, 149, 51, "constraints");
      if (itemExtent == null) dart.nullFailed(L0, 149, 71, "itemExtent");
      return dart.notNull(this.childManager.childCount) * dart.notNull(itemExtent);
    }
    [_calculateLeadingGarbage](firstIndex) {
      if (firstIndex == null) dart.nullFailed(L0, 153, 36, "firstIndex");
      let walker = this.firstChild;
      let leadingGarbage = 0;
      while (walker != null && dart.notNull(this.indexOf(walker)) < dart.notNull(firstIndex)) {
        leadingGarbage = leadingGarbage + 1;
        walker = this.childAfter(walker);
      }
      return leadingGarbage;
    }
    [_calculateTrailingGarbage](targetLastIndex) {
      if (targetLastIndex == null) dart.nullFailed(L0, 163, 37, "targetLastIndex");
      let walker = this.lastChild;
      let trailingGarbage = 0;
      while (walker != null && dart.notNull(this.indexOf(walker)) > dart.notNull(targetLastIndex)) {
        trailingGarbage = trailingGarbage + 1;
        walker = this.childBefore(walker);
      }
      return trailingGarbage;
    }
    performLayout() {
      let constraints = this.constraints;
      this.childManager.didStartLayout();
      this.childManager.setDidUnderflow(false);
      let itemExtent = this.itemExtent;
      let scrollOffset = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.cacheOrigin);
      if (!(scrollOffset >= 0.0)) dart.assertFailed(null, L0, 182, 12, "scrollOffset >= 0.0");
      let remainingExtent = constraints.remainingCacheExtent;
      if (!(dart.notNull(remainingExtent) >= 0.0)) dart.assertFailed(null, L0, 184, 12, "remainingExtent >= 0.0");
      let targetEndScrollOffset = scrollOffset + dart.notNull(remainingExtent);
      let childConstraints = constraints.asBoxConstraints({minExtent: itemExtent, maxExtent: itemExtent});
      let firstIndex = this.getMinChildIndexForScrollOffset(scrollOffset, itemExtent);
      let targetLastIndex = targetEndScrollOffset[$isFinite] ? this.getMaxChildIndexForScrollOffset(targetEndScrollOffset, itemExtent) : null;
      if (this.firstChild != null) {
        let leadingGarbage = this[_calculateLeadingGarbage](firstIndex);
        let trailingGarbage = this[_calculateTrailingGarbage](dart.nullCheck(targetLastIndex));
        this.collectGarbage(leadingGarbage, trailingGarbage);
      } else {
        this.collectGarbage(0, 0);
      }
      if (this.firstChild == null) {
        if (!dart.test(this.addInitialChild({index: firstIndex, layoutOffset: this.indexToLayoutOffset(itemExtent, firstIndex)}))) {
          let max = null;
          if (dart.notNull(firstIndex) <= 0) {
            max = 0.0;
          } else {
            max = this.computeMaxScrollOffset(constraints, itemExtent);
          }
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: max, maxPaintExtent: max});
          this.childManager.didFinishLayout();
          return;
        }
      }
      let trailingChildWithLayout = null;
      for (let index = dart.notNull(this.indexOf(dart.nullCheck(this.firstChild))) - 1; index >= dart.notNull(firstIndex); index = index - 1) {
        let child = this.insertAndLayoutLeadingChild(childConstraints);
        if (child == null) {
          this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: index * dart.notNull(itemExtent)});
          return;
        }
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
        childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent, index);
        if (!(childParentData.index === index)) dart.assertFailed(null, L0, 235, 14, "childParentData.index == index");
        trailingChildWithLayout == null ? trailingChildWithLayout = child : null;
      }
      if (trailingChildWithLayout == null) {
        dart.nullCheck(this.firstChild).layout(childConstraints);
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
        childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent, firstIndex);
        trailingChildWithLayout = this.firstChild;
      }
      let estimatedMaxScrollOffset = 1 / 0;
      for (let index = dart.notNull(this.indexOf(dart.nullCheck(trailingChildWithLayout))) + 1; targetLastIndex == null || index <= dart.notNull(targetLastIndex); index = index + 1) {
        let child = this.childAfter(dart.nullCheck(trailingChildWithLayout));
        if (child == null || this.indexOf(child) !== index) {
          child = this.insertAndLayoutChild(childConstraints, {after: trailingChildWithLayout});
          if (child == null) {
            estimatedMaxScrollOffset = index * dart.notNull(itemExtent);
            break;
          }
        } else {
          child.layout(childConstraints);
        }
        trailingChildWithLayout = child;
        if (!(child != null)) dart.assertFailed(null, L0, 260, 14, "child != null");
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
        if (!(childParentData.index === index)) dart.assertFailed(null, L0, 262, 14, "childParentData.index == index");
        childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent, dart.nullCheck(childParentData.index));
      }
      let lastIndex = this.indexOf(dart.nullCheck(this.lastChild));
      let leadingScrollOffset = this.indexToLayoutOffset(itemExtent, firstIndex);
      let trailingScrollOffset = this.indexToLayoutOffset(itemExtent, dart.notNull(lastIndex) + 1);
      if (!(firstIndex === 0 || dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))) - scrollOffset <= 1e-10)) dart.assertFailed(null, L0, 270, 12, "firstIndex == 0 || childScrollOffset(firstChild!)! - scrollOffset <= precisionErrorTolerance");
      if (!dart.test(this.debugAssertChildListIsNonEmptyAndContiguous())) dart.assertFailed(null, L0, 271, 12, "debugAssertChildListIsNonEmptyAndContiguous()");
      if (!(this.indexOf(dart.nullCheck(this.firstChild)) == firstIndex)) dart.assertFailed(null, L0, 272, 12, "indexOf(firstChild!) == firstIndex");
      if (!(targetLastIndex == null || dart.notNull(lastIndex) <= dart.notNull(targetLastIndex))) dart.assertFailed(null, L0, 273, 12, "targetLastIndex == null || lastIndex <= targetLastIndex");
      estimatedMaxScrollOffset = math.min(core.double, estimatedMaxScrollOffset, this.estimateMaxScrollOffset(constraints, {firstIndex: firstIndex, lastIndex: lastIndex, leadingScrollOffset: leadingScrollOffset, trailingScrollOffset: trailingScrollOffset}));
      let paintExtent = this.calculatePaintOffset(constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      let targetEndScrollOffsetForPaint = dart.notNull(constraints.scrollOffset) + dart.notNull(constraints.remainingPaintExtent);
      let targetLastIndexForPaint = targetEndScrollOffsetForPaint[$isFinite] ? this.getMaxChildIndexForScrollOffset(targetEndScrollOffsetForPaint, itemExtent) : null;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: estimatedMaxScrollOffset, paintExtent: paintExtent, cacheExtent: cacheExtent, maxPaintExtent: estimatedMaxScrollOffset, hasVisualOverflow: targetLastIndexForPaint != null && dart.notNull(lastIndex) >= dart.notNull(targetLastIndexForPaint) || dart.notNull(constraints.scrollOffset) > 0.0});
      if (estimatedMaxScrollOffset === trailingScrollOffset) this.childManager.setDidUnderflow(true);
      this.childManager.didFinishLayout();
    }
  };
  (sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    if (childManager == null) dart.nullFailed(L0, 43, 42, "childManager");
    sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.prototype;
  dart.addTypeTests(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor);
  dart.addTypeCaches(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor);
  dart.setMethodSignature(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor, () => ({
    __proto__: dart.getMethods(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.__proto__),
    indexToLayoutOffset: dart.fnType(core.double, [core.double, core.int]),
    getMinChildIndexForScrollOffset: dart.fnType(core.int, [core.double, core.double]),
    getMaxChildIndexForScrollOffset: dart.fnType(core.int, [core.double, core.double]),
    estimateMaxScrollOffset: dart.fnType(core.double, [sliver.SliverConstraints], {firstIndex: dart.nullable(core.int), lastIndex: dart.nullable(core.int), leadingScrollOffset: dart.nullable(core.double), trailingScrollOffset: dart.nullable(core.double)}, {}),
    computeMaxScrollOffset: dart.fnType(core.double, [sliver.SliverConstraints, core.double]),
    [_calculateLeadingGarbage]: dart.fnType(core.int, [core.int]),
    [_calculateTrailingGarbage]: dart.fnType(core.int, [core.int]),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor, L1);
  var _itemExtent = dart.privateName(sliver_fixed_extent_list, "_itemExtent");
  sliver_fixed_extent_list.RenderSliverFixedExtentList = class RenderSliverFixedExtentList extends sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor {
    get itemExtent() {
      return this[_itemExtent];
    }
    set itemExtent(value) {
      if (value == null) dart.nullFailed(L0, 353, 25, "value");
      if (!(value != null)) dart.assertFailed(null, L0, 354, 12, "value != null");
      if (this[_itemExtent] == value) return;
      this[_itemExtent] = value;
      this.markNeedsLayout();
    }
  };
  (sliver_fixed_extent_list.RenderSliverFixedExtentList.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    if (childManager == null) dart.nullFailed(L0, 345, 42, "childManager");
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    if (itemExtent == null) dart.nullFailed(L0, 346, 21, "itemExtent");
    this[_itemExtent] = itemExtent;
    sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_fixed_extent_list.RenderSliverFixedExtentList.prototype;
  dart.addTypeTests(sliver_fixed_extent_list.RenderSliverFixedExtentList);
  dart.addTypeCaches(sliver_fixed_extent_list.RenderSliverFixedExtentList);
  dart.setGetterSignature(sliver_fixed_extent_list.RenderSliverFixedExtentList, () => ({
    __proto__: dart.getGetters(sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__),
    itemExtent: core.double
  }));
  dart.setSetterSignature(sliver_fixed_extent_list.RenderSliverFixedExtentList, () => ({
    __proto__: dart.getSetters(sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__),
    itemExtent: core.double
  }));
  dart.setLibraryUri(sliver_fixed_extent_list.RenderSliverFixedExtentList, L1);
  dart.setFieldSignature(sliver_fixed_extent_list.RenderSliverFixedExtentList, () => ({
    __proto__: dart.getFields(sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__),
    [_itemExtent]: dart.fieldType(core.double)
  }));
  sliver_fixed_extent_list._isWithinPrecisionErrorTolerance = function _isWithinPrecisionErrorTolerance(actual, round) {
    if (actual == null) dart.nullFailed(L0, 362, 46, "actual");
    if (round == null) dart.nullFailed(L0, 362, 58, "round");
    return (dart.notNull(actual) - dart.notNull(round))[$abs]() < 1e-10;
  };
  dart.trackLibraries("packages/flutter/src/rendering/sliver_fixed_extent_list.dart", {
    "package:flutter/src/rendering/sliver_fixed_extent_list.dart": sliver_fixed_extent_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_fixed_extent_list.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_fixed_extent_list.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_fixed_extent_list: sliver_fixed_extent_list
  };
}));

//# sourceMappingURL=sliver_fixed_extent_list.dart.lib.js.map
