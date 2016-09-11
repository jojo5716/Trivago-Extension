(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Trivago"] = factory();
	else
		root["Trivago"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scrapping = __webpack_require__(2);
	
	var _scrapping2 = _interopRequireDefault(_scrapping);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var detectingURL = setInterval(function () {
	    var currentUrl = window.location.hostname;
	    var isTrivagoURL = currentUrl.indexOf('trivago.es') != -1;
	    var isTrivagoSearch = window.location.search && window.location.search.length > 0;
	
	    if (isTrivagoURL && isTrivagoSearch) {
	        activateExtension();
	    }
	}, 3000);
	
	function checkIframeExist() {
	    return document.getElementById('iframe-trivago-extension') != null;
	}
	
	function activateExtension() {
	    clearInterval(detectingURL);
	
	    var existIframe = checkIframeExist();
	    if (!existIframe) {
	        var newDiv = document.createElement('iframe');
	        newDiv.src = chrome.extension.getURL('src/index.html');
	        newDiv.id = 'iframe-trivago-extension';
	        newDiv.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
	
	        var container = document.getElementsByClassName('main-wrap');
	
	        if (container && container[0]) {
	            container[0].appendChild(newDiv);
	
	            newDiv.style.width = '100%';
	            newDiv.style.minHeight = '600px';
	            newDiv.style.overflow = 'hidden';
	            newDiv.style.border = '0';
	
	            changeBackGroundImage();
	            var hotels = _scrapping2.default.doScraping(window.document);
	            chrome.storage.local.set({ 'TrivagoHotels': hotels }, function () {});
	
	            var oldContainer = document.getElementsByClassName('centerwrapper');
	            if (oldContainer) {
	                oldContainer[0].style.display = 'none';
	            }
	        }
	    }
	
	    function changeBackGroundImage() {
	        var mainWrap = document.getElementsByClassName('main-wrap')[0];
	        mainWrap.style.backgroundImage = "url('http://a.dilcdn.com/sw/background/bg_starsL-d39a0dc14ce4.jpg')";
	        mainWrap.style.backgroundColor = '#151515';
	        mainWrap.style.backgroundSize = '40% 100%';
	        mainWrap.style.backgroundRepeat = 'no-repeat';
	        mainWrap.style.backgroundPosition = '-64px -57px';
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	function doScraping(parentElement) {
	
	    var CHARACTER = {
	        '5': 'darkvader',
	        '4': 'r2d2',
	        '3': 'pilot',
	        '2': 'c3po',
	        '1': 'kylo'
	    };
	
	    var parent = $(parentElement);
	    var hotels = parent.find('.hotellist li.hotel');
	    var hotelsJSON = [];
	
	    for (var i = 0; i <= hotels.length; i++) {
	        var hotel = $(hotels[i]);
	
	        try {
	            var photo = $(hotel).find('.item__image-wrapper img').attr('src');
	
	            if (photo.indexOf('http://') === -1) {
	                photo = 'http://' + photo;
	            }
	
	            var elementName = $(hotel).find('.item__details .item__name');
	            var name = elementName.text().trim();
	            var category = elementName.attr('class').match(/\d/g)[1];
	            var rates = $(hotel).find('.item__review .icon-ic').attr('class').match(/\d/g)[1];
	            var otherPricesElements = $(hotel).find('.deal-other__top-alternatives li');
	            var otherPrices = [];
	            var bestPrice = $(hotel).find('.item__best-price').text();
	            var coordenatesElement = $(hotel).find('.slideout_content_container');
	            var longitude = coordenatesElement.data('lng');
	            var latitude = coordenatesElement.data('lat');
	
	            for (var j = 0; j <= otherPricesElements.length; j++) {
	                var buttonContent = $(otherPricesElements[j]).find('button');
	                var priceElement = buttonContent.find('strong');
	                var price = priceElement.text();
	                // Remove element to get later only the name
	                priceElement.remove();
	                var nameOtherPrice = buttonContent.text();
	
	                otherPrices.push({
	                    name: nameOtherPrice,
	                    price: price
	                });
	            }
	
	            hotelsJSON.push({
	                name: name,
	                photo: photo,
	                category: new Array(parseInt(category, 10)),
	                rates: CHARACTER[rates],
	                rateInt: rates,
	                otherPrices: otherPrices,
	                price: bestPrice,
	                longitude: longitude,
	                latitude: latitude
	            });
	        } catch (err) {}
	    }
	
	    return hotelsJSON;
	}
	
	module.exports = {
	    doScraping: doScraping
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map