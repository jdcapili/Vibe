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

var Controls = function Controls(scene) {
  _classCallCheck(this, Controls);

  var loader = new THREE.FontLoader();
  var that = this;
  var testdata = loader.load("assets/Dream MMA_Regular.typeface.json", function (font) {
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
    that.titleRender = new THREE.Mesh(title, materials);
    that.titleRender.name = "title";
    that.titleRender.position.z = 4;
    that.titleRender.position.x = -2.25;
    that.titleRender.position.y = 5; // titleRender.rotation.x = 0.5;
    // titleRender.rotation.y = 0.5;

    scene.add(that.titleRender);
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 3, 2);
    window.light = light;
    scene.add(light);
  });
  console.log(this.titleRender);
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

      document.addEventListener("keydown", function (e) {
        if (e.which === 32) {
          debugger;

          if (!_this.gamePaused) {
            debugger;

            _this.music.mediaElement.pause();

            _this.visualizer.stopAnimation();

            _this.gamePaused = true;
          } else if (_this.gamePaused) {
            debugger;

            _this.music.mediaElement.play();

            _this.visualizer.animate();

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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/game.js");
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
    window.controls = this.controls;
    window.scene = this.scene;
    this.camera = new THREE.PerspectiveCamera(90, this.canvas.width / this.canvas.height, 0.1, 1000);
    this.container = document.getElementsByClassName("game-container")[0];
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.line = new _panel__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.scene.add(this.line.line);
    this.keyspeed = 0.05;
    window.renderer = this.renderer;
    this.init();
    this.animate = this.animate.bind(this);
    this.id;
    window.addEventListener('resize', this.onWindowResize, false);
  }

  _createClass(Visualizer, [{
    key: "onWindowResize",
    value: function onWindowResize() {
      this.container = document.getElementsByClassName("game-container")[0];
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
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
    key: "init",
    value: function init() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2lucHV0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva2V5MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NwaGVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlzdWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmNzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsIkdhbWUiLCJBdWRpb1N5bnRoIiwic29uZ1VybCIsImxpc3RlbmVyIiwiVEhSRUUiLCJBdWRpb0xpc3RlbmVyIiwiYXVkaW8iLCJBdWRpbyIsIm1lZGlhRWxlbWVudCIsImF1dG9wbGF5Iiwic2V0TWVkaWFFbGVtZW50U291cmNlIiwiYW5hbHlzZXIiLCJBdWRpb0FuYWx5c2VyIiwiZ2V0RnJlcXVlbmN5RGF0YSIsIm5lZWRzVXBkYXRlIiwic2V0MSIsImRhdGEiLCJzbGljZSIsInNldDIiLCJzZXQzIiwic2V0NCIsInNldDJTdW0iLCJyZWR1Y2UiLCJhIiwiYiIsInNldDJBdmUiLCJsZW5ndGgiLCJzZXQzU3VtIiwic2V0M0F2ZSIsInNldDRTdW0iLCJzZXQ0QXZlIiwibWF4RnJlcSIsIkNvbnRyb2xzIiwic2NlbmUiLCJsb2FkZXIiLCJGb250TG9hZGVyIiwidGhhdCIsInRlc3RkYXRhIiwibG9hZCIsImZvbnQiLCJ0aXRsZSIsIlRleHRHZW9tZXRyeSIsInNpemUiLCJoZWlnaHQiLCJjdXJ2ZVNlZ21lbnRzIiwibWF0ZXJpYWxzIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwidGl0bGVSZW5kZXIiLCJNZXNoIiwibmFtZSIsInBvc2l0aW9uIiwieiIsIngiLCJ5IiwiYWRkIiwibGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2V0IiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdG9wQnV0dG9uIiwic2NvcmUiLCJzY29yZUNhcmQiLCJpbm5lclRleHQiLCJ2aXN1YWxJbml0IiwiY3JlYXRlU29uZ0xpc3QiLCJnYW1lUGF1c2VkIiwicGF1c2VHYW1lIiwiZSIsIndoaWNoIiwibXVzaWMiLCJwYXVzZSIsInZpc3VhbGl6ZXIiLCJzdG9wQW5pbWF0aW9uIiwicGxheSIsImFuaW1hdGUiLCJzb25nTGlzdCIsImF1ZGlvTGlzdCIsImZvckVhY2giLCJsaXN0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJvbmNsaWNrIiwiVmlzdWFsaXplciIsInNvbmdTZWxlY3Rpb24iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwicmVuZGVyRnJhbWUiLCJQbGF5ZXJJbnB1dCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIktleU9uZSIsInN0YXJ0UG9zIiwiZ2VvbWV0cnkiLCJTcGhlcmVHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJzcGhlcmVTaGFwZSIsIm1vdmVGb3J3YXJkIiwiYmluZCIsImtleXNwZWVkIiwiUGFuZWwiLCJzdGVwIiwiZmxvb3IiLCJHZW9tZXRyeSIsImZsb29yTWF0IiwiTGluZUJhc2ljTWF0ZXJpYWwiLCJpIiwidmVydGljZXMiLCJwdXNoIiwiVmVjdG9yMyIsImxpbmUiLCJMaW5lIiwiTGluZVNlZ21lbnRzIiwiU3BoZXJlIiwiY29sb3JUaWNrZXIiLCJ2ZXJ0ZXhDb2xvcnMiLCJGYWNlQ29sb3JzIiwiZHluYW1pYyIsIm51bVNpZGVzIiwiZmFjZXMiLCJ2ZXJ0SW5kZXgiLCJDb2xvciIsInJSYW5kb20iLCJNYXRoIiwicmFuZG9tIiwiZ1JhbmRvbSIsImJSYW5kb20iLCJzZXRSR0IiLCJlbGVtZW50c05lZWRVcGRhdGUiLCJwbGF5ZXJJbnB1dCIsIlNjZW5lIiwiY29udHJvbHMiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpZHRoIiwiY29udGFpbmVyIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5pdCIsImlkIiwib25XaW5kb3dSZXNpemUiLCJmZXRjaE5ld0ZyZXF1ZW5jaWVzIiwic3BoZXJlIiwiY29sb3JTd2l0Y2giLCJjaGlsZHJlbiIsInNvbWUiLCJjaGlsZCIsInRvU3RyaW5nIiwicmVtb3ZlIiwic3BlZWRVcCIsImtleUNoZWNrIiwicmVuZGVyIiwicm90YXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJUaW1lIiwicGFyc2VGbG9hdCIsImN1cnJlbnRUaW1lIiwidG9GaXhlZCIsIm11c2ljTWFya2VycyIsInNoaWZ0Iiwic2NvcmVVcGRhdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm11c2ljRHVyYXRpb24iLCJkdXJhdGlvbiIsIm11c2ljVGltZURpdiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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O0FBQ0Q7OztnQ0FHVzdFLEssRUFBTTtBQUNoQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFJb0csYUFBYSxHQUFHLEtBQUtwRyxLQUFMLENBQVduRSxZQUFYLENBQXdCd0ssUUFBNUM7QUFFQSxVQUFJQyxZQUFZLEdBQUdULFVBQVUsQ0FBQyxDQUFDTyxhQUFhLEdBQUcsQ0FBakIsRUFBb0JMLE9BQXBCLENBQTRCLENBQTVCLENBQUQsQ0FBN0I7QUFFQSxXQUFLQyxZQUFMLEdBQW9CLENBQUNNLFlBQUQsRUFBZUEsWUFBWSxHQUFHLENBQTlCLEVBQWlDQSxZQUFZLEdBQUcsQ0FBaEQsQ0FBcEI7QUFLQSxXQUFLakcsT0FBTDtBQUVEOzs7Ozs7QUFHWVEseUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsTkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vc3JjL2pzL2dhbWUuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyBkZWJ1Z2dlclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbi8vIHRoaXMucGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5LWJ1dHRvblwiKTtcbn0pO1xuXG5cbiIsImNsYXNzIEF1ZGlvU3ludGgge1xuICBjb25zdHJ1Y3Rvcihzb25nVXJsKXtcbiAgICB0aGlzLmxpc3RlbmVyID0gbmV3IFRIUkVFLkF1ZGlvTGlzdGVuZXIoKTtcblxuXG4gICAgXG5cblxuICBcbiAgICB0aGlzLmF1ZGlvID0gbmV3IFRIUkVFLkF1ZGlvKHRoaXMubGlzdGVuZXIpO1xuICAgIHdpbmRvdy5hdWRpbyA9IHRoaXMuYXVkaW87XG4gICAgdGhpcy5tZWRpYUVsZW1lbnQgPSBuZXcgQXVkaW8oXG4gICAgICBgYXNzZXRzLyR7c29uZ1VybH1gXG4gICAgKTtcbiAgICBcbiAgICB0aGlzLm1lZGlhRWxlbWVudC5hdXRvcGxheSA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5tZWRpYUVsZW1lbnQuaGFzUGxheWJhY2tDb250cm9sID0gdHJ1ZTtcbiAgICAvLyB0aGlzLm1lZGlhRWxlbWVudC5wbGF5KCk7XG4gICAgXG4gICAgXG4gICAgLy8gdGhpcy5iYXNzID0gdGhpcy5hdWRpby5jb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIC8vIHRoaXMuYmFzcy50eXBlID0gXCJsb3dzaGVsZlwiO1xuICAgIC8vIHRoaXMuYmFzcy5mcmVxdWVuY3kudmFsdWUgPSAxMDAwOyAvLyBzd2l0Y2hlcyB0byA0MDAgaW4gVUlcbiAgICAvLyB0aGlzLmJhc3MuZ2Fpbi52YWx1ZSA9IC0wLjU7XG4gICAgLy8gdGhpcy5hdWRpby5zZXRGaWx0ZXIodGhpcy5iYXNzKTtcbiAgICAvLyAvLyB0aGlzLmJhc3MuY29ubmVjdCh0aGlzLmF1ZGlvLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIC8vIHdpbmRvdy5iYXNzID0gdGhpcy5iYXNzO1xuICAgIHRoaXMuYXVkaW8uc2V0TWVkaWFFbGVtZW50U291cmNlKHRoaXMubWVkaWFFbGVtZW50KTtcbiAgICB0aGlzLmFuYWx5c2VyID0gbmV3IFRIUkVFLkF1ZGlvQW5hbHlzZXIodGhpcy5hdWRpbywgMTAyNCk7XG4gICAgd2luZG93LmFuYWx5c2VyID0gdGhpcy5hbmFseXNlcjtcbiAgfVxuXG4gIGZldGNoTmV3RnJlcXVlbmNpZXMoKXtcbiAgICBcbiAgICB0aGlzLmFuYWx5c2VyLmdldEZyZXF1ZW5jeURhdGEoKTtcbiAgICB0aGlzLmFuYWx5c2VyLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIGxldCBzZXQxID0gdGhpcy5hbmFseXNlci5kYXRhLnNsaWNlKDAsIDE2KTtcbiAgICBsZXQgc2V0MiA9IHRoaXMuYW5hbHlzZXIuZGF0YS5zbGljZSgxNiwgMzIpO1xuICAgIGxldCBzZXQzID0gdGhpcy5hbmFseXNlci5kYXRhLnNsaWNlKDMyLCA0OCk7XG4gICAgbGV0IHNldDQgPSB0aGlzLmFuYWx5c2VyLmRhdGEuc2xpY2UoNDgsIDYyKTtcblxuICAgIGxldCBzZXQyU3VtID0gc2V0Mi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBsZXQgc2V0MkF2ZSA9IHNldDJTdW0gLyBzZXQyLmxlbmd0aDtcblxuICAgIGxldCBzZXQzU3VtID0gc2V0My5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBsZXQgc2V0M0F2ZSA9IHNldDNTdW0gLyBzZXQzLmxlbmd0aDtcblxuICAgIGxldCBzZXQ0U3VtID0gc2V0NC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBsZXQgc2V0NEF2ZSA9IHNldDRTdW0gLyBzZXQ0Lmxlbmd0aDtcbiAgICBsZXQgbWF4RnJlcSA9IHNldDFbMl07XG5cbiAgICByZXR1cm4ge21heEZyZXEsc2V0MkF2ZSxzZXQzQXZlLHNldDRBdmV9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvU3ludGg7IiwiY2xhc3MgQ29udHJvbHMge1xuICBjb25zdHJ1Y3RvcihzY2VuZSl7XG4gICAgbGV0IGxvYWRlciA9IG5ldyBUSFJFRS5Gb250TG9hZGVyKCk7IFxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdGVzdGRhdGEgPSBsb2FkZXIubG9hZChcImFzc2V0cy9EcmVhbSBNTUFfUmVndWxhci50eXBlZmFjZS5qc29uXCIsIGZ1bmN0aW9uKGZvbnQpIHtcbiAgICAgIGxldCB0aXRsZSA9IG5ldyBUSFJFRS5UZXh0R2VvbWV0cnkoXCJ2aWJlXCIsIHtcbiAgICAgICAgZm9udDogZm9udCxcbiAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICBjdXJ2ZVNlZ21lbnRzOiAzLFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgbGV0IG1hdGVyaWFscyA9IFtcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MjY5MGY3LCBmbGF0U2hhZGluZzogdHJ1ZSB9KSwgLy8gZnJvbnRcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDY0ZDkyIH0pIC8vIHNpZGVcbiAgICAgIF07XG5cbiAgICAgIHRoYXQudGl0bGVSZW5kZXIgPSBuZXcgVEhSRUUuTWVzaCh0aXRsZSwgbWF0ZXJpYWxzKTtcbiAgICAgIHRoYXQudGl0bGVSZW5kZXIubmFtZSA9IFwidGl0bGVcIjtcblxuICAgICAgdGhhdC50aXRsZVJlbmRlci5wb3NpdGlvbi56ID0gNDtcbiAgICAgIHRoYXQudGl0bGVSZW5kZXIucG9zaXRpb24ueCA9IC0yLjI1O1xuICAgICAgdGhhdC50aXRsZVJlbmRlci5wb3NpdGlvbi55ID0gNTtcbiAgICAgIC8vIHRpdGxlUmVuZGVyLnJvdGF0aW9uLnggPSAwLjU7XG4gICAgICAvLyB0aXRsZVJlbmRlci5yb3RhdGlvbi55ID0gMC41O1xuICAgICAgc2NlbmUuYWRkKHRoYXQudGl0bGVSZW5kZXIpO1xuXG4gICAgICBsZXQgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICBsaWdodC5wb3NpdGlvbi5zZXQoMiwgMywgMik7XG4gICAgICB3aW5kb3cubGlnaHQgPSBsaWdodDtcbiAgICAgIHNjZW5lLmFkZChsaWdodCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy50aXRsZVJlbmRlcilcbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sczsiLCJpbXBvcnQgVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInO1xuaW1wb3J0IEF1ZGlvU3ludGggZnJvbSBcIi4vYXVkaW9cIjtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblxuICAgIHRoaXMuc3RvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcC1idXR0b25cIik7XG4gICAgdGhpcy5hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmUtdmFsdWVcIik7XG4gICAgXG4gICAgc2NvcmVDYXJkLmlubmVyVGV4dCA9IHRoaXMuc2NvcmU7XG4gICAgdGhpcy52aXN1YWxJbml0KCk7XG4gICAgdGhpcy5jcmVhdGVTb25nTGlzdCgpO1xuXG4gICAgdGhpcy5nYW1lUGF1c2VkID0gbnVsbDtcblxuICAgIHRoaXMucGF1c2VHYW1lKCk7XG4gICAgXG4gIH1cblxuICBwYXVzZUdhbWUoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIGlmKGUud2hpY2ggPT09IDMyKXtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYoIXRoaXMuZ2FtZVBhdXNlZCl7XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICB0aGlzLm11c2ljLm1lZGlhRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgIHRoaXMudmlzdWFsaXplci5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5nYW1lUGF1c2VkKXtcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIHRoaXMubXVzaWMubWVkaWFFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICB0aGlzLnZpc3VhbGl6ZXIuYW5pbWF0ZSgpO1xuICAgICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVNvbmdMaXN0KCl7XG4gICAgbGV0IHNvbmdMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb25nLWxpc3RcIik7XG4gICAgbGV0IGF1ZGlvTGlzdCA9IFtcbiAgICAgIFwiRG9udCBXYW5uYSBLbm93Lm1wM1wiLFxuICAgICAgXCJGZWVsIFNvIENsb3NlLm1wM1wiLFxuICAgICAgXCJJZiBJIExvc2UgTXlzZWxmLm1wM1wiLFxuICAgICAgXCJTdW5kYXkgTW9ybmluZy5tcDNcIlxuICAgIF07XG4gICAgYXVkaW9MaXN0LmZvckVhY2goKHNvbmdVcmwpID0+IHtcbiAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpc3RJdGVtLmFwcGVuZChzb25nVXJsKTtcbiAgICAgIGxpc3RJdGVtLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnBsYXkoc29uZ1VybCk7XG4gICAgICBzb25nTGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgIH0pXG5cbiAgfVxuXG4gIHN0YXRpYyBzY29yZVVwZGF0ZShzY29yZSl7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmUtdmFsdWVcIik7XG4gICAgc2NvcmVDYXJkLmlubmVyVGV4dCA9IHNjb3JlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NvcmUpXG4gIH1cblxuICB2aXN1YWxJbml0KCl7ICBcbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXplcih0aGlzLmNhbnZhcywgdGhpcy5zY29yZSk7XG4gIH1cblxuICBwbGF5KHNvbmdVcmwpe1xuXG4gICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpb1N5bnRoKHNvbmdVcmwpO1xuICAgIGxldCBzb25nU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvbmctc2VsZWN0aW9uXCIpWzBdO1xuICAgIHNvbmdTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgXG4gICAgXG4gICAgdGhpcy5tdXNpYy5tZWRpYUVsZW1lbnQucGxheSgpO1xuICAgIHdpbmRvdy52aXN1YWxpemVyID0gdGhpcy52aXN1YWxpemVyO1xuICAgIHRoaXMudmlzdWFsaXplci5yZW5kZXJGcmFtZSh0aGlzLm11c2ljKTtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJmdW5jdGlvbiBQbGF5ZXJJbnB1dCgpe1xuICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgdGhhdC5rZXkxID0gW2ZhbHNlLCAwXTtcbiAgdGhhdC5rZXkyID0gW2ZhbHNlLCAwXTtcbiAgdGhhdC5rZXkzID0gW2ZhbHNlLCAwXTtcbiAgdGhhdC5rZXk0ID0gW2ZhbHNlLCAwXTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICBpZihlLmtleSA9PT0gXCJkXCIpIHtcbiAgICAgIHRoYXQua2V5MVswXSA9IHRydWU7XG4gICAgICB0aGF0LmtleTFbMV0gKz0gMTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQua2V5MSk7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSBcImZcIikge1xuICAgICAgdGhhdC5rZXkyWzBdID0gdHJ1ZTtcbiAgICAgIHRoYXQua2V5MlsxXSArPSAxO1xuICAgICAgLy8gY29uc29sZS5sb2codGhhdC5rZXkxKTtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwialwiKSB7XG4gICAgICB0aGF0LmtleTNbMF0gPSB0cnVlO1xuICAgICAgdGhhdC5rZXkzWzFdICs9IDE7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGF0LmtleTEpO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJrXCIpIHtcbiAgICAgIHRoYXQua2V5NFswXSA9IHRydWU7XG4gICAgICB0aGF0LmtleTRbMV0gKz0gMTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQua2V5MSk7XG4gICAgfVxuXG4gICAgaWYoZS53aGljaCA9PT0gMzIpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSlcblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiZFwiKSB0aGF0LmtleTEgPSBbZmFsc2UsMF07XG4gICAgaWYgKGUua2V5ID09PSBcImZcIikgdGhhdC5rZXkyID0gW2ZhbHNlLCAwXTtcbiAgICBpZiAoZS5rZXkgPT09IFwialwiKSB0aGF0LmtleTMgPSBbZmFsc2UsIDBdO1xuICAgIGlmIChlLmtleSA9PT0gXCJrXCIpIHRoYXQua2V5NCA9IFtmYWxzZSwgMF07XG4gIH0pO1xuXG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcklucHV0OyIsImNsYXNzIEtleU9uZSB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBzdGFydFBvcyxjb2xvcixuYW1lKXtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjUsIDEwLCAxMCk7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogY29sb3JcbiAgICB9KTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgdGhpcy5zcGhlcmVTaGFwZS5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnggPSBzdGFydFBvcztcbiAgICB0aGlzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPSA0O1xuXG4gICAgdGhpcy5tb3ZlRm9yd2FyZCA9IHRoaXMubW92ZUZvcndhcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG1vdmVGb3J3YXJkKGtleXNwZWVkKXtcbiAgICBcbiAgICAgIFxuICAgICAgaWYodGhpcy5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID4gOCl7XG4gICAgICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA9IDQ7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3BoZXJlU2hhcGUucG9zaXRpb24ueiArPSBrZXlzcGVlZDtcbiAgICAgIH1cbiAgICAgIFxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlPbmU7IiwiY2xhc3MgUGFuZWwge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxldCBzaXplID0gMTUsXG4gICAgICBzdGVwID0gMTtcbiAgICBsZXQgZmxvb3IgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcbiAgICBsZXQgZmxvb3JNYXQgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogXCJ3aGl0ZVwiIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IC1zaXplOyBpIDw9IHNpemU7IGkgKz0gc3RlcCkge1xuICAgICAgZmxvb3IudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtc2l6ZSwgLTAuMDQsIGkpKTtcbiAgICAgIGZsb29yLnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoc2l6ZSwgLTAuMDQsIGkpKTtcblxuICAgICAgZmxvb3IudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhpLCAtMC4wNCwgLXNpemUpKTtcbiAgICAgIGZsb29yLnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoaSwgLTAuMDQsIHNpemUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSBuZXcgVEhSRUUuTGluZShmbG9vciwgZmxvb3JNYXQsIFRIUkVFLkxpbmVTZWdtZW50cyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7IiwiY2xhc3MgU3BoZXJlIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnNpemUgPSAzO1xuICAgIHRoaXMuY29sb3JUaWNrZXIgPSAwO1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkodGhpcy5zaXplLCAyMCwgMjApO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgdmVydGV4Q29sb3JzOiBUSFJFRS5GYWNlQ29sb3JzXG4gICAgfSk7XG4gICAgdGhpcy5zcGhlcmVTaGFwZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICAgIHRoaXMuc3BoZXJlU2hhcGUuZHluYW1pYyA9IHRydWU7XG4gICAgICBsZXQgbnVtU2lkZXMgPSB0aGlzLmdlb21ldHJ5LmZhY2VzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2lkZXM7IGkrKykge1xuICAgICAgICBsZXQgdmVydEluZGV4ID0gdGhpcy5nZW9tZXRyeS5mYWNlc1tpXTtcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKDB4ZmZmZmZmKTtcbiAgICAgICAgbGV0IHJSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgIGxldCBnUmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC42NCkgKyAwLjY0O1xuICAgICAgICBsZXQgYlJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAoMSAtIDAuNjQpICsgMC42NDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coW3JSYW5kb20sIGdSYW5kb20sIGJSYW5kb21dKTtcbiAgICAgICAgY29sb3Iuc2V0UkdCKHJSYW5kb20sIGdSYW5kb20sIGJSYW5kb20pO1xuICAgICAgICB2ZXJ0SW5kZXguY29sb3IgPSBjb2xvcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2VvbWV0cnkuZWxlbWVudHNOZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnkgPSAyLjU7XG4gIH1cblxuICBjb2xvclN3aXRjaChtYXhGcmVxKXtcblxuICAgIFxuICAgICAgaWYobWF4RnJlcSA9PT0gMjU1KXtcbiAgICAgICAgbGV0IG51bVNpZGVzID0gdGhpcy5nZW9tZXRyeS5mYWNlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2lkZXM7IGkrKykge1xuICAgICAgICAgIGxldCB2ZXJ0SW5kZXggPSB0aGlzLmdlb21ldHJ5LmZhY2VzW2ldO1xuICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcigweGZmZmZmZik7XG4gICAgICAgICAgbGV0IHJSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgICAgbGV0IGdSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgICAgbGV0IGJSYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjY0KSArIDAuNjQ7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coW3JSYW5kb20sZ1JhbmRvbSxiUmFuZG9tXSlcbiAgICAgICAgICBjb2xvci5zZXRSR0IoclJhbmRvbSwgZ1JhbmRvbSwgYlJhbmRvbSk7XG4gICAgICAgICAgdmVydEluZGV4LmNvbG9yID0gY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLmdlb21ldHJ5LmVsZW1lbnRzTmVlZFVwZGF0ZSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BoZXJlOyIsIi8vIGltcG9ydCB7IFRIUkVFIH0gZnJvbSAnLi4vdGhyZWUnO1xuaW1wb3J0IFNwaGVyZSBmcm9tICcuL3NwaGVyZSc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IFBhbmVsIGZyb20gJy4vcGFuZWwnO1xuaW1wb3J0IEtleU9uZSBmcm9tICcuL2tleTEnO1xuaW1wb3J0IFBsYXllcklucHV0IGZyb20gXCIuL2lucHV0c1wiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuXG5cbmNsYXNzIFZpc3VhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsc2NvcmUpe1xuICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB0aGlzLnBsYXllcklucHV0ID0gbmV3IFBsYXllcklucHV0KCk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcy5zY2VuZSk7XG4gICAgd2luZG93LmNvbnRyb2xzID0gdGhpcy5jb250cm9scztcbiAgICB3aW5kb3cuc2NlbmUgPSB0aGlzLnNjZW5lO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICA5MCxcbiAgICAgICh0aGlzLmNhbnZhcy53aWR0aCkgLyAodGhpcy5jYW52YXMuaGVpZ2h0KSxcbiAgICAgIDAuMSxcbiAgICAgIDEwMDBcbiAgICApO1xuICBcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdhbWUtY29udGFpbmVyXCIpWzBdO1xuICAgXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiB0aGlzLmNhbnZhcyB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCk7XG4gICAgdGhpcy5saW5lID0gbmV3IFBhbmVsKCk7XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saW5lLmxpbmUpO1xuICAgIFxuICAgIHRoaXMua2V5c3BlZWQgPSAwLjA1O1xuXG4gICAgd2luZG93LnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlkO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuXG5cbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCl7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2FtZS1jb250YWluZXJcIilbMF07XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKFxuICAgICAgdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgYW5pbWF0ZSgpe1xuICAgIGxldCB7bWF4RnJlcSxzZXQyQXZlLHNldDNBdmUsc2V0NEF2ZX0gPSB0aGlzLm11c2ljLmZldGNoTmV3RnJlcXVlbmNpZXMoKTtcblxuICAgIHRoaXMuc3BoZXJlLmNvbG9yU3dpdGNoKG1heEZyZXEpIFxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPCA1OyBpKyspe1xuICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uc29tZSgoY2hpbGQpID0+IHtcbiAgICAgIGlmKGNoaWxkLm5hbWUgPT09IGkudG9TdHJpbmcoKSl7XG4gICAgICAgIGlmKGNoaWxkLnBvc2l0aW9uLnogPj0gOCl7XG4gICAgICAgICAgY2hpbGQucG9zaXRpb24ueiA9IDQ7XG4gICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUoY2hpbGQpXG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgaWYoaSA9PT0gMSkgdGhpcy5rZXkxLm1vdmVGb3J3YXJkKHRoaXMua2V5c3BlZWQpO1xuICAgICAgICAgIGlmIChpID09PSAyKSB0aGlzLmtleTIubW92ZUZvcndhcmQodGhpcy5rZXlzcGVlZCk7XG4gICAgICAgICAgaWYgKGkgPT09IDMpIHRoaXMua2V5My5tb3ZlRm9yd2FyZCh0aGlzLmtleXNwZWVkKTtcbiAgICAgICAgICBpZiAoaSA9PT0gNCkgdGhpcy5rZXk0Lm1vdmVGb3J3YXJkKHRoaXMua2V5c3BlZWQpO1xuXG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZihtYXhGcmVxID09PSAyNTUpe1xuICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua2V5MS5zcGhlcmVTaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2V0MkF2ZSA+IDE4MCl7XG4gICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5rZXkyLnNwaGVyZVNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBpZihzZXQzQXZlID4gMTUwICYmIHNldDNBdmUgPCAxODApe1xuICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua2V5My5zcGhlcmVTaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldDRBdmUgPiAxMjAgJiYgc2V0NEF2ZSA8IDE4MCkge1xuICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua2V5NC5zcGhlcmVTaGFwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICAgdGhpcy5zcGVlZFVwKCk7XG5cblxuXG4gICAgdGhpcy5rZXlDaGVjaygpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgICAgICB0aGlzLnNwaGVyZS5zcGhlcmVTaGFwZS5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICAgIHRoaXMuc3BoZXJlLnNwaGVyZVNoYXBlLnJvdGF0aW9uLnkgKz0gMC4wMTtcblxuICAgIHRoaXMuaWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLmFuaW1hdGUgKTtcbiAgfVxuXG4gIHNwZWVkVXAoKXtcbiAgICBsZXQgY3VyVGltZSA9IHBhcnNlRmxvYXQodGhpcy5tdXNpYy5tZWRpYUVsZW1lbnQuY3VycmVudFRpbWUudG9GaXhlZCgyKSk7XG5cbiAgICBpZiAodGhpcy5tdXNpY01hcmtlcnNbMF0gPD0gY3VyVGltZSkge1xuICAgICAgdGhpcy5rZXlzcGVlZCArPSAwLjAxO1xuICAgICAgdGhpcy5tdXNpY01hcmtlcnMuc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICBrZXlDaGVjaygpe1xuICAgIGlmIChcbiAgICAgIHRoaXMucGxheWVySW5wdXQua2V5MVswXSA9PT0gdHJ1ZSAmJlxuICAgICAgKHRoaXMua2V5MS5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID49IDcuNCAmJlxuICAgICAgICB0aGlzLmtleTEuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA8PSA3LjgpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJJbnB1dC5rZXkxWzFdID09PSAxKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjA7XG4gICAgICAgIEdhbWUuc2NvcmVVcGRhdGUodGhpcy5zY29yZSk7XG4gICAgICAgIHRoaXMua2V5MS5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID0gNDtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rZXkxLnNwaGVyZVNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnBsYXllcklucHV0LmtleTJbMF0gPT09IHRydWUgJiZcbiAgICAgICh0aGlzLmtleTIuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA+PSA3LjQgJiZcbiAgICAgICAgdGhpcy5rZXkyLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPD0gNy44KVxuICAgICkge1xuICAgICAgaWYgKHRoaXMucGxheWVySW5wdXQua2V5MlsxXSA9PT0gMSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDIwO1xuICAgICAgICBHYW1lLnNjb3JlVXBkYXRlKHRoaXMuc2NvcmUpO1xuICAgICAgICB0aGlzLmtleTIuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA9IDQ7XG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMua2V5Mi5zcGhlcmVTaGFwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5wbGF5ZXJJbnB1dC5rZXkzWzBdID09PSB0cnVlICYmXG4gICAgICAodGhpcy5rZXkzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPj0gNy40ICYmXG4gICAgICAgIHRoaXMua2V5My5zcGhlcmVTaGFwZS5wb3NpdGlvbi56IDw9IDcuOClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLnBsYXllcklucHV0LmtleTNbMV0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAyMDtcbiAgICAgICAgR2FtZS5zY29yZVVwZGF0ZSh0aGlzLnNjb3JlKTtcbiAgICAgICAgdGhpcy5rZXkzLnNwaGVyZVNoYXBlLnBvc2l0aW9uLnogPSA0O1xuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmtleTMuc3BoZXJlU2hhcGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMucGxheWVySW5wdXQua2V5NFswXSA9PT0gdHJ1ZSAmJlxuICAgICAgKHRoaXMua2V5NC5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID49IDcuNCAmJlxuICAgICAgICB0aGlzLmtleTQuc3BoZXJlU2hhcGUucG9zaXRpb24ueiA8PSA3LjgpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJJbnB1dC5rZXk0WzFdID09PSAxKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjA7XG4gICAgICAgIEdhbWUuc2NvcmVVcGRhdGUodGhpcy5zY29yZSk7XG4gICAgICAgIHRoaXMua2V5NC5zcGhlcmVTaGFwZS5wb3NpdGlvbi56ID0gNDtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rZXk0LnNwaGVyZVNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGluaXQoKXtcblxuICAgIFxuICAgIHRoaXMuc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuc3BoZXJlLnNwaGVyZVNoYXBlKTtcblxuICAgIHRoaXMua2V5MSA9IG5ldyBLZXlPbmUodGhpcy5zY2VuZSwtMS41LFwicmVkXCIsJzEnKTtcbiAgICB0aGlzLmtleTIgPSBuZXcgS2V5T25lKHRoaXMuc2NlbmUsIC0wLjUsXCJncmVlblwiLCcyJyk7XG4gICAgdGhpcy5rZXkzID0gbmV3IEtleU9uZSh0aGlzLnNjZW5lLCAwLjUsXCJibHVlXCIsJzMnKTtcbiAgICB0aGlzLmtleTQgPSBuZXcgS2V5T25lKHRoaXMuc2NlbmUsIDEuNSxcInllbGxvd1wiLCc0Jyk7XG5cbiAgICBcblxuICAgIFxuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwOyAvL3JldHVybiB0byAxMFxuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDI7IC8vIHJldHVybiB0byAyXG4gICAgXG4gICAgXG4gIH1cblxuICBzdG9wQW5pbWF0aW9uKCl7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaWQpO1xuICB9XG5cblxuICByZW5kZXJGcmFtZShtdXNpYyl7XG4gICAgdGhpcy5tdXNpYyA9IG11c2ljXG4gICAgbGV0IG11c2ljRHVyYXRpb24gPSB0aGlzLm11c2ljLm1lZGlhRWxlbWVudC5kdXJhdGlvbjtcblxuICAgIGxldCBtdXNpY1RpbWVEaXYgPSBwYXJzZUZsb2F0KChtdXNpY0R1cmF0aW9uIC8gNCkudG9GaXhlZCgyKSk7XG5cbiAgICB0aGlzLm11c2ljTWFya2VycyA9IFttdXNpY1RpbWVEaXYsIG11c2ljVGltZURpdiAqIDIsIG11c2ljVGltZURpdiAqIDNdO1xuXG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXplcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9