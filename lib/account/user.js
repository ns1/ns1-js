"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NS1Request = require('../NS1_request'),
    RestResource = require('../rest_resource');

var User = function (_RestResource) {
  _inherits(User, _RestResource);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.username;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.get_resource_path();
    }
  }, {
    key: 'reinvite',
    value: function reinvite() {
      return new NS1Request('post', '/account/reinvite/' + this.attributes.username);
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'account/users';
    }
  }]);

  return User;
}(RestResource);

module.exports = User;