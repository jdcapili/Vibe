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
  function AudioSynth(songUrl) {
    _classCallCheck(this, AudioSynth);

    this.listener = new THREE.AudioListener();
    this.audio = new THREE.Audio(this.listener);
    window.audio = this.audio;
    this.mediaElement = new Audio("assets/".concat(songUrl));
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
      this.analyser.getFrequencyData();
      this.analyser.needsUpdate = true;
      var set1 = this.analyser.data.slice(0, 16);
      var set2 = this.analyser.data.slice(16, 32);
      var set3 = this.analyser.data.slice(32, 48);
      var set4 = this.analyser.data.slice(48, 62);
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
      return {
        maxFreq: maxFreq,
        set2Ave: set2Ave,
        set3Ave: set3Ave,
        set4Ave: set4Ave
      };
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controls =
/*#__PURE__*/
function () {
  function Controls(scene) {
    var _this = this;

    _classCallCheck(this, Controls);

    var loader = new THREE.FontLoader();
    this.scene = scene;
    this.titleCreate = this.titleCreate.bind(this);
    var title = loader.load("assets/Dream MMA_Regular.typeface.json", function (font) {
      _this.titleCreate(font);
    });
  }

  _createClass(Controls, [{
    key: "titleCreate",
    value: function titleCreate(font) {
      var title = new THREE.TextGeometry("vibe", {
        font: font,
        size: 1,
        height: 1,
        curveSegments: 3
      });
      var materials = [new THREE.MeshPhongMaterial({
        color: 0x2690f7,
        flatShading: true
      }), // front
      new THREE.MeshPhongMaterial({
        color: 0x064d92
      }) // side
      ];
      this.titleRender = new THREE.Mesh(title, materials);
      this.titleRender.name = "title";
      this.titleRender.position.z = -4;
      this.titleRender.position.x = -2.25;
      this.titleRender.position.y = 5; // titleRender.rotation.x = 0.5;
      // titleRender.rotation.y = 0.5;

      this.scene.add(this.titleRender);
      var light = new THREE.DirectionalLight(0xffffff);
      light.position.set(2, 3, 2);
      window.light = light;
      this.scene.add(light);
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      if (this.titleRender) {
        if (this.titleRender.position.z < 4) {
          this.titleRender.position.z += 0.25;
        }
      }
    }
  }]);

  return Controls;
}();

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
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ "./src/js/audio.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById("canvas");
    this.stopButton = document.getElementById("stop-button");
    this.audio = document.getElementById("audio");
    this.score = 0;
    var scoreCard = document.getElementById("score-value");
    scoreCard.innerText = this.score;
    this.visualInit();
    this.createSongList();
    this.gamePaused = null;
    this.pauseGame();
  }

  _createClass(Game, [{
    key: "pauseGame",
    value: function pauseGame() {
      var _this = this;

      var pauseMenu = document.getElementById('pause-menu');
      document.addEventListener("keydown", function (e) {
        if (e.which === 32) {
          if (!_this.gamePaused) {
            _this.music.mediaElement.pause();

            _this.visualizer.stopAnimation();

            pauseMenu.classList.toggle('hide-menu');
            _this.gamePaused = true;
          } else if (_this.gamePaused) {
            _this.music.mediaElement.play();

            _this.visualizer.animate();

            pauseMenu.classList.toggle('hide-menu');
            _this.gamePaused = false;
          }
        }
      });
    }
  }, {
    key: "createSongList",
    value: function createSongList() {
      var _this2 = this;

      var songList = document.getElementById("song-list");
      var audioList = ["Dont Wanna Know.mp3", "Feel So Close.mp3", "If I Lose Myself.mp3", "Sunday Morning.mp3"];
      audioList.forEach(function (songUrl) {
        var listItem = document.createElement("li");
        listItem.append(songUrl);

        listItem.onclick = function () {
          return _this2.play(songUrl);
        };

        songList.append(listItem);
      });
    }
  }, {
    key: "visualInit",
    value: function visualInit() {
      this.visualizer = new _visualizer__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.score);
    }
  }, {
    key: "play",
    value: function play(songUrl) {
      this.gamePaused = false;
      this.music = new _audio__WEBPACK_IMPORTED_MODULE_1__["default"](songUrl);
      var songSelection = document.getElementsByClassName("song-selection")[0];
      songSelection.classList.add("hide");
      this.music.mediaElement.play();
      window.visualizer = this.visualizer;
      this.visualizer.renderFrame(this.music);
    }
  }], [{
    key: "scoreUpdate",
    value: function scoreUpdate(score) {
      var scoreCard = document.getElementById("score-value");
      scoreCard.innerText = score; // console.log(this.score)
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
  that.key3 = [false, 0];
  that.key4 = [false, 0];
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

    if (e.which === 32) {
      e.preventDefault();
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

/***/ "./src/js/key.js":
/*!***********************!*\
  !*** ./src/js/key.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Key =
/*#__PURE__*/
function () {
  function Key(scene, startPos, color, name) {
    _classCallCheck(this, Key);

    this.colors = {
      red: "0xFF0000",
      blue: "0x0000ff",
      yellow: "0xffff00",
      green: "0x00ff00"
    };
    this.color = color;
    this.scene = scene;
    this.geometry = new THREE.SphereGeometry(0.5, 10, 10);
    this.material = new THREE.MeshBasicMaterial({
      color: this.colors[color]
    });
    this.sphereShape = new THREE.Mesh(this.geometry, this.material);
    this.sphereShape.name = name;
    this.sphereShape.position.x = startPos;
    this.sphereShape.position.z = 4;
    this.moveForward = this.moveForward.bind(this);
  }

  _createClass(Key, [{
    key: "moveForward",
    value: function moveForward(keyspeed) {
      this.colorSwitch();

      if (this.sphereShape.position.z > 8) {
        this.sphereShape.position.z = 4;
      } else {
        this.sphereShape.position.z += keyspeed;
      }
    }
  }, {
    key: "colorSwitch",
    value: function colorSwitch() {
      if (this.sphereShape.position.z >= 7) {
        this.sphereShape.material.color.setHex("0x00FFFF");
      } else {
        this.sphereShape.material.color.setHex(this.colors[this.color]);
      }
    }
  }]);

  return Key;
}();

/* harmony default export */ __webpack_exports__["default"] = (Key);

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

var Panel = function Panel(scene) {
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
  scene.add(this.line);
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/game.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./src/js/panel.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key */ "./src/js/key.js");
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
    this.container = document.getElementsByClassName("game-container")[0];
    this.setCamera();
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.animate = this.animate.bind(this);
    this.introAnimate = this.introAnimate.bind(this);
    this.id;
    this.openingElements();
    this.introAnimate();
    window.addEventListener('resize', this.onWindowResize, false);
  }

  _createClass(Visualizer, [{
    key: "openingElements",
    value: function openingElements() {
      this.controls = new _controls__WEBPACK_IMPORTED_MODULE_5__["default"](this.scene);
      this.line = new _panel__WEBPACK_IMPORTED_MODULE_2__["default"](this.scene);
    }
  }, {
    key: "inGameElements",
    value: function inGameElements() {
      this.keyspeed = 0.05;
      this.sphere = new _sphere__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.scene.add(this.sphere.sphereShape);
      this.key1 = new _key__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, -1.5, "red", "1");
      this.key2 = new _key__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, -0.5, "green", "2");
      this.key3 = new _key__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, 0.5, "blue", "3");
      this.key4 = new _key__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene, 1.5, "yellow", "4");
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.container = document.getElementsByClassName("game-container")[0];
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
  }, {
    key: "introAnimate",
    value: function introAnimate() {
      this.renderer.render(this.scene, this.camera);
      this.controls.zoomIn();
      this.id = window.requestAnimationFrame(this.introAnimate);
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      var _this$music$fetchNewF = this.music.fetchNewFrequencies(),
          maxFreq = _this$music$fetchNewF.maxFreq,
          set2Ave = _this$music$fetchNewF.set2Ave,
          set3Ave = _this$music$fetchNewF.set3Ave,
          set4Ave = _this$music$fetchNewF.set4Ave;

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

      this.speedUp();
      this.keyCheck();
      this.renderer.render(this.scene, this.camera);
      this.sphere.sphereShape.rotation.x += 0.01;
      this.sphere.sphereShape.rotation.y += 0.01;
      this.id = window.requestAnimationFrame(this.animate);
    }
  }, {
    key: "speedUp",
    value: function speedUp() {
      var curTime = parseFloat(this.music.mediaElement.currentTime.toFixed(2));

      if (this.musicMarkers[0] <= curTime) {
        this.keyspeed += 0.01;
        this.musicMarkers.shift();
      }
    }
  }, {
    key: "keyCheck",
    value: function keyCheck() {
      if (this.playerInput.key1[0] === true && this.key1.sphereShape.position.z >= 7.4 && this.key1.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key1[1] === 1) {
          this.score += 20;
          _game__WEBPACK_IMPORTED_MODULE_1__["default"].scoreUpdate(this.score);
          this.key1.sphereShape.position.z = 4;
          this.scene.remove(this.key1.sphereShape);
        }
      }

      if (this.playerInput.key2[0] === true && this.key2.sphereShape.position.z >= 7.4 && this.key2.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key2[1] === 1) {
          this.score += 20;
          _game__WEBPACK_IMPORTED_MODULE_1__["default"].scoreUpdate(this.score);
          this.key2.sphereShape.position.z = 4;
          this.scene.remove(this.key2.sphereShape);
        }
      }

      if (this.playerInput.key3[0] === true && this.key3.sphereShape.position.z >= 7.4 && this.key3.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key3[1] === 1) {
          this.score += 20;
          _game__WEBPACK_IMPORTED_MODULE_1__["default"].scoreUpdate(this.score);
          this.key3.sphereShape.position.z = 4;
          this.scene.remove(this.key3.sphereShape);
        }
      }

      if (this.playerInput.key4[0] === true && this.key4.sphereShape.position.z >= 7.4 && this.key4.sphereShape.position.z <= 7.8) {
        if (this.playerInput.key4[1] === 1) {
          this.score += 20;
          _game__WEBPACK_IMPORTED_MODULE_1__["default"].scoreUpdate(this.score);
          this.key4.sphereShape.position.z = 4;
          this.scene.remove(this.key4.sphereShape);
        }
      }
    }
  }, {
    key: "setCamera",
    value: function setCamera() {
      this.camera = new THREE.PerspectiveCamera(90, this.canvas.width / this.canvas.height, 0.1, 1000);
      this.camera.position.z = 10; //return to 10

      this.camera.position.y = 2; // return to 2
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      window.cancelAnimationFrame(this.id);
    }
  }, {
    key: "renderFrame",
    value: function renderFrame(music) {
      this.music = music;
      var musicDuration = this.music.mediaElement.duration;
      var musicTimeDiv = parseFloat((musicDuration / 4).toFixed(2));
      this.musicMarkers = [musicTimeDiv, musicTimeDiv * 2, musicTimeDiv * 3];
      this.inGameElements();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2lucHV0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BoZXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aXN1YWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYW1lIiwiR2FtZSIsIkF1ZGlvU3ludGgiLCJzb25nVXJsIiwibGlzdGVuZXIiLCJUSFJFRSIsIkF1ZGlvTGlzdGVuZXIiLCJhdWRpbyIsIkF1ZGlvIiwibWVkaWFFbGVtZW50IiwiYXV0b3BsYXkiLCJzZXRNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsIkF1ZGlvQW5hbHlzZXIiLCJnZXRGcmVxdWVuY3lEYXRhIiwibmVlZHNVcGRhdGUiLCJzZXQxIiwiZGF0YSIsInNsaWNlIiwic2V0MiIsInNldDMiLCJzZXQ0Iiwic2V0MlN1bSIsInJlZHVjZSIsImEiLCJiIiwic2V0MkF2ZSIsImxlbmd0aCIsInNldDNTdW0iLCJzZXQzQXZlIiwic2V0NFN1bSIsInNldDRBdmUiLCJtYXhGcmVxIiwiQ29udHJvbHMiLCJzY2VuZSIsImxvYWRlciIsIkZvbnRMb2FkZXIiLCJ0aXRsZUNyZWF0ZSIsImJpbmQiLCJ0aXRsZSIsImxvYWQiLCJmb250IiwiVGV4dEdlb21ldHJ5Iiwic2l6ZSIsImhlaWdodCIsImN1cnZlU2VnbWVudHMiLCJtYXRlcmlhbHMiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwiZmxhdFNoYWRpbmciLCJ0aXRsZVJlbmRlciIsIk1lc2giLCJuYW1lIiwicG9zaXRpb24iLCJ6IiwieCIsInkiLCJhZGQiLCJsaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJzZXQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RvcEJ1dHRvbiIsInNjb3JlIiwic2NvcmVDYXJkIiwiaW5uZXJUZXh0IiwidmlzdWFsSW5pdCIsImNyZWF0ZVNvbmdMaXN0IiwiZ2FtZVBhdXNlZCIsInBhdXNlR2FtZSIsInBhdXNlTWVudSIsImUiLCJ3aGljaCIsIm11c2ljIiwicGF1c2UiLCJ2aXN1YWxpemVyIiwic3RvcEFuaW1hdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBsYXkiLCJhbmltYXRlIiwic29uZ0xpc3QiLCJhdWRpb0xpc3QiLCJmb3JFYWNoIiwibGlzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwib25jbGljayIsIlZpc3VhbGl6ZXIiLCJzb25nU2VsZWN0aW9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbmRlckZyYW1lIiwiUGxheWVySW5wdXQiLCJ0aGF0Iiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiS2V5Iiwic3RhcnRQb3MiLCJjb2xvcnMiLCJyZWQiLCJibHVlIiwieWVsbG93IiwiZ3JlZW4iLCJnZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsInNwaGVyZVNoYXBlIiwibW92ZUZvcndhcmQiLCJrZXlzcGVlZCIsImNvbG9yU3dpdGNoIiwic2V0SGV4IiwiUGFuZWwiLCJzdGVwIiwiZmxvb3IiLCJHZW9tZXRyeSIsImZsb29yTWF0IiwiTGluZUJhc2ljTWF0ZXJpYWwiLCJpIiwidmVydGljZXMiLCJwdXNoIiwiVmVjdG9yMyIsImxpbmUiLCJMaW5lIiwiTGluZVNlZ21lbnRzIiwiU3BoZXJlIiwiY29sb3JUaWNrZXIiLCJ2ZXJ0ZXhDb2xvcnMiLCJGYWNlQ29sb3JzIiwiZHluYW1pYyIsIm51bVNpZGVzIiwiZmFjZXMiLCJ2ZXJ0SW5kZXgiLCJDb2xvciIsInJSYW5kb20iLCJNYXRoIiwicmFuZG9tIiwiZ1JhbmRvbSIsImJSYW5kb20iLCJzZXRSR0IiLCJlbGVtZW50c05lZWRVcGRhdGUiLCJwbGF5ZXJJbnB1dCIsIlNjZW5lIiwiY29udGFpbmVyIiwic2V0Q2FtZXJhIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW50cm9BbmltYXRlIiwiaWQiLCJvcGVuaW5nRWxlbWVudHMiLCJvbldpbmRvd1Jlc2l6ZSIsImNvbnRyb2xzIiwic3BoZXJlIiwicmVuZGVyIiwiY2FtZXJhIiwiem9vbUluIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmV0Y2hOZXdGcmVxdWVuY2llcyIsImNoaWxkcmVuIiwic29tZSIsImNoaWxkIiwidG9TdHJpbmciLCJyZW1vdmUiLCJzcGVlZFVwIiwia2V5Q2hlY2siLCJyb3RhdGlvbiIsImN1clRpbWUiLCJwYXJzZUZsb2F0IiwiY3VycmVudFRpbWUiLCJ0b0ZpeGVkIiwibXVzaWNNYXJrZXJzIiwic2hpZnQiLCJzY29yZVVwZGF0ZSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2lkdGgiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm11c2ljRHVyYXRpb24iLCJkdXJhdGlvbiIsIm11c2ljVGltZURpdiIsImluR2FtZUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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SlksQ0FBZDtBQU1BLFdBQUt1SCxNQUFMLENBQVk5RyxRQUFaLENBQXFCQyxDQUFyQixHQUF5QixFQUF6QixDQVBTLENBT29COztBQUM3QixXQUFLNkcsTUFBTCxDQUFZOUcsUUFBWixDQUFxQkcsQ0FBckIsR0FBeUIsQ0FBekIsQ0FSUyxDQVFtQjtBQUM3Qjs7O29DQUVjO0FBQ2IxRCxZQUFNLENBQUMwTCxvQkFBUCxDQUE0QixLQUFLM0IsRUFBakM7QUFDRDs7O2dDQUdXbEYsSyxFQUFNO0FBQ2hCLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUk4RyxhQUFhLEdBQUcsS0FBSzlHLEtBQUwsQ0FBV2xFLFlBQVgsQ0FBd0JpTCxRQUE1QztBQUVBLFVBQUlDLFlBQVksR0FBR1gsVUFBVSxDQUFDLENBQUNTLGFBQWEsR0FBRyxDQUFqQixFQUFvQlAsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBRCxDQUE3QjtBQUVBLFdBQUtDLFlBQUwsR0FBb0IsQ0FBQ1EsWUFBRCxFQUFlQSxZQUFZLEdBQUcsQ0FBOUIsRUFBaUNBLFlBQVksR0FBRyxDQUFoRCxDQUFwQjtBQUVBLFdBQUtDLGNBQUw7QUFHQSxXQUFLMUcsT0FBTDtBQUVEOzs7Ozs7QUFHWVEseUVBQWYsRTs7Ozs7Ozs7Ozs7QUM1TUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vc3JjL2pzL2dhbWUuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyBkZWJ1Z2dlclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbi8vIHRoaXMucGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5LWJ1dHRvblwiKTtcbn0pO1xuXG5cbiIsImNsYXNzIEF1ZGlvU3ludGgge1xuICBjb25zdHJ1Y3Rvcihzb25nVXJsKXtcbiAgICB0aGlzLmxpc3RlbmVyID0gbmV3IFRIUkVFLkF1ZGlvTGlzdGVuZXIoKTtcblxuXG4gICAgXG5cblxuICBcbiAgICB0aGlzLmF1ZGlvID0gbmV3IFRIUkVFLkF1ZGlvKHRoaXMubGlzdGVuZXIpO1xuICAgIHdpbmRvdy5hdWRpbyA9IHRoaXMuYXVkaW87XG4gICAgdGhpcy5tZWRpYUVsZW1lbnQgPSBuZXcgQXVkaW8oXG4gICAgICBgYXNzZXRzLyR7c29uZ1VybH1gXG4gICAgKTtcbiAgICBcbiAgICB0aGlzLm1lZGlhRWxlbWVudC5hdXRvcGxheSA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5tZWRpYUVsZW1lbnQuaGFzUGxheWJhY2tDb250cm9sID0gdHJ1ZTtcbiAgICAvLyB0aGlzLm1lZGlhRWxlbWVudC5wbGF5KCk7XG4gICAgXG4gICAgXG4gICAgLy8gdGhpcy5iYXNzID0gdGhpcy5hdWRpby5jb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIC8vIHRoaXMuYmFzcy50eXBlID0gXCJsb3dzaGVsZlwiO1xuICAgIC8vIHRoaXMuYmFzcy5mcmVxdWVuY3kudmFsdWUgPSAxMDAwOyAvLyBzd2l0Y2hlcyB0byA0MDAgaW4gVUlcbiAgICAvLyB0aGlzLmJhc3MuZ2Fpbi52YWx1ZSA9IC0wLjU7XG4gICAgLy8gdGhpcy5hdWRpby5zZXRGaWx0ZXIodGhpcy5iYXNzKTtcbiAgICAvLyAvLyB0aGlzLmJhc3MuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIC8vIHdpbmRvdy5iYXNzID0gdGhpcy5iYXNzO1xuICAgIHRoaXMuYXVkaW8uc2V0TWVkaWFFbGVtZW50U291cmNlKHRoaXMubWVkaWFFbGVtZW50KTtcbiAgICB0aGlzLmFuYWx5c2VyID0gbmV3IFRIUkVFLkF1ZGlvQW5hbHlzZXIodGhpcy5hdWRpbywgMTAyNCk7XG4gICAgd2luZG93LmFuYWx5c2VyID0gdGhpcy5hbmFseXNlcjtcbiAgfVxuXG4gIGZldGNoTmV3RnJlcXVlbmNpZXMoKXtcbiAgICBcbiAgICB0aGlzLmFuYWx5c2VyLmdldEZyZXF1ZW5jeURhdGEoKTtcbiAgICB0aGlzLmFuYWx5c2VyLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIGxldCBzZXQxID0gdGhpcy5hbmFseXNlci5kYXRhLnNsaWNlKDAsIDE2KTtcbiAgICBsZXQgc2V0MiA9IHRoaXMuYW5hbHlzZXIuZGF0YS5zbGljZSgxNiwgMzIpO1xuICAgIGxldCBzZXQzID0gdGhpcy5hbmFseXNlci5kYXRhLnNsaWNlKDMyLCA0OCk7XG4gICAgbGV0IHNldDQgPSB0aGlzLmFuYWx5c2VyLmRhdGEuc2xpY2UoNDgsIDYyKTtcblxuICAgIGxldCBzZXQyU3VtID0gc2V0Mi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBsZXQgc2V0MkF2ZSA9IHNldDJTdW0gLyBzZXQyLmxlbmd0aDtcblxuICAgIGxldCBzZXQzU3VtID0gc2V0My5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBsZXQgc2V0M0F2ZSA9IHNldDNTdW0gLyBzZXQzLmxlbmd0aDtcblxuICAgIGxldCBzZXQ0U3VtID0gc2V0NC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBsZXQgc2V0NEF2ZSA9IHNldDRTdW0gLyBzZXQ0Lmxlbmd0aDtcbiAgICBsZXQgbWF4RnJlcSA9IHNldDFbMl07XG5cbiAgICByZXR1cm4ge21heEZyZXEsc2V0MkF2ZSxzZXQzQXZlLHNldDRBdmV9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvU3ludGg7IiwiY2xhc3MgQ29udHJvbHMge1xuICBjb25zdHJ1Y3RvcihzY2VuZSl7XG4gICAgbGV0IGxvYWRlciA9IG5ldyBUSFJFRS5Gb250TG9hZGVyKCk7IFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnRpdGxlQ3JlYXRlID0gdGhpcy50aXRsZUNyZWF0ZS5iaW5kKHRoaXMpO1xuICAgIFxuICAgIGxldCB0aXRsZSA9IGxvYWRlci5sb2FkKFwiYXNzZXRzL0RyZWFtIE1NQV9SZWd1bGFyLnR5cGVmYWNlLmpzb25cIiwgKGZvbnQpID0+IHtcbiAgICAgIHRoaXMudGl0bGVDcmVhdGUoZm9udCk7XG4gICAgfSk7XG4gICAgXG4gIH1cblxuICB0aXRsZUNyZWF0ZShmb250KXtcbiAgICBsZXQgdGl0bGUgPSBuZXcgVEhSRUUuVGV4dEdlb21ldHJ5KFwidmliZVwiLCB7XG4gICAgICBmb250OiBmb250LFxuICAgICAgc2l6ZTogMSxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIGN1cnZlU2VnbWVudHM6IDNcbiAgICB9KTtcblxuICAgIGxldCBtYXRlcmlhbHMgPSBbXG4gICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHgyNjkwZjcsIGZsYXRTaGFkaW5nOiB0cnVlIH0pLCAvLyBmcm9udFxuICAgICAgbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDY0ZDkyIH0pIC8vIHNpZGVcbiAgICBdO1xuXG4gICAgdGhpcy50aXRsZVJlbmRlciA9IG5ldyBUSFJFRS5NZXNoKHRpdGxlLCBtYXRlcmlhbHMpO1xuICAgIHRoaXMudGl0bGVSZW5kZXIubmFtZSA9IFwidGl0bGVcIjtcblxuICAgIHRoaXMudGl0bGVSZW5kZXIucG9zaXRpb24ueiA9IC00O1xuICAgIHRoaXMudGl0bGVSZW5kZXIucG9zaXRpb24ueCA9IC0yLjI1O1xuICAgIHRoaXMudGl0bGVSZW5kZXIucG9zaXRpb24ueSA9IDU7XG4gICAgLy8gdGl0bGVSZW5kZXIucm90YXRpb24ueCA9IDAuNTtcbiAgICAvLyB0aXRsZVJlbmRlci5yb3RhdGlvbi55ID0gMC41O1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMudGl0bGVSZW5kZXIpO1xuXG4gICAgbGV0IGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgyLCAzLCAyKTtcbiAgICB3aW5kb3cubGlnaHQgPSBsaWdodDtcbiAgICB0aGlzLnNjZW5lLmFkZChsaWdodCk7XG4gIH1cblxuXG4gIHpvb21Jbigpe1xuICAgIGlmKHRoaXMudGl0bGVSZW5kZXIpe1xuICAgICAgaWYodGhpcy50aXRsZVJlbmRlci5wb3NpdGlvbi56IDwgNCl7XG4gICAgICAgIHRoaXMudGl0bGVSZW5kZXIucG9zaXRpb24ueiArPSAwLjI1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sczsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuaW1wb3J0IEF1ZGlvU3ludGggZnJvbSBcIi4vYXVkaW9cIjtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblxuICAgIHRoaXMuc3RvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcC1idXR0b25cIik7XG4gICAgdGhpcy5hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmUtdmFsdWVcIik7XG4gICAgXG4gICAgc2NvcmVDYXJkLmlubmVyVGV4dCA9IHRoaXMuc2NvcmU7XG4gICAgdGhpcy52aXN1YWxJbml0KCk7XG4gICAgdGhpcy5jcmVhdGVTb25nTGlzdCgpO1xuICAgIHRoaXMuZ2FtZVBhdXNlZCA9IG51bGw7XG5cbiAgICB0aGlzLnBhdXNlR2FtZSgpO1xuICB9XG5cbiAgcGF1c2VHYW1lKCl7XG4gICAgbGV0IHBhdXNlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1tZW51JylcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIGlmKGUud2hpY2ggPT09IDMyKXtcbiAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLmdhbWVQYXVzZWQpe1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMubXVzaWMubWVkaWFFbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgdGhpcy52aXN1YWxpemVyLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgICBwYXVzZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1tZW51JylcbiAgICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmdhbWVQYXVzZWQpe1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMubXVzaWMubWVkaWFFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICB0aGlzLnZpc3VhbGl6ZXIuYW5pbWF0ZSgpO1xuICAgICAgICAgIHBhdXNlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLW1lbnUnKVxuICAgICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVNvbmdMaXN0KCl7XG4gICAgbGV0IHNvbmdMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb25nLWxpc3RcIik7XG4gICAgbGV0IGF1ZGlvTGlzdCA9IFtcbiAgICAgIFwiRG9udCBXYW5uYSBLbm93Lm1wM1wiLFxuICAgICAgXCJGZWVsIFNvIENsb3NlLm1wM1wiLFxuICAgICAgXCJJZiBJIExvc2UgTXlzZWxmLm1wM1wiLFxuICAgICAgXCJTdW5kYXkgTW9ybmluZy5tcDNcIlxuICAgIF07XG4gICAgYXVkaW9MaXN0LmZvckVhY2goKHNvbmdVcmwpID0+IHtcbiAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpc3RJdGVtLmFwcGVuZChzb25nVXJsKTtcbiAgICAgIGxpc3RJdGVtLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnBsYXkoc29uZ1VybCk7XG4gICAgICBzb25nTGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgIH0pXG5cbiAgfVxuXG4gIHN0YXRpYyBzY29yZVVwZGF0ZShzY29yZSl7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmUtdmFsdWVcIik7XG4gICAgc2NvcmVDYXJkLmlubmVyVGV4dCA9IHNjb3JlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NvcmUpXG4gIH1cblxuICB2aXN1YWxJbml0KCl7ICBcbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXplcih0aGlzLmNhbnZhcywgdGhpcy5zY29yZSk7XG4gIH1cblxuICBwbGF5KHNvbmdVcmwpe1xuXG4gICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpb1N5bnRoKHNvbmdVcmwpO1xuICAgIGxldCBzb25nU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvbmctc2VsZWN0aW9uXCIpWzBdO1xuICAgIHNvbmdTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgXG4gICAgXG4gICAgdGhpcy5tdXNpYy5tZWRpYUVsZW1lbnQucGxheSgpO1xuICAgIHdpbmRvdy52aXN1YWxpemVyID0gdGhpcy52aXN1YWxpemVyO1xuICAgIHRoaXMudmlzdWFsaXplci5yZW5kZXJGcmFtZSh0aGlzLm11c2ljKTtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJmdW5jdGlvbiBQbGF5ZXJJbnB1dCgpe1xuICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgdGhhdC5rZXkxID0gW2ZhbHNlLCAwXTtcbiAgdGhhdC5rZXkyID0gW2ZhbHNlLCAwXTtcbiAgdGhhdC5rZXkzID0gW2ZhbHNlLCAwXTtcbiAgdGhhdC5rZXk0ID0gW2ZhbHNlLCAwXTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICBpZihlLmtleSA9PT0gXCJkXCIpIHtcbiAgICAgIHRoYXQua2V5MVswXSA9IHRydWU7XG4gICAgICB0aGF0LmtleTFbMV0gKz0gMTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQua2V5MSk7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSBcImZcIikge1xuICAgICAgdGhhdC5rZXkyWzBdID0gdHJ1ZTtcbiAgICAgIHRoYXQua2V5MlsxXSArPSAxO1xuICAgICAgLy8gY29uc29sZS5sb2codGhhdC5rZXkxKTtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwialwiKSB7XG4gICAgICB0aGF0LmtleTNbMF0gPSB0cnVlO1xuICAgICAgdGhhdC5rZXkzWzFdICs9IDE7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGF0LmtleTEpO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJrXCIpIHtcbiAgICAgIHRoYXQua2V5NFswXSA9IHRydWU7XG4gICAgICB0aGF0LmtleTRbMV0gKz0gMTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQua2V5MSk7XG4gICAgfVxuXG4gICAgaWYoZS53aGljaCA9PT0gMzIpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSlcblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiZFwiKSB0aGF0LmtleTEgPSBbZmFsc2UsMF07XG4gICAgaWYgKGUua2V5ID09PSBcImZcIikgdGhhdC5rZXkyID0gW2ZhbHNlLCAwXTtcbiAgICBpZiAoZS5rZXkgPT09IFwialwiKSB0aGF0LmtleTMgPSBbZmFsc2UsIDBdO1xuICAgIGlmIChlLmtleSA9PT0gXCJrXCIpIHRoYXQua2V5NCA9IFtmYWxzZSwgMF07XG4gIH0pO1xuXG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcklucHV0OyIsImNsYXNzIEtleSB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBzdGFydFBvcyxjb2xvcixuYW1lKXtcbiAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgIHJlZDogXCIweEZGMDAwMFwiLFxuICAgICAgYmx1ZTogXCIweDAwMDBmZlwiLFxuICAgICAgeWVsbG93OiBcIjB4ZmZmZjAwXCIsXG4gICAgICBncmVlbjogXCIweDAwZmYwMFwiXG4gICAgfTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC41LCAxMCwgMTApO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IHRoaXMuY29sb3JzW2NvbG9yXVxuICAgIH0pO1xuICAgIHRoaXMuc3BoZXJlU2hhcGUgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueCA9IHN0YXJ0UG9zO1xuICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA9IDQ7XG5cbiAgICB0aGlzLm1vdmVGb3J3YXJkID0gdGhpcy5tb3ZlRm9yd2FyZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbW92ZUZvcndhcmQoa2V5c3BlZWQpe1xuICAgIFxuICAgIHRoaXMuY29sb3JTd2l0Y2goKTtcbiAgICBpZih0aGlzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPiA4KXtcbiAgICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA9IDQ7XG4gICAgfWVsc2V7XG4gICAgICBcbiAgICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiArPSBrZXlzcGVlZDtcbiAgICB9XG4gICAgICBcbiAgfVxuXG4gIGNvbG9yU3dpdGNoKCl7XG4gICAgXG4gICAgaWYgKFxuICAgICAgdGhpcy5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID49IDdcbiAgICApIHtcbiAgICAgIFxuICAgICAgdGhpcy5zcGhlcmVTaGFwZS5tYXRlcmlhbC5jb2xvci5zZXRIZXgoXCIweDAwRkZGRlwiKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5zcGhlcmVTaGFwZS5tYXRlcmlhbC5jb2xvci5zZXRIZXgodGhpcy5jb2xvcnNbdGhpcy5jb2xvcl0pO1xuICAgIH1cblxuICAgIFxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXk7IiwiY2xhc3MgUGFuZWwge1xuICBjb25zdHJ1Y3RvcihzY2VuZSl7XG4gICAgbGV0IHNpemUgPSAxNSxcbiAgICAgIHN0ZXAgPSAxO1xuICAgIGxldCBmbG9vciA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuICAgIGxldCBmbG9vck1hdCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBcIndoaXRlXCIgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gLXNpemU7IGkgPD0gc2l6ZTsgaSArPSBzdGVwKSB7XG4gICAgICBmbG9vci52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC1zaXplLCAtMC4wNCwgaSkpO1xuICAgICAgZmxvb3IudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhzaXplLCAtMC4wNCwgaSkpO1xuXG4gICAgICBmbG9vci52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKGksIC0wLjA0LCAtc2l6ZSkpO1xuICAgICAgZmxvb3IudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhpLCAtMC4wNCwgc2l6ZSkpO1xuICAgIH1cblxuICAgIHRoaXMubGluZSA9IG5ldyBUSFJFRS5MaW5lKGZsb29yLCBmbG9vck1hdCwgVEhSRUUuTGluZVNlZ21lbnRzKTtcbiAgICBzY2VuZS5hZGQodGhpcy5saW5lKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsOyIsImNsYXNzIFNwaGVyZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zaXplID0gMztcbiAgICB0aGlzLmNvbG9yVGlja2VyID0gMDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHRoaXMuc2l6ZSwgMjAsIDIwKTtcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIHZlcnRleENvbG9yczogVEhSRUUuRmFjZUNvbG9yc1xuICAgIH0pO1xuICAgIHRoaXMuc3BoZXJlU2hhcGUgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlLmR5bmFtaWMgPSB0cnVlO1xuICAgICAgbGV0IG51bVNpZGVzID0gdGhpcy5nZW9tZXRyeS5mYWNlcy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNpZGVzOyBpKyspIHtcbiAgICAgICAgbGV0IHZlcnRJbmRleCA9IHRoaXMuZ2VvbWV0cnkuZmFjZXNbaV07XG4gICAgICAgIHZhciBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcigweGZmZmZmZik7XG4gICAgICAgIGxldCByUmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC42NCkgKyAwLjY0O1xuICAgICAgICBsZXQgZ1JhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAoMSAtIDAuNjQpICsgMC42NDtcbiAgICAgICAgbGV0IGJSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFtyUmFuZG9tLCBnUmFuZG9tLCBiUmFuZG9tXSk7XG4gICAgICAgIGNvbG9yLnNldFJHQihyUmFuZG9tLCBnUmFuZG9tLCBiUmFuZG9tKTtcbiAgICAgICAgdmVydEluZGV4LmNvbG9yID0gY29sb3I7XG4gICAgICB9XG4gICAgICB0aGlzLmdlb21ldHJ5LmVsZW1lbnRzTmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgdGhpcy5zcGhlcmVTaGFwZS5wb3NpdGlvbi55ID0gMi41O1xuICB9XG5cbiAgY29sb3JTd2l0Y2gobWF4RnJlcSl7XG5cbiAgICBcbiAgICAgIGlmKG1heEZyZXEgPT09IDI1NSl7XG4gICAgICAgIGxldCBudW1TaWRlcyA9IHRoaXMuZ2VvbWV0cnkuZmFjZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNpZGVzOyBpKyspIHtcbiAgICAgICAgICBsZXQgdmVydEluZGV4ID0gdGhpcy5nZW9tZXRyeS5mYWNlc1tpXTtcbiAgICAgICAgICB2YXIgY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoMHhmZmZmZmYpO1xuICAgICAgICAgIGxldCByUmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC42NCkgKyAwLjY0O1xuICAgICAgICAgIGxldCBnUmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC42NCkgKyAwLjY0O1xuICAgICAgICAgIGxldCBiUmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC42NCkgKyAwLjY0O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtyUmFuZG9tLGdSYW5kb20sYlJhbmRvbV0pXG4gICAgICAgICAgY29sb3Iuc2V0UkdCKHJSYW5kb20sIGdSYW5kb20sIGJSYW5kb20pO1xuICAgICAgICAgIHZlcnRJbmRleC5jb2xvciA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5nZW9tZXRyeS5lbGVtZW50c05lZWRVcGRhdGUgPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaGVyZTsiLCIvLyBpbXBvcnQgeyBUSFJFRSB9IGZyb20gJy4uL3RocmVlJztcbmltcG9ydCBTcGhlcmUgZnJvbSAnLi9zcGhlcmUnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBQYW5lbCBmcm9tICcuL3BhbmVsJztcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXknO1xuaW1wb3J0IFBsYXllcklucHV0IGZyb20gXCIuL2lucHV0c1wiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuXG5cbmNsYXNzIFZpc3VhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsc2NvcmUpe1xuICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB0aGlzLnBsYXllcklucHV0ID0gbmV3IFBsYXllcklucHV0KCk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdhbWUtY29udGFpbmVyXCIpWzBdO1xuICAgIHRoaXMuc2V0Q2FtZXJhKCk7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiB0aGlzLmNhbnZhcyB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCk7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnRyb0FuaW1hdGUgPSB0aGlzLmludHJvQW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaWQ7XG5cbiAgICB0aGlzLm9wZW5pbmdFbGVtZW50cygpO1xuICAgIHRoaXMuaW50cm9BbmltYXRlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUsIGZhbHNlKTtcbiAgfVxuXG4gIG9wZW5pbmdFbGVtZW50cygpe1xuICAgIHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcy5zY2VuZSk7XG5cbiAgICB0aGlzLmxpbmUgPSBuZXcgUGFuZWwodGhpcy5zY2VuZSk7XG4gIH1cblxuICBpbkdhbWVFbGVtZW50cygpe1xuICAgIHRoaXMua2V5c3BlZWQgPSAwLjA1O1xuICAgIHRoaXMuc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuc3BoZXJlLnNwaGVyZVNoYXBlKTtcblxuICAgIHRoaXMua2V5MSA9IG5ldyBLZXkodGhpcy5zY2VuZSwgLTEuNSwgXCJyZWRcIiwgXCIxXCIpO1xuICAgIHRoaXMua2V5MiA9IG5ldyBLZXkodGhpcy5zY2VuZSwgLTAuNSwgXCJncmVlblwiLCBcIjJcIik7XG4gICAgdGhpcy5rZXkzID0gbmV3IEtleSh0aGlzLnNjZW5lLCAwLjUsIFwiYmx1ZVwiLCBcIjNcIik7XG4gICAgdGhpcy5rZXk0ID0gbmV3IEtleSh0aGlzLnNjZW5lLCAxLjUsIFwieWVsbG93XCIsIFwiNFwiKTtcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCl7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2FtZS1jb250YWluZXJcIilbMF07XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKFxuICAgICAgdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaW50cm9BbmltYXRlKCl7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgIHRoaXMuY29udHJvbHMuem9vbUluKCk7XG4gICAgdGhpcy5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5pbnRyb0FuaW1hdGUpO1xuICB9XG5cbiAgYW5pbWF0ZSgpe1xuICAgIGxldCB7bWF4RnJlcSxzZXQyQXZlLHNldDNBdmUsc2V0NEF2ZX0gPSB0aGlzLm11c2ljLmZldGNoTmV3RnJlcXVlbmNpZXMoKTtcblxuICAgIHRoaXMuc3BoZXJlLmNvbG9yU3dpdGNoKG1heEZyZXEpIFxuXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IDU7IGkrKyl7XG4gICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLnNvbWUoKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmKGNoaWxkLm5hbWUgPT09IGkudG9TdHJpbmcoKSl7XG4gICAgICAgICAgaWYoY2hpbGQucG9zaXRpb24ueiA+PSA4KXtcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uLnogPSA0O1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUoY2hpbGQpXG4gICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIGlmKGkgPT09IDEpIHRoaXMua2V5MS5tb3ZlRm9yd2FyZCh0aGlzLmtleXNwZWVkKTtcbiAgICAgICAgICAgIGlmIChpID09PSAyKSB0aGlzLmtleTIubW92ZUZvcndhcmQodGhpcy5rZXlzcGVlZCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMykgdGhpcy5rZXkzLm1vdmVGb3J3YXJkKHRoaXMua2V5c3BlZWQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDQpIHRoaXMua2V5NC5tb3ZlRm9yd2FyZCh0aGlzLmtleXNwZWVkKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaWYobWF4RnJlcSA9PT0gMjU1KXtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua2V5MS5zcGhlcmVTaGFwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHNldDJBdmUgPiAxODApe1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5rZXkyLnNwaGVyZVNoYXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoc2V0M0F2ZSA+IDE1MCAmJiBzZXQzQXZlIDwgMTgwKXtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua2V5My5zcGhlcmVTaGFwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZXQ0QXZlID4gMTIwICYmIHNldDRBdmUgPCAxODApIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua2V5NC5zcGhlcmVTaGFwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNwZWVkVXAoKTtcblxuXG5cbiAgICB0aGlzLmtleUNoZWNrKCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gICAgICAgIHRoaXMuc3BoZXJlLnNwaGVyZVNoYXBlLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgICAgICAgdGhpcy5zcGhlcmUuc3BoZXJlU2hhcGUucm90YXRpb24ueSArPSAwLjAxO1xuXG4gICAgdGhpcy5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMuYW5pbWF0ZSApO1xuICB9XG5cbiAgc3BlZWRVcCgpe1xuICAgIGxldCBjdXJUaW1lID0gcGFyc2VGbG9hdCh0aGlzLm11c2ljLm1lZGlhRWxlbWVudC5jdXJyZW50VGltZS50b0ZpeGVkKDIpKTtcblxuICAgIGlmICh0aGlzLm11c2ljTWFya2Vyc1swXSA8PSBjdXJUaW1lKSB7XG4gICAgICB0aGlzLmtleXNwZWVkICs9IDAuMDE7XG4gICAgICB0aGlzLm11c2ljTWFya2Vycy5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIGtleUNoZWNrKCl7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wbGF5ZXJJbnB1dC5rZXkxWzBdID09PSB0cnVlICYmXG4gICAgICAodGhpcy5rZXkxLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPj0gNy40ICYmXG4gICAgICAgIHRoaXMua2V5MS5zcGhlcmVTaGFwZS5wb3NpdGlvbi56IDw9IDcuOClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcklucHV0LmtleTFbMV0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAyMDtcbiAgICAgICAgR2FtZS5zY29yZVVwZGF0ZSh0aGlzLnNjb3JlKTtcbiAgICAgICAgdGhpcy5rZXkxLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPSA0O1xuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmtleTEuc3BoZXJlU2hhcGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMucGxheWVySW5wdXQua2V5MlswXSA9PT0gdHJ1ZSAmJlxuICAgICAgKHRoaXMua2V5Mi5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID49IDcuNCAmJlxuICAgICAgICB0aGlzLmtleTIuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA8PSA3LjgpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJJbnB1dC5rZXkyWzFdID09PSAxKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjA7XG4gICAgICAgIEdhbWUuc2NvcmVVcGRhdGUodGhpcy5zY29yZSk7XG4gICAgICAgIHRoaXMua2V5Mi5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID0gNDtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rZXkyLnNwaGVyZVNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnBsYXllcklucHV0LmtleTNbMF0gPT09IHRydWUgJiZcbiAgICAgICh0aGlzLmtleTMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA+PSA3LjQgJiZcbiAgICAgICAgdGhpcy5rZXkzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPD0gNy44KVxuICAgICkge1xuICAgICAgaWYgKHRoaXMucGxheWVySW5wdXQua2V5M1sxXSA9PT0gMSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDIwO1xuICAgICAgICBHYW1lLnNjb3JlVXBkYXRlKHRoaXMuc2NvcmUpO1xuICAgICAgICB0aGlzLmtleTMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA9IDQ7XG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMua2V5My5zcGhlcmVTaGFwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5wbGF5ZXJJbnB1dC5rZXk0WzBdID09PSB0cnVlICYmXG4gICAgICAodGhpcy5rZXk0LnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPj0gNy40ICYmXG4gICAgICAgIHRoaXMua2V5NC5zcGhlcmVTaGFwZS5wb3NpdGlvbi56IDw9IDcuOClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcklucHV0LmtleTRbMV0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAyMDtcbiAgICAgICAgR2FtZS5zY29yZVVwZGF0ZSh0aGlzLnNjb3JlKTtcbiAgICAgICAgdGhpcy5rZXk0LnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPSA0O1xuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmtleTQuc3BoZXJlU2hhcGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgc2V0Q2FtZXJhKCl7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICA5MCxcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LFxuICAgICAgMC4xLFxuICAgICAgMTAwMFxuICAgICk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwOyAvL3JldHVybiB0byAxMFxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAyOyAvLyByZXR1cm4gdG8gMlxuICB9XG5cbiAgc3RvcEFuaW1hdGlvbigpe1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmlkKTtcbiAgfVxuXG5cbiAgcmVuZGVyRnJhbWUobXVzaWMpe1xuICAgIHRoaXMubXVzaWMgPSBtdXNpY1xuICAgIGxldCBtdXNpY0R1cmF0aW9uID0gdGhpcy5tdXNpYy5tZWRpYUVsZW1lbnQuZHVyYXRpb247XG5cbiAgICBsZXQgbXVzaWNUaW1lRGl2ID0gcGFyc2VGbG9hdCgobXVzaWNEdXJhdGlvbiAvIDQpLnRvRml4ZWQoMikpO1xuXG4gICAgdGhpcy5tdXNpY01hcmtlcnMgPSBbbXVzaWNUaW1lRGl2LCBtdXNpY1RpbWVEaXYgKiAyLCBtdXNpY1RpbWVEaXYgKiAzXTtcblxuICAgIHRoaXMuaW5HYW1lRWxlbWVudHMoKTtcbiAgICAgICBcbiAgICAgICAgXG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9