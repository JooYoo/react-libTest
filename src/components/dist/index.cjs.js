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

var css_248z$2 = ".ButtonEclipse-module_button__gQA4H {\n  height: 50px;\n  width: 50px;\n  margin: 20px;\n  border-radius: 50%;\n  font-size: 30px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); }\n  .ButtonEclipse-module_button__gQA4H:active {\n    border-color: rgba(0, 0, 0, 0.1);\n    box-shadow: unset; }\n";
var style$2 = {"button":"ButtonEclipse-module_button__gQA4H"};
styleInject(css_248z$2);

var ButtonEclipse = function ButtonEclipse(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '+' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    className: style$2.button
  }, text));
};

var css_248z$1 = ".YuButton-module_button__Vo6Uo {\n  margin: 15px;\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.8);\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8); }\n  .YuButton-module_button__icon__2HxsO {\n    margin-left: 10px;\n    font-size: 18px;\n    filter: drop-shadow(1px 1.5px 1.5px); }\n  .YuButton-module_button__Vo6Uo:active {\n    border: 2px solid rgba(0, 0, 0, 0.2);\n    box-shadow: unset; }\n";
var style$1 = {"button":"YuButton-module_button__Vo6Uo","button__icon":"YuButton-module_button__icon__2HxsO"};
styleInject(css_248z$1);

var YuButton = function YuButton(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'click me' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    className: style$1.button
  }, text, /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$1['button__icon']
  }, "\u25BC")));
};

var css_248z = ".YuCard-module_card-container__1XGRU {\n  margin: 10px;\n  border-radius: 10px;\n  height: 300px;\n  width: 200px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s; }\n  .YuCard-module_card-container__1XGRU:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n  .YuCard-module_card-container__1XGRU .YuCard-module_card-header__SskPV {\n    padding: 15px; }\n";
var style = {"card-container":"YuCard-module_card-container__1XGRU","card-header":"YuCard-module_card-header__SskPV"};
styleInject(css_248z);

var YuCard = function YuCard(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Card' : _ref$text;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: style['card-container']
  }, /*#__PURE__*/React__default['default'].createElement("h3", {
    className: style['card-header']
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
