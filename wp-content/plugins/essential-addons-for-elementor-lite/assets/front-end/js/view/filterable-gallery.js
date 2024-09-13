/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/view/filterable-gallery.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/view/filterable-gallery.js":
/*!*******************************************!*\
  !*** ./src/js/view/filterable-gallery.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\njQuery(window).on(\"elementor/frontend/init\", function () {\n  function getVideoId(url) {\n    var vimeoMatch = url.match(/\\/\\/(?:player\\.)?vimeo.com\\/(?:video\\/)?([0-9]+)/);\n    if (vimeoMatch) {\n      return vimeoMatch[1];\n    }\n    var youtubeMatch = url.match(/(?:https?:\\/\\/)?(?:www\\.)?(?:youtube\\.com\\/(?:[^\\/\\n\\s]+\\/\\S+\\/|(?:v|e(?:mbed)?)\\/|\\S*?[?&]v=)|youtu\\.be\\/)([a-zA-Z0-9_-]{11})/);\n    if (youtubeMatch) {\n      return youtubeMatch[1];\n    }\n    return null;\n  }\n  var filterableGalleryHandler = function filterableGalleryHandler($scope, $) {\n    var filterControls = $scope.find(\".fg-layout-3-filter-controls\").eq(0),\n      filterTrigger = $scope.find(\"#fg-filter-trigger\"),\n      form = $scope.find(\".fg-layout-3-search-box\"),\n      input = $scope.find(\"#fg-search-box-input\"),\n      searchRegex,\n      buttonFilter,\n      timer,\n      fg_mfp_counter_text = localize.eael_translate_text.fg_mfp_counter_text;\n    fg_mfp_counter_text = fg_mfp_counter_text ? '%curr% ' + fg_mfp_counter_text + ' %total%' : '%curr% of %total%';\n    var $galleryWrap = $(\".eael-filter-gallery-wrapper\", $scope);\n    var custom_default_control = $galleryWrap.data('custom_default_control');\n    var default_control_key = $galleryWrap.data('default_control_key');\n    custom_default_control = typeof custom_default_control !== 'undefined' ? parseInt(custom_default_control) : 0;\n    default_control_key = typeof default_control_key !== 'undefined' ? parseInt(default_control_key) : 0;\n    if (form.length) {\n      form.on(\"submit\", function (e) {\n        e.preventDefault();\n      });\n    }\n    filterTrigger.on(\"click\", function () {\n      filterControls.toggleClass(\"open-filters\");\n    });\n    filterTrigger.on(\"blur\", function () {\n      filterControls.removeClass(\"open-filters\");\n    });\n    $('.video-popup.eael-magnific-video-link.playout-vertical', $scope).on('click', function () {\n      setTimeout(function () {\n        $('.mfp-iframe-holder').addClass('eael-gf-vertical-video-popup');\n      }, 1);\n    });\n    $('.eael-magnific-link', $scope).on('click', function () {\n      setTimeout(function () {\n        $('.mfp-wrap').addClass('eael-gf-mfp-popup');\n      }, 1);\n    });\n    $(document).on('click', '.mfp-arrow.mfp-arrow-left, .mfp-arrow.mfp-arrow-right', function () {\n      setTimeout(function () {\n        var container = $('.eael-gf-mfp-popup .mfp-container');\n        if (container.hasClass('mfp-iframe-holder')) {\n          var src = $('iframe', container).attr('src'),\n            plyBtn = $('a[href=\"' + src + '\"]');\n          if (plyBtn.length < 1) {\n            var videoId = getVideoId(src),\n              plyBtn = $('a[href*=\"' + videoId + '\"]');\n          }\n          if (plyBtn.hasClass('playout-vertical')) {\n            container.addClass('eael-gf-vertical-video-popup');\n          } else {\n            container.removeClass('eael-gf-vertical-video-popup');\n          }\n        }\n      }, 1);\n    });\n    if (!isEditMode) {\n      var $gallery = $(\".eael-filter-gallery-container\", $scope),\n        $settings = $gallery.data(\"settings\"),\n        fg_items = $gallery_items = $gallery.data(\"gallery-items\"),\n        $layout_mode = $settings.grid_style === \"masonry\" ? \"masonry\" : \"fitRows\",\n        $gallery_enabled = $settings.gallery_enabled === \"yes\",\n        $images_per_page = $gallery.data(\"images-per-page\"),\n        $init_show_setting = $gallery.data(\"init-show\");\n      fg_items.splice(0, $init_show_setting), isRTL = $('body').hasClass('rtl');\n      // init isotope\n      var gwrap = $(\".eael-filter-gallery-wrapper\");\n      var layoutMode = gwrap.data(\"layout-mode\");\n      var $isotope_gallery = $gallery.isotope({\n        itemSelector: \".eael-filterable-gallery-item-wrap\",\n        layoutMode: $layout_mode,\n        percentPosition: true,\n        stagger: 30,\n        transitionDuration: $settings.duration + \"ms\",\n        isOriginLeft: !isRTL,\n        filter: function filter() {\n          var $this = $(this);\n          var $result = searchRegex ? $this.text().match(searchRegex) : true;\n          if (buttonFilter === undefined) {\n            if (layoutMode !== \"layout_3\") {\n              buttonFilter = $scope.find(\".eael-filter-gallery-control ul li\").first().data(\"filter\");\n            } else {\n              buttonFilter = $scope.find(\".fg-layout-3-filter-controls li\").first().data(\"filter\");\n            }\n          }\n          var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;\n          return $result && buttonResult;\n        }\n      });\n\n      // Popup\n      $($scope).magnificPopup({\n        delegate: \".eael-filterable-gallery-item-wrap:not([style*='display: none']) .eael-magnific-link.active\",\n        type: \"image\",\n        gallery: {\n          enabled: $gallery_enabled,\n          tCounter: fg_mfp_counter_text\n        },\n        iframe: {\n          markup: \"<div class=\\\"mfp-iframe-scaler\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"mfp-close\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<iframe class=\\\"mfp-iframe\\\" frameborder=\\\"0\\\" allowfullscreen></iframe>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"mfp-title eael-privacy-message\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\"\n        },\n        callbacks: {\n          markupParse: function markupParse(template, values, item) {\n            if (item.el.attr('title') !== \"\") {\n              values.title = item.el.attr('title');\n            }\n          },\n          open: function open() {\n            setTimeout(function () {\n              $(\".eael-privacy-message\").remove();\n            }, 5000);\n            setTimeout(function () {\n              var el_lightbox = $('.dialog-type-lightbox.elementor-lightbox');\n              if (el_lightbox.length > 0) {\n                el_lightbox.remove();\n              }\n            }, 100);\n          }\n        }\n      });\n\n      // filter\n      $scope.on(\"click\", \".control\", function () {\n        var $this = $(this);\n        buttonFilter = $(this).attr(\"data-filter\");\n        var initData = $(\".eael-filter-gallery-container .eael-filterable-gallery-item-wrap\" + buttonFilter, $scope).length;\n        var $tspan = $scope.find(\"#fg-filter-trigger > span\");\n        if ($tspan.length) {\n          $tspan.text($this.text());\n        }\n        var firstInit = parseInt($this.data('first-init'));\n        if (!firstInit) {\n          $this.data('first-init', 1);\n          var item_found = initData;\n          var index_list = $items = [];\n          if (typeof $images_per_page === 'string') {\n            $images_per_page = $init_show_setting;\n          }\n          if (item_found < $images_per_page) {\n            var _iterator = _createForOfIteratorHelper(fg_items.entries()),\n              _step;\n            try {\n              for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                var _step$value = _slicedToArray(_step.value, 2),\n                  index = _step$value[0],\n                  item = _step$value[1];\n                if (buttonFilter !== '' && buttonFilter !== '*') {\n                  var element = $($(item)[0]);\n                  if (element.is(buttonFilter)) {\n                    ++item_found;\n                    $items.push($(item)[0]);\n                    index_list.push(index);\n                  }\n                }\n                if (item_found >= $images_per_page) {\n                  break;\n                }\n              }\n            } catch (err) {\n              _iterator.e(err);\n            } finally {\n              _iterator.f();\n            }\n          }\n          if (index_list.length > 0) {\n            fg_items = fg_items.filter(function (item, index) {\n              return !index_list.includes(index);\n            });\n          }\n        }\n        var LoadMoreShow = $(this).data(\"load-more-status\"),\n          loadMore = $(\".eael-gallery-load-more\", $scope);\n\n        //hide load more button if selected control have no item to show\n        if (LoadMoreShow || fg_items.length < 1) {\n          loadMore.hide();\n        } else {\n          loadMore.show();\n        }\n        $this.siblings().removeClass(\"active\");\n        $this.addClass(\"active\");\n        if (!firstInit && $items.length > 0) {\n          $isotope_gallery.isotope();\n          $gallery.append($items);\n          $isotope_gallery.isotope('appended', $items);\n          $isotope_gallery.imagesLoaded().progress(function () {\n            $isotope_gallery.isotope(\"layout\");\n          });\n        } else {\n          $isotope_gallery.isotope();\n        }\n        if ($this.hasClass('all-control')) {\n          //All items are active\n          $('.eael-filterable-gallery-item-wrap .eael-magnific-link-clone').removeClass('active').addClass('active');\n        } else {\n          $('.eael-filterable-gallery-item-wrap .eael-magnific-link-clone').removeClass('active');\n          $(buttonFilter + ' .eael-magnific-link').addClass('active');\n        }\n      });\n\n      //quick search\n      var loaded_on_search = false;\n      input.on(\"input\", function () {\n        var $this = $(this),\n          $items = [];\n        if (!loaded_on_search && $gallery.data('search-all') === 'yes') {\n          var _iterator2 = _createForOfIteratorHelper(fg_items.entries()),\n            _step2;\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var _step2$value = _slicedToArray(_step2.value, 2),\n                index = _step2$value[0],\n                item = _step2$value[1];\n              $items.push($(item)[0]);\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n          $isotope_gallery.isotope();\n          $gallery.append($items);\n          $isotope_gallery.isotope('appended', $items);\n          $isotope_gallery.imagesLoaded().progress(function () {\n            $isotope_gallery.isotope(\"layout\");\n          });\n          $(\".eael-gallery-load-more\", $scope).hide();\n          loaded_on_search = true;\n        }\n        clearTimeout(timer);\n        timer = setTimeout(function () {\n          searchRegex = new RegExp($this.val(), \"gi\");\n          $isotope_gallery.isotope();\n        }, 600);\n      });\n\n      // layout gal, while images are loading\n      $isotope_gallery.imagesLoaded().progress(function () {\n        $isotope_gallery.isotope(\"layout\");\n      });\n\n      // layout gal, on click tabs\n      $isotope_gallery.on(\"arrangeComplete\", function () {\n        var notFoundDiv = $('#eael-fg-no-items-found', $scope),\n          minHeight = notFoundDiv.css('font-size');\n        $('.eael-filter-gallery-container', $scope).css('min-height', parseInt(minHeight) * 2 + 'px');\n        if (!$isotope_gallery.data('isotope').filteredItems.length) {\n          $('#eael-fg-no-items-found', $scope).show();\n        } else {\n          $('#eael-fg-no-items-found', $scope).hide();\n        }\n      });\n\n      // layout gal, after window loaded\n      $(window).on(\"load\", function () {\n        $isotope_gallery.isotope(\"layout\");\n      });\n\n      // Load more button\n      $scope.on(\"click\", \".eael-gallery-load-more\", function (e) {\n        e.preventDefault();\n        var $this = $(this),\n          // $init_show       = $(\".eael-filter-gallery-container\", $scope).children(\".eael-filterable-gallery-item-wrap\").length,\n          // $total_items     = $gallery.data(\"total-gallery-items\"),\n          $nomore_text = $gallery.data(\"nomore-item-text\"),\n          filter_enable = $(\".eael-filter-gallery-control\", $scope).length,\n          $items = [];\n        var filter_name = $(\".eael-filter-gallery-control li.active\", $scope).data('filter');\n        if (filterControls.length > 0) {\n          filter_name = $(\".fg-layout-3-filter-controls li.active\", $scope).data('filter');\n        }\n        if (filter_name === undefined) {\n          filter_name = '*';\n        }\n        var item_found = 0;\n        var index_list = [];\n        var _iterator3 = _createForOfIteratorHelper(fg_items.entries()),\n          _step3;\n        try {\n          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n            var _step3$value = _slicedToArray(_step3.value, 2),\n              index = _step3$value[0],\n              item = _step3$value[1];\n            var element = $($(item)[0]);\n            if (element.is(filter_name)) {\n              ++item_found;\n              $items.push($(item)[0]);\n              index_list.push(index);\n            }\n            if (filter_name !== '' && filter_name !== '*' && fg_items.length - 1 === index) {\n              $(\".eael-filter-gallery-control li.active\", $scope).data('load-more-status', 1);\n              $this.hide();\n            }\n            if (item_found === $images_per_page) {\n              break;\n            }\n          }\n        } catch (err) {\n          _iterator3.e(err);\n        } finally {\n          _iterator3.f();\n        }\n        if (index_list.length > 0) {\n          fg_items = fg_items.filter(function (item, index) {\n            return !index_list.includes(index);\n          });\n        }\n        if (fg_items.length < 1) {\n          $this.html('<div class=\"no-more-items-text\"></div>');\n          $this.children('.no-more-items-text').text($nomore_text);\n          setTimeout(function () {\n            $this.fadeOut(\"slow\");\n          }, 600);\n        }\n\n        // append items\n        $gallery.append($items);\n        $isotope_gallery.isotope(\"appended\", $items);\n        $isotope_gallery.imagesLoaded().progress(function () {\n          $isotope_gallery.isotope(\"layout\");\n        });\n      });\n\n      // Fix issue on Safari: hide filter menu\n      $(document).on('mouseup', function (e) {\n        if (!filterTrigger.is(e.target) && filterTrigger.has(e.target).length === 0) {\n          filterControls.removeClass(\"open-filters\");\n        }\n      });\n      $(document).ready(function () {\n        if (window.location.hash) {\n          jQuery('#' + window.location.hash.substring(1)).trigger('click');\n        } else if (custom_default_control) {\n          var increment = $settings.control_all_text ? 2 : 1;\n          default_control_key = default_control_key + increment;\n          jQuery(\".eael-filter-gallery-control li:nth-child(\".concat(default_control_key, \")\")).trigger('click');\n        }\n      });\n      var FilterableGallery = function FilterableGallery(element) {\n        $isotope_gallery.imagesLoaded().progress(function () {\n          $isotope_gallery.isotope(\"layout\");\n        });\n      };\n      ea.hooks.addAction(\"ea-toggle-triggered\", \"ea\", FilterableGallery);\n      ea.hooks.addAction(\"ea-lightbox-triggered\", \"ea\", FilterableGallery);\n      ea.hooks.addAction(\"ea-advanced-tabs-triggered\", \"ea\", FilterableGallery);\n      ea.hooks.addAction(\"ea-advanced-accordion-triggered\", \"ea\", FilterableGallery);\n    }\n  };\n  if (ea.elementStatusCheck('eaelFilterableGallery')) {\n    return false;\n  }\n  elementorFrontend.hooks.addAction(\"frontend/element_ready/eael-filterable-gallery.default\", filterableGalleryHandler);\n});\n\n//# sourceURL=webpack:///./src/js/view/filterable-gallery.js?");

/***/ })

/******/ });