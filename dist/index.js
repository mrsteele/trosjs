"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tors = function () {
  function Tors() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Tors);

    // a local reference to everything that is in our array
    this._raw = arr;

    // the order (just Int[])
    this.order = arr.map(function (x, y) {
      return y;
    });
  }

  // gets the array in the current order


  _createClass(Tors, [{
    key: "arr",
    get: function get() {
      var _this = this;

      return this.order.map(function (i) {
        return _this._raw[i];
      });
    }
  }]);

  return Tors;
}();

function createTors(arr) {
  return new Tors(arr);
}

/**
 * IDEAS:
 * - tors.next()
 */

exports.default = createTors;