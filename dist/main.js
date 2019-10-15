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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/buffer.js */ "./src/js/buffer.js");
/* harmony import */ var _js_music_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/music.js */ "./src/js/music.js");



var note = function note() {
  var context = new window.AudioContext();
  var analyser = context.createAnalyser(); // let buffer = new Buffer(context, [
  //   "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3"
  // ]);
  // buffer.loadAll();
  // // debugger
  // let sound = new Music(context, buffer.getSoundByIndex(0));
  // // debugger
  // sound.play();

  var audio = document.getElementById('audio');
  audio.src = "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3";
  var src = context.createMediaElementSource(audio);
  audio.play();
  window.analyser = analyser;
  window.src = src;
  window.context = context;
};

document.querySelector("button").addEventListener("click", note);

/***/ }),

/***/ "./src/js/buffer.js":
/*!**************************!*\
  !*** ./src/js/buffer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Buffer =
/*#__PURE__*/
function () {
  function Buffer(context, urls) {
    _classCallCheck(this, Buffer);

    this.context = context; // audio context

    this.urls = urls; // path for each audio file stored in an array

    this.buffer = []; // will contain loaded files
  }

  _createClass(Buffer, [{
    key: "loadSound",
    value: function loadSound(url, index) {
      var request = new XMLHttpRequest(); // request for certain file

      request.open('get', url, true); // url is path of file to be loaded

      request.responseType = 'arraybuffer'; // sets response to binary data

      var thisBuffer = this;

      request.onload = function () {
        thisBuffer.context.decodeAudioData(request.response, function (buffer) {
          //request.response is the ArrayBuffer
          thisBuffer.buffer[index] = buffer; // store data to buffer array.
          // updateProgress(thisBuffer.urls.length);

          if (index == thisBuffer.urls.length - 1) {
            thisBuffer.loaded();
          }
        });
      };

      request.send();
    }
  }, {
    key: "loadAll",
    value: function loadAll() {
      var _this = this;

      this.urls.forEach(function (url, index) {
        _this.loadSound(url, index);
      });
    }
  }, {
    key: "loaded",
    value: function loaded() {
      debugger; // what happens when all the files are loaded
    }
  }, {
    key: "getSoundByIndex",
    value: function getSoundByIndex(index) {
      return this.buffer[index];
    }
  }]);

  return Buffer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Buffer);

/***/ }),

/***/ "./src/js/music.js":
/*!*************************!*\
  !*** ./src/js/music.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import {THREE} from '../three.js';
var Music =
/*#__PURE__*/
function () {
  function Music(context, buffer) {
    _classCallCheck(this, Music);

    this.context = context;
    this.buffer = buffer;
  }

  _createClass(Music, [{
    key: "init",
    value: function init() {
      // debugger
      this.gainNode = this.context.createGain();
      this.source = this.context.createBufferSource();
      this.source.buffer = this.buffer;
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
    }
  }, {
    key: "play",
    value: function play() {
      this.init(); // var scene = new THREE.Scene();
      // var camera = new THREE.PerspectiveCamera(
      //     75,
      //     window.innerWidth / window.innerHeight,
      //     0.1,
      //     1000
      // );
      // var renderer = new THREE.WebGLRenderer();
      // renderer.setSize(
      //     window.innerWidth / 2,
      //     window.innerHeight / 2
      // );
      // document.body.appendChild(renderer.domElement);
      // var geometry = new THREE.BoxGeometry(1, 1, 1);
      // var material = new THREE.MeshBasicMaterial();
      // var cube = new THREE.Mesh(geometry, material);
      // scene.add(cube);
      // camera.position.z = 5;
      // function animate() {
      //     requestAnimationFrame(animate);
      //     cube.rotation.x += 0.01;
      //     cube.rotation.y += 0.01;
      //     renderer.render(scene, camera);
      // }
      // animate();
      // this.setup();

      this.source.start(this.context.currentTime);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
      this.source.stop(this.context.currentTime + 0.5);
    }
  }]);

  return Music;
}();

/* harmony default export */ __webpack_exports__["default"] = (Music);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL211c2ljLmpzIl0sIm5hbWVzIjpbIm5vdGUiLCJjb250ZXh0Iiwid2luZG93IiwiQXVkaW9Db250ZXh0IiwiYW5hbHlzZXIiLCJjcmVhdGVBbmFseXNlciIsImF1ZGlvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsInBsYXkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkJ1ZmZlciIsInVybHMiLCJidWZmZXIiLCJ1cmwiLCJpbmRleCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJ0aGlzQnVmZmVyIiwib25sb2FkIiwiZGVjb2RlQXVkaW9EYXRhIiwicmVzcG9uc2UiLCJsZW5ndGgiLCJsb2FkZWQiLCJzZW5kIiwiZm9yRWFjaCIsImxvYWRTb3VuZCIsIk11c2ljIiwiZ2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiaW5pdCIsInN0YXJ0IiwiY3VycmVudFRpbWUiLCJnYWluIiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQnVmZmVyIGZyb20gJy4vanMvYnVmZmVyLmpzJztcbmltcG9ydCBNdXNpYyBmcm9tICcuL2pzL211c2ljLmpzJztcblxuXG5jb25zdCBub3RlID0gKCkgPT4ge1xuICBsZXQgY29udGV4dCA9IG5ldyB3aW5kb3cuQXVkaW9Db250ZXh0KCk7XG4gICAgbGV0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAvLyBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcihjb250ZXh0LCBbXG4gIC8vICAgXCIuL2Fzc2V0cy9GZWVsIFNvIENsb3NlIChCZW5ueSBCZW5hc3NpIFJlbWl4KSAoSmFwYW4gQm9udXMgVHJhY2spLm1wM1wiXG4gIC8vIF0pO1xuICAvLyBidWZmZXIubG9hZEFsbCgpO1xuICAvLyAvLyBkZWJ1Z2dlclxuICAvLyBsZXQgc291bmQgPSBuZXcgTXVzaWMoY29udGV4dCwgYnVmZmVyLmdldFNvdW5kQnlJbmRleCgwKSk7XG4gIC8vIC8vIGRlYnVnZ2VyXG4gIC8vIHNvdW5kLnBsYXkoKTtcblxuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpbycpO1xuICBhdWRpby5zcmMgPVxuICAgIFwiLi9hc3NldHMvRmVlbCBTbyBDbG9zZSAoQmVubnkgQmVuYXNzaSBSZW1peCkgKEphcGFuIEJvbnVzIFRyYWNrKS5tcDNcIjtcblxuICBsZXQgc3JjID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICBhdWRpby5wbGF5KCk7XG4gIHdpbmRvdy5hbmFseXNlciA9IGFuYWx5c2VyO1xuICB3aW5kb3cuc3JjID0gc3JjO1xuICB3aW5kb3cuY29udGV4dCA9IGNvbnRleHQ7XG5cbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5vdGUpO1xuIiwiY2xhc3MgQnVmZmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybHMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gYXVkaW8gY29udGV4dFxuICAgICAgICB0aGlzLnVybHMgPSB1cmxzOyAvLyBwYXRoIGZvciBlYWNoIGF1ZGlvIGZpbGUgc3RvcmVkIGluIGFuIGFycmF5XG4gICAgICAgIHRoaXMuYnVmZmVyID0gW107IC8vIHdpbGwgY29udGFpbiBsb2FkZWQgZmlsZXNcbiAgICB9XG5cbiAgICBsb2FkU291bmQodXJsLCBpbmRleCkge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvLyByZXF1ZXN0IGZvciBjZXJ0YWluIGZpbGVcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdnZXQnLCB1cmwsIHRydWUpOyAvLyB1cmwgaXMgcGF0aCBvZiBmaWxlIHRvIGJlIGxvYWRlZFxuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7IC8vIHNldHMgcmVzcG9uc2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgICAgbGV0IHRoaXNCdWZmZXIgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXNCdWZmZXIuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24gKGJ1ZmZlcikgeyAgLy9yZXF1ZXN0LnJlc3BvbnNlIGlzIHRoZSBBcnJheUJ1ZmZlclxuICAgICAgICAgICAgICAgIHRoaXNCdWZmZXIuYnVmZmVyW2luZGV4XSA9IGJ1ZmZlcjsgLy8gc3RvcmUgZGF0YSB0byBidWZmZXIgYXJyYXkuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlUHJvZ3Jlc3ModGhpc0J1ZmZlci51cmxzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IHRoaXNCdWZmZXIudXJscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNCdWZmZXIubG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cblxuICAgIGxvYWRBbGwoKSB7XG4gICAgICAgIHRoaXMudXJscy5mb3JFYWNoKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRTb3VuZCh1cmwsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkZWQoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIC8vIHdoYXQgaGFwcGVucyB3aGVuIGFsbCB0aGUgZmlsZXMgYXJlIGxvYWRlZFxuICAgIH1cblxuICAgIGdldFNvdW5kQnlJbmRleChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXJbaW5kZXhdO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXI7IiwiLy8gaW1wb3J0IHtUSFJFRX0gZnJvbSAnLi4vdGhyZWUuanMnO1xuXG5jbGFzcyBNdXNpYyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBidWZmZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICAgICAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICAvLyB2YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICAvLyAgICAgNzUsXG4gICAgICAgIC8vICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgLy8gICAgIDAuMSxcbiAgICAgICAgLy8gICAgIDEwMDBcbiAgICAgICAgLy8gKTtcblxuICAgICAgICAvLyB2YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICAvLyByZW5kZXJlci5zZXRTaXplKFxuICAgICAgICAvLyAgICAgd2luZG93LmlubmVyV2lkdGggLyAyLFxuICAgICAgICAvLyAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIC8vIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcbiAgICAgICAgLy8gdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XG4gICAgICAgIC8vIHZhciBjdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgICAgLy8gc2NlbmUuYWRkKGN1YmUpO1xuXG4gICAgICAgIC8vIGNhbWVyYS5wb3NpdGlvbi56ID0gNTtcblxuICAgICAgICAvLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAvLyAgICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICAgIC8vICAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4wMTtcbiAgICAgICAgLy8gICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBhbmltYXRlKCk7XG5cblxuICAgICAgICAvLyB0aGlzLnNldHVwKCk7XG4gICAgICAgIHRoaXMuc291cmNlLnN0YXJ0KHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG4gICAgfVxuXG4gICAgc3RvcCgpe1xuICAgICAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgMC41KTtcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3RvcCh0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyAwLjUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVzaWM7Il0sInNvdXJjZVJvb3QiOiIifQ==