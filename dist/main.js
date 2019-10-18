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
/* harmony import */ var _src_js_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/game.js */ "./src/js/game.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener("DOMContentLoaded", function () {
  // debugger
  var game = new _src_js_game_js__WEBPACK_IMPORTED_MODULE_0__["default"](); // this.playButton = document.getElementsByClassName("play-button");
});

/***/ }),

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioSynth =
/*#__PURE__*/
function () {
  function AudioSynth() {
    _classCallCheck(this, AudioSynth);

    this.listener = new THREE.AudioListener();
    this.audioList = ["Dont Wanna Know.mp3", "Feel So Close.mp3", "If I Lose Myself.mp3", "Sunday Morning.mp3"];
    this.audio = new THREE.Audio(this.listener);
    window.audio = this.audio;
    this.mediaElement = new Audio("assets/Sunday Morning.mp3");
    this.mediaElement.autoplay = false; // this.mediaElement.hasPlaybackControl = true;
    // this.mediaElement.play();
    // this.bass = this.audio.context.createBiquadFilter();
    // this.bass.type = "lowshelf";
    // this.bass.frequency.value = 1000; // switches to 400 in UI
    // this.bass.gain.value = -0.5;
    // this.audio.setFilter(this.bass);
    // // this.bass.connect(this.audio.context.destination);
    // window.bass = this.bass;

    this.audio.setMediaElementSource(this.mediaElement);
    this.analyser = new THREE.AudioAnalyser(this.audio, 1024);
    window.analyser = this.analyser;
  }

  _createClass(AudioSynth, [{
    key: "fetchNewFrequencies",
    value: function fetchNewFrequencies() {
      // console.log("music")
      this.analyser.getFrequencyData();
      this.analyser.needsUpdate = true;
    }
  }]);

  return AudioSynth;
}();

/* harmony default export */ __webpack_exports__["default"] = (AudioSynth);

/***/ }),

/***/ "./src/js/controls.js":
/*!****************************!*\
  !*** ./src/js/controls.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = function Controls(scene) {
  _classCallCheck(this, Controls);

  var loader = new THREE.FontLoader();
  var testdata = loader.load("assets/Dream MMA_Regular.typeface.json", function (font) {
    var title = new THREE.TextGeometry("vibe", {
      font: font,
      size: 1,
      height: 1,
      curveSegments: 3
    });
    var materials = [new THREE.MeshPhongMaterial({
      color: 0x1b88f5,
      flatShading: true
    }), // front
    new THREE.MeshPhongMaterial({
      color: 0x012242
    }) // side
    ];
    var titleRender = new THREE.Mesh(title, materials);
    titleRender.name = "title";
    titleRender.position.z = 4;
    titleRender.position.x = -2.25;
    titleRender.position.y = 5;
    scene.add(titleRender);
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer */ "./src/js/visualizer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = document.getElementById("canvas");
    this.playButton = document.getElementById("play-button");
    this.stopButton = document.getElementById("stop-button");
    this.audio = document.getElementById("audio");
    this.score = 0;
    this.visualInit();

    this.playButton.onclick = function () {
      _this.play();
    };

    this.stopButton.onclick = function () {
      return _this.visualizer.music.mediaElement.pause();
    };
  }

  _createClass(Game, [{
    key: "visualInit",
    value: function visualInit() {
      this.visualizer = new _visualizer__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.score);
    }
  }, {
    key: "play",
    value: function play() {
      this.visualizer.music.mediaElement.play();
      window.visualizer = this.visualizer;
      this.visualizer.renderFrame();
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/js/inputs.js":
/*!**************************!*\
  !*** ./src/js/inputs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function PlayerInput() {
  var that = this;
  that.key1 = [false, 0];
  that.key2 = [false, 0];
  that.key3 = false;
  that.key4 = false;
  document.addEventListener("keydown", function (e) {
    if (e.key === "d") {
      that.key1[0] = true;
      that.key1[1] += 1; // console.log(that.key1);
    }

    if (e.key === "f") {
      that.key2[0] = true;
      that.key2[1] += 1; // console.log(that.key1);
    }

    if (e.key === "j") {
      that.key3[0] = true;
      that.key3[1] += 1; // console.log(that.key1);
    }

    if (e.key === "k") {
      that.key4[0] = true;
      that.key4[1] += 1; // console.log(that.key1);
    }
  });
  document.addEventListener("keyup", function (e) {
    if (e.key === "d") that.key1 = [false, 0];
    if (e.key === "f") that.key2 = [false, 0];
    if (e.key === "j") that.key3 = [false, 0];
    if (e.key === "k") that.key4 = [false, 0];
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PlayerInput);

/***/ }),

/***/ "./src/js/key1.js":
/*!************************!*\
  !*** ./src/js/key1.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyOne =
/*#__PURE__*/
function () {
  function KeyOne(scene, startPos, color, name) {
    _classCallCheck(this, KeyOne);

    this.scene = scene;
    this.geometry = new THREE.SphereGeometry(0.5, 10, 10);
    this.material = new THREE.MeshBasicMaterial({
      color: color
    });
    this.sphereShape = new THREE.Mesh(this.geometry, this.material);
    this.sphereShape.name = name;
    this.sphereShape.position.x = startPos;
    this.sphereShape.position.z = 4;
    this.moveForward = this.moveForward.bind(this);
  }

  _createClass(KeyOne, [{
    key: "moveForward",
    value: function moveForward(keyspeed) {
      if (this.sphereShape.position.z > 8) {
        this.sphereShape.position.z = 4;
      } else {
        this.sphereShape.position.z += keyspeed;
      }
    }
  }]);

  return KeyOne;
}();

/* harmony default export */ __webpack_exports__["default"] = (KeyOne);

/***/ }),

/***/ "./src/js/panel.js":
/*!*************************!*\
  !*** ./src/js/panel.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Panel = function Panel() {
  _classCallCheck(this, Panel);

  var size = 15,
      step = 1;
  var floor = new THREE.Geometry();
  var floorMat = new THREE.LineBasicMaterial({
    color: "white"
  });

  for (var i = -size; i <= size; i += step) {
    floor.vertices.push(new THREE.Vector3(-size, -0.04, i));
    floor.vertices.push(new THREE.Vector3(size, -0.04, i));
    floor.vertices.push(new THREE.Vector3(i, -0.04, -size));
    floor.vertices.push(new THREE.Vector3(i, -0.04, size));
  }

  this.line = new THREE.Line(floor, floorMat, THREE.LineSegments);
};

/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./src/js/sphere.js":
/*!**************************!*\
  !*** ./src/js/sphere.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sphere =
/*#__PURE__*/
function () {
  function Sphere() {
    _classCallCheck(this, Sphere);

    this.size = 3;
    this.colorTicker = 0;
    this.geometry = new THREE.SphereGeometry(this.size, 20, 20);
    this.material = new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors
    });
    this.sphereShape = new THREE.Mesh(this.geometry, this.material);
    this.sphereShape.dynamic = true;
    var numSides = this.geometry.faces.length;

    for (var i = 0; i < numSides; i++) {
      var vertIndex = this.geometry.faces[i];
      var color = new THREE.Color(0xffffff);
      var rRandom = Math.random() * (1 - 0.64) + 0.64;
      var gRandom = Math.random() * (1 - 0.64) + 0.64;
      var bRandom = Math.random() * (1 - 0.64) + 0.64; // console.log([rRandom, gRandom, bRandom]);

      color.setRGB(rRandom, gRandom, bRandom);
      vertIndex.color = color;
    }

    this.geometry.elementsNeedUpdate = true;
    this.sphereShape.position.y = 2.5;
  }

  _createClass(Sphere, [{
    key: "colorSwitch",
    value: function colorSwitch(maxFreq) {
      if (maxFreq === 255) {
        var _numSides = this.geometry.faces.length;

        for (var i = 0; i < _numSides; i++) {
          var vertIndex = this.geometry.faces[i];
          var color = new THREE.Color(0xffffff);
          var rRandom = Math.random() * (1 - 0.64) + 0.64;
          var gRandom = Math.random() * (1 - 0.64) + 0.64;
          var bRandom = Math.random() * (1 - 0.64) + 0.64; // console.log([rRandom,gRandom,bRandom])

          color.setRGB(rRandom, gRandom, bRandom);
          vertIndex.color = color;
        }
      }

      this.geometry.elementsNeedUpdate = true;
    }
  }]);

  return Sphere;
}();

/* harmony default export */ __webpack_exports__["default"] = (Sphere);

/***/ }),

/***/ "./src/js/visualizer.js":
/*!******************************!*\
  !*** ./src/js/visualizer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sphere__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sphere */ "./src/js/sphere.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ "./src/js/audio.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./src/js/panel.js");
/* harmony import */ var _key1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key1 */ "./src/js/key1.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs */ "./src/js/inputs.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/js/controls.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { THREE } from '../three';







var Visualizer =
/*#__PURE__*/
function () {
  function Visualizer(canvas, score) {
    _classCallCheck(this, Visualizer);

    this.score = score;
    this.playerInput = new _inputs__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.controls = new _controls__WEBPACK_IMPORTED_MODULE_5__["default"](this.scene);
    window.scene = this.scene;
    this.camera = new THREE.PerspectiveCamera(90, this.canvas.width / this.canvas.height, 0.1, 1000);
    var container = document.getElementsByClassName("game-container")[0];
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });
    this.renderer.setSize(container.clientWidth, container.clientWidth / 2);
    this.line = new _panel__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.scene.add(this.line.line);
    this.keyspeed = 0.05;
    this.init();
    this.animate = this.animate.bind(this);
    this.id;
  }

  _createClass(Visualizer, [{
    key: "animate",
    value: function animate() {
      var _this = this;

      this.music.fetchNewFrequencies();
      var set1 = this.music.analyser.data.slice(0, 16);
      var set2 = this.music.analyser.data.slice(16, 32);
      var set3 = this.music.analyser.data.slice(32, 48);
      var set4 = this.music.analyser.data.slice(48, 62);
      var set2Sum = set2.reduce(function (a, b) {
        return a + b;
      }, 0);
      var set2Ave = set2Sum / set2.length;
      var set3Sum = set3.reduce(function (a, b) {
        return a + b;
      }, 0);
      var set3Ave = set3Sum / set3.length;
      var set4Sum = set4.reduce(function (a, b) {
        return a + b;
      }, 0);
      var set4Ave = set4Sum / set4.length;
      var maxFreq = set1[2];
      this.sphere.colorSwitch(maxFreq);

      var _loop = function _loop(i) {
        _this.scene.children.some(function (child) {
          if (child.name === i.toString()) {
            if (child.position.z >= 8) {
              child.position.z = 4;

              _this.scene.remove(child);
            } else {
              if (i === 1) _this.key1.moveForward(_this.keyspeed);
              if (i === 2) _this.key2.moveForward(_this.keyspeed);
              if (i === 3) _this.key3.moveForward(_this.keyspeed);
              if (i === 4) _this.key4.moveForward(_this.keyspeed);
            }
          } else {
            if (maxFreq === 255) {
              _this.scene.add(_this.key1.sphereShape);
            }

            if (set2Ave > 180) {
              _this.scene.add(_this.key2.sphereShape);
            }

            if (set3Ave > 150 && set3Ave < 180) {
              _this.scene.add(_this.key3.sphereShape);
            }

            if (set4Ave > 120 && set4Ave < 180) {
              _this.scene.add(_this.key4.sphereShape);
            }
          }
        });
      };

      for (var i = 1; i < 5; i++) {
        _loop(i);
      }

      var curTime = parseFloat(this.music.mediaElement.currentTime.toFixed(2));

      if (this.musicMarkers[0] <= curTime) {
        this.keyspeed += 0.01;
        this.musicMarkers.shift();
        console.log([this.keyspeed, curTime]);
      }

      this.keyCheck();
      this.renderer.render(this.scene, this.camera);
      this.sphere.sphereShape.rotation.x += 0.01;
      this.sphere.sphereShape.rotation.y += 0.01;
      this.id = window.requestAnimationFrame(this.animate);
    }
  }, {
    key: "keyCheck",
    value: function keyCheck() {
      if (this.playerInput.key1[0] === true && this.key1.sphereShape.position.z >= 7.4 && this.key1.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key1[1] === 1) {
          this.score += 20;
          this.key1.sphereShape.position.z = 4;
          this.scene.remove(this.key1.sphereShape);
        }
      }

      if (this.playerInput.key2[0] === true && this.key2.sphereShape.position.z >= 7.4 && this.key2.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key2[1] === 1) {
          this.score += 20;
          this.key2.sphereShape.position.z = 4;
          this.scene.remove(this.key2.sphereShape);
        }
      }

      if (this.playerInput.key3[0] === true && this.key3.sphereShape.position.z >= 7.4 && this.key3.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key3[1] === 1) {
          this.score += 20;
          this.key3.sphereShape.position.z = 4;
          this.scene.remove(this.key3.sphereShape);
        }
      }

      if (this.playerInput.key4[0] === true && this.key4.sphereShape.position.z >= 7.4 && this.key4.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key4[1] === 1) {
          this.score += 20;
          this.key4.sphereShape.position.z = 4;
          this.scene.remove(this.key4.sphereShape);
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.music = new _audio__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.sphere = new _sphere__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.scene.add(this.sphere.sphereShape);
      this.key1 = new _key1__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, -1.5, "red", '1');
      this.key2 = new _key1__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, -0.5, "green", '2');
      this.key3 = new _key1__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, 0.5, "blue", '3');
      this.key4 = new _key1__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, 1.5, "yellow", '4');
      this.camera.position.z = 10; //return to 10

      this.camera.position.y = 2; // return to 2
    }
  }, {
    key: "renderFrame",
    value: function renderFrame() {
      var musicDuration = this.music.mediaElement.duration;
      var musicTimeDiv = parseFloat((musicDuration / 4).toFixed(2));
      this.musicMarkers = [musicTimeDiv, musicTimeDiv * 2, musicTimeDiv * 3];
      this.animate();
    }
  }]);

  return Visualizer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2lucHV0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva2V5MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NwaGVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlzdWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmNzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsIkdhbWUiLCJBdWRpb1N5bnRoIiwibGlzdGVuZXIiLCJUSFJFRSIsIkF1ZGlvTGlzdGVuZXIiLCJhdWRpb0xpc3QiLCJhdWRpbyIsIkF1ZGlvIiwibWVkaWFFbGVtZW50IiwiYXV0b3BsYXkiLCJzZXRNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsIkF1ZGlvQW5hbHlzZXIiLCJnZXRGcmVxdWVuY3lEYXRhIiwibmVlZHNVcGRhdGUiLCJDb250cm9scyIsInNjZW5lIiwibG9hZGVyIiwiRm9udExvYWRlciIsInRlc3RkYXRhIiwibG9hZCIsImZvbnQiLCJ0aXRsZSIsIlRleHRHZW9tZXRyeSIsInNpemUiLCJoZWlnaHQiLCJjdXJ2ZVNlZ21lbnRzIiwibWF0ZXJpYWxzIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwidGl0bGVSZW5kZXIiLCJNZXNoIiwibmFtZSIsInBvc2l0aW9uIiwieiIsIngiLCJ5IiwiYWRkIiwibGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2V0Iiwibm9ybWFsaXplIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXlCdXR0b24iLCJzdG9wQnV0dG9uIiwic2NvcmUiLCJ2aXN1YWxJbml0Iiwib25jbGljayIsInBsYXkiLCJ2aXN1YWxpemVyIiwibXVzaWMiLCJwYXVzZSIsIlZpc3VhbGl6ZXIiLCJyZW5kZXJGcmFtZSIsIlBsYXllcklucHV0IiwidGhhdCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJlIiwia2V5IiwiS2V5T25lIiwic3RhcnRQb3MiLCJnZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsInNwaGVyZVNoYXBlIiwibW92ZUZvcndhcmQiLCJiaW5kIiwia2V5c3BlZWQiLCJQYW5lbCIsInN0ZXAiLCJmbG9vciIsIkdlb21ldHJ5IiwiZmxvb3JNYXQiLCJMaW5lQmFzaWNNYXRlcmlhbCIsImkiLCJ2ZXJ0aWNlcyIsInB1c2giLCJWZWN0b3IzIiwibGluZSIsIkxpbmUiLCJMaW5lU2VnbWVudHMiLCJTcGhlcmUiLCJjb2xvclRpY2tlciIsInZlcnRleENvbG9ycyIsIkZhY2VDb2xvcnMiLCJkeW5hbWljIiwibnVtU2lkZXMiLCJmYWNlcyIsImxlbmd0aCIsInZlcnRJbmRleCIsIkNvbG9yIiwiclJhbmRvbSIsIk1hdGgiLCJyYW5kb20iLCJnUmFuZG9tIiwiYlJhbmRvbSIsInNldFJHQiIsImVsZW1lbnRzTmVlZFVwZGF0ZSIsIm1heEZyZXEiLCJwbGF5ZXJJbnB1dCIsIlNjZW5lIiwiY29udHJvbHMiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpZHRoIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJjbGllbnRXaWR0aCIsImluaXQiLCJhbmltYXRlIiwiaWQiLCJmZXRjaE5ld0ZyZXF1ZW5jaWVzIiwic2V0MSIsImRhdGEiLCJzbGljZSIsInNldDIiLCJzZXQzIiwic2V0NCIsInNldDJTdW0iLCJyZWR1Y2UiLCJhIiwiYiIsInNldDJBdmUiLCJzZXQzU3VtIiwic2V0M0F2ZSIsInNldDRTdW0iLCJzZXQ0QXZlIiwic3BoZXJlIiwiY29sb3JTd2l0Y2giLCJjaGlsZHJlbiIsInNvbWUiLCJjaGlsZCIsInRvU3RyaW5nIiwicmVtb3ZlIiwiY3VyVGltZSIsInBhcnNlRmxvYXQiLCJjdXJyZW50VGltZSIsInRvRml4ZWQiLCJtdXNpY01hcmtlcnMiLCJzaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJrZXlDaGVjayIsInJlbmRlciIsInJvdGF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXVzaWNEdXJhdGlvbiIsImR1cmF0aW9uIiwibXVzaWNUaW1lRGl2Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0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RUFBNEIsT0FBNUIsRUFBb0MsR0FBcEMsQ0FBWjtBQUNBLFdBQUs2QyxJQUFMLEdBQVksSUFBSUksNkNBQUosQ0FBVyxLQUFLakQsS0FBaEIsRUFBdUIsR0FBdkIsRUFBMkIsTUFBM0IsRUFBa0MsR0FBbEMsQ0FBWjtBQUNBLFdBQUs4QyxJQUFMLEdBQVksSUFBSUcsNkNBQUosQ0FBVyxLQUFLakQsS0FBaEIsRUFBdUIsR0FBdkIsRUFBMkIsUUFBM0IsRUFBb0MsR0FBcEMsQ0FBWjtBQU1BLFdBQUs2RixNQUFMLENBQVkzRSxRQUFaLENBQXFCQyxDQUFyQixHQUF5QixFQUF6QixDQWZJLENBZXlCOztBQUU3QixXQUFLMEUsTUFBTCxDQUFZM0UsUUFBWixDQUFxQkcsQ0FBckIsR0FBeUIsQ0FBekIsQ0FqQkksQ0FpQndCO0FBRzdCOzs7a0NBR1k7QUFDWCxVQUFJdUgsYUFBYSxHQUFHLEtBQUt2RyxLQUFMLENBQVc3QyxZQUFYLENBQXdCcUosUUFBNUM7QUFFQSxVQUFJQyxZQUFZLEdBQUdiLFVBQVUsQ0FBQyxDQUFDVyxhQUFhLEdBQUcsQ0FBakIsRUFBb0JULE9BQXBCLENBQTRCLENBQTVCLENBQUQsQ0FBN0I7QUFFQSxXQUFLQyxZQUFMLEdBQW9CLENBQUNVLFlBQUQsRUFBZUEsWUFBWSxHQUFHLENBQTlCLEVBQWlDQSxZQUFZLEdBQUcsQ0FBaEQsQ0FBcEI7QUFLQSxXQUFLdkMsT0FBTDtBQUVEOzs7Ozs7QUFHWWhFLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDdk5BLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4uL3NyYy9qcy9nYW1lLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gZGVidWdnZXJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG4vLyB0aGlzLnBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGxheS1idXR0b25cIik7XG59KTtcblxuXG4iLCJjbGFzcyBBdWRpb1N5bnRoIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmxpc3RlbmVyID0gbmV3IFRIUkVFLkF1ZGlvTGlzdGVuZXIoKTtcbiAgICB0aGlzLmF1ZGlvTGlzdCA9IFtcbiAgICAgIFwiRG9udCBXYW5uYSBLbm93Lm1wM1wiLFxuICAgICAgXCJGZWVsIFNvIENsb3NlLm1wM1wiLFxuICAgICAgXCJJZiBJIExvc2UgTXlzZWxmLm1wM1wiLFxuICAgICAgXCJTdW5kYXkgTW9ybmluZy5tcDNcIlxuICAgIF07XG4gIFxuICAgIHRoaXMuYXVkaW8gPSBuZXcgVEhSRUUuQXVkaW8odGhpcy5saXN0ZW5lcik7XG4gICAgd2luZG93LmF1ZGlvID0gdGhpcy5hdWRpbztcbiAgICB0aGlzLm1lZGlhRWxlbWVudCA9IG5ldyBBdWRpbyhcbiAgICAgIFwiYXNzZXRzL1N1bmRheSBNb3JuaW5nLm1wM1wiXG4gICAgKTtcbiAgICBcbiAgICB0aGlzLm1lZGlhRWxlbWVudC5hdXRvcGxheSA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5tZWRpYUVsZW1lbnQuaGFzUGxheWJhY2tDb250cm9sID0gdHJ1ZTtcbiAgICAvLyB0aGlzLm1lZGlhRWxlbWVudC5wbGF5KCk7XG4gICAgXG4gICAgXG4gICAgLy8gdGhpcy5iYXNzID0gdGhpcy5hdWRpby5jb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIC8vIHRoaXMuYmFzcy50eXBlID0gXCJsb3dzaGVsZlwiO1xuICAgIC8vIHRoaXMuYmFzcy5mcmVxdWVuY3kudmFsdWUgPSAxMDAwOyAvLyBzd2l0Y2hlcyB0byA0MDAgaW4gVUlcbiAgICAvLyB0aGlzLmJhc3MuZ2Fpbi52YWx1ZSA9IC0wLjU7XG4gICAgLy8gdGhpcy5hdWRpby5zZXRGaWx0ZXIodGhpcy5iYXNzKTtcbiAgICAvLyAvLyB0aGlzLmJhc3MuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIC8vIHdpbmRvdy5iYXNzID0gdGhpcy5iYXNzO1xuICAgIHRoaXMuYXVkaW8uc2V0TWVkaWFFbGVtZW50U291cmNlKHRoaXMubWVkaWFFbGVtZW50KTtcbiAgICB0aGlzLmFuYWx5c2VyID0gbmV3IFRIUkVFLkF1ZGlvQW5hbHlzZXIodGhpcy5hdWRpbywgMTAyNCk7XG4gICAgd2luZG93LmFuYWx5c2VyID0gdGhpcy5hbmFseXNlcjtcbiAgfVxuXG4gIGZldGNoTmV3RnJlcXVlbmNpZXMoKXtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm11c2ljXCIpXG4gICAgdGhpcy5hbmFseXNlci5nZXRGcmVxdWVuY3lEYXRhKCk7XG4gICAgdGhpcy5hbmFseXNlci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9TeW50aDsiLCJjbGFzcyBDb250cm9scyB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lKXtcbiAgICBsZXQgbG9hZGVyID0gbmV3IFRIUkVFLkZvbnRMb2FkZXIoKTsgXG4gICAgXG4gICAgbGV0IHRlc3RkYXRhID0gbG9hZGVyLmxvYWQoXCJhc3NldHMvRHJlYW0gTU1BX1JlZ3VsYXIudHlwZWZhY2UuanNvblwiLCBmdW5jdGlvbihmb250KSB7XG4gICAgICBsZXQgdGl0bGUgPSBuZXcgVEhSRUUuVGV4dEdlb21ldHJ5KFwidmliZVwiLCB7XG4gICAgICAgIGZvbnQ6IGZvbnQsXG4gICAgICAgIHNpemU6IDEsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgY3VydmVTZWdtZW50czogMyxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBcbiAgICAgIGxldCBtYXRlcmlhbHMgPSBbXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDFiODhmNSwgZmxhdFNoYWRpbmc6IHRydWUgfSksIC8vIGZyb250XG4gICAgICAgIG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAxMjI0Mn0pIC8vIHNpZGVcbiAgICAgIF07XG5cbiAgICAgIGxldCB0aXRsZVJlbmRlciA9IG5ldyBUSFJFRS5NZXNoKHRpdGxlLCBtYXRlcmlhbHMpO1xuICAgICAgdGl0bGVSZW5kZXIubmFtZSA9IFwidGl0bGVcIjtcblxuICAgICAgdGl0bGVSZW5kZXIucG9zaXRpb24ueiA9IDQ7XG4gICAgICB0aXRsZVJlbmRlci5wb3NpdGlvbi54ID0gLTIuMjU7XG4gICAgICB0aXRsZVJlbmRlci5wb3NpdGlvbi55ID0gNTtcbiAgICAgIHNjZW5lLmFkZCh0aXRsZVJlbmRlcik7XG5cbiAgICAgIGxldCBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbiAgICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgwLCAxLCAxKS5ub3JtYWxpemUoKTtcbiAgICAgIHNjZW5lLmFkZChsaWdodCk7XG4gICAgfSk7XG5cbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sczsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5cblxuICAgIHRoaXMucGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idXR0b25cIik7XG4gICAgdGhpcy5zdG9wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9wLWJ1dHRvblwiKTtcbiAgICB0aGlzLmF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgIHRoaXMudmlzdWFsSW5pdCgpO1xuXG4gICAgdGhpcy5wbGF5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3BCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMudmlzdWFsaXplci5tdXNpYy5tZWRpYUVsZW1lbnQucGF1c2UoKTtcbiAgICBcbiAgfVxuXG4gIHZpc3VhbEluaXQoKXsgIFxuICAgIHRoaXMudmlzdWFsaXplciA9IG5ldyBWaXN1YWxpemVyKHRoaXMuY2FudmFzLCB0aGlzLnNjb3JlKTtcbiAgfVxuXG4gIHBsYXkoKXtcblxuXG4gICAgXG4gICAgXG4gICAgdGhpcy52aXN1YWxpemVyLm11c2ljLm1lZGlhRWxlbWVudC5wbGF5KCk7XG4gICAgd2luZG93LnZpc3VhbGl6ZXIgPSB0aGlzLnZpc3VhbGl6ZXI7XG4gICAgdGhpcy52aXN1YWxpemVyLnJlbmRlckZyYW1lKCk7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiZnVuY3Rpb24gUGxheWVySW5wdXQoKXtcbiAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gIHRoYXQua2V5MSA9IFtmYWxzZSwwXTtcbiAgdGhhdC5rZXkyID0gW2ZhbHNlLDBdO1xuICB0aGF0LmtleTMgPSBmYWxzZTtcbiAgdGhhdC5rZXk0ID0gZmFsc2U7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgaWYoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgICB0aGF0LmtleTFbMF0gPSB0cnVlO1xuICAgICAgdGhhdC5rZXkxWzFdICs9IDE7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGF0LmtleTEpO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJmXCIpIHtcbiAgICAgIHRoYXQua2V5MlswXSA9IHRydWU7XG4gICAgICB0aGF0LmtleTJbMV0gKz0gMTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQua2V5MSk7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSBcImpcIikge1xuICAgICAgdGhhdC5rZXkzWzBdID0gdHJ1ZTtcbiAgICAgIHRoYXQua2V5M1sxXSArPSAxO1xuICAgICAgLy8gY29uc29sZS5sb2codGhhdC5rZXkxKTtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwia1wiKSB7XG4gICAgICB0aGF0LmtleTRbMF0gPSB0cnVlO1xuICAgICAgdGhhdC5rZXk0WzFdICs9IDE7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGF0LmtleTEpO1xuICAgIH1cbiAgfSlcblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiZFwiKSB0aGF0LmtleTEgPSBbZmFsc2UsMF07XG4gICAgaWYgKGUua2V5ID09PSBcImZcIikgdGhhdC5rZXkyID0gW2ZhbHNlLCAwXTtcbiAgICBpZiAoZS5rZXkgPT09IFwialwiKSB0aGF0LmtleTMgPSBbZmFsc2UsIDBdO1xuICAgIGlmIChlLmtleSA9PT0gXCJrXCIpIHRoYXQua2V5NCA9IFtmYWxzZSwgMF07XG4gIH0pO1xuXG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcklucHV0OyIsImNsYXNzIEtleU9uZSB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBzdGFydFBvcyxjb2xvcixuYW1lKXtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjUsIDEwLCAxMCk7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogY29sb3JcbiAgICB9KTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgdGhpcy5zcGhlcmVTaGFwZS5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnggPSBzdGFydFBvcztcbiAgICB0aGlzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPSA0O1xuXG4gICAgdGhpcy5tb3ZlRm9yd2FyZCA9IHRoaXMubW92ZUZvcndhcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG1vdmVGb3J3YXJkKGtleXNwZWVkKXtcbiAgICBcbiAgICAgIFxuICAgICAgaWYodGhpcy5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID4gOCl7XG4gICAgICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA9IDQ7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiArPSBrZXlzcGVlZDtcbiAgICAgIH1cbiAgICAgIFxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlPbmU7IiwiY2xhc3MgUGFuZWwge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxldCBzaXplID0gMTUsXG4gICAgICBzdGVwID0gMTtcbiAgICBsZXQgZmxvb3IgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcbiAgICBsZXQgZmxvb3JNYXQgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogXCJ3aGl0ZVwiIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IC1zaXplOyBpIDw9IHNpemU7IGkgKz0gc3RlcCkge1xuICAgICAgZmxvb3IudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtc2l6ZSwgLTAuMDQsIGkpKTtcbiAgICAgIGZsb29yLnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoc2l6ZSwgLTAuMDQsIGkpKTtcblxuICAgICAgZmxvb3IudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhpLCAtMC4wNCwgLXNpemUpKTtcbiAgICAgIGZsb29yLnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoaSwgLTAuMDQsIHNpemUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSBuZXcgVEhSRUUuTGluZShmbG9vciwgZmxvb3JNYXQsIFRIUkVFLkxpbmVTZWdtZW50cyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7IiwiY2xhc3MgU3BoZXJlIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnNpemUgPSAzO1xuICAgIHRoaXMuY29sb3JUaWNrZXIgPSAwO1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkodGhpcy5zaXplLCAyMCwgMjApO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgdmVydGV4Q29sb3JzOiBUSFJFRS5GYWNlQ29sb3JzXG4gICAgfSk7XG4gICAgdGhpcy5zcGhlcmVTaGFwZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICAgIHRoaXMuc3BoZXJlU2hhcGUuZHluYW1pYyA9IHRydWU7XG4gICAgICBsZXQgbnVtU2lkZXMgPSB0aGlzLmdlb21ldHJ5LmZhY2VzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2lkZXM7IGkrKykge1xuICAgICAgICBsZXQgdmVydEluZGV4ID0gdGhpcy5nZW9tZXRyeS5mYWNlc1tpXTtcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKDB4ZmZmZmZmKTtcbiAgICAgICAgbGV0IHJSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgIGxldCBnUmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC42NCkgKyAwLjY0O1xuICAgICAgICBsZXQgYlJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAoMSAtIDAuNjQpICsgMC42NDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coW3JSYW5kb20sIGdSYW5kb20sIGJSYW5kb21dKTtcbiAgICAgICAgY29sb3Iuc2V0UkdCKHJSYW5kb20sIGdSYW5kb20sIGJSYW5kb20pO1xuICAgICAgICB2ZXJ0SW5kZXguY29sb3IgPSBjb2xvcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2VvbWV0cnkuZWxlbWVudHNOZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnkgPSAyLjU7XG4gIH1cblxuICBjb2xvclN3aXRjaChtYXhGcmVxKXtcblxuICAgIFxuICAgICAgaWYobWF4RnJlcSA9PT0gMjU1KXtcbiAgICAgICAgbGV0IG51bVNpZGVzID0gdGhpcy5nZW9tZXRyeS5mYWNlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2lkZXM7IGkrKykge1xuICAgICAgICAgIGxldCB2ZXJ0SW5kZXggPSB0aGlzLmdlb21ldHJ5LmZhY2VzW2ldO1xuICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcigweGZmZmZmZik7XG4gICAgICAgICAgbGV0IHJSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgICAgbGV0IGdSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgICAgbGV0IGJSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coW3JSYW5kb20sZ1JhbmRvbSxiUmFuZG9tXSlcbiAgICAgICAgICBjb2xvci5zZXRSR0IoclJhbmRvbSwgZ1JhbmRvbSwgYlJhbmRvbSk7XG4gICAgICAgICAgdmVydEluZGV4LmNvbG9yID0gY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLmdlb21ldHJ5LmVsZW1lbnRzTmVlZFVwZGF0ZSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BoZXJlOyIsIi8vIGltcG9ydCB7IFRIUkVFIH0gZnJvbSAnLi4vdGhyZWUnO1xuaW1wb3J0IFNwaGVyZSBmcm9tICcuL3NwaGVyZSc7XG5pbXBvcnQgQXVkaW9TeW50aCBmcm9tICcuL2F1ZGlvJztcbmltcG9ydCBQYW5lbCBmcm9tICcuL3BhbmVsJztcbmltcG9ydCBLZXlPbmUgZnJvbSAnLi9rZXkxJztcbmltcG9ydCBQbGF5ZXJJbnB1dCBmcm9tIFwiLi9pbnB1dHNcIjtcbmltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcblxuXG5jbGFzcyBWaXN1YWxpemVyIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLHNjb3JlKXtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgdGhpcy5wbGF5ZXJJbnB1dCA9IG5ldyBQbGF5ZXJJbnB1dCgpO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMuc2NlbmUpO1xuICAgIHdpbmRvdy5zY2VuZSA9IHRoaXMuc2NlbmU7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIDkwLFxuICAgICAgKHRoaXMuY2FudmFzLndpZHRoKSAvICh0aGlzLmNhbnZhcy5oZWlnaHQpLFxuICAgICAgMC4xLFxuICAgICAgMTAwMFxuICAgICk7XG4gIFxuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnYW1lLWNvbnRhaW5lclwiKVswXTtcbiAgIFxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGNhbnZhczogdGhpcy5jYW52YXMgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKGNvbnRhaW5lci5jbGllbnRXaWR0aCwgY29udGFpbmVyLmNsaWVudFdpZHRoLzIpO1xuICAgIHRoaXMubGluZSA9IG5ldyBQYW5lbCgpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGluZS5saW5lKTtcbiAgICBcbiAgICB0aGlzLmtleXNwZWVkID0gMC4wNTtcblxuICAgIFxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaWQ7XG5cblxuXG5cbiAgfVxuXG4gIGFuaW1hdGUoKXtcblxuICAgICAgXG5cbiAgICAgIHRoaXMubXVzaWMuZmV0Y2hOZXdGcmVxdWVuY2llcygpO1xuXG4gICAgICBsZXQgc2V0MSA9IHRoaXMubXVzaWMuYW5hbHlzZXIuZGF0YS5zbGljZSgwLDE2KVxuICAgICAgbGV0IHNldDIgPSB0aGlzLm11c2ljLmFuYWx5c2VyLmRhdGEuc2xpY2UoMTYsIDMyKTtcbiAgICAgIGxldCBzZXQzID0gdGhpcy5tdXNpYy5hbmFseXNlci5kYXRhLnNsaWNlKDMyLCA0OCk7XG4gICAgICBsZXQgc2V0NCA9IHRoaXMubXVzaWMuYW5hbHlzZXIuZGF0YS5zbGljZSg0OCwgNjIpO1xuXG4gICAgICBcbiAgICAgIGxldCBzZXQyU3VtID0gc2V0Mi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICAgIGxldCBzZXQyQXZlID0gc2V0MlN1bS9zZXQyLmxlbmd0aDtcblxuICAgICAgbGV0IHNldDNTdW0gPSBzZXQzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgICAgbGV0IHNldDNBdmUgPSBzZXQzU3VtIC8gc2V0My5sZW5ndGg7XG5cbiAgICAgIGxldCBzZXQ0U3VtID0gc2V0NC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICAgIGxldCBzZXQ0QXZlID0gc2V0NFN1bSAvIHNldDQubGVuZ3RoO1xuICAgICAgbGV0IG1heEZyZXEgPSBzZXQxWzJdO1xuICAgICAgXG5cblxuICAgICAgdGhpcy5zcGhlcmUuY29sb3JTd2l0Y2gobWF4RnJlcSkgXG5cbiAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCA1OyBpKyspe1xuICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLnNvbWUoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgaWYoY2hpbGQubmFtZSA9PT0gaS50b1N0cmluZygpKXtcblxuICAgICAgICAgICAgaWYoY2hpbGQucG9zaXRpb24ueiA+PSA4KXtcbiAgICAgICAgICAgICAgY2hpbGQucG9zaXRpb24ueiA9IDQ7XG4gICAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKGNoaWxkKVxuICAgICAgICAgICAgfWVsc2V7XG4gICBcbiAgICAgICAgICAgICAgaWYoaSA9PT0gMSkgdGhpcy5rZXkxLm1vdmVGb3J3YXJkKHRoaXMua2V5c3BlZWQpO1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gMikgdGhpcy5rZXkyLm1vdmVGb3J3YXJkKHRoaXMua2V5c3BlZWQpO1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gMykgdGhpcy5rZXkzLm1vdmVGb3J3YXJkKHRoaXMua2V5c3BlZWQpO1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gNCkgdGhpcy5rZXk0Lm1vdmVGb3J3YXJkKHRoaXMua2V5c3BlZWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihtYXhGcmVxID09PSAyNTUpe1xuICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmtleTEuc3BoZXJlU2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2V0MkF2ZSA+IDE4MCl7XG4gICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua2V5Mi5zcGhlcmVTaGFwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzZXQzQXZlID4gMTUwICYmIHNldDNBdmUgPCAxODApe1xuICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmtleTMuc3BoZXJlU2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldDRBdmUgPiAxMjAgJiYgc2V0NEF2ZSA8IDE4MCkge1xuICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmtleTQuc3BoZXJlU2hhcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG5cbiAgICAgICAgbGV0IGN1clRpbWUgPSBwYXJzZUZsb2F0KHRoaXMubXVzaWMubWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lLnRvRml4ZWQoMikpO1xuXG4gICAgICAgIGlmKHRoaXMubXVzaWNNYXJrZXJzWzBdIDw9IGN1clRpbWUpe1xuICAgICAgICAgIHRoaXMua2V5c3BlZWQgKz0gMC4wMTtcbiAgICAgICAgICB0aGlzLm11c2ljTWFya2Vycy5zaGlmdCgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFt0aGlzLmtleXNwZWVkLGN1clRpbWVdKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5rZXlDaGVjaygpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgICAgICB0aGlzLnNwaGVyZS5zcGhlcmVTaGFwZS5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICAgIHRoaXMuc3BoZXJlLnNwaGVyZVNoYXBlLnJvdGF0aW9uLnkgKz0gMC4wMTtcbiAgICB0aGlzLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5hbmltYXRlICk7XG4gIH1cblxuICBrZXlDaGVjaygpe1xuICAgIGlmIChcbiAgICAgIHRoaXMucGxheWVySW5wdXQua2V5MVswXSA9PT0gdHJ1ZSAmJlxuICAgICAgKHRoaXMua2V5MS5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID49IDcuNCAmJlxuICAgICAgICB0aGlzLmtleTEuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA8PSA3LjgpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJJbnB1dC5rZXkxWzFdID09PSAxKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjA7XG4gXG4gICAgICAgIHRoaXMua2V5MS5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID0gNDtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rZXkxLnNwaGVyZVNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnBsYXllcklucHV0LmtleTJbMF0gPT09IHRydWUgJiZcbiAgICAgICh0aGlzLmtleTIuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA+PSA3LjQgJiZcbiAgICAgICAgdGhpcy5rZXkyLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPD0gNy44KVxuICAgICkge1xuICAgICAgaWYgKHRoaXMucGxheWVySW5wdXQua2V5MlsxXSA9PT0gMSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDIwO1xuXG4gICAgICAgIHRoaXMua2V5Mi5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID0gNDtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rZXkyLnNwaGVyZVNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnBsYXllcklucHV0LmtleTNbMF0gPT09IHRydWUgJiZcbiAgICAgICh0aGlzLmtleTMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA+PSA3LjQgJiZcbiAgICAgICAgdGhpcy5rZXkzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPD0gNy44KVxuICAgICkge1xuICAgICAgaWYgKHRoaXMucGxheWVySW5wdXQua2V5M1sxXSA9PT0gMSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDIwO1xuXG4gICAgICAgIHRoaXMua2V5My5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID0gNDtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rZXkzLnNwaGVyZVNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnBsYXllcklucHV0LmtleTRbMF0gPT09IHRydWUgJiZcbiAgICAgICh0aGlzLmtleTQuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA+PSA3LjQgJiZcbiAgICAgICAgdGhpcy5rZXk0LnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPD0gNy44KVxuICAgICkge1xuICAgICAgaWYgKHRoaXMucGxheWVySW5wdXQua2V5NFsxXSA9PT0gMSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDIwO1xuXG4gICAgICAgIHRoaXMua2V5NC5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID0gNDtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rZXk0LnNwaGVyZVNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGluaXQoKXtcblxuICAgIHRoaXMubXVzaWMgPSBuZXcgQXVkaW9TeW50aCgpO1xuICAgIHRoaXMuc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuc3BoZXJlLnNwaGVyZVNoYXBlKTtcblxuICAgIHRoaXMua2V5MSA9IG5ldyBLZXlPbmUodGhpcy5zY2VuZSwtMS41LFwicmVkXCIsJzEnKTtcbiAgICB0aGlzLmtleTIgPSBuZXcgS2V5T25lKHRoaXMuc2NlbmUsIC0wLjUsXCJncmVlblwiLCcyJyk7XG4gICAgdGhpcy5rZXkzID0gbmV3IEtleU9uZSh0aGlzLnNjZW5lLCAwLjUsXCJibHVlXCIsJzMnKTtcbiAgICB0aGlzLmtleTQgPSBuZXcgS2V5T25lKHRoaXMuc2NlbmUsIDEuNSxcInllbGxvd1wiLCc0Jyk7XG5cbiAgICBcblxuICAgIFxuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwOyAvL3JldHVybiB0byAxMFxuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDI7IC8vIHJldHVybiB0byAyXG4gICAgXG4gICAgXG4gIH1cblxuXG4gIHJlbmRlckZyYW1lKCl7XG4gICAgbGV0IG11c2ljRHVyYXRpb24gPSB0aGlzLm11c2ljLm1lZGlhRWxlbWVudC5kdXJhdGlvbjtcblxuICAgIGxldCBtdXNpY1RpbWVEaXYgPSBwYXJzZUZsb2F0KChtdXNpY0R1cmF0aW9uIC8gNCkudG9GaXhlZCgyKSk7XG5cbiAgICB0aGlzLm11c2ljTWFya2VycyA9IFttdXNpY1RpbWVEaXYsIG11c2ljVGltZURpdiAqIDIsIG11c2ljVGltZURpdiAqIDNdO1xuXG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9