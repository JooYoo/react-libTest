'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".YuButton-module_button__1QH5E {\n  margin: 10px;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 20px;\n}\n";
var styleModule$1 = {"button":"YuButton-module_button__1QH5E"};
styleInject(css_248z$2);

var YuButton = function YuButton(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'click me' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    className: styleModule$1.button
  }, text));
};

var css_248z$1 = ".ButtonEclipse-module_button__2hMnK {\n  height: 5vmin;\n  width: 5vmin;\n  margin: 10px;\n  border-radius: 50%;\n  font-size: 20px;\n}\n";
var style = {"button":"ButtonEclipse-module_button__2hMnK"};
styleInject(css_248z$1);

var ButtonEclipse = function ButtonEclipse(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '+' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    className: style.button
  }, text));
};

var css_248z = ".YuCard-module_card-container__1ZQ2d {\n  margin: 10px;\n  border-radius: 10px;\n  height: 300px;\n  width: 200px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.YuCard-module_card-container__1ZQ2d:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.YuCard-module_card-header__59KbY {\n  padding: 15px;\n}\n";
var styleModule = {"card-container":"YuCard-module_card-container__1ZQ2d","card-header":"YuCard-module_card-header__59KbY"};
styleInject(css_248z);

var YuCard = function YuCard(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Card' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styleModule['card-container']
  }, /*#__PURE__*/React__default['default'].createElement("h3", {
    className: styleModule['card-header']
  }, text));
};

/* eslint-disable import/no-anonymous-default-export */

var components = function components() {
  return {
    YuButton: YuButton,
    ButtonEclipse: ButtonEclipse,
    YuCard: YuCard
  };
};

var index = components();

module.exports = index;
